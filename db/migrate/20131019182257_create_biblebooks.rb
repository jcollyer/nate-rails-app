class CreateBiblebooks < ActiveRecord::Migration
  def change
    create_table :biblebooks do |t|
      t.string :name
      t.boolean :testament
      t.integer :position

      t.timestamps
    end
  end
end
