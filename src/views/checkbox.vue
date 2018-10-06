<template lang="pug">
    div
        CheckboxGroup(v-model="selectList")
            div(v-for="menuItem in list")
                checkbox(:label="menuItem.menu")
                div(v-for="buttonItem in menuItem.buttonList")
                    checkbox(:label="buttonItem.button")

</template>

<script>
    export default {
        data() {
            return {
                selectList: [],
                list: [{
                    menu: '菜单管理',
                    id: 0,
                    buttonList: [
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                    ]
                },
                {
                    menu: '订单管理',
                    id: 1,
                    buttonList: [
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                    ]
                },
                {
                    menu: '供应商管理',
                    id: 2,
                    buttonList: [
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                        { button: '登录按钮' },
                    ]
                }]
            }
        }
    }
</script>

<style scoped>
    .ml-16 {
      margin-left: 16px;
    }
</style>




