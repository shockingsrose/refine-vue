<template lang="pug">
    Table(:columns="columns", :data="datas")
</template>

<script>
import Promise from 'bluebird';
import order from '@/api/order';


export default {
    data() {
        return {
            message: 'this is promise demo',
            columns: [{
                title: '名字',
                key: 'name',
                align: "center"

            },
            {
                title: '年龄',
                key: 'age',
                align: "center"
            }
            ],
            datas: [],
        }
    },
    mounted() {
        const infoList = order.getInfoList()
        const picList = { picList: order.getPicList() }

        const urlList = Promise.map(infoList, (item) => {
            return Promise.try(() => {
                if (!!item.name)
                    return order.getUrl(item.name)
            })
        }).then((result) => {
            console.log(`Promise.map得到的结果：${result}`);
            return result
        }).catch((err) => {

        });
        console.log(`urlList:${urlList.then((data) => data)}`);
        let promiseList = [];
        infoList.then((data) => {
            data.map((item) => {
                promiseList.push(order.getUrl(item.name))
            })
            Promise.all(promiseList).then((result) => {
                console.log(`Promise.all得到的结果：${result}`);
            })
        })



        Promise.props(Object.assign({ infoList }, picList)).then((data) => {
            console.log(data);
            this.datas = data.infoList;
        }).catch((err) => {

        });
    }

}
</script>

