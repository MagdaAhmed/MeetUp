/**
 * Created by eman on 22/01/2016.
 */

/*global $, alert, console*/
$(function(){

    'use strict';


    //------------------------- Smooth Scroll To Div AND Add Link Active Class--------------//
    $('.links li a').click(function(){
        $(this).parent().addClass('activex').siblings().removeClass('activex');
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },2000)
    });

    //--------------------------- Navbar Toggle -------------------------------------------//
    $('.nav-in-media').click(function(){
        $('.brand').slideToggle(400, function(){
            $(this).fadeIn(2000,function(){
                $('.nav-in-media').fadeOut(1000);
            });
        });
    });

    /*------------------------Adjust CountDown Timer------------------------*/
    $('#clock').countdown('2016/10/10', function(event) {
            $(this).html(event.strftime('%D     : %H     : %M   :    %S'));
    });

    /*------------------------Adjust Google Map------------------------*/
    $('#view').click(function(){
       $('#overlay').fadeOut(2000);
    });

    //----------------------------------- Trigger Nice Scroll -----------------------------//
    $('html').niceScroll({
        cursorcolor: '#517441',
        cursorwidth: '6px'

    });

    //------------------------------------ Scroll Up Button ------------------------------//
    var scrollButton = $('#scroll-up');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    });

    scrollButton.click(function(){
        $('html,body').animate({scrollTop : 0},2000);
    })










});







