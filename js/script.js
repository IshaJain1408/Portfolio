let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


$(document).ready(function() {
    $('.count').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter:$(this).text()        
        },{
            duration: 3500,
            easing: 'swing',
            step : function (now){
                $(this).text(Math.ceil(now) + '+')
            }
        })
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Disable the submit button to prevent multiple submissions
        document.querySelector('.btn').disabled = true;

        // Send the form data to Formspree
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle success, e.g., show a success message
            console.log('Success:', data);
            alert('Message sent successfully!');
        })
        .catch(error => {
            // Handle error, e.g., show an error message
            console.error('Error:', error);
            alert('Error sending message. Please try again later.');
        });
    });
});