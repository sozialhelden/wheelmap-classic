RELEASE_INFO = (begin
                  YAML.load_file 'RELEASE_INFO'
                rescue
                  {}
                end)
