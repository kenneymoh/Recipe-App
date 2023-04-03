class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :cooking_time, :ingredients
  has_many :saved_recipes
end
