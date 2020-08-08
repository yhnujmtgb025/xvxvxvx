class Album < ApplicationRecord
    belongs_to :user
    has_many :photos, through: :ais,dependent: :destroy
    has_many :ais
    has_many :reacts, as: :reaction
end
