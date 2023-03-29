class Category < ApplicationRecord
    has_many :recipes
    
    validates :name, presence: true
    validates :description, presence: true
    validates :country, presence: true
end
