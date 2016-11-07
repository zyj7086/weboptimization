Website Performance Optimization Project

The challenge :to optimize this online portfolio .
1. Optimize PageSpeed Insights score for index.html
    Using Gulp , I minified and compressed the css  , inline them in html . I also resize and compressed the pictures .
2. optimize frames per second in pizza.html
    Optimizations:
        1. Replaced all querySelectorAll with getElementsByClassName , to save time .
        2. Following Cameron's advice in lecture , refactored the function changePizzaSizes.
        3. refactor the function updatePositions .
        4. use requestAnimationFrame to animate pizzas while scrolling .
        5. In  function 'changeSliderLabel', replaced all 'querySelector' with'getElementById'.
        6. In eventlisterner DOMContentLoaded , change the number of pizzas .
        7. in css , add will-change:left to .move
        8.other JS changes .