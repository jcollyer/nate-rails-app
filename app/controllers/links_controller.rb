class LinksController < ApplicationController
  def create
    @note = Note.find(params[:note_id])
    @link = @note.links.create!(link_params)
    redirect_to @note
  end

  def edit
    @link = Link.find(params[:id])
    @note = Note.find(params[:note_id])
  end

  private
    def link_params
      params.require(:link).permit(:note, :link, :name, :type)
    end
end
