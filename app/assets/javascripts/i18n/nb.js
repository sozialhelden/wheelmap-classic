I18n.translations || (I18n.translations = {});
I18n.translations["nb"] = I18n.extend((I18n.translations["nb"] || {}), {
  "actions": {
    "cancel": "Avbryt",
    "next": "Next",
    "save": "Lagre",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "Du er ikke autorisert til å utføre denne handlingen."
    },
    "any": "Alle",
    "batch_actions": {
      "action_label": "%{title} valgt",
      "button_label": "Gruppehandlinger",
      "default_confirmation": "Are you sure you want to do this?",
      "delete_confirmation": "Er du sikker på at du vil slette disse %{plural_model}? Dette kan ikke reverseres.",
      "labels": {
        "destroy": "Slett"
      },
      "link": "Opprett en",
      "selection_toggle_explanation": "(Toggle Selection)",
      "succesfully_destroyed": {
        "one": "Slettet én %{model}",
        "other": "Slettet %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Her er det ingen %{resource_name} enda.",
      "link": "Opprett en"
    },
    "cancel": "Avbryt",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Add Comment",
      "author": "Author",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Body",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Kommentar ble ikke lagret, teksten var tom."
      },
      "no_comments_yet": "No comments yet.",
      "resource": "Resource",
      "resource_type": "Resource Type",
      "title": "Comment",
      "title_content": "Kommentarer (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Oversikt",
    "dashboard_welcome": {
      "call_to_action": "Rediger 'app/admin/dashboard.rb' for å legge til elementer i oversikten.",
      "welcome": "Velkommen til Active Admin. Dette er standardoversiktssiden."
    },
    "delete": "Slett",
    "delete_confirmation": "Er du sikker på at du vil slette denne?",
    "delete_model": "Slett %{model}",
    "details": "%{model} Detaljer",
    "devise": {
      "change_password": {
        "submit": "Endre mitt passord",
        "title": "Endre passordet"
      },
      "email": {
        "title": "E-post"
      },
      "links": {
        "forgot_your_password": "Glemt passord?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Logg inn",
        "sign_in_with_omniauth_provider": "Logg på med %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Husk meg",
        "submit": "Logg inn",
        "title": "Logg inn"
      },
      "password": {
        "title": "Passord"
      },
      "resend_confirmation_instructions": {
        "submit": "Send bekreftelsesinformasjon på nytt",
        "title": "Send bekreftelsesinformasjon på nytt"
      },
      "reset_password": {
        "submit": "Tilbakestille passordet mitt",
        "title": "Glemt passord?"
      },
      "sign_up": {
        "submit": "Opprett",
        "title": "Opprett brukerkonto"
      },
      "subdomain": {
        "title": "Subdomene"
      },
      "unlock": {
        "submit": "Send info om gjenoppretting på nytt",
        "title": "Send info om gjenoppretting på nytt"
      },
      "username": {
        "title": "Brukernavn"
      }
    },
    "download": "Last ned:",
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
        "clear": "Fjern filter",
        "filter": "Filter"
      },
      "predicates": {
        "contains": "Inneholder",
        "ends_with": "Slutter med",
        "equals": "Er lik",
        "greater_than": "Større enn",
        "less_than": "Mindre enn",
        "starts_with": "Starter med"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Slett",
    "has_many_new": "Legg til ny %{model}",
    "has_many_remove": "Fjern",
    "index_list": {
      "block": "Liste",
      "blog": "Blogg",
      "grid": "Gitter",
      "table": "Tabell"
    },
    "less_than": "Less Than",
    "logout": "Logg ut",
    "main_content": "Vennligst implementer %{model}#main_content for å vise innhold.",
    "new_model": "Ny %{model}",
    "next": "Neste",
    "pagination": {
      "empty": "Fant ingen %{model}",
      "entry": {
        "one": "innslag",
        "other": "innslag"
      },
      "multiple": "Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> av <b>%{total}</b> totalt",
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
      "filters": "Filtere",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nei",
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
        "address_housenumber": "House number",
        "address_postcode": "Postcode",
        "address_street": "Gate",
        "name": "Navn",
        "note": "Note",
        "phone": "Telefon",
        "type": "Type",
        "website": "Nettside"
      },
      "user": {
        "first_name": "Navngitt",
        "last_name": "Etternavn",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "må være akseptert",
        "blank": "kan ikke stå tom",
        "confirmation": "passer ikke bekreftelsen",
        "empty": "kan ikke stå tom",
        "equal_to": "må være lik %{count}",
        "even": "må være partall",
        "exclusion": "er reservert",
        "greater_than": "må være større enn %{count}",
        "greater_than_or_equal_to": "må være større enn eller lik %{count}",
        "inclusion": "er ikke inkludert i listen",
        "invalid": "er ugyldig",
        "less_than": "må være mindre enn %{count}",
        "less_than_or_equal_to": "må være mindre enn eller lik %{count}",
        "not_a_number": "er ikke et tall",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "må være oddetall",
        "record_invalid": "Det oppstod feil: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "er allerede opptatt",
        "too_long": "er for lang (maksimum %{count} tegn)",
        "too_short": "er for kort (minimum %{count} tegn)",
        "wrong_length": "er av feil lengde (maksimum %{count} tegn)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "kan ikke stå tom dersom passord er utdelt"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Epostadresse",
          "password": "Passord",
          "remember_me": "Forbli pålogget"
        }
      },
      "template": {
        "body": "Det oppstod problemer i følgende felt:",
        "header": {
          "one": "Kunne ikke lagre %{model} på grunn av én feil.",
          "other": "Kunne ikke lagre %{model} på grunn av %{count} feil."
        }
      }
    },
    "models": {
      "user": "Bruker"
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
      "notice": "Du er allerede logget inn"
    },
    "require_user": {
      "notice": "Du må være innlogget for å se denne siden."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Rediger stedet"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "lukk",
    "skip": "Hopp over"
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
      "mai",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "des"
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
      "long": "%e. %B %Y",
      "short": "%e. %b"
    },
    "month_names": [
      null,
      "januar",
      "februar",
      "mars",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "desember"
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
        "one": "rundt 1 time",
        "other": "rundt %{count} timer"
      },
      "about_x_months": {
        "one": "rundt 1 måned",
        "other": "rundt %{count} måneder"
      },
      "about_x_years": {
        "one": "rundt 1 år",
        "other": "rundt %{count} år"
      },
      "almost_x_years": {
        "one": "nesten 1 år",
        "other": "nesten %{count} år"
      },
      "half_a_minute": "et halvt minutt",
      "less_than_x_minutes": {
        "one": "mindre enn 1 minutt",
        "other": "mindre enn %{count} minutter"
      },
      "less_than_x_seconds": {
        "one": "mindre enn 1 sekund",
        "other": "mindre enn %{count} sekunder"
      },
      "over_x_years": {
        "one": "over 1 år",
        "other": "over %{count} år"
      },
      "x_days": {
        "one": "1 dag",
        "other": "%{count} dager"
      },
      "x_minutes": {
        "one": "1 minutt",
        "other": "%{count} minutter"
      },
      "x_months": {
        "one": "1 måned",
        "other": "%{count} måneder"
      },
      "x_seconds": {
        "one": "1 sekund",
        "other": "%{count} sekunder"
      }
    },
    "prompts": {
      "day": "Dag",
      "hour": "Time",
      "minute": "Minutt",
      "month": "Måned",
      "second": "Sekund",
      "year": "År"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Epostadressen din har blitt bekreftet.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Du vil i løpet av noen minutter motta en epost med en lenke til bruk for å bekrefte epostadressen din.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Er du sikker?",
      "headline": "Delete account",
      "link": "Slett nå"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Nåværende passord <i>(vi trenger det for å bekrefte endringen)</i>",
          "email": "Epost",
          "password": "Passord <i>(La den stå tom hvis du ikke vil endre)</i>",
          "password_confirmation": "Gjenta passord"
        },
        "submit": "Lagre endringer"
      },
      "headline": "Rediger konto"
    },
    "failure": {
      "already_authenticated": "Du har allerede logget deg på.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Epost eller passord er ikke gyldig.",
      "invalid_token": "Ugyldig autentifisering.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Din konto er låst",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Du må logge på eller registrere deg for å kunne fortsette",
      "unconfirmed": "Du må bekrefte kontoen din for å kunne fortsette."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "En siste steg for å aktivere kontoen"
      },
      "reset_password_instructions": {
        "subject": "Innstruksjoner for nullstilling av passord"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Påkrevd",
    "omniauth_callbacks": {
      "failure": "Kunne ikke autorisere deg med %{kind}. Feilmelding: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Vellykket autorisering fra %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Epost"
        },
        "submit": "Nullstill passord"
      },
      "headline": "Forgot password?"
    },
    "password_reset": {
      "email": {
        "comment": "Hvis du ikke bestilte tilbakestilling av passord, bare ignorer denne epost. Ditt passord vil ikke bli endret med mindre du klikker på linken over og lager et nytt passord.",
        "headline": "Velkommen  %{email}",
        "link": "Endre passordet",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nytt passord",
          "password_confirmation": "Repeter passord"
        },
        "submit": "Tilbakestill passord"
      },
      "headline": "Tilbakestill passord"
    },
    "passwords": {
      "link": "Glemt passord?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Ditt passord ble endret, du er nå pålogget",
      "updated_not_active": "Passordet ditt har blitt endret"
    },
    "registrations": {
      "destroyed": "Farvel. Din konto er nå slettet. Velkommen igjen.",
      "inactive_signed_up": "Din registrering var vellykket, men vi kunne ikke logge deg inn. Årsak: \"%{reason}\".",
      "link": "Registrer",
      "reasons": {
        "inactive": "inaktiv",
        "locked": "Låst",
        "unconfirmed": "Ubrekreftet"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Din profil er nå oppdatert."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Feil epost eller passord.",
      "invalid_token": "Ugyldig autorisasjon",
      "link": "Logg på",
      "locked": "Din konto er låst",
      "new": {
        "no_osm_account": "Ingen OpenStreetMap-konto?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Tusen takk for din støtte!",
        "sign_in_with": "Logg på med %{kind}\n",
        "sign_up_with_osm": "Registrer nå.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Du er nå innlogget",
      "signed_out": "Du er nå logget av",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Du må logge deg på eller registrere deg før du kan fortsette",
      "unconfirmed": "Du må bekrefte kontoen før du kan fortsette"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Epost",
          "password": "Passord",
          "remember_me": "Forbli innlogget?"
        },
        "submit": "Logg inn"
      },
      "headline": "Logg inn"
    },
    "sign_out": {
      "headline": "Logg ut"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Bekreft min konto",
        "please_confirm": "Du kan bekrefte kontoen med linken nedenfor:",
        "welcome": "Velkommen %{email}!"
      },
      "form": {
        "labels": {
          "email": "Epost",
          "password": "Passord",
          "password_confirmation": "Gjenta passord",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Registrer"
      },
      "headline": "Registrer"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Din konto er gjenåpnet. Du er nå pålogget."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "er allerede bekreftet",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "passer ikke bekreftelsen",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "må være lik %{count}",
      "even": "must be an even number",
      "exclusion": "er reservert",
      "expired": "Utgått, vennligst be om ny",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "må være større enn %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "ikke akseptert verdi",
      "invalid": "er ugyldig",
      "less_than": "må være mindre enn %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "er ikke et tall",
      "not_an_integer": "Må være heltall",
      "not_found": "ikke funnet",
      "not_locked": "var ikke låst",
      "not_saved": {
        "one": "En feil gjorde at %{resource} ikke kunne lagres:",
        "other": "%{count} feil gjorde at %{resource} ikke kunne lagres:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "er allerede opptatt",
      "too_long": "er for lang (maksimum %{count} tegn)",
      "too_short": "er for kort (minimum %{count} tegn)",
      "wrong_length": "er av feil lengde (maksimum %{count} tegn)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Det oppstod problemer i følgende felt:",
      "header": {
        "one": "Kunne ikke lagre %{model} på grunn av én feil.",
        "other": "Kunne ikke lagre %{model} på grunn av %{count} feil."
      }
    }
  },
  "faq": {
    "answers": {
      "0": "You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."
    },
    "headline": "Is there a problem with this place?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "I have more information about this place."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} er opprettet"
      },
      "destroy": {
        "alert": "%{resource_name} kunne ikke fjernes",
        "notice": "%{resource_name} er nå slettet"
      },
      "update": {
        "notice": "%{resource_name} var velykket oppdatert"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Rullestoltilgjengelig",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Ingen rulletstoltilgjengeliget"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Flytt markøren på kartet til riktig sted",
      "osm_username": "Fortsatt ikke medlem? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Opprett en OpenStreetMap-konto nå</a>\n",
      "password": "(La den stå tom, hvis du ikke vil endre den)",
      "phone": "For example: +49 30 12345678",
      "website": "For eksempel: http://www.example.com"
    },
    "labels": {
      "category": "Kategori:",
      "centralkey": "Sentral tast:",
      "city": "By:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Mål",
      "housenumber": "Nummer:",
      "lat": "Breddegrad",
      "lon": "Lengdegrad",
      "name": "Navn:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Passord",
      "password_confirmation": "Gjenta passord",
      "phone": "Telefon:",
      "postcode": "Postnummer:",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "Nullstil",
      "save": "Lagre",
      "street": "Gate:",
      "terms": "I accept the terms of use.",
      "type": "Type:",
      "website": "Webside:",
      "wheelchair": "Rullestoltilgjenglighet?",
      "wheelchair_description": "Kommentar om tilgjengelighet:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "Generell data",
      "optional": "Mer informasjon <span class=\"addition\">(alle felter er valgfrie)</span>"
    }
  },
  "global": {
    "form_validation_error": "Vennligst legg merke til feilene nedenfor"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Hjemmeside",
      "keywords": "Rullestoltilgjenglige steder finn søk merk",
      "search": "Søk",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Om Wheelmap",
      "blog": "Blogg",
      "choose_language": "Velg språk",
      "contact": "Kontakt",
      "feedback": "Tilbakemelding",
      "home": "Start",
      "how_to_add_a_place": "Hvordan legger jeg til steder?",
      "imprint": "Kontakt",
      "logged_in_as": "Logget på som:",
      "login": "Logg in",
      "logout": "Logg ut",
      "map": "Kart",
      "newsletter": "Nyhetsbrev",
      "press": "Presse",
      "profile": "Profile",
      "projects": "Bli aktiv",
      "suggestions": "Forslag",
      "what_is_barrier_free": "Hva betyr \"rullestoltilgjengelig\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Legg til nytt sted",
      "find": "finn",
      "placeholder": "Eksempel Sunset Boulevard L.A. eller Brandenburg Gate Berlin",
      "title_add_place": "Legg til nytt sted her nå!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategorier"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Viser %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> av <b>%{total}</b> totalt"
      },
      "one_page": {
        "display_entries": {
          "one": "Viser <b>%{count}</b> %{entry_name}",
          "other": "Viser <b>alle&nbsp;%{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Vennligst velg"
    },
    "submit": {
      "create": "Lag %{model}",
      "submit": "Lagre %{model}",
      "update": "Oppdater %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Velg kategori",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Rullestoltilgjengelig?"
      },
      "ie": {
        "action": {
          "ignore": "Overse",
          "upgrade": "Oppdater nettleser"
        },
        "warning": {
          "headline": "Vi beklager!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "Okay, sett igang",
        "categories": "Filtrer steder etter kategorier",
        "filter": "Filtrer sider etter tilgjenglighet",
        "headline": "Merk og finn rullestol tilgjenglige steder med Wheelmap.org - verdenrundt helt gratis. Det er enkelt",
        "lookup": "Søk etter et bestemt sted",
        "secondary_headline": "Vårt trafikk lys system for å merke rullestol tiljgenligheten av offentlig steder"
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Ingen rulletstoltilgjengeliget",
          "save": "Oppdater",
          "unknown": "Unknown status",
          "yes": "Rullestoltilgjengelig"
        },
        "help": "Rullestoltilgjengelig? (hjelp)",
        "more": "Mer..."
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
          "headline": "Alle %{type} i %{city} med ukjent rullestol status (%{count})"
        },
        "yes": {
          "headline": "Alle rullestoltilgjenglige %{type} i %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Et prosjekt av Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Choose a category"
    },
    "node": {
      "info_edit_position": "The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>",
      "mail": {
        "body": "(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choose a type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Webside:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, ditt bidrag er enten feil eller ufullstendig",
        "successfull": "Tusen takk, ditt bidrag har blitt lagret og vil snart være tilgjenglig."
      }
    },
    "edit": {
      "header": {
        "title": "Rediger sted: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Avbryt"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Beklager, pålogging feilet",
      "not_available": "Beklager, denne siden er midlertidig ikke tilgjenglig.",
      "not_existent": "Beklager, men dette stedet er ikke lenger tilgjengelig.",
      "not_found": "Beklager, finner ikke siden",
      "param_missing": "Vennligst fyll ut et søkekriterium"
    },
    "flash": {
      "authorize_wheelmap": "Du trenger en OpenStreetMap-konto for å endre data."
    },
    "new": {
      "form": {
        "legend": "Location of the place",
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
        "title": "Nytt sted | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Avbryt"
      }
    },
    "node": {
      "link": {
        "claim": "Arbeider du her?",
        "edit_node": "Rediger sted",
        "report_bug": "Rapporter et problem"
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Detaljer",
      "edit": "Rediger"
    },
    "node_map": {
      "map": "Map:"
    },
    "node_note": {
      "comment": "Comment:"
    },
    "node_photos": {
      "add": "Add",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Photos of this place:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Wheelchair accessible toilet:",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Wheelchair accessibility:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Sted: %{node} | wheelmap.org"
      },
      "link": {
        "back": "tilbake",
        "large_map": "Forstørr",
        "listing": "Alle steder av typen '%{type}' i %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, utfyllingen din var enten feil eller ufullstendig",
        "successfull": "Tusen takk, ditt bidrag har blitt lagret og vil snart ligge på nettet."
      }
    },
    "update_wheelchair": {
      "successfull": "Statusen for \"%{name}\" har blitt endret til \"%{status}\" og vil snart ligge på nettet."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ,",
        "format": "%n %u",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "kr"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Milliard",
          "million": "Million",
          "quadrillion": "kvadrillion",
          "thousand": "tusen",
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
          "kb": "kB",
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
    "one": "%{count} plasser",
    "other": "%{count} steder"
  },
  "poi": {
    "category": {
      "accommodation": "Overnatting",
      "education": "Utdanning",
      "food": "Mat & drikke",
      "government": "Myndighetene",
      "health": "Helsehjelp",
      "leisure": "Kultur & Fritid",
      "misc": "Diverse",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Butikker",
      "sport": "Sport",
      "tourism": "Turisme",
      "unknown": "Ukjent"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandhotell",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Leirplass",
        "caravan_site": "Campingvognsted",
        "chalet": "Hytte",
        "dormitory": "Dormitory",
        "guest_house": "Gjestehus",
        "hostel": "Herberge",
        "hotel": "Hotell",
        "motel": "Motel"
      },
      "education": {
        "college": "Høyskole",
        "driving_school": "Driving school",
        "kindergarten": "Barnehage",
        "library": "Bibliotek",
        "museum": "Museum",
        "school": "Skole",
        "university": "Universitet"
      },
      "food": {
        "bar": "Pub",
        "biergarten": "Uteservering",
        "cafe": "Kafe",
        "drinking_water": "Drikkevann",
        "fast_food": "Gatekjøkken",
        "ice_cream": "Ice cream parlour",
        "pub": "Pub",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Tinghus",
        "embassy": "Ambassade",
        "employment_agency": "Employment agency",
        "government": "Government agency",
        "police": "Politi",
        "public_building": "Offentlig byggning",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Høreapparatforhandler",
        "hospital": "Sykehus",
        "medical_supply": "Apotek",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Apotek",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Fellesområde",
        "speech_therapist": "Speech therapist",
        "veterinary": "Vetrinær"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordell",
        "casino": "Casino",
        "cinema": "Kino",
        "community_centre": "Community centre",
        "gallery": "Galleri",
        "massage": "Massage spa",
        "nightclub": "Nattklubb",
        "playground": "Lekeplass",
        "sauna": "Badstue",
        "stripclub": "Strippeklubb",
        "tattoo": "Tattoo shop",
        "theatre": "Teater",
        "zoo": "Dyrepark"
      },
      "misc": {
        "association": "Association",
        "company": "Bedrift (kontor)",
        "estate_agent": "Real estate agent",
        "insurance": "Insurance",
        "lawyer": "Advokat",
        "ngo": "Non-government organisation",
        "place_of_worship": "Bønnerom / stillerom",
        "political_party": "Political party office",
        "toilets": "Toaletter"
      },
      "money_post": {
        "atm": "Minibank",
        "bank": "Bank",
        "bureau_de_change": "Valutakontor",
        "post_box": "Postboks",
        "post_office": "Postkontor"
      },
      "public_transfer": {
        "aerodrome": "Flyplass",
        "bicycle_parking": "Sykkelparkering",
        "bicycle_rental": "Sykkelutleie",
        "boatyard": "Boat yard",
        "bus_station": "Bussstasjon",
        "bus_stop": "Bussholdeplass",
        "cable_car": "Taubane",
        "car_rental": "Bilutleie",
        "car_sharing": "Bil deling",
        "chair_lift": "Trappeheis / løfteplattform",
        "ferry": "Ferge",
        "ferry_terminal": "Fergeterminal",
        "fuel": "Bensinstasjon",
        "halt": "Stop",
        "light_rail": "Bybane",
        "parking": "Parkering",
        "parking_aisle": "Parkeringsplass",
        "platform": "Plattform",
        "station": "T-bane",
        "subway_entrance": "Inngang t-bane",
        "terminal": "Flyplass terminal",
        "tram_stop": "Trikkestop"
      },
      "shopping": {
        "alcohol": "Brennevin",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "Bakeri",
        "beauty": "Beauty salon",
        "beverages": "Forfriskninger",
        "bicycle": "Sykkelbutikk",
        "books": "Bøker",
        "butcher": "Slakter",
        "car_repair": "Bilverksted",
        "car_shop": "Bilbutikk",
        "chemist": "Chemist / Drugstore",
        "clothes": "Klær",
        "computer": "Datamaskin",
        "confectionery": "Candy store",
        "convenience": "Nærbutikk",
        "copyshop": "Copy shop",
        "deli": "Delicatessen",
        "department_store": "Varemagasin",
        "doityourself": "Gjør det selv",
        "dry_cleaning": "Renseri",
        "electronics": "Elektronikk",
        "erotic": "Sex shop",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "Blomsterbutikk",
        "funeral_directors": "Funeral home",
        "furniture": "Møbler",
        "garden_centre": "Garden centre",
        "gift": "Gift shop",
        "greengrocer": "Greengrocer",
        "hairdresser": "Frisør",
        "hardware": "Jernvare",
        "interior_decoration": "Interior design shop",
        "jewelry": "Jewelry",
        "kiosk": "Kiosk",
        "laundry": "Vask",
        "mall": "Kjøpesenter",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "Optiker",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "Foto",
        "second_hand": "Brukt",
        "shoes": "Sko",
        "sports": "Sport",
        "stationery": "Skrivesaker",
        "supermarket": "Dagligvare",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "variety_store": "Discount store",
        "video": "Videoutleie"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "Sportssenter",
        "stadium": "Stadion",
        "swimming": "Svømming",
        "swimming_pool": "Svømmebasseng"
      },
      "tourism": {
        "archaeological_site": "Arkeologisk utgravning",
        "arts_centre": "Kunstsenter",
        "artwork": "Kunst",
        "attraction": "Attraksjon",
        "battlefield": "Slagmark",
        "beach": "Strand",
        "beacon": "Fyr",
        "castle": "Borg",
        "cave_entrance": "Inngang til grotte",
        "information": "Turistinformasjon",
        "memorial": "Minnesmerke",
        "theme_park": "Fornøyelsespark",
        "tower": "Tårn",
        "viewpoint": "Utsiktspunkt"
      },
      "unknown": {
        "unknown": "Ukjent"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: Tilkoblet",
          "grant": "Koble til nå",
          "not_connected": "Status: Ikke tilkoblet",
          "revoke": "Frakoblet"
        }
      },
      "headline": "Rediger profilen din"
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
        "headline": "Sorry, we couldn’t find a place called \"%{query}\".",
        "hint": {
          "example": "<strong>Example:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Please provide more <strong>address details</strong>.",
          "intro": "Try this:",
          "spell_check": "Check the <strong>spelling</strong> of your input."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "Søker etter \"%{q}\"",
        "not_found": "Ingen steder funnet!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} steder har allerede blitt merket",
    "headline": "Alle kan legge til et rullestoltilgjengelig sted!",
    "start": "Start",
    "step1": "Klikk på et sted du kjenner",
    "step2": "Merk den og klikk lagre",
    "step3": "Det var alt. Ingen registrering nødvendig",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistikk",
  "support": {
    "array": {
      "last_word_connector": " og ",
      "sentence_connector": "og",
      "two_words_connector": " og ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Vennligst velg"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "No wheelchair accessible toilet",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Wheelchair accessible toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Kontoen din er nå aktivert!"
      },
      "error": {
        "notice": "Epost og passord passer ikke sammen"
      },
      "notice": "Du er inne!"
    },
    "destroy": {
      "notice": "Hadet, kom snart tilbake"
    },
    "new": {
      "email": "Email address",
      "login": "Logg inn",
      "login_with_twitter": "Logg på med Twitter",
      "password": "Passord",
      "remember_me": "Forbli innlogget"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Hvordan kan vi få kontakt med deg? Du kan endre denne informasjonen i profilen din senere."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Your uploaded images"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Nyhetsbrev"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Photos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Hello %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "uploaded %{count} photos"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "added %{count} places"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "marked %{count} places"
          },
          "text": "You have"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overview"
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
          "settings": "Innstillinger"
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
      "next": "Neste &rsaquo;",
      "previous": "&lsaquo; Forrige",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "Ingen rulletstoltilgjengeliget",
    "unknown": "Unknown status",
    "yes": "Rullestoltilgjengelig"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Et prosjekt laget av",
      "based_on": "Basert på",
      "become_a_supporter": "Bli en sponsor",
      "main_supporter": "Hovedsponsor"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Last ned iPhone-app nå!"
    },
    "logo": {
      "alt": "Wheelmap Logo - finn rullestoltilgjengelige steder",
      "title": "Wheelmap - finn rullestoltilgjengelige steder"
    },
    "what_is": {
      "fully_accessible": "Inngangspartiet er uten terskel, alle rom uten terskel.",
      "limited_accessible": "Inngang har steg (maks. høyde 7 cm, 3 tommers), de fleste rom er terskelfri.",
      "not_accessible": "Inngang har terkel eller flere steg, rommene er utilgjengelige.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Neste &#8594;",
    "page_entries_info": {
      "multi_page": "Viser %{model} %{from} - %{to} av %{count} totalt",
      "multi_page_html": "Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> av <b>%{count}</b> totalt",
      "single_page": {
        "one": "Viser 1 %{model}",
        "other": "Viser alle %{count} %{model}",
        "zero": "Ingen %{model} funnet"
      },
      "single_page_html": {
        "one": "Viser <b>1</b> %{model}",
        "other": "Viser <b>alle&nbsp;%{count}</b> %{model}",
        "zero": "Ingen %{model} funnet"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Forrige"
  }
});
