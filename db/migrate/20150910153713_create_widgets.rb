class CreateWidgets < ActiveRecord::Migration
  def change
    create_table 'widgets' do |t|
      t.spatial  'center', limit: { type: 'point' }, null: false
      t.integer  'height'
      t.integer  'width'
      t.datetime 'created_at'
      t.datetime 'updated_at'
      t.boolean  'categories', default: false
      t.integer  'user_id'
      t.integer  'provider_id'
    end
  end
end
