# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize! 

#ActionMailer::Base.smtp_settings = {
#    :port               => ENV['MAILGUN_SMTP_PORT'],
#    :address            => ENV['MAILGUN_SMTP_SERVER'],
#    :username           => ENV['MAILGUN_SMTP_LOGIN'],
#    :password           => ENV['MAILGUN_SMTP_SERVER'],
#    :port               => ENV['MAILGUN_SMTP_PASSWORD'], 
#    :domain             => 'saasapp-devweb.herokuapp.com', 
#    :authentication     => :plain,
#}
#ActionMailer::Basr.delivery_method = :smtp