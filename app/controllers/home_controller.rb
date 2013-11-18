class HomeController < ApplicationController

  def index
    @biblebooks = Biblebook.find(:all, :order => "position ASC")
  end

end
