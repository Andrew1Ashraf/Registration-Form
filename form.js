const invalidFname = document.getElementById("invalidfname");
const invalidLname = document.getElementById("invalidlname");
const invalidPhone = document.getElementById("invalidphone");
const invalidMail = document.getElementById("invalidmail");
const invalidPassword = document.getElementById("invalidpassword");
const invalidConfirmPassword = document.getElementById("invalidconfirmpassword");
const invalidImage = document.getElementById("invalidimage");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNum= document.getElementById("phoneNumber");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const image = document.getElementById("image");
const emailRegex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;
const phoneNumberRegex = /^01[0125][0-9]{8}$/;
const form = document.getElementById('form');
const formBtn = document.getElementById('formBtn');

const formInputValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
}

function setValidationState(element, isValid, invalidElement) {
    if (isValid) {
        invalidElement.style.display = "none";
        element.style.border = "2px solid black";
    } else {
        invalidElement.style.display = "block";
        element.style.border = "2px solid red";
    }
}

firstName.addEventListener('input', (e) => {
    let value = e.target.value;
    let isValid = value.length <= 10 && value.trim().length > 0;
    setValidationState(firstName, isValid, invalidFname);
    if (isValid) formInputValues.firstName = value;
})

lastName.addEventListener('input', (e) => {
    let value = e.target.value;
    let isValid = value.length <= 10 && value.trim().length > 0;
    setValidationState(lastName, isValid, invalidLname);
    if (isValid) formInputValues.lastName = value;
}) 

phoneNum.addEventListener('input', (e) => {
    let value = e.target.value;
    let isValid = phoneNumberRegex.test(value);
    setValidationState(phoneNum, isValid, invalidPhone);
    if (isValid) formInputValues.phoneNumber = value;

})

email.addEventListener('input', (e) => {
    let value = e.target.value;
    let isValid=emailRegex.test(value);
    setValidationState(email, isValid, invalidMail);
    if(isValid) formInputValues.email = value;
    })

    password.addEventListener('input', (e) => {
        let value = e.target.value;
        let isValid = passwordRegex.test(value);
        setValidationState(password, isValid, invalidPassword);
        if(isValid) formInputValues.password = value;
    })

    confirmPassword.addEventListener('input', (e) => {
        let value = e.target.value;
        let isValid = value === password.value;
        setValidationState(confirmPassword, isValid, invalidConfirmPassword);
        if(isValid) formInputValues.confirmPassword = value;
    })

    image.addEventListener('change', (e) => {
        let file = e.target.files[0];
    if (!file || file.size == 0 || file.size / (1024 * 1024) > 5) {
        invalidImage.style.display = "block";
        image.style.border = "2px solid red";
    } else {
        invalidImage.style.display = "none";
        formInputValues.image = file;
        image.style.border = "2px solid black";
    }
    })
        
    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let isFormValid = true;
    
        const inputs = document.querySelectorAll('input');
        inputs.forEach((input) => {
            if (input.value.trim().length == 0 || input.style.borderColor === 'red') {
                input.style.border = '2px solid red';
                isFormValid = false;
            }
        })
    
        if (isFormValid) {
            alert("Registration successful");
            console.log(formInputValues);
        } else {
            alert("Please correct the errors in the form before submitting.");
        }
    });
  
        