Tire.configure do
  logger Rails.root.join("log", "tire_#{Rails.env}.log"), :level => Rails.env.development? ? 'debug' : 'info'
end