class Array
  # method nitems was removed in ruby 1.9, so we introduce it back.
  unless defined?(:nitems)
    define_method(:nitems) do
      count { |x| !x.nil? }
    end
  end
end
