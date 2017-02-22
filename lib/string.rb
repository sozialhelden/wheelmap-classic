class String
  def numeric?
    Float(self)
  rescue
    false # not numeric
  else
    true # numeric
  end

  def boolean?
    !(self =~ /^(true|false|yes|no|1|0)$/i).nil?
  end

  def to_boolean
    return true if self == true || self =~ /(true|t|yes|y|1)$/i
    return false if self == false || nil? || self =~ /(false|f|no|n|0)$/i
    raise ArgumentError, "invalid value for Boolean: \"#{self}\""
  end
end
