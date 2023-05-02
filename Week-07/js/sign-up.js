function addClassRed(inputValue){
    inputValue.classList.add('red-border');
}

function removeClassRed(inputValue){
    inputValue.classList.remove('red-border');
    
}

var nameInput = document.getElementById('name-su');
var lastNameInput = document.getElementById('last-name');
var dniInput = document.getElementById('dni-su');
var birthdateInput = document.getElementById('birthdate-su');
var phoneInput = document.getElementById('phone-number');
var addressInput = document.getElementById('address-su');
var cityInput = document.getElementById('city-su');
var postalCodeInput = document.getElementById('postal-code-su');
var emailInput = document.getElementById('email-su');
var passwordInput = document.getElementById('password-su');
var repeatPassInput = document.getElementById('repeat-p-su');
var btnRegister = document.getElementById('btn-register');

var validName = true;
var validLastName = true;
var validDni = true;
var validDob = true;
var validPhone = true;
var validAddress = true;
var validCity = true;
var validPC = true;
var validEmail = true;
var validPass = true;
var validRePass = true;

nameInput.addEventListener('blur',function(){
    validName = true;
    if(nameInput.value === ''){
        document.getElementById('name-error').innerText = 'Must complete with your name.';
        addClassRed(nameInput);
        validName = false;
    }
    for (var i = 0; i < nameInput.value.length; i++) {
        var char = nameInput.value.charCodeAt(i);
        if ((char < 65 || char > 90) && (char < 97 || char > 122)) {
            document.getElementById('name-error').innerText = 'Letters only and must be more than 3 letters';
            addClassRed(nameInput);
            validName = false;
        }else if(nameInput.value.length < 3 ){
            document.getElementById('name-error').innerText = 'Letters only and must be more than 3 letters';
            addClassRed(nameInput);
            validName = false;
        }
    }
});

nameInput.addEventListener('focus',function(){
    removeClassRed(nameInput);
    document.getElementById('name-error').innerText='';
});

lastNameInput.addEventListener('blur',function(){
    validLastName = true;
    if(lastNameInput.value === ''){
        document.getElementById('last-name-error').innerText ='Must complete the field with your name';
        addClassRed(lastNameInput);
        validLastName = false;
    }
    for (var i = 0; i < lastNameInput.value.length; i++) {
        var char = lastNameInput.value.charCodeAt(i);
        if ((char < 65 || char > 90) && (char < 97 || char > 122)) {
            document.getElementById('last-name-error').innerText ='Must contain only letters';
            addClassRed(lastNameInput);
            validLastName = false;
        }else if(lastNameInput.value.length < 3 ){
            document.getElementById('last-name-error').innerText ='Must have al least three letters';
            addClassRed(lastNameInput);
            validLastName = false;
        }
    }
});

lastNameInput.addEventListener('focus',function(){
    removeClassRed(lastNameInput);
    document.getElementById('last-name-error').innerText='';
});

dniInput.addEventListener('blur',function(){
    validDni = true;
    if(dniInput.value === ''){
        document.getElementById('dni-error').innerText ='Must complete the field with your DNI';
        addClassRed(dniInput);
        validDni =false;
    }
    for (i = 0; i < dniInput.value.length; i++) {
        var char = dniInput.value.charCodeAt(i);
        if (char >= 48 && char <= 57) {
            validDni =false;
        }else{
            document.getElementById('dni-error').innerText ='Must be only numbers';
            addClassRed(dniInput);
            validDni =false;
        }
    }
    if(dniInput.value.length <7){
        document.getElementById('dni-error').innerText = 'Must have seven numbers';
        addClassRed(dniInput);
        validDni =false;
    }

});

dniInput.addEventListener('focus',function(){
    removeClassRed(dniInput);
    document.getElementById('dni-error').innerText='';
});

birthdateInput.addEventListener('blur', function(){
    validDob =true;
    if(birthdateInput.value === ''){
        document.getElementById('birthdate-error').innerText ='Must complete the field with your Birthdate';
        addClassRed(birthdateInput);
        validDob =false;
    }else{
        if(birthdateInput.value.substring(0,4) > 2017 ){
            document.getElementById('birthdate-error').innerText ='The gym can only enter over 6 years';
            addClassRed(birthdateInput);
            validDob =false;
        }else if(birthdateInput.value.substring(0,4) < 1933){
            document.getElementById('birthdate-error').innerText ='Are you sure you are over 90 years old?';
            addClassRed(birthdateInput);
            validDob =false;
        }else{
            var year = birthdateInput.value.substring(0, 4);
            var month = birthdateInput.value.substring(5, 7);
            var day = birthdateInput.value.substring(8, 10);
            var date = [month, day, year];
            dateMDY = date.join('/');
        }
    }
});

birthdateInput.addEventListener('focus',function(){
    removeClassRed(birthdateInput);
    document.getElementById('birthdate-error').innerText='';
});

phoneInput.addEventListener('blur',function(){
    validPhone =true;
    if(phoneInput.value === ''){
        document.getElementById('phone-error').innerText ='Must complete the field with your Phone Number';
        addClassRed(phoneInput);
        validPhone = false;
    }else{
        for (i = 0; i < phoneInput.value.length; i++) {
            var char = phoneInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
                validPhone = false;
            }else{
                document.getElementById('phone-error').innerText ='Must be only numbers';
                addClassRed(phoneInput);
                validPhone = false;
            }
        }
        } if(phoneInput.value.length != 10){
            document.getElementById('phone-error').innerText = 'Must have ten numbers';
            addClassRed(phoneInput);
            validPhone = false;
        }
    }
);

phoneInput.addEventListener('focus',function(){
    removeClassRed(phoneInput);
    document.getElementById('phone-error').innerText='';
});

addressInput.addEventListener('blur',function(){
    validAddress = true;
    if(addressInput.value === ''){
        document.getElementById('address-error').innerText ='Must complete the field with your Adrress';
        addClassRed(addressInput);
        validAddress = false;
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
        var spaceAtFirst = false;
        var spaceIndex = addressInput.value.substring(0,1);
        if(spaceIndex.indexOf(' ') ==-1){
            spaceAtFirst = false;
        }else{
            spaceAtFirst = true;
        }
        var spaces = false;
        for (i = 0; i < addressInput.value.length;i++){
            if (addressInput.value.indexOf(' ') == -1){
                spaces = false;
            }else{
                spaces = true;
            }
        }
        if (!numbers || !letters || !spaces || spaceAtFirst) {
            document.getElementById('address-error').innerText = 
            'Must have At least 5 characters with letters, numbers and a space in between.';
            addClassRed(addressInput);
            validAddress = false;
        }
    }
});

addressInput.addEventListener('focus',function(){
    removeClassRed(addressInput);
    document.getElementById('address-error').innerText='';
});

cityInput.addEventListener('blur',function(){
    validCity = true;
    if(cityInput.value === ''){
        document.getElementById('city-error').innerText ='Must complete the field with your city';
        addClassRed(cityInput);
        validCity = true;
    }else{
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
        if ((!numbers || numbers) && ( letters || !letters) && cityInput.value.length < 5) {
            document.getElementById('city-error').innerText = 
            'Must have At least 5 characters with letters or numbers';
            addClassRed(addressInput);
            validCity = true;
        }
    }
});

cityInput.addEventListener('focus',function(){
    removeClassRed(cityInput);
    document.getElementById('city-error').innerText='';
});

postalCodeInput.addEventListener('blur',function(){
    validPC = true;
    if(postalCodeInput.value === ''){
        document.getElementById('postal-code-error').innerText ='Must complete the field with your Postal Number';
        addClassRed(postalCodeInput);
        validPC = false;
    }else{
        for (i = 0; i < postalCodeInput.value.length; i++) {
            var char = postalCodeInput.value.charCodeAt(i);
            if (char >= 48 && char <= 57) {
                isValid = true;
            }else{
                document.getElementById('postal-code-error').innerText ='Must be only numbers';
                addClassRed(postalCodeInput);
                validPC = false;
            }
        }
        if(postalCodeInput.value.length >= 4 && postalCodeInput.value.length <= 5){
            isValid=true;
        }else{
            document.getElementById('postal-code-error').innerText = 'Must be between 4 and 5 numbers';
            addClassRed(postalCodeInput);
            validPC = false;
        }
    }
});

postalCodeInput.addEventListener('focus',function(){
    removeClassRed(postalCodeInput);
    document.getElementById('postal-code-error').innerText='';
});

emailInput.addEventListener('blur',function(){
    validEmail = true;
    var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value === ''){
        document.getElementById('email-error').innerText ='Must complete the field with your email';
        addClassRed(emailInput);
        validEmail = false;
    }else if(emailExpression.test(emailInput.value)){
        return true;
    }else{
        document.getElementById('email-error').innerText ='Must complete the field with your email';
        addClassRed(emailInput);
        validEmail = false;
    }
});

emailInput.addEventListener('focus',function(){
    removeClassRed(emailInput);
    document.getElementById('email-error').innerText='';
});

passwordInput.addEventListener('blur',function(){
    validPass = true;
    if(passwordInput.value === ''){
        document.getElementById('password-error').innerText ='Must complete the field with your Password';
        addClassRed(passwordInput);
        validPass = false;
    }else{
        if(passwordInput.value.length < 8){
            document.getElementById('password-error').innerText = 
            'At least 8 characters, made up of letters and numbers.';
            addClassRed(passwordInput);
            validPass = false;
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
                document.getElementById('password-error').innerText = 
                'At least 8 characters, made up of letters and numbers.';
                addClassRed(passwordInput);
                validPass = false;
            }
        }
    }
});

passwordInput.addEventListener('focus',function(){
    removeClassRed(passwordInput);
    document.getElementById('password-error').innerText='';
});

repeatPassInput.addEventListener('blur',function(){
    validRePass = true;
    if(repeatPassInput.value === ''){
        document.getElementById('repeat-p-error').innerText ='Must complete the field with your Password';
        addClassRed(repeatPassInput);
        validRePass = false;
    }else{
        if(repeatPassInput.value === passwordInput){
            validRePass = true;
        }else{
            document.getElementById('repeat-p-error').innerText ='Must repeat your Password';
            addClassRed(repeatPassInput);
            validRePass = false;
        }
    }
});

repeatPassInput.addEventListener('focus',function(){
    removeClassRed(repeatPassInput);
    document.getElementById('repeat-p-error').innerText='';
});

btnRegister.addEventListener('click', function(){
    if(nameInput.value ===''|| lastNameInput.value ===''||
    dniInput.value ==='' || birthdateInput.value ==='' ||
    phoneInput.value ==='' || addressInput.value ==='' ||
    cityInput.value ==='' || postalCodeInput.value ==='' ||
    emailInput.value ===''|| passwordInput.value ==='' ||
    repeatPassInput.value ===''){
        alert('some of the inputs are incomplete')
    }
    if ( !validName  || !validLastName ||
        !validPhone  ||  !validDob||
        !validPhone || !validAddress ||
        !validCity  || !validPC ||
        !validEmail  || !validPass ||
        !validRePass ){
            alert('some of the imputs are incorrect');
    }else{

        var url = 'https://api-rest-server.vercel.app/signup?name=' +
        nameInput.value + '&lastName=' + lastNameInput.value + 
        '&dni=' + dniInput.value + '&dob=' + dateMDY +
        '&phone=' + phoneInput.value + '&address=' + addressInput.value +
        '&city=' + cityInput.value + '&zip=' + postalCodeInput.value +
        '&email=' + emailInput.value + '&password=' + passwordInput.value;
        
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function (data) {
            var alertMsg = '';
            if (data.hasOwnProperty('data')) {
                var keys = Object.keys(data.data);
                for (var i = 1; i < keys.length; i++) {
                    var key = keys[i];
                    if (data.data.hasOwnProperty(key)) {
                        var value = data.data[key];
                        localStorage.setItem(key, value);
                        alertMsg += key + ': ' + value + '\n';
                    }
                }
            } else if (data.hasOwnProperty('errors')) {
                console.log(data.errors)
                for (var i = 0; i < data.errors.length; i++) {
                    var error = data.errors[i];
                    if (error.hasOwnProperty('msg')) {
                        alertMsg += error.msg + '\n';
                    }
                }
            }
            if(alertMsg !== ''){
                alert(alertMsg);
            }
        })
        .catch(function () {
            console.log('error');
        });
}});

document.addEventListener("DOMContentLoaded", showLocalStorage);
function showLocalStorage() {
nameInput.value = localStorage.getItem('name');
lastNameInput.value = localStorage.getItem('lastName');
addressInput.value = localStorage.getItem('address');
postalCodeInput.value = localStorage.getItem('zip');
dateMDY = localStorage.getItem('dob');
phoneInput.value = localStorage.getItem('phone');
dniInput.value = localStorage.getItem('dni');
cityInput.value = localStorage.getItem('city');
emailInput.value = localStorage.getItem('email');
passwordInput.value = localStorage.getItem('password');
repeatPassInput.value = localStorage.getItem('password');
}