Given(/^(\d+) valid pois exist$/) do |amount|
  NodeType.delete_all
  Poi.delete_all
  node_type = create_model('node_type')
  i = node_type.id
#  raise node_type.inspect
  node = nil
  amount.to_i.times do
    node = create_model('poi', :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'}, :node_type => node_type)
    node.node_type = node_type
    node.save!
  end
end
