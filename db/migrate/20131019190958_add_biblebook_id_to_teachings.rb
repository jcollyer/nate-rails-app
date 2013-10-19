class AddBiblebookIdToTeachings < ActiveRecord::Migration
  def change
    add_column :teachings, :biblebook_id, :integer
    add_index  :teachings, :biblebook_id
  end
end
