class IngredientsController < ApplicationController
  # before_action :set_ingredient, only: %i[ show update destroy ]

  # GET /ingredients
  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end

  # GET /ingredients/1
  def show
    @ingredients = Ingredient.find_by(id: params[:id])
    if @ingredients
      render json: @ingredients, status: :ok
    else
      render json: {error: "Ingredient not found"}, status: :not_found
    end
  end

  # POST /ingredients
  def create
    @ingredient = Ingredient.create!(ingredient_params)
    if @ingredient
      render json: @ingredient, status: :created
    else
      render json: {error: "Ingredient not created succefully"}
    end
  end

  # PATCH/PUT /ingredients/1
  def update
    @ingredient = Ingredient.find_by(id: params[:id])
    if @ingredient
      @ingredient.update!(ingredient_params)
      render json: @ingredient, status: :ok
    else
      render json: {error: "Ingredient not updated succefully"}
    end
  end

  # DELETE /ingredients/1
  def destroy
    @ingredient = Ingredient.find_by(id: params[:id])
    @ingredient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_ingredient
    #   @ingredient = Ingredient.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def ingredient_params
      params.permit(:name, :quantity, :description, :price)
    end
end
