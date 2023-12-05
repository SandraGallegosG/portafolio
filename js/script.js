$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('clik',function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop : $ ($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

    const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_nkw82jq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
});