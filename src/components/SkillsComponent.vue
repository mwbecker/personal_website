<template>
   
  <div class="main">
    <h3> Experiences </h3>
   <briefcase-outline style="color: gray; "></briefcase-outline>

    <div class = "jobItem" v-for="(item, index) in jobData" :key="index">
        <div  v-for="(property, property_index) in item" :key="property_index">
               <a class="descrFont"> <strong> {{ toTitleCase(property_index.replace("_", " "))}} </strong> </a>:
               <a> {{ property }} </a>
        </div>
    </div>
  </div>
</template>

<script>
import { BriefcaseOutline } from 'mdue';

export default {
  
  name: 'SkillsComponent',
  components: {
    BriefcaseOutline
  },
data: function () {
    return {
     jobData : [{job_name :'Full Stack Developer', 
               company:'US Steel', dates_worked:'Jun 2021 - Present',
                }, {job_name:'Application Developer Intern', 
               company:'US Steel', dates_worked:'Jan 2020 - May 2021',
                } ]
    }
  } ,
  methods:
  {
      toTitleCase: function(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.jobItem {
    margin: 0.75em 0.5em 0.75em 1em;
    padding: 0.75em 0.5em 0.75em 1em;
    border: 1px dotted black;
    text-align: left;


}



.descrFont {
  color: #4a4444;
}
</style>