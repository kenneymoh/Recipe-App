class RecipeIngredientsController < ApplicationController
  # before_action :set_recipe_ingredient, only: %i[ show update destroy ]

  # GET /recipe_ingredients
  def index
    @recipe_ingredients = RecipeIngredient.all
    render json: @recipe_ingredients
  end

  # GET /recipe_ingredients/1
  def show
    @recipe_ingredients = RecipeIngredient.find_by(id: params[:id])
    if @recipe_ingredients
      render json: @recipe_ingredients
    else
      render json: {error: "Recipe_Ingredients not found"}, status: :not_found
    end
  end

  # POST /recipe_ingredients
  def create
    @recipe_ingredient = RecipeIngredient.create!(recipe_ingredient_params)
    if @recipe_ingredient
      render json: @recipe_ingredient, status: :created
    else
      render json: {error: "Recipe_ Ingredient not created succefully"}
    end
  end

  # PATCH/PUT /recipe_ingredients/1
  def update
    @recipe_ingredient = RecipeIngredient.find_by(id: params[:id])
    if @recipe_ingredient
      @recipe_ingredient.update(recipe_ingredient_params)
      render json: @recipe_ingredient
    else
      render json: {error: "Not updated succefully"}
    end
  end

  # DELETE /recipe_ingredients/1
  def destroy
    @recipe_ingredient = RecipeIngredient.find_by(id: params[:id])
    @recipe_ingredient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_recipe_ingredient
    #   @recipe_ingredient = RecipeIngredient.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def recipe_ingredient_params
      params.permit(:title, :recipe_id, :ingredient_id, :spice_levels)
    end
end
