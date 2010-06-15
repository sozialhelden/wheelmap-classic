# gem 'activesupport', '2.3.5'

begin
  require 'active_support/core_ext/object/blank' # newer versions of active_support (>= 3.0)
rescue LoadError => e
  require 'active_support/all' # support older versions of active_support (<= 2.3.5)
end
require 'forwardable'

require 'validatable/object_extension'
require 'validatable/errors'
require 'validatable/validatable_class_methods'
require 'validatable/macros'
require 'validatable/validatable_instance_methods'
require 'validatable/included_validation'
require 'validatable/child_validation'
require 'validatable/understandable'
require 'validatable/requireable'
require 'validatable/validations/validation_base'
require 'validatable/validations/validates_format_of'
require 'validatable/validations/validates_presence_of'
require 'validatable/validations/validates_acceptance_of'
require 'validatable/validations/validates_confirmation_of'
require 'validatable/validations/validates_length_of'
require 'validatable/validations/validates_true_for'
require 'validatable/validations/validates_numericality_of'
require 'validatable/validations/validates_exclusion_of'
require 'validatable/validations/validates_inclusion_of'
require 'validatable/validations/validates_each'
require 'validatable/validations/validates_associated'

module Validatable
  Version = '1.8.4'
end