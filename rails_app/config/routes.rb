Rails.application.routes.draw do
  get 'photo/create'
  get 'photo/delete'
  get 'users', to: 'users#index', as: :users
 
  get 'users/:id', to: 'users#show', as: :user
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
