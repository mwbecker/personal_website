<template>
   
  <div class="main">
    <h3> Experience </h3>

    <div class = "sortContainer">
      <hr class = ""/>
      <a> Sort By: </a> &nbsp;
      <!-- Iterate through fileds to sort and create buttons -->
      <div class = "sorterOption" v-for="(option, option_index) in getSortKeys" :key="option_index">
        <p  @click = "toggleSort(option)" class = "sorterFields">  
        <!-- If there is no expanded description mapped for sort field, display raw field -->
        <strong> {{(option in sortingDescrMapping) ? sortingDescrMapping[option] : toTitleCase(option.replace("_", " ")) }} </strong> 
        <arrow-up v-if="sortedStatuses[option]=='Up'"> </arrow-up>
        <arrow-down v-if="sortedStatuses[option]=='Down'"> </arrow-down>
        </p>
      </div>
      <hr/>
    </div>
    <div :class= "(index%2==0) ? 'jobItem' : 'jobItemGreyed'" v-for="(item, index) in jobData" :key="index">
        
        <div class = "imageContainer"> 
           <img class ="companyLogoImg" :src="getImgUrl(item.img_src)" >
        </div>
        
       <div class = "textContainer">
         
        <div v-for="(property, property_index) in item" :key="property_index">
              <div class = "innerJobText" v-if="!hide_data.includes(property_index)">
                
                <!-- Render icon for type of item  -->
                <briefcase-outline v-if="property_index=='job_name' && jobData[index]['type']=='job'" class="jobIcon" ></briefcase-outline>
                <school-outline v-if="['project', 'position'].includes(property_index)  && jobData[index]['type']=='school'" class="jobIcon" ></school-outline>
                <domain v-if="property_index=='company'" class = "jobIcon"> </domain>
                <calendar-outline v-if="property_index=='dates_worked'" class = "jobIcon"> </calendar-outline>
                <map-marker-radius-outline v-if="property_index=='location'" class = "jobIcon"> </map-marker-radius-outline>
                <text-box-outline v-if="property_index=='description'" class = "jobIcon"> </text-box-outline>
                <!-- Render property icons for job items -->

                <a class="descrFont"> <strong> {{ toTitleCase(property_index.replace("_", " "))}} </strong> </a>:
                <a class = "expandedText"> {{ property }} </a>
              </div>
         </div>
      </div>
    </div>
  </div>
</template>


<style>  @import '@/assets/css/skillsComponent.css'; </style>

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


import JobsListingObject from './JobsListing';

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
     hide_data: ['type', 'logical_date', 'relevance_index', 'img_src'],
     sortedStatuses: 
    {
      'logical_date': null,
      'relevance_index': null
    },
    sortingDescrMapping:
    {
      'logical_date':"Date",
      'relevance_index':"Relevance"
    },
     jobData : JobsListingObject.getJobs()
    }
  } ,
  methods:
  {

    getImgUrl(img) {
      var images = require.context('../assets/imgs/', false, /\.png$/)
      return images('./' + img + ".png")
    },
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
  },
  computed:
  {
     getSortKeys()
     {
       return Object.keys(this.sortedStatuses);
     }
  }
}
</script>
