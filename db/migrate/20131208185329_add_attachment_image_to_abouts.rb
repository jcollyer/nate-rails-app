class AddAttachmentImageToAbouts < ActiveRecord::Migration
  def self.up
    add_attachment :abouts, :image
  end

  def self.down
    remove_attachment :abouts, :image
  end
end
