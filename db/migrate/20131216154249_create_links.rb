class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :link
      t.string :name
      t.integer :type
      t.belongs_to :note, index: true

      t.timestamps
    end
  end
end
