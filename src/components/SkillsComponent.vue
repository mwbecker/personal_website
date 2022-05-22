<template>
   
  <div class="main">
    <h3> Experience </h3>
    <div class = "sortContainer">
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
      var images = require.context('../assets/', false, /\.png$/)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.jobItem, .jobItemGreyed  {
    margin: 0.75em 0.5em 1.1em 1em;
    padding: 0.75em 0.5em 0.75em 1em;
    border: 1px dotted black;
    text-align: left;
    line-height: 1.3em;
}

.jobItemGreyed{
    background-color: #f5f4f4;
}
.innerJobText
{
  width: 50vw;
  display: block;
  overflow:hidden;
}


.textContainer
{
  width: 67%;
  overflow: hidden;

}

.imageContainer
{
  width:12vh;
  float:left;
  display: block;
  margin-right: 2vw;
  margin-bottom:1vh;
}

.companyLogoImg
{
  width:100%;
  float:left;
  margin-right: 2em;
}
.sorterFields
{
  display:inline;
  position: relative;
  cursor:pointer;
  background-color: #e9e9e9;
  margin-right: 1em;
  font-size: 1.1em;
  padding: 2px 7px 2px 7px;
  border-radius: 0.25rem;
  user-select:none;
}

.sorterFields:hover
{
  background-color: #d6d5d5;
}

.sortContainer
{
  text-align: left;
  margin-left:1em;
  margin-bottom:1em;
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
  color: #2e2b2b;
  font-size:1.05em;

}

.expandedText{
  font-size:1.05em;
}

.sorterOption{
  display:inline;
  position: relative;
  width: 50%;
  border-right: 1px solid black;
  margin-right: 1em;
}


</style>