<template>
  <div class="about">
     <h1> Michael Becker </h1>
    <SkillsComponent/>

  </div>
</template>


<script>
// @ is an alias to /src
import SkillsComponent from '@/components/SkillsComponent.vue'

export default {
  name: 'AboutView',
  components: {
    SkillsComponent
  }
}
</script>
