

function validateForm() {

    const departmentNameInput = document.getElementById('name');
    const departmentBudgetInput = document.getElementById('budget');

    const errorDepartmentName = document.getElementById('errorDepartmentName');
    const errorDepartmentBudget = document.getElementById('errorDepartmentBudget');

    const errorsSummary = document.getElementById('errorsSummary');
    
    let valid = true; 
   
    resetErrors([departmentNameInput, departmentBudgetInput], [errorDepartmentName, errorDepartmentBudget], errorsSummary);
  


    //walidacja nazwy
    if (!checkRequired(departmentNameInput.value)) {
        valid = false;
        departmentNameInput.classList.add("error-input");
        errorDepartmentName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(departmentNameInput.value, 2, 60)) {
        valid = false;
        departmentNameInput.classList.add("error-input");
        errorDepartmentName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    //walidacja budżetu
    if (!checkRequired(departmentBudgetInput.value)) {
        valid = false;
        departmentBudgetInput.classList.add("error-input");
        errorDepartmentBudget.innerText = "Pole jest wymagane";
    } 
    // else if (!checkTextLengthRange(departmentBudgetInput.value, 2, 60)) {
    //     valid = false;
    //     departmentBudgetInput.classList.add("error-input");
    //     errorDepartmentBudget.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    // }


    //Obsługa wyświetlania ogólnej informacji o błędach formularza:
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
    
   
    }
    
    

    
    
    
    
    
    
    
    
    
    
    
    