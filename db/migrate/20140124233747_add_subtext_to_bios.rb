class AddSubtextToBios < ActiveRecord::Migration
  def change
    add_column :bios, :subtext, :string
  end
end
