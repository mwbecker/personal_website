var JobsListingObject = {
   getJobs()
         {
            return (
               [

                     {  job_name :'Application Architect I, Digital Technologies', 
                     company:'US Steel',
                     dates_worked:'Jun 2022 - Present',
                     img_src: 'uss_logo',
                     icons: ['unity', 'blender', 'vs'],
                     logical_date: (new Date('Jun 01, 2022').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 6, 
                     description: "Used Unity 3D, Blender, and Microsoft Visual Studio to create end to end factory visualization and asset tracking. Learn and implement necessary web frameworks for data visualization projects.",
                     tags:['experience'],
                     type: 'job'
                     }, 
                     { job_name :'Managment Associate, Digital Studio', 
                     company:'US Steel',
                     dates_worked:'Jun 2021 - Present',
                     img_src: 'uss_logo',
                     icons: ['Apache_Hive_logo', 'flask-logo', 'vue'],
                     logical_date: (new Date('Jun 01, 2021').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 6, 
                     description: "Used VueJS, Flask, and HiveSQL backend to build interactive steel manufacturing displays while documenting and communicating application design patterns with teammates",
                     tags:['experience'],
                     type: 'job'
                  }, 
                  {  job_name:'Co-op, Digital Studio Team', 
                     company:'US Steel',
                     dates_worked:'Jan 2020 - May 2021',
                     img_src: 'uss_logo',
                     icons: ['3d-model', 'vue'],
                     logical_date: (new Date('Jan 01, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 5, 
                     type: 'job',
                     tags:['experience'],
                     description: "Preformed part ordering cost savings/analytics, developed a 3D blast furnace model prototype, and implemented a UI for uploading spreadhseets into a Hive database"
                  },  
                  {  project:'Mobile Application Development in iOS ', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Fall 2020',
                     img_src: 'cmu',
                     icons: ['ios', 'spotify-14-437140'],
                     logical_date: (new Date('Sep 01, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index: 1,
                     type: 'school',
                     tags:['education'],
                     description: "Developed a multiplayer song guessing app on a team using Spotify and Firebase apis"
                  }, 
                  {  project:'Web Application Development Final Project', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Spring 2020',
                     img_src: 'cmu',
                     icons: ['react', 'g_maps'],
                     logical_date: (new Date('Mar 15, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 2, 
                     type: 'school',
                     tags:['education'],
                     description: "Created an item sharing service for CMU students with ReactJS and integrated Google Maps API to display item locations"
                  }, 
                  {  position:'Course Assistant, 67-272 Application Design & Development', 
                     company:'Carnegie Mellon University',
                     dates_worked:'Spring 2020',
                     img_src: 'cmu',
                     icons: ['docker', 'gitlab'],
                     logical_date: (new Date('Jan 15, 2020').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 4, 
                     type: 'school',
                     tags:['education'],
                     description: "Maintained Gitlab auto-grading server for Ruby on Rails projects with Bash, CI scripting, and Docker to run an automated testing suite"
                  }, 
                  {  position:'Research Assistant', 
                     company:'Carnegie Mellon University',
                     dates_worked:'May 2019 - September 2019',
                     img_src: 'cmu',
                     icons: ['rails'],
                     logical_date: (new Date('Jun 01, 2019').getTime()),
                     location: "Pittsburgh, PA",
                     relevance_index : 3, 
                     type: 'school',
                     tags:['experience', 'education'],
                     description: "Built several full stack Ruby on Rails apps for risk management projects"
                  },
                  {  
                  project:'Application Design and Development', 
                  company:'Carnegie Mellon University',
                  dates_worked:'Jan 2019 - May 2019',
                  img_src: 'cmu',
                  icons: ['rails'],
                  logical_date: (new Date('Jan 01, 2019').getTime()),
                  location: "Pittsburgh, PA",
                  relevance_index : 7, 
                  type: 'school',
                  tags:['education'],
                  description: "Created a full stack e-commerce web app for a baking company using Ruby on Rails employing test-driven development"
               } 
               ]
            )
         }
   }

export default JobsListingObject