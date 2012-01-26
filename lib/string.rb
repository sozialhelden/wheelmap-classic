class String
  def numeric?
    begin
      Float(self)
    rescue
      false # not numeric
    else
      true # numeric
    end
  end

  def boolean?
    !(self =~ (/^(true|false|yes|no|1|0)$/i)).nil?
  end

  def to_boolean
    return true if self == true || self =~ (/(true|t|yes|y|1)$/i)
    return false if self == false || self.nil? || self =~ (/(false|f|no|n|0)$/i)
    raise ArgumentError.new("invalid value for Boolean: \"#{self}\"")
  end
end