








function validateNotEmpty(field){
    return field && field.value;
}

function validateContains(field, value){
    return field && field.value.includes(value);
}

function validateMinLength(field, min){
    return field && field.value.length >= min;
}



function validate(){
    
    /// Name
    let userName = document.getElementById('username');
    let userError = document.getElementById('usernameErrorSpan');
    let userIsValid = validateMinLength(userName, 3);

    if(!userIsValid) {
        userError.classList.remove('hidden');
    }
    else {
        userError.classList.add('hidden');
    }

    /// Name
    let userphone = document.getElementById('phone');
    let phoneError = document.getElementById('phoneErrorSpan');
     let phoneIsValid = validateMinLength(userName, 3);
    
    if(!phoneIsValid) {
        phoneError.classList.remove('hidden');
    }
    else {
        phoneError.classList.add('hidden');
    }



    /// EMAIL
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailErrorSpan');
    let emailIsValid = validateContains(email, '@');

    if(!emailIsValid) {
        emailError.classList.remove('hidden');
    }
    else {
        emailError.classList.add('hidden');
    }

    /// Message
    let message = document.getElementById('message');
    let messageError = document.getElementById('messageErrorSpan');
    let messageIsValid = validateMinLength(message, 10);

    if(!messageIsValid) {
        messageError.classList.remove('hidden');
    }
    else {
        messageError.classList.add('hidden');
    }

    /// ALL FORM
    let greetingsdiv = document.getElementById('greetingsDiv')
    let greetingsForm = document.getElementById('form')

    let successMesage = document.getElementById('success');
    if(termsIsValid && emailIsValid && passwordIsValid && userIsValid){
        greetingsdiv.removeChild(greetingsForm)
        successMesage.classList.add('hidden');

    }
    else {
        successMesage.classList.remove('hidden');
    }
}

let n = 1; 
let timer = setTimeout(NextSlide, 5000);
function NextSlide ()  {
    let slider = document.getElementById('slider')
    if (n + 1 >= 4)
    {
        n = 1;
        slider.src = 'Noam/no' + n + '.jpg'
    }
    else
    {
        slider.src = 'Noam/no' + ++n + '.jpg'
    }
}
function previousSlide ()  {
    let slider = document.getElementById('slider')
    if (n - 1 <= 0)
    {
        n = 3;
        slider.src = 'Noam/no' + n + '.jpg'
    }
    else
    {
        slider.src = 'Noam/no' + --n + '.jpg'
    }
}
    