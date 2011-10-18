class CreateRegions < ActiveRecord::Migration
  def self.up
    create_table :regions, :force => true do |t|
      t.string :name
      t.polygon :grenze, :null => false

      t.timestamps
    end

  end

  def self.down
    drop_table :regions
  end
end
