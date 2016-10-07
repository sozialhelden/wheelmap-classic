Apipie.configure do |config|
  config.app_name                = "Wheelmap API"
  config.copyright = "&copy; #{Date.today.year} Sozialhelden e.V."
  config.api_base_url            = "/api"
  config.languages = ['en']
  config.default_locale = 'en'
  config.use_cache = Rails.env.production? || Rails.env.staging?
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/api/*.rb"
  config.validate = false
  config.app_info = <<-EOF
    =Wheelmap.org
    Wheelmap.org is an online map to search, find and mark wheelchair-accessible places.
    Developers can use our RESTful API to interact with wheelchair accessible place.
    == Setup
    Before using the Wheelmap API, please read over the Terms of Service and sign up for a user account including an API Key.

    == Authentication
    All requests to the Wheelmap API service require an api key which is passed with every request.
    == Introduction
    The Wheelmap API provides a simple RESTful interface with lightweight JSON-formatted responses to use many of wheelmap.org's website features, including nodes, categories to allow both read and write access. This document provides information to developers on how to integrate with the Wheelmap API.

    == API Basics
    ==== Entry Points
    The Wheelmap API has the following entry point:
    http://wheelmap.org/api
    It is a read-only entry point for public data. It uses the standard parameter api_key for authentication.
    ==== Authentication
    The Wheelmap API requires an api key that is provided during registration. The key identifies your application to the Wheelmap web service, and is used to track overall call usage. It's passed using the standard api_key parameter. Alternatively the api_key can be submitted via the 'X-API-KEY' HTTP header flag.
    ==== API Requests
    The Wheelmap API uses a RESTful calling style that works with standard HTTP calls. Any web programming language (PHP, Ruby, Perl, Python, Java, Objective C, C#...) should be able to make and receive HTTP networking calls; consult the documentation for your language of choice.
    ==== Request URLs
    In a RESTful API, each resource or collection of resources is identified by a unique URL, such as:
    http://wheelmap.org/api/nodes/:node_id
    URL paths contain the unique IDs of resources. These are identified by a leading colon, as with :node_id. Before making a call, you must substitute a valid ID value for these placeholders. ID parameters must appear in the URL and cannot be substituted for GET parameters.

    == HTTP Methods
    RESTful APIs use standard HTTP methods to denote actions against a resource:
    ==== GET
    Reads a resource. Returns HTTP status code 200 on success.
    ==== POST
    Creates a new resource. Returns HTTP status code 202 on success.
    ==== PUT
    Updates a resource. Returns HTTP status code 202 on success.

    Code 202 means: The request has been accepted for processing, but the processing has not been completed. The reason why POST and PUT method return the rather unknown status code 202 is, because the update/create operation is not processed immediately. The command will be put on a job queue. Chances are that something goes wrong while execution after the POST/PUT request has been finished.
    Because some toolkits lack support for PUT and DELETE (most notably JavaScript) you can use method overloading to fake an HTTP method. Use a POST call and append the standard method parameter:
        http://wheelmap.org/api/nodes/:node_id?_method=put

    == API Responses
    ===== JSON Data
    Data is returned using JSON, a lightweight serialization language that is compatible with many different languages. JSON is also syntactically correct JavaScript code, which means that it can be parsed with JavaScript's own eval() function.
    Standard Response Format
    Each API response is wrapped in a standard structure that holds the results of the API call, plus metadata about the request:

        {
          "conditions": {
            "format": "json"
          },
          "meta": {
            "item_count":2,
            "item_count_total":5930
          },
          "results": [
            { result object }
          ]
        }

    ===== JSONP Data
    The Data is returned using JSON, but the return value is wrapped in a JavaScript method call. The first argument to the method is the result of the API call, the second is the API Response Code. This makes it easy to check, if the call was successfull, or not. Use the callback param to pass the method name.

        callback({
          "conditions": {
            "format": "json"
          },
          "meta": {
            "item_count":2,
            "item_count_total":5930
          },
          "results": [
            { result object }
          ]
        }, 200)

    - conditions
      conditions echoes the parameters that were passed into the request. This could be filters, format, pagination and so on.
    - meta
      meta specifies meta information page and total number of pages, entries per page and so on.
    - results
      results is an array of objects. For consistency's sake, it is always an array, even if only one result is expected.


    == API Error Messages
    If the API responds with an HTTP status code with 400 or higher, there will be a descriptive error message. Please make sure your client can handle error codes and display this message to the client. The error messages a localized.

    EOF
end
