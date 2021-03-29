<template lang="pug">
  div(class="flex flex-col lg:bg-gray-50" style="height: 100vh;") 
    TheHeader(class="flex-min")
    div(class="flex items-center flex-row w-full h-full" class="container mx-auto")
      div(class="lg:flex-1 hidden-desktop")
        img(src="/svg/what.svg" class="mb-5 pl-10")
      div(class="flex-1 w-full h-full flex justify-center items-center")
        div(style="max-width: 400px; max-height: 700px" class="flex w-full flex-col  lg:px-8 lg:py-8 lg:shadow-lg lg:rounded-md lg:bg-white")
          Nuxt(class="flex-grow w-full")
</template>

<style>
@media (max-width: 1024px) {
  .hidden-desktop {
    display: none;
  }
}

html {
  font-family: 'Oswald';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
