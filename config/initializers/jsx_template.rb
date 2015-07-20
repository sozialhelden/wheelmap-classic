module JSX
  def self.transformer
    # lazily loaded during first request and reloaded every time when in dev or test
    if @transformer.nil? || !::Rails.env.production?
      @transformer = Transformer.new
    end
    @transformer
  end

  def self.transform(code)
    transformer.transform(code)
  end

  class Transformer
    DEFAULT_ASSET_PATH =

    def initialize()
      # If execjs uses therubyracer, there is no 'global'. Make sure
      # we have it so JSX script can work properly.
      js_code = 'var global = global || this;' + jsx_transform_code
      @context = ExecJS.compile(js_code)
    end


    def transform(code)
      result = @context.call('JSXTransformer.transform', code)
      result["code"]
    end

    def jsx_transform_code
      # search for transformer file using sprockets - allows user to override
      # this file in his own application
      ::Rails.application.assets['react/JSXTransformer.js'].to_s
    end
  end

  class Template < Tilt::Template
    self.default_mime_type = 'application/javascript'

    def prepare
    end

    def evaluate(scope, locals, &block)
      @output ||= JSX::transform(data)
    end
  end
end

Rails.application.assets.register_engine '.jsx', JSX::Template