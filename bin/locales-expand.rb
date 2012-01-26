#!/usr/bin/env ruby
require 'pathname'
$KCODE = 'UTF8' unless RUBY_VERSION >= '1.9'
require 'ya2yaml'
require 'lib/string'

def expand(new_yaml, yaml, locale)
  puts "Expanding #{locale}"
  yaml[locale].keys.each do |k|
    append(new_yaml, k, yaml[locale][k])
  end
end

def append(new_yaml, key, val)
  tree = key.split(/\./)
  current = tree.shift
  if current.numeric?
    new_yaml.insert(current.to_i, val)
  elsif tree.size == 0
    if val.numeric?
      new_yaml[current] = val.to_i
    if val.boolean?
      new_yaml[current] = val.to_boolean
    elsif val.to_s == ''
      new_yaml[current] = nil
    else
      new_yaml[current] = val.to_s
    end
  else
    next_section = tree.join('.').numeric? ? Array.new : {}
    new_yaml[current] = next_section unless new_yaml.key?(current)
    append(new_yaml[current], tree.join('.'), val)
  end
end

file = Pathname.new(ARGV[0])
locale = file.to_s.match(/\/([a-z]{2}(?:\-[A-Z]{2})?)\//)[1] || raise(ArgumentError.new('Could not decipher locale from filename.'))
yaml = YAML.load_file(ARGV[0])
new_yaml = {}
expand(new_yaml, yaml, locale)

if matches = file.to_s.match(/wheelmap\.yml$/)
  new_file = Pathname.new("./config/locales/#{locale}.yml")
else
  new_file = Pathname.new("./config/locales/#{locale}/#{file.basename.to_s.gsub(/\.yaml$/, '.yml')}")
end

puts "writing to file #{new_file}"
new_file.open('w') do |f|
#  puts({locale => new_yaml}.ya2yaml)
  f.write({ locale => new_yaml }.ya2yaml(:syck_compatible => true).gsub(/\s*$/, ''))
end