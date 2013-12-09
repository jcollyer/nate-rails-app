class HomeController < ApplicationController

  def index
    @biblebooks = Biblebook.find(:all, :order => "position ASC")
    @abouts     = About.find(:all) #change to only show first?
    @books      = Book.find(:all)
  end

end
