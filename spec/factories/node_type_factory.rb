Factory.define :node_type do |f|
  f.identifier 'bar'
  f.icon '/images/icons/glass.png'
  f.association :category
end