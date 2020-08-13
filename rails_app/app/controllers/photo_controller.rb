class PhotoController < ApplicationController
  def create
    @photos = Photo.order(:title)
  end
  
  def delete
  end
end
