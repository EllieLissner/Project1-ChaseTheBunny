window.addEventListener("DOMContentLoaded", () => {
    let dog = document.querySelector(".dog")
    let itsARock = document.querySelector(".obst")
    let dogPosition = dog.getBoundingClientRect()
    


    let y = 50
    let x = -100
    let upDownDog = null

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

    function collision() {
        const rockPosition = itsARock.getBoundingClientRect()
        console.log({dogPosition: dogPosition.top, rockPosition: rockPosition.top})
        
        if (rockPosition.left < dogPosition.right &&
            rockPosition.bottom > dogPosition.top &&
            rockPosition.top < dogPosition.bottom &&
            rockPosition.right > dogPosition.left) {
            console.log("its a hit")
        }
        }
    

   //def use keydown for dog movement. 
    document.addEventListener('keydown', (event) => {
        let upDownDog = setInterval(() => {
            move(event)
           
           }, 10)
        
    document.addEventListener('keyup', () => {
        clearInterval(upDownDog)
    })
    } )
    collision()
    document.addEventListener('keydown', (event) => {
        // collision()
        let rockComingAtMe = setInterval(() => {
            obstacle(event);
            collision()
        }, 50)
    } )
   
})
