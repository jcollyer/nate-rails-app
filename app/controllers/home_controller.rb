class HomeController < ApplicationController

  def index
     @biblebooks = Biblebook.all
  end

end
