require 'cgi'
require 'erb'

module ActionView
  module Helpers
    module TagHelper
      include ERB::Util

      BOOLEAN_ATTRIBUTES = Set.new(%w(disabled readonly multiple))

      def tag(name, options = nil, open = false, escape = true)
        open = true if %w(br link img meta input).include?(name.to_s)
        "<#{name}#{tag_options(options, escape) if options}#{open ? ">" : " />"}"
      end

      def content_tag(name, content_or_options_with_block = nil, options = nil, escape = true, &block)
        if block_given?
          options = content_or_options_with_block if content_or_options_with_block.is_a?(Hash)
          content = capture(&block)
          content_tag = content_tag_string(name, content, options, escape)
          block_is_within_action_view?(block) ? concat(content_tag, block.binding) : content_tag
        else
          content = content_or_options_with_block
          content_tag_string(name, content, options, escape)
        end
      end

      def cdata_section(content)
        "<![CDATA[#{content}]]>"
      end

      def escape_once(html)
        html.to_s.gsub(/["><]|&(?!([a-zA-Z]+|(#d+));)/) { |special| ERB::Util::HTML_ESCAPE[special] }
      end

      private
        def content_tag_string(name, content, options, escape = true)
          tag_options = tag_options(options, escape) if options
          "<#{name}#{tag_options}>#{content}</#{name}>"
        end

        def tag_options(options, escape = true)
          unless options.blank?
            attrs = []
            if escape
              options.each do |key, value|
                next unless value
                key = key.to_s
                value = BOOLEAN_ATTRIBUTES.include?(key) ? key : escape_once(value)
                value = value.downcase.gsub(/(.)[^a-z0-9$]+/, '\1-') if %w(id for class).include?(key)
                attrs << %(#{key}="#{value}")
              end
            else
              attrs = options.map { |key, value| %(#{key}="#{value}") }
            end
            " #{attrs.sort * ' '}" unless attrs.empty?
          end
        end

        def block_is_within_action_view?(block)
          eval("defined? _erbout", block.binding)
        end
    end
  end
end
