<template>
<div class = "mainContent">
  <div class="container">
    <div class = "typed-out"> Welcome to my website </div>
    <!-- <div class = "introView" >
    <p> Hi, I'm Michael, and I'm passionate about delivering web based solutions
       that enable people to dynamically view and interact with data </p>
    </div> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.introView
{
  text-align: left;
  
}

.mainContent
{
   width: 33%;
   margin-left: 33%;
}

.typed-out {
  overflow: hidden;
  border-right: .1em solid orange;
  font-size: 2em;
  width: 0;
  white-space: nowrap;
  height: 1.5em;
  animation: typing 1.5s forwards;

}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.container {
  display: inline-block;
}

</style>
