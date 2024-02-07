# Exercise 06 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>

> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

> In other word, if the remainder of the year divided by four is 0 and if
the remainder of the year divided by 100 is also 0 then if the remainder of the year divided by 400 is 0 then it's leap year.

Plan :
> + input : the year, it should a positive nomber and different than zero
> + output : true if it's a leap year, false if it's not a leap year

pseudocode :

> + if the number is positive number and different than zero else return false
> if the number modulo 4 is 0 then check if it's the number modulo 100 is 0, 
> if so then check if the number modulo 400 is 0, if so then return true else return false
> + if the number modulo 100 is not 0 then return true
> + if the number modulo 4 is not 0 then return false

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly
