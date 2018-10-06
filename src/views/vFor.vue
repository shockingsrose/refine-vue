<template lang="pug">
    slotParent(:data='list')
      template(slot=`slot1` scope='props')
        slotChild(:rows="props.row")    
</template>

<script>
	import slotParent from '../components/slot_parent.vue';
	import slotChild from '../components/slot_child.vue';
	export default {
		components: { slotParent, slotChild },
		data() {
			return {
				list: [
					{
						classes: '计本1班',
						university: '温州大学',
						id: 0,
					},
					{
						classes: '计本2班',
						university: '温州大学',
						id: 1,
					},
					{
						classes: '计本3班',
						university: '温州大学',
						id: 2,
					}
				]
			}
		}

	}
</script>
