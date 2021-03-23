# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yi Qian**

Time spent: **10** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/62BSDZF.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/js/js_random.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://www.youtube.com/watch?v=pQN-pnXPaVg

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  One challenge I encountered in creating this submission is to merge three files in three different language together to run a website. 
Usually when I deal with a programing project, I only code in one language. The only case that I need to know more than one language is 
when I write a compiler that translate one language to another since it is necessary for me to understand both languages well in order to 
translate them. However, to complete this submission, I need at least three files in different languages to serve different purpose. Each 
of the three languages interacts with each other in different ways. When I first look through the requirements and tasks, I was worried if 
I cannot handle three languages that I was not familiar with yet. In order to complete this project, I looked up some tutorial videos on 
YouTube on how to successfully program in HTML and JS. After I watched these tutorial videos and did some practice problems, I figured out 
what is going on in these source files. Specifically, I used the console.log() function and the console on my browser to monitor what and 
when does each function output during runtime. By doing that, I had a better understanding of the structure of the program.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  After I have completing this submission, I have some question about web development regarding how it actually works. When I code in 
  other languages such as C++, the code will not run itself, but needs to be on an application platform like an IDE that reads and compiles 
  the code. However, a website does not seem to need a compiler and can be run on almost every browser. I am wondering how the way HTML is 
  run different from programming languages, and what benefit does it bring by working in that way? I think knowing more about how it works 
  can help me do a better job such as proving the running time.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had a few more hours to work on this project, I would like to add more additional features to the game. I have attempted to add a 
  timer or a clock that limits players’ thinking time. However, I faced some troubles since the setInterval() method was not functioning as 
  I thought. I have tried many ways trying to solve it, including placing it in different code blocks, but neither of them worked. As my 
  coursework getting heavier every day, I have less spare time and could not find a way to do it by the deadline. In addition, if I have more 
  time, I may change the sound of the buttons after pressing since the default sound is a bit piercing, and I was thinking about changing it 
  to something less noisy such as the sound of a xylophone.



## License

    Copyright [Michelel Cheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
  