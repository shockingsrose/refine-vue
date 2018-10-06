<template lang="pug">
    div(style="border:1px solid #000;margin-bottom:20px;")
        p 班级:{{rows.classes}} 学校:{{rows.university}}
        Button(type="info", @click="addInfo") 末尾增加一条数据
        Button(type="info", @click="addInfoAt2") 中间增加一条数
        div(v-for="(item,index) in list", :key="item.id")
            p {{item.name}}
            Button(type="info", @click="changeName(index)") 改名字
</template>

<script>
    export default {
        created() {
            console.log('slot_child created');
        },
        props: ['rows'],
        data() {
            return {
                message: 'this is a slot_child',
                status: true,
                list: [
                    { name: 'test1', id: 1 },
                    { name: 'test2', id: 2 },
                    { name: 'test3', id: 3 },
                ],
                name: 'test4',
                id: 4,
            }
        },
        methods: {
            changeName(index) {
                this.list[index].name = Math.random();
            },
            addInfo() {
                this.list.push({ name: this.name, id: this.id });
                this.id++;
                this.name = `test${this.id}`
            },
            addInfoAt2() {
                this.list.splice(2, 0, { name: this.name, id: this.id })
                this.id++;
                this.name = `test${this.id}`
            }

        },
        beforeDestroy() {
            console.log('slot child beforeDestroy');
        }
    }
</script>
