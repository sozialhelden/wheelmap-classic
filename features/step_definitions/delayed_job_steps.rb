Then /^an update tags job has been enqueued(?: with #{capture_fields})?(?: and tags)?$/ do |fields, table|
  Delayed::Job.count.should > 0
  job = YAML.load(Delayed::Job.last.handler)
  job.should be_kind_of UpdateTagsJob
  field_hash = parse_fields(fields)
  field_hash.each do |key,value|
    job.send(key).should eql value
  end

  table.rows_hash.each do |key,value|
    job.tags[key].should eql value
  end

end

Then /^a create node job has been enqueued(?: with #{capture_fields})?(?: and tags)?$/ do |fields, table|
  Delayed::Job.count.should > 0
  job = YAML.load(Delayed::Job.last.handler)
  job.should be_kind_of CreateNodeJob
  field_hash = parse_fields(fields)
  field_hash.each do |key,value|
    job.send(key).should eql value
  end

  table.rows_hash.each do |key,value|
    job.tags[key].should eql value
  end
end

Given /^#{capture_model} has the following tags$/ do |model, table|
  # table is a Cucumber::Ast::Table
  m = find_model(model)
  table.rows_hash.each do |key,value|
    m.tags[key] = value
  end
  m.save!
end

Given /^there are no pois$/ do
  Poi.delete_all
end