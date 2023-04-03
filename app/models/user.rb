class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :saved_recipes
    validates :username, presence: true
    validates :password, presence: true, length: {minimum: 6}
    validates :email, presence: true

    
end
