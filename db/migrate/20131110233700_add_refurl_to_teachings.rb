class AddRefurlToTeachings < ActiveRecord::Migration
  def change
    add_column :teachings, :refurl, :string
  end
end
