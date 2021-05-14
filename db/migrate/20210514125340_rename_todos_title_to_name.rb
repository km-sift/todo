class RenameTodosTitleToName < ActiveRecord::Migration[6.1]
  def change
    rename_column :todos, :title, :name
  end
end
