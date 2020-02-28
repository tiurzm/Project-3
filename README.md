### Project 3 University of Kansas Coding Boot Camp
# GroupAway Travel Planning App

Created by Team GroupAway 

Project Team Members: Tiur Mawaddah, Stephanie Truong, Cera Smart, and Jennifer Gaumnitz
____________

The target for the GroupAway app are people planning to take trips with a group of friends or family members. 

- - - -
Heroku-deployed app: https://groupaway-3.herokuapp.com/

GitHub repository: https://github.com/tiurzm/Project-3

Demo video: ADD LINK TO VIDEO
- - - -

### How You Can Get Started With This Project ###

<strong>To use the app:</strong> 

Visit the Heroku link above. 

![Home Page](./images_for_README/01_Home_Page.PNG)

Click on the "Register" button in the nav bar and go to the registration form to set up an account. Enter a username and password (at least 6 characters), and confirm the password. Then click "Sign Up". 

![Registration Form](./images_for_README/02_Registration_Form.PNG)

This form has validation, so the username must be unique and the password must be at least 6 characters and the two password fields must match.

![Registration Form Validation](./images_for_README/03_Registration_Form_Validation.PNG)

If you already have registered with GroupAway, then click on "Log In" button in the navbar, and in the form enter your username and password. 

![Log In Form](./images_for_README/04_Log_In_Form.PNG)

If the credentials are not entered correctly for an existing username or password, the form shows error messages.

![Log In Form Validation](./images_for_README/05_Log_In_Form_Validation.PNG)

Once registered and/or logged in, the profile page opens. On the profile page, you will see a welcome with your username, a paragraph with instructions, and a trip calendar. The nav bar changes to include buttons at the top right for "Calendar "Location "Chat and "Log Out".

![Profile Page](./images_for_README/06_Profile_Main_Page.PNG)

When you click on the calendar toward the bottom of the page, a modal opens to enter the name of a trip, the dates, and a description. It also allows you to add Guests to a trip. 

![Add A Trip](./images_for_README/07_Add_Trip_Modal.PNG)

Once the details are entered and the "Save Trip" button is pressed, the trip will be saved and appear on the calendar of the user and all the Guests.

![Trip Added to Calendar](./images_for_README/08_Trip_Added_to_Calendar.PNG)

If the user clicks on the trip on the calendar, the trip details modal opens and allows the user to change details and update or delete the trip. Each trip has a countdown to the start of the trip.

![Trip Added to Calendar](./images_for_README/09_Trip_Added_to_Calendar.PNG)

Pressing the "Location" button in the nav bar opens a page with a map where you can enter a destination and explore the map, with a Map or Satellite view and Full Screen view.

![Location Page](./images_for_README/10_Location_Page.PNG)

Pressing the "Chat" button in the nav bar opens a form to enter a chat name.

![Chat Sign In](./images_for_README/11_Chat_Sign_In_Form_Page.PNG)

Once the chat window opens, the user will see a Who's Online list to the left. Blue dots by the chat names indicate who is online. To the right is a large message screen that displays the last 100 messages. (These are stored on the backend with Pusher's Chatkit.) At the bottom is the New Message field for entering a message and a Send Message button.

![Chat Window](./images_for_README/12_Chat_Window.PNG)

And finally, this 404 page will display if the page the user requested is not found.


----------------------

<strong>To create the app from the files in our team's GitHub repository:</strong> 

First, clone the GitHub repository. You will need to have installed:

* Node
* Mongo database, Mongod, and mongoose

* And these dependencies:

    * @fullcalendar/core: 4.3.1
    * @fullcalendar/daygrid: 4.3.0
    * @fullcalendar/interaction: 4.3.0
    * @fullcalendar/moment-timezone: 4.4.0
    * @fullcalendar/react: 4.3.0
    * @fullcalendar/timegrid: 4.3.0
    * @pusher/chatkit-client: 1.13.4
    * @pusher/chatkit-server: 2.4.0
    * axios: 0.19.2
    * bcrypt-nodejs: "0.0.3
    * body-parser: 1.19.0
    * cookie-parser: 1.4.4
    * cors: 2.8.5
    * date-fns: 2.10.0
    * dotenv: 8.2.0
    * express: 4.17.1
    * express-flash-messages: 0.1.1
    * express-session: 1.17.0
    * helmet: 3.21.2
    * if-env: 1.0.4
    * local-storage: 2.0.0
    * moment: 2.24.0
    * moment-timezone: 0.5.27
    * mongodb: 3.5.3
    * mongoose: 5.8.11
    * node-sass: 4.13.1
    * passport: 0.4.1
    * passport-local: 1.0.0
    * passport-local-mongoose: 6.0.1
    * passport-session: 1.0.2
    * react-bootstrap: 1.0.0-beta.16
    * react-google-maps: 9.4.5
    * react-places-autocomplete: 7.2.1

You will need to have a Google API key and a Pusher's Chatkit account to obtain credentials for the map display and the chat instance and chat room.

Before running the server.js file using node.js, run "npm install" to download the dependencies defined in the package.json. 

Then run the script "npm start" at the command line to begin the server, and then navigate to localhost:3000 in your browser to see the HTML home page and proceed from there.

### Why the Project is Useful ### 

The app also fulfilled a project assignment for University of Kansas Coding Boot Camp, August 2019 to February 2020. It provided us with the opportunity to work with the following technologies:

* HTML5
* CSS
* JavaScript
* Mongo database, Mongod, and mongoose
* Express web server
* React
* Node web server
* Bootstrap 4.0 frontend framework
* Heroku for deployment
* mLab add-on for cloud-based Mongo database
* Passport.js
* FullCalendar API
* Moment.js
* Google Maps API
* Pusher's Chatkit (for backend chat handling)
* Favicon & App Icon Generator
* Git version-control system
* Slack messaging platform

Dev Dependencies also included:
* chai: 4.2.0
* chai-http: 4.3.0
* concurrently: 5.1.0
* coveralls: 3.0.9
* eslint: 6.8.0
* eslint-config-airbnb-base: 14.0.0
* eslint-plugin-import: 2.20.0
* kill-port: 1.6.0
* mocha: 7.0.1
* mocha-lcov-reporter: 1.3.0
* nodemon: 2.0.2
* nyc: 15.0.0
* supertest: 4.0.2

### Who Maintains and Contributes to the Project ###

  The team members who created the GroupAway app are Tiur Mawaddah, Stephanie Truong, Cera Smart, and Jennifer Gaumnitz.

### Where Users Can Get Help with This Project ###

  Questions? Contact Jennifer Gaumnitz at jlgaumnitz@gmail.com
