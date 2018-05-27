'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const preloaderVar = document.getElementById("loader-wrapper");
    setTimeout(function () {
        preloaderVar.style.display = "none";

        /*$(document).ready(function () {

            let modal = $('.popupElement');
            

            modal.click(function () {
                $(this).parent().next(modal).addClass('active');
                $('body').addClass('hideBoddyScroll');
            });

            /*close.click(function () {

                $(this).parent().parent(modal).removeClass('active');
                $('body').removeClass('hideBoddyScroll');
            });*/
      /*  });**/


      var popup = document.querySelector('.popupElement');

      popup.addEventListener('click', function(){
        popup.classList.add('active');
      });

    }, 5000);
});