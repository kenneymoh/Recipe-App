Rails.application.routes.draw do
  resources :saved_recipes
  resources :recipe_ingredients
  resources :categories
  resources :ingredients
  resources :recipes
  resources :users

  post '/login', to: 'session#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
