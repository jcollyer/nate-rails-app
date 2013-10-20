class Teaching < ActiveRecord::Base
  belongs_to :biblebook

  has_attached_file :mp3,
                    :storage => :s3,
                    :s3_credentials => "#{Rails.root}/config/s3.yml",
                    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
                    :url => "/system/:attachment/:id/:style/:filename"
end
