<template lang="pug">
  form(class="container min-w-full flex-col" @submit.prevent="signUp()")
    div(
      class="min-w-full px-4 py-2 flex-grow"
      v-if="isLoading"
    )
      | Loading...
    div(
      class="min-w-full px-4 py-2 flex-grow"
      v-else-if="sucess"
    )
      | Awesome! Your account has been created
      div(id="action" class="w-full flex flex-center pt-5")
        ButtonPrimary(
          type="button"
          label="Keep going"
          class="align-bottom min-w-full my-1"
          @click="goToLogin()"
        )
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
            | Sign Up
          div(class="text-base tracking-wider font-light text-gray-600")
            | Let's create an account for you!
        div(class="flex-grow flex items-center flex-col pt-10")
          input(
            v-for="input in inputs"
            :key="input.name"
            v-bind="input"
            v-model="input.value"
            class=`w-full px-3 py-3 my-2 placeholder-gray-300 border border-gray-300 rounded
            focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300
            dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600
            dark:focus:ring-gray-900 dark:focus:border-gray-500`
          )
          div(id="action" class="w-full pt-5")
            ButtonPrimary(
              type="submit"
              class="align-bottom min-w-full my-1"
              label="sign up"
            )
            div(class="w-full text-gray-400 font-light tracking-wider text-sm text-center py-5")
              span Already have an account?
              NuxtLink(to="/login")
                span(class="text-blue-400 font-semibold px-1") Log in
      
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      isLoading: false,
      error: null,
      sucess: false,
      inputs: [
        {
          name: 'first_name',
          id: 'firstName',
          placeholder: 'First Name',
          type: 'text',
          value: '',
          error: false,
          errorMessage: null,
        },
        {
          name: 'email',
          id: 'email',
          placeholder: 'Email',
          type: 'text',
          value: '',
          error: false,
          errorMessage: null,
        },
        {
          name: 'password',
          id: 'password',
          placeholder: 'Password',
          type: 'password',
          value: '',
          error: false,
          errorMessage: null,
        },
        {
          name: 'confirm_password',
          id: 'confirmPassword',
          placeholder: 'Confirm Password',
          type: 'password',
          value: '',
          error: false,
          errorMessage: null,
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

    goToLogin() {
      this.$router.push({ name: 'login' })
    },

    async signUp() {
      const values = {}

      this.inputs.forEach((input) => {
        values[input.id] = input.value
      })

      const formValidation = {
        hasFirstName: !!values.firstName,
        hasEmail: !!values.email,
        hasPassword: !!values.password,
        hasConfirmPassword: !!values.confirmPassword,
        passwordMatches: values.password === values.confirmPassword,
      }

      const formIsOk = Object.keys(formValidation).every(
        (key) => !!formValidation[key]
      )

      if (!formIsOk) {
        return null
      } else {
        const { email, password } = values
        this.isLoading = true

        try {
          await this.$store.dispatch('Auth/signUp', {
            email,
            password,
          })

          this.sucess = true
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
