class AddLinktwoToNote < ActiveRecord::Migration
  def change
    add_column :notes, :linktwo, :string
  end
end
