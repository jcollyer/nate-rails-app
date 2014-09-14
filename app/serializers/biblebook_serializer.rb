class BiblebookSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :image_file_name

  has_many :teachings

end
