class Book < ActiveRecord::Base

  has_attached_file :image,
    :styles => { :large => "300x450>", :medium => "150x225>", :thumb => "75x115>" },
    :storage => :s3,
    # :s3_credentials => "#{Rails.root}/config/s3_cred.yml",
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename",
    :default_url => '/assets/missing_:style.jpg'

end
