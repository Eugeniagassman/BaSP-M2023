function addClassRed(inputValue) {
  inputValue.classList.add("red-border");
}
function removeClassRed(inputValue) {
  inputValue.classList.remove("red-border");
}

var btnLogin = document.getElementById("btn-si");
var emailInput = document.getElementById("email-login");
var passwordInput = document.getElementById("password-login");

emailInput.addEventListener("blur", function () {
  var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    document.getElementById("email-error").innerText =
      "Must complete the field with your email";
    addClassRed(emailInput);
    isValid = false;
  } else if (emailExpression.test(emailInput.value)) {
    isValid = true;
  } else {
    document.getElementById("email-error").innerText =
      "Must complete the field with your email";
    addClassRed(emailInput);
    isValid = false;
  }
});

emailInput.addEventListener("focus", function () {
  removeClassRed(emailInput);
  document.getElementById("email-error").innerText = "";
});

passwordInput.addEventListener("blur", function () {
  if (passwordInput.value === "") {
    document.getElementById("password-error").innerText =
      "Must complete the field with your Password";
    addClassRed(passwordInput);
    isValid = false;
  } else {
    if (passwordInput.value.length < 8) {
      document.getElementById("password-error").innerText =
        "At least 8 characters, made up of letters and numbers.";
      addClassRed(passwordInput);
      isValid = false;
    } else {
      var numbers = false;
      var letters = false;
      for (i = 0; i < passwordInput.value.length; i++) {
        var char = passwordInput.value.charCodeAt(i);
        if (char >= 48 && char <= 57) {
          numbers = true;
        } else if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
          letters = true;
        }
      }
      if (!numbers || !letters) {
        document.getElementById("password-error").innerText =
          "At least 8 characters, made up of letters and numbers.";
        addClassRed(passwordInput);
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
});

passwordInput.addEventListener("focus", function () {
  removeClassRed(passwordInput);
  document.getElementById("password-error").innerText = "";
});

btnLogin.addEventListener("click", function () {
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("some of the inputs are incomplete");
  } else {
    if (
      emailInput.classList.contains("red-border") ||
      passwordInput.classList.contains("red-border")
    ) {
      alert("some of the inputs are incorrect");
    } else {
      var url =
        "https://api-rest-server.vercel.app/login" +
        "?email=" +
        emailInput.value +
        "&password=" +
        passwordInput.value;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert(data.msg);
        })
        .catch(function () {
          alert("Error");
        });
    }
  }
});
