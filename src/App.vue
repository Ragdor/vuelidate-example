<script>
import Tabs from './components/Tabs.vue';
import VuelidateForm from './components/VuelidateForm.vue';
import CustomForm from './components/CustomForm.vue';

export default {
	name: 'App',
	components: {
		Tabs,
		VuelidateForm,
		CustomForm
	},
	data() {
		return {
			tabNo: 0
		}
	}
}
</script>

<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<Tabs :tabNo.sync="tabNo" />
		<VuelidateForm v-if="tabNo === 0" />
		<CustomForm v-if="tabNo === 1" />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	margin-left: auto;
	margin-right: auto;
	max-width: 600px;
}
</style>
