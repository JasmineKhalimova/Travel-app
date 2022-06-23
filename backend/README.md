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

- Variable Types: 
    - Var: Before the advent of ES6, var declarations ruled.
        - Scope of Var: Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped. The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window. var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function
        - Issues with Var: var variables can be re-declared and updated. This means that we can do this within the same scope and won't get an error.
    
    - Let: let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var
        - Block scoped: A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let  is only available for use within that block. Let can be updated but not re-declared. Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope.

    - Const: Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
        - Block scoped: Like let declarations, const declarations can only be accessed within the block they were declared. const cannot be updated or re-declared. This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const.



