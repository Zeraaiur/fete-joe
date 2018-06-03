Rails.application.routes.draw do
root "application#index"
get "niveau2", to: "application#niveau2"
get "niveau3", to: "application#niveau3"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
