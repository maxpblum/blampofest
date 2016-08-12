class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :responses, :comments, :text
  end
end
