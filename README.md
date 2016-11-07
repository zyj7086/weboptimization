#Website Performance Optimization Project

##The challenge :to optimize this online portfolio .
###1. Optimize PageSpeed Insights score for index.html
    Using Gulp , I minified and compressed the css  , inline them in html . I also resize and compressed the pictures .
###2. optimize frames per second in pizza.html
    Optimizations:
        * Replaced all querySelectorAll with getElementsByClassName , to save time .
        * Following Cameron's advice in lecture , refactored the function changePizzaSizes.
        * refactor the function updatePositions .
        * use requestAnimationFrame to animate pizzas while scrolling .
        * In  function 'changeSliderLabel', replaced all 'querySelector' with'getElementById'.
        * In eventlisterner DOMContentLoaded , change the number of pizzas .
        * in css , add will-change:left to .move
        *other JS changes .
