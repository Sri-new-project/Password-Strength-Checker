const password = document.getElementById("password");

const strengthBar = document.getElementById("strength-bar");

const lengthRule = document.getElementById("length");

const uppercaseRule = document.getElementById("uppercase");

const numberRule = document.getElementById("number");

const specialRule = document.getElementById("special");

password.addEventListener("keyup", function(){

    let value = password.value;

    let strength = 0;

    // Length Check
    if(value.length >= 8){

        lengthRule.classList.add("valid");

        strength++;
    }
    else{
        lengthRule.classList.remove("valid");
    }

    // Uppercase Check
    if(/[A-Z]/.test(value)){

        uppercaseRule.classList.add("valid");

        strength++;
    }
    else{
        uppercaseRule.classList.remove("valid");
    }

    // Number Check
    if(/[0-9]/.test(value)){

        numberRule.classList.add("valid");

        strength++;
    }
    else{
        numberRule.classList.remove("valid");
    }

    // Special Character Check
    if(/[!@#$%^&*]/.test(value)){

        specialRule.classList.add("valid");

        strength++;
    }
    else{
        specialRule.classList.remove("valid");
    }

    // Strength Bar
    if(strength == 1){

        strengthBar.style.width = "25%";

        strengthBar.style.background = "red";
    }

    else if(strength == 2){

        strengthBar.style.width = "50%";

        strengthBar.style.background = "orange";
    }

    else if(strength == 3){

        strengthBar.style.width = "75%";

        strengthBar.style.background = "#00f7ff";
    }

    else if(strength == 4){

        strengthBar.style.width = "100%";

        strengthBar.style.background = "#7CFF7C";
    }

    else{

        strengthBar.style.width = "0%";
    }

});

/* Show / Hide Password */

function togglePassword(){

    if(password.type === "password"){

        password.type = "text";
    }
    else{

        password.type = "password";
    }
}