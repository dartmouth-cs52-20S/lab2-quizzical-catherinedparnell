# lab2-quizzical-catherinedparnell
lab2-quizzical-catherinedparnell created by GitHub Classroom

I created a quiz to predict a particular Jimi Hendrix song based on mood/personality, and I took the CSS styling track. Each question has between 4 to 9 answer choices, arranged in a order with parallax scroll. Four states function as follows: if none are selected they are all white. If a choice is hovered on, it is light pink and makes a 360 degree rotation. If it is chosen, it is dark pink and all other choices are dimmed to 60% opacity (using js/jquery, as opposed to other styling in css). Upon choosing all answer choices, a div containing the song and explanation emerges to full screen. From there I implemented a go back button, which essentially takes you to the top of the page and refreshes all the answer choices. Calculations are computed using the following logic: If there are 9 choices the chosen option recieves 1. For 6, the chosen option recieves 2/3. For 4, the chosen option recieves 1/4. For certain particularly revealing questions, their score is weighted by 5%. A responsive, mobile version of the quiz is implemented.
