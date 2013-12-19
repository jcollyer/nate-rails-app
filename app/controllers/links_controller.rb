class LinksController < ApplicationController
  def new
    @link = Link.new
  end

  def create
    @note = Note.find(params[:note_id])
    @link = @note.links.create!(link_params)
    redirect_to @note
  end

  def edit
    @link = Link.find(params[:id])
    @note = Note.find(params[:note_id])
  end

  def update
    @note = Note.find(params[:note_id])
    @link = @note.links.find(params[:id])
    respond_to do |format|
      if @link.update(link_params)
        format.html { redirect_to "/notes/2/edit", notice: 'Link was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @link.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @link = Link.find(params[:id])
    @link.destroy
    respond_to do |format|
      format.html { redirect_to "/notes/2/edit" }
      format.json { head :no_content }
    end
  end

  private
    def link_params
      params.require(:link).permit(:note, :link, :name, :type)
    end
end
