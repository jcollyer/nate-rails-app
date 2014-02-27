class About < ActiveRecord::Base

  has_attached_file :image,
    :styles => { :large => "260x390>", :medium => "130x195>", :thumb => "65x100>" },
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
