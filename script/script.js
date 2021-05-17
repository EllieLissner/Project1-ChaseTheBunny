window.addEventListener("DOMContentLoaded", () => {
    let dog = document.querySelector(".dog")
    let itsARock = document.querySelector(".obst")
    let dogPosition = dog.getBoundingClientRect()
    
    let y = 50
    let x = -100
    let upDownDog = null
    let rockComingAtMe = null

    //dog vertical movement
    function move (event) {
        if (event.key === 's') {
            y += 1 
            dog.style.top = y + '%'
        } else if (event.key === 'w') {
            y -= 1
            dog.style.top = y + '%'
        }
       dogPosition = dog.getBoundingClientRect()
    }
   
    //obstacle movement
    function obstacle(event) {
        if(event.key === "d" ) { 
            x += 10
            itsARock.style.right = x + 'px'  
        }
    }
    
    //when obstacle hits the dog
    function collision() {
        const rockPosition = itsARock.getBoundingClientRect()
        if (rockPosition.left < dogPosition.right &&
            rockPosition.bottom > dogPosition.top &&
            rockPosition.top < dogPosition.bottom &&
            rockPosition.right > dogPosition.left) {
           clearInterval(rockComingAtMe)
        }
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
        }, 50)
    })
})
