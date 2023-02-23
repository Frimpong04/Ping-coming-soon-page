//selectors
const submitButton = document.querySelector(".submit-button");
const inputField = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");

//functions
function submitForm(e) {
    e.preventDefault();
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validRegex.test(inputField.value)) {
        errorMessage.style.visibility = "hidden";
    }else {
        errorMessage.style.visibility = "visible";
        setTimeout(() => {
            return inputField.value = "";
           
        }, 1000);
        inputField.focus();
        
    }

}

//event listeners
submitButton.addEventListener("click", submitForm);