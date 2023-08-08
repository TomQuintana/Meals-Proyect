<!-- # This proyect is oriented to Food Administration -->
<!---->
<!-- ## Build with: -->
<!--  ![JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/100px-Node.js_logo.svg.png)  -->
<!--  ![Typescript_logo_2020](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/60px-Typescript_logo_2020.svg.png)  -->
<!--  ![MongoDB_Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png)  -->
<!--  ![Tailwind_CSS_Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2880px-Tailwind_CSS_logo.svg.png)  -->
<!---->
<!---->
<!-- ## For see all endpoint you can go to -->
<!-- ``` -->
<!--     http://localhost:4000/docs/ -->
<!-- ``` -->
<!-- ## Features -->
<!-- - Add meals pasing: Name, stock, price, category, date -->
<!-- - Modify Meals using id of meal -->
<!-- - Deleted Meals using id of meal -->
<!-- - Get all Meals -->
<!-- o -->
<!---->
<h1 align="center">Meal Administration Proyect</h1>

<h3 align="left">Description</h3>
<p align="center">
    The Meals project is a meal manager to be able to list all meals, edit, create or delete them. It is composed of a frontend application and a backend server. The project is designed to provide an interface through the frontend, while the backend is responsible for managing the business logic and interaction with the database.</p>
   <p align="center">
   <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      alt="nodejs"
      width="80"
      height="80"
    />
    <img
      src="https://github.com/TomQuintana/TomQuintana/assets/69986961/6497df6f-2499-4ad6-ab3f-f1ae229d8a44"
      alt="Typescript_logo_2020"
       width="80"
      height="80"
    />
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      alt="mongodb"
      width="80"
      height="80"
    />
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="react"
       width="80"
      height="80"
    />
    <img
      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="tailwind"
      width="80"
      height="80"
    />   
</p>

## Estructura del Repositorio
``` bash

|-- backend/
    |-- index.ts
    |-- src/
        |-- config/
        |-- routes/
        |-- models/
        |-- controllers/
        |-- helpers/
    |-- ...

|-- frontend/
    |-- src/
        |-- app.tsx
        |-- main.tsx
        |-- App.css
        |-- index.css
        |-- components/
    |-- ...

|-- README.md
```

## Tecnologías Utilizadas 
- Frontend: ![React](https://img.shields.io/badge/-React-blue), ![React](https://img.shields.io/badge/-Typescript-blue), ![React](https://img.shields.io/badge/-Axios-purple), ![Tailwind](https://img.shields.io/badge/-Tailwind-lightblue)
- Backend: ![Node.js](https://img.shields.io/badge/-Node.js-green) ![Express](https://img.shields.io/badge/-Express-lightgrey), ![React](https://img.shields.io/badge/-Typescript-blue) ![MongoDB](https://img.shields.io/badge/-MongoDB-brightgreen)
- Gestión de Dependencias: ![MongoDB](https://img.shields.io/badge/-npm-brightgreen)


## Example
``` bash
Get /api/meal/all - Obtain all Meal, Dish or Ingredient

```

![AddMeals](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691522353/Screenshot_2023-08-08_at_16.18.59_gaeany.png)
``` bash
Post /api/meal/register - To add new Meal, Dish or Ingredient

```
![AddMeals](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691520962/Screenshot_2023-08-08_at_13.04.57_hvmj4i.png)  

``` bash
Put /api/meal/update/:id - To modify Meal, Dish or Ingredient

```
![AddMeals](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691520969/Screenshot_2023-08-08_at_13.06.00_ze540o.png)

``` bash
Delete /api/meal/delete/:id - To delete Meal, Dish or Ingredient

```
![AddMeals](https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691520977/Screenshot_2023-08-08_at_13.06.22_twbpew.png)


