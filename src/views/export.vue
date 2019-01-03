<template lang="pug">
  div
    Button(type="primary", @click="handleExport") 导出
</template>

<script>
    import XLSX from 'xlsx'
    export default {
        data() {
            return {
                data: [
                    ['name', 'sex'],
                    ['zhou', 'man']
                ],
                exportData: [{ "pageSize": 10, "all": null, "pageIndex": 1, "pageStart": 0, "startDate": null, "endDate": null, "sortField": null, "orderType": null, "id": 1388, "userId": 156, "name": "ZTE ZTE A0622", "description": null, "meid": "865897030606019", "phoneNum": "17328858618", "wechatName": "?", "wechatId": "1119799699", "extendOne": "wxid_k581tluknlmv22", "extendTwo": "1.6.8", "extendThree": null, "extendFour": null, "creator": 156, "createTime": 1545546092073, "reviser": null, "updateTime": 1545901171630, "dataStatus": "001", "serialNumber": null, "onlineType": 1, "groupId": 85, "xpStatus": null, "headPic": null, "string_Id": null, "machineId": null, "groupName": "test group", "useName": "部门负责人2", "crowdName": null, "friendsTotal": null }, { "pageSize": 10, "all": null, "pageIndex": 1, "pageStart": 0, "startDate": null, "endDate": null, "sortField": null, "orderType": null, "id": 1387, "userId": 156, "name": "ZTE ZTE A0622", "description": null, "meid": "865897030746450", "phoneNum": "17328854778", "wechatName": "陈曦儿", "wechatId": "982647486", "extendOne": "wxid_s8gankm2t1e122", "extendTwo": "1.6.8", "extendThree": null, "extendFour": null, "creator": 156, "createTime": 1545545419570, "reviser": null, "updateTime": 0, "dataStatus": "001", "serialNumber": null, "onlineType": 1, "groupId": 54, "xpStatus": null, "headPic": null, "string_Id": null, "machineId": null, "groupName": "test me", "useName": "部门负责人2", "crowdName": null, "friendsTotal": null }]
            }
        },
        methods: {
            handleExport() {
                const exportTime = ['导出时间: 2018-01-02'];
                const header = ['设备分组', '设备手机号', '设备好友数', '个销账号'];
                const data = this.exportData.map(({ groupName, phoneNum, useName, serialNumber }) => ({ '设备分组': groupName, '设备手机号': phoneNum, '设备好友数': useName, '个销账号': serialNumber }));
                console.log(data)
                this._export(data);
            },
            _export(data, header) {
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.json_to_sheet(data);
                XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
                return XLSX.writeFile(wb, 'weimei.xlsx');
            }
        }
    }
</script>

<style scoped>
    #box {
      min-height: 1000px;
    }
</style>
