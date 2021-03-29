<template lang="pug">
  button(v-on="$listeners" class="py-3 font-montserrat uppercase px-4 bg-blue-500 text-xl text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-none;")
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
