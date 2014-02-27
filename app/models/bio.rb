class Bio < ActiveRecord::Base

  has_attached_file :image,
    :styles => { :large => "260x390>", :medium => "200x300>", :thumb => "65x100>" },
    :storage => :s3,
    :s3_credentials => "#{Rails.root}/config/s3_cred.yml",
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename",
    :default_url => '/assets/missing_:style.jpg'

end
