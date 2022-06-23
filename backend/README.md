# Node & Express JS

- require one of the globally avable function e.g. require('fs); // print into file

- --save to save the dependency inside package.json or --save-dev if its only for dev

- to import modules/classes e.g. const express = require('express');

- using nodemon to automatically restart the server whenver changing server side code

- Routing means listing to certain HTTP method path combinations and then run diffrent code for every combination. 

- if you use return statment no other code will execute there after

- Model View Controller [MVC]

    - Model: It is responsible for maintaining the behavior and data of an application.
    - View: It is used to display the model in the user interface.
    - Controller: It acts as an interface between the Model and the View components. It takes user input, manipulates the data(model) and causes the view to update.

- Class is blue print for js object which containes methos e.g. function or logic 

- JS functions[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions]:

    - Declaration funtion e.g. ```function name([param[, param[, ... param]]]) { statements}``` => ```function myFunc(theObject) {theObject.brand = "Toyota";}```
        - name: The function name. 
        - param: The name of an argument to be passed to the function. 
        - statements: The statements comprising the body of the function.

    - Expression function e.g. ```function [name]([param[, param[, ... param]]]) {statements}``` => ```var myFunction = function() {statements}```
        - name: The function name. Can be omitted, in which case the function becomes known as an anonymous function. 
        - param: The name of an argument to be passed to the function.
        - statements: The statements comprising the body of the function.



