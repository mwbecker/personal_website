<template>
<div class = "mainContent">
  <div class="container">
    <div class = "typed-out"> Welcome to my website </div>
  </div>
  <br>
   <div class = "introView" >
    <p> Hi, I'm Michael, and I'm passionate about delivering web based solutions <br/>
       that enable people to dynamically view and interact with data </p>
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
  text-align: center;
  display: inline-block;
  color: black;
  font-size: 1.25em;
  animation: fadeIn linear 2s;
  -webkit-animation: fadeIn linear 2s;
  -moz-animation: fadeIn linear 2s;
  -o-animation: fadeIn linear 2s;
  -ms-animation: fadeIn linear 2s;
  
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

.mainContent
{   
   margin:auto;

}

.typed-out {
  overflow: hidden;
  border-right: .1em solid orange;
  font-size: 1.5em;
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
