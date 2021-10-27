# mock-api-final-project

• npm install & npm run client-install 


    const Project!


      function projectPlanning (idea) {
  
      const result = "awesome"


      This project has both back-end and front-end. 
      Front-end will be writen using React, Css and JS.
      Back-end will be based on mongoDB using mongoose library, with NodeJS and express.

      The idea is a mock api: it offers itself to the users as a noSQL database, 
      with dynamic functionallity - add or remove data, read the data and create uniqe schema ("behind the scenes"):
      start your own noSQL database with unique Schema and validations.

      The purpose of the back-end is to be serve as noSQL platform, and later there will be for the user an optioin to create 
      his own end-point adress better security. test the server side.

      Nice To Have:
      Idealy (depends on development time and pority), offer a dynamic UI frontend.

      when the project is ready :
      use docker and create CI / CD pipeline. upload and use AWS serviecs.


      return result

      }

------------------------------------


Stages:
- planning widely (all parts, especially unknown)
- planning deeply(all steps)
- const times (schedule)

Key goals:
- add tests
- commit to Github often
- clear code with notes
- quick design (possibly with external libraries)

------------------------------------

## section 1 :  planning widely (mark unknowns)

    - design idea (draw)
    - basic react installation
    - mongo endpoint
    - authentication / unknown
    - user register and login (with credentials) / unknown
    - basic interface with mockApi functionality (must have) 
    - design

***verify key points (tests, github, code notes, avoid design margin)***

------------------------------------

## section 2 :  planning deeply (all steps)

- design idea (draw) :

      - draw pages, components and concepts.

      - understand mockApi idea (project core) :
        - design backend
        - authentication
        - User Schema
        - load users data

      - design user functionality :
        - users options
        - security
        - unique end-point
        - API uniqe Schema per user
        - load users data (stored in mongoDB on specific collection)

- basic components :

      - HOME
      - Register
      - Login
      - Server user's interface (data, options, guide)
      - Utilities
      - About
      - Contact (form)

- mongo endpoint :

      to add in the future : 
      - Initialize webApp endpoint per user

- authentication / unknown :

      - healthy connection between my app to mongoDB, verification 
      - Users Schema
      - controller validations

- user register and login (with credentials) / unknown :

      - basic registration, login, autehntication and UI. including tests

- basic interface with mockApi functionality (must to have) / unknown :

      - Dynamic Schemas for any users
      - Authentication security
      - store and save data to seperated collection (for all users)

- design (this project is mainly for back-end):

      - Nice to have (all functionality must work in comfortable and good looking UI)

	***verify key points (tests, github, code notes, avoid design margin)***

------------------------------------

## section 3 :  const times (schedule)

    - design idea (draw) - 2 Hour
    - basic components - 2 Hour
    - mongo endpoint - 1 Hour

    - authentication :user register and login (with credentials) / unknown :update times after trying. assumption 3-5 Hours. update : indeed 5 hours.

    - product interface with mockApi functionality (must to have) / unknown. update times after trying per each stage. Project Core :
      - Flexible Schema Per User : 3 hours - mainly research.
      - create Route end-points for user // React Modified Route + mongo UsersData end-points // to be added in the future.
      - desplay user stored data // Component of victorious !

    - design (NiceToHave)

***verify key points (tests, github, code notes, avoid design margin)***

------------------------------------

*Manage time and effort correctly and wisely;*
*Win the "unknown" barrier;*


![plot](./helpers/mockApi&#x20;work-flow.jpg)