class BiblebooksController < ApplicationController
  before_action :set_biblebook, only: [:show, :edit, :update, :destroy]

  # GET /biblebooks
  # GET /biblebooks.json
  def index
    @biblebooks = Biblebook.all
  end

  # GET /biblebooks/1
  # GET /biblebooks/1.json
  def show
  end

  # GET /biblebooks/new
  def new
    @biblebook = Biblebook.new
  end

  # GET /biblebooks/1/edit
  def edit
  end

  # POST /biblebooks
  # POST /biblebooks.json
  def create
    @biblebook = Biblebook.new(biblebook_params)

    respond_to do |format|
      if @biblebook.save
        format.html { redirect_to @biblebook, notice: 'Biblebook was successfully created.' }
        format.json { render action: 'show', status: :created, location: @biblebook }
      else
        format.html { render action: 'new' }
        format.json { render json: @biblebook.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /biblebooks/1
  # PATCH/PUT /biblebooks/1.json
  def update
    respond_to do |format|
      if @biblebook.update(biblebook_params)
        format.html { redirect_to @biblebook, notice: 'Biblebook was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @biblebook.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /biblebooks/1
  # DELETE /biblebooks/1.json
  def destroy
    @biblebook.destroy
    respond_to do |format|
      format.html { redirect_to biblebooks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_biblebook
      @biblebook = Biblebook.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def biblebook_params
      params.require(:biblebook).permit(:name, :testament, :position, :image)
    end
end
