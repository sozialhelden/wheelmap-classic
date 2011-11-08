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
end