# Project1
## Produce a fully functional game


# Dog Coursing Game!
make your dog chase the bunny! Navigate around obstacles as the bunny runs away
but dont let the bunny get too far or you'll loose it for good!

---

# My Goals:

- Create a dog that you can control up and down and limited side to side
- Create randomly generated obstacles such as logs and rocks and holes that will
stop or trip and slow down your dog

### Goals in more detail

- Obstacles will run across the screen to your dog for you to navigate around
    - MVP: may be just shapes running across the screen
    - Stretch: make actual rocks and holes and logs
    - Super stretch: generate dog bones for your dog to navigate towards for extra points
    - Super super stretch: make some obstacles have different interactions with your dog ex: the rock totally stops your dog, the hole just slows down your dog

- Bunny will be unimpeded by the obstacles (your dog is faster than the bunny, but the bunny is more agile than your dog) 
    - MVP: static on left side of screen
    - Stretch: makes "random" movements based on loop to seem more realistic

- Point system:
    - You get points for keeping the bunny within screen. Points increase incrementally based on time bunny is within screen.

    - If your dog is tripped up and the bunny gets off screen for more than a specified amount of time, you loose the bunny and the game.

    - If I have time, you can also collect dog bones that will also randomly generate within the world. Each dog bone collected will increase your points by a specified amount. 

    - Points will be tracked at an upper corner of the screen

- Ending the game:
    - two ideas
        - after an amount of time, you actually track the bunny to its burrow. Success! The obstacles will be hard coded into the game (rather than being generated) and the game will become more challenging the closer you get to the bunnies burrow
        - the game goes forever just randomly generating obstacles. hopefully getting more challenging as time goes on. 

### Okay, so we have some goals. What do we actually want this game to look like
### once fully initialized?


    Start with Splash Screen Introducing the game "Get that Bunny!"
    control with 'w,a,s,d' spacebar to start running! (probably keep spacebar actuated to continue running unless you run into an obstacle)

    click a button to enter the game
    start off with dog standing on one side of the screen with bunny sitting on other.
    pop up message will say press spacebar to start after the bunny
    you pressing spacebar will also activate the bunny (pressing spacebar will also clear the message)
    press 'w' and 's' to do most of the navigation. some side to side movement but very limited range. 
    in first screen, no obstacles. then introduce first obstacle in middle of screen, directly in front of where player starts. have small pop up explaining to press 'w,a,s,d' to navigate around the obstacle. 
    pop up will disappear after dog has navigated past the first obstacle
    after that, two rocks will appear, then three, then different obstacles will appear.
    After running after the bunny for 2 minutes (time subject to change) the game
    
    will introduce the bones. first bone will appear. player may choose to collect the bone or not. message will appear stating collecting the bones will get player more points. if player collects the bone, the message will disappear. if player does not collect bone, the message will disappear once bone is off screen. Running after bones will lead the player into perilous situations so they will have to react quickly so as not to loose the bunny

    ![PXL_20210514_200734222](https://user-images.githubusercontent.com/83434833/118323764-c1a0d780-b4c6-11eb-984f-5b6c79d5b00e.jpg)