class AddPodcasturlToTeachings < ActiveRecord::Migration
  def change
    add_column :teachings, :podcasturl, :string
  end
end
