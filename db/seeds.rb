#creating twenty instances of the user
20.times do
    user = User.create(
        username: Faker::Name.first_name,
        email: Faker::Internet.email,
        password: "password",
        age: rand(11..40)
    )
end

#creating twenty instances of the recipe
50.times do
    recipe = Recipe.create(
        name: Faker::Food.dish,
        description: Faker::Food.description,
        image: faker.image.food(),
        cooking_time: rand(3..60),
    )
end

#creating twenty instances of the ingredients
100.times do
    ingredient = Ingredient.create(
        name: Faker::Food.ingredient,
        quantity: Faker::Food.measurement,
        description: Faker::Food.description,
        price: rand(1..99)
    )
end

#creating twenty instances of the categories
20.times do
    category = Category.create(
        name: Faker::Food.allergen,
        origin: Faker::Food.ethnic_category,
        image: faker.image.food(),
        description: Faker::Food.description
    )
end

#creating twenty instances of the recipe_ingredients

20.times do
    recipe_ingredient = RecipeIngredients.create(
        title: Faker::Food.dish,
        recipe_id: rand(1..50),
        ingredient_id: rand(1..100),
        spice_levels: rand(1..5)
    )
end



