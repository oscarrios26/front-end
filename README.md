# CarInfo

<br>

## Overview

**CarInfo** is a helpful app that gives you all the performance specs information for any chosen vehicle. Users can also add, update or delete cars but they would need to be logged in. This is a very convenient app because it can get frustrating to keep googling for vehicles and not finding what you want. This app is built with Django and uses PostgreSQL for the back-end and React for the front-end.


<br>

## MVP

### Goals

- Build a RESTful JSON API in Django with user authentication with two relatable entities and stored in a PostgreSQL database.
- Implement full CRUD operations on both entities.
- Make 8 components and use Routes.
- Use grid and CSS for professional styling
- Add responsive design for better user experience on mobile and computer.
- Make a clean and professional UI.
- Make frequent commits to gibhub.
- Successful deployment to Netlify

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React       | Front-end JavaScript library for building user interfaces based on UI components. |
| React-router-dom   | Enables you to implement dynamic routing in a web app. |
| Axios | Axios is a library that serves to create HTTP requests to API endpoints.|
| pipenv | Will create our virtual environment. |
| Django      | Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. |
| Django REST Framework  | A framework that works with Django, it gives you an interface for you to interact with your API in the browser. |
| psycopg2-binary | Is a PostgreSQL adapter for the Python programming language. |
| Cors | Works by requiring the server to include a specific set of headers that allow a browser to determine if and when cross-domain requests should be allowed.
| djangorestframework_simplejwt | Provides a JSON Web Token authentication backend for the Django REST Framework. |

<br>

### Client (Front End)

#### Wireframes
Figma URL : https://www.figma.com/file/FeB8AtSsLpjThfSHqGS6mj/Untitled?node-id=0%3A1

<img width="1110" alt="Screen Shot 2022-01-24 at 12 33 28 PM" src="https://user-images.githubusercontent.com/92955104/150843090-464213da-e4ea-44b1-a924-799cfeb908c1.png">






#### Component Tree
Whimsical URL : https://whimsical.com/K8CVAvRZoScHoXbfVg6uTk


![untitled (7)](https://user-images.githubusercontent.com/92955104/150866858-6b28c556-b8c1-41bd-b90c-1419b3acadb4.png)





#### Component Architecture
 

``` structure

src
|__ components/
      |__ Add.jsx/css.
      |__ Edit.jsx/css.
      |__ Footer.jsx/css.
      |__ Header.jsx/css.
      |__ Layout.jsx/css.
      |__ Nav.jsx/css.
      |__ Delete.jsx/css.
      |__ AllCars.jsx/css.
      |__ Dropdown.jsx/css.
      |__ SubmitBtn.jsx/css
|__ screens/
      |__ About.jsx/css.
      |__ CreateCar.jsx
      |__ Cars.jsx
      |__ Home.jsx/css.
      |__ SignIn.jsx/css.
      |__ SignUp.jsx/css.
      |__ CarDetail.jsx/css.
      |__ Update.jsx/css
|__ services/
      |__ apiConfig.js
      |__ cars.js
      |__ user.js
```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up Django      |   H    |    3hrs      |    TBD    |   TBD       |
| Make RESTful JSON API    |    H     |     3 hrs      |     TBD     |    TBD    |
| Auth and API deployed to Heroku | H  |     2hrs      |    TBD     |     TBD       |
| Home screen| H | 4hrs| TBD | TBD |
| SignIn, SignUp screen| H | 4hrs| TBD | TBD |
| AllCars screen| H | 4hrs| TBD | TBD |
| Car screen| H | 4hrs| TBD | TBD |
| EditCar, Addcar screen| H | 4hrs| TBD | TBD |
| About screen | H | 2hrs | TBD | TBD |
| CSS Home| H | 3hrs| TBD | TBD |
| CSS SignIn, SignUp| H | 4hrs| TBD | TBD |
| CSS AllCars screen| H | 3hrs | TBD | TBD |
| CSS Cars screen| H | 3hrs | TBD | TBD |
| CSS About screen| H | 3hrs | TBD | TBD |
| Add grid and flexbox| H | 4hrs| TBD | TBD |
| TOTAL               |    H     |     45 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model


![untitled (4)](https://user-images.githubusercontent.com/92955104/150853724-07eb19fb-004c-4abb-a662-e5732d66d227.png)






<br>

***

## Post-MVP

Implement a filter UI for better customer experience.

***



