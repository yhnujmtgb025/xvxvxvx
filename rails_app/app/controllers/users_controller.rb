class UsersController < ApplicationController
  def index
    @users = User.order(:firstname)
  end

  def show
  end
end
