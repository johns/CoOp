##  Requirements Specification

__What follows is an example of Requirements Specification structure__

1.1  Introduction
The introductory paragraph should consist of a one-paragraph description of the system being designed, and should include a high-level diagram of the system components.

BetterWe is a react native application built to run on iOS and Android systems. It's purpose is to provide groups of people with a platform where they can keep each other accountable for activities they are doing together. Each user will make an account and be able to keep track of the groups that they are in. The main page for an goal will have the core functionality of a group messaging application. Added on to the messaging interface will be accountability features. Some of these features include checking in on your friend's progress, having your friend prove their check-ins, waging money for competing towards a goal, etc.

1.2  CSCI Component Breakdown

CSCI BetterWe is composed of the following CSCs:

1.2.1 GUI Client CSC

1.2.1.1 Client Login/Registration Screen CSU -- If the user is not logged in, they will be greeted with this screen to either log in to their account or create an account.

1.2.1.2 Client Activities List Panel CSU -- This panel is where the user sees the activities that they are participating in.

1.2.1.2.1 TaskBanner module -- Each goal will have an icon or text associated with it so the user can easily identify their different groups.

1.2.1.3 Client Current Task Screen CSU -- This screen is where all of the actions happens. The user can talk to their group members and take advantage of accountability features.

1.3  Functional Requirements by CSC

1.3.1  Graphical User Interface

1.3.1.1



                          .
                          .
                          .

1.3.n  Functional Requirement n

1.4  Performance Requirements by CSC

1.4.1  Logging in or Registering -- Logging in and registering for a BetterWe account should be integrated into Facebook or Google for a seamless login. The user should log in once and not have to worry about logging in ever again. The user should only see the registration/login menu if they are not logged in on that device.

1.4.2 Creating a New Task -- When creating an goal, the user will be able to select the accountability features that they want to use for their goal. It is also important to be able to invite friends to your group from your contacts.

1.4.3 Selecting an Task Banner -- To select an goal that has already been made, the user will click on the banner for that goal. The banner will be text with the title of the goal and/or a picture of the user's choosing.

1.4.4 Locating Features to Use in Group Chat Environment -- At the base of the app is group messaging and communication. When on this page for an goal, the user will have to be able to easily locate the accountability features. They could be presented in a side bar or a bar like that of emoji options when you are typing.

1.5  Project Environment Requirements

1.5.1  Development Environment Requirements

1.5.1.1 Android Development

1.5.1.1.1 Android Studio for Android Phone Emulator

1.5.1.1.2 Mac, Windows, or Linux System

1.5.1.2 iPhone Development

1.5.1.2.1 Xcode

1.5.1.2.2 An iPhone


1.5.2  Execution Environment Requirements
