window.addEventListener("DOMContentLoaded", () => {
    let test = document.querySelector(".test")
    let y = 10
    
    function move (event) {
      console.log(event)
        if (event.key === 's') {
            y += 10
            test.style.top = y + 'px'
            console.log("moving down")
        } else if (event.key === 'w') {
            y -= 10
            test.style.top = y + 'px'
            console.log("moving up")
        }
    }
   
   //def use keydown for dog movement. 
    document.addEventListener('keydown', (event) => {
        let x = setTimeout(() => {
            move(event)
           }, 5)
        
        
    } )

    
   
})
