

function validateForm() {

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const departmentNameInput = document.getElementById('firstName');
    const opisInput = document.getElementById('firstName');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorEmail = document.getElementById('errorEmail');
    const errorDepartmentName = document.getElementById('errorDepartmentName');
    const errorOpis = document.getElementById('errorOpis');
    //const error-input = document.getElementById('errorOpis');

    const errorsSummary = document.getElementById('errorsSummary');
    
    let valid = true; 
   
    resetErrors([firstNameInput, lastNameInput, emailInput], [errorFirstName, errorLastName, errorEmail], errorsSummary);
  


    //walidacja imienia
    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    //walidacja nazwiska
    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    //walidacja email
    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }
// nie dziala psuje ...
    // // walidacja nazwy departamentu
    // if (!checkRequired(departmentNameInput.value)) {
    //     valid = false;
    //     departmentNameInput.classList.add("error-input");
    //     errorDepartmentName.innerText = "Pole jest wymagane";
    // }
    // // walidacja opisu
    // if (!checkRequired(opisInput.value)) {
    //     valid = false;
    //     opisInput.classList.add("error-input");
    //     errorOpis.innerText = "Pole jest wymagane";
    // }





    //Obsługa wyświetlania ogólnej informacji o błędach formularza:
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
    
   
    }
    
    

    
    
    
    
    
    
    
    
    
    
    
    