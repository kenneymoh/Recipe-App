class CategoriesController < ApplicationController
  # before_action :set_category, only: %i[ show update destroy ]

  # GET /categories
  def index
    @categories = Category.all
    render json: @categories
  end

  # GET /categories/1
  def show
    @category = Category.find_by(id: params[:id])
    if @category
      render json: @category, status: :ok
    else
      render json: {error: "Category not found"}, status: :not_found
    end
  end

  # POST /categories
  def create
    @category = Category.create!(category_params)

    if @category
      render json: @category, status: :created
    else
    # rescue ActiveRecord::RecordInvalid => e
      render json: {error: "Category not created"}
    end
  end

  # PATCH/PUT /categories/1
  def update
    @category = Category.find_by(id: params[:id])
    if @category
      @category.update!(category_params)
      render json: @category, status: :ok
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category = Category.find_by(id: params[:id])
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_category
    #   @category = Category.find_by(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def category_params
      params.permit(:name, :origin, :image, :description)
    end
end
