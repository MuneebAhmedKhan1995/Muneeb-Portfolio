import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

// 1st Variable Screenshoot
import Variable1 from '../assets/Variable1.png';
import Variable2 from '../assets/Variable2.png';
import Variable3 from '../assets/Variable3.png';
import Variable4 from '../assets/Variable4.png';
import Variable5 from '../assets/Variable5.png';
import Variable6 from '../assets/Variable6.png';
import Variable7 from '../assets/Variable7.png';
import Variable8 from '../assets/Variable8.png';
import Variable9 from '../assets/Variable9.png';
import Variable10 from '../assets/Variable10.png';

// 2nd Operator Screenshoot
import Operator1 from '../assets/Operator1.png';
import Operator2 from '../assets/Operator2.png';
import Operator3 from '../assets/Operator3.png';
import Operator4 from '../assets/Operator4.png';
import Operator5 from '../assets/Operator5.png';
import Operator6 from '../assets/Operator6.png';
import Operator7 from '../assets/Operator7.png';
import Operator8 from '../assets/Operator8.png';
import Operator9 from '../assets/Operator9.png';
import Operator10 from '../assets/Operator10.png';

// 3rd Switch Statment Screenshoot
import Switch1 from '../assets/Switch1.png';
import Switch2 from '../assets/Switch2.png';
import Switch3 from '../assets/Switch3.png';
import Switch4 from '../assets/Switch4.png';
import Switch5 from '../assets/Switch5.png';
import Switch6 from '../assets/Switch6.png';
import Switch7 from '../assets/Switch7.png';
import Switch8 from '../assets/Switch8.png';
import Switch9 from '../assets/Switch9.png';
import Switch10 from '../assets/Switch10.png';

// 4th If-Else Screenshoot
import Else1 from '../assets/Else1.png';
import Else2 from '../assets/Else2.png';
import Else3 from '../assets/Else3.png';
import Else4 from '../assets/Else4.png';
import Else5 from '../assets/Else5.png';
import Else6 from '../assets/Else6.png';
import Else7 from '../assets/Else7.png';
import Else8 from '../assets/Else8.png';
import Else9 from '../assets/Else9.png';
import Else10 from '../assets/Else10.png';

// 5th All Loop Screenshoot
import Loop1 from '../assets/Loop1.png';
import Loop2 from '../assets/Loop2.png';
import Loop3 from '../assets/Loop3.png';
import Loop4 from '../assets/Loop4.png';
import Loop5 from '../assets/Loop5.png';
import Loop6 from '../assets/Loop6.png';
import Loop7 from '../assets/Loop7.png';
import Loop8 from '../assets/Loop8.png';
import Loop9 from '../assets/Loop9.png';
import Loop10 from '../assets/Loop10.png';

// 6th Function Screenshoot
import Functionjs1 from '../assets/Functionjs1.png';
import Functionjs2 from '../assets/Functionjs2.png';
import Functionjs3 from '../assets/Functionjs3.png';
import Functionjs4 from '../assets/Functionjs4.png';
import Functionjs5 from '../assets/Functionjs5.png';
import Functionjs6 from '../assets/Functionjs6.png';
import Functionjs7 from '../assets/Functionjs7.png';
import Functionjs8 from '../assets/Functionjs8.png';
import Functionjs9 from '../assets/Functionjs9.png';
import Functionjs10 from '../assets/Functionjs10.png';

// 7th Error Handling Screenshoot
import Error1 from '../assets/Error1.png';
import Error2 from '../assets/Error2.png';
import Error3 from '../assets/Error3.png';
import Error4 from '../assets/Error4.png';
import Error5 from '../assets/Error5.png';
import Error6 from '../assets/Error6.png';
import Error7 from '../assets/Error7.png';
import Error8 from '../assets/Error8.png';
import Error9 from '../assets/Error9.png';
import Error10 from '../assets/Error10.png';

// 8th Classes Screenshoot
import Classesjs1 from '../assets/Classesjs1.png';
import Classesjs2 from '../assets/Classesjs2.png';
import Classesjs3 from '../assets/Classesjs3.png';
import Classesjs4 from '../assets/Classesjs4.png';
import Classesjs5 from '../assets/Classesjs5.png';
import Classesjs6 from '../assets/Classesjs6.png';
import Classesjs7 from '../assets/Classesjs7.png';
import Classesjs8 from '../assets/Classesjs8.png';
import Classesjs9 from '../assets/Classesjs9.png';
import Classesjs10 from '../assets/Classesjs10.png';

// 9th Object Screenshoot
import Object1 from '../assets/Object1.png';
import Object2 from '../assets/Object2.png';
import Object3 from '../assets/Object3.png';
import Object4 from '../assets/Object4.png';
import Object5 from '../assets/Object5.png';

import Refrence1 from '../assets/Refrence1.png';
import Refrence2 from '../assets/Refrence2.png';
import Refrence3 from '../assets/Refrence3.png';
import Refrence4 from '../assets/Refrence4.png';
import Refrence5 from '../assets/Refrence5.png';

import Keyword1 from '../assets/Keyword1.png';
import Keyword2 from '../assets/Keyword2.png';
import Keyword3 from '../assets/Keyword3.png';
import Keyword4 from '../assets/Keyword4.png';
import Keyword5 from '../assets/Keyword5.png';

import constractor1 from '../assets/constractor1.png';
import constractor2 from '../assets/constractor2.png';
import constractor3 from '../assets/constractor3.png';
import constractor4 from '../assets/constractor4.png';
import constractor5 from '../assets/constractor5.png';

import Chaining1 from '../assets/Chaining1.png';
import Chaining2 from '../assets/Chaining2.png';
import Chaining3 from '../assets/Chaining3.png';
import Chaining4 from '../assets/Chaining4.png';
import Chaining5 from '../assets/Chaining5.png';

import Flag1 from '../assets/Flag1.png';
import Flag2 from '../assets/Flag2.png';
import Flag3 from '../assets/Flag3.png';
import Flag4 from '../assets/Flag4.png';
import Flag5 from '../assets/Flag5.png';

import Getter1 from '../assets/Getter1.png';
import Getter2 from '../assets/Getter2.png';
import Getter3 from '../assets/Getter3.png';
import Getter4 from '../assets/Getter4.png';
import Getter5 from '../assets/Getter5.png';

import Prototype1 from '../assets/Prototype1.png';
import Prototype2 from '../assets/Prototype2.png';
import Prototype3 from '../assets/Prototype3.png';
import Prototype4 from '../assets/Prototype4.png';
import Prototype5 from '../assets/Prototype5.png';

import Method1 from '../assets/Method1.png';
import Method2 from '../assets/Method2.png';
import Method3 from '../assets/Method3.png';
import Method4 from '../assets/Method4.png';
import Method5 from '../assets/Method5.png';

import Native1 from '../assets/Native1.png';
import Native2 from '../assets/Native2.png';
import Native3 from '../assets/Native3.png';
import Native4 from '../assets/Native4.png';
import Native5 from '../assets/Native5.png';

//10th Module ScreenShot

import Module1 from '../assets/Module1.png';
import Module2 from '../assets/Module2.png';
import Module3 from '../assets/Module3.png';
import Module4 from '../assets/Module4.png';
import Module5 from '../assets/Module5.png';
import Module6 from '../assets/Module6.png';
import Module7 from '../assets/Module7.png';
import Module8 from '../assets/Module8.png';

// 11th Promises Screenshot

import Callback1 from '../assets/Callback1.png';
import Callback2 from '../assets/Callback2.png';
import Callback3 from '../assets/Callback3.png';
import Callback4 from '../assets/Callback4.png';
import Callback5 from '../assets/Callback5.png';

import Promises1 from '../assets/Promises1.png';
import Promises2 from '../assets/Promises2.png';
import Promises3 from '../assets/Promises3.png';
import Promises4 from '../assets/Promises4.png';
import Promises5 from '../assets/Promises5.png';

import PromisesChaining1 from '../assets/PromisesChaining1.png';
import PromisesChaining2 from '../assets/PromisesChaining2.png';
import PromisesChaining3 from '../assets/PromisesChaining3.png';
import PromisesChaining4 from '../assets/PromisesChaining4.png';
import PromisesChaining5 from '../assets/PromisesChaining5.png';

import ErrorHandling1 from '../assets/ErrorHandling1.png';
import ErrorHandling2 from '../assets/ErrorHandling2.png';
import ErrorHandling3 from '../assets/ErrorHandling3.png';
import ErrorHandling4 from '../assets/ErrorHandling4.png';
import ErrorHandling5 from '../assets/ErrorHandling5.png';

import PromisesMethod1 from '../assets/PromisesMethod1.png';
import PromisesMethod2 from '../assets/PromisesMethod2.png';
import PromisesMethod3 from '../assets/PromisesMethod3.png';
import PromisesMethod4 from '../assets/PromisesMethod4.png';
import PromisesMethod5 from '../assets/PromisesMethod5.png';

import Promisification1 from '../assets/Promisification1.png';
import Promisification2 from '../assets/Promisification2.png';
import Promisification3 from '../assets/Promisification3.png';
import Promisification4 from '../assets/Promisification4.png';
import Promisification5 from '../assets/Promisification5.png';

import AsynAwait1 from '../assets/AsynAwait1.png';
import AsynAwait2 from '../assets/AsynAwait2.png';
import AsynAwait3 from '../assets/AsynAwait3.png';
import AsynAwait4 from '../assets/AsynAwait4.png';
import AsynAwait5 from '../assets/AsynAwait5.png';

// 12th DOM Screenshot  

import manipulation1 from '../assets/manipulation1.png';
import manipulation2 from '../assets/manipulation2.png';
import manipulation3 from '../assets/manipulation3.png';
import manipulation4 from '../assets/manipulation4.png';
import manipulation5 from '../assets/manipulation5.png';

import Transversal1 from '../assets/Transversal1.png';
import Transversal2 from '../assets/Transversal2.png';
import Transversal3 from '../assets/Transversal3.png';
import Transversal4 from '../assets/Transversal4.png';
import Transversal5 from '../assets/Transversal5.png';

import Selection1 from '../assets/Selection1.png';
import Selection2 from '../assets/Selection2.png';
import Selection3 from '../assets/Selection3.png';
import Selection4 from '../assets/Selection4.png';
import Selection5 from '../assets/Selection5.png';

import EventHandling1 from '../assets/EventHandling1.png';
import EventHandling2 from '../assets/EventHandling2.png';
import EventHandling3 from '../assets/EventHandling3.png';
import EventHandling4 from '../assets/EventHandling4.png';
import EventHandling5 from '../assets/EventHandling5.png';

import FormInput1 from '../assets/FormInput1.png';
import FormInput2 from '../assets/FormInput2.png';
import FormInput3 from '../assets/FormInput3.png';
import FormInput4 from '../assets/FormInput4.png';
import FormInput5 from '../assets/FormInput5.png';

// 13th Array Screenshot

import Push1 from '../assets/Push1.png';
import Push2 from '../assets/Push2.png';
import Push3 from '../assets/Push3.png';
import Push4 from '../assets/Push4.png';
import Push5 from '../assets/Push5.png';

import Pop1 from '../assets/Pop1.png';
import Pop2 from '../assets/Pop2.png';
import Pop3 from '../assets/Pop3.png';
import Pop4 from '../assets/Pop4.png';
import Pop5 from '../assets/Pop5.png';

import Unshift1 from '../assets/Unshift1.png';
import Unshift2 from '../assets/Unshift2.png';
import Unshift3 from '../assets/Unshift3.png';
import Unshift4 from '../assets/Unshift4.png';
import Unshift5 from '../assets/Unshift5.png';

import Shift1 from '../assets/Shift1.png';
import Shift2 from '../assets/Shift2.png';
import Shift3 from '../assets/Shift3.png';
import Shift4 from '../assets/Shift4.png';
import Shift5 from '../assets/Shift5.png';

import Splice1 from '../assets/Splice1.png';
import Splice2 from '../assets/Splice2.png';
import Splice3 from '../assets/Splice3.png';
import Splice4 from '../assets/Splice4.png';
import Splice5 from '../assets/Splice5.png';

import Slice1 from '../assets/Slice1.png';
import Slice2 from '../assets/Slice2.png';
import Slice3 from '../assets/Slice3.png';
import Slice4 from '../assets/Slice4.png';
import Slice5 from '../assets/Slice5.png';

import Concreate1 from '../assets/Concreate1.png';
import Concreate2 from '../assets/Concreate2.png';
import Concreate3 from '../assets/Concreate3.png';
import Concreate4 from '../assets/Concreate4.png';
import Concreate5 from '../assets/Concreate5.png';

import Join1 from '../assets/Join1.png';
import Join2 from '../assets/Join2.png';
import Join3 from '../assets/Join3.png';
import Join4 from '../assets/Join4.png';
import Join5 from '../assets/Join5.png';

import Sort1 from '../assets/Sort1.png';
import Sort2 from '../assets/Sort2.png';
import Sort3 from '../assets/Sort3.png';
import Sort4 from '../assets/Sort4.png';
import Sort5 from '../assets/Sort5.png';

import Reverse1 from '../assets/Reverse1.png';
import Reverse2 from '../assets/Reverse2.png';
import Reverse3 from '../assets/Reverse3.png';
import Reverse4 from '../assets/Reverse4.png';
import Reverse5 from '../assets/Reverse5.png';

import Find1 from '../assets/Find1.png';
import Find2 from '../assets/Find2.png';
import Find3 from '../assets/Find3.png';
import Find4 from '../assets/Find4.png';
import Find5 from '../assets/Find5.png';

import FindIndex1 from '../assets/FindIndex1.png';
import FindIndex2 from '../assets/FindIndex2.png';
import FindIndex3 from '../assets/FindIndex3.png';
import FindIndex4 from '../assets/FindIndex4.png';
import FindIndex5 from '../assets/FindIndex5.png';

import Split1 from '../assets/Split1.png';
import Split2 from '../assets/Split2.png';
import Split3 from '../assets/Split3.png';
import Split4 from '../assets/Split4.png';
import Split5 from '../assets/Split5.png';

import Some1 from '../assets/Some1.png';
import Some2 from '../assets/Some2.png';
import Some3 from '../assets/Some3.png';
import Some4 from '../assets/Some4.png';
import Some5 from '../assets/Some5.png';

import Every1 from '../assets/Every1.png';
import Every2 from '../assets/Every2.png';
import Every3 from '../assets/Every3.png';
import Every4 from '../assets/Every4.png';
import Every5 from '../assets/Every5.png';

import Include1 from '../assets/Include1.png';
import Include2 from '../assets/Include2.png';
import Include3 from '../assets/Include3.png';
import Include4 from '../assets/Include4.png';
import Include5 from '../assets/Include5.png';

import Index1 from '../assets/Index1.png';
import Index2 from '../assets/Index2.png';
import Index3 from '../assets/Index3.png';
import Index4 from '../assets/Index4.png';
import Index5 from '../assets/Index5.png';

import Map1 from '../assets/Map1.png';
import Map2 from '../assets/Map2.png';
import Map3 from '../assets/Map3.png';
import Map4 from '../assets/Map4.png';
import Map5 from '../assets/Map5.png';

import Filter1 from '../assets/Filter1.png';
import Filter2 from '../assets/Filter2.png';
import Filter3 from '../assets/Filter3.png';
import Filter4 from '../assets/Filter4.png';
import Filter5 from '../assets/Filter5.png';

import ForEach1 from '../assets/ForEach1.png';
import ForEach2 from '../assets/ForEach2.png';
import ForEach3 from '../assets/ForEach3.png';
import ForEach4 from '../assets/ForEach4.png';
import ForEach5 from '../assets/ForEach5.png';


const JavaScriptProjects = () => { 
    const categories = [
        {
            id: 1,
            title: "1ST Variable",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Variable1,
                    code: `<!DOCTYPE html>
<html>
<head>
    <title>Variable Assignment 1</title>
</head>
<body>
    <script
    let Name = 'Muneeb Ahmed Khan';
    console.log("My Name is: " + Name);
    </script>
</body>
</html>`,
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Variable2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>
        const Age= 19;
        const FriendAge=22;
        let Sum= Age+FriendAge;
        console.log("My Age is ="+" " + Age);
        console.log("My Friend Age is ="+" " + FriendAge);
        console.log("Sum of Both Age ="+" " + Sum);
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Variable3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>
        const Pi=3.14159;
        console.log(Pi);
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Variable4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>
        var a='Red';
        console.log(a+" "+"is my Favourite Colour");
    </script>
</body>
</html>`        },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Variable5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>
        let a=24;
        let b=28;

        a=a+b;
        b=a+b;
        b=a-b;
        a=a-b;

        console.log(a,b);
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Variable6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>
        
        //Declare a variable with no initial value, then assign a number to it;
        
        let a;
        a=78;
        console.log(a);
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Variable7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>
        
        //Create a variable that holds the result of multiplying two numbers.
        
        let a=2;
        let b=9;
        let sum=a+b;
        let Mul=a*b;
        let Div=a/b;
        let Sub=a-b;
        console.log("Sum ="+" "+sum);
        console.log("Multiplication ="+" "+Mul);
        console.log("Division ="+" "+Div);
        console.log("Subtraction ="+" "+Sub);
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Variable8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>
    // Store the result of dividing two numbers and log whether the result is an integer
    let a = 8;
    let b = 2;
    let result = a / b;
    const isInteger = Number.isInteger(result);
    console.log('Result: ' + result);
    console.log('Is the result an integer? ' + isInteger);
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Variable9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9</title>
</head>
<body>
    <script>

        //Declare variables for first name, last name, and age. Log a sentence combining them

        var firstname= 'Muneeb';
        var Lastname= 'Ahmed Khan';
        let Age= '19';
        console.log("My Name is"+" "+ firstname);
        console.log("My Lastname is"+" "+ Lastname);
        console.log("My Age is"+" "+ Age);
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Variable10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>
        //Declare a Boolean variable to indicate whether today is sunny. Log the value

        const isSunny = true;
        console.log("Is today sunny?" +" "+ isSunny);

    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 2,
            title: "2ND Operator Assignments",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Operator1,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Use the addition operator to add two numbers and display the result.

        let a=25;
        let b=25;
        var result=a+b;
        console.log("Use a Addition Operator"+" "+result);
    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Operator2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use the modulus operator to check if a number is even or odd.

        let number = 7; // Replace with any number you want to check
        if (number % 2 === 0) {
        console.log(number + " is even.");
        } else {
        console.log(number + " is odd.");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Operator3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Write a program to compare two numbers and log which is larger.

        let a=20;
        let b=30;
        if(a>b){
            console.log("a is larger than b");
        }
        else if(a<b){
            console.log("a is smaller than b");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Operator4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

    //Use the increment operator to increase a variable by 1. 

    let a=20;
    let b=a++;
    console.log("Value of a is =" +a);
    console.log("Value of b is =" +b);
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Operator5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use the decrement operator to decrease a variable by 1.

        let a=20;
        let b=a--;
        console.log("Value of a is ="+a);
        console.log("Value of b is ="+b);
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Operator6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>

        //Write a program to calculate the area of a rectangle (length × width).

        var length=20;
        var width=20;
        let Result=length*width; //A = w*l
        console.log("Area of Rectangle is ="+" "+Result);
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Operator7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

        //Use the += operator to add 10 to a variable.

        let a=10;
        let b='Muneeb';
        console.log(a+=10);
        console.log(b+=" "+'Ahmed Khan');

    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Operator8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

        //Write a program to calculate the simple interest (P × R × T) / 100.

        let Math=90;
        let Physics=70;
        let Chemistry=60;
        let sum=Math+Physics+Chemistry;
        let Percentage=(Math*Physics*Chemistry)/100;
        console.log("The Result of Three Subjects is ="+" "+ sum);
        console.log("The Percentage is ="+" "+ Percentage);
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Operator9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Assignment No 9</title>
</head>
<body>
    <script>

        //Create a program to find the remainder when dividing 25 by 4.

        let a=25;
        let b=4;
        let remainder=25%4;
        console.log("The Remainder is ="+" "+ remainder);
    </script>
</body>
</html>`,
                    liveDemo: "https://1st-variable-assignment-3.vercel.app/"
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Operator10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

        //Check whether two strings are equal using the equality operator.

        let strings1='Hello';
        let strings2='hello';
        if(strings1==strings2){
            console.log("The Strings are Equal");
        }
        else{
            console.log("The Strings are not Equal");
        }

    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 3,
            title: "3RD Switch Statment",
            screenshot: Switch1,
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a program to display the name of a day based on a number (1 for Monday, etc.)

        let day=prompt("Please Enter The Number");
        switch(day){
            case '1':
            console.log("Today is Monday");
            break;

            case '2':
            console.log("Today is Tuesday");
            break;

            case '3':
            console.log("Today is Wednesday");
            break;

            case '4':
            console.log("Today is Thursday");
            break;

            case '5':
            console.log("Today is Friday");
            break;

            case '6':
            console.log("Today is Saturday");
            break;

            case '7':
            console.log("Today is Sunday");
            break;

            default:
                console.log("This Number is Not Exsist");
        }

    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Switch2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Create a program that takes a month number and logs the number of days in that month.

        let month=prompt("Please Enter The Name of Month");
        switch(month){

            case 'Jan':
            console.log("January have 30 Day");
            break;

            case 'Feb':
            console.log("Februry have 29 Day");
            break;

            case 'March':
            console.log("March have 30 Day");
            break;

            case 'April':
            console.log("April have 30 Day");
            break;

            case 'May':
            console.log("May have 31 Day");
            break;

            case 'Jun':
            console.log("Jun have 30 Day");
            break;

            case 'July':
            console.log("July have 31 Day");
            break;

            case 'Aug':
            console.log("Augest have 31 Day");
            break;

            case 'Sep':
            console.log("September have 30 Day");
            break;

            case 'Oct':
            console.log("Octuber have 31 Day");
            break;

            case 'Nov':
            console.log("November have 30 Day");
            break;

            case 'Dec':
            console.log("December have 31 Day");
            break;
        }
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Switch3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Use a switch statement to classify a character as a vowel or consonant.

        let vowel=prompt("Please Enter a Latter");
        switch (vowel){

            case 'a':
            console.log("a is a Vowel Latteer");
            break;

            case 'e':
            console.log("e is a Vowel Latteer");
            break;

            case 'i':
            console.log("i is a Vowel Latteer");
            break;

            case 'o':
            console.log("o is a Vowel Latteer");
            break;

            case 'u':
            console.log("u is a Vowel Latteer");
            break;

            default:
                console.log("This is Not a Vowel Latter");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Switch4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a program to assign grades based on marks (A, B, C, D, F).

        let grades=prompt("Plesae Enter The Grade");
        switch(grades){

            case 'A':
            console.log("Excellent! You Achieved a Highest Marks in the Class");
            break;

            case 'B':
            console.log("Very Good! You Achieved a Best Marks in the Class");
            break;

            case 'C':
            console.log("Good! You Achieved a Better Marks in the Class");
            break;

            case 'D':
            console.log("Bad! You Achieved a Lower Marks in the Class");
            break;

            case 'F':
            console.log("Very Bad! You are Fail in the Class");
            break;

            default:
                console.log("This Latter is Not Exsist");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Switch5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>

        //Create a calculator using a switch statement for operations (+, -, *, /).

        let Number1=prompt("Please Enter a First Number");
        let Number2=prompt("Please Enter a Second Number");
        let operations=prompt("Please Enter a Operation Name");
        switch(operations,Number1,Number2){

        case 'Add':
        console.log("This is a Addition of Two Number ="+" "+ Number1+Number2);
        break;

        case 'Mul':
        console.log("This is a Multiplication of Two Number ="+" "+Number1*Number2);
        break;

        case 'Sub':
        console.log("This is a Subtraction of Two Number ="+" "+Number1-Number2);
        break;

        case 'Div':
        console.log("This is a Division of Two Number ="+" "+Number1/Number2);
        break;

        case 'Mod':
        console.log("This is a Modulus of Two Number ="+" "+Number1%Number2);
        break;

        }

    
    
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Switch6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 6</title>
</head>
<body>
    <script>

        //Use a switch statement to determine the type of triangle based on side lengths.

        let a=prompt("Please Enter a First Side Length");
        let b=prompt("Please Enter a Second Side Length");
        let c=prompt("Please Enter a Third Side Length");

        if (a + b > c && a + c > b && b + c > a) {
        switch (true) {
        case a === b && b === c:
        console.log("This is an Equilateral Triangle.");
        break;
        case a === b || b === c || a === c:
            console.log("This is an Isosceles Triangle.");
        break;
        default:
            console.log("This is a Scalene Triangle.");
        break;
    }
}
    else {
    console.log("The given sides do not form a valid triangle.");
}
</script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Switch7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

        //Write a program to print the season name based on a month number.

        let Name=prompt("Please Enter a Name of Month");
        switch(Name){

            case 'Dec':
            case 'dec':
            case 'Jan':
            case 'jan':
            case 'Feb':
            case 'feb':
            console.log(Name+" "+" is a Winter Season");
            break;

            case 'March':
            case 'march':
            case 'April':
            case 'april':
            case 'May':
            case 'may':
            console.log(Name+" "+" is a Spring Season");
            break;

            case 'Jun':
            case 'jun':
            case 'July':
            case 'july':
            case 'Aug':
            case 'aug':
            console.log(Name+" "+" is a Summar Season");
            break;

            case 'Sep':
            case 'sep':
            case 'Oct':
            case 'oct':
            case 'Nov':
            case 'nov':
            console.log(Name+" "+" is a Antumn Season");
            break;
        }
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Switch8,
                    code: `<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

        //Create a program to identify the type of food (fruit, vegetable, grain) based on input.

        let food=prompt("Please Enter Name");
            switch(food){
                case 'Apple':
                case 'Banna': 
                case 'Orange': 
                case 'Peach': 
                case 'Graps': 
                case 'Mango':
                console.log(food+" "+"is come in Fruit Catgorey");
                break;

                case 'Potato':
                case 'Onion': 
                case 'Tomato': 
                case 'Corn': 
                case 'Beet': 
                case 'Leek':
                console.log(food+" "+"is come in Vegetable Catgorey");
                break;

                case 'Paddy':
                case 'White-Rice': 
                case 'Peas': 
                case 'Oats': 
                case 'Cowpea': 
                case 'Chickpea':
                console.log(food+" "+"is come in Grain Catgorey");
                break;
            }
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Switch9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9</title>
</head>
<body>
    <script>

        //Use a switch statement to return the corresponding zodiac sign based on a birth date.

        let Date=prompt("Please Enter The Date");
        switch(Date){

            case Date<=19:
            console.log(Date+" "+"is a Aries Days About Zodiac Sign");
            break; 

            case Date<=18:
            console.log(Date+" "+"is a Turus Days About Zodiac Sign");
            break; 

            case Date<=20:
            console.log(Date+" "+"is a Gemini Days About Zodiac Sign");
            break; 

            case Date<=19:
            console.log(Date+" "+"is a Cancer Days About Zodiac Sign");
            break; 

            case Date<=20:
            console.log(Date+" "+"is a Leo Days About Zodiac Sign");
            break; 

            case Date<=20:
            console.log(Date+" "+"is a Virgo Days About Zodiac Sign");
            break; 

            case Date<=22:
            console.log(Date+" "+"is a Libra Days About Zodiac Sign");
            break; 

            case Date<=22:
            console.log(Date+" "+"is a Scorpia Days About Zodiac Sign");
            break; 

            case Date<=22:
            console.log(Date+" "+"is a Sagitullus Days About Zodiac Sign");
            break; 

            case Date<=22:
            console.log(Date+" "+"is a Capricon Days About Zodiac Sign");
            break; 

            case Date<=22:
            console.log(Date+" "+"is a Aquarius Days About Zodiac Sign");
            break; 

            case Date<=21:
            console.log(Date+" "+"is a Pisces Days About Zodiac Sign");
            break; 

            default:
                console.log("Invalid day entered for the given month.");
        }


    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Switch10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

        //Write a program to determine the type of fuel based on the user’s selection (petrol, diesel, etc.).

        let fuelType = prompt("Enter the type of fuel (petrol, diesel, electric, hybrid, gas):").toLowerCase();

switch (fuelType) {
    case "petrol":
        alert("You selected Petrol. It is a commonly used fuel for vehicles.");
        break;
    case "diesel":
        alert("You selected Diesel. It is often used in heavy vehicles and trucks.");
        break;
    case "electric":
        alert("You selected Electric. It is an eco-friendly option for modern vehicles.");
        break;
    case "hybrid":
        alert("You selected Hybrid. It combines petrol or diesel with electric power.");
        break;
    case "gas":
        alert("You selected Gas. It refers to fuels like CNG or LPG used in some vehicles.");
        break;
    default:
        alert("Invalid fuel type entered. Please enter a valid option (petrol, diesel, electric, hybrid, gas).");
}
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 4,
            title: "4TH IF-Else Assignments",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Else1,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>
        //Write a program to check if a number is positive, negative, or zero.

        let a=2;
        if(a/2==0)
    {
        console.log("Positive number");
    }
    else if (a/2 !=0)
    {
        console.log("Negative number");
    }
    else{
        console.log("You are Number is Zero");
    }
    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Else2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>
        //Check if a person is eligible to vote based on age

        let number=prompt("Please Wite a Number");
        if(number>=18){
            console.log("You are Eligible to Given Vote");
        }
        else{
            console.log("You are Not eligible For Vote");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Else3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>
        //Write a program to check whether a number is divisible by 5 and 11.

        let number=prompt("Please Write number");
        if (number%5==0 && number%11==0){
        console.log("This Number is Eligible can divide by 5");
        }
        else{
            console.log("Your Number is Not Divisble by 5 & 11");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Else4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>
        //Check whether a given year is a leap year.

        let year=prompt("Please Enter a Yaer");
        if(((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))){
        console.log("This is a Leap Year");
        }
        else {
            console.log("This is No Leap Year");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Else5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>
        //Write a program to display the largest of three numbers

        let number1=prompt("Please Write First Number");
        let number2=prompt("Please Write Second Number");
        let number3=prompt("Please Write Third Number");
        console.log("In this Three Number");
        console.log(number1);
        console.log(number2);
        console.log(number3);
        if(number1>number2 && number1>number3){
            console.log(number1+" "+" is a Largest Number");
        }
        else if(number2>number1 && number2>number3){
            console.log(number2+" "+" is a Largest Number");
        }
        else if(number3>number2 && number3>number1){
            console.log(number3+" "+" is a Largest Number");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Else6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>
        //Check if a person is a child (age < 12), teenager (12–18), or adult (18+).

        let age=prompt("Please Enter the Age");
        if(age<=12){
            console.log(age+" "+"is a Child Age");
        }
        else if(age==12 || age<18){
            console.log(age+" "+"is a Teen Age");
        }
        else if(age>18){
            console.log(age+" "+"is a Adult Age");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Else7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>
        
        //Write a program to determine if a character is a vowel or a consonant.

        let Latter=prompt("Please Enter a Latter");
        if(Latter=='a' || Latter=='e' || Latter=='i' || Latter=='o' || Latter=='u' ){
            console.log(Latter+" "+"is a Vowel Latter");
        }
        else{
            console.log(Latter+" "+"is not Vowel Latter");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Else8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 8</title>
</head>
<body>
    <script>

        //Check if a number is even or odd using an if-else statement

        let Number=prompt("Please Enter a Number");
        if(Number%2==0){
            console.log(Number+" "+"is a Even Number");
        }
        else if(Number%2==0+1){
            console.log(Number+" "+"is a Odd Number");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Else9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9t</title>
</head>
<body>
    <script>

        //Write a program to determine if a grade is pass or fail (pass >= 40).

        let Number=prompt("Please Enter a Number");
        if(Number>=40){
            console.log("Excellent! You Achieved a"+" "+ Number +" "+"Marks. Congragualtion You have Passed");
        }
        else if (Number<=40){
            console.log("Sorry! You could not Achive a good Marks. You are Fail");
        }
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Else10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

        //Write a program to determine whether a person is tall enough to ride a roller coaster (height ≥ 120 cm).

        let height=prompt("Please Enter a Height of Rider");
        if(height>=120){
            console.log("You are Eligible for Ride a Rollar Coaster");
        }
        else{
            console.log("You are not Eligible for Ride a Rollar Coaster");
        }
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 5,
            title: "5TH All Loops Assignments",
            screenshot: Loop1,
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a program to print numbers from 1 to 10 using a for loop.

        for(let i=1; i<=10; i++){
            console.log(i);
        }
    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Loop2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

        //Use a while loop to print the first 10 even numbers

        let i=0;
        while(i<=10){
            console.log(i);
        i=i+2;
        }
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Loop3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 3</title>
</head>
<body>
    <script>

        //Write a program to calculate the factorial of a number using a for loop

    let number =prompt("Plesae Enter Your Number"); 
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
    factorial *= i;
    }
    console.log("The factorial of", number, "is:", factorial);
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Loop4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Print the multiplication table of a given number using a loop.

        let table=prompt("Whose Table do you want to see Please Enter a Table Number");
        for(let i=1; i<=10; i++){
            console.log(table+" * "+i+" = "+table*i);
        }
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Loop5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>

        //Write a program to reverse a number (e.g., 123 → 321).

        for(let a=321; a >= 123; a--){
            console.log(a);
        }
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Loop6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>

        //Use a do...while loop to display numbers from 1 to 5.

        let a=1;
        do{
            console.log(a);
            a++;
        }
        while(a<=5);
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Loop7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

        //Write a program to calculate the sum of all numbers from 1 to 50.

    let total = 0;
    for (let i = 1; i <= 50; i++) {
    total += i;
}
console.log("The sum of numbers from 1 to 50 is:", total);
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Loop8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

        //Generate and display Fibonacci series up to 10 terms using a loop

    let n1 = 0, n2 = 1, nextTerm;
    console.log("Fibonacci Series up to 10 terms:");
    for (let i = 1; i <= 10; i++) {
    console.log(n1); // Print the current term
    nextTerm = n1 + n2; // Calculate the next term
    n1 = n2; // Update n1
    n2 = nextTerm; // Update n2
}
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Loop9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 9</title>
</head>
<body>
    <script>

        //Use a nested for loop to display a multiplication table from 1 to 5

        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 10; j++) {
            console.log(i+" "+"x"+" "+j+" "+"="+" "+j*i);
        }
    }
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Loop10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

        //Write a program to check if a number is prime.

    for (let Number = 1; Number <= 20; Number++) {
    console.log(Number + " In this Numbers");
    if (
        Number === 2 || 
        Number === 3 || 
        Number === 5 || 
        Number === 7 || 
        Number === 11 || 
        Number === 13 || 
        Number === 17 || 
        Number === 19
    ) {
        console.log(Number + " These are Prime Numbers");
    }
}
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 6,
            title: "6TH Function Assignments",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Functionjs1,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that prints "Welcome to JavaScript!" to the console.

        function Welcome(){
            console.log("Welcome to JavaScript!");
        }
        Welcome();
    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Functionjs2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Create a function that takes a number and returns the number doubled.

        function double(num){
            const num1=num+num;
            return num1;
        }
        let OriginalNumber=20;
        console.log("This is a Original Number",OriginalNumber);
        let DoubledNumber=double(OriginalNumber);
        console.log("This Number is Double from Original Number",DoubledNumber);
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Functionjs3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Write a function that returns the square of a given number.

        function double(num){
            const num1=num+num;
            return num1;
        }
        let OriginalNumber=20;
        console.log("This is a Original Number",OriginalNumber);
        let SqureNumber=double(OriginalNumber);
        console.log("This is a Square Number About Original Number",SqureNumber);
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Functionjs4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create a function that takes two numbers and returns their sum.

        function double(num1,num2){;
        const result=num1+num2;
        return result;
        }
        const num1=20;
        const num2=20;
        console.log("This is a Number 1",num1);
        console.log("This is a Number 2",num2);
        let Sum=double(num1,num2);
        console.log("This is a Square Number About Original Number",Sum);
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Functionjs5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment No 5</title>
</head>
<body>
  <script>
    // Write a function that logs a greeting message with a name passed as a parameter.
    function greet(name) {
      console.log("Hello,", name, "Welcome!");
    }

    greet("Muneeb");
    greet("Zaeem");
  </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Functionjs6,
                    code: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>

<body>
    <script>

        //Create a function that takes a string and returns it in uppercase

        function toUpperCaseString(str) {
            return str.toUpperCase();
        }

        // Example usage:
        const inputString = "hello, world!";
        const result = toUpperCaseString(inputString);
        console.log(result); // Output: "HELLO, WORLD!"

    </script>
</body>

</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Functionjs7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

        //Write an arrow function that subtracts one number from another.

        let subtracts=(a,b) => a-b;
        console.log("Do After Subtract a numbers Your Answer is ",subtracts(50,30));
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Functionjs8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

        //Create an arrow function that returns the product of two numbers.

        let product=(a,b) => a*b;
        console.log("After multiplying the numbers, the result is:",product(50,30));
    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Functionjs9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9</title>
</head>
<body>
    <script>

        //Write a function to calculate the area of a rectangle (length × width).

        function rectangle(length,width){
            return length*width;
        }
        let length=10;
        let width=10;
        console.log("The Value of Length is",length);
        console.log("The Value of Width is",width);
        const result=rectangle(length,width);
        console.log("The Area of Rectangle Value is",result);
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Functionjs10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

        //Create an arrow function that divides one number by another and returns the result.

        let divides=(a,b) => {
            if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
        return a / b;
    };
        console.log("Do After Divide a numbers Your Answer is ",divides(100,10));
        console.log("The result of dividing the numbers is:", divides(100, 0));
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 7,
            title: "7TH Error Handling",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Error1,
                    code: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>

<body>
    <script>

        //Write a program that catches an error when dividing a number by zero.

        function divideNumbers(a, b) {
            try {
                if (b === 0) {
                    throw new Error("Division by zero is not allowed!");
                }
                return a / b;
            } catch (error) {
                console.error("Error:", error.message);
                return NaN; // Return NaN (Not a Number) or any fallback value
            }
        }

        // Test Cases
        console.log(divideNumbers(10, 2)); // Output: 5
        console.log(divideNumbers(5, 0));  // Output: Error: Division by zero is not allowed! (and returns NaN)
    </script>
</body>

</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Error2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    //Create a function that tries to access an undefined variable and catches the error.

    try{
        function multiply(a,b){
            return a*b;
        }
        console.log(undefinedVariable)

    }
    catch(err){
        console.log("Error",err.messege)
    }
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Error3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

    //Write a program that attempts to parse an invalid JSON string and handles the error.

    const invalidJson = '{ "name": "John", "age": 30, '; // Invalid JSON (missing closing brace)
try {
    const parsedData = JSON.parse(invalidJson);
    console.log("Parsed Data:", parsedData);
} catch (error) {
    console.log("Error: Invalid JSON string.");
    console.log("Details:", error.message);
}
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Error4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

    //Create a function that throws an error if it receives no arguments. Catch the error and display a friendly message.

    
    function checkArguments(arg){
        try{
            if(arg.length==0){
                throw new Error("Plesae Provide Atleast one Argument")
            }
            else{
                console.log("Your Argument Has Been Recived");
            }
        }
        catch(err){
            console.log("Error:",err.messege);
        }
    }
    checkArguments();
    checkArguments(1,2,3);
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Error5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Simulate a scenario where a file is missing by throwing an error and catching it.

    function readFile(filePath) {
    try {
        // Simulate a missing file by checking for a specific file path
        if (!filePath || filePath !== "validFile.txt") {
            throw new Error("File not found:", filePath, || ,"Unknown File");
        }
        console.log("File content: This is the content of the file.");
    } catch (err) {
        console.log("Error:", err.message);
    }
}
    readFile(); // No file path provided
    readFile("invalidFile.txt"); // File path does not exist
    readFile("validFile.txt"); // Valid file
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Error6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>

    //Create a CustomError class that extends the built-in Error class. Use it to throw a specific type of error.

    class CustomError extends Error {
    constructor(message, errorCode) {
        super(message); 
        this.name = "CustomError"; 
        this.code = errorCode;
    }
}
function processUserInput(input) {
    try {
        if (!input) {
            throw new CustomError("Input is required", 400);
        }
        if (typeof input !== "string") {
            throw new CustomError("Input must be a string", 422);
        }
        console.log("Processing input:", input);
    } catch (err) {
        if (err instanceof CustomError) {
            console.log("Custom Error ["Code" ,{err.code} ,"]:" ,{err.message});
        } else {
            console.log("An unexpected error occurred:", err.message);
        }
    }
}
    processUserInput(); // No input provided
    processUserInput(123); // Invalid input type
    processUserInput("Valid Input"); // Valid input
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Error7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

    //Write a function that throws an error if the input is not a string. Catch the error and print "Invalid input!

    function checkString(input) {
    try {
        if (typeof input !== "string") {
            throw new Error("Invalid input! Input must be a string.");
        }
        console.log("Yes! The input is a string:" ,input);
    } catch (err) {
        console.log(err.message); // Print the error message
    }
}
checkString("String");  // Valid string input
checkString("Muneeb");  // Valid string input
checkString(123);      
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Error8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

    //Simulate a failed network request using throw and handle it with try...catch.

    function SimulateNetwrokRequest(){
        const success= false;
    
    if(!success){
        throw new Error("Network Request Failed")
    }
    return "Request Successed";
}
try{
let respose=SimulateNetwrokRequest();
console.log(respose);
}
catch(err){
    console.log(err.messege);
}

    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Error9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9</title>
</head>
<body>
    <script>

    //Create a function that throws an error, and call it inside another function. Use try...catch to handle the error.

    function throwError() {
  throw new Error("Something went wrong!");
}
function callThrowError() {
  try {
    throwError();  // Call the function that throws an error
  } catch (error) {
    console.error("Caught an error:", error.message);  // Handle the error here
  }
}

// Call the function that handles the error
callThrowError();
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Error10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

    //Write a function that throws a RangeError if a number is not within a specific range.

    function checkNumberInRange(number, min, max) {
  if (number < min || number > max) {
    throw new RangeError("The number ,number," is out of range. It must be between ,min, "and" ,max);
  }
  return "The number ",number ,"is within the range.";
}
try {
  console.log(checkNumberInRange(10, 1, 100));  // This will succeed
  console.log(checkNumberInRange(200, 1, 100)); // This will throw a RangeError
} catch (error) {
  console.error("Error:", error.message);
}
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 8,
            title: "8TH Classes Assignments",
            date: "12/20/2024",
            assignments: [
                {
                    id: 1,
                    title: "Assignment 1",
                    screenshot: Classesjs1,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create a Person class with properties name and age. Add a method greet() that prints a greeting using the person's
    // name.

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }

        greet(){
            console.log("Hello My Name is", {this.name} ,"& I am ,{this.age}, "Year Old");
        }
    }
    let person=new Person ("Muneeb",19);
    person.greet()
    </script>
</body>
</html>`
                },
                {
                    id: 2,
                    title: "Assignment 2",
                    screenshot: Classesjs2,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Design a Car class with properties brand and model. Add a method drive() that displays "The [brand] [model] is driving".

        class Car{
            constructor(brand,model){
                this.brand=brand;
                this.model=model;
            }

            drive(){
                console.log("The ",{this.brand}, "{this.model}, "is driving");
            }
        }
        let car=new Car ("Kyber",2014);
        car.drive();
    </script>
</body>
</html>`
                },
                {
                    id: 3,
                    title: "Assignment 3",
                    screenshot: Classesjs3,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a Rectangle class with properties width and height. Add a method getArea() to calculate and return the area of the rectangle.

        class Rectangle{
            constructor(width,height){
                this.width=width;
                this.height=height;
            }

            getArea(){
                console.log("The Area of Rectangle is,{this.width*this.height}");
            }
        }
        let rectangle=new Rectangle(12,15);
        rectangle.getArea();
    </script>
</body>
</html>`
                },
                {
                    id: 4,
                    title: "Assignment 4",
                    screenshot: Classesjs4,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create an Animal class with a speak() method. Then create a Dog class that extends Animal and overrides the speak() method to display
        // "Woof!

        class Animal{
            constructor(){
        }
            speak(){
                console.log("The animal makes a sound");
            }
        }

        class Dog extends Animal{
            constructor(){
                super();
        }
            speak(){
                console.log("Woof!"); 
            }
        }

    const animal = new Animal();
    animal.speak();

    const dog = new Dog();
    dog.speak();
    </script>
</body>
</html>`
                },
                {
                    id: 5,
                    title: "Assignment 5",
                    screenshot: Classesjs5,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Write a BankAccount class with balance as a property. Add methods deposit(amount) and withdraw(amount). Ensure the balance can't go
    //negative.

    class BankAccount{
        constructor(balance){
            this.balance=balance;
        }
        deposite(amount){
            if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount; // Add the deposit amount to the balance
        console.log("Deposited: ",{amount}. New balance: ",{this.balance}");
        }

        withdraw(amount){
            if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds. Withdrawal denied.");
            return;
        }
        this.balance -= amount; // Deduct the withdrawal amount from the balance
        console.log("Withdrawn:,{amount}. ,"New balance: ,{this.balance}");
    }
        }

    let bankAccount = new BankAccount(100); // Create a BankAccount instance with an initial balance of 100
    bankAccount.deposite(50); // Deposit $50
    bankAccount.withdraw(30); // Withdraw $30
    bankAccount.withdraw(150); 
    </script>
</body>
</html>`
                },
                {
                    id: 6,
                    title: "Assignment 6",
                    screenshot: Classesjs6,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>

    //Create a MathUtils class with a static method add(a, b) that returns the sum of two numbers.

    class MathUtils {
    static add(a, b) {
        return a + b; // Return the sum of two numbers
    }
}
    const a = 20;
    const b = 20;

    console.log("The First Value is:", a);
    console.log("The Second Value is:", b);
    console.log("The Sum of Two Numbers:", MathUtils.add(a, b));
    </script>
</body>
</html>`
                },
                {
                    id: 7,
                    title: "Assignment 7",
                    screenshot: Classesjs7,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script>

        //Define a Student class with a private property _grade. Add methods to set and get the grade.

        class Student {
        #grade; // Private property

        constructor(grade = null) {
        this.#grade = grade; // Initialize the private property
    }

        setGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grade = grade; // Set the grade if valid
        } else {
            console.log("Invalid grade. It should be between 0 and 100.");
        }
    }

    getGrade() {
        return this.#grade; // Return the grade
    }
}
    let student = new Student();
    student.setGrade(85); // Set the grade
    console.log("Student's Grade:", student.getGrade()); // Get and display the grade
    student.setGrade(150); // Attempt to set an invalid grade
    </script>
</body>
</html>`
                },
                {
                    id: 8,
                    title: "Assignment 8",
                    screenshot: Classesjs8,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script>

    //Create a Circle class with a property radius. Add methods getCircumference() and getArea().

    class Circle{
        constructor(radius){
            this.radius=radius;
        }

        getCircumference(){
            return 2 * Math.PI * this.radius;
        }
        getArea(){
            return Math.PI * Math.pow(this.radius, 2);
        }
    }

    let circle=new Circle(5);
    console.log("Radius:", circle.radius);
    console.log("Circumference:", circle.getCircumference().toFixed(2));
    console.log("Area:", circle.getArea().toFixed(2));

    </script>
</body>
</html>`
                },
                {
                    id: 9,
                    title: "Assignment 9",
                    screenshot: Classesjs9,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 9</title>
</head>
<body>
    <script>

    //Design a Book class with properties title and author. Create a Library class that maintains a collection of books
    //and allows adding/removing books.

    class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
    class Library {
    constructor() {
        this.books = []; // Collection of books
    }
    addBook(book) {
        this.books.push(book);
        console.log("Added:,{book.title}, "by", {book.author}");
    }

    // Remove a book from the library by title
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log("Removed: ",{removedBook.title}," by ",{removedBook.author}");
        } else {
            console.log("Book with title ",{title}," not found.");
        }
    }

    // Display all books
    displayBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            console.log("Books in the library:");
            this.books.forEach(book => {
                console.log("- ",{book.title}, "by" ,{book.author}");
            });
        }
    }
}

// Example usage
const library = new Library();

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("Pride and Prejudice", "Jane Austen");

// Add books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Display books
library.displayBooks();

// Remove a book
library.removeBook("1984");

// Display books after removal
library.displayBooks();
    </script>
</body>
</html>`
                },
                {
                    id: 10,
                    title: "Assignment 10",
                    screenshot: Classesjs10,
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 10</title>
</head>
<body>
    <script>

    //Create a Vehicle class with a move() method. Extend it with a Bicycle class that overrides move() to display 
    //"The bicycle is pedaling."

    class Vehicle{
        move(){
            console.log("The Vehicle is Moving")
        }
    }
    class Bicycle extends Vehicle{
        move(){
            console.log("The Bicycle is Not Pedaling")
        }
    }
    
    let vehicle = new Vehicle();
    vehicle.move();

    let bicycle = new Bicycle();
    bicycle.move();
    </script>
</body>
</html>`
                }
            ]
        },
        {
            id: 9,
            title: "9TH Object",
            date: "12/24/2024",
            sections: [
                {
                    id: 1,
                    title: "1. Basic Object",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Object1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Create an object named book with properties: title, author, pages, and is Available.

        let book={
            Tittle:'To Kill a Mockingbird',
            Author:'Harper Lee',
            Pages:'281',
        }
        console.log(book);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Object2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Print the title and author using dot notation.

        let book={
            Tittle:'To Kill a Mockingbird',
            Author:'Harper Lee',
            Pages:'281',
        }
        console.log("Your Book Author is:",book['Author']);
        console.log("Your Book tittle is:",book['Tittle']);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Object3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Add a new property genre to the book object and set its value to "fiction". Then, log the entire object

        let book={
            Tittle:'To Kill a Mockingbird',
            Author:'Harper Lee',
            Pages:'281',
        }
        book.fiction='Yes (Literary Fiction)';
        console.log(book);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Object4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create a nested object student with properties: name, age, and address. The address property should be another
        //object with city and zipCode. Access and print the city.

        let student={
            Name:'Muneeb',
            Age:'19',
            Address:'Kohsar',
            Address_property:{
                city:'Hyderabad',
                zipCode:'71000'
            }
        }
        console.log(student.Address_property.city);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Object5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Write a function called updateProperty that takes an object, a property name, and avalue as arguments, and 
        //updates the property of the object with the given value. Testthis function on the book object.

        function updateProperty(obj,PropertyName,value){
            obj[PropertyName]=value;
        }
        let book={
            Tittle:"The Great Gatsby",
            Author:"F. Scott Fitzgerald",
            Year:1925
        }
        updateProperty(book,"Tittle","The Greatest Gatsby");
        updateProperty(book,"Year",2023);

        console.log(book);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 2,
                    title: "2. Object Reference and Copying",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Refrence1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Create an object car with properties brand, model, and year. Assign this object to another variable carCopy 
        //and modify a property in carCopy. Observe how it affects the original object.

        let car={
            Brand:'Toyota',
            Model:'Corolla',
            Year:2023
        }
        car.Brand='Honda';
        console.log(car);

    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                             screenshot: Refrence2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Write a function shallowCopy that creates a shallow copy of an object using Object.assign() and demonstrates
        //its usage.

        let car={
            Brand:'Toyota',
            Model:'Corolla',
            Year:2023
        }
        let carcopy=Object.assign({},car);
        carcopy.Brand='Honda';

        console.log("Orginal Object", car);
        console.log("Updated Object",carcopy);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                             screenshot: Refrence3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Use the spread operator (...) to create a shallow copy of the car object. Modify a property in the copied 
        //object and verify that the original remains unchanged.

        let car={
            Brand:'Toyota',
            Model:'Corolla',
            Year:2023
        }
        let carcopy={...car};
        carcopy.Brand='Honda';

        console.log("Orginal Object", car);
        console.log("Updated Object",carcopy);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                             screenshot: Refrence4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create an object with nested properties. Demonstrate how shallow copying affects the nested properties.

        let car={
            Brand: { nested: 'Toyota' },
            Model:'Corolla',
            Year:2023
        }
        let carcopy=Object.assign({},car);;
        carcopy.Brand.nested = 'Honda';
        console.log("Orginal Object", car);
        console.log("Updated Object",carcopy);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                             screenshot: Refrence5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>
        
        //Write a function deepCopy using JSON.parse(JSON.stringify()) to create a deep copy of an object and test it 
        //with a nested object.

        let car={
            Brand:'Suzuki',
            Model:2023,
            deatail:{color:'Red',Sitter:'7 Sitter'}
        }
        let carcopy=JSON.parse(JSON.stringify(car));
        carcopy.deatail.color='Yellow';

        console.log(car);
        console.log(carcopy);
    </script>
</body>
</html>`
                        }]
                },

                {
                    id: 3,
                    title: "3. this Keyword in Objects",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Keyword1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create an object user with properties firstName and lastName, and a method get FullName that returns the full name
    //using this. Call the method and print the result.

        let properties={
            firstname:'Muneeb',
            lastname:' Ahmed Khan',
            getFullName: function(){
        return {this.firstname} {this.lastname};
        }
    };

    console.log(properties.getFullName());    
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Keyword2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Create an object counter with a property count and a method increment that increases count by 1. Use this
        //to refer to count and call the method to test it.

        let counter={
            count:0,
            increament:function(){
                this.count+=1;
            }
        }

        counter.increament();
        console.log(counter.count);

        counter.increament();
        console.log(counter.count);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Keyword3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 3</title>
</head>
<body>
    <script>

    //Write a function showDetails that logs a message containing this.name. Call thefunction as a method of an object
    //and as a standalone function. Explain the difference in behavior.

    let detail={
        Name:'Muneeb',
        Surnem:'Khan',
        Age:'Age',
        Class:'BS Software Engineering',
        showdetails:function(){
            console.log(this.Name);
        }
    }
    detail.showdetails();

    let standaloneShowDetails = detail.showdetails;
    standaloneShowDetails()

    console.log(detail.Name);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Keyword4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 4</title>
</head>
<body>
    <script>

        //Create an object with a method that uses this inside an arrow function. Observe and explain how the arrow 
        //function treats this.

        let showroom={
            Brand:'Suzuki',
            Model:'2023',
            Color:'red',
            details(){
                let arrow=()=> console.log(this.Brand);
                arrow();
            }
        }
        showroom.details();
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Keyword5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use the bind() method to explicitly set the value of this in a function and demonstrate its usage.

        let detail={
        Name:'Muneeb',
        Surname:'Khan',
        Age:19,
        showdetails:function(){
            console.log("My Name is",this.Name, "& My Surname is,",this.Surname,"& I am",this.Age,"Year Old");
        }
    }

    detail.showdetails();

    let longdetail=detail.showdetails.bind(detail);
    longdetail();

    
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 4,
                    title: "4. Constructor and new Operator",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: constractor1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create a constructor function Person that takes name and age as arguments and initializes them as properties.
    //Create a new Person object using the new operator.

    function Person(name,age){
        this.name=name;
        this.age=age;
    }
    let person=new Person("Muneeb","19");
    console.log(person);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: constractor2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

        //Add a method greet to the Person constructor that prints a greeting message. Call this method on an instance.

        function Person(name,age){
            this.name=name;
            this.age=age;
            this.greet=function(){
                console.log("Hello I am", {this.name}, "& I am ",{this.age}, "Year Old")
            };
        }
        let person=new Person('Muneeb','19');
        person.greet();
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: constractor3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Modify the Person constructor to include a property isAdult that is determined based on the age.
        //Test this with different ages.

        function Person(name,age){
            this.name=name;
            this.age=age;
            this.isadult=age>=18;
        }
        let person1=new Person("MUneeb",16);
        let person2=new Person("Minhaj",23);
        console.log(person1);
        console.log(person2);


    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: constractor4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a constructor function Circle that takes a radius as an argument and has methods getArea and 
        //getCircumference. Create instances and test them.

        function Circle(radius){
            this.radius=radius;
            this.getArea=function(){
                return Math.PI * this.radius**2;
            }
            this.getCircumference=function(){
                return 2*Math.PI*this.radius;
            }
        }
        let circle=new Circle(5);

        console.log("Area of Circle is: ",circle.getArea());
        console.log("Circumference of Circle is: ",circle.getCircumference());
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: constractor5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Add a shared method to the prototype of the Person constructor and call it on an instance.

        function Person(name,age){
            this.name=name;
            this.age=age;
        }
        Person.prototype.describe=function(){
            return "Hello I am ",{this.name}, "& I am ",{this.age}, "Year Old" ;
        }

        let person=new Person("Muneeb",19);
        console.log(person.describe());
        
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 5,
                    title: "5. Optional Chaining",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Chaining1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Create an object company with a nested object CEO. Use optional chaining to safely access the name of the CEO.

        let Company={
            CEO:{
                name:'Muneeb Ahmed Khan'
            }
        }
        console.log(Company.CEO?.name);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Chaining2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    //Combine optional chaining with the in operator to check if a nested property exists.

    let Company={
            CEO:{
                name:'Muneeb Ahmed Khan'
            }
        }
        console.log('name' in (Company.CEO?? {}));
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Chaining3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

    //Use optional chaining with a method that might not exist in an object. Demonstrate how to safely call the method.

    let Company={
            CEO:{
                name:'Muneeb Ahmed Khan',
                greet(){
                    return "Hello I am ",{this.name};
                }
            }
        };

        let greeting=Company.CEO?.greet?.();
        console.log(greeting);

        let farewell=Company.CEO?.farewell?.();
        console.log(farewell);
        
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Chaining4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        //Create an object house with a nested owner object. Use optional chaining to access the owner’s age.

        let object={
            owner:{
                age:29
            }
        }

        console.log("Owner age is",object.owner?.age);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Chaining5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Write a function getProperty that takes an object and a property path (e.g., 'a.b.c') as arguments and safely
        //retrieves the property using optional chaining.

        function getProperty(obj,path){
            return path.split('.').reduce((acc, key) => acc?.[key], obj);
        }

        let data={
            a:{
                b:{
                    c:42
                }
            }
        }

        console.log(getProperty(data, 'a.b.c'));
        console.log(getProperty(data, 'a.b.d'));
        console.log(getProperty(data, 'x.y.z'));
        console.log(getProperty(data, 'a.c.d'));
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 6,
                    title: "6. Property Flags and Descriptors",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Flag1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create an object and make one of its properties read-only using Object.defineProperty(). Verify it’s read-only.

    let user = {
  name: "Muneeb",
  age: 19
};

Object.defineProperty(user, "age", {
  writable: false,
  configurable: false,
});

user.age = 35; 

console.log(user.age);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Flag2,
                            code: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignemnt No 2</title>
</head>

<body>
  <script>

    //Create a property with enumerable: false. Demonstrate how it is not listed during enumeration.

    let user = {
      name: "John",
      age: 30  
    };

    Object.defineProperty(user, "name", {
      enumerable: false
    });

    for (let key in user) {
      console.log(key); 
    }

    console.log(Object.keys(user)); 

  </script>
</body>

</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Flag3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 3</title>
</head>
<body>
    <script>

    //Define a property with configurable: false and attempt to delete it. Explain the outcome.

    let user = {
  name: "Muneeb",
  age: 19
};

Object.defineProperty(user, "age", {
  configurable: false,
});

delete user.age; 

console.log(user.age);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Flag4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assoignment No 4</title>
</head>
<body>
    <script>

        //Use Object.getOwnPropertyDescriptor() to retrieve and print the property descriptor of an object property.

        let user = {
  name: "Muneeb",
  age: 19
};

// Define a property with specific attributes
Object.defineProperty(user, 'age', {
  writable: false,
  enumerable: true,
  configurable: false
});

// Get the descriptor for the 'age' property
let descriptor = Object.getOwnPropertyDescriptor(user, 'age');
console.log(descriptor);
    </script>
</body>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Flag5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Write a function that uses Object.defineProperties() to define multiple properties on an object with specific flags.

    function defineUserProperties(obj) {
  Object.defineProperties(obj, {
    name: {
      value: "Muneeb",
      writable: true,  // Property is writable
      enumerable: true,  // Property will show up in for...in loop
      configurable: true  // Property can be deleted or redefined
    },
    age: {
      value: 19,
      writable: false,  // Property is read-only
      enumerable: true,  // Property will show up in for...in loop
      configurable: false  // Property cannot be deleted or redefined
    },
    country: {
      value: "Pakistan",
      writable: true,  // Property is writable
      enumerable: false,  // Property will NOT show up in for...in loop
      configurable: true  // Property can be deleted or redefined
    }
  });
}
let user = {};
defineUserProperties(user);

console.log(user); // { name: "Muneeb", age: 19, country: "Pakistan" }
console.log(user.name); // "Muneeb"
console.log(user.age); // 19
user.age = 30;
console.log(user.age); // 19 (value remains the same)
console.log(Object.keys(user));
    
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 7,
                    title: "7. Property Getters and Setters",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Getter1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create an object person with a property fullName. Use a getter to return the full name by combining firstName and 
    //lastName.

        let user={
            Name:'Muneeb Ahmed Khan',
            FatherName:'Khalid Ahmed Khan',
            get fullName(){
                return "Hello My Name is:", {this.Name}, "& My Father Name is:" ,{this.FatherName}";
            }
        };
        console.log(user.fullName);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Getter2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    //Add a setter for fullName in the person object that updates firstName and lastName based on a single string input.

    let student={
        Name:'Muneeb Ahmed Khan',

        get studentname(){
            return this.Name;
        },

        set studentname(newname){
            this.Name=newname;
        }
    };
    console.log("Original Name is:",student.studentname);
    student.studentname='Zaeem Ahmed Khan';
    console.log("Updated Name is:",student.studentname);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Getter3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

    //Write a getter for a temperature object that converts the value from Celsius to Fahrenheit.

    let temperature={
            celsius:45,
            get fahrenheit(){
                return "Celcius Value is:", {this.celsius}, "Then After convert celsius to fahrenhite value is:", {(this.celsius*9/5)+32};
            }
        };
        console.log(temperature.fahrenheit);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Getter4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

    //Add a setter to the temperature object to update the value in Celsius when a Fahrenheit value is set.

    let convert={
        Celsius:"45",

        get converCelsius(){
            return this.Celsius;
        },

        set converCelsius(newCelsius){
            this.Celsius=newCelsius;
        },

        get fahrenheit(){
            return (this.Celsius*9/5)+32;
        } 
    };

    console.log("Celsius Value is:",convert.converCelsius);
    convert.converCelsius=30;
    console.log("Fahrenheit Value is:",convert.fahrenheit);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Getter5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Create an object with a computed property. Use getters and setters to manipulate the property.

    let property={
        name:'Muneeb Ahmed Khan',
        fathername:'Khalid Ahmed Khan',
        education:'BS Software Engineering',
        age:'19',

        get fullproperty(){
            return {
        name:'Muneeb Ahmed Khan',
        fathername:'Khalid Ahmed Khan',
        education:'BS Software Engineering',
        age:'19'
            }
        },

        set fullproperty(newProperty){
            if(newProperty.name)this.name=newProperty.name;
            if(newProperty.fathername)this.fathername=newProperty.fathername;
            if(newProperty.education)this.education=newProperty.education;
            if(newProperty.age)this.age=newProperty.age;
        },

        manipulate(){
            return {
                name:this.name.toUpperCase(),
                fathername:this.fathername.toUpperCase(),
                education:this.education.toUpperCase(),
                age:this.age.toUpperCase(),
            }

        }
    };

    console.log("Original Full Property:");
    console.log(property.fullproperty);

    property.fullproperty = {
    name: "Shaheer Shaikh",
    fathername: "Nazim Shaikh",
    education: "First Year",
    age: "16"
    };

    console.log("Manipulated Property:");
    console.log(property.manipulate());
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 8,
                    title: "8. Prototype Inheritance",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Prototype1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Create an object animal with a method eat that logs "Eating". Inherit this in an object dog and call the eat 
    //method from dog.

    let animal={
        eat(){
            console.log("Aninal Eats Food");
        },
    };
    let dog={
        __proto__: animal
    }
    dog.eat();
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                             screenshot: Prototype2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    // Add a property legs to the animal object. Access the legs property from the dog object.

    let animal={
        leg:'Dogs have four legs',
        eat(){
            console.log("Aninal Eats Food");
        },
    };
    let dog={
        __proto__: animal
    }
    dog.eat();
    console.log(animal.leg);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                             screenshot: Prototype3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment NO 3</title>
</head>
<body>
    <script>

    //Create a prototype chain with three objects: animal, mammal, and dog. Add properties to each level and access 
    //them from dog.

    let animal={
        species:"Generic Animal",
        eat(){
            console.log("Eating");
        }
    }
    let mammal={
        __proto__:animal,
        Warmbloaded:true
    }

    let dogs={
        __proto__:mammal,
        breed:"Labrador",
        bark(){
            console.log("Woof!");
        }
    }
    console.log(dogs.species);
    console.log(dogs.Warmbloaded);
    console.log(dogs.breed);

    dogs.eat();
    dogs.bark();
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                             screenshot: Prototype4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

    //Write a function showPrototypeChain that logs all prototypes in an object's chain.

    function showPrototypeChain(obj) {
  if (obj === null || typeof obj !== "object") {
    console.log("Input must be a non-null object.");
    return;
  }

  let currentProto = Object.getPrototypeOf(obj);
  let level = 0;

  console.log("Prototype chain:");
  while (currentProto) {
    console.log("Level" ,{level}:, currentProto);
    currentProto = Object.getPrototypeOf(currentProto);
    level++;
  }

  console.log("End of prototype chain (null).");
}

// Example usage:
const example = {};
showPrototypeChain(example);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                             screenshot: Prototype5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Demonstrate how to override a method in an inherited object. Call both the original and the overridden methods.

    let information={
        name:'Muneeb Ahmed Khan',
        fatherName:'Khalid Ahmed Khan',
        Address:'Kohsar',
        Age:19,

        self(){
            return "Hello My Name is ,"{this.name} ,"& My Father Name is :", {this.fatherName}, "& My Address is", {this.Address}, "& I am" ,{this.Age} ,"Year Old ";
        },
    }

    let Info={
        name:'Zaeem Ahmed Khan',
        Age:16,
        __proto__:information,
        }

        console.log("Original Information is");
        console.log(information.self());

        console.log("After Override Original Information is:");
        console.log(Info.self());
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 9,
                    title: "9. Prototype Methods",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Method1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Add a method greet to the prototype of a constructor function Person. Create multiple instances and call the shared greet method.

    function Person(name, age) {
    this.name = name;
    this.age = age;
}

    Person.prototype.greet = function() {
    console.log("Hello, my name is ",{this.name}, "and I am ",{this.age}, "years old.");
};

    const person1 = new Person("Alice", 25);
    const person2 = new Person("Bob", 30);
    const person3 = new Person("Charlie", 35);

    person1.greet(); 
    person2.greet(); 
    person3.greet(); 
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Method2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

    //Add a custom method reverseString to String.prototype. Use it on multiple string instances.

    String.prototype.reverseString = function() {
    return this.split('').reverse().join('');
};

const string1 = "hello";
const string2 = "world";
const string3 = "JavaScript";

console.log(string1.reverseString()); 
console.log(string2.reverseString()); 
console.log(string3.reverseString());
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Method3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

    //Extend Array.prototype with a method last() that returns the last element of an array. Test it with multiple arrays.

    Array.prototype.last=function(){
        return this.length > 0 ? this[this.length - 1] : undefined;
    }

    let string1=[1,2,3,4]
    let string2=['Muneeb','Zaeem','Minhaj']
    let string3=[]

    console.log(string1.last());
    console.log(string2.last());
    console.log(string3.last());
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Method4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

    //Override a native prototype method (e.g., toString) and observe its effect.

    Array.prototype.toString = function() {
    return "Custom Array:", [{this.join(' | ')}]";
};

const array1 = [1, 2, 3];
const array2 = ['apple', 'banana', 'cherry'];

console.log(array1.toString()); 
console.log(array2.toString()); 

console.log({array1}); 
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Method5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Write a method sum on Number.prototype that adds a number to the instance.

    Number.prototype.sum=function(value){
        return this.valueOf()+value;
    }

    const number1=45
    const number2=50

    console.log(number1.sum(45));
    console.log(number2.sum(50));
    console.log((100).sum(45));
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 10,
                    title: "10. Native Prototypes",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Native1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Modify the Array.prototype.sort method to log a message every time it is called, then perform its regular function.

    const originalsort=Array.prototype.sort;

    Array.prototype.sort=function(...args){
        console.log("Array.prototype.sort");
        return originalsort.apply(this,args)
    }

    const array = [3, 1, 4, 1, 5];
    array.sort((a, b) => a - b); 
    console.log(array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Native2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    //Write a method toObject for Array.prototype that converts an array into an object with keys as indices.

    Array.prototype.toObject=function(){
        const obj={};
        this.forEach((index,value)=>{
            obj[index]=value;
        })
        return obj;
    };

    const array=['a','b','c']
    const obj=array.toObject();
    console.log(obj);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Native3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

    //Extend the Function.prototype with a method delay that delays the execution of a function by a given number of milliseconds.

    Function.prototype.delay = function (ms, ...args) {
    const func = this;
    return function (...innerArgs) {
    setTimeout(() => func.apply(this, [...args, ...innerArgs]), ms);
  };
};
    function greet(name) {
    console.log("Hello, ",{name}!");
}
    const delayedGreet = greet.delay(2000, "John");
    delayedGreet();
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Native4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 4</title>
</head>
<body>
    <script>

    //Modify the Map.prototype.get method to return a default value if the key doesn’t exist.
    const originalGet = Map.prototype.get;
    Map.prototype.get = function (key, defaultValue) {
    if (this.has(key)) {
    return originalGet.call(this, key);
  }
  return defaultValue;
};
const map = new Map();
map.set("name", "Alice");

console.log(map.get("name")); // Output: "Alice"
console.log(map.get("age", 30)); // Output: 30
console.log(map.get("age")); // Output: undefined
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Native5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Use Object.prototype.valueOf to compare two objects and override its behavior for a specific object.

    const Obj1={
        name:'Object 1',
        value:10
    }

    Obj1.valueOf=function(){
        return this.value
    }

    const Obj2={
        name:'Object 2',
        value:20
    }

    Obj2.valueOf=function(){
        return this.value
    }

    console.log(Obj1>Obj2);
    console.log(Obj1<Obj2);
    console.log(Obj1==Obj2);
    console.log(Obj1==10);
    console.log(Obj1+5);
    </script>
</body>
</html>`
                        }]
                },
            ]
        },
        {
            id: 10,
            title: "10TH Array",
            date: "12/24/2024",
            sections: [
                {
                    id: 1,
                    title: "1. Puch Method",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Push1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignmnt No 1</title>
</head>
<body>
    <script>

        //Add multiple elements to an array using push and return the updated array

        let array=[1,2,3];
        array.push(4,5,6,7);
        console.log(array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Push2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Create a function that adds numbers from 1 to 10 to an empty array using push.

    function addNumbersToArray() {
    let array = [];
    for (let i = 1; i <= 10; i++) {
    array.push(i);
    }
    return array;
}
    console.log(addNumbersToArray()); 
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Push3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>
        
        //Use push to add a nested array [5, 6] to an existing array.

        let array = [1,2,3,4];
        array.push([5,6]);
        console.log(array);
        
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Push4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that uses push to add a string to an array and then logs the new length of the array.

        function array(array, string){
            const newlength=array.push(string);
            console.log("New length of Array is:"+" "+newlength);
            return newlength;
        }
            const myarray=['Apple' , 'Banana', 'Mango'];
            array(myarray,'Cherry');
            console.log(myarray);
        
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Push5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Simulate a stack by adding items with push and removing the last item later

        let arr=['Apple','Banana','Mango','Stawbarey'];
        arr.pop(3);
        arr.push('Cherry');
        console.log(arr);
    
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 2,
                    title: "2. Pop",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Pop1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Create a function that removes the last element of an array and returns it.

        function removedlastelement(array){
            const removedelement=array.pop();
            return removedelement;
        }
        let myarray = ['Apple', 'Banana', 'Mango'];
        const lastelement = removedlastelement(myarray);
        console.log("Removed Array:"+" "+lastelement);
        console.log("Update Array:"+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Pop2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Write a function that removes elements from an array until it becomes empty using pop

        function removeElements(array) {
        while (array.length > 0) { 
        console.log("Removed:", {array.pop()}"); 
    }
        return array; 
}
    const myArray = ['Apple', 'Banana', 'Mango'];
    console.log("Before:", myArray);
    removeElements(myArray);
    console.log("After:", myArray);

    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Pop3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Use pop to remove the last element of an array, then log the updated array.

        function removedlastelement(array){
            const myarray=array.pop();
            return myarray;
        }
        let myarray=['Apple', 'Banana', 'Mango', 'Cherry'];
        console.log("Before Update: "+" "+myarray);
        removedlastelement(myarray);
        console.log("After Update: "+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Pop4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Combine push and pop to add and immediately remove an element from an array.

        function removedelement(array1){
            const removed=array1.pop();
            return removed;
        }
        function addelement(array,element){
            array.push(element);
            return array;

        }
        let removed=['Apple', 'Banana', 'Mango', 'Cherry'];
        console.log("Eqtual Array:"+" "+ removed);
        
        removedelement(removed);
        console.log("After Removeing: "+" "+removed);

        addelement(removed,'Stowbrey');
        console.log("After Adding: "+" "+removed);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Pop5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Write a function that repeatedly uses pop to retrieve all elements from an array in reverse order.

    function removed(array) {
        const reversedArray = []; 
        while (array.length > 0) {
        const myElement = array.pop(); // Remove the last element
        reversedArray.push(myElement); // Add it to the reversedArray
    }
    return reversedArray; // Return the reversed array
}
    const myarray = ['Apple', 'Banana', 'Mango'];
    console.log("Before Reverse:", myarray);
    
    const reversed = removed(myarray);
    console.log("After Reverse:", reversed); // Logs the elements in reverse order

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 3,
                    title: "3. Unshift",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Unshift1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asignment No 1</title>
</head>
<body>
    <script>

        //Write a function that adds multiple elements to the beginning of an array using unshift

        function addelement(array,element){
            array.unshift(element);
            return array;
        }
        let myarray=['Apple, Banana, Mango'];
        console.log("Before: "+" "+myarray);
        addelement(myarray,'Stawberey, Cherry, Grapes ')
        console.log("After: "+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Unshift2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use unshift to add a value to the start of an array and return the updated array.

        function addelement(array,element){
            array.unshift(element);
            return array;
        }
        let array=['Apple, Banana, Mango'];
        console.log("Without Update Array: "+" "+array);
        addelement(array,'Cherry, Stawberey');
        console.log("With Update Array:"+" "+array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Unshift3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that inserts numbers 1 to 5 into an empty array using unshift

        function addelement(array,element){
            const myarray=[];
            for(let i=1; i<=5; i++){
            myarray.unshift(i);
            }
            return myarray;
        }
        let myarray=addelement();
        console.log("Before: []");
        console.log("After: "+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Unshift4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Combine unshift with pop to add a value to the start of an array and remove the last value

        function addelement(remove,add){
        remove.pop();
        if(add){
            remove.unshift(add);
        }
        return remove;
        }
        let myarray=['Apple, Mango, Banana, Cherry'];
        console.log("Actual Array is:"+" "+myarray);

        let myarray1=addelement([myarray]);
        console.log("After Removing Array:"+" "+myarray1);

        let myarray2=addelement([myarray],'Stawberey');
        console.log("After Adding Array:"+" "+myarray2);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Unshift5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Write a function that repeatedly adds elements to the start of an array until its length is 10.

        function arrayadd(array,element){
            while(array.length<10){
                array.unshift(element);
            }
            return array;
        }
        let myarray=[];
        arrayadd(myarray,'Apple');
        console.log(myarray);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 4,
                    title: "4. Shift",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Shift1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that removes the first element from an array using shift and returns it.

        function removeFirstElement(array) {
    const removedElement = array.shift(); // Removes the first element and stores it
    return removedElement; // Returns the removed element
}
    let myArray = ['Apple', 'Banana', 'Mango', 'Cherry']; // Define array properly
    let removedElement = removeFirstElement(myArray);

    console.log("Removed Element: " + removedElement); // Display the removed element
    console.log("Updated Array: " + myArray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Shift2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use shift to remove the first element of an array and log the updated array.

        let array=['Hifza', 'Minhaj', 'Fasiha', 'Muneeb', 'Zaeem'];
        console.log("Actual Array: "+" "+array);
        array.shift();
        console.log("Update Array:"+" "+array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Shift3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asssignmnet No 3</title>
</head>
<body>
    <script>

        //Combine shift and unshift to remove the first element of an array and add a new one at the beginning.

        let array=['Hifza', 'Minhaj', 'Fasiha', 'Muneeb', 'Zaeem'];
        console.log("Actual Array: "+" "+array);
        array.shift();
        console.log("After Removing Array: "+" "+array);
        array.unshift('Hina');
        console.log("After Adding Array: "+" "+array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Shift4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that removes elements from an array until it becomes empty using shift.

        function removelement(array){
            const removearray=[];
            while(array.length>0){
            const remove=array.shift();
            removearray.push(remove);
            }
            return removearray;
        }
        let array=['Hifza', 'Minhaj', 'Fasiha', 'Muneeb', 'Zaeem'];
        let removedArray = removelement(array);
        console.log("Removed Elements: " + removedArray);
        console.log("Updated Array: " + array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Shift5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use shift to create a queue simulation where elements are added to the end with push and removed from the front 
        // with shift.

        function queueSimulation(array, newElement) {
    array.push(newElement);
    const removedElement = array.shift();
    return removedElement;
}
let queue = ['Apple', 'Banana', 'Mango', 'Cherry'];
console.log("Initial Queue: " + queue);

let removedElement = queueSimulation(queue, 'Orange');
console.log("Removed Element: " + removedElement);
console.log("Updated Queue: " + queue);

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 5,
                    title: "5. Splice",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Splice1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that uses splice to insert elements into an array at a specific index.

        function insertelement(array){
            array.splice(1,4,10);
            return array;
        }
        let myarray=[2,4,6,8,10,12];
        console.log("Before Update: "+" "+myarray);
        insertelement(myarray);
        console.log("After Update: "+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Splice2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Create a function that removes elements from an array using splice and returns the removed elements.

        function removelement(arr,Startindex,Items){
            return arr.splice(Startindex,Items);  
        }
        const array=[1,2,3,4,5,6,7];
        const removed=removelement(array,1,2);
        console.log("Removed Elements:"+" "+removed);
        console.log("Modify Array:"+" "+array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Splice3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Use splice to replace elements in an array with new values and return the updated array.

        function replace(array,element){
            let myarray=array.splice(element);
            return myarray;
        }
        let arr=[1,2,3,4,5];
        console.log("Actual Array:"+" "+arr);
        let myarray=replace(arr,0,2);
        console.log("Update Array: "+" "+myarray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Splice4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that uses splice to remove the last two elements from an array.

        function remove(arr){
            arr.splice(3,2);
            return arr;
        }
        
        let arr=['Zaeem','Muneeb','Fasiha','Minhaj', 'Hifza'];
        console.log("Original Array:"+" "+arr);

        let array=remove(arr);
        console.log("Update Array:"+" "+array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Splice5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use splice to remove an element at a specific index and insert a new one in its place.

        let arr=['Zaeem','Muneeb', 'Fasiha', 'Minhaj', 'Hifza'];
        console.log("Orginal Array:"+" "+arr);

        arr.splice(0,1,'Hina');
        console.log("Insert Array:"+" "+arr);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 6,
                    title: "6. Slice",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Slice1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that extracts a portion of an array using slice and returns it.

        function slice(array, startIndex, endIndex) {
    return array.slice(startIndex, endIndex); // Return the sliced portion
}
    let array = ['Zaeem', 'Muneeeb', 'Fasiha', 'Minhaj', 'Hifza'];
    console.log("Original Array: " + array);

    let slicedArray = slice(array, 0, 2); // Extract elements from index 0 to 2 (not inclusive)
    console.log("Sliced Array: " + slicedArray);
    console.log("Original Array after slicing: " + array);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Slice2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use slice to create a shallow copy of an array

        let arr=['Zaeem','Muneeb','Minhaj','Fasiha', 'Hifza'];
        console.log("Orignial Array:"+" "+arr);
        let result=arr.slice(arr);
        console.log("Update Array:"+" "+result);



    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Slice3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Write a function that returns the last three elements of an array using slice.

        function arr(array){
            let array1=array.slice(2,5);
            return array1;
        }
        let array=['Zaeem', 'Muneeb', 'Fasiha', 'Minhaj', 'Hifza'];
        console.log("Original Array:"+" "+array);

        let result=arr(array);
        console.log("Update Array:"+" "+result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Slice4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create a function that uses slice to extract every element except the first.

        function arr(array){
            let array1=array.slice(1);
            return array1;
        }
        let array=['Zaeem', 'Muneeb', 'Fasiha', 'Minhaj', 'Hifza'];
        console.log("Original Array:"+" "+array);

        let result=arr(array);
        console.log("Update Array:"+" "+result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Slice5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Write a function that extracts a portion of an array and combines it with another using slice.

        function extracts(array, element) {
    if (element < 0 || element >= array.length) {
        console.error("Invalid index for slicing.");
        return array; 
    }
    const extractedPortion = array.slice(element);
    const additionalArray = ['Additional', 'Items'];
    const combinedArray = extractedPortion.concat(additionalArray);
    return combinedArray;
}
    let array = ['Zaeem', 'Muneeb', 'Fasiha', 'Minhaj'];
    console.log("Original Array: " + array);

    let startingIndex = 2;
    let result = extracts(array, startingIndex);
    console.log("Updated Array: " + result);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 7,
                    title: "7. Concrete",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Concreate1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that combines two arrays using concat and returns the result

        function concat(array){
            return array.concat(['Banana','Mango']);
        }
        let array=['Cherry','Apple'];
        console.log("Original Array:"+" "+array);
        let updatearray=concat(array);
        console.log("Update Array:"+" "+updatearray);
    </script>
</body>
</html`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Concreate2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use concat to merge multiple arrays into a single array.

        let concat=[['Mango'],['Apple'],['Banana'],['Cherry']];
        console.log("Originbal Array:"+" "+JSON.stringify(concat));
        let mergedarray=[].concat(...concat);
        console.log("Update Array:"+" "+JSON.stringify(mergedarray));
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Concreate3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that appends an array to another and logs the length of the resulting array.

        function concat(array){
            return array.concat(['Banana','Mango']);
        }
        let array=['Cherry','Apple'];
        console.log("Original Array:"+" "+array);

        let updatearray=concat(array);
        console.log("Update Array:"+" "+updatearray);

        let lengtharray=concat(array);
        console.log("Length of Array:"+" "+updatearray.length);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Concreate4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that combines an array with a single value using concat.

        function combine(array,value){
            return array.concat(value);
        }
        let array=['Apple','Banana'];
        console.log("Original Array:"+" "+array);
        let arr=combine(array,'Cherry');
        console.log("Update Array:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Concreate5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use concat to merge arrays of numbers, strings, and objects into one array

        function merge(array,element){
            return array.concat(element);
        }
        let array=['Apple','Banana'];
        console.log("Original Array:"+" "+array);
        let arr=merge(array,1,2,3,4);
        console.log("Update Array:"+" "+arr);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 8,
                    title: "8. Join",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Join1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that joins an array of words into a sentence using join

        function join(array,string){
            const myarray=array.join(string);
            return myarray;
        }
        let myarray=["My Name is Muneeb Ahmed Khan","& My Father Name is Khalid Ahmed Khan","I am 19 Years Old"];
        console.log("Before Apply Join Method:"+" "+myarray);
        let arr=join(myarray," ");
        console.log("After Apply Join Method:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Join2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use join to combine an array of characters into a single string.

        let a=['M','u','n','e','e','b'];
        console.log("Origunal Array:"+""+a);
        let b=a.join("");
        console.log("Updated Answer:"+""+b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Join3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that joins an array of numbers with a custom delimiter, such as -

        function join(array,element){
            const arr=array.join("-");
            return arr;
        }
        let arr=[1,2,3,4,5];
        console.log("Original Array:"+" "+arr);

        const result=join(arr);
        console.log("Updated Array:"+" "+result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Join4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that combines a nested array into a single string using join

        function array1(array,element){
            const arr=array.join(element);
            return arr;
        }
        let arr=[
            ['Muneeb'],
            ['Ahmed'],
            ['Khan']
        ];
        console.log("Original Array:"+" "+arr);
        const result=array1(arr," ");
        console.log("Uptated Array:"+" "+result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Join5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use join to convert an array of objects into a string of their specific property values.

        const objectsArray = [
    { name: "Muneeb" },
    { name: "Ahmed" },
    { name: "Khan" }
];
    let result = "";
    for (const obj of objectsArray) {
    result += (result ? ", " : "") + obj.name; // Add delimiter only if result is not empty
}
    console.log(result);

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 9,
                    title: "9. Sort",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Sort1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that sorts an array of numbers in ascending order using sort

        function array(arr){
            const array1=arr.sort((a, b) => a - b);
            return array1;
        }
        let array1=[4,8,9,2,5,1,7,10];
        console.log("Original Array:"+" "+array1);
        const array2=array(array1);
        console.log("Updated Array:"+" "+array2);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Sort2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use sort to arrange an array of strings alphabetically

        let arr=['a','c','d','e','f','b'];
        console.log("Original Array:"+" "+arr);
        arr.sort();
        console.log("Updated Array:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Sort3,
                            code: `function sortByProperty(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

const objectsArray = [
    {Name: "Muneeb", Age: 20},    // Changed Age to number
    {Name: "Minhaj", Age: 25},    // Changed Age to number
    {Name: "Tahoor", Age: 28}     // Changed Age to number
]; 

const sortedByName = sortByProperty(objectsArray, "Name");  // Changed to match property name
console.log("Sorted by name:", sortedByName);

const sortedByAge = sortByProperty(objectsArray, "Age");    // Changed to match property name
console.log("Sorted by age:", sortedByAge);`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Sort4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 4</title>
</head>
<body>
    <script>

        //Write a function that sorts an array of numbers in descending order using sort.

        function array(arr){
            const array1=arr.sort((a, b) => b - a);
            return array1;
        }
        let array1=[4,8,9,2,5,1,7,10];
        console.log("Original Array:"+" "+array1);
        const array2=array(array1);
        console.log("Updated Array:"+" "+array2);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Sort5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>

        //Use sort to arrange an array of strings by their length.

        const array=['Apple','Mango','Banana','Kivi','Graph'];
        console.log("Updated Array:"+" "+array);

        array.sort((a,b)=>a.length-b.length);
        console.log("Updated Array:"+" "+array);

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 10,
                    title: "8. Reverse",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Reverse1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 1</title>
</head>
<body>
    <script>

        //Write a function that reverses an array of numbers using reverse.

        function Numbers(array,element){
            const arr=array.reverse(element);
            return arr;
        }
        let arr=[10,9,8,7,6,5,4,,3,2,1];
        console.log("Orignial Array:"+" "+arr);
        const result=Numbers(arr);
        console.log("Updated Array:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Reverse2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use reverse to rearrange the elements of a string array in reverse order

        let arr=['Zaeem','Muneeeb','Shaheer','Bilal','Mazz'];
        console.log("Original Array"+" "+arr);
        arr.reverse();
        console.log("Updated Array:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Reverse3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that combines reverse with join to return a string with characters in reverse order.

        function reverseString(str) {
        return str.split('').reverse().join('');
}
    const originalString = "JavaScript";
    const reversedString = reverseString(originalString);
    console.log("Original String:", originalString);
    console.log("Reversed String:", reversedString);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Reverse4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that reverses an array and then uses map to double each element

        function array(arr,element){
            return arr.reverse().map(element=>element*2);
        }
        let arr=[1,2,3,4,,5];
        console.log("Original Array:"+" "+arr);

        let arr2=array(arr);
        console.log("Updated Array:"+" "+arr2);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Reverse5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use reverse to create a function that checks if an array is the same forwards and backward (a palindrome).

        function array(str){
            return str.join('')==str.slice().reverse().join('');
        }
        let arr1=[1,2,3,2,1];
        let arr2=[1,2,3,4,5];

        console.log("Is arr1 is Palindrome:",array(arr1));
        console.log("Is arr2 is Palindrome:",array(arr2));
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 11,
                    title: "11. Find",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Find1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that returns the first even number in an array using find.

        function even(array){
            const result=array.find(num=>num%2==0);
            return result;
        }
        let result=[1,2,3,4];
        console.log("Original Array:"+" "+result);
        let arr=even(result);
        console.log("First Even Number is:"+" "+arr);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Find2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

        //Use find to locate the first object in an array of objects with a specific property value

        const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
    const result = users.find(user => user.name === 'Bob');
    console.log(result); 


    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Find3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that finds the first number greater than 10 in an array.

        function arr(array){
            const a=array.find(num=>num>10);
            return a;
        }
        let a=[5,8,7,15,17,10];
        let result=arr(a);
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:"+" "+result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Find4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that returns the first string longer than 5 characters in an array

        function arr(arr){
            const a=arr.find(str=>str.length>5);
            return a;
        }
        let a=['Ammar','Arif','Shaheer','Muneeb',];
        let result=arr(a);
        console.log("Original Array:"+" "+a);
        console.log("This Name is Longer than 5 Characters:"+" "+result);

    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Find5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>

        //Use find to get the first number divisible by 3 in an array of integers.

        function divisible(array){
            const result=array.find(num=>num%3==0);
            return result;
        }
        let result=[45,56,27,9,15];
        console.log("Original Array:"+" "+result);
        let arr=divisible(result);
        console.log("This Number is Divisible by 3 :"+" "+arr);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 12,
                    title: "12. Find-Index",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: FindIndex1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that uses findIndex to get the index of the first negative number in an array.

        function arr(array){
            return array.findIndex(number=>number>-4);
        }
        let a=[-4,-3,-2,-1,0];
        let b=arr(a);
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:"+" "+b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: FindIndex2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use findLastIndex to get the index of the last odd number in an array

        function arr(array){
            return array.findIndex(number=>number%2!==0);
        }
        let a=[4,8,10,12,13];
        let b=arr(a);
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:"+" "+b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: FindIndex3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that returns the index of the first string containing the letter "a" in an array of strings.

        function arr(array){
            return array.findIndex(number=>number.includes("a"));
        }
        let a=['Muneeb','Shaheer','Ammar'];
        let b=arr(a);
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:"+" "+b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: FindIndex4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that combines findIndex and findLastIndex to return the 
        //range of indices for numbers greater than 5 in an array.

        function findRange(array) {
            const startIndex = array.findIndex(num => num > 5); // Find the first index where the condition is met
            const endIndex = array.findLastIndex(num => num > 5); // Find the last index where the condition is met
        
            if (startIndex === -1) return [];
            return [startIndex, endIndex];
        }
        let numbers = [1, 3, 5, 7, 9, 2, 6];
        let range = findRange(numbers);
        
        console.log("Original Array:", numbers);
        console.log("Range of Indices:", range);


    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: FindIndex5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use findIndex to locate the position of the first object with a property value greater than 50
        
        function arr(array){
            return array.findIndex(number=>number.value>50);
        }
        let a=[{ value: 4 }, { value: 6 }, { value: 49 }, { value: 45 }, { value: 39 }, { value: 52 }];
        let b=arr(a);
        console.log("Original Array:"+" "+JSON.stringify(a));
        console.log("Updated Array:"+" "+b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 13,
                    title: "13. Split",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Split1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that splits a string into an array of words using split.

        function arr(str){
            const a=str.split(",");
            return a;
        }
        let a= "Muneeb,Zaeem,Minhaj";
        let b=arr(a);
        console.log("Original Array:",a);
        console.log("Updated Array:",b);

    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Split2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use split to divide a string into an array of characters

        let a="Mango";
        let b=a.split("");
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Split3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that splits a string at commas and trims whitespace from each resulting string.

        function input(arr){
            const a=arr.split(",").map(items=>items.trim());
            return a;
        }
        let a="Apple , Mango , Banana";
        const b=input(a);
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:",b);


    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Split4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that splits a URL into its components using / as a delimiter

        let a="https://example.com/home/about";
        let b=a.split("/");
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Split5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use split to divide a paragraph into sentences based on periods.

        let a="The sun rises in the east. It is a source of light and energy for the planet. Many cultures have worshipped it throughout history. Without the sun, life on Earth would not be possible.You can now use split to divide it into sentences based on periods. Let me know if you'd like me to write the code for this as well!";
        let b=a.split(".");
        console.log("Original Array:"+" "+a);
        console.log("Updated Array:",b);


    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 14,
                    title: "14. Some",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Some1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 1</title>
</head>
<body>
    <script>

        //Write a function that checks if any number in an array is even using some

    const numbers = [1, 2, 3, 4];
    const hasEven = numbers.some(num => num % 2 === 0);
    console.log("Given Condiion is",numbers);
    console.log("Your Condition is",hasEven);

    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Some2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

        //Use some to check if an array contains at least one string longer than 5 characters

        const a =['Khan','Hina','Aman', 'Shaheer'];
        const b=a.some(num=>num.length>5);
        console.log("Given Array:",a);
        console.log("Given Condtion is : Agar mere Array me Koi Bhi String ki length greater than 5 ho tu mujy True return kardo");
        console.log("Your Answer is:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Some3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that checks if any object in an array has a specific property value.

        const array = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
    const propertyToCheck = "age";
    const valueToCheck = 30;

    let found = false;

    for (let i = 0; i < array.length; i++) {
    if (array[i][propertyToCheck] === valueToCheck) {
        found = true;
        break;
    }
}
    if (found) {
    console.log("Found an object with the specified property value.");
}   else {
    console.log("No object with the specified property value exists.");
}
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Some4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that uses some to check if there are any negative numbers in an array.

        function arr(array){
            const a=array.some(num=>num<0);
            return a;
        }
        let a=[1,2,3,4,5,6,7,-10];
        let b=arr(a);
        console.log("Given Array:",a);
        console.log("Meaning Of Your Condition: Agar mere array me koi bhi ik Negative Number ho tu mujy True Retrun Kardo ");
        console.log("Your Condition is :",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Some5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use some to determine if any word in an array starts with the letter "A"

        const a =['Khan','Hina','Aman', 'Shaheer'];
        const b=a.some(num=>num.startsWith('A'));
        console.log("Given Array:",a);
        console.log("Given Condtion is : Agar mere Array me Koi Bhi String ka First Latter A sy Start ho tu mujy True return kardo");
        console.log("Your Answer is:",b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 15,
                    title: "15. Every",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Every1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>
    
    //Write a function that checks if all numbers in an array are positive using every.

    let a=[1,2,3,,4,78,87,98,-12];
    let b=a.every(num=>num>0);
    console.log("Original Array is:",a);
    console.log("Your Meaning of Array is: Agar mere Array me Sary Elements Positive hn tu True Return kardo");
    console.log("Your Condition is:",b);

    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Every2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use every to check if all elements in an array are strings.

    let a=['Amman','Muneeb','Hina'];
    let b=a.every(num=>typeof num==='string');
    console.log("Original Array is:",a);
    console.log("Your Meaning of Array is: Agar mere Array me Sary Elements Stings me hn tu True Return kardo");
    console.log("Your Condition is:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Every3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that checks if all numbers in an array are divisible by 2 using every

        function arr(array){
            const a=array.some(num=>num%2==0);
            return a;
        }
        let a=[2,6,8,14];
        let b=arr(a);
        console.log("Given Array:",a);
        console.log("Meaning Of Your Condition: Agar mere array me Sarray Number 2 sy divide ho sakhty ho tu mujy True Retrun Kardo ");
        console.log("Your Condition is :",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Every4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 4</title>
</head>
<body>
    <script>

        //Write a function that uses every to ensure all objects in an array have a specific property
        const array = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
    const propertyName = "age";
    const allHaveProperty = array.every(obj => obj.hasOwnProperty(propertyName));
    if (allHaveProperty) {
    console.log("All objects have the property",{propertyName}".);
} else {
    console.log("Not all objects have the property",{propertyName}.");
}
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Every5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>
    
    //Use every to check if all strings in an array are longer than 3 characters.

    let a=['Amman','Muneeb','Hina'];
    let b=a.every(num=>num.length>3);
    console.log("Original Array is:",a);
    console.log("Your Meaning of Array is: Agar mere Array me Sary Strings ki Length greater than 3 ho hn tu True Return kardo");
    console.log("Your Condition is:",b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 16,
                    title: "16. Include",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Include1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that checks if a value exists in an array using includes

    function arr(array) {
    const a = array.includes('Muneeb');
    return a;
}
    let a = ['Ammar', 'Rizwan', 'Shaheer', 'Muneeb'];
    let b = arr(a);
    console.log("Original Array is:", a);
    console.log("Does the array include 'Muneeb'?", b);

    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Include2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use includes to determine if an array contains a specific number.

    let fruits = [24,78,98,56,45,43,98,100];
    console.log("Original Array is:",fruits);
    console.log(fruits.includes(43));
    console.log(fruits.includes(67));
    
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Include3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 3</title>
</head>
<body>
    <script>

        //Write a function that returns true if all elements in a smaller array exist in a larger array.

    function areAllElementsPresent(largerArray, smallerArray) {
    return smallerArray.every(element => largerArray.includes(element));
}
    const largerArray = ['Ammar', 'Rizwan', 'Shaheer', 'Muneeb'];
    const smallerArray = ['Muneeb', 'Rizwan'];
    console.log(areAllElementsPresent(largerArray, smallerArray)); // Output: true
    const anotherSmallerArray = ['Muneeb', 'Ali'];
    console.log(areAllElementsPresent(largerArray, anotherSmallerArray));
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Include4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create a function that uses includes to check if an array contains any even numbers

    function arr(array) {
    const a = array.includes(2);
    return a;
}
    let a = [2,4,6,8,10];
    let b = arr(a);
    console.log("Original Array is:", a);
    console.log("Meaning of My Array is : Agar mere array me sary elements Even Number ho tu Include Method ky Zariye mujy True Return Kardo");
    console.log("Your Answer is", b);

    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Include5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <script>

        //Use includes to check for the presence of a specific string in an array of strings.

    let fruits = ["apple", "banana", "mango", "banana"];
    console.log("Original Array is:",fruits);
    console.log("Meaning of My Array is : Agar mere array me wo string ho jo given hn tu Include Method ky Zariye mujy True Return Kardo");
    console.log("Your Answer is: ",fruits.includes("banana"));

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 17,
                    title: "17. Index & Last-Index",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Index1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that finds the first occurrence of a value in an array using indexOf.

        function arr(array){
            const a=array.indexOf('Shayan');
            return a;
        };
        let a=['Muneeb','Ammar','Shayan','Shaheer'];
        let b=arr(a);
        console.log("Original Array is:",a);
        console.log("Your Answer is:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Index2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use lastIndexOf to find the last occurrence of a value in an array

    let fruits = ["apple", "banana", "mango", "banana"];
    console.log(fruits.lastIndexOf("banana")); // 3
    
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Index3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Write a function that checks if a value exists in an array by combining indexOf and a conditional statement

        function valueExists(array, value) {
    if (array.indexOf(value) !== -1) {
        return true; 
    } else {
        return false;
    }
}
const numbers = [1, 2, 3, 4, 5];
console.log(valueExists(numbers, 3)); // Output: true
console.log(valueExists(numbers, 6));
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Index4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Use indexOf to find the position of a specific string in an array of strings.

    let fruits = ["apple", "banana", "mango", "banana"];
    console.log(fruits.indexOf("banana")); 
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Index5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Create a function that finds the difference between the first and last index of a repeating value in an array.

        function arr(array, value) {
    if (array.lastIndexOf(value) !== array.indexOf(value)) {
        const difference = array.lastIndexOf(value) - array.indexOf(value);
        return difference;
    }
    return -1;
}
let difference = ['Muneeb', 'Ammar', 'Shayan', 'Shaheer', 'Muneeb'];
let b = arr(difference, 'Muneeb');
console.log("Original Array is:", difference);
console.log("Your Answer is:", b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 18,
                    title: "18. Map",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Map1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that returns a new array with each element doubled using map

        function arr(array){
            const a=array.map(num=>num*num);
            return a;
        }
        let a=[2,3,4,5,6,7];
        let b=arr(a);
        console.log("Original Array:",a);
        console.log("Every Element Double from Original Array:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Map2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use map to convert an array of strings to uppercase

        let a=['muneeb','zaeem','minhaj']
        let b=a.map(str=>str.toUpperCase());
        console.log("Original Array:",a);
        console.log("Original Array",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Map3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that appends a specific string to each element in an array of strings using map.

        function appendToEachElement(array, appendString) {
            return array.map(element=>element+appendString);
        }
        let word=['Apple','Mango','Banana'];
        let wordappend=appendToEachElement(word,'Fruit');
        console.log("Original Array:",word);
        console.log("Updated Array:",wordappend);

    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Map4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that takes an array of objects and uses map to return an array of one specificproperty from each object.

        function pluckProperty(array, propertyName) {
    return array.map(obj => obj[propertyName]);
}
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
let names = pluckProperty(people, 'name');
let ages = pluckProperty(people, 'age');

console.log("Names:", names);
console.log("Ages:", ages);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Map5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use map to calculate the square of each number in an array.

        function arr(array){
            const a=array.map(num=>num*num);
            return a;
        }
        let a=[2,3,4,5,6,7];
        let b=arr(a);
        console.log("Original Array:",a);
        console.log("Every Element is Squre From Original Array;",b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 19,
                    title: "15. Filter",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Filter1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that returns all even numbers in an array using filter

        function arr(array){
            const a=array.filter(num => num % 2 === 0);
            return a;
     }
        let a = [1, 2, 3, 4];
        let result=arr(a);
        console.log("Original Array:",a);
        console.log("This Numbers is Even in Your Given Array: ",{result}");
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Filter2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use filter to create a new array with all strings longer than 4 characters

        let a=['Muneeb','Ahmed','Hina','Maryam'];
        let b=a.filter(num=>num.length>4);
        console.log("Original Array:",a);
        console.log("This Strings are Longer than 4 Characters in Your Given Array:",b);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Filter3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that filters out all negative numbers from an array.

        function arr(array){
            const a=array.filter(num => num <0);
            return a;
     }
        let a = [1, 2, 3, 4,-4,-98,-76,-5,-34];
        let result=arr(a);
        console.log("Original Array:",a);
        console.log('This Numbers is Even in Your Given Array:',result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Filter4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>
        
        //Write a function that uses filter to return all objects in an array with a specific property value.

    function filterByProperty(arr, property, value) {
    return arr.filter(function(item) {
    return item[property] === value;
  });
}
    const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 20 }
];
    const filteredPeople = filterByProperty(people, "age", 20);
    console.log(filteredPeople);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Filter5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use filter to get all elements from an array of numbers that are divisible by 3.

        let a=[2,3,27,15,89,21,18];
        let b=a.filter(num=>num%3==0);
        console.log("Original Array:",a);
        console.log("This Numbers are Divisble by 3 about Your Given Array:",b);
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 20,
                    title: "20. For Each",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: ForEach1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that logs every element of an array using forEach.

        function arr(array){
        array.forEach(function(element) {
        console.log("Original Array:",a);
        console.log("There are Every Elements about Your Given Array:",element);
  });
        }
        let a=['Muneeb','Zaeem','Minhaj'];
        arr(a);
        
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: ForEach2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 2</title>
</head>
<body>
    <script>

        //Use forEach to calculate the sum of all elements in an array.

    let sum = 0;
    let a=[1,2,3,6];

    a.forEach(function(element) {
    sum += element;
});
    console.log("Original Array:",a);
    console.log("Calculate the sum of all elements in an arraabout Your Given Array:",sum);
    
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: ForEach3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 3</title>
</head>
<body>
    <script>

        //Create a function that uses forEach to log the index and value of each array element.

    function logIndexAndValue(array) {
    array.forEach(function (element, index) {
    console.log("Index: ",{index}, "Value:" ,{element}");
    });
}
    const exampleArray = [10, 20, 30, 40];
    logIndexAndValue(exampleArray);
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: ForEach4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that doubles each element in an array and logs the result using forEach.

    let a=[1,2,3,6];
    let double=[];

    a.forEach(function(element) {
    double.push(element*2);
});
    console.log("Original Array:",a);
    console.log("This Each Elements is Doules about your given Array:",double);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: ForEach5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Use forEach to log only the even numbers in an array

    let sum = [];
    let a=[1,2,3,6];
    a.forEach(function(element){
    if(element%2===0){
    sum.push(element);
    }
    });
    console.log("Original Array:",a);
    console.log("This is a Even Number about your given Array Elements:",sum);
    </script>
</body>
</html>`
                        }]
                }
            ]
        },
        {
            id: 11,
            title: "11TH DOM Assignment",
            date: "12/24/2024",
            sections: [
                {
                    id: 1,
                    title: "1. DOM Manipulation",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: manipulation1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>

    <div id="heading">
        <h3>Muneeb Ahmed Khan</h3>
        <h3>Zaeem Ahmed Khan</h3>
        <h3>Minhaj Ahmed Khan</h3>
    </div>
    <script>
        
        //Select an element and change its inner text to "Welcome!"

        let result=document.querySelector("#heading h3")
        result.textContent='Welcome!';
        console.log(result);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: manipulation2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>

    <div id="heading">
        <h3>Muneeb Ahmed Khan</h3>
        <h3>Zaeem Ahmed Khan</h3>
        <h3>Minhaj Ahmed Khan</h3>
    </div>

    <script>

        //Select a <div> and replace its contents with a bolded text: <b>Hello!</b>.

        document.querySelectorAll("#heading h3").forEach(h3 => {
        h3.innerHTML = "<b>Hello</b>!";
});
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: manipulation3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    
    <p id="info">This is some information.</p>
    <p id="message"></p> <!-- A new paragraph for visible output -->

    <script>
        // Select the element with ID 'info' and add a title attribute
        let infoElement = document.getElementById("info");
        infoElement.setAttribute("title", "Hover over me");

        // Display a confirmation message
        document.getElementById("message").textContent = "Title attribute added!";
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: manipulation4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>

    <button class="submit-btn" disabled>Submit</button>

    <script>
        // Select the button with class 'submit-btn' and remove the 'disabled' attribute
        document.querySelector(".submit-btn").removeAttribute("disabled");
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: manipulation5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>

    <style>
        .hidden{
            display: none;
        }
    </style>
</head>
<button id="toggle-btn">Toggle Menu</button>
    <div id="menu" class="hidden">
        <p>This is the menu content.</p>
    </div>

    <script>
        // Select the button and menu
        let toggleButton = document.getElementById("toggle-btn");
        let menu = document.getElementById("menu");

        // Add click event listener to toggle the 'hidden' class
        toggleButton.addEventListener("click", function() {
            menu.classList.toggle("hidden");
        });
    </script>
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 2,
                    title: "2. DOM Transversal",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Transversal1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log Parent Class</title>
    <style>
        .parent {
            padding: 20px;
            background-color: lightblue;
        }

        .child {
            padding: 10px;
            background-color: lightcoral;
        }
    </style>
</head>
<body>

    <div class="parent">
        <div class="child">I am a child element</div>
    </div>

    <script>
        // Select the element with class 'child'
        const childElement = document.querySelector('.child');

        // Check if the element exists and has a parent node
        if (childElement && childElement.parentNode) {
            console.log("Parent class name:", childElement.parentNode.className);
        }
    </script>

</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Transversal2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
    <style>
        .parent {
        padding: 20px;
        background-color: lightblue;
    }

    .child {
        padding: 10px;
        background-color: lightcoral;
    }
</style>
</head>
<body>

<div id="content">
    <div class="child">I am a First Child Element</div>
    <div class="child">I am a Second Child Element</div>
    <div class="child">I am a Third Child Element</div>
    <div class="child">I am a Fourth Child Element</div>
</div>

<script>
    //Log all child nodes of a <div> with the ID content.
        const contentDiv = document.getElementById('content'); // Select the parent div
        const children = contentDiv.childNodes; // Get all child nodes (includes text nodes)

        // Loop through child nodes and log them
        children.forEach(child => {
            console.log("Child Node:", child);
        });

        // If you want only element nodes (excluding text nodes like line breaks)
        contentDiv.childNodes.forEach(child => {
            if (child.nodeType === 1) { // Node type 1 means an element node
                console.log("Element Node:", child);
            }
        });
</script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Transversal3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
    <style>
        #container {
            padding: 20px;
            background-color: lightblue;
        }
    </style>
</head>
<body>

    <div id="container">
        <ul id="nameList">
            <li>Minhaj Ahmed Khan</li>
            <li>Muneeb Ahmed Khan</li>
            <li>Zaeem Ahmed Khan</li>
        </ul>
    </div>

    <script>
        // Select the <ul> element inside the container
        const ulElement = document.getElementById("nameList");

        // Get the first and last <li> elements
        const firstChild = ulElement.firstElementChild;
        const lastChild = ulElement.lastElementChild;

        // Log the text content of the first and last <li> elements
        if (firstChild && lastChild) {
            console.log("First Child Text:", firstChild.textContent);
            console.log("Last Child Text:", lastChild.textContent);
        }
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Transversal4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
    <style>
    #container {
        padding: 20px;
        background-color: lightblue;
    }
</style>
<body>
    <div id="container">
        <ul id="nameList">
            <li>Minhaj Ahmed Khan</li>
            <li class="current">Muneeb Ahmed Khan</li>
            <li>Zaeem Ahmed Khan</li>
        </ul>
    </div>
    <script>

        //Find the next sibling of an element with the class current and change its text to "Next!".

        const currentElement=document.querySelector(".current")

        if(currentElement && currentElement.nextElementSibling){
            currentElement.nextElementSibling.textContent="Next!";
        }
        

    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Transversal5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
    <style>
        #container {
            padding: 20px;
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <div id="container">
        <ul id="nameList">
            <li>Minhaj Ahmed Khan</li>
            <li>Muneeb Ahmed Khan</li>
            <li>Zaeem Ahmed Khan</li>
        </ul>
    </div>
    <script>

    //Count how many child elements a <div> with the ID container has and log the result.

    const childElement=document.getElementById("nameList");

    console.log("Total Child Element in Your Div is:",childElement.children.length)
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 3,
                    title: "3. Element Selection",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Selection1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <div class="container">
        <header>
            <h1 id="heading">Welcome to My Website</h1>
        </header>
    </div>
    <script>

        let heading = document.getElementById("heading");
        heading.textContent = "Muneeb's Website";
        console.log(heading);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Selection2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    
    <div class="container">
        <header>
          <h1 class="highlights">Zaeem Ahmed Khan</h1>
          <h1 class="highlights">Muneeb Ahmed Khan</h1>
          <h1 class="highlights">Minhaj Ahmed Khan</h1>
          <h1 class="highlights">Fahad Shaikh</h1>
          </header>
    </div>
    <script>

    //Select all elements with the class highlight and change their background color to yellow.

    let highlights=document.getElementsByClassName("highlights")

    for (let i = 0; i < highlights.length; i++) {
        highlights[i].style.backgroundColor = "yellow";
    }
    console.log(highlights);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Selection3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <div class="container">
        <header>
          <p>This is a First Paragraph</p>
          <p>This is a Second Paragraph</p>
          <p>This is a Third Paragraph</p>
          </header>
    </div>
    <script>
    
    //Find all <p> elements on a webpage and log their text content to the console.

        let Paragraph=document.querySelectorAll("p");
        Paragraph.forEach((p)=>{
            console.log(p.textContent);
        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Selection4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignmnent No 4</title>
    <style>
        .box{
            width: 200px;
            height: 100px;
            border: 2px solid black;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="box">box1</div>
    <div class="box">box2</div>
    <div class="box">box2</div>
    <script>
    //Use querySelector to select the first element with the class box and change its border color to red.
    let element=document.querySelectorAll(".box");
    element.forEach((box)=>{
        box.style.borderColor = "red";
    })
    
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Selection5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <ul>
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
        <li class="item">Item 4</li>
    </ul>

    <script>
        let items = document.querySelectorAll(".item");
        items.forEach((item) => {
            item.textContent += " - Updated";
        });
        console.log("All items updated successfully!");
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 4,
                    title: "4. Event Handling",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: EventHandling1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <button id="button">Change Background</button>
    <script>

        //Add a click event listener to a button that changes the background color of the body to lightgray.

        let button=document.getElementById("button");
        button.addEventListener("click",function(){
            document.body.style.backgroundColor="lightgray"
        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: EventHandling2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <img id="myImage" src="./image2.jpg" alt="Original Image" style="width:300px; height:auto;">

  <script>
    // Select the image element using its ID
    const image = document.getElementById("myImage");
    image.addEventListener("mouseover", function() {
      image.src = "./image3.jpg";
    });
  </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: EventHandling3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <input type="text" id="keyboard" placeholder="Type something...">

  <script>
    // Log the key pressed by the user in an input field with the ID keyboard.
    const inputField = document.getElementById("keyboard");
    inputField.addEventListener("keydown", function(event) {
      console.log("Key pressed:", event.key);
    });
  </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: EventHandling4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
    <style>
        /* Initial styling for the input field */
        #myinput {
          border: 2px solid gray;
          padding: 10px;
          outline: none;
        }
      </style>
</head>
<body>
    <input id="myinput" type="text" placeholder="focus on me">
    <script>

    //Change the border color of an input field when it gains or loses focus.

        let myinput=document.getElementById("myinput")

        myinput.addEventListener("focus", function(){
            myinput.style.borderColor="blue"
        })

        myinput.addEventListener("blur", function(){
            myinput.style.borderColor="gray"

        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: EventHandling5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <form id="form">
    <button type="submit">Submit</button>
</form>
    <p id="par"></p>
    <script>

        //Prevent the default action of a form submission and log "Form submitted!" when the user clicks submit.

        let form=document.getElementById("form")
        form.addEventListener("submit",function(event){
            event.preventDefault();
            document.getElementById('par').innerHTML='Form Submitted';
            console.log("Form Submitted");
        })

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 5,
                    title: "5. Forms & Input",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: FormInput1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <input id="username" type="text" style="width: 200px; height: 20px;">
    <script>

    //Get the value entered in a text field with the ID username and log it to the console.

    const value= document.getElementById("username");
    value.value="Muneeb Ahmed Khan"
    console.log(value.value);
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: FormInput2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <input name="email" type="text" style="width: 200px; height: 40px;">
    <script>

        //Set the value of an input field with the name email to "example@gmail.com"

        let emailFeild =document.querySelector("input[name='email']");
        emailFeild.value='example@gmail.com'
        console.log(emailFeild.value);
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: FormInput3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <input id="password" type="text" style="width: 200px; height: 40px;">
    <script>

    //Check if a text field with the ID password is empty and display an alert if it is.

    const passwordFeild=document.getElementById('password');

    function Checkpassword(){
        if(passwordFeild.value.trim()==""){
            alert('Password field is empty')
        }
    }
    Checkpassword();
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: FormInput4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <input id="subscribe" type="checkbox" style="height: 40px; width: 200px;">

    <script>
        // Get the checkbox element by ID
        const whether = document.getElementById('subscribe');
    
        // Function to check if the checkbox is checked
        function Checkbox() {
            if (whether.checked) {
                console.log('Yes! Checkbox is checked');
            } else {
                console.log("No! Checkbox is not checked");
            }
        }
    
        // Call the function
        Checkbox();
    
        // Optional: Add an event listener to detect changes
        whether.addEventListener("change", Checkbox);
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: FormInput5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignemnt No 5</title>
</head>
<body>
    <input type="radio" name="gender"value="Male">Male
    <input type="radio" name="gender"value="Male">Female
    <input type="radio" name="gender"value="Male">Others
    <script>

        //Find the selected radio button in a group with the name gender and log its value.

        function logSelectedGender() {
        // Get all radio buttons with name "gender"
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        
        // Loop through and find the checked radio button
        let selectedGender = null;
        for (const radio of genderRadios) {
            if (radio.checked) {
                selectedGender = radio.value;
                break;
            }
        }

        // Log the selected gender or a message if none is selected
        if (selectedGender) {
            console.log("Selected Gender:", selectedGender);
        } else {
            console.log("No gender selected");
        }
    }

    // Call the function initially
    logSelectedGender();

    // Add event listener to log when selection changes
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener("change", logSelectedGender);
    });
    </script>
</body>
</html>`
                        }]
                },
            ]
        },
        {
            id: 12,
            title: "12TH Promises",
            date: "12/24/2024",
            sections: [
                {
                    id: 1,
                    title: "1. CallBack Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Callback1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

    //Write a function that takes a callback and calls it with a message.

    function executeCallback(callback){
        const callBack="Hello I am Muneeb Ahmed Khan"
        callback(callBack);
    }
    executeCallback((msg)=>{
        console.log(msg);
    })
    
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Callback2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Implement a function that takes two numbers and a callback to apply an operation.

        function operation(callBack){
            const a=6;
            const b=6;
            callBack(a+b);
        }
        operation((msg)=>{
            console.log("The Sum Two Numbers is:",msg)
        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Callback3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that filters an array using a callback function.

        function filters(callBack){
            const array=[1,2,3,4,5,6].filter(num=>num % 2==0);
            callBack(array);
        }
        filters((msg)=>{
            console.log("This Numbers Can be Multiply by 2:",msg);
        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Callback4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Implement a function that uses setTimeout to simulate an asynchronous operation.

        function asynchronousOperation(callBack,delay=2000){
            console.log("Operation Started.......")

            setTimeout(()=>{
                const simulate="Asynchronos Operation Completed!";
                callBack(simulate);
            },delay)
        }
        asynchronousOperation((msg)=>{
            console.log(msg);
        },5000)
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Callback5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

    //Write a function that processes an array asynchronously using a callback.

    function asynchronousOperation(callBack,delay=2000){
        console.log("Operation Started....")

            setTimeout(() => {
            const array=[70,6,56,35,50,15].filter(num=>num % 5==0);
            callBack(array);
        },delay);
        }
        asynchronousOperation((msg)=>{
            console.log("This Numbers Can be Multiply by 5:",msg);
            console.log("Operation Has Been Completed !");
        },3000)
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 2,
                    title: "2. Promises Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Promises1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Create a simple promise that resolves after 2 seconds.

        function myPromise(){
            return new Promise((resolves)=>{
                setTimeout(() => {
                    console.log("Muneeb AHmed Khan")
                },2000);
            })
        }
        myPromise()
                .then((message)=>{
                    console.log(message);
                })
                .catch((error)=>{
                    console.log(error);
                })
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Promises2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

    //Implement a function that returns a promise which resolves or rejects based on a condition.

    function myPromise(){
        return new Promise((resolves,rejects)=>{
            const success = true;
            setTimeout(() => {
                if(success){
                    resolves(console.log("Successfully Run"));
                }
                else{
                    rejects(console.log("Not Run Successfully"))
                }
            }, 2000);
        })
    }
    myPromise()
                .then((message)=>{
                    console.log(message)
                })
                .catch((error)=>{
                    console.log(error)
                })
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Promises3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Write a function that handles both resolve and reject cases of a promise.

        function myPromise(){
        return new Promise((resolves,rejects)=>{
            const success = true;
            setTimeout(() => {
                if(success){
                    resolves(console.log("Successfully Run"));
                }
                else{
                    rejects(console.log("Not Run Successfully"))
                }
            }, 2000);
        })
    }
    myPromise()
                .then((message)=>{
                    console.log(message)
                })
                .catch((error)=>{
                    console.log(error)
                })
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Promises4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Implement a function that waits for a promise to complete before proceeding.

        function myPromise(){
        return new Promise((resolves,rejects)=>{
            console.log("Your Function in Proceding")
            const success = false;
            setTimeout(() => {
                if(success){
                    resolves(console.log("Your Function has been Completed"));
                }
                else{
                    rejects(console.log("Sorry! Your Function have Some Issues"))
                }
            }, 2000);
        })
    }
    myPromise()
                .then((message)=>{
                    console.log(message)
                })
                .catch((error)=>{
                    console.log(error)
                })
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Promises5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Create a function that uses then and catch to handle a promise.

        function myPromise(){
        return new Promise((resolves,rejects)=>{
            const success = true;
            setTimeout(() => {
                if(success){
                    resolves(console.log("Successfully Run"));
                }
                else{
                    rejects(console.log("Not Run Successfully"))
                }
            }, 2000);
        })
    }
    myPromise()
                .then((message)=>{
                    console.log(message)
                })
                .catch((error)=>{
                    console.log(error)
                })
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 3,
                    title: "3. Promises Chaining Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: PromisesChaining1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that returns a promise and chains three .then() calls

        function chainedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 1000); // Initial value
    })
    .then(value => {
        console.log("First then:", value);
        return value * 2; // Multiply by 2
    })
    .then(value => {
        console.log("Second then:", value);
        return value + 5; // Add 5
    })
    .then(value => {
        console.log("Third then:", value);
        return value / 3; // Divide by 3
    });
}

// Call the function
chainedPromise().then(finalValue => {
    console.log("Final Result:", finalValue);
});
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: PromisesChaining2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Implement a function that processes an array asynchronously using promise chaining.

        function processArrayAsync(arr) {
    return arr.reduce((promiseChain, item, index) => {
        return promiseChain.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("Processing item ",{index + 1}:, item);
                    resolve(item * 2); // Example transformation
                }, 1000); // Simulating async delay
            });
        });
    }, Promise.resolve());
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

processArrayAsync(numbers).then(() => {
    console.log("All items processed!");
});
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: PromisesChaining3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that fetches user data and then fetches related data using promise chaining.

        function fetchUserData(userId) {
    return fetch("https://jsonplaceholder.typicode.com/users/",{userId})
        .then(response => {
            if (!response.ok) {
                throw new Error("User data fetch failed");
            }
            return response.json();
        })
        .then(user => {
            console.log("User Data:", user);
            return fetch("https://jsonplaceholder.typicode.com/posts?userId=",{user.id});
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Related data fetch failed");
            }
            return response.json();
        })
        .then(posts => {
            console.log("User Posts:", posts);
            return posts;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Example usage
fetchUserData(1).then(posts => {
    console.log("Fetched Posts:", posts);
});
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: PromisesChaining4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that performs mathematical operations sequentially using promise chaining.
        function performs() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 2000); // Resolve with 10 after 2 seconds
    })
    .then(value => {
        console.log("Addition Between 2 & 10 Then the result is:", value + 2);
        return value + 2;
    })
    .then(value => {
        console.log("Subtraction Between result & 2 Then the result is:", value - 2);
        return value - 2;
    })
    .then(value => {
        console.log("Multiplication Between result & 2 Then the result is:", value * 2);
        return value * 2;
    })
    .then(value => {
        console.log("Division Between result & 2 Then the result is:", value / 2);
        return value / 2;
    });
}

// Call the function
performs().then(finalValue => {
    console.log("Final Result:", finalValue);
});



    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: PromisesChaining5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Implement a function that demonstrates error handling in promise chaining

        function simpleErrorHandling(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== "number") {
            reject("Error: Value must be a number");
        } else {
            resolve(value);
        }
    })
    .then(value => {
        console.log("Doubling the value:", value * 2);
        return value * 2;
    })
    .then(value => {
        if (value > 20) {
            throw new Error("Value is too large!");
        }
        console.log("Adding 5:", value + 5);
        return value + 5;
    })
    .catch(error => {
        console.error("Caught an error:", error);
    });
}

// Test cases
simpleErrorHandling(5);   // Works fine
simpleErrorHandling("x"); // Triggers error
simpleErrorHandling(15);  // Triggers error in .then()
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 4,
                    title: "4. Error Handling Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: ErrorHandling1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write a function that catches errors in a promise.

        function errors(){
            return new Promise((resolve,reject)=>{
                const success=true
                if(success){
                    resolve("SuccessFully Login!")
                }
                else{
                    reject("Please Try Again!")
                }
            })
        }
        errors()
            .then(message=>{
                console.log(message);
            })
            .catch(error=>{
                console.log("Error:",error)
            })
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: ErrorHandling2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Implement a function that throws an error inside a promise.

        function throwsErrorInPromises(){
            return new Promise((resolve,reject)=>{
                try{
                    throw new Error("Something went Wrong!")
                }
                catch(error){
                    reject(error);
                }
            })
        }
        throwsErrorInPromises()
                .then(message=>{
                    console.log("Successfully",message)
                })
                .catch((error)=>{
                    console.log("Error:",error.message)
                })
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: ErrorHandling3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Create a function that uses .catch() to handle promise rejection

        function handlePromises(){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    reject("Operation Failed!")
                }, 2000);
            })
        }
        handlePromises()
            .then(messege=>{
                console.log("Success:",messege)
            })
            .catch(error=>{
                console.log("Error:",error)
            })
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: ErrorHandling4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that uses .finally() to execute code after a promise settles.

        function executeAfterPromiseSettles() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Something went wrong!");
            }
        }, 1000);
    })
    .finally(() => {
        console.log("This runs after the promise settles (either resolved or rejected).");
    });
}

executeAfterPromiseSettles()
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.log(error);
    });
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: ErrorHandling5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Implement a function that handles multiple errors in a promise chain

        function handleMultipleErrors() {
    return new Promise((resolve, reject) => {
        const success = true    ;  // Simulating a failure
        if (success) {
            resolve("First stage completed successfully!");
        } else {
            reject("Error in the first stage!");
        }
    })
    .then(result => {
        console.log(result); // Won't be reached if the first promise fails
        return new Promise((resolve, reject) => {
            const success = false; // Simulating another failure
            if (success) {
                resolve("Second stage completed!");
            } else {
                reject("Error in the second stage!");
            }
        });
    })
    .then(result => {
        console.log(result); // This also won't be reached if the second promise fails
    })
    .catch(error => {
        console.log("Caught an error in the chain:", error);
    });
}

handleMultipleErrors();

    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 5,
                    title: "5. Promises Method Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: PromisesMethod1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Use Promise.all() to execute multiple promises in parallel

        const promises1=Promise.resolve("Muneeb Ahmed Khan")
        const promises2=Promise.resolve("Zaeem Ahmed Khan")
        const promises3=Promise.resolve("Minhaj Ahmed Khan")

        Promise.all([promises1,promises2,promises3])
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    </script>
</body>
</html>`
                            
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: PromisesMethod2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Use Promise.race() to return the first resolved promise. 

        const p1=new Promise(resolve=> setTimeout(() => resolve("Fastest"), 100))
        const p2=new Promise(resolve=> setTimeout(() => resolve("Slower"), 500))

        Promise.race([p1,p2])
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: PromisesMethod3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script>

        //Implement Promise.allSettled() to handle multiple promises.

        const p1=Promise.resolve("Successfully Completed!")
        const p2=Promise.reject("Error Occured!")
        const p3=Promise.resolve("Successfully Completed!")

        Promise.allSettled([p1,p2,p3])
        .then(result=>console.log(result))
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: PromisesMethod4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that uses Promise.any().

        const p1=new Promise(reject=> setTimeout(() => reject("First Promise"), 2000))
        const p2=new Promise(resolve=> setTimeout(() => resolve("Second Promise"), 2000))
        const p3=new Promise(resolve=> setTimeout(() => resolve("Third Promise"), 1000))

        Promise.any([p1,p2,p3])
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: PromisesMethod5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //Create a function that executes an array of promises in order

        function executePromisesInOrder(promises) {
    return promises.reduce((prevPromise, currentPromise) => {
        return prevPromise.then(results => 
            currentPromise().then(result => [...results, result])
        );
    }, Promise.resolve([]));
}

// Example Usage
const p1 = () => new Promise(resolve => setTimeout(() => resolve("First Promise"), 1000));
const p2 = () => new Promise(resolve => setTimeout(() => resolve("Second Promise"), 500));
const p3 = () => new Promise(resolve => setTimeout(() => resolve("Third Promise"), 1500));

executePromisesInOrder([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.log(error));
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 6,
                    title: "6. Promisification Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Promisification1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Convert a callback-based function into a promise-based function

        function fetchDatapromise(shouldFail=false){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    if (shouldFail) {
                reject("Failed to fetch data"); // Simulating an error
            } else {
                const data = { message: "Hello World" };
                resolve(data);
            }
                }, 2000);
            })
        }

        fetchDatapromise()
        .then(result=>console.log("Data Recived",result))
        .catch(error=>console.log("Error",error))

        
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: Promisification2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 2</title>
</head>
<body>
    <script>

        //Implement a promisified version of setTimeout.

        function delay(ms){
            return new Promise(resolve=>setTimeout(resolve,ms))
        }
        console.log("Start !")
        console.log("Waiting !")
        delay(2000).then(()=>{
            console.log("Successfully Comleted!")
        })
    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: Promisification3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Write a function that converts an event-based API into a promise.

        const EvenEmitter=require('events')
        const emitter=new EvenEmitter

        eventToPromise(emitter,"data","error")
        .then(result=>console.log("Success:",result))
        .catch(error=>console.log("Error:",error))

        setTimeout(() =>emitter.emit(data,{message:"Hello World"}, 2000));
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: Promisification4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script>

        //Create a function that converts a Node.js-style callback function into a promise

        function promisify(callbackFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            callbackFunction(...args, (err, result) => {
                if (err) reject(err); // Reject if error
                else resolve(result); // Resolve if successful
            });
        });
    };
}

// Callback-based function
function addNumbers(a, b, callback) {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") { // Fixed type check
            callback("Input must be a number", null); // Pass "null" for result
        } else {
            callback(null, a + b);
        }
    }, 1000);
}

// Convert to promise-based function
const addNumbersPromise = promisify(addNumbers);

// Call the function using promises
addNumbersPromise(5, 8)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));

addNumbersPromise(5, "hello") // This will trigger an error
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: Promisification5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script>

        //. Implement a function that wraps an asynchronous operation into a promise

        function wrapAsync(asyncFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            asyncFunction(...args, (err, result) => {
                if (err) reject(err); // Reject on error
                else resolve(result); // Resolve on success
            });
        });
    };
}

function fetchDataFromServer(url, callback) {
    setTimeout(() => {
        if (url !== "https://api.example.com") {
            callback("Error: Invalid URL", null);
        } else {
            callback(null, { message: "Data received from server!" });
        }
    }, 2000);
}

const fetchDataPromise = wrapAsync(fetchDataFromServer);

fetchDataPromise("https://api.example.com")
    .then(data => console.log("Success:", data))
    .catch(error => console.log("Error:", error));

fetchDataPromise("wrong-url") // This will trigger an error
    .then(data => console.log("Success:", data))
    .catch(error => console.log("Error:", error));
    </script>
</body>
</html>`
                        }]
                },
                {
                    id: 7,
                    title: "7. Async & Await Assignment",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: AsynAwait1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script>

        //Write an async function that returns a resolved promise

        async function handlePromise() {
    let str = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello Muneeb Ahmed Khan"), 2000);
    });

    let result = await str; // Wait for the promise to resolve
    console.log(result); // Log the resolved value
}

handlePromise();
    </script>
</body>
</html>`
                        },
                        {
                            id: 2,
                            title: "Assignment 2",
                            screenshot: AsynAwait2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script>

        //Write an async function that handles errors properly.

        async function handles() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const AnimalCanTalk = true;
                AnimalCanTalk
                    ? resolve("Congratulations! Your Code is OK")
                    : reject("Sorry, Your Code Has Some Issues. Please Check it");
            }, 2000);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

async function execute() {
    try {
        let result = await handles();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

execute();


    </script>
</body>
</html>`
                        },
                        {
                            id: 3,
                            title: "Assignment 3",
                            screenshot: AsynAwait3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 12</title>
</head>
<body>
    <script>

        //Write an async function that calls another async function

        async function FirstAsync() {
            return new Promise((resolve)=>{
                setTimeout(() => {
                        resolve("Data Recived")
                }, 2000);
            })
        }
        async function SecondAsync() {
            console.log("Fetching Data....")
            const data=await FirstAsync()
            console.log("Successuly !",data)
        }

        SecondAsync();
    </script>
</body>
</html>`
                        },
                        {
                            id: 4,
                            title: "Assignment 4",
                            screenshot: AsynAwait4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 16</title>
</head>
<body>
    <script>

        //Implement an async function that uses setTimeout with await.

        async function WithAwait() {
            return new Promise((resolve)=>{
                setTimeout(() => {
                    console.log("Data Recived")
                }, 2000);
                
            })
        }

        async function Excute() {
                let result=await WithAwait()
                console.log(result)
            }
        
        Excute()
        .then(console.log("Excution Completed"))
    </script>
</body>
</html>`
                        },
                        {
                            id: 5,
                            title: "Assignment 5",
                            screenshot: AsynAwait5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 22</title>
</head>
<body>
    <script>

        //Implement an async function that waits for user authentication.

        function anthecateUser(callback){
            setTimeout(() => {
                const isAnthentication=Math.random()>0.5;
                if(isAnthentication){
                    callback(null,{UesrName: "Muneeb Ahmed Khan", UserId:302162})
                }
                else{
                    callback(new Error("Authentication Failed!"))
                }
            }, 2000);
        }

        async function WaitForAuthentication() {
            return new Promise((resolve,reject)=>{
                anthecateUser((err,data)=>{
                    if(err)reject(err)
                    else resolve(data)
                })
            })
        }

        (async()=>{
            try{
                console.log("Waiting for Authentication.....")
                const user=await WaitForAuthentication();
                console.log("Authentication User",user)
            }
            catch(error){
                console.log("Authentication Error:",error)
            }
        })();
    </script>
</body>
</html>`
                        }]
                },
            ]
        },
        {
            id: 13,
            title: "13TH Export & Import",
            date: "12/24/2024",
            sections: [
                {
                    id: 1,
                    title: "1. Export a Function",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                            screenshot: Module1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

function greet(name) {
  return "Hello" ,name;
}
export default greet;


<!-- Import File Code -->

import greet from './greet.js';
console.log(greet(Muneeb))`

                        }]
                },
                {
                    id: 2,
                    title: "2. Export a Class",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module2,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 1</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

class Operation{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
    sub(){
        return this.a-this.b;
    }
    multiply(){
        return this.a*this.b;
    }
    divide(){
        return this.a/this.b;
    }
    
}
export default Operation;



<!-- Import File Code -->

import Operation from "./Export.js";

let operation=new Operation (2,5);
console.log("The Sum of Two Numbers is:",operation.add());
console.log("The Subtracte of Two Numbers is:",operation.sub());
console.log("The Multiply of Two Numbers is:",operation.multiply());
console.log("The Division of Two Number is:",operation.divide());`,
                        
                        }]
                },
                {
                    id: 3,
                    title: "3. Export Multiplies Values",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module3,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 3</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

let constant={
PI: 3.14159265359,
E:2.71828182846,
GRAVITY:9.81,
SPEED_OF_LIGHT:299792458,
PLANCK_CONSTANT:6.62607015e-34,
}

export default constant;

<!-- Import File Code -->

import constant from "./Export.js";

console.log("Value of PI:",constant.PI);
console.log("Value of Euler's number (E):",constant.E);
console.log("Acceleration due to Gravity (m/s²):",constant.GRAVITY);
console.log("Speed of Light (m/s):",constant.SPEED_OF_LIGHT);
console.log("Planck's Constant:",constant.PLANCK_CONSTANT)`,
                        }]
                },
                {
                    id: 4,
                    title: "4. Default Export",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module4,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 4</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

function Sibling(big , little){
    
    return {big}, "is my big brother & ",{little}, "is my little brother"
}

export default Sibling;


<!-- Import File Code -->

import Sibling from "./Export.js";

console.log(Sibling('Minhaj Ahmed Khan','Zaeem Ahmed Khan'));`,
                           
                        }]
                },
                {
                    id: 5,
                    title: "5. Named Export",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module5,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 5</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

function add(a,b){
    return a+b;
}
function sub(a , b){
    return a-b;
}
function multi(a , b){
    return a*b;
}
function div(a , b){
    return a/b;
}

export {add,sub,multi,div}

<!-- Import File Code -->

import { add } from './Export.js'; // ✅ Corrected import statement
console.log("Sum:", add(2, 4)); 

import { sub } from './Export.js'; // ✅ Corrected import statement
console.log("Suntracte:", sub(4, 2)); 

import { multi } from './Export.js'; // ✅ Corrected import statement
console.log("Multiply:", multi(2, 4)); 

import { div } from './Export.js'; // ✅ Corrected import statement
console.log("Division:", div(54, 9)); `,
                            liveDemo: "https://1st-variable-assignment-no-1.vercel.app/"
                        }]
                },
                {
                    id: 6,
                    title: "6. Re-Export Module",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module6,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 6</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function multi(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

<!-- Import File Code -->

import { add, multi } from './Export.js';

console.log("Addition:", add(5, 3));
console.log("Multiplication:", multi(4, 6));


<!-- Re-Export File Code -->

export { add, sub, multi, div } from './Import.js'; `,
                            
                        }]
                },
                {
                    id: 7,
                    title: "7. Import All as Alies",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module7,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 7</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

export let car = {
    name:"Hunain",
    city:"Hyderabad",
    occupation:"SMIT Student",
    role:'admin'
}
export let book= {
    name:"Hunain",
    city:"Hyderabad",
    occupation:"SMIT Student",
    role:'admin'
}
export let house = {
    name:"Hunain",
    city:"Hyderabad",
    occupation:"SMIT Student",
    role:'admin'
}

<!-- Import File Code -->

import {car as Cars} from './Export.js'
console.log(Cars);

import {book as Book} from './Export.js'
console.log(Book);

import {house as House} from './Export.js'
console.log(House); `
                        }]
                },
                {
                    id: 8,
                    title: "8. Dynamic Imports",
                    assignments: [
                        {
                            id: 1,
                            title: "Assignment 1",
                             screenshot: Module1,
                            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment No 8</title>
</head>
<body>
    <script type="module" src="./Import.js"></script>
</body>
</html>

<!-- Export File Code -->

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

console.log("Math module loaded!");

<!-- Import File Code -->

async function loadMathModule() {
    const math = await import("./Export.js"); // Dynamically importing the module
    console.log("Module Imported!");

    // Using functions from the imported module
    console.log("Addition:", math.add(5, 3));
    console.log("Multiplication:", math.multiply(5, 3));
}

loadMathModule(); // Calling the function`
                           
                        }]
                },
            ]
        },
    ];

    const [expandedCode, setExpandedCode] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleCode = (categoryId, sectionId, assignmentId) => {
        const key = sectionId ? `${categoryId}-${sectionId}-${assignmentId}` : `${categoryId}-${assignmentId}`;
        setExpandedCode(expandedCode === key ? null : key);
    };

    const viewScreenshot = (screenshot) => {
        const imgWindow = window.open('', '_blank', 'width=1200,height=900,scrollbars=yes');

        imgWindow.document.write(`
      <html>
        <head>
          <title>Screenshot Viewer</title>
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .viewer-container {
              width: 100%;
              height: 100vh;
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .image-wrapper {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              overflow: auto;
              padding: 20px;
              position: relative;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
              box-shadow: 0 15px 30px rgba(0,0,0,0.5);
              border: 3px solid #4f46e5;
              border-radius: 12px;
              background-color: #0f172a;
              padding: 15px;
              transition: all 0.3s ease;
            }
            .controls {
              padding: 15px;
              display: flex;
              gap: 15px;
              flex-wrap: wrap;
              justify-content: center;
            }
            button {
              padding: 10px 20px;
              background: linear-gradient(145deg, #4f46e5 0%, #7c3aed 100%);
              color: white;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
              min-width: 100px;
              font-weight: 600;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            button:hover {
              background: linear-gradient(145deg, #4338ca 0%, #6d28d9 100%);
              transform: translateY(-2px);
              box-shadow: 0 6px 12px rgba(0,0,0,0.15);
            }
            .zoom-controls {
              position: absolute;
              bottom: 30px;
              right: 30px;
              display: flex;
              gap: 15px;
              z-index: 10;
            }
            .size-info {
              position: absolute;
              top: 15px;
              left: 15px;
              background: rgba(0,0,0,0.8);
              color: #e2e8f0;
              padding: 8px 15px;
              border-radius: 8px;
              font-size: 14px;
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255,255,255,0.1);
            }
          </style>
        </head>
        <body>
          <div class="viewer-container">
            <div class="image-wrapper">
              <div class="size-info" id="sizeInfo">Original Size</div>
              <img id="screenshotImage" src="${screenshot}" alt="Assignment Screenshot" 
                   onerror="document.querySelector('.image-wrapper').innerHTML='<p style=\\'color:#e2e8f0;padding:20px;background:rgba(239,68,68,0.2);border-radius:8px;border:1px solid rgba(239,68,68,0.5)\\'>Error loading image. Please check the file exists.</p>'"/>
            </div>
            <div class="controls">
              <button onclick="zoomImage(0.8)">- Zoom Out</button>
              <button onclick="window.close()">Close</button>
              <button onclick="zoomImage(1.2)">+ Zoom In</button>
            </div>
          </div>
          <script>
            let currentScale = 1;
            const img = document.getElementById('screenshotImage');
            const sizeInfo = document.getElementById('sizeInfo');
            
            function updateSizeInfo() {
              if (img) {
                sizeInfo.textContent = \`\${Math.round(img.naturalWidth * currentScale)}×\${Math.round(img.naturalHeight * currentScale)} (\${Math.round(currentScale * 100)}%)\`;
              }
            }
            
            function zoomImage(factor) {
              if (img) {
                currentScale *= factor;
                img.style.transform = \`scale(\${currentScale})\`;
                updateSizeInfo();
              }
            }
            
            function resetZoom() {
              if (img) {
                currentScale = 1;
                img.style.transform = 'scale(1)';
                updateSizeInfo();
              }
            }
            
            function fitToWindow() {
              if (img && img.naturalWidth > 0) {
                const widthRatio = (window.innerWidth - 40) / img.naturalWidth;
                const heightRatio = (window.innerHeight - 120) / img.naturalHeight;
                currentScale = Math.min(widthRatio, heightRatio, 1);
                img.style.transform = \`scale(\${currentScale})\`;
                updateSizeInfo();
              }
            }
            
            function originalSize() {
              if (img) {
                currentScale = 1;
                img.style.transform = 'scale(1)';
                window.resizeTo(
                  Math.min(img.naturalWidth + 100, screen.width),
                  Math.min(img.naturalHeight + 150, screen.height)
                );
                updateSizeInfo();
              }
            }
            
            function toggleFullscreen() {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                  alert(\`Error attempting to enable fullscreen: \${err.message}\`);
                });
              } else {
                document.exitFullscreen();
              }
            }
            
            window.onload = function() {
              updateSizeInfo();
              fitToWindow();
            };
            
            img.onload = function() {
              updateSizeInfo();
              fitToWindow();
            };
          </script>
        </body>
      </html>
    `);
        imgWindow.document.close();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 animate-gradient">
            <Navbar isProjectsPage={true} />

            <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                        My JavaScript Projects
                    </h1>
                    <p className="text-xl text-gray-300">
                        Collection of completed JavaScript assignments showcasing fundamental concepts
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {categories.map((category) => (
                        <div 
                            key={category.id} 
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
                            onMouseEnter={() => setHoveredItem(category.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-1">
                                    {category.title}
                                </h2>
                                <p className="text-gray-400">{category.date}</p>
                            </div>

                            {category.sections ? (
                                <div className="space-y-6">
                                    {category.sections.map((section) => (
                                        <div key={section.id} className="space-y-3">
                                            <h3 className="text-lg font-medium text-white border-b border-gray-700 pb-2">
                                                {section.title}
                                            </h3>
                                            {section.assignments.map((assignment) => (
                                                <div 
                                                    key={assignment.id} 
                                                    className="border-b border-gray-700 pb-3 last:border-0 transition-all duration-200 hover:bg-gray-700/50 rounded-lg px-3 -mx-3"
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="text-md font-medium text-white">{assignment.title}</h4>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => toggleCode(category.id, section.id, assignment.id)}
                                                                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center transition-all duration-200"
                                                            >
                                                                {expandedCode === `${category.id}-${section.id}-${assignment.id}` ? (
                                                                    <span className="flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                        </svg>
                                                                        Hide
                                                                    </span>
                                                                ) : (
                                                                    <span className="flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                        Code
                                                                    </span>
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={() => viewScreenshot(assignment.screenshot)}
                                                                className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                                                            >
                                                                Live
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {expandedCode === `${category.id}-${section.id}-${assignment.id}` && (
                                                        <pre className="mt-2 p-3 bg-gray-900 rounded-lg text-gray-300 text-sm overflow-x-auto border border-gray-700 animate-fade-in">
                                                            <code>{assignment.code}</code>
                                                        </pre>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {category.assignments.map((assignment) => (
                                        <div 
                                            key={assignment.id} 
                                            className="border-b border-gray-700 pb-3 last:border-0 transition-all duration-200 hover:bg-gray-700/50 rounded-lg px-3 -mx-3"
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-medium text-white">{assignment.title}</h3>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => toggleCode(category.id, null, assignment.id)}
                                                        className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center transition-all duration-200"
                                                    >
                                                        {expandedCode === `${category.id}-${assignment.id}` ? (
                                                            <span className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                </svg>
                                                                Hide
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                                Code
                                                            </span>
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() => viewScreenshot(assignment.screenshot)}
                                                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                                                    >
                                                        View
                                                    </button>
                                                </div>
                                            </div>

                                            {expandedCode === `${category.id}-${assignment.id}` && (
                                                <pre className="mt-2 p-3 bg-gray-900 rounded-lg text-gray-300 text-sm overflow-x-auto border border-gray-700 animate-fade-in">
                                                    <code>{assignment.code}</code>
                                                </pre>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JavaScriptProjects;






