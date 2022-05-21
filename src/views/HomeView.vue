<template>
  <div class="home">
    <h1> Michael Becker </h1>
    <SkillsComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import SkillsComponent from '@/components/SkillsComponent.vue'

export default {
  name: 'HomeView',
  components: {
    SkillsComponent
  }
}
</script>
