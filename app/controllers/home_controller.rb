class HomeController < ApplicationController

  def index
    @biblebooks = Biblebook.find(:all, :order => "position ASC")
    @abouts     = About.all #change to only show first?
    @books      = Book.all
    @notes      = Note.all #change to only show first?
    @bios       = Bio.all #change to only show first?
  end

end
