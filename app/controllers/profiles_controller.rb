class ProfilesController < ApplicationController
  # GET to /users/:user_id/profile/new
  def new 
    #render blank profile detals form
    @profile = Profile.new
  end
   
end