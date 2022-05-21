<template>
  <div class="about">
     <h1> Michael Becker </h1>
    <MainContent/>

  </div>
</template>


<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'AboutView',
  components: {
    MainContent,
}
}
</script>
