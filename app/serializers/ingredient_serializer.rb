class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :description, :price
end
