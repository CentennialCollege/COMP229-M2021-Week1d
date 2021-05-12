// IIFE = Immediately Invoked Function Expression
// AKA Anonymous Self-Executing function

"use strict";

(() =>
{
    function Start()
    {
        let myVariable = 10;
        console.log(`My number is: ${myVariable}`);
    }

    window.addEventListener("load", Start);
    
})();




