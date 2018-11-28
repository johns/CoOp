##  Preliminary Database Demonstration

#####  Sam Chami, John Scott
#####  James Byrne, Sam Savini
#####  Introduction to Database Systems
#####  November 27<sup>th</sup>, 2018

###  Chat Database
####  Chat ERD
![chatERD](chat/chatERD.png)

####  Example Queries

1.  Find all messages in group:
```
select user_email, message_content from message where room_id = 52;
```

2.  Find all display names in a specific group:
```
select display_name from user_profile where user_email in (select user_email from group_member where room_id = 1005);
```

3.  Find all messages from a user and list it by date in descending order:
```
select user_email, message_content, date_sent from message where user_email = 'whurthv@auda.org.au' order by date_sent desc;
```

4.  Search names/descriptions of groups by keyword:
```
select name, description from room where name like any (values ('%Lorem%')) || description like any (values ('%Lorem%'));
```

5.  Return all the names of groups that a user is participating in:
```
select name from room where room_id in (select room_id from group_member where user_email = 'shuddart3h@aol.com');
```


###  Task Database
####  Task ERD
![taskERD](task/taskERD.png)

####  Example Queries

1.  Getting your group member's info:
```
SELECT room_id, user_email
FROM participants
WHERE room_id = 1
```

2.  Getting the rooms that a user is in:
```
SELECT user_email, room_id
FROM participants
WHERE user_email = 'ikirwan0@aol.com'
```

3.  Getting all of the tasks in a room:
```
SELECT room_id, task_name, user_email
FROM tasks
WHERE room_id = 2
```

4.  Getting all of the tasks of one user:
```
SELECT user_email, task_name, task_id
FROM tasks
WHERE user_email = 'sellsworthe1@about.com'
```

5.  Find the tasks of a user in a specific room:
```
SELECT user_email, room_id, task_name, task_id
FROM tasks
WHERE user_email = 'sellsworthe1@about.com' AND
	room_id = 32
```
