<template lang="pug">
  div(class="container min-w-full flex-col")
    div(id="content" class="min-w-full py-2 flex-grow")
      div(class="flex flex-center flex-col h-full")
        div(class="text-center flex-min pt-8 lg:px-8")
          div(class="font-bold font-montserrat text-gray-900 text-2xl mb-2")
            | You're logged in!
          div(class="text-base tracking-wider font-light text-gray-600")
            | I'm still surprised that works...
        div(class="flex-grow flex items-center flex-col")
          div(
            class="w-full mb-8 mt-8 overflow-x-auto overflow-x-hidden flex flex-row flex-center flex-initial mx-auto scroll-drag-container"
            id="gallery"
            @mousedown="scrollDragMouseDown(('gallery'), $event)"
            @mouseup="scrollDragStop"
            @mouseleave="scrollDragStop"
            @mousemove="scrollDragMouseMove"
          )
            span(
              v-for="thumb in thumbs"
              :key="thumb.alt"
              class="h-48 min-w-48 max-w-48 mx-1"
            )
              img(
                class="h-full w-full rounded-md dont-drag-image"
                v-bind="thumb"
              )
          div(class="px-4 max-w-full min-w-2 lg:px-8")
            div(class="font-montserrat text-xl font-semibold mb-3 w-64")
              | Want to check out other stuff?
            div(class="text-base tracking-wider font-light text-gray-600 leading-6")
              | Please visit me at my portfolio page. There you will see more projects like that and get in touch with me!
            div(class="text-base tracking-wider font-light text-gray-600 leading-6 pt-2")
              | See you soon!
    div(class="w-full px-4 py-2 mt-2 lg:px-8")
      ButtonPrimary(
        class="align-bottom min-w-full my-1"
        label="Take me There!"
        @click="openPortfolio()"
      )
</template>

<script>
export default {
  transition: 'home',
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
      scrollDragData: {
        target: 'gallery',
        isDown: false,
        startX: null,
        startLeft: null,
      },
    }
  },

  methods: {
    getScrollDragTargetElement() {
      return document.getElementById(this.scrollDragData.target)
    },

    scrollDragMouseDown(targetId, e) {
      const slider = this.getScrollDragTargetElement()
      this.scrollDragData.target = targetId
      this.scrollDragData.isDown = true
      slider.classList.add('scroll-drag-container__active')
      this.scrollDragData.startX = e.pageX - slider.offsetLeft
      this.scrollDragData.scrollLeft = slider.scrollLeft
    },
    scrollDragStop() {
      const slider = this.getScrollDragTargetElement()
      this.scrollDragData.isDown = false
      slider.classList.remove('scroll-drag-container__active')
    },
    scrollDragMouseMove(e) {
      if (!this.scrollDragData.isDown) return
      e.preventDefault()
      const slider = this.getScrollDragTargetElement()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - this.scrollDragData.startX) * 1.5
      slider.scrollLeft = this.scrollDragData.scrollLeft - walk
    },
    openPortfolio() {
      window.open(
        'https://samukdev.github.io',
        '_blank' // <- This is what makes it open in a new window.
      )
    },
  },
}
</script>

<style scoped lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.dont-drag-image {
  -webkit-user-drag: none;
  user-drag: none;
  user-select: none;
}
.scroll-drag-container > * {
  transition: all 0.2s ease-in;
  transform: scale(0.97);
}
.scroll-drag-container__active > * {
  transform: scale(1);
  cursor: grab;
}
#gallery {
  cursor: pointer;
}
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
