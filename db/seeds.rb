#creating twenty instances of the user
20.times do
    user = User.create(
        username: Faker::Name.first_name,
        email: Faker::Internet.email,
        password: "password",
        age: rand(11..40)
    )
end

#creating 21 instances of the recipe

    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://unsplash.com/photos/kcA-c3f_3FE",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://plus.unsplash.com/premium_photo-1669931367700-e4e1e0387d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1517686668014-1740ede39ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsLQDFm6ay4Qqwix-K-lsorgzP72hXECpBw&usqp=CAU",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFfTU5KukeOHaAEA-pPaO_oO0AAAtNuufZA&usqp=CAU",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZi46hUxiQ8DDJ2ft29nMYZ1CQ8r-BVoMAMg&usqp=CAU",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0RFc1GwUFSdh7aIgZZVvXO3svPVC4dAwJA&usqp=CAU",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaR--zjn5PocsTbcKHzrXHZHHd-C4ZzfP2Q&usqp=CAU",author: Faker::Name.first_name, cooking_time: rand(3..60))
    recipe = Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",author: Faker::Name.first_name, cooking_time: rand(3..60))


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
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/beef.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/chicken.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/dessert.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/lamb.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/miscellaneous.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/pasta.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/pork.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/seafood.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/side.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/starter.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/vegan.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/vegetarian.png", description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/breakfast.png",description: Faker::Food.description)
category = Category.create(name: Faker::Food.dish, origin: Faker::Food.ethnic_category, image: "https://www.themealdb.com/images/category/goat.png",description: Faker::Food.description)


#creating twenty instances of the recipe_ingredients

20.times do
    recipe_ingredient = RecipeIngredient.create(
        title: Faker::Food.dish,
        recipe_id: rand(1..50),
        ingredient_id: rand(1..100),
        spice_levels: rand(1..5)
    )
end
