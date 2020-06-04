class CreateProspects < ActiveRecord::Migration[6.0]
  def change
    create_table :prospects do |t|
      t.string :email
      t.string :name
      t.text :message

      t.timestamps
    end
  end
end
