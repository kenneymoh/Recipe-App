class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :age
  # has_many :recipes
end
