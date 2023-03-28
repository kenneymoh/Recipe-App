class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :quantity
      t.string :description
      t.integer :price

      t.timestamps
    end
  end
end
