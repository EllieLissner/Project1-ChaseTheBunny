window.addEventListener("DOMContentLoaded", () => {
    let dog = document.querySelector(".dog")
    let itsARock = document.querySelector(".obst")
    let theBunny = document.querySelector(".bunny")
    let pointCounter = document.querySelector(".pointcounter")
    
    let dogPosition = dog.getBoundingClientRect()
    let yAxisDogPosition = 50
    let xAxisRockPosition = -100
    let xAxisBunnyPosition = 50
    let upDownDog = null
    let rockComingAtMe = null
    let bunnyGone = null
    let counter = 0

    //dog vertical movement
    function move (event) {
        if (event.key === 's') {
            yAxisDogPosition += 1 
            dog.style.top = yAxisDogPosition + '%'
        } else if (event.key === 'w') {
            yAxisDogPosition -= 1
            dog.style.top = yAxisDogPosition + '%'
        }
        dogPosition = dog.getBoundingClientRect()
    }
   
    //obstacle movement
    function obstacle(event) {
        if(event.key === "d" ) { 
            xAxisRockPosition += 10
            itsARock.style.right = xAxisRockPosition + 'px'  
        }
    }

    function bunnyRuns () {
        xAxisBunnyPosition -= 10
        theBunny.style.right = xAxisBunnyPosition + 'px'
    }
    

    
    //when obstacle hits the dog
    function collision() {
        const rockPosition = itsARock.getBoundingClientRect()
        
        if (rockPosition.left < dogPosition.right &&
            rockPosition.bottom > dogPosition.top &&
            rockPosition.top < dogPosition.bottom &&
            rockPosition.right > dogPosition.left) {
            console.log(itsARock.getBoundingClientRect())
                clearInterval(rockComingAtMe)
            bunnyGone = setInterval(() => {
                bunnyRuns()
            }, 100)
        }
    }

    function pointIncrease () {
        counter++
        pointCounter.innerText = `Points: ${counter}`
    }

    //dog keystroke. 
    document.addEventListener('keydown', (event) => {
        upDownDog = setInterval(() => {
            move(event)
        }, 10)
    })
    
    //dog stop
    document.addEventListener('keyup', () => {
        clearInterval(upDownDog)
    })
    
    //obstacle keystroke
    document.addEventListener('keydown', (event) => {
        rockComingAtMe = setInterval(() => {
            obstacle(event);
            collision()
            pointIncrease()
        }, 50)
        
    })
})
