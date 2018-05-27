'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const preloaderVar = document.getElementById("loader-wrapper");
    setTimeout(function () {
        preloaderVar.style.display = "none";

        $(document).ready(function () {

            let modal = $('.popuptext');
             let  close = $('.closePopup');

             modal.click(function () {
                $(this).parent().next(modal).addClass('active');
                $('body').addClass('hideBoddyScroll');
            });

            close.click(function () {

                $(this).parent().parent(modal).removeClass('active');
                $('body').removeClass('hideBoddyScroll');
            });
        });

    }, 5000);
});