class BiblebookSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :image, :thumb_image, :medium_image

  has_many :teachings

  def thumb_image
    object.image.url(:thumb)
  end

  def medium_image
    object.image.url(:medium)
  end

end
