class User < ApplicationRecord
    has_many :recipes

    validates :username, presence: true
    validates :password, presence: true, length: {minimum: 6}
    validates :email, presence: true
end
