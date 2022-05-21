<template>
   
  <div class="main">
    <h3> Experiences </h3>
    
    <div class = "sortContainer">
      <p class = "sorterFields">  <strong> Date </strong> 
       <arrow-up v-if="sortedStatus['date']=='Up'"> </arrow-up>
       <arrow-down v-if="sortedStatus['date']=='Down'"> </arrow-down>
       </p>  
    
      <p class = "sorterFields">  <strong> Relevance </strong>  
      <arrow-up v-if="sortedStatus['relevance']=='Up'" > </arrow-up> 
      <arrow-down v-if="sortedStatus['relevance']=='Down'" > </arrow-down> 
      </p>  
      
    </div>
    <div class = "jobItem" v-for="(item, index) in jobData" :key="index">

        <!-- Render icon for type of item  -->
        <briefcase-outline v-if="jobData[index]['type']=='job'" class="jobIcon" ></briefcase-outline>
        <school-outline v-if="jobData[index]['type']=='school'" class="jobIcon" ></school-outline>
        <!-- Render icon for type of item  -->

        <div v-for="(property, property_index) in item" :key="property_index">
              <div v-if="!hide_data.includes(property_index)">
              
              <!-- Render property icons for job items -->
              <domain v-if="property_index=='company'" class = "jobIcon"> </domain>
              <calendar-outline v-if="property_index=='dates_worked'" class = "jobIcon"> </calendar-outline>
              <map-marker-radius-outline v-if="property_index=='location'" class = "jobIcon"> </map-marker-radius-outline>
              <text-box-outline v-if="property_index=='description'" class = "jobIcon"> </text-box-outline>

              <!-- Render property icons for job items -->

               <a class="descrFont"> <strong> {{ toTitleCase(property_index.replace("_", " "))}} </strong> </a>:
               <a> {{ property }} </a>
               </div>
        </div>

    </div>
  </div>
</template>

<script>
import { BriefcaseOutline,
         Domain,
         CalendarOutline,
         MapMarkerRadiusOutline,
         SchoolOutline,
         TextBoxOutline,
         ArrowUp,
         ArrowDown
} from 'mdue';

export default {
  
  name: 'SkillsComponent',
  components: {
    BriefcaseOutline,
    Domain,
    CalendarOutline,
    MapMarkerRadiusOutline,
    SchoolOutline,
    TextBoxOutline,
    ArrowUp,
    ArrowDown
  },
data: function () {
    return {
     hide_data: ['type', 'logical_date', 'relevance_index'],
     sortedStatus: 
    {
      'dates': null,
      'relevance': null
    },
     jobData : [{ job_name :'Full Stack Developer, Digital Studio', 
                  company:'US Steel',
                  dates_worked:'Jun 2021 - Present',
                  logical_date: (new Date('Jun 01, 2021').getTime()),
                  location: "Pittsburgh, PA",
                  relevance_index : 1, 
                  description: "Used VueJS, Flask, and HiveSQL Backend to build interactive steel manufacturing displays while documenting and communicating application design patterns with teammates",
                  type: 'job'
                }, 
                {  job_name:'Intern, Digital Studio Team', 
                   company:'US Steel',
                   dates_worked:'Jan 2020 - May 2021',
                   logical_date: (new Date('Jan 01, 2020').getTime()),
                   location: "Pittsburgh, PA",
                   relevance_index : 2, 
                   type: 'job',
                   description: "Worked with Digital Studio team to preform part ordering cost savings/analytics, a 3D blast furnace model, and a unverisal front end UI for uploading spreadhseets into a hive data lake "
                },  
                {  job_name:'Mobile Application Development in iOS ', 
                   company:'Carnegie Mellon University',
                   dates_worked:'Fall 2020',
                   logical_date: (new Date('Sep 01, 2020').getTime()),
                   location: "Pittsburgh, PA",
                   relevance_index: 6,
                   type: 'school',
                   description: "Worked on a team to develop multiplayer song guessing app using Spotify and Firebase apis"
                }, 
                {  job_name:'Web Application Development Final Project', 
                   company:'Carnegie Mellon University',
                   dates_worked:'Spring 2020',
                   logical_date: (new Date('Mar 15, 2020').getTime()),
                   location: "Pittsburgh, PA",
                   relevance_index : 5, 
                   type: 'school',
                   description: "Used ReactJS to create an item sharing service for CMU students and integrated Google Maps API to display item locations"
                }, 
                {  job_name:'Course Assistant, 67-272 Application Design & Development', 
                   company:'Carnegie Mellon University',
                   dates_worked:'Spring 2020',
                   logical_date: (new Date('Jan 15, 2020').getTime()),
                   location: "Pittsburgh, PA",
                   relevance_index : 3, 
                   type: 'school',
                   description: "Used Bash, CI scripting, and Docker to manage Gitlab auto-grading server for Ruby on Rails projects"
                }, 
                {  position:'Research Assistant', 
                   company:'Carnegie Mellon University',
                   dates_worked:'May 2019 - September 2019',
                   logical_date: (new Date('Jun 01, 2019').getTime()),
                   location: "Pittsburgh, PA",
                   relevance_index : 4, 
                   type: 'school',
                   description: "Built several full stack Ruby on Rails apps for risk management projects"
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
        )
      },
        sortByDate()
        {
            this.jobData.sort((a, b) => a.logical_date - b.logical_date);
        },
        sortByRelevance()
        {
           this.jobData.sort((a, b) => a.relevance_index - b.relevance_index);
        }
  },
  mounted: function()
  {
    // this.sortByDate();
    // this.sortByRelevance();

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

.sorterFields
{
  display:inline;
  position: relative;
  cursor:pointer;
  background-color: #e9e9e9;
  margin-right: 1em;
  padding: 2px 5px 2px 5px;
  border-radius: 0.5rem;
}

.sorterFields:hover
{
  background-color: #d6d5d5;
}

.sortContainer
{
  text-align: left;
  margin-left:1em;
}

.jobIcon
{
  color:grey;
  display: flex;
  position: relative;
  float:left;
  margin-right: 0.5em;
}


.descrFont {
  color: #4a4444;
}
</style>