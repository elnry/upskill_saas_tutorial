class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  # Whitelist the follwing form fields so that we can process them, if coming from
  #a devise contr
  before_action :configure_premitted_paramters, if: :devise_controller?
  
  protected
    def configure_premitted_paramters
        devise_parameter_sanitizer.permit(:sign_up) {|u| u.permit(:stripe_card_token, :email, :password, :password_confirmation)}
    end
end
