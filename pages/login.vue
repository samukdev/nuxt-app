<template lang="pug">
  form(class="container min-w-full flex-col" @submit.prevent="login()")
    div(
      class="min-w-full px-4 py-2 flex-grow flex flex-center"
      v-if="isLoading"
    )
      | Loading...
    div(
      class="min-w-full px-4 py-2 flex-grow"
      v-else-if="error"
    )
      | {{error}}
      div(id="action" class="w-full flex flex-center pt-5")
        ButtonPrimary(
          type="button"
          label="Go Back"
          class="align-bottom min-w-full my-1"
          @click="closeError"
        )
    div(
      id="content"
      class="min-w-full px-4 py-2 flex-grow"
      v-else
    )
      div(class="flex flex-center flex-col h-full")
        div(class="text-center flex-min pt-8")
          div(class="font-bold font-montserrat text-gray-900 text-2xl mb-2")
            | Welcome Back :)
          div(class="text-base tracking-wider font-light text-gray-600")
            | Please, enter your info to continue.
        div(class="flex-grow flex items-center flex-col pt-16")
          app-input(
            v-for="input in inputs"
            :key="input.name"
            v-bind="input"
            @input="(input.value = $event.target.value)"
          )

          div(class="w-full underline text-gray-400 font-light tracking-widerr text-sm text-center py-10")
            | Forgot password?
          ButtonPrimary(
            type="submit"
            class="align-bottom min-w-full my-1"
            label="login"
          )
      div(id="action" class="min-w-full px-4 py-3")
        div(class="w-full text-gray-500 font-light tracking-wider text-sm text-center py-5")
          span Don't have an account yet?
          NuxtLink(to="/signup")
            span(class="text-blue-400 font-semibold px-1") Sign up
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      error: null,
      isLoading: null,
      inputs: [
        {
          name: 'email',
          id: 'email',
          placeholder: 'Username or Email',
          type: 'text',
          value: '',
          error: '',
        },
        {
          name: 'password',
          id: 'password',
          placeholder: 'Password',
          type: 'password',
          value: '',
          error: '',
        },
      ],
    }
  },

  methods: {
    clearForm() {
      this.inputs.forEach((input) => {
        input.value = ''
      })
    },

    closeError() {
      this.error = null
      this.clearForm()
    },

    handleLogin() {
      this.$router.push({ name: 'home' })
    },

    async login() {
      const values = {}

      this.inputs.forEach((input) => {
        values[input.id] = input.value
      })

      const formValidation = {
        hasEmail: !!values.email,
        hasPassword: !!values.password,
      }

      const formIsOk = Object.keys(formValidation).every(
        (key) => !!formValidation[key]
      )

      if (!formIsOk) {
        const formErrors = {
          hasEmail: {
            error: 'You must fill this field',
            target: ['email'],
          },
          hasPassword: {
            error: 'You must fill this field',
            target: ['password'],
          },
        }

        // Clear errors
        this.inputs.forEach((input) => {
          input.error = ''
        })

        Object.keys(formValidation).forEach((key) => {
          formErrors[key].target.forEach((target) => {
            target = this.inputs.find((input) => input.id === target)
            target.error = formValidation[key] ? '' : formErrors[key].error
          })
        })

        return null
      } else {
        const { email, password } = values
        this.isLoading = true

        try {
          await this.$store.dispatch('Auth/login', {
            email,
            password,
          })

          this.handleLogin()
        } catch (err) {
          this.error =
            err.message || 'Something went wrong, please try again later...'
        }

        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
