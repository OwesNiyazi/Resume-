let login = document.querySelector('#login-sec');
let btn = document.querySelector('#contact');
login.style.display = "none";

btn.addEventListener('click', function() {
    console.log("button is clicked");

    if (login.style.display === "none") {
        login.style.display = "block"; // Show the element with animation
        btn.innerHTML="Close X"
    
        btn.classList.add('btn-close');
        // GSAP animation: Scale from 0 to 1, rotate, and fade in
        gsap.fromTo("#login-sec", 
            {
                scale: 0,
                y: 100,
                opacity: 0,
                rotate: -180,
                
            }, 
            {
                scale: 1,
                y: 0,
                opacity: 1,
                rotate: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)" // Elastic bounce effect
            }
        );
    } else {
      btn.innerHTML="Let's talk"
    
        
      btn.classList.remove('btn-close');
        // Reverse animation: Scale to 0, rotate out, and fade out
        gsap.to("#login-sec", {
            scale: 0,
            y: -100,
            opacity: 0,
            rotate: 180,
            duration: 1,
            ease: "power2.in",
            onComplete: function() {
                // Hide the element after animation
                login.style.display = "none";
            }
        });
    }
});
