class AddAttachmentImageToBios < ActiveRecord::Migration
  def self.up
    add_attachment :bios, :image
  end

  def self.down
    remove_attachment :bios, :image
  end
end
