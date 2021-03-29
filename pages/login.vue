<template lang="pug">
  form(class="container min-w-full flex-col" @submit.prevent="login()")
    div(id="content" class="min-w-full px-4 py-2 flex-grow")
      div(class="flex flex-center flex-col h-full")
        div(class="text-center flex-min pt-8")
          div(class="font-bold font-montserrat text-gray-900 text-2xl mb-2")
            | Welcome Back :)
          div(class="text-base tracking-wider font-light text-gray-600")
            | Please, enter your info to continue.
        div(class="flex-grow flex items-center flex-col pt-16")
          input(
            v-for="input in inputs"
            :key="input.name"
            v-bind="input"
            class=`w-full px-3 py-3 my-2 placeholder-gray-300 border border-gray-300 rounded
            focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300
            dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600
            dark:focus:ring-gray-900 dark:focus:border-gray-500`
          )

          div(class="w-full underline text-gray-400 font-light tracking-widerr text-sm text-center py-10")
            | Forgot password?
          ButtonPrimary(
            type="submit"
            class="align-bottom min-w-full my-1"
            label="login"
          )
    div(id="action" class="min-w-full px-4 py-3")
      div(class="w-full text-gray-400 font-light tracking-wider text-sm text-center py-5")
        span Don't have an account yet?
        NuxtLink(to="/signup")
          span(class="text-blue-400 font-semibold px-1") Sign up
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          name: 'username',
          id: 'username',
          placeholder: 'Username or Email',
          type: 'text',
          required: true,
        },
        {
          name: 'password',
          id: 'password',
          placeholder: 'Password',
          type: 'password',
          required: true,
        },
      ],
    }
  },

  methods: {
    login() {
      this.$router.push({ name: 'home' })
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
