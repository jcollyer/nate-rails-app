class AddAttachmentMp3ToTeachings < ActiveRecord::Migration
  def self.up
    add_attachment :teachings, :mp3
  end

  def self.down
    remove_attachment :teachings, :mp3
  end
end
