//NAME
var nameInput = document.getElementById('name-su');
nameInput.addEventListener('blur',function(){
    var isText = true;
    var textLength = true;
    if(nameInput.value === ''){
        document.getElementById('name-error').innerText ='Must complete the field with your name';
        nameInput.classList.add('red-border');
    }
    for (var i = 0; i < nameInput.value.length; i++) {
      var codigo = nameInput.value.charCodeAt(i);
      if ((codigo < 65 || codigo > 90) && (codigo < 97 || codigo > 122)) {
        isText = false;
        document.getElementById('name-error').innerText ='Must contain only letters';
        nameInput.classList.add('red-border');
      }else if(nameInput.value.length < 3 ){
        textLength = false;
        document.getElementById('name-error').innerText ='Must have al least three letters';
        nameInput.classList.add('red-border');
      }
    }
});

nameInput.addEventListener('focus',function(){
    document.getElementById('name-error').innerText='';
    nameInput.classList.remove('red-border');
})
//LAST NAME
var lastNameInput = document.getElementById('last-name');
lastNameInput.addEventListener('blur',function(){
    var isText = true;
    var textLength = true;
    if(lastNameInput.value === ''){
        document.getElementById('last-name-error').innerText ='Must complete the field with your name';
        lastNameInput.classList.add('red-border');
    }
    for (var i = 0; i < lastNameInput.value.length; i++) {
      var codigo = lastNameInput.value.charCodeAt(i);
      if ((codigo < 65 || codigo > 90) && (codigo < 97 || codigo > 122)) {
        isText = false;
        document.getElementById('last-name-error').innerText ='Must contain only letters';
        lastNameInput.classList.add('red-border');
      }else if(lastNameInput.value.length < 3 ){
        textLength = false;
        document.getElementById('last-name-error').innerText ='Must have al least three letters';
        lastNameInput.classList.add('red-border');
      }
    }
});

lastNameInput.addEventListener('focus',function(){
    document.getElementById('last-name-error').innerText='';
    lastNameInput.classList.remove('red-border');
})

//DNI
var dniInput = document.getElementById('dni-su');
dniInput.addEventListener('blur',function(){
    if(dniInput.value === ''){
        document.getElementById('dni-error').innerText ='Must complete the field with your DNI';
        dniInput.classList.add('red-border');
    }else{
        if(isNaN(dniInput.value)){
            document.getElementById('dni-error').innerText = 'Must be only number';
            dniInput.classList.add('red-border');
        }else if(dniInput.value.length < 7){
            document.getElementById('dni-error').innerText = 'Must have al least seven numbers';
            dniInput.classList.add('red-border');
        }
    }
});
dniInput.addEventListener('focus',function(){
    document.getElementById('dni-error').innerText='';
    dniInput.classList.remove('red-border');
});

//PHONE NUMBER
var phoneInput = document.getElementById('phone-number');
phoneInput.addEventListener('blur',function(){
    if(phoneInput.value === ''){
        document.getElementById('phone-error').innerText ='Must complete the field with your Phone Number';
        phoneInput.classList.add('red-border');
    }else{
        if(isNaN(phoneInput.value)){
            document.getElementById('phone-error').innerText = 'Must be only number';
            phoneInput.classList.add('red-border');
        }else if(phoneInput.value.length != 10){
            document.getElementById('phone-error').innerText = 'Must have ten numbers';
            phoneInput.classList.add('red-border');
        }
    }
});
phoneInput.addEventListener('focus',function(){
    document.getElementById('phone-error').innerText='';
    phoneInput.classList.remove('red-border');
});
