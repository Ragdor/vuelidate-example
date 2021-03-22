<script>
export default {
	name: 'Tabs',
	props: {
		tabNo: {
			type: Number,
			default: 0
		}
	},
	computed: {
		tabEntries() {
			return ['Custom form', 'Vuelidate form'];
		}
	}
}
</script>

<template>
	<nav class="tabs is-centered">
		<ul>
			<li v-for="(tab, index) in tabEntries"
				:class="{ 'is-active': index === tabNo }"
				:key="tab"
				@click="$emit('update:tabNo', index)"
			>
				<a>{{ tab }}</a>
			</li> 
		</ul>
	</nav>
</template>
