class Category < ApplicationRecord
<<<<<<< HEAD
=======
    has_many :recipes
    
    validates :name, presence: true
    validates :description, presence: true
    validates :country, presence: true
>>>>>>> 423a93d67536300b985c3168e49439cade013901
end
