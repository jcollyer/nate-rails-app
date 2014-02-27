class Teaching < ActiveRecord::Base
  belongs_to :biblebook

  has_attached_file :mp3,
    :storage => :s3,
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET'],
      :bucket => "nate_database"
    },
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename"

end
