window.addEventListener("DOMContentLoaded", () => {
    let dog = document.querySelector(".dog")
    // let itsARock = document.querySelector(".")
    let theBunny = document.querySelector(".bunny")
    let pointCounter = document.querySelector(".pointcounter")
    let viewPort = document.querySelector(".viewscreen")
    
    
    let dogPosition = dog.getBoundingClientRect()
    let yAxisDogPosition = 50
    let xAxisBunnyPosition = 50
    let upDownDog = null
    let rockComingAtMe = null
    let bunnyGone = null
    let counter = 0

    //rock spawn
    function spawnDiv() {
        let xAxisRockPosition = 100
        let aNewRock = document.createElement("div")
        aNewRock.setAttribute("class", "rock")
        aNewRock.style.top = Math.random() * 100 + '%'
        aNewRock.style.right = xAxisRockPosition + "px"
        let newRockMoves = setInterval(() => {
            xAxisRockPosition += 10
            aNewRock.style.right = xAxisRockPosition + "px"
            collision(aNewRock, newRockMoves)
            pointIncrease()
        }, 50);
        setTimeout(() => {
            clearInterval(newRockMoves)
            aNewRock.remove()
        }, 4000);
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
   
    //obstacle movement
    function obstacle(event) {
        if(event.key === "d" ) { 
            xAxisRockPosition += 10
            itsARock.style.right = xAxisRockPosition + 'px'  
        }  
    }



    // bunny movement
    function bunnyRuns() {
        xAxisBunnyPosition -= 10
        theBunny.style.right = xAxisBunnyPosition + 'px'
    }
    
    
    
    //when obstacle hits the dog
    function collision(KONG, BONE) {
        const rockPosition = KONG.getBoundingClientRect()
        
        if (rockPosition.left < dogPosition.right &&
            rockPosition.bottom > dogPosition.top &&
            rockPosition.top < dogPosition.bottom &&
            rockPosition.right > dogPosition.left) {
            clearInterval(BONE)
            bunnyGone = setInterval(() => {
                bunnyRuns()
            }, 50)
        }
    }

    //point counter
    function pointIncrease() {
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
    // document.addEventListener('keydown', (event) => {
    //     rockComingAtMe = setInterval(() => {
    //         obstacle(event)
    //         collision()
    //         pointIncrease()
    //     }, 50)
    //     setTimeout(()=> {
    //         itsARock.remove()
    //     }, 4500)
    //   })

    document.addEventListener('keydown', (event) => {
        console.log(event.key)
        if (event.key === 'd') {
            spawnDiv()
        }
    })


    })


