# README

# Project: JavaScript - Rock, Paper, Scissors #

This is my student solution to The Odin Project's first [JavaScript assignment](https://www.theodinproject.com/lessons/dom-manipulation): to create a simple Rock, Paper, Scissors game that can be played in the browser.  This version is an update on the original, which could only be played via the JavaScript console, adding in UI buttons and on-screen announcements for round results.

## Project Post-Mortem ##

This was my first JavaScript project, period, as well as my first attempt at integrating JavaScript with HTML and CSS for on-screen dynamic events.  This project provided great practice with if statements, incrementing variables, querySelectors, and applying CSS styles via JavaScript.

The baseline requirements for this project were to 1) allow the player to select rock, paper, or scissors via buttons, 2) show a running total of the score (between player and computer), and 3) proclaim an overall winner once the score cap had been reached.  I added icons for the buttons, a color-coded background based on which choice the player and computer make each round,  and a few other styling choices.

## Challenges ##

Despite being a minor part of the overall project, the eventListener used on the input buttons took some time to understand simply because of the unexpected difference between these two extremely similar-looking lines of code:

```buttons.forEach(button => button.addEventListener('click', playRound));```
```buttons.forEach(button => button.addEventListener('click', playRound()));```

I also didn't immediately grasp the difference between working with DOM elements in JavaScript vs standard strings, etc.  I would attempt to apply a class to a string variable and nothing would happen.  I will need to keep actively thinking about the type of object I'm working with in a given function.

## Screenshots ##

![Desktop view screenshot](/screenshots/rps_screenshot.png)

## To Do ##

Once I've gotten more practice with JavaScript, I'd like to return to this project and clean up the JS file.  I'm sure I could make the code cleaner, extract more recurring functions or variables, and make the visible result more user-friendly.

I'd also prefer the labels for the buttons appear on hover or act as buttons themselves.  Although I think I could implement this at my current level of experience, I chose to skip this functionality for now to save time.

## Technologies ##

This Rock, Paper, Scissors project was built with HTML, CSS, and JavaScript.  It uses [normalize.css](https://necolas.github.io/normalize.css/) and icons from [Icons8](https://icons8.com/).