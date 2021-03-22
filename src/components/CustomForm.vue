<script>
export default {
	name: 'CustomForm',
	data() {
		return {
			name: '',
			email: ''
		}
	},
	computed: {
		isNameValid() {
			return !!this.name;
		},
		isEmailValid() {
			return this.email.match(/^\S+@\S+$/);
		},
		isFormValid() {
			const { isNameValid, isEmailValid } = this;
			return isNameValid && isEmailValid;
		}
	}
}
</script>

<template>
	<form>
		<div class="field">
			<label class="label">Name</label>
			<input v-model="name" class="input" type="text" placeholder="Text input">
			<p v-if="!isNameValid" class="help is-danger">Name limit required</p>
		</div>

		<div class="field">
			<label class="label">Email</label>
			<input v-model="email" class="input" type="email" placeholder="Email input">
			<p v-if="!isEmailValid" class="help is-danger">This email is invalid</p>
		</div>

		<div class="field is-grouped">
			<button @click.prevent class="button is-link"
					:disabled="!isFormValid"
			>
				Submit
			</button>
		</div>
	</form>
</template>
