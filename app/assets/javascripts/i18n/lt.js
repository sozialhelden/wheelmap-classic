I18n.translations || (I18n.translations = {});
I18n.translations["lt"] = I18n.extend((I18n.translations["lt"] || {}), {
  "actions": {
    "cancel": "Atsisakyti",
    "next": "Kitas",
    "save": "Įrašyti",
    "send": "Siųsti"
  },
  "active_admin": {
    "access_denied": {
      "message": "Jūs nesate įgaliotas atlikti šį veiksmą."
    },
    "any": "Bet kokia",
    "batch_actions": {
      "action_label": "%{title} Pasirinkta",
      "button_label": "Veiksmai su pažymėtais",
      "default_confirmation": "Ar jūs tikrai norite tai padaryti?",
      "delete_confirmation": "Ar jūs tikrai norite pašalinti šiuos %{plural_model}?",
      "labels": {
        "destroy": "Šalinti"
      },
      "link": "Sukurti",
      "selection_toggle_explanation": "(Žymėti)",
      "succesfully_destroyed": {
        "few": "Sėkmingai pašalinti %{count} %{plural_model}",
        "one": "Sėkmingai pašalintas 1 %{model}",
        "other": "Sėkmingai pašalinti %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Nėra %{resource_name}.",
      "link": "Sukurti"
    },
    "cancel": "Atšaukti",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Pridėti komentarą",
      "author": "Autorius",
      "author_missing": "Anonimas",
      "author_type": "Autoriaus Tipas",
      "body": "Įrašas",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Komentaras neišsaugotas, tekstas buvo tuščias."
      },
      "no_comments_yet": "Dar nėra komentarų.",
      "resource": "Išteklių",
      "resource_type": "Resurso Tipas",
      "title": "Komentaras",
      "title_content": "Komentarai (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Valdymo skydelis",
    "dashboard_welcome": {
      "call_to_action": "Norėdami pridėti skydelyje skyrius, žiūrėkite app/admin/dashboard.rb",
      "welcome": "Sveiki atvykę į Active Admin. Tai yra numatytasis valdymo skydelis."
    },
    "delete": "Šalinti",
    "delete_confirmation": "Ar jūs tikrai norite tai pašalinti?",
    "delete_model": "Pašalinti %{model}",
    "details": "%{model} Informacija",
    "devise": {
      "change_password": {
        "submit": "Pakeisti mano slaptažodį",
        "title": "Slaptažodžio Keitimas"
      },
      "email": {
        "title": "El. paštas"
      },
      "links": {
        "forgot_your_password": "Pamiršote slaptažodį?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Prisijungti",
        "sign_in_with_omniauth_provider": "Prisijungti su %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Prisiminti Mane",
        "submit": "Prisijungti",
        "title": "Prisijungimas"
      },
      "password": {
        "title": "Slaptažodis"
      },
      "resend_confirmation_instructions": {
        "submit": "Siųsti patvirtinimo instructions",
        "title": "Patvirtinimo Instrukcijos"
      },
      "reset_password": {
        "submit": "Sukurti Naują Slaptažodį",
        "title": "Pamiršote slaptažodį?"
      },
      "sign_up": {
        "submit": "Užsiregistruoti",
        "title": "Registracija"
      },
      "subdomain": {
        "title": "Subdomenas"
      },
      "unlock": {
        "submit": "Pakartotinai siųsti atrakinimo instrukcijas",
        "title": "Pakartotinio Atrakinimo Instrukcijos"
      },
      "username": {
        "title": "Vartotojo Vardas"
      }
    },
    "download": "Atsisiųsti",
    "dropdown_actions": {
      "button_label": "Veiksmai"
    },
    "edit": "Redaguoti",
    "edit_model": "Redaguoti %{model}",
    "empty": "Tuščia",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Išvalyti filtrus",
        "filter": "Filtras"
      },
      "predicates": {
        "contains": "Sudėtyje yra",
        "ends_with": "Baigiasi",
        "equals": "lygus",
        "greater_than": "didesnis nei",
        "less_than": "mažiau nei",
        "starts_with": "Prasideda nuo"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Šalinti",
    "has_many_new": "Pridėti naują %{model}",
    "has_many_remove": "Pašalinti",
    "index_list": {
      "block": "Sąrašas",
      "blog": "Blog",
      "grid": "Tinklelis",
      "table": "Lentelė"
    },
    "less_than": "Less Than",
    "logout": "Išeiti",
    "main_content": "Prašome realizuoti %{model}#main_content turiniui vaizduoti.",
    "new_model": "Naujas %{model}",
    "next": "Toliau",
    "pagination": {
      "empty": "%{model} nerastas",
      "entry": {
        "one": "įrašas",
        "other": "įrašai"
      },
      "multiple": "Rodomi %{model} <b>%{iš}&nbsp;-&nbsp;%{to} </ b> iš<b>%{total} </ b> iš viso",
      "multiple_without_total": "Rodomi %{model} <b>%{iš}&nbsp;-&nbsp;%{to} </ b> ",
      "one": "Rodoma <B> 1 </ b> %{model}",
      "one_page": "Rodoma <b>visi %{n} </ b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Atgal",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtrai",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nėra",
      "yes": "Taip"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Žiūrėti"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adresas",
        "address_city": "Miestas",
        "address_housenumber": "Namo numeris",
        "address_postcode": "Pašto kodas",
        "address_street": "Gatvė",
        "name": "Name",
        "note": "Pastaba",
        "phone": "Telefonas",
        "type": "Tipas",
        "website": "Svetainė"
      },
      "user": {
        "first_name": "Given name",
        "last_name": "Last name",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "must be accepted",
        "blank": "can't be blank",
        "confirmation": "doesn't match confirmation",
        "empty": "can't be empty",
        "equal_to": "must be equal to %{count}",
        "even": "must be even",
        "exclusion": "is reserved",
        "greater_than": "must be greater than %{count}",
        "greater_than_or_equal_to": "must be greater than or equal to %{count}",
        "inclusion": "is not included in the list",
        "invalid": "is invalid",
        "less_than": "must be less than %{count}",
        "less_than_or_equal_to": "must be less than or equal to %{count}",
        "not_a_number": "is not a number",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "must be odd",
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "has already been taken",
        "too_long": "is too long (maximum is %{count} characters)",
        "too_short": "is too short (minimum is %{count} characters)",
        "wrong_length": "is the wrong length (should be %{count} characters)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
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
          "email": "Email address",
          "password": "Password",
          "remember_me": "Stay logged in"
        }
      },
      "template": {
        "body": "There were problems with the following fields:",
        "header": {
          "one": "1 error prohibited this %{model} from being saved",
          "other": "%{count} errors prohibited this %{model} from being saved"
        }
      }
    },
    "models": {
      "user": "User"
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
      "notice": "Jūs jau esate prisijungę..."
    },
    "require_user": {
      "notice": "Norėdami matyti šį puslapį, privalote prisijungti."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Keisti vietą"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "uždaryti",
    "skip": "praleisti"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Please write to us in English or German.",
        "flash_after_submit": "Thank you for contacting us. Our support team will get back to you as soon as possible.",
        "header_text_html": "Please check the <a href=\"https://news.wheelmap.org/en/faq/\">frequently asked questions</a> for help first. If the solution to your problem is not there, please answer the following questions so we can fix it.",
        "note": "Note that Wheelmap is an open-source project run by a non-profit organization and we have limited resources for the app development.",
        "questions": {
          "a": "What did you do?",
          "b": "What did you expect would happen?",
          "c": "What happened instead?"
        },
        "submit_button": "Submit",
        "title": "Pranešti apie problemą"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Jūsų el. pašto adresas buvo sėkmingai patvirtintas.",
      "link": "Jūs negavote patvirtinimo instrukcijų?",
      "send_instructions": "Po kelių minučių, jūs gausite laišką su savo el. pašto patvirtinimo nuoroda.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Tikrai?",
      "headline": "Ištrinti paskyrą",
      "link": "Ištrinti dabar"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Dabartinis slaptažodis <i>(reikalingas, kad patvirtinti pakeitimus)</i>",
          "email": "El. paštas",
          "password": "Slaptažodis <i>(palikite tuščią, jei nenorite jo keisti)</i>",
          "password_confirmation": "Pakartokite slaptažodį"
        },
        "submit": "Išsaugoti pakeitimus"
      },
      "headline": "Redaguoti paskyrą"
    },
    "failure": {
      "already_authenticated": "Jūs jau esate prisijungę.",
      "inactive": "Jūsų paskyra kol kas dar nebuvo aktyvuota.",
      "invalid": "Neteisingas el. pašto adresas ar slaptažodis.",
      "invalid_token": "Invalid authentication token",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Jūsų paskyra yra užrakinta",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Baigėsi jūsų seansui skirtas laikas, norėdami tęsti, prisjunkite dar kartą.",
      "unauthenticated": "Norėdami tęsti, turite prisijungti arba užsiregistruoti",
      "unconfirmed": "Prieš tęsiant, jums reikia patvirtinti savo paskyrą."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "One more step to activate your account"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Būtina",
    "omniauth_callbacks": {
      "failure": "Tapatybės nustatymas per %{kind} nepavyko. Klaida: \"%{reason}\". ",
      "permission_missing": "You did not grant the required permission.",
      "success": "Sėkmingai prisijungta per %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "El. paštas"
        },
        "submit": "Atstatyti slaptažodį"
      },
      "headline": "Pamiršote slaptažodį?"
    },
    "password_reset": {
      "email": {
        "comment": "If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.",
        "headline": "Sveiki %{email}",
        "link": "Change my password",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Naujas slaptažodis",
          "password_confirmation": "Pakartokite slaptažodį"
        },
        "submit": "Atstatyti slaptažodį"
      },
      "headline": "Atstatyti slaptažodį"
    },
    "passwords": {
      "link": "Pamiršote slaptažodį?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Your password was changed successfully, you are now logged in",
      "updated_not_active": "Jūsų slaptažodis buvo sėkmingai pakeistas"
    },
    "registrations": {
      "destroyed": "Bye! Your account was successfully cancelled. We hope to see you again soon.",
      "inactive_signed_up": "You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"",
      "link": "Sign up",
      "reasons": {
        "inactive": "inactive",
        "locked": "locked",
        "unconfirmed": "unconfirmed"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Jūs sėkmingai atnaujinote savo paskyrą."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Neteisingas el. pašto adresas ar slaptažodis.",
      "invalid_token": "Invalid authentication token",
      "link": "Prisijungti",
      "locked": "Jūsų paskyra yra užrakinta",
      "new": {
        "no_osm_account": "Neturite OpenStreetMap paskyros?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Ačiū labai už jūsų palaikymą!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Logged in successfully",
      "signed_out": "You have signed out successfully",
      "timeout": "Baigėsi jūsų seansui skirtas laikas, norėdami tęsti, prisjunkite dar kartą.",
      "unauthenticated": "Norėdami tęsti, turite prisijungti arba užsiregistruoti",
      "unconfirmed": "Prieš tęsiant, jums reikia patvirtinti savo paskyrą."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "El. paštas",
          "password": "Slaptažodis",
          "remember_me": "Stay logged in?"
        },
        "submit": "Prisijungti"
      },
      "headline": "Prisijungti"
    },
    "sign_out": {
      "headline": "Atsijungti"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Patvirtinti mano paskyrą",
        "please_confirm": "Jūs galite patvirtinti savo paskyrą per žemiau esančią nuorodą:",
        "welcome": "Sveiki atvykę %{email}!"
      },
      "form": {
        "labels": {
          "email": "El. paštas",
          "password": "Slaptažodis",
          "password_confirmation": "Pakartokite slaptažodį",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Sign up"
      },
      "headline": "Sign up"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Your account was successfully unlocked. You are now signed in."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "has already been confirmed",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "doesn't match confirmation",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "must be exactly %{count}",
      "even": "must be an even number",
      "exclusion": "is reserved",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "not a valid value",
      "invalid": "not valid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nėra skaičius",
      "not_an_integer": "must be an integer",
      "not_found": "was not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "has already been taken",
      "too_long": "is too long (not more than %{count} characters)",
      "too_short": "is too short (not less than %{count} characters)",
      "wrong_length": "is the wrong length (should be %{count} characters)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Neteisingas svetainės adresas."
        }
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Jūs visuomet galite keisti vietos žymėjimą patys. Tiesiog pasirinkite tinkamą žymėjimą ir spauskite \"Išsaugoti\" - atlikta!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "Jūs galite pridėti tolimesnę informaciją (pvz., \"Šioje vietoje yra mobili rampa\") komentarų sekcijoje. Spauskite \"Keisti\" ir \"Pridėti komentarą\"."
    },
    "headline": "Ar yra problemų su šia vieta?",
    "questions": {
      "0": "Neteisingas žymėjimas.",
      "1": "Vietos detalės yra neteisingos arba jų visai nėra.",
      "2": "Aš turiu daugiau informacijos apie šią vietą."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created"
      },
      "destroy": {
        "alert": "%{resource_name} could not be removed",
        "notice": "%{resource_name} was successfully deleted"
      },
      "update": {
        "notice": "%{resource_name} was successfully updated"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Paveikslas buvo sėkmingai ištrintas"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Wheelchair accessible",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Nežinoma būsena",
    "show_unaccessible_places": "Not wheelchair accessible"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Move the marker on the map to the correct position",
      "osm_username": "Dar nesate narys? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Susikurkite OpenStreetMap paskyrą dabar</a>",
      "password": "(leave empty if you don't want to change it)",
      "phone": "For example: +49 30 12345678",
      "website": "Pavyzdžiui: http://www.example.com"
    },
    "labels": {
      "category": "Kategorija:",
      "centralkey": "Central key:",
      "city": "Miestas:",
      "create": "Create a place",
      "email": "El. paštas",
      "finish": "Užbaigti",
      "housenumber": "No:",
      "lat": "Platuma",
      "lon": "Ilguma",
      "name": "Name:",
      "osm_password": "OpenStreetMap slaptažodis",
      "osm_username": "OpenStreetMap paskyros pavadinimas",
      "password": "Slaptažodis",
      "password_confirmation": "Pakartokite slaptažodį",
      "phone": "Telefonas:",
      "postcode": "Pašto kodas:",
      "privacy_policy": "Aš sutinku su duomenų konfidencialumo sutarties 1 ir 2 pastraipa.",
      "reset": "Atstatyti",
      "save": "Įrašyti",
      "street": "Gatvė:",
      "terms": "Aš sutinku su naudojimosi taisyklėmis.",
      "type": "Tipas:",
      "website": "Svetainė:",
      "wheelchair": "Prieinamumas neįgaliųjų vežimėliais?",
      "wheelchair_description": "Accessibility comment:",
      "wheelchair_toilet": "Neįgaliųjų vežimėliu prieinamas tualetas:"
    },
    "titles": {
      "basic": "Pagrindiniai duomenys",
      "optional": "Daugiau informacijos <span class=\"addition\">(visi laukai yra nebūtini)</span>"
    }
  },
  "global": {
    "form_validation_error": "Prašome atkreipti dėmesį į žemiau išvardintas klaidas"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Pradžios puslapis",
      "keywords": "wheelchair accessible places find search mark",
      "search": "Search",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Naujienos",
      "choose_language": "Pasirinkti kalbą",
      "contact": "Kontaktai",
      "faq": "FAQ",
      "feedback": "Atsiliepimai",
      "home": "Start",
      "how_to_add_a_place": "How do I add places?",
      "imprint": "Imprint",
      "logged_in_as": "Prisijungta kaip:",
      "login": "Prisijungti",
      "logout": "Atsijungti",
      "map": "Žemėlapis",
      "newsletter": "Naujienlaiškis",
      "press": "Press",
      "profile": "Profilis",
      "projects": "Get involved",
      "report_problem": "Pranešti apie problemą",
      "suggestions": "Pasiūlymai",
      "travelguide": "Travel guide",
      "what_is_barrier_free": "Ką reiškia \"prieinama neįgaliųjų vežimėliais\"?",
      "what_is_wheelmap": "Kas yra Wheelmap?"
    },
    "searchbar": {
      "add_place": "Pridėti kitą vietą",
      "find": "Rasti",
      "placeholder": "Ieškoti vietą",
      "title_add_place": "Add a new place at this position now!"
    },
    "tagline": "Wheelmap logotipas",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategorijos"
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
      "prompt": "Please choose"
    },
    "submit": {
      "create": "create %{model}",
      "submit": "save %{model}",
      "update": "update %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Choose category",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Prieinama neįgaliųjų vežimėliais?"
      },
      "ie": {
        "action": {
          "ignore": "Nepaisyti",
          "upgrade": "Update Browser"
        },
        "warning": {
          "headline": "Atsiprašome!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "Gerai, pirmyn!",
        "categories": "Filtruokite vietas pagal kategorijas",
        "filter": "Filtruokite vietas pagal prieinamumą neįgaliųjų vežimėliais",
        "headline": "Raskite ir žymėkite neįgaliųjų vežimėliais prieinamas vietas Wheelmap.org pagalba - visuotinai ir nemokamai. Tai lengva:",
        "lookup": "Ieškokite konkrečios vietos",
        "secondary_headline": "Mūsų šviesoforo spalvų sistema, skirta neįgaliųjų vežimėliais prieinamų viešų vietų žymėjimui:"
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Not wheelchair accessible",
          "save": "Atnaujinti",
          "unknown": "Nežinoma būsena",
          "yes": "Wheelchair accessible"
        },
        "help": "Wheelchair accessible? (Help)",
        "more": "daugiau ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Kaip?",
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
          "headline": "All %{type} in %{city} with unknown wheelchair status (%{count})"
        },
        "yes": {
          "headline": "All wheelchair accessible %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.de projektas"
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
        "body": "(Prašome rašyti tik Anglų arba Vokiečių kalba.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problemos su %{headline}"
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
      "phone": "Telefonas:",
      "website": "Svetainė:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oi, jūsų įvestis buvo arba neteisinga, arba nepilna",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "edit": {
      "header": {
        "title": "Edit place: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Atšaukti"
      }
    },
    "errors": {
      "default": "Oi, kažkas nutiko. Mes buvome informuoti apie šią klaidą",
      "not_authorized": "Atleiskite, tapatybės nustatymas nepavyko",
      "not_available": "Atleiskite, šis puslapis laikinai neprieinamas.",
      "not_existent": "Atleiskite, ši vieta daugiau nebeprieinama.",
      "not_found": "Atleiskite, puslapis nerastas.",
      "param_missing": "Please provide a search term"
    },
    "flash": {
      "authorize_wheelmap": "Norėdami modifikuoti duomenis, jūs privalote turėti OpenStreetMap paskyrą"
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
            "name": "Adresas",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Kontaktai",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Ar visa informacija teisinga?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Panašios vietos",
            "title": "Mes šalia radome panašių vietų. Ar tai viena iš jų?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Nauja vieta | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Atšaukti"
      }
    },
    "node": {
      "link": {
        "claim": "Ar jūs čia dirbate?",
        "edit_node": "Keisti vietą",
        "report_bug": "Pranešti apie problemą"
      }
    },
    "node_data": {
      "address": "Adresas:",
      "contact_details": "Kontaktiniai duomenys:"
    },
    "node_edit": {
      "details": "Išsamiau",
      "edit": "Keisti"
    },
    "node_map": {
      "map": "Žemėlapis:"
    },
    "node_note": {
      "comment": "Komentarai:"
    },
    "node_photos": {
      "add": "Pridėti",
      "photos_of_this_place": "Šios vietos nuotraukos:",
      "upload": "Išsiųsti"
    },
    "node_similar": {
      "similar": "Panašios vietos: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Neįgaliųjų vežimėliu prieinamas tualetas:",
      "premium": "%{name} sako: ši vieta yra",
      "wheelchair_accessibility": "Prieinamumas neįgaliųjų vežimėliais:"
    },
    "node_streetview": {
      "streetview": "Gatvės vaizdas:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Vieta: %{node} | wheelmap.org"
      },
      "link": {
        "back": "atgal",
        "large_map": "Enlarge",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Išsiųsti paveikslą"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "El. paštas",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oi, jūsų įvestis buvo arba neteisinga, arba nepilna",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "update_wheelchair": {
      "successfull": "The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
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
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
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
            "few": "Baitai",
            "one": "Baitas",
            "other": "Baitų"
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
  "or": "or",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "Accomodation",
      "education": "Švietimas",
      "food": "Maistas",
      "government": "Government",
      "health": "Sveikata",
      "leisure": "Laisvalaikis",
      "misc": "Miscellaneous",
      "money_post": "Bank / Post office",
      "public_transfer": "Viešasis transportas",
      "shopping": "Shopping",
      "sport": "Sportas",
      "tourism": "Turizmas",
      "unknown": "Nežinoma"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Beach hotel",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Camp site",
        "caravan_site": "Caravan site",
        "chalet": "Chalet",
        "dormitory": "Dormitory",
        "guest_house": "Svečių namai",
        "hostel": "Hostel",
        "hotel": "Viešbutis",
        "motel": "Motel"
      },
      "education": {
        "college": "College",
        "driving_school": "Vairavimo mokykla",
        "kindergarten": "Vaikų darželis",
        "library": "Biblioteka",
        "museum": "Muziejus",
        "school": "Mokykla",
        "university": "Universitetas"
      },
      "food": {
        "bar": "Baras",
        "biergarten": "Biergarten",
        "cafe": "Kavinė",
        "drinking_water": "Geriamas vanduo",
        "fast_food": "Fast Food",
        "ice_cream": "Ice cream parlour",
        "pub": "Pub",
        "restaurant": "Restoranas"
      },
      "government": {
        "courthouse": "Courthouse",
        "embassy": "Ambasada",
        "employment_agency": "Employment agency",
        "government": "Government agency",
        "police": "Policija",
        "public_building": "Public building",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Hearing aid dealer",
        "hospital": "Ligoninė",
        "medical_supply": "Medical supplies",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Pharmacy",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Social facility",
        "speech_therapist": "Speech therapist",
        "veterinary": "Veterinary"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Brothel",
        "casino": "Kazino",
        "cinema": "Kinas",
        "community_centre": "Community centre",
        "gallery": "Gallery",
        "massage": "Massage spa",
        "nightclub": "Naktinis klubas",
        "playground": "Žaidimų aikštelė",
        "sauna": "Sauna",
        "stripclub": "Stripclub",
        "tattoo": "Tattoo shop",
        "theatre": "Teatras",
        "zoo": "Zoologijos sodas"
      },
      "misc": {
        "association": "Association",
        "company": "Company (Office)",
        "estate_agent": "Real estate agent",
        "insurance": "Draudimas",
        "lawyer": "Advokatas",
        "ngo": "Non-government organisation",
        "place_of_worship": "Place of worship",
        "political_party": "Political party office",
        "toilets": "Toilets"
      },
      "money_post": {
        "atm": "Bankomatas",
        "bank": "Bankas",
        "bureau_de_change": "Bureau de change",
        "post_box": "Post box",
        "post_office": "Post office"
      },
      "public_transfer": {
        "aerodrome": "Oro uostas",
        "bicycle_parking": "Bicycle parking",
        "bicycle_rental": "Dviračių nuoma",
        "boatyard": "Boat yard",
        "bus_station": "Autobusų stotis",
        "bus_stop": "Stotelė",
        "cable_car": "Cable car",
        "car_rental": "Car rental",
        "car_sharing": "Car sharing",
        "chair_lift": "Chair lift",
        "ferry": "Keltas",
        "ferry_terminal": "Kelto terminalas",
        "fuel": "Gas station",
        "halt": "Halt",
        "light_rail": "Light rail",
        "parking": "Parking",
        "parking_aisle": "Parking aisle",
        "platform": "Platform",
        "station": "Geležinkelio stotis",
        "subway_entrance": "Subway entrance",
        "terminal": "Oro uosto terminalas",
        "tram_stop": "Tramvajaus stotelė"
      },
      "shopping": {
        "alcohol": "Liquor",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "Bakery",
        "beauty": "Beauty salon",
        "beverages": "Beverages",
        "bicycle": "Bike shop",
        "books": "Knygos",
        "butcher": "Butcher",
        "car_repair": "Car repair",
        "car_shop": "Car shop",
        "chemist": "Chemist / Drugstore",
        "clothes": "Drabužiai",
        "computer": "Kompiuteris",
        "confectionery": "Candy store",
        "convenience": "Convenience",
        "copyshop": "Copy shop",
        "deli": "Delicatessen",
        "department_store": "Department store",
        "doityourself": "Do it yourself",
        "dry_cleaning": "Sausas valymas",
        "electronics": "Elektronika",
        "erotic": "Sex shop",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "Florist",
        "funeral_directors": "Funeral home",
        "furniture": "Furniture",
        "garden_centre": "Garden centre",
        "gift": "Dovanų parduotuvė",
        "greengrocer": "Greengrocer",
        "hairdresser": "Hairdresser",
        "hardware": "Aparatinė Įranga",
        "interior_decoration": "Interior design shop",
        "jewelry": "Jewelry",
        "kiosk": "Kiosk",
        "laundry": "Laundry",
        "mall": "Prekybos centras",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "Optician",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "Photo",
        "second_hand": "Second hand",
        "shoes": "Shoes",
        "sports": "Sports",
        "stationery": "Stationery",
        "supermarket": "Supermarket",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Žaislai",
        "travel_agency": "Travel agency",
        "variety_store": "Discount store",
        "video": "Video rental store"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "Sports centre",
        "stadium": "Stadium",
        "swimming": "Swimming",
        "swimming_pool": "Baseinas"
      },
      "tourism": {
        "archaeological_site": "Archaeological site",
        "arts_centre": "Arts centre",
        "artwork": "Artwork",
        "attraction": "Attraction",
        "battlefield": "Battlefield",
        "beach": "Paplūdimys",
        "beacon": "Lighthouse",
        "castle": "Castle",
        "cave_entrance": "Cave entrance",
        "information": "Tourist information",
        "memorial": "Memorial",
        "theme_park": "Theme park",
        "tower": "Tower",
        "viewpoint": "View point"
      },
      "unknown": {
        "unknown": "Nežinoma"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: connected",
          "grant": "Connect now",
          "not_connected": "Status: Not connected",
          "revoke": "Atsijungti"
        }
      },
      "headline": "Edit your profile"
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
        "headline": "Atleiskite, mums nepavyko rasti vietos pavadinimu \"%{query}\".",
        "hint": {
          "example": "<strong>Pavyzdys:</strong> London, United Kingdom",
          "info": "Mūsų paieškos tarnyba veikia tik su pavadinimo ir/arba adreso informacija. Dėl to, prašome ieškoti arba pagal vietos pavadinimą, arba pagal jos adresą, pvz., gatvės pavadinimas ir/arba miestas. Vietos tipo paieška, pvz., restoranas ar kinas, neveikia!",
          "work_in_progress": "Mes sunkiai dirbame, norėdami ateityje padaryti vietų paiešką lengvesnę bei intuityvesnę."
        },
        "try_this": {
          "address": "Prašome pateikti <strong>išsamesnį adresą</strong>.",
          "intro": "Try this:",
          "spell_check": "Patikrinkite savo įvesties <strong>rašybą</strong>."
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} rezultatai:",
          "one": "%{count} rezultatas:",
          "other": "%{count} rezultatų:"
        }
      },
      "search": {
        "for": "Ieškoma \"%{q}\"",
        "not_found": "No places could be found!"
      }
    },
    "timeout": {
      "headline": "Atleiskite, kažkas nutiko",
      "info": "Mūsų paieškos tarnyba buvo laikinai neprieinama.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "Start",
    "step1": "Spustelėkite ant jums žinomos vietos",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "Kas yra Wheelmap?"
  },
  "statistics": "Statistika",
  "support": {
    "array": {
      "last_word_connector": "ir",
      "sentence_connector": "ir",
      "two_words_connector": "ir",
      "words_connector": ","
    },
    "select": {
      "prompt": "Please select"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %Y %b %d, %H:%M:%S %z",
      "long": "%Y %B %d, %H:%M",
      "short": "%b %d, %H:%M"
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
        "notice": "Your account is activated now!"
      },
      "error": {
        "notice": "El. paštas ir slaptažodis neatitinka."
      },
      "notice": "You're in!"
    },
    "destroy": {
      "notice": "Bye, come back soon!"
    },
    "new": {
      "email": "Email address",
      "login": "Prisijungti",
      "login_with_twitter": "Log in with Twitter",
      "password": "Slaptažodis",
      "remember_me": "Stay logged in"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Kaip mes galime su jumis susisiekti? Vėliau, šią informaciją galite pakeisti savo profilyje."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Jūsų išsiųsti paveikslai"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Jūsų paskyros informacija"
        },
        "title": "Profilis"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Naujienlaiškis"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Nuotraukos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Sveiki %{name}"
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
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://news.wheelmap.org/en/\">Blog</a> or <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Apžvalga"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Aukštis",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Peržiūra",
          "settings": "Nustatymai"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Plotis"
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
    "limited": "Partially wheelchair accessible",
    "no": "Not wheelchair accessible",
    "unknown": "Nežinoma būsena",
    "yes": "Wheelchair accessible"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Pagrindinis remėjas"
    },
    "itunes": {
      "alt": "AppStore Logotipas",
      "title": "Download the iPhone App now!"
    },
    "logo": {
      "alt": "Wheelmap Logo - find wheelchair accessible places",
      "title": "Wheelmap - find wheelchair accessible places"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Kitas &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Ankstesnis"
  }
});
