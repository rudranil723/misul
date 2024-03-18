
const wrapper = document.querySelector('.wrapper');

const loginLink = wrapper.querySelector('.login-link');

const signupLink = wrapper.querySelector('.signup-link');

const popup = document.querySelector('.login-popup');

const closeicon = wrapper.querySelector('.icon-close');

const inputTexts = wrapper.querySelectorAll('input[type="email"]');

const labels = wrapper.querySelectorAll('.email-label');

const passwordinputs = wrapper.querySelectorAll('input[type="password"]');

const eyeicons = wrapper.querySelectorAll('.eye');

const Pop = document.querySelector('.pop');








signupLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

popup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

popup.addEventListener('click',()=>{
    Pop.classList.add('active-popup');
})

closeicon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    Pop.classList.remove('active-popup');
});

inputTexts.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value !== '' && !input.validity.valid) {
            labels[index].classList.add('invalid');
        } else {
            labels[index].classList.remove('invalid');
        }
    });
});


eyeicons.forEach((eyeicon, index) => {
    eyeicon.addEventListener('click',()=>{
        if (passwordinputs[index].type === "password") {
        passwordinputs[index].type = "text";
        eyeicon.setAttribute('name', 'eye');
        } else {
        passwordinputs[index].type = "password";
        eyeicon.setAttribute('name', 'eye-off');
        }
        
    });
});




