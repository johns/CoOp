import psycopg2
import sys
import os
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


if (len(sys.argv) < 4):
    print("Not enough arguments. <USERNAME, PASSWORD, DATABASE NAME>")
    sys.exit()


cwd = os.getcwd()
path = cwd + "/mock_data/"

USERNAME = sys.argv[1]
PASSWORD = sys.argv[2]
DB_NAME = sys.argv[3]


con = psycopg2.connect(
    dbname=DB_NAME,
    user=USERNAME,
    host='',
    password=PASSWORD
)

con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

cur = con.cursor()

group_member_copy = "COPY group_member (member_id,user_email,date_joined,room_id) FROM STDIN with csv header delimiter ','"
with open(path + "group_member.csv") as f:
    cur.copy_expert(group_member_copy, f)
print("Table: group_member populated.")

message_copy = "COPY message (message_id,room_id,user_email,message_content,date_sent) FROM STDIN with csv header delimiter ','"
with open(path + "message.csv") as f:
    cur.copy_expert(message_copy, f)
print("Table: message populated.")


room_copy = "COPY room (room_id, name, description, theme, room_photo, private) FROM STDIN with csv header delimiter ','"
with open(path + "room.csv") as f:
    cur.copy_expert(room_copy, f)
print("Table: room populated.")


tasks_copy = "COPY tasks (task_id,user_email,room_id,task_name,start_point,progress,end_point) FROM STDIN with csv header delimiter ','"
with open(path + "tasks.csv") as f:
    cur.copy_expert(tasks_copy, f)
print("Table: tasks populated.")


user_profile_copy = "COPY user_profile (user_email,display_name,password,profile_picture) FROM STDIN with csv header delimiter ','"
with open(path + "user_profile.csv") as f:
    cur.copy_expert(user_profile_copy, f)
print("Table: user_profile populated.")


con.commit()

con.close()
cur.close()

print('All Mock Data added within ' + DB_NAME + '.')
