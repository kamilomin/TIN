

function validateForm() {

    const nameInput = document.getElementById('nameInput');
    const descriptionInput = document.getElementById('budget');

    const errorOrdernameInput = document.getElementById('errorOrdernameInput');
    const errorOrderdescriptionInput = document.getElementById('errorOrderdescriptionInput');

    const errorsSummary = document.getElementById('errorsSummary');
    
    let valid = true; 
   
    resetErrors([nameInput, descriptionInput], [errorOrdernameInput, errorOrderdescriptionInput], errorsSummary);
  


    //walidacja nazwy
    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorOrdernameInput.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorOrdernameInput.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    //walidacja opisu
    if (!checkRequired(descriptionInput.value)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        errorOrderdescriptionInput.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(descriptionInput.value, 2, 60)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        errorOrderdescriptionInput.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    // else if (!checkTextLengthRange(descriptionInput.value, 2, 60)) {
    //     valid = false;
    //     descriptionInput.classList.add("error-input");
    //     errorOrderdescriptionInput.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    // }


    //Obsługa wyświetlania ogólnej informacji o błędach formularza:
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
    
   
    }
    
    

    
    
    
    
    
    
    
    
    
    
    
    