class CreateTeachings < ActiveRecord::Migration
  def change
    create_table :teachings do |t|
      t.string :name
      t.integer :position

      t.timestamps
    end
  end
end
