<template lang="pug">
    div
        div(v-for="item in dataList", :key="item")
            slot(:row="item", name='slot1')
</template>

<script> 
	export default {
		props: {
			data: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
			}
		},
		computed: {
			dataList() {
				return this.data.map((item) => {
					return Object.assign(item, { num: item.id + 1 })
				})
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

