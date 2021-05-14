# Project1
## Produce a fully functional game


# Dog Coursing Game!
make your dog chase the bunny! Navigate around obstacles as the bunny runs away
but dont let the bunny get too far or you'll loose it for good!

---

# My Goals:

-create a dog that you can control up and down and limited side to side
-create randomly generated obstacles such as logs and rocks and holes that will
stop or trip and slow down your dog

- Obstacles will run across the screen to your dog for you to navigate around
    -MVP: may be just shapes running across the screen
    -stretch: make actual rocks and holes and logs
    -super stretch: generate dog bones for your dog to navigate towards for extra points
    -super super stretch: make some obstacles have different interactions with your dog ex: the rock totally stops your dog, the hole just slows down your dog

- Bunny will be unimpeded by the obstacles (your dog is faster than the bunny, but the bunny is more agile than your dog) 
    -MVP: static on left side of screen
    -Stretch: makes "random" movements based on loop to seem more realistic

- Point system:
    -you get points for keeping the bunny within screen. Points increase incrementally based on time bunny is within screen.

    -if your dog is tripped up and the bunny gets off screen for more than a specified amount of time, you loose the bunny and the game.

    -if I have time, you can also collect dog bones that will also randomly generate within the world. Each dog bone collected will increase your points by a specified amount. 

    -Points will be tracked at an upper corner of the screen

- Ending the game:
    -two ideas
        -after an amount of time, you actually track the bunny to its burrow. Success! The obstacles will be hard coded into the game (rather than being generated) and the game will become more challenging the closer you get to the bunnies burrow
        -the game goes forever just randomly generating obstacles. hopefully getting more challenging as time goes on. 


    Start with Splash Screen Introducing the game "Get that Bunny!"
    control with 'w,a,s,d' spacebar to start running! (probably keep spacebar actuated to continue running unless you run into an obstacle)