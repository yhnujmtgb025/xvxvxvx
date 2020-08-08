class UsersController < ApplicationController
  def index
    @users = User.find_by firstname: 'Thanh'
  end

  def show
  end
end
