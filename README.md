# Bubble

In this project, I built Bubble - a drink-finder app. It is not always easy to name exactly what you want to drink. What is usually easier though, it is to know what you want to taste, what you like in a drink. This is when Bubble does its magic, by associating the taste you want to the name of the drink you didn't know you want! Bubble has been deployed to Heroku.

[Click me to check Bubble out!](https://bubble-drink-finder.herokuapp.com/)

Bubble offers three categories to choose from on its main page:
- cocktail
- beer
- wine

Each category opens up to a specific series of questions (screenshots below). The user answers the questions and submits his/her answers. After submission, some infos related to the drink that best matches the user's answers will be displayed using a modal. Those info are:
- for the "cocktail" category: the name, the link towards the recipe and a picture of the cocktail.
- for the "beer" category: the name of the beer and a picture of the beer bottle/can.
- for the "wine" category: the name of the type of wine and a picture of a wine bottle as an example. 

For every category, some input validation has been defined so that the user can't submit the form without selecting an option for each question.

The database for each category can be accessed by clicking on the respective API links - API Cocktail Link, API Beer Link, API Wine Link - displayed at the bottom of every page.

---

### Version

This is the very first version of Bubble. The different databases for example are in an obvious need of more drinks!<br>
It is a work in progress...!

--- 

### Technologies used

To build this app, I used the following technologies:

- HTML
- CSS
- Bootstrap
- Node.js
- JavaScript/jQuery
- Express

---

### Code snippet showing how the best match is obtained between the data stored and the user's input

The comparison of the drinks' score (stored in the data files) and the user's score is performed on the server side, using a post request. The code shown below corresponds to the "cocktail" category as an example.

![Code snippet showing how the best match is obtained](https://github.com/SophM/Bubble/blob/master/for-readme/code-snippet-comparison.png?raw=true)

---

### Screenshots of the "home" page, the "cocktail" page, the "beer" page and the "wine" page

![Screenshot of the home page](https://github.com/SophM/Bubble/blob/master/for-readme/screenshot-main-page.png?raw=true)

![Screenshot of the cocktail page](https://github.com/SophM/Bubble/blob/master/for-readme/screenshot-cocktail-survey.png?raw=true)

![Screenshot of the beer page](https://github.com/SophM/Bubble/blob/master/for-readme/screenshot-beer-survey.png?raw=true)

![Screenshot of the wine page](https://github.com/SophM/Bubble/blob/master/for-readme/screenshot-wine-survey.png?raw=true)

---

### GIF showing Bubble in action with input validation

![GIF showing Bubble in action](https://github.com/SophM/Bubble/blob/master/for-readme/GIF-app-in-action.gif?raw=true)

---

### GIF showing the responsive layout of Bubble

![GIF showing the responsive layout of Bubble](https://github.com/SophM/Bubble/blob/master/for-readme/GIF-responsive-layout.gif?raw=true)

---

### Contribution

- Sophie Mallez
