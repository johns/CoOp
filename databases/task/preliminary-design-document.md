##  Preliminary Database Design Document

#####  James Byrne, Sam Savini
#####  Introduction to Database Systems
#####  October 18th, 2018

1\.  Preliminary Database Design

1.1.  Project description, database engine used, potential users, maybe some other stuff

>  BetterWe is an app created for groups who want to accomplish a common goal. Whether
>  That is losing weight, or cutting out fast food from their diet, groups will have
>  the ability to discuss with their groups in chat rooms, and navigate the app to
>  set new goals and set incentives. For our project, we are using postgreSQL for
>  the main database of our app. Our users are everyday app users, a very broad customer
>  base.

1.2.  Data description, generally what type of data will be stored

>  Our app will store user data as well as the data for the messages in every group.
>  Each 'user' will have an ID, email address, Full name, Password, and a picture
>  associated with their user prsofile. We will also store our messaging rooms, which
>  we will call our 'tasks'.

1.3.  At least five examples of the type of data your database will provide _to the user_

>  1. A user's information
>  2. a task's participants
>  3. Messages in a group task
>  4. the information about the chat room itself
>  5. The information about the task itself

1.4.  A preliminary idea of the schema of the database including table descriptions and potential columns

<<<<<<< HEAD
>  Each task will have its information broken up into tables. The first will be called users for all the users participating in each task. Potential columns for this table will be the username, photo, and other relevant user data. Another table will be made called statistics which will track all the progress being made by the group members. This will inlude info about what the goals are
 and if weekly or daily goals are kept.

=======
>  The activity/task database will have a tasks table which contains a description of the task and a unique ID. The participants table will hold all of the participants of tasks with their user info and what task they are a part of. The user table will hold info on all of the users using BetterWe. A room table will be used to keep information on the task environment including a picture, name ID and theme. Finally, the message table will keep track of the messages that participants in each task are sending to each other. Attributes in this table include the message contents, room ID, task ID, and user IDs.
 
>>>>>>> 2ed2cb2a0cb07bc54dcf37b3f060ca9354fd7870
1.5.  A complete preliminary Entity-Relationship Diagram [ERD] for the database [NOT hand-drawn, PLEASE!]

>  ![ERD](taskERD.png)
