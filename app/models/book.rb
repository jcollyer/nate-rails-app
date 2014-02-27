class Book < ActiveRecord::Base

  has_attached_file :image,
    :styles => { :large => "300x450>", :medium => "150x225>", :thumb => "75x115>" },
    :storage => :s3,
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET'],
      :bucket => "nate_database"
    },
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename",
    :default_url => '/assets/missing_:style.jpg'

end
