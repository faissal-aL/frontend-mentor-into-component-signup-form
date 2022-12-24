// error icons
const errorIcon1 = document.getElementById('error1');
const errorIcon2 = document.getElementById('error2');
const errorIcon3 = document.getElementById('error3');
const errorIcon4 = document.getElementById('error4');
// error messages
const errorText1 = document.getElementById('error1_text');
const errorText2 = document.getElementById('error2_text');
const errorText3 = document.getElementById('error3_text');
const errorText4 = document.getElementById('error4_text');
// input fields
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const claimButton = document.getElementById('claim_button');


emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

claimButton.addEventListener("click", function(){
    if(firstName.value == ""){
        errorIcon1.style.display = 'block';
        errorText1.style.display = 'block';
        firstName.style.border = '2px solid var(--Red)';
        firstName.placeholder = '';
    }
    else {
        errorIcon1.style.display = 'none';
        errorText1.style.display = 'none';
        firstName.style.border = '1px solid var(--Grayish-Blue)';
    }
    if(lastName.value == ""){
        errorIcon2.style.display = 'block';
        errorText2.style.display = 'block';
        lastName.style.border = '2px solid var(--Red)';
        lastName.placeholder = '';
    }
    else {
        errorIcon2.style.display = 'none';
        errorText2.style.display = 'none';
        lastName.style.border = '1px solid var(--Grayish-Blue)';
    }
    if(!emailRegex.test(email.value)){
        errorIcon3.style.display = 'block';
        errorText3.style.display = 'block';
        email.style.border = '2px solid var(--Red)';
        email.placeholder = 'email@example/com';
    }
    else {
        errorIcon3.style.display = 'none';
        errorText3.style.display = 'none';
        email.style.border = '1px solid var(--Grayish-Blue)';
    }
    if(password.value == ""){
        errorIcon4.style.display = 'block';
        errorText4.style.display = 'block';
        password.style.border = '2px solid var(--Red)';
        password.placeholder = '';
    }
    else {
        errorIcon4.style.display = 'none';
        errorText4.style.display = 'none';
        password.style.border = '1px solid var(--Grayish-Blue)';
    }

})