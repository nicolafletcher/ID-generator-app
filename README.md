# ID-generator-app
A simple web application that generates a unique identifier for software tests 

To view: clone the repository and open index.html in a browser

NOTES: 

This is a simplification/demo of the actual app. This version is using a random number generator to mimic the production of a "unique" component to the ID.
      For actual implementation, it's connected to a database keeping track of the ID numbers already being used. 
      
Additionally, the real implementation uses mutual exclusion locks to prevent collisions in the database from concurrent users. 
(without this, two users could be given the same unique number if they generate the IDs too close together) 
