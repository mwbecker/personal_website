<template>
   
  <div class="main">
    <div class = "jobItem" v-for="(item, index) in jobData" :key="index">
        <div  v-for="(property, property_index) in item" :key="property_index">
               <a> <strong> {{ toTitleCase(property_index.replace("_", " "))}} </strong> </a>:
               <a> {{ property }} </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
data: function () {
    return {
     jobData : [{job_name :'Full Stack Developer', 
               company:'US Steel', start_date:'Jun 2021', end_date:'Present',
                }, {job_name:'Application Developer Intern', 
               company:'US Steel', start_date:'Jan 2020', end_date:'May 2021',
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
    border-style: dotted ;
    border-color: black;

}
</style>