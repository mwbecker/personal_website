<template>
   
  <div class="main">
    <h3> Experience </h3>

<div id = "dropdownContainer">
<ul id = "filterText" class="drop-down closed">
    <li><a  id = "filterTextInner" onclick="location.href='#';"   class="nav-button"> <strong> Filter </strong> </a></li>
   <li @click="processFilterClick($event, filterCriterion)" v-for="(filterCriterion, filterCriteriaIndex) in filterCriteria" :key="filterCriteriaIndex"><a>{{toTitleCase(filterCriterion)}}</a></li>
  </ul>
  </div>
    <div class = "sortContainer">
      <hr class = "filterContainer"/>
      <a> Sort By: </a> &nbsp;
      <!-- Iterate through fileds to sort and create buttons -->
      <div class = "sorterOption" v-for="(option, option_index) in getSortKeys" :key="option_index">
        <span  @click = "toggleSort(option)" class = "sorterFields">  
        <!-- If there is no expanded description mapped for sort field, display raw field -->
        <strong> {{(option in sortingDescrMapping) ? sortingDescrMapping[option] : toTitleCase(option.replace("_", " ")) }} </strong> 
        <span class = "arrowUp" v-if="sortedStatuses[option]=='Up'"> </span>
        <span  class = "arrowDown" v-if="sortedStatuses[option]=='Down'"> </span>
        <span  class = "arrowNone" v-if="sortedStatuses[option]!='Down' && sortedStatuses[option]!='Up'"> </span>
        </span>
      </div>
      <hr class = "filterContainer"/>
    </div>
    <div :class= "(index%2==0) ? 'jobItem' : 'jobItemGreyed'" v-for="(item, index) in activeItems" :key="index">
        
       <IconsComponent :item="item"> </IconsComponent>
        
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


<style>  @import '@/assets/css/skillsComponent.css'; 
         @import '@/assets/css/dropdown.css';
</style>

<script>
import { BriefcaseOutline,
         Domain,
         CalendarOutline,
         MapMarkerRadiusOutline,
         SchoolOutline,
         TextBoxOutline,
} from 'mdue';


import JobsListingObject from './JobsListing';
import IconsComponent  from './IconsComponent.vue';

export default {
  
  name: 'SkillsComponent',
  components: {
    BriefcaseOutline,
    Domain,
    CalendarOutline,
    MapMarkerRadiusOutline,
    SchoolOutline,
    TextBoxOutline,
    IconsComponent,
},
data: function () {
    return {
     hide_data: ['type', 'logical_date', 'relevance_index', 'img_src', 'icons', 'tags'],
     filterCriteria: ['experience','education', 'all'],
     filtering: null,
     sortedStatuses: 
    {
      'logical_date': null,
    
    },
    closeNav()
    {
      document.getElementsByClassName("drop-down")[0].classList.add("closed");
    },
      toggleNav()
        {
        document.getElementsByClassName("drop-down")[0].classList.toggle("closed");
     },
    sortingDescrMapping:
    {
      'logical_date':"Date",
      
    },
     jobData : JobsListingObject.getJobs()
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

        },
    
        processFilterClick(event, filterCriterion)
        {
          setTimeout(this.closeNav, 10);
          document.getElementById("filterTextInner").innerHTML = "<strong>" + this.toTitleCase(filterCriterion) + "</strong>"
          this.filtering=filterCriterion;

          
       }
  },
  mounted: function()
  {
    var self = this;
     // Bind Click event to the drop down navigation button
    document.querySelector('#filterText').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
      self.toggleNav();
  }, false);



  document.onclick = function (e) {
    if (e.target.class !== 'drop-down' && e.target.id !== 'filterText') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'filterText')
            self.closeNav()
    }
  }


  },
  computed:
  {
     getSortKeys()
     {
       return Object.keys(this.sortedStatuses);
     },

      activeItems: function() {
        var self = this;
       return self.jobData.filter(function(i) {
         if (self.filtering != null && self.filtering != 'all')
            return i.tags.includes(self.filtering)
        else
            return true
     })
  }
  }
}
</script>
