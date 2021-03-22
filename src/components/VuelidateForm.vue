<script>
import { required, maxLength, between, integer, email } from 'vuelidate/lib/validators';

export default {
	name: 'VuelidateForm',
	data() {
		return {
			name: '',
			age: null,
			email: '',
			check: false
		}
	},
	validations: {
		name: {
			required,
			maxLength: maxLength(20)
		},
		age: {
			integer,
			between: between(1, 99)
		},
		email: {
			email
		},
		check: {
			/** Custom validator */
			checkNeeded(check, parent) {
				return !(!check && parent.age > 0 && parent.age <= 13);
			}
		}
	}
}
</script>

<template>
	<form>
		<div class="field is-grouped">
			<button @click.prevent="$v.$touch()" class="button is-link">
				Touch
			</button>
		</div>

		<div class="field">
			<label class="label">Name</label>
			<input v-model="$v.name.$model" class="input" type="text" placeholder="Text input">
			<p v-if="!$v.name.required" class="help is-danger">Name is required</p>
			<p v-if="!$v.name.maxLength" class="help is-danger">Name limit exceeded</p>
		</div>

		<div class="field">
			<label class="label">Age</label>
			<input v-model="$v.age.$model" class="input" type="text" placeholder="Age">
			<p v-if="$v.age.$anyError" class="help is-danger">Age must be number between 1 and 99</p>
		</div>

		<div class="field">
			<label class="label">Email</label>
			<input v-model="$v.email.$model" class="input" type="email" placeholder="Email input" value="hello@">
			<p v-if="!$v.email.email" class="help is-danger">This email is invalid</p>
		</div>

		<div v-if="age > 0 && age <= 13" class="field">
			<label class="checkbox">
				<input v-model="$v.check.$model" type="checkbox">
				I agree to the terms and conditions
			</label>
			<p v-if="!$v.check.checkNeeded" class="help is-danger">Check is needed</p>
		</div>

		<div class="field is-grouped">
			<button @click.prevent class="button is-link"
					:disabled="$v.$anyError"
			>
				Submit
			</button>
		</div>
	</form>
</template>
