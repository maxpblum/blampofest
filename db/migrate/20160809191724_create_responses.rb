class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.boolean :attending, null: false 

      t.timestamps null: false
    end
  end
end
