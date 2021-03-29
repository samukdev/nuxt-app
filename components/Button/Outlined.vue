<template lang="pug">
  button(class="py-3 font-montserrat uppercase px-4 border-2 border-blue-500 text-xl text-blue-500 font-semibold rounded hover:bg-blue-50 focus:outline-none focus:ring-none;")
    | {{ label }}
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
