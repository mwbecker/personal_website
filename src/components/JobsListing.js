var JobsListingObject = {
   getJobs()
         {
            return (
               [
                     { job_name :'Full Stack Developer, Digital Studio', 
                     company:'US Steel',
                     dates_worked:'Jun 2021 - Present',
                     img_src: 'uss_logo',
                     logical_date: (new Date('Jun 01, 2021').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 6, 
                     description: "Used VueJS, Flask, and HiveSQL backend to build interactive steel manufacturing displays while documenting and communicating application design patterns with teammates",
                     type: 'job'
                  }, 
                  {  job_name:'Co-op, Digital Studio Team', 
                     company:'US Steel',
                     dates_worked:'Jan 2020 - May 2021',
                     img_src: 'uss_logo',
                     logical_date: (new Date('Jan 01, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 5, 
                     type: 'job',
                     description: "Preformed part ordering cost savings/analytics, developed a 3D blast furnace model prototype, and implemented a UI for uploading spreadhseets into a Hive database"
                  },  
                  {  project:'Mobile Application Development in iOS ', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Fall 2020',
                     img_src: 'cmu',
                     logical_date: (new Date('Sep 01, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index: 1,
                     type: 'school',
                     description: "Developed a multiplayer song guessing app on a team using Spotify and Firebase apis"
                  }, 
                  {  project:'Web Application Development Final Project', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Spring 2020',
                     img_src: 'cmu',
                     logical_date: (new Date('Mar 15, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 2, 
                     type: 'school',
                     description: "Created an item sharing service for CMU students with ReactJS and integrated Google Maps API to display item locations"
                  }, 
                  {  position:'Course Assistant, 67-272 Application Design & Development', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Spring 2020',
                     img_src: 'cmu',
                     logical_date: (new Date('Jan 15, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 4, 
                     type: 'school',
                     description: "Maintained Gitlab auto-grading server for Ruby on Rails projects by using Bash, CI scripting, and Docker to run an automated testing suite"
                  }, 
                  {  position:'Research Assistant', 
                     company:'Carnegie Mellon University',
                     dates_worked:'May 2019 - September 2019',
                     img_src: 'cmu',
                     logical_date: (new Date('Jun 01, 2019').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 3, 
                     type: 'school',
                     description: "Built several full stack Ruby on Rails apps for risk management projects"
                  },
                  {  
                  project:'Application Design and Development', 
                  company:'Carnegie Mellon University',
                  dates_worked:'Jan 2019 - May 2019',
                  img_src: 'cmu',
                  logical_date: (new Date('Jan 01, 2019').getTime()),
                  location: "Pittsburgh, PA",
                  relevance_index : 7, 
                  type: 'school',
                  description: "Created a full stack e-commerce web app for a baking company using Ruby on Rails employing test-driven development"
               } 
               ]
            )
         }
   }

export default JobsListingObject