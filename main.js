const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');
const passwordmsg = document.querySelector('.passwordmsg');
const userList = document.querySelector('#users');

myForm.addEventListener ('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
   

    console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''  || password.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please all field are required';
        passwordmsg.classList.add('error')
        passwordmsg.innerHTML = 'password field is empty';
        setTimeout(() => msg.remove(), 3000);
        setTimeout(() => passwordmsg.remove(), 3000);   
    }

    // if( password.value.length < 8  ){
    //     passwordmsg.classList.add('error')
    //     passwordmsg.innerHTML = 'Please all field are required, include uppercase, include special character';
    //     msg.classList.add('error')
    //     msg.innerHTML = 'Please all field are required';
    //     setTimeout(() => passwordmsg.remove(), 3000);   
    // }



     else {
         console.log('success');
        const li = document.createElement ("li");
        li.appendChild(document.createTextNode (`${nameInput.value}`));
        
        userList.appendChild(li);

        //clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}

    


