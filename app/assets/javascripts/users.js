/* global $, Stripe */
$(document).on('turbolinks:load', function () {
    var theForm = $('#pro-form');
    var submitBtn = $('#form-submit-btn');
    
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
    
    //event - when the user clicks it's an event
    submitBtn.click(function(event) { 
        
        //prevent default submission behavior.
        event.preventDefault()
    });
    
    //collect the card fields 
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    //send the card info to Stripe
    Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
    }, stripeResponseHandler);
});