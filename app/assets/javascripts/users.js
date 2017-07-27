/* global $, Stripe */
$(document).on('turbolinks:load', function () {
    var theForm = $('#pro-form');
    var submitBtn = $('#form-signup-btn');
    
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
    
    //event - when the user clicks it's an event
    submitBtn.click(function(event) { 
        
        //prevent default submission behavior.
        event.preventDefault(); 
        submitBtn.val('Processing').prop('disable', true);
        
        //collect the card fields 
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
        
        //use Stripe JS library to check for card error
        
        var error = false;
        
        //validate card number
        if (!Stripe.card.validateCardNumber(ccNum)) {
            error = true;
            alert('The credit card apears to be invalid');
        }
        
        //validate cvc number
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            alert('The CVC number apears to be invalid');
        }
        
        //validate expiration date
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            alert('The expiration date apears to be invalid');
        }
        
        if (error) {
            //if there are card errors, don't send to Stripe
            submitBtn.prop('disable', false).val('Sign Up');
        } else {
        
            //send the card info to Stripe
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);    
        }
        
        return false;
    });
    
    //Stripe will return a card token 
    
    function stripeResponseHandler(status, response) {
        //get the token from the response
        var token = response.id;
        
        //inject the card token in a hidden field
        theForm.append($('<input type="hidden" name="user[stripe_card_token]">').val(token) );
        
        //submit form to our Rails app
        //get(0) - to grab theForm , the theForm is in an array
        theForm.get(0).submit();
    }
    
    
});