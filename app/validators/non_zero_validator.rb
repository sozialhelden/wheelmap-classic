class NonZeroValidator < ActiveModel::EachValidator
  def validate_each(object, attribute, value)
    if value.zero?
      object.errors[attribute] << (options[:message] || I18n.t('activerecord.errors.messages.not_equal_to', count: 0.0))
    end
  end
end
