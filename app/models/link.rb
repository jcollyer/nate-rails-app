class Link < ActiveRecord::Base
  belongs_to :note
  default_scope order('position')
end
