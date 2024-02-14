document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // You can add more logic here, such as sending the form data to a server
    
    alert("Thank you for your message!"); // Example alert for form submission
  });
  
  document.getElementById("theme-toggle-checkbox").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
  });
  