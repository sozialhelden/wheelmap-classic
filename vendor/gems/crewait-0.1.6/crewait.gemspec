# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{crewait}
  s.version = "0.1.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.2") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jonah Bloch-Johnson"]
  s.date = %q{2010-10-18}
  s.description = %q{Intuitive and fast bulk insertion in ActiveRecord}
  s.email = %q{me@jonah.org}
  s.extra_rdoc_files = ["README.rdoc", "lib/crewait.rb"]
  s.files = ["Manifest", "README.rdoc", "Rakefile", "crewait.gemspec", "lib/crewait.rb"]
  s.homepage = %q{http://github.com/theAlmanac/crewait}
  s.rdoc_options = ["--line-numbers", "--inline-source", "--title", "Crewait", "--main", "README.rdoc"]
  s.require_paths = ["lib"]
  s.rubyforge_project = %q{crewait}
  s.rubygems_version = %q{1.3.7}
  s.summary = %q{Intuitive and fast bulk insertion in ActiveRecord}

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
