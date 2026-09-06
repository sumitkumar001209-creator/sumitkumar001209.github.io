
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

const form = document.querySelector('#contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name=document.querySelector('#name').value.trim();
    const email=document.querySelector('#email').value.trim();
    const message=document.querySelector('#message').value.trim();
    const subject=encodeURIComponent('Website Inquiry from '+name);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href=`mailto:sumitkumar001209@gmail.com?subject=${subject}&body=${body}`;
  });
}
