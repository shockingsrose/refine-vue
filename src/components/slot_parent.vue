<template lang="pug">
    div
        slotChild(:rows="row")
            template(slot='slot1' slot-scope='props')
                div 子组件的message:{{props.message}}
                div 子组件的status:{{props.status}}
                p(v-html="assignData(props.message)")
        Button(type="primary" @click="modalState = true") 显示modal框
        Modal(
            v-model="modalState" 
            title="合并发货"
            @on-ok="ok"
            @on-cancel="cancel"
            )
            Row(:gutter="32")
                Col(span="8")
                    div.list-container
                        div.list-item(v-for="i in 50" :key="i") 月月平台({{i}})
                Col(span="16")
                    Select(style="width:200px;margin-bottom:30px;" v-model="selectState" placeholder="选择快递")
                        Option(v-for="i in 10" :key="i" :value='renderExpress(i)') 顺丰快递{{i}}
                    Input(type="textarea" v-model="text1" placeholder="输入快递单号，逗号隔开")
            div.clearfix

</template>

<script>

import slotChild from './slot_child';
export default {
    components: { slotChild },
    data() {
        return {
            row: {
                name: 'parent',
                age: 12
            },
            modalState: false,
            selectState: "",
            text1: ''
        }
    },
    methods: {
        assignData(value) {
            return `通过v-html调用function，渲染到页面中：${value}`;
        },
        ok() {
            this.$Message.success('click ok');
            this.modalsState = false
        },
        cancel() {
            this.$Message.warning('click cancel');
            this.modalsState = false
        },
        renderExpress(value) {
            return `天天快递：${value}`
        }

    }

}
</script>
<style  scoped>
.list-container {
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #d7d7d7;
}
.list-item {
  line-height: 25px;
  background: #fff;
  border-bottom: 1px solid #d7d7d7;
  cursor: pointer;
}

.list-item:hover {
  background-color: #d7d7d7;
}
</style>

