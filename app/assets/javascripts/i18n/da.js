I18n.translations || (I18n.translations = {});
I18n.translations["da"] = I18n.extend((I18n.translations["da"] || {}), {
  "actions": {
    "cancel": "Fortryd",
    "next": "Næste",
    "save": "Gem",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "Du har ikke rettigheder til at udføre denne handling."
    },
    "any": "Alle",
    "batch_actions": {
      "action_label": "%{title} Valgte",
      "button_label": "Batch Handlinger",
      "default_confirmation": "Er du sikker på du vil gøre dette?",
      "delete_confirmation": "Er du sikker på du vil slette disse %{plural_model}?",
      "labels": {
        "destroy": "Slet"
      },
      "link": "Opret en",
      "selection_toggle_explanation": "(Skift Selection)",
      "succesfully_destroyed": {
        "one": "Vellykket ødelagt 1 %{model}",
        "other": "Vellykket ødelagt %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Der er ingen %{resource_name} endnu.",
      "link": "Opret"
    },
    "cancel": "Fortryd",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Tilføj Kommentar",
      "author": "forfatter",
      "author_missing": "Anonymous",
      "author_type": "forfatter type",
      "body": "krop",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Kommentar blev ikke gemt, tekst var tom."
      },
      "no_comments_yet": "Ingen kommentarer endnu.",
      "resource": "Resource",
      "resource_type": "resource type",
      "title": "Kommentar",
      "title_content": "Kommentarer (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Kontrolpanel",
    "dashboard_welcome": {
      "call_to_action": "Rediger 'app/admin/dashboard.rb' for at tilføje nye elementer til oversigtssiden.",
      "welcome": "Velkommen til Active Admin. Dette er standardoversigtssiden."
    },
    "delete": "Slet",
    "delete_confirmation": "Er du sikker på at du ønsker at slette?",
    "delete_model": "Slet %{model}",
    "details": "%{model} detaljer",
    "devise": {
      "change_password": {
        "submit": "Skift min adgangskode",
        "title": "Skift din adgangskode"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Glemt din adgangskode?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Log ind",
        "sign_in_with_omniauth_provider": "Log ind med %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Husk mig",
        "submit": "Login",
        "title": "Login"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Nulstille min adgangskode",
        "title": "Glemt din adgangskode?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Send oplåsnings instruktioner igen",
        "title": "Send oplåsnings instruktioner igen"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Download:",
    "dropdown_actions": {
      "button_label": "Handlinger"
    },
    "edit": "Rediger",
    "edit_model": "Rediger %{model}",
    "empty": "Tom",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Ryd filtre",
        "filter": "Filtrer"
      },
      "predicates": {
        "contains": "Indeholder",
        "ends_with": "Slutter med",
        "equals": "lig",
        "greater_than": "større end",
        "less_than": "mindre end",
        "starts_with": "Begynder med"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Slet",
    "has_many_new": "Tilføj ny(t) %{model}",
    "has_many_remove": "Fjern",
    "index_list": {
      "block": "Liste",
      "blog": "Blog",
      "grid": "Gitter",
      "table": "Tabel"
    },
    "less_than": "Less Than",
    "logout": "Log ud",
    "main_content": "Implementer venligst %{model}#main_content for at vise noget indhold.",
    "new_model": "Ny(t) %{model}",
    "next": "Næste",
    "pagination": {
      "empty": "Ingen %{model} fundet",
      "entry": {
        "one": "post",
        "other": "poster"
      },
      "multiple": "Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> af <b>%{total}</b> i alt",
      "multiple_without_total": "Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Viser <b>1</b> %{model}",
      "one_page": "Viser <b>alle %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Forrige",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtre",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nej",
      "yes": "Ja"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Vis"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adresse",
        "address_city": "By",
        "address_housenumber": "Husnummer",
        "address_postcode": "Postnummer",
        "address_street": "Vejnavn",
        "name": "Navn",
        "note": "Note",
        "phone": "Telefon",
        "type": "Type",
        "website": "Hjemmeside"
      },
      "user": {
        "first_name": "Fornavn",
        "last_name": "Efternavn",
        "privacy_policy": "Privatlivs politik",
        "terms": "Betingelser"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "skal accepteres",
        "blank": "skal udfyldes",
        "confirmation": "stemmer ikke overens med bekræftelse",
        "empty": "må ikke udelades",
        "equal_to": "skal være lig med %{count}",
        "even": "skal være lige",
        "exclusion": "er reserveret",
        "greater_than": "skal være større end %{count}",
        "greater_than_or_equal_to": "skal være større end eller lig med %{count}",
        "inclusion": "er ikke i listen",
        "invalid": "er ikke gyldig",
        "less_than": "skal være mindre end %{count}",
        "less_than_or_equal_to": "skal være mindre end eller lig med %{count}",
        "not_a_number": "er ikke et tal",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "skal være ulige",
        "record_invalid": "Validering fejlede: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "er allerede brugt",
        "too_long": "er for langt (maksimum %{count} tegn)",
        "too_short": "er for kort (minimum %{count} tegn)",
        "wrong_length": "har forkert længde (skulle være %{count} tegn)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "Dette felt kan ikke være blankt når der er adgangskode"
            },
            "privacy_policy": {
              "accepted": "skal accepteres"
            },
            "terms": {
              "accepted": "skal accepteres"
            }
          }
        },
        "user_session": {
          "email": "E-mail-adresse",
          "password": "Adgangskode",
          "remember_me": "Forbliv logget inde"
        }
      },
      "template": {
        "body": "Der var problemer med følgende felter:",
        "header": {
          "one": "En fejl forhindrede %{model} i at blive gemt",
          "other": "%{count} fejl forhindrede %{model} i at blive gemt"
        }
      }
    },
    "models": {
      "user": "Bruger"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "Du er allerede logget på ..."
    },
    "require_user": {
      "notice": "Du skal være logget på for at se denne side."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Tilføj et nyt sted",
      "edit": "Ret sted"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "luk",
    "skip": "Spring over"
  },
  "date": {
    "abbr_day_names": [
      "søn",
      "man",
      "tir",
      "ons",
      "tor",
      "fre",
      "lør"
    ],
    "abbr_month_names": [
      null,
      "jan",
      "feb",
      "mar",
      "apr",
      "maj",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec"
    ],
    "day_names": [
      "søndag",
      "mandag",
      "tirsdag",
      "onsdag",
      "torsdag",
      "fredag",
      "lørdag"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d. %B %Y",
      "short": "%e. %b %Y"
    },
    "month_names": [
      null,
      "januar",
      "februar",
      "marts",
      "april",
      "maj",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "december"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "cirka en time",
        "other": "cirka %{count} timer"
      },
      "about_x_months": {
        "one": "cirka en måned",
        "other": "cirka %{count} måneder"
      },
      "about_x_years": {
        "one": "cirka et år",
        "other": "cirka %{count} år"
      },
      "almost_x_years": {
        "one": "næsten et år",
        "other": "næsten %{count} år"
      },
      "half_a_minute": "et halvt minut",
      "less_than_x_minutes": {
        "one": "mindre end et minut",
        "other": "mindre end %{count} minutter"
      },
      "less_than_x_seconds": {
        "one": "mindre end et sekund",
        "other": "mindre end %{count} sekunder"
      },
      "over_x_years": {
        "one": "mere end et år",
        "other": "mere end %{count} år"
      },
      "x_days": {
        "one": "en dag",
        "other": "%{count} dage"
      },
      "x_minutes": {
        "one": "et minut",
        "other": "%{count} minutter"
      },
      "x_months": {
        "one": "en måned",
        "other": "%{count} måneder"
      },
      "x_seconds": {
        "one": "et sekund",
        "other": "%{count} sekunder"
      }
    },
    "prompts": {
      "day": "Dag",
      "hour": "Time",
      "minute": "Minut",
      "month": "Måned",
      "second": "Sekund",
      "year": "År"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Din konto er nu aktiveret. Og du er nu logget ind.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "I løbet af få minutter vil du modtage en e-mail med instrukser om aktivering af din konto.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Er du sikker?",
      "headline": "Delete account",
      "link": "Slet nu"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Nuværende adgangskode <i>(vi skal bruge dette for at bekræfte dine ændringer)</i>",
          "email": "E-mail",
          "password": "Adgangskode <i>(lad dette felt være tomt, hvis du ikke ønsker at ændre dette)</i>",
          "password_confirmation": "Gentag adgangskode"
        },
        "submit": "Gem ændringer"
      },
      "headline": "Ret konto"
    },
    "failure": {
      "already_authenticated": "Du er allerede logget på.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "E-mail eller adgangskode er ikke gyldig.",
      "invalid_token": "Ugyldig token til autorisering.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Din konto er låst",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Du skal logge ind eller oprette en konto for at kunne fortsætte",
      "unconfirmed": "Du skal bekræfte din konto for at kunne fortsætte."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Bekræftigelsesinstrukser"
      },
      "reset_password_instructions": {
        "subject": "Nulstil adgangskodeinstrukser"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Skal udfyldes",
    "omniauth_callbacks": {
      "failure": "Kunne ikke autorisere dig fra %{kind} på grund af \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Succesfuld autorisation fra  %{kind} kontoen."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Nulstil adgangskode"
      },
      "headline": "Glemt adgangskode?"
    },
    "password_reset": {
      "email": {
        "comment": "I tilfælde af du ikke har bestilt en nulstilling af adgangskoden, så se bort fra denne e-mail.<br/>Din adgangskode vil ikke blive ændret før du klikker på linket ovenfor og indstiller en ny adgangskode.",
        "headline": "Velkommen %{email}",
        "link": "Ændre min adgangskode",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Ny adgangskode",
          "password_confirmation": "Gentag adgangskode"
        },
        "submit": "Nulstil adgangskode"
      },
      "headline": "Nulstil adgangskode"
    },
    "passwords": {
      "link": "Glemt adgangskode?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Din  adgangskode er nu ændret, og du er nu logget ind",
      "updated_not_active": "Din adgangskode blev ændret med succes"
    },
    "registrations": {
      "destroyed": "Farvel. Din konto er nu lukket. Vi håber at se dig snart igen.",
      "inactive_signed_up": "Du har oprettet en konto nu. Men vi kunne ikke logge dig ind p.g.a din konto er  \"%{reason}\"",
      "link": "Opret konto",
      "reasons": {
        "inactive": "inaktiv",
        "locked": "låst",
        "unconfirmed": "ubekræftet"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Din profil er opdateret."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Ugyldig e-mail eller adgangskode.",
      "invalid_token": "Ugyldig autorisation token",
      "link": "Login",
      "locked": "Din konto er låst",
      "new": {
        "no_osm_account": "Ingen OpenStreetMap konto?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Mange tak for din støtte!",
        "sign_in_with": "Log ind med %{kind}",
        "sign_up_with_osm": "Registrer nu.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Du er nu logget ind",
      "signed_out": "Du er nu logget ud",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Du skal logge ind eller oprette en konto før du kan fortsætte",
      "unconfirmed": "Du skal have bekræftet din konto før du kan fortsætte"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Adgangskode",
          "remember_me": "Forbliv logget ind?"
        },
        "submit": "Login"
      },
      "headline": "Login"
    },
    "sign_out": {
      "headline": "Log af"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Bekræft min konto",
        "please_confirm": "Du kan bekræfte din konto gennem nedenstående link:",
        "welcome": "Velkommen %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Adgangskode",
          "password_confirmation": "Gentag adgangskode",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Opret konto"
      },
      "headline": "Opret konto"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Din konto er genåbnet og du er nu logget ind."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "var allerede bekræftet, prøv at logge ind",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "stemmer ikke overens med bekræftelse",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "skal være lig med %{count}",
      "even": "must be an even number",
      "exclusion": "er reserveret",
      "expired": "udløbet, bed venligst om en ny",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "skal være større end %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "er ikke en gyldig værdi",
      "invalid": "er ikke gyldig",
      "less_than": "skal være mindre end %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "er ikke et tal",
      "not_an_integer": "er ikke et heltal",
      "not_found": "ikke fundet",
      "not_locked": "var ikke låst",
      "not_saved": {
        "one": "1 fejl gjorde at denne %{resource} ikke kunne gemmes being:",
        "other": "%{count} fejl gjorde at denne %{resource} ikke kunne gemmes:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "er allerede blevet taget",
      "too_long": "er for langt (maksimum %{count} tegn)",
      "too_short": "er for kort (minimum %{count} tegn)",
      "wrong_length": "har forkert længde (skulle være %{count} tegn)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Websidens adresse er ikke gyldig."
        }
      }
    },
    "template": {
      "body": "Der var problemer med følgende felter:",
      "header": {
        "one": "1 fejl gjorde at denne %{model} ikke kunne gemmes",
        "other": "%{count} fejl gjorde at denne %{model} ikke kunne gemmes"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Du kan altid ændre markeringen af et sted selv. Vælg højre markering og \"Gem\" færdig!",
      "1": "Når du er logget på som bruger kan du tilføje/rette i alle detaljerne for et sted. Klik på \"Redigerer\" og ret eller tilføj information i feltet.",
      "2": "Du kan tilføje yderligere information. (fx \"Det sted har en mobil rampe\") i kommentarfeltet. Klik på \"Rediger\" og \"Tilføj kommentar\"."
    },
    "headline": "Er der et problem med dette sted?",
    "questions": {
      "0": "Denne markering er forkert.",
      "1": "Detaljerne for dette sted er forkerte eller mangler.",
      "2": "Jeg har mere information om dette sted."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} blev succesfuldt lavet."
      },
      "destroy": {
        "alert": "%{resource_name} kunne ikke slettes.",
        "notice": "%{resource_name} blev succesfuldt slettet."
      },
      "update": {
        "notice": "%{resource_name}  blev succesfuldt opdateret."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Billedet blev slettet"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "kørestolstilgængeligt",
    "show_limited_accessible_places": "Delvist kørestolstilgængelig",
    "show_places_without_status": "Ukendt status",
    "show_unaccessible_places": "Ikke kørestolstilgængeligt"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Flyt markøren på kortet til den korrekte position",
      "osm_username": "Ikke medlem endnu?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Opret en Openstreetmap konto nu</a>",
      "password": "(efterlad feltet tomt, hvis du ikke ønsker at ændre dette)",
      "phone": "For example: +49 30 12345678",
      "website": "For eksempel: http://www.example.com"
    },
    "labels": {
      "category": "Kategori:",
      "centralkey": "Centralnøgle:",
      "city": "By:",
      "create": "Create a place",
      "email": "E-mail",
      "finish": "Færdig",
      "housenumber": "Nr.",
      "lat": "Breddegrad",
      "lon": "Længdegrad",
      "name": "Navn:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Adgangskode",
      "password_confirmation": "Gentag adgangskode",
      "phone": "Telefon:",
      "postcode": "Postnummer:",
      "privacy_policy": "Jeg accepterer paragraf 1 og 2 vedr. data fortrolighedsaftale.",
      "reset": "Nulstil",
      "save": "Gem",
      "street": "Vej:",
      "terms": "Jeg accepterer disse betingelser for brug.",
      "type": "Type:",
      "website": "Hjemmeside:",
      "wheelchair": " Kørestolstilgængeligt?",
      "wheelchair_description": "Tilgængeligheds kommentar:",
      "wheelchair_toilet": "Kørestolstilgængeligt toilet:"
    },
    "titles": {
      "basic": "Basisinformation",
      "optional": "Mere information <span class=\"addition\">(alle felter er valgfrit)</span>"
    }
  },
  "global": {
    "form_validation_error": "Bemærk fejllisten nedenfor"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Hjemmeside",
      "keywords": "kørestolstilgængelige steder find søgemarkering",
      "search": "Søg",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Om Wheelmap",
      "blog": "Blog",
      "choose_language": "Vælg sprog",
      "contact": "Kontakt",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "Hvordan tilføjer jeg steder?",
      "imprint": "Om",
      "logged_in_as": "Logget ind som:",
      "login": "Login",
      "logout": "Log ud",
      "map": "Kort",
      "newsletter": "Nyhedsbrev",
      "press": "Tryk på",
      "profile": "Profil",
      "projects": "Projekter",
      "suggestions": "Forslag",
      "what_is_barrier_free": "Hvad betyder \"kørestolstilgængeligt\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Tilføj endnu et sted",
      "find": "Find",
      "placeholder": "Søg efter et sted",
      "title_add_place": "Tilføj et nyt sted på denne position nu!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "kategorier"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
      },
      "one_page": {
        "display_entries": {
          "one": "Displaying <b>%{count}</b> %{entry_name}",
          "other": "Displaying <b>all %{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Vælg..."
    },
    "submit": {
      "create": "Opret %{model}",
      "submit": "Gem %{model}",
      "update": "Opdater %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Vælg kategori",
        "deselect_all": "Fravælg alle",
        "select_all": "Vælg alle",
        "wheelchair": "Kørestolstilgængeligt?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorer",
          "upgrade": "Opdaterer browser"
        },
        "warning": {
          "headline": "Vi undskylder meget!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Tilføj et nyt sted"
        }
      },
      "overlay": {
        "button": "Okay, lad os komme igang!",
        "categories": "Filtrer steder efter kategorier",
        "filter": "Filtrer steder efter kørestolstilgængelig",
        "headline": "Markerer og find kørestolstilgængelige steder med Wheelmap.org - verden over og helt gratis. Det er nemt:",
        "lookup": "Søg efter et bestemt sted",
        "secondary_headline": "Vores trafiklys system til at markerer kørestolstilgængelighed for offentlige steder:"
      },
      "popup": {
        "form": {
          "limited": "Delvist kørestolstilgængelig",
          "no": "Ikke kørestolstilgængeligt",
          "save": "Gem",
          "unknown": "Ukendt status",
          "yes": "Kørestolstilgængeligt"
        },
        "help": "Kørestolstilgængeligt? (Hjælp)",
        "more": "mere ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Hvordan?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "Alle %{type} i %{city} med ukendt kørestolstilgængeligs status (%{count})"
        },
        "yes": {
          "headline": "Alle kørestolstilgængelige steder %{type} i %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Et projekt af Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Vælg en kategori"
    },
    "node": {
      "info_edit_position": "Denne lokalitet vil blive vist på Wheelmap som vist ovenfor. Hvis markører ikke er korrekt så kan du  <a href=\"%{url}\">ændre positionen på OpenStreetMap.</a>",
      "mail": {
        "body": "(Skriv kun på engelsk eller tysk.)\n\nHej Sozialhelden,\nDer er noget galt med lokalitet: %{url\n\nProblemet er:",
        "subject": "[Wheelmap] Problem med %{headline}"
      }
    },
    "node_type": {
      "prompt": "Vælg en type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Hjemmeside:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ups, dit input var enten ukorrekt eller ufuldstændigt",
        "successfull": "Mange tak, din tilføjelse blev gemt og vil snart være online."
      }
    },
    "edit": {
      "header": {
        "title": "Ret sted:  %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Fortryd"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Undskyld, men autorisationen fejlede",
      "not_available": "Undskylder meget, men denne side er midlertidig ikke tilgængelig.",
      "not_existent": "Undskylder meget, dette sted findes ikke mere.",
      "not_found": "Undskylder, men siden blev ikke fundet.",
      "param_missing": "Tilføj venligst en søgeterm"
    },
    "flash": {
      "authorize_wheelmap": "Du behøver en OpenStreetMap konto for at rette i data"
    },
    "new": {
      "form": {
        "legend": "Lokalitet for stedet",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Adresse",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Kontakt",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Nyt sted | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Fortryd"
      }
    },
    "node": {
      "link": {
        "claim": "Arbejder du her?",
        "edit_node": "Ret sted",
        "report_bug": "Fejlrapporterer et problem"
      }
    },
    "node_data": {
      "address": "Adresse:",
      "contact_details": "Kontaktoplysninger:"
    },
    "node_edit": {
      "details": "Detaljer",
      "edit": "Ret"
    },
    "node_map": {
      "map": "Kort:"
    },
    "node_note": {
      "comment": "Kommentar:"
    },
    "node_photos": {
      "add": "Tilføj",
      "photos_of_this_place": "Fotografier af dette sted:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Lignende steder: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Kørestolstilgængeligt toilet:",
      "premium": "%{name}  siger: dette sted er",
      "wheelchair_accessibility": "Kørestolstilgængeligt:"
    },
    "node_streetview": {
      "streetview": "Gadevisning:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find ud af om dette sted er kørestoltilgængeligt på Wheelmap.org. Eller tilføj mere information eller et foto for dette sted.",
          "title": "Dette sted er på Wheelmap.org: %{name}"
        },
        "title": "Sted: %{node} | wheelmap.org"
      },
      "link": {
        "back": "tilbage",
        "large_map": "Forstør",
        "listing": "Alle steder af  kategoren '%{type}' i %{city}",
        "upload": "Opload billede"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Ups, dit input var ikke korrekt eller ufuldstændigt",
        "successfull": "Mange tak, din ændring blev gemt succesfuldt og vil være online snart."
      }
    },
    "update_wheelchair": {
      "successfull": "Status for \"%{name}\" er blevet ændret til \"%{status} kørestolstilgængeligt\" og vil snart kunne ses online."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u %n",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "DKK"
      }
    },
    "format": {
      "delimiter": ".",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Milliard",
          "million": "Million",
          "quadrillion": "Billiard",
          "thousand": "Tusind",
          "trillion": "Billion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "eller",
  "place": {
    "one": "%{count} sted",
    "other": "%{count} steder"
  },
  "poi": {
    "category": {
      "accommodation": "Overnatning",
      "education": "Uddannelse",
      "food": "Mad",
      "government": "Myndigheder",
      "health": "Sundhed",
      "leisure": "Fritid",
      "misc": "Diverse",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Shopping",
      "sport": "Sport",
      "tourism": "Turisme",
      "unknown": "Ukendt"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandhotel",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Campingplads",
        "caravan_site": "Caravancamping",
        "chalet": "Chalet",
        "dormitory": "Kollegium",
        "guest_house": "Gæstehus",
        "hostel": "Vandrehjem",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Gymnasium",
        "driving_school": "Køreskole",
        "kindergarten": "Børnehave",
        "library": "Bibliotek",
        "museum": "Museum",
        "school": "Skole",
        "university": "Universitet"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Ølhave",
        "cafe": "Cafe",
        "drinking_water": "Drikkevand",
        "fast_food": "Fast Food",
        "ice_cream": "Isbutik",
        "pub": "Værtshus",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Retsbygning",
        "embassy": "Ambassade",
        "government": "Statslig organisation",
        "police": "Politi",
        "public_building": "Offentlig bygning",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Tandlæge",
        "doctors": "Doctor",
        "hearing_aids": "Høreapparatforhandler",
        "hospital": "Hospital",
        "medical_supply": "Håndkøbsmedicin",
        "pharmacy": " Apotek",
        "social_facility": "Plejehjem",
        "veterinary": "Dyrlæge"
      },
      "leisure": {
        "arena": "Sportsarena",
        "brothel": "Bordel",
        "casino": "Kasino",
        "cinema": "Biograf",
        "community_centre": "Community centre",
        "gallery": "Galleri",
        "nightclub": "Natklub",
        "playground": "Legeplads",
        "sauna": "Sauna",
        "stripclub": "Stripclub",
        "theatre": "Teater",
        "zoo": "Zoo"
      },
      "misc": {
        "company": "Firma (kontor)",
        "estate_agent": "Ejendomsmægler",
        "insurance": "Forsikringsselskab",
        "lawyer": "Advokat",
        "place_of_worship": "Religiøs tilbedelsessted",
        "toilets": "Toiletter"
      },
      "money_post": {
        "atm": "Pengeautomat",
        "bank": "Bank",
        "bureau_de_change": "Valutaveksling",
        "post_box": "Postkasse",
        "post_office": "Postkontor"
      },
      "public_transfer": {
        "aerodrome": "Lufthavn",
        "bicycle_parking": "Cykelparkering",
        "bicycle_rental": "Cykeludlejning",
        "boatyard": "Boat yard",
        "bus_station": "Busstation",
        "bus_stop": "Busstop",
        "cable_car": "Svævebane",
        "car_rental": "Biludlejning",
        "car_sharing": "Delebil",
        "chair_lift": "Stolelift",
        "ferry": "Færge",
        "ferry_terminal": "Færgeterminal",
        "fuel": "Tankstation",
        "halt": "Trinbræt",
        "light_rail": "Letbane",
        "parking": "Parkering",
        "parking_aisle": "Parkeringsvej",
        "platform": "Platform",
        "station": "Undergrundsbane",
        "subway_entrance": "Undergrundsbane indgang",
        "terminal": "Lufthavnsterminal",
        "tram_stop": "Sporvognsstop"
      },
      "shopping": {
        "alcohol": "Vinhandler",
        "bakery": "Bager",
        "beauty": "Skønhedssalon",
        "beverages": "Drikkevarer",
        "bicycle": "Cykelforhandler",
        "books": "Boghandler",
        "butcher": "Slagter",
        "car_repair": "Bilværksted",
        "car_shop": "Biludstyrsbutik",
        "chemist": "Chemist / Drugstore",
        "clothes": "Tøjbutik",
        "computer": "Computerbutik",
        "confectionery": "Slikbutik",
        "convenience": "Minimarked",
        "deli": "Deli",
        "department_store": "Stormagasin",
        "doityourself": "Byggemarked",
        "dry_cleaning": "Tøjenseri",
        "electronics": "Elektronikbutik",
        "fabric": "Stofbutik",
        "farm_shop": "Gårdbutik",
        "florist": "Blomsterhandler",
        "furniture": "Møbelhandler",
        "garden_centre": "Garden centre",
        "gift": "Gavebutik",
        "hairdresser": "Frisør",
        "hardware": "Værktøjsbutik",
        "jewelry": "Smykkeforretning",
        "kiosk": "Kiosk",
        "laundry": "Vaskeri",
        "mall": "Indkøbscenter",
        "optician": "Optiker",
        "organic": "Økologisk butik",
        "outdoor": "Friluftudstyrsbutik",
        "pet": "Dyreforhandler",
        "photo": "Foto",
        "second_hand": "Genbrugsbutik",
        "shoes": "Skobutik",
        "sports": "Sportsforretninger",
        "stationery": "Papirartikler",
        "supermarket": "Supermarked",
        "toys": "Legetøj",
        "travel_agency": "Rejsebureau",
        "video": "Videoudlejning"
      },
      "sport": {
        "pitch": "Sportsplads",
        "sports_centre": "Sportscenter",
        "stadium": "Stadion",
        "swimming": "Svømming",
        "swimming_pool": "Svømmepool"
      },
      "tourism": {
        "archaeological_site": "Arkæologisk sted",
        "arts_centre": "Kunstcenter",
        "artwork": "Kunstværk",
        "attraction": "Attraktion",
        "battlefield": "Slagmark",
        "beach": "Strand",
        "beacon": "Fyrtårn",
        "castle": "Slot",
        "cave_entrance": "Huleindgang",
        "information": "Turistinformation",
        "memorial": "Mindesmærke",
        "theme_park": "Forlystelsespark",
        "tower": "Tårn",
        "viewpoint": "Udsigtspunkt"
      },
      "unknown": {
        "unknown": "Ukendt"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: forbundet",
          "grant": "Forbind nu",
          "not_connected": "Status: ikke forbundet",
          "revoke": "Afbryd"
        }
      },
      "headline": "Ret din profil"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Vi beklager meget, men vi kan ikke finde et sted ved navn  \"%{query}\".",
        "hint": {
          "example": "<strong>Eksempel</strong> London, United Kingdom",
          "info": "Vores søgeservice virker kun med navn eller adresseoplysninger. Søg kun efter navnet på et sted eller adressen, fx gadenavn og/eller byen. Søgning efter typen af stederne fx restaurant eller biograf vil ikke virke!",
          "work_in_progress": "Vi arbejder hårdt på at gøre søgninger efter steder lettere og mere intuitivt."
        },
        "try_this": {
          "address": "Indsæt flere <strong>adresseoplysninger</strong>.",
          "intro": "Prøv dette:",
          "spell_check": "Tjek <strong>stavningen</strong> af dit søgeord."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultat:",
          "other": "%{count} resultater:"
        }
      },
      "search": {
        "for": "Søger efter \"%{q}\"",
        "not_found": "Ingen steder kunne findes!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Vores søgeservice var midlertidigt nede.",
      "repeat_search": "Prøv søgningen igen"
    }
  },
  "splash": {
    "countline": "%{count} steder er allerede blevet markeret.",
    "headline": "Alle kan tilføje kørestolstilgængelige steder!",
    "start": "Start",
    "step1": "Klik på et sted du kender",
    "step2": "Markerer den og klik gem",
    "step3": "Det var det hele! Ingen registering er nødvendig",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistik",
  "support": {
    "array": {
      "last_word_connector": " og ",
      "sentence_connector": "og",
      "two_words_connector": " og ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Vælg"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%e. %B %Y, %H:%M",
      "long": "%A, %e. %B %Y, %H:%M",
      "short": "%e. %b %Y, %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Ingen kørestolstilgængeligt toilet",
    "unknown": "Toilet status ukendt",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Kørestolstilgængeligt toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Din konto er nu aktiveret!"
      },
      "error": {
        "notice": "E-mail og adgangskode er ikke korrekte."
      },
      "notice": "Du er nu inde!"
    },
    "destroy": {
      "notice": "Farvel, kom snart igen!"
    },
    "new": {
      "email": "Email address",
      "login": "Login",
      "login_with_twitter": "Login med Twitter",
      "password": "Adgangskode",
      "remember_me": "Forbliv logget ind"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Hvordan kan vi komme i kontakt med dig? Du kan altid ændre dette her senere i din profil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Dine oploadede billeder"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Din brugerkonto information"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Ja tak, hold mig informeret om Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Nyhedsbrev"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Fotos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hej derude",
          "personalized": "Hej %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploadet %{count} billeder",
            "other": "uploadet %{count} billeder"
          },
          "pois_added": {
            "one": "tilføjet %{count}  steder",
            "other": "tilføjet %{count}  steder"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "markeret %{count} steder",
            "other": "markeret %{count} steder"
          },
          "text": "Du har"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overblik"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "Indstillinger"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Next &rsaquo;",
      "previous": "&lsaquo; Prev",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Delvist kørestolstilgængelig",
    "no": "Ikke kørestolstilgængeligt",
    "unknown": "Ukendt status",
    "yes": "Kørestolstilgængeligt"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Et projekt fra",
      "based_on": "Baseret på",
      "become_a_supporter": "Bliv en støtter",
      "main_supporter": "Hovedstøtter"
    },
    "itunes": {
      "alt": "AppStore logo",
      "title": "Download iPhone App!"
    },
    "logo": {
      "alt": "Wheelmap logo - find kørestolstilgængelige steder",
      "title": "Wheelmap - find kørestolstilgængelige steder"
    },
    "what_is": {
      "fully_accessible": "Indgang uden trin, alle lokaler uden trin.",
      "limited_accessible": "Indgangen har et trin med max. højde 7cm (3 in), de fleste værelser er uden trin.",
      "not_accessible": "Indgangen har et trin eller flere trin, lokaler er ikke tilgængelige.",
      "unknown_accessible": "Hjælp ved at markere steder!"
    }
  },
  "will_paginate": {
    "next_label": "Næste &#8594;",
    "page_entries_info": {
      "multi_page": "Viser %{model} %{from} - %{to} af  %{count} ialt",
      "multi_page_html": "Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> af <b>%{count}</b> i alt",
      "single_page": {
        "one": "Viser 1 %{model}",
        "other": "Viser alle %{count} %{model}",
        "zero": "Ingen %{model} fundet"
      },
      "single_page_html": {
        "one": "Viser <b>1</b> %{model}",
        "other": "Viser <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Ingen %{model} fundet"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Forrige"
  }
});
