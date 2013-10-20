class AddAttachmentImageToBiblebooks < ActiveRecord::Migration
  def self.up
    add_attachment :biblebooks, :image
  end

  def self.down
    remove_attachment :biblebooks, :image
  end
end
