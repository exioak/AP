function checkPassword(form) { 
    password = form.password1.value; 
    retype_pwd = form.password2.value; 

    // If password not entered 
    if (password == '') 
        alert ("Please enter Password"); 
          
    // If confirm password not entered 
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password !=  retype_pwd) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Password Match: Welcome to GeeksforGeeks!") 
        return true; 
    } 
} 