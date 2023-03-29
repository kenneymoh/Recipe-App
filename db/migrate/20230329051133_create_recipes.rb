class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :cooking_time
      t.string :author

      t.timestamps
    end
  end
end
