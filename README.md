# JCU Gym Management System

This a project assignment for CP3407 - Advanced Software Engineering.

## Team
Practical C - Group 1
Group number : 5
1. Kim Jihyun
2. Kim Jihun
3. Wei Shipeng
4. Yermukhamet Akbet
5. Choi Yunseo

# Project overview
The JCU Gym Management System is a web-based application prototype for managing gym registrations, bookings, and administration at James Cook University. 
The system targets two user roles—Gym Users and Administrators—and aims to streamline the gym experience with features like online registration, session bookings, and statistical tracking.

Technology Stack:
Frontend: HTML, CSS, JavaScript
Backend: Firebase (Authentication, Firestore, Hosting)
Database: Firebase Firestore
Authentication: Firebase Auth
Deployment: Firebase Hosting
Optional AI Feature: OpenAI API or custom ML model for gym recommendations

# Project goals
1. Enable Gym Users to:
Register via an online form.
Book gym sessions from an interactive schedule.
2. Enable Administrators to:
Monitor and manage user registrations.
Track gym usage statistics over time.
Export data for analysis and decision-making.
3. Integrate additional features like:
A virtual gym tour using embedded 3D models or video.
An AI-powered gym trainer for personalized workout plans based on user goals and activity logs.

# Team roles
Kim Jihyun – Frontend Developer
Responsibilities:
- Develop user registration and booking UI  
- Implement session interface and admin panel UI  
- Connect frontend with backend APIs

Kim Jihun – Frontend Developer
Responsibilities:
- Build frontend components and logic  
- Integrate with Firebase backend  
- Add AI features if applicable

Wei Shipeng – Backend Developer
Responsibilities:
- Set up and manage Firebase backend  
- Handle data storage, retrieval, and user auth  
- Maintain backend deployment

Yermukhamet Akbet – Frontend Developer
Responsibilities:
- Design and implement the User Profile Management interface, allowing users to view and update their personal information.
- Support the team by assisting with shared layout components such as navigation bars and responsive design elements.

Choi Yunseo - Frontend Developer
Responsibilities:
- Develop and maintain shared UI components (e.g., header, footer)
- Enhance responsive design and animation effects
- Assist with form validation and layout consistency

# Project Planning BEFORE Iteration-1 (see chapters 1–3)
Checklist / TODOs:
* Update this section during each weekly practical session.
* All GitHub entry timestamps must be before the Iteration-1 start date.
* User stories must follow the INVEST principle (see page 39).
* Create more user stories than will fit into Iterations 1 and 2 to practice prioritization.
* Link each user story using the format shown below:

1. [Register Gym Users via Online Form](./user_stories/user_story_01_register_user.md), priority 1, 3 days  
2. [Book Gym Sessions](./user_stories/user_story_02_book_sessions.md), priority 2, 3 days  
3. [Choose and Purchase Gym Cards](./user_stories/user_story_03_purchase_cards.md), priority 3, 2 days  
4. [View Available Workout Programs](./user_stories/user_story_04_view_programs.md), priority 4, 2 days  
5. [Read Latest Club News](./user_stories/user_story_05_club_news.md), priority 5, 2 days  
6. [Edit and Save User Profile](./user_stories/user_story_06_edit_profile.md), priority 6, 2 days  
7. [Confirm Booking with Success Feedback](./user_stories/user_story_07_booking_feedback.md), priority 7, 1 day  

Total: 15 days

## Iteration 1 [Duration: 27 June 2025 – 6 July 2025]
* Goal is to have 2 iterations during a trimester of teaching.
* Update the following during each weekly practical session.
* During pracs, you may experiment with using other GitHub ways of tracking changes, e.g. via pull requests.

1. [Register Gym Users via Online Form](./user_stories/user_story_01_register_user.md), priority 1, 3 days  
2. [Book Gym Sessions](./user_stories/user_story_02_book_sessions.md), priority 2, 3 days  
3. [Edit and Save User Profile](./user_stories/user_story_06_edit_profile.md), priority 6, 2 days  
4. [Confirm Booking with Success Feedback](./user_stories/user_story_07_booking_feedback.md), priority 7, 1 day  

Total: 9 days

## Iteration 2 [Duration: 9 July 2025 – 14 July 2025]
Goal is to have 2 iterations during a trimester of teaching.

1. [Choose and Purchase Gym Cards](./user_stories/user_story_03_purchase_cards.md), priority 3, 2 days  
2. [View Available Workout Programs](./user_stories/user_story_04_view_programs.md), priority 4, 2 days  
3. [Read Latest Club News](./user_stories/user_story_05_club_news.md), priority 5, 2 days  

Total: 6 days

### Not enough time / developers:
(None)
Total: 0 days

# Actual Iterations

1. [Iteration-1](./iteration_1.md)  
2. [Iteration-2](./iteration_2.md)


# Program Code Illustration

User can directly open our app with public network address: http://47.239.203.149/

TO open our program in local computer and check the situation, the user need to install node.js Link to: [downloadhttps://nodejs.org/en/download](https://nodejs.org/en/download).

TO start backend in localhost, user should install node first and add the firebase security key file into the  same name folder. Then use start to run index.js, which will create a default localhost.

TO open the web page, user also need to install node first, then make sure the localhost is running , final run the device.

Common Code used in terminal:
1. npm install          // install node
2. node index.js        // run backend index to start localhost
3. npm run dev          // run the device to open web

Vedio
