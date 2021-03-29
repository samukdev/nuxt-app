<template lang="pug">
  div(class="container min-w-full flex-col")
    div(id="content" class="min-w-full py-2 flex-grow")
      div(class="flex flex-center flex-col h-full")
        div(class="text-center flex-min pt-8")
          div(class="font-bold font-montserrat text-gray-900 text-2xl mb-2")
            | You're logged in!
          div(class="text-base tracking-wider font-light text-gray-600")
            | I'm still surprised that works...
        div(class="flex-grow flex items-center flex-col")
          div(class="w-full h-48 mb-8 mt-8 overflow-x-auto flex flex-row flex-center flex-initial mx-auto")
            span(
              v-for="thumb in thumbs"
              :key="thumb.alt"
              class="h-48 min-w-48 max-w-48 mx-1"
            )
              img(
                class="h-full w-full rounded-md"
                v-bind="thumb"
              )
          div(class="px-4 max-w-full min-w-2")
            div(class="font-montserrat text-xl font-semibold mb-3 w-64")
              | Want to check out other stuff?
            div(class="text-base tracking-wider font-light text-gray-600 leading-6")
              | Please visit me at my portfolio page. There you will see more projects like that and get in touch with me!
            div(class="text-base tracking-wider font-light text-gray-600 leading-6 pt-2")
              | See you soon!
    div(class="w-full px-4 py-2 mt-2")
      ButtonPrimary(
        class="align-bottom min-w-full my-1"
        label="Take me There!"
        @click="openPortfolio()"
      )
</template>

<script>
export default {
  data() {
    return {
      thumbs: [
        {
          alt: 'Samukdev Login Page Desktop',
          src: '/thumbnails/login2.png',
        },
        {
          alt: 'Samukdev Portfólio Mobile',
          src: '/thumbnails/portfolio1.png',
        },
        {
          alt: 'Samukdev Portfólio Desktop',
          src: '/thumbnails/portfolio2.png',
        },
        {
          alt: 'Samukdev Login Page Mobile',
          src: '/thumbnails/login1.png',
        },
      ],
    }
  },

  methods: {
    openPortfolio() {
      window.open(
        'https://samukdev.github.io',
        '_blank' // <- This is what makes it open in a new window.
      )
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
.min-w-48 {
  min-width: 12rem;
}

.max-w-48 {
  max-width: 12rem;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
