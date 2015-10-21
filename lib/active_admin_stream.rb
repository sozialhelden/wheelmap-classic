require 'csv'

module ActiveAdmin
  module CSVStream

    def apply_pagination(chain)
      chain = super unless formats.include?(:csv)
      chain
    end

    def index
      index! do |format|
        format.csv { render_csv }
      end
    end

    private

    def render_csv
      set_csv_headers
      self.response_body = csv_lines
    end

    def set_csv_headers
      headers["Content-Type"] = "text/csv"
    end

    def csv_lines
      default = ActiveAdmin.application.csv_options
      options = default.merge active_admin_config.csv_builder.options
      columns = active_admin_config.csv_builder.columns

      Enumerator.new do |y|
        CSV.generate(options) do |csv|
          y << columns.map(&:name).to_csv
          collection.each do |resource|
            row = columns.map do |column|
              call_method_or_proc_on resource, column.data
            end.to_csv
            y << row
          end
        end
      end
    end

  end
end
