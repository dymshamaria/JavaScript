//Task 1
let age_1 = 10
let age_2 = 18
let age_3 = 60
checkAge= function(age){
if (age_1 < age_2){
    console.log("You don't have access cause your age is " + age_1 + "." + "It's less then " + age_2 + ".")
} else if (age_1 >= age_2 && age_1 < age_3){
    console.log("Welcome !")
    }
    else if (age_1> age_3) {
    console.log("Keep calpm and look Culture channel")
    } else { 
    console.log("Technical work")
}
}
checkAge(17)
checkAge(18)
checkAge(60)

//Task 2
let age_2 = 18
let age_3 = 60
checkAge = function(age){
    age = Number(age)
    console.log(age)
    if(typeof age == "number") {
      if (age < age_2){
      console.log("You don't have access cause your age is " + age + "." + "It's less then " + age_2 + ".");
      } else if (age >= age_2 && age < age_3){
       console.log("Welcome !");
      } else if (age > age_3) {
       console.log("Keep calpm and look Culture channel");
      } else { 
        console.log("Technical work");
     } 
    } else console.log ("Not an integer value");
}
checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)
checkAge("aaa")
checkAge("20")
checkAge("0")

//Task 3
let age_2 = 18
let age_3 = 60
checkAge = function(age){
    if(age && !isNaN(age)) {
      if (age < age_2){
      console.log("You don't have access cause your age is " + age + "." + "It's less then " + age_2 + ".");
      } else if (age >= age_2 && age < age_3){
       console.log("Welcome !");
      } else if (age > age_3) {
       console.log("Keep calpm and look Culture channel");
      } else { 
        console.log("Technical work");
     } 
    } else console.log ("Not an integer value");
}
checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)
checkAge("aaa")
checkAge("20")
checkAge("0")

//Task 4
let age_2 = 18
let age_3 = 60
checkAge = function(age){
    if(age && !isNaN(age)) {
      if (age < age_2){
     alert("You don't have access cause your age is " + age + "." + "It's less then " + age_2 + ".");
      } else if (age >= age_2 && age < age_3){
        alert("Welcome !");
      } else if (age > age_3) {
        alert("Keep calpm and look Culture channel");
      } else { 
        alert("Technical work");
      } 
} else alert ("Not an integer value");
}
let a = prompt ("Enter your age")
checkAge(a)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./4.js"></script>
</body>
</html>
