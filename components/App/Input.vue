<template lang="pug">
  div(class="w-full")
    input(
      v-bind="$attrs"
      v-on="$listeners"
      class=`w-full px-3 py-3 my-2 placeholder-gray-400 rounded
      focus:outline-none focus:ring
      dark:bg-gray-700 dark:text-white`
      :class="error? 'border border-red-500 dark:placeholder-red-500 dark:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:ring-red-100 focus:border-red-300':'border border-gray-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 focus:ring-blue-100 focus:border-blue-300'"
    )
    transition(
      name="fade"
    )
      div(
        class="font-extralight text-xs text-red-500"
        v-if="error"
      )
        | {{ error }}
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    error: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.35s;
  transform: scale(1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
