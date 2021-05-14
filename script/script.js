window.addEventListener("DOMContentLoaded", () => {
    let test = document.querySelector(".test")
    
   //def use keydown for dog movement. 
    document.addEventListener('keydown', (event => {
        let x = 100
        if (event.key === 'w') {
            test.style.left = x + 'px'
        }
    }))

   
})
