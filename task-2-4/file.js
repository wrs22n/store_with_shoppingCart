const form = document.getElementById("form");
const email = document.getElementById("email");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("pass");
const passwordConfirm = document.getElementById("confpass");

class Validator {
    constructor(firstname, lastname, email, password, passwordConfirm) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

    changeTrueValue(str) {
        let formInfo = str.parentElement;
        const error = formInfo.querySelector("div");
        error.removeAttribute("data-wrong");
        error.setAttribute("data-true", "");
    }

    changeFalseValue(str) {
        let formInfo = str.parentElement;
        const error = formInfo.querySelector("div");
        error.removeAttribute("data-true");
        error.setAttribute("data-wrong", "");
    }

    changeEmailError(str) {
        let formInfo = str.parentElement;
        const error = formInfo.querySelector("div");
        error.removeAttribute("data-true");
        error.setAttribute("data-wrong", "");
        error.innerHTML = "Wrong Email";
    }

    isEmail(email) {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.trim() === "") {
            this.changeFalseValue(email);
        } else if (!email.value.match(emailRegex)) {
            this.changeEmailError(email);
        } else {
            this.changeTrueValue(email);
        }
    }

    isRequired(string) {
        if (
            string.value.trim() === "" ||
            string.value.split("").includes(" ")
        ) {
            this.changeFalseValue(string);
        } else {
            this.changeTrueValue(string);
        }
    }

    isPass(str) {
        if (str.value !== password.value) {
            this.changeFalseValue(str);
        } else {
            this.changeTrueValue(str);
        }
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formValid = new Validator();
    formValid.isEmail(email);
    formValid.isRequired(firstname);
    formValid.isRequired(lastname);
    formValid.isRequired(password);
    formValid.isPass(passwordConfirm);
});
