function addClassRed(inputValue){
    inputValue.classList.add('red-border');
}
function removeClassRed(inputValue){
    inputValue.classList.remove('red-border');
    
}
//---NAME---
var nameInput = document.getElementById('name-su');
nameInput.addEventListener('blur',function(){
    var isText = true;
    var textLength = true;
    if(nameInput.value === ''){
        document.getElementById('name-error').innerText ='Must complete the field with your name';
        addClassRed(nameInput);
    }
    for (var i = 0; i < nameInput.value.length; i++) {
      var char = nameInput.value.charCodeAt(i);
      if ((char < 65 || char > 90) && (char < 97 || char > 122)) {
        isText = false;
        document.getElementById('name-error').innerText ='Must contain only letters';
        addClassRed(nameInput);
      }else if(nameInput.value.length < 3 ){
        textLength = false;
        document.getElementById('name-error').innerText ='Must have al least three letters';
        addClassRed(nameInput);
      }
    }
});

nameInput.addEventListener('focus',function(){
    removeClassRed(nameInput);
    document.getElementById('name-error').innerText='';
});

//---LAST NAME---
var lastNameInput = document.getElementById('last-name');
lastNameInput.addEventListener('blur',function(){
    var isText = true;
    var textLength = true;
    if(lastNameInput.value === ''){
        document.getElementById('last-name-error').innerText ='Must complete the field with your name';
        addClassRed(lastNameInput);
    }
    for (var i = 0; i < lastNameInput.value.length; i++) {
      var char = lastNameInput.value.charCodeAt(i);
      if ((char < 65 || char > 90) && (char < 97 || char > 122)) {
        isText = false;
        document.getElementById('last-name-error').innerText ='Must contain only letters';
        addClassRed(lastNameInput);
      }else if(lastNameInput.value.length < 3 ){
        textLength = false;
        document.getElementById('last-name-error').innerText ='Must have al least three letters';
        addClassRed(lastNameInput);
      }
    }
});

lastNameInput.addEventListener('focus',function(){
    removeClassRed(lastNameInput);
    document.getElementById('last-name-error').innerText='';
});

//---DNI---
var dniInput = document.getElementById('dni-su');
dniInput.addEventListener('blur',function(){
    if(dniInput.value === ''){
        document.getElementById('dni-error').innerText ='Must complete the field with your DNI';
        addClassRed(dniInput);
        isValid = false;
    } else{
        for (i = 0; i < dniInput.value.length; i++) {
            var char = dniInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
            isValid = true;
            }else{
                document.getElementById('dni-error').innerText ='Must be only numbers';
                addClassRed(dniInput);
                isValid = false;
            }
        }
        if(dniInput.value.length <7){
        document.getElementById('dni-error').innerText = 'Must have seven numbers';
        addClassRed(dniInput);
        isValid = false;
        }
    }
});
dniInput.addEventListener('focus',function(){
    removeClassRed(dniInput);
    document.getElementById('dni-error').innerText='';
});

//---BIRTHDAY---
var birthdayInput = document.getElementById('birthdate-su');
birthdayInput.addEventListener('blur', function(){

})

//---PHONE NUMBER---
var phoneInput = document.getElementById('phone-number');
phoneInput.addEventListener('blur',function(){
    if(phoneInput.value === ''){
        document.getElementById('phone-error').innerText ='Must complete the field with your Phone Number';
        addClassRed(phoneInput);
        isValid = false;
    }else{
        for (i = 0; i < phoneInput.value.length; i++) {
            var char = phoneInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
            isValid = true;
            }else{
                document.getElementById('dni-error').innerText ='Must be only numbers';
                addClassRed(phoneInput);
                isValid = false;
            }
        }
        } if(phoneInput.value.length != 10){
            document.getElementById('phone-error').innerText = 'Must have ten numbers';
            addClassRed(phoneInput);
            isValid = false;
        }
    }
);
phoneInput.addEventListener('focus',function(){
    removeClassRed(phoneInput);
    document.getElementById('phone-error').innerText='';
});

//---ADDRESS---
var addressInput = document.getElementById('address-su');
addressInput.addEventListener('blur',function(){
    if(addressInput.value === ''){
        document.getElementById('address-error').innerText ='Must complete the field with your Adrres';
        addClassRed(addressInput);
    }
    else{
        var numbers = false;
        var letters = false;
        for (i = 0; i < addressInput.value.length; i++) {
            var char = addressInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
            numbers = true;
            } else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            letters = true;
            }
        }
        var spaces = false;
        for (i = 0; i < addressInput.value.length;i++){
            if (addressInput.value.indexOf(' ') == -1){
                spaces = false;
            }else{
                spaces = true;
            }
        }
        if (!numbers || !letters || !spaces) {
            document.getElementById('address-error').innerText = 
            'Must have At least 5 characters with letters, numbers and a space in between.';
            addClassRed(addressInput);
            isValid = false;
        }else{
            isValid = true;
            }
    }
});
        
addressInput.addEventListener('focus',function(){
    removeClassRed(addressInput);
    document.getElementById('address-error').innerText='';
});

//---CITY---
var cityInput = document.getElementById('city-su');


//---POSTAL CODE---
var postalCodeInput = document.getElementById('postal-code-su');
postalCodeInput.addEventListener('blur',function(){
    if(postalCodeInput.value === ''){
        document.getElementById('postal-code-error').innerText ='Must complete the field with your Postal Number';
        addClassRed(postalCodeInput);
        isValid = false;
    }else{
        for (i = 0; i < postalCodeInput.value.length; i++) {
            var char = postalCodeInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
            isValid = true;
            }else{
                document.getElementById('postal-code-error').innerText ='Must be only numbers';
                addClassRed(postalCodeInput);
                isValid = false;
            }
        }
        if(postalCodeInput.value.length >= 4 && postalCodeInput.value.length <= 5){
            isValid=true;
        }else{
            document.getElementById('postal-code-error').innerText = 'Must be between 4 and 5 numbers';
            addClassRed(postalCodeInput);
            isValid = false;
        }
    }
});
postalCodeInput.addEventListener('focus',function(){
    removeClassRed(postalCodeInput);
    document.getElementById('postal-code-error').innerText='';
});

//---EMAIL---
var emailInput = document.getElementById('email-su');
emailInput.addEventListener('blur',function(){
    var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value === ''){
        document.getElementById('email-error').innerText ='Must complete the field with your email';
        addClassRed(emailInput);
        isValid = false;
    }else if(emailExpression.test(emailInput.value)){
        isValid = true;
    }else{
        document.getElementById('email-error').innerText ='Must complete the field with your email';
        addClassRed(emailInput);
        isValid = false;
    }
});

emailInput.addEventListener('focus',function(){
    removeClassRed(emailInput);
    document.getElementById('email-error').innerText='';
});

//---PASSWORD---
var passwordInput = document.getElementById('password-su');
passwordInput.addEventListener('blur',function(){
    if(passwordInput.value === ''){
        document.getElementById('password-error').innerText ='Must complete the field with your Password';
        addClassRed(passwordInput);
        isValid = false;
    }else{
        if(passwordInput.value.length < 8){
            document.getElementById('password-error').innerText = 'At least 8 characters, made up of letters and numbers.';
            addClassRed(passwordInput);
            isValid = false;
        }else{
            var numbers = false;
            var letters = false;
            for (i = 0; i < passwordInput.value.length; i++) {
                var char = passwordInput.value.charCodeAt(i);
                if (char >= 48 && char <= 57) {
                numbers = true;
                } else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
                letters = true;
            }}
            if (!numbers || !letters) {
                document.getElementById('password-error').innerText = 'At least 8 characters, made up of letters and numbers.';
                addClassRed(passwordInput);
                isValid = false;
            }else{
                isValid = true;
            }
        }

    }
});
passwordInput.addEventListener('focus',function(){
    removeClassRed(passwordInput);
    document.getElementById('password-error').innerText='';
});

//---REPEAT PASSWORD---
var repeatPassInput = document.getElementById('repeat-p-su');
repeatPassInput.addEventListener('blur',function(){
    if(repeatPassInput.value === ''){
        document.getElementById('repeat-p-error').innerText ='Must complete the field with your Password';
        addClassRed(repeatPassInput);
        isValid = false;
    }else{
        if(repeatPassInput.value.length < 8){
            document.getElementById('repeat-p-error').innerText = 'At least 8 characters, made up of letters and numbers.';
            addClassRed(repeatPassInput);
            isValid = false;
        }else{
            var numbers = false;
            var letters = false;
            for (let i = 0; i < repeatPassInput.value.length; i++) {
                var char = repeatPassInput.value.charCodeAt(i);
                if (char >= 48 && char <= 57) {
                numbers = true;
                } else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
                letters = true;
            }}
            if (!numbers || !letters) {
                document.getElementById('repeat-p-error').innerText = 'At least 8 characters, made up of letters and numbers.';
                addClassRed(repeatPassInput);
                isValid = false;
            }else{
                isValid = true;
            }
        }

    }
});
repeatPassInput.addEventListener('focus',function(){
    removeClassRed(repeatPassInput);
    document.getElementById('repeat-p-error').innerText='';
});


//---REGISTER---
var btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click', function(){
    if(nameInput.value ===''|| lastNameInput.value ===''||
    dniInput.value ===''|| birthdayInput.value ==='' ||
    phoneInput.value ==='' || addressInput.value ==='' ||
    cityInput.value ==='' || postalCodeInput.value ==='' ||
    emailInput.value ===''|| passwordInput.value ==='' ||
    repeatPassInput.value ===''){
        alert('some of the inputs are incomplete')
    }else{
        if (nameInput.classList.contains('red-border')|| lastNameInput.classList.contains('red-border') ||
        dniInput.classList.contains('red-border') || birthdayInput.classList.contains('red-border') ||
        phoneInput.classList.contains('red-border') || addressInput.classList.contains('red-border') ||
        cityInput.classList.contains('red-border') || postalCodeInput.classList.contains('red-border') ||
        emailInput.classList.contains('red-border') || passwordInput.classList.contains('red-border') ||
        repeatPassInput.classList.contains('ered-border')){
            alert('some of the inpust are incorrect');
        }else{
            alert(
                'Name: ' + nameInput.value + '\n' + 
                'Last name: ' + lastNameInput.value + '\n' + 
                'Dni: ' + dniInput.value + '\n' + 
                'Birth date: ' + birthdayInput.value + '\n' + 
                'Telephone number: ' + phoneInput.value + '\n' + 
                'Address: ' + addressInput.value + '\n' + 
                'Location: ' + cityInput.value + '\n' + 
                'Postal code: ' + postalCodeInput.value + '\n' + 
                'Email: ' + emailInput.value + '\n' + 
                'Password: ' + passwordInput.value + '\n' + 
                'Password repeat: ' + repeatPassInput.value);
            
        }
    }
});


function hasLetterAndNumber(inputValue){
    var numbers = false;
    var letters = false;
    for (i = 0; i < inputValue.value.length; i++) {
        var char = inputValue.value.charCodeAt(i);
        if (char >= 48 && char <= 57) {
        numbers = true;
        } else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
        letters = true;
    }}
    if (!numbers || !letters) {
        isValid = false;
    }else{
        isValid = true;
    }
}

function hasLetter(inputValue){
    var letters = false;
    for (i = 0; i < inputValue.value.length; i++){
        var char = inputValue.value.charCodeAt(i);
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            letters = true;
        }else{
            letters = false;
        }
}}

function hasNumber(inputValue) {
    var char = inputValue.value;
    for (i = 0; i < char.length; i++) {
      var charCode = char.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
    return false;
  }

