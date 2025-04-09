
document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', function() {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', function() {
        container.classList.remove('right-panel-active');
    });
});
document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Validate email
    var email = document.getElementById('signupEmail').value;
    
       
     

    // Validate password
    var password = document.getElementById('signupPassword').value;
     
       

    // Validate mobile number
    var mobile = document.getElementById('signupMobile').value;
   
      

    // Validate CNIC
    var cnic = document.getElementById('signupCNIC').value;
   
    

    // If all validations pass, submit the form
    this.submit();
});


