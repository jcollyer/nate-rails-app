class BiblebookSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :image

  has_many :teachings

end
