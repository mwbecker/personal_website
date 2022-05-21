var JobsListingObject = {
   getJobs()
         {
            return (
               [
                     { job_name :'Full Stack Developer, Digital Studio', 
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
                  } 
               ]
            )
         }
   }

export default JobsListingObject