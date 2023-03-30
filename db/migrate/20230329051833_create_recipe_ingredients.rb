class CreateRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_ingredients do |t|
      t.string :title
      t.integer :recipe_id
      t.integer :ingredient_id
      t.integer :spice_levels

      t.timestamps
    end
  end
end
