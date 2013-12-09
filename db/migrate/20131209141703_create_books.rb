class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :body
      t.string :buylink

      t.timestamps
    end
  end
end
