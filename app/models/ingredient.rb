class Ingredient < ApplicationRecord
    has_many :recipes

    validates :name, presence: true
    validates :description, presence: true
    validates :price, presence: true, length: {minimum: 1}
    has_many :recipes
    
    validates :name, presence: true
    validates :description, presence: true
    validates :price, presence: true, length: {minimum: 1}
end
