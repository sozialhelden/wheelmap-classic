Wheelmap.ApplicationRoute = Ember.Route.extend
  signedIn: false

  beforeModel: (transition)->
    signUrl = $.cookie('sign_url')

    if signUrl?
      transition.abort()

      $.cookie('sign_url', null)
      window.location.hash = signUrl

  events:
    authenticate: (transition)->
      self = @

      unless self.signedIn
        transition.abort()

        $.ajax('/users/signed_in').done (signedIn)->
          if signedIn
            self.signedIn = true
            transition.retry()
          else
            params = {}

            $.each transition.params, ->
              $.extend params, @

            $.cookie('sign_url', transition.router.recognizer.generate(transition.targetName, params))
            window.location = '/users/sign_in'