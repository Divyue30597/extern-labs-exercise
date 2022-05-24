# Extern-labs-exercise

This repository is for the extern lab exercise.

Statement : Write a template with a list of employees. 
The template receives the data in terms of variables from 
backend and render the employees list should be using JWT 
for authentication.

Technology Used: JWT, MongoDB as DB, Mongoose as ORM, Express.js, and JS and some validations as well. 

Implemented: Creation of User, Login feature and LoggedIn user should 
get list of all user present

# Creation of User

![image](https://user-images.githubusercontent.com/33261821/170105751-e02f0216-fb05-4251-b983-c97c00d1ec18.png)

As soon as the post request is hit in the console we can see that the data is persisted to the DB. 
As you can see in the picture below

![image](https://user-images.githubusercontent.com/33261821/170106026-1d7ea284-6852-48eb-af16-4aeafa396ac8.png)

# Login functionality

If we enter wrong email / password, we get an error warning. It can be seen below.

![image](https://user-images.githubusercontent.com/33261821/170106305-ea150d2b-dd7b-4a7a-8da5-c991f879f7e9.png)

If the user is successfully signs in the a new JWT is assigned to it. And that JWT is updated in 
the headers as well as cookies. And 200 success response is shown in postman as well as the console.

![image](https://user-images.githubusercontent.com/33261821/170106992-112cd3e2-8a10-4d5f-a404-37823a8abe06.png)

As it can be seen below, Once the logged in user, can access the users.

![image](https://user-images.githubusercontent.com/33261821/170107425-19dbf2f2-6c73-4000-bc00-5b031f1d3f19.png)

Thanks for this exercise.
