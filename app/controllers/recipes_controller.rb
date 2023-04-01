class RecipesController < ApplicationController
  # before_action :set_recipe, only: %i[ show update destroy ]

  # GET /recipes
  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  # GET /recipes/1
  def show
    @recipe = Recipe.find_by(id: params[:id])
    if @recipe
      render json: @recipe, status: :ok
    else
      render json: {error: "recipe not found"}, status: :not_found
    end
  end

  # POST /recipes
  def create
    @recipe = Recipe.create!(recipe_params)
    if @recipe
      render json: @recipe, status: :created
    else
      render json: {error: "recipe not created"}
    end
  end

  # PATCH/PUT /recipes/1
  def update
    @recipe = Recipe.find_by(id: params[:id])
    if @recipe
      @recipe.update!(recipe_params)
      render json: @recipe
    else
      render json: {error: "Not updated succefully"}
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe = Recipe.find_by(id: params[:id])
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_recipe
    #   @recipe = Recipe.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.permit(:name, :description, :image, :user_id, :cooking_time)
    end
end
