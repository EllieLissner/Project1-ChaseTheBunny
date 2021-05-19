window.addEventListener("DOMContentLoaded", () => {
    let dog = document.querySelector(".dog")
    let theBunny = document.querySelector(".bunny")
    let pointCounter = document.querySelector(".pointcounter")
    let viewPort = document.querySelector(".viewscreen")
    let replayBtn = document.querySelector(".replay")
    let startBtn = document.querySelector(".startbutton")
    
    let dogPosition = dog.getBoundingClientRect()
    let yAxisDogPosition = 50
    let xAxisBunnyPosition = 50
    let upDownDog = null
    let bunnyGone = null
    let counter = 0
    let rockCollision = false
    

    //rock spawn
    function spawnDiv() {
        let xAxisRockPosition = -100
        let aNewRock = document.createElement("div")
        aNewRock.setAttribute("class", "rock")
        aNewRock.style.top = Math.random() * 100 + '%'
        aNewRock.style.right = xAxisRockPosition + "px"
        let newRockMoves = setInterval(() => {
            xAxisRockPosition += 10
            aNewRock.style.right = xAxisRockPosition + "px"
            collision(aNewRock, newRockMoves)
            pointIncrease()
            if (rockCollision === true) {
                clearInterval(newRockMoves)
                clearTimeout(killRock)
            }
        }, 50);
        let killRock = setTimeout(() => {
            clearInterval(newRockMoves)
            aNewRock.remove()
            
        }, 5000);
        viewPort.appendChild(aNewRock)
    }

    //dog vertical movement
    function move(event) {
        if (event.key === 's') {
            yAxisDogPosition += 1 
            dog.style.top = yAxisDogPosition + '%'
        } else if (event.key === 'w') {
            yAxisDogPosition -= 1
            dog.style.top = yAxisDogPosition + '%'
        }
        dogPosition = dog.getBoundingClientRect()
    }
   
    
    // Game over and Replay box spawn
    function gameOver() {
        if (rockCollision === true) {
            let gameStats = document.createElement("div")
            
            gameStats.setAttribute("class", "gameover")
            
            viewPort.appendChild(gameStats)
            viewPort.appendChild(replayBtn)
            replayBtn.style.display = 'block'
            gameStats.innerText = `Oh no! The bunny got away!\nYour Score was ${counter}`
            
        }
    }

    // bunny movement
    function bunnyRuns() {
        xAxisBunnyPosition -= 10
        theBunny.style.right = xAxisBunnyPosition + 'px'
    }
    
    
    
    //when obstacle hits the dog and bunny runs away
    function collision(KONG, BONE) {
        const rockPosition = KONG.getBoundingClientRect()
        
        if (rockPosition.left < dogPosition.right &&
            rockPosition.bottom > dogPosition.top &&
            rockPosition.top < dogPosition.bottom &&
            rockPosition.right > dogPosition.left) {
            clearInterval(BONE)
            bunnyGone = setInterval(() => {
                if (rockCollision === false){
                    clearInterval(bunnyGone)
                } else {
                    bunnyRuns()
                }
            }, 50)
            rockCollision = true
        }
    }

    //point counter
    function pointIncrease() {
       if(rockCollision === false) {
                counter ++
                pointCounter.innerText = `Points: ${counter}`
        }
    }    

    //dog start keystroke. 
    document.addEventListener('keydown', (event) => {
        upDownDog = setInterval(() => {
            move(event)
        }, 10)
    })
    
    //dog stop
    document.addEventListener('keyup', () => {
        clearInterval(upDownDog)
    })
    
    // start rock movement
    startBtn.addEventListener('click', () => {
        let runningAcrossTheBoard = setInterval(() => {
            spawnDiv()
            gameOver()
            if (rockCollision === true) {
                clearInterval(runningAcrossTheBoard)
            }
        }, 900)  
        
        spawnDiv()  
    })  


    replayBtn.addEventListener('click', () => {
        rockCollision = false
        counter = 0
        pointCounter.innerText = `Points: 0`
        xAxisBunnyPosition = 50
        theBunny.style.right = 50 + 'px'
        theBunny.style.top = 50 + '%'
        replayBtn.style.display = 'none'
        document.querySelector(".gameover").remove()
        document.querySelectorAll(".rock").forEach((blahblahblah) => {
            blahblahblah.remove()
        })
        console.log("hi")
        
    })
         

})


