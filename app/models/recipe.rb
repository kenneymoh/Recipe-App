class Recipe < ApplicationRecord
  has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    belongs_to :category
    belongs_to :user
    validates :name, presence: true
    validates :description, presence: true
    validates :cooking_time, presence: true
   
end
