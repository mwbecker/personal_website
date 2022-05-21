<template>
   
  <div class="main">
    <h3> Experience </h3>
    <div class = "sortContainer">
      <a> Sort By: </a>
      <p @click = "toggleSort('logical_date')" class = "sorterFields">  <strong> Date </strong> 
       <arrow-up v-if="sortedStatuses['logical_date']=='Up'"> </arrow-up>
       <arrow-down v-if="sortedStatuses['logical_date']=='Down'"> </arrow-down>
       </p>  
      | &nbsp;
      <p @click = "toggleSort('relevance_index')" class = "sorterFields">  <strong> Relevance </strong>  
      <arrow-up v-if="sortedStatuses['relevance_index']=='Up'" > </arrow-up> 
      <arrow-down v-if="sortedStatuses['relevance_index']=='Down'" > </arrow-down> 
      </p>  
      
    </div>
    <div :class= "(index%2==0) ? 'jobItem' : 'jobItemGreyed'" v-for="(item, index) in jobData" :key="index">

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
     sortedStatuses: 
    {
      'logical_date': null,
      'relevance_index': null
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
        sortBy(field_name, direction)
        {
            if (direction == "Up") {
              this.jobData.sort((a, b) => a[field_name] - b[field_name]);
            }
            else  {
              this.jobData.sort((a, b) => a[field_name] - b[field_name]).reverse();
            }
        },
        clearOutOtherSorts(selected_field)
        {
          for (let i = 0; i < Object.keys(this.sortedStatuses).length; i++) 
             if ( Object.keys(this.sortedStatuses)[i] != selected_field)
               this.sortedStatuses[Object.keys(this.sortedStatuses)[i]] = null
        },
        toggleSort:function(field_name)
        {
          if (this.sortedStatuses[field_name] == 'Up')
          {
              this.clearOutOtherSorts(field_name)
              this.sortedStatuses[field_name] = "Down"
              this.jobData.reverse();
          }
          else if (this.sortedStatuses[field_name] == 'Down')
          {
              this.clearOutOtherSorts(field_name)
              this.sortedStatuses[field_name] = "Up"
              this.jobData.reverse();
          }
          else {
            this.clearOutOtherSorts(field_name)
            this.sortedStatuses[field_name] = "Up"
            this.sortBy(field_name, "Up")
          }

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

.jobItemGreyed{
    margin: 0.75em 0.5em 0.75em 1em;
    padding: 0.75em 0.5em 0.75em 1em;
    border: 1px dotted black;
    text-align: left;
    background-color: #eeeeee;
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