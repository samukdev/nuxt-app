<template lang="pug">
  div(class="container min-w-full flex-col")
    div(id="content" class="min-w-full px-4 py-2 flex-grow")
      div(class="flex flex-center flex-col h-full")
        div(class="text-center flex-min pt-8")
          div(class="font-bold font-montserrat text-gray-900 text-2xl mb-2")
            | Hey there! 
          div(class="text-base tracking-wider font-light text-gray-600")
            | Welcome to my login page project :)
          div(class="text-base tracking-wider font-light text-gray-600")
            | Enjoy it!
        div(class="flex-grow flex items-center px-6")
          img(
            src="~/assets/home/hello.jpg"
            alt="Hello!"
          )
    div(id="action" class="min-w-full px-4 py-3")
      NuxtLink(to="/login")
        ButtonPrimary(
          class="align-bottom min-w-full my-1"
          label="login"
        )
      NuxtLink(to="/signup")
        ButtonOutlined(
          class="align-bottom min-w-full my-1"
          label="get started"
        )
</template>

<script>
export default {}
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
