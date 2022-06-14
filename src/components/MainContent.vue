<template>
<div class = "mainContent">
  <div class="container">
    <div class = "typed-out"> Welcome to my website </div> <br>
  </div>
  <br>
   <div class = "introView" >
         <div class ="profile_picture"> </div>

    <p> Hi, I'm Michael, and I'm passionate about delivering web based solutions <br/>
       that enable people to dynamically view and interact with data </p>
    <img @click="go_to_linkedin" class = "linkedinLink" src="../assets/imgs/linkedin.png">
    <img @click="go_to_github" class = "gitHubLink" src="../assets/imgs/github.png">
    <a  href="./resume.pdf"><img class ="resumeLink" src="../assets/imgs/resume.png"></a>
    </div>
  </div>
</template>

<style>  @import '@/assets/css/about.css'; </style> 
<script>
export default {
  name: 'MainContent',
  props: {
    
  },
  methods: 
  {
    go_to_linkedin()
    {
      window.location.href = 'https://www.linkedin.com/in/michael-b-428743125/'
    },


    go_to_github()
    {
      window.location.href = 'https://github.com/mwbecker'
    },

  }
}
</script>

