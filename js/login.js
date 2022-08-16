// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){

    //ste-2: get the email address inside the email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-2: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step-4: verify user and password
    if(email === 'fahim@gmail.com' && password === '123'){
        console.log('valid user');
    }
    else{
        alert('wrong password!');
    }
})

