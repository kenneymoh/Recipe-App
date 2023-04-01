class SavedRecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :recipe
end
