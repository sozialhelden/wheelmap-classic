class OldOsm
  class Error < StandardError
    attr_reader :data

    def initialize(data)
      @data = data
      super
    end
  end
end