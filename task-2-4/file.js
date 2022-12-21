const form = document.getElementById("form");
const email = document.getElementById("email");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("pass");
const passwordConfirm = document.getElementById("confpass");

class Validator {
    static changeTrueValue(str) {
        let formInfo = str.parentElement;
        const error = formInfo.querySelector("div");
        error.removeAttribute("data-wrong");
        error.setAttribute("data-true", "");
    }

    static changeFalseValue(str) {
        let formInfo = str.parentElement;
        const error = formInfo.querySelector("div");
        error.removeAttribute("data-true");
        error.setAttribute("data-wrong", "");
    }

    static isEmail(email) {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let formInfo = email.parentElement;
        const error = formInfo.querySelector("div");
        if (email.value.trim() === "") {
            error.innerHTML = "This field is required";
            this.changeFalseValue(email);
        } else if (!email.value.match(emailRegex)) {
            error.innerHTML = "Wrong Email";
            this.changeFalseValue(email);
        } else {
            this.changeTrueValue(email);
        }
    }

    static isRequired(string) {
        if (
            string.value.trim() === "" ||
            string.value.split("").includes(" ")
        ) {
            this.changeFalseValue(string);
        } else {
            this.changeTrueValue(string);
        }
    }

    static isPass(str) {
        if (str.value !== password.value) {
            this.changeFalseValue(str);
        } else {
            this.changeTrueValue(str);
        }
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    Validator.isEmail(email);
    Validator.isRequired(firstname);
    Validator.isRequired(lastname);
    Validator.isRequired(password);
    Validator.isPass(passwordConfirm);
});
