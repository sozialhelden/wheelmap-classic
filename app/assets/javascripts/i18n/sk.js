I18n.translations || (I18n.translations = {});
I18n.translations["sk"] = I18n.extend((I18n.translations["sk"] || {}), {
  "actions": {
    "cancel": "Prerušiť",
    "next": "Ďalej",
    "save": "Uložiť",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Any",
    "batch_actions": {
      "action_label": "%{title} Selected",
      "button_label": "Batch Actions",
      "default_confirmation": "Are you sure you want to do this?",
      "delete_confirmation": "Are you sure you want to delete these %{plural_model}? You won't be able to undo this.",
      "labels": {
        "destroy": "Delete"
      },
      "link": "Create one",
      "selection_toggle_explanation": "(Toggle Selection)",
      "succesfully_destroyed": {
        "one": "Successfully destroyed 1 %{model}",
        "other": "Successfully destroyed %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "There are no %{resource_name} yet.",
      "link": "Create one"
    },
    "cancel": "Cancel",
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
        "empty_text": "Comment wasn't saved, text was empty."
      },
      "no_comments_yet": "No comments yet.",
      "resource": "Resource",
      "resource_type": "Resource Type",
      "title": "Comment",
      "title_content": "Comments (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Dashboard",
    "dashboard_welcome": {
      "call_to_action": "To add dashboard sections, checkout 'app/admin/dashboards.rb'",
      "welcome": "Welcome to Active Admin. This is the default dashboard page."
    },
    "delete": "Delete",
    "delete_confirmation": "Are you sure you want to delete this?",
    "delete_model": "Delete %{model}",
    "details": "%{model} Details",
    "devise": {
      "change_password": {
        "submit": "Change my password",
        "title": "Change your password"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Forgot your password?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Sign in",
        "sign_in_with_omniauth_provider": "Sign in with %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Remember me",
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
        "submit": "Reset My Password",
        "title": "Forgot your password?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Download:",
    "dropdown_actions": {
      "button_label": "Actions"
    },
    "edit": "Edit",
    "edit_model": "Edit %{model}",
    "empty": "Empty",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Clear Filters",
        "filter": "Filter"
      },
      "predicates": {
        "contains": "Contains",
        "ends_with": "Ends with",
        "equals": "Equals",
        "greater_than": "Greater than",
        "less_than": "Less than",
        "starts_with": "Starts with"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Delete",
    "has_many_new": "Add New %{model}",
    "has_many_remove": "Remove",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Logout",
    "main_content": "Please implement %{model}#main_content to display content.",
    "new_model": "New %{model}",
    "next": "Next",
    "pagination": {
      "empty": "No %{model} found",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total",
      "multiple_without_total": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Displaying <b>1</b> %{model}",
      "one_page": "Displaying <b>all %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Previous",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filters",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "No",
      "yes": "Yes"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "View"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adresa",
        "address_city": "Mesto",
        "address_housenumber": "Číslo domu",
        "address_postcode": "Postcode",
        "address_street": "Ulica",
        "name": "Meno",
        "note": "Note",
        "phone": "Telefón",
        "type": "Typ",
        "website": "Webovská stránka"
      },
      "user": {
        "first_name": "Krstné meno",
        "last_name": "Priezvisko",
        "privacy_policy": "Ochrana súkromia",
        "terms": "Podmienky použitia"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "musí byť potvrdené",
        "blank": "je povinná položka",
        "confirmation": "nebolo potvrdené",
        "empty": "nesmie byť prázdny/e",
        "equal_to": "sa musí rovnať %{count}",
        "even": "musí byť párne číslo",
        "exclusion": "je vyhradené pre iný účel",
        "greater_than": "musí byť väčšie ako %{count}",
        "greater_than_or_equal_to": "musí byť väčšie alebo rovné %{count}",
        "inclusion": "nie je v zozname povolených hodnôt",
        "invalid": "nie je platná hodnota",
        "less_than": "musí byť menšie ako %{count}",
        "less_than_or_equal_to": "musí byť menšie alebo rovné %{count}",
        "not_a_number": "nie je číslo",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "musí byť nepárne číslo",
        "record_invalid": "Validácia neúspešná: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "už je obsadené",
        "too_long": "je príliš dlhá/ý (max. %{count} znakov)",
        "too_short": "je príliš krátky/a (min. %{count} znakov)",
        "wrong_length": "nemá správnu dĺžku (očakáva sa %{count} znakov)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "nemôže byt prázdne keď je zadané heslo"
            },
            "privacy_policy": {
              "accepted": "musí byť akceptované"
            },
            "terms": {
              "accepted": "musí byť akceptované"
            }
          }
        },
        "user_session": {
          "email": "Emailová adresa",
          "password": "Heslo",
          "remember_me": "Ostať prihlásený"
        }
      },
      "template": {
        "body": "Nasledujúce polia obsahujú chybne vyplnené údaje:",
        "header": {
          "one": "Pri ukladaní objektu %{model} došlo k chybám a nebolo ho možné uložiť",
          "other": "Pri ukladaní objektu %{model} došlo k %{count} chybám a nebolo ho možné uložiť"
        }
      }
    },
    "models": {
      "user": "Užívateľ"
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
      "notice": "Už ste prihlásený..."
    },
    "require_user": {
      "notice": "Musíte byť prihlásený aby ste videli túto stránku."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Pridať nové miesto",
      "edit": "Upraviť miesto"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "zavrieť",
    "skip": "preskočiť"
  },
  "date": {
    "abbr_day_names": [
      "Ne",
      "Po",
      "Ut",
      "St",
      "Št",
      "Pi",
      "So"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Máj",
      "Jún",
      "Júl",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Nedeľa",
      "Pondelok",
      "Utorok",
      "Streda",
      "Štvrtok",
      "Piatok",
      "Sobota"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d. %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Január",
      "Február",
      "Marec",
      "Apríl",
      "Máj",
      "Jún",
      "Júl",
      "August",
      "September",
      "Október",
      "November",
      "December"
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
        "one": "asi hodinou",
        "other": "asi %{count} hodinami"
      },
      "about_x_months": {
        "one": "asi mesiacom",
        "other": "asi %{count} mesiacmi"
      },
      "about_x_years": {
        "one": "asi rokom",
        "other": "asi %{count} rokmi"
      },
      "almost_x_years": {
        "one": "takmer pred rokom",
        "other": "takmer pred %{count} rokmi"
      },
      "half_a_minute": "pol minútou",
      "less_than_x_minutes": {
        "one": "pred necelou minútou",
        "other": "pred ani nie %{count} minútami"
      },
      "less_than_x_seconds": {
        "one": "asi pred sekundou",
        "other": "asi pred %{count} sekundami"
      },
      "over_x_years": {
        "one": "pred viac ako rokom",
        "other": "viac ako %{count} rokmi"
      },
      "x_days": {
        "one": "24 hodinami",
        "other": "%{count} dňami"
      },
      "x_minutes": {
        "one": "minútou",
        "other": "%{count} minútami"
      },
      "x_months": {
        "one": "mesiacom",
        "other": "%{count} mesiacmi"
      },
      "x_seconds": {
        "one": "sekundou",
        "other": "%{count} sekundami"
      }
    },
    "prompts": {
      "day": "Deň",
      "hour": "Hodina",
      "minute": "Minúta",
      "month": "Mesiac",
      "second": "Sekunda",
      "year": "Rok"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Váš účet bol úspešne overený.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "O niekoľko minút obdržíte email s inštrukciami ako potvrdiť vašu emailovú adresu.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Ste si istý?",
      "headline": "Delete account",
      "link": "Zmazať"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Súčasné heslo <i>(potrebujeme overiť vaše zmeny)</i>",
          "email": "Email",
          "password": "Heslo <i>(Ak ho nechcete meniť nechajte prázdne)</i>",
          "password_confirmation": "Znovu zadajte heslo"
        },
        "submit": "Uložiť zmeny"
      },
      "headline": "Zmeniť účet"
    },
    "failure": {
      "already_authenticated": "Už ste prihláseny.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Nesprávny email alebo heslo.",
      "invalid_token": "Nesprávny overovací symbol.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Váš účet je  uzamknutý.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Musíte sa zaregistrovať alebo odhlásiť, potom možete pokračovať.",
      "unconfirmed": "Musíte potvrdiť svoj účet, potom možete pokračovať."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Potvrdzovacie inštrukcie."
      },
      "reset_password_instructions": {
        "subject": "Inštrukcie na obnovu hesla."
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Povinné",
    "omniauth_callbacks": {
      "failure": "Nie je možné vás autorizovať z %{kind}, pretože %{reason}.",
      "permission_missing": "You did not grant the required permission.",
      "success": "Úspešná autorizácia z účtu %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Obnoviť heslo"
      },
      "headline": "Zabudli ste heslo?"
    },
    "password_reset": {
      "email": {
        "comment": "Ak ste nežiadali o obnovenie hesla tak tento email ignorujte.<br/>Vaše heslo bude zmenené len ak kliknete na odkaz hore a nastavíte si heslo nové.",
        "headline": "Vitajte %{email}",
        "link": "Zmeniť heslo",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nové heslo",
          "password_confirmation": "Zopakujte heslo"
        },
        "submit": "Obnoviť heslo"
      },
      "headline": "Obnoviť heslo"
    },
    "passwords": {
      "link": "Zabudli ste heslo?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Vaše heslo bolo úspešne zmenené. Teraz ste prihláseny.",
      "updated_not_active": "Vaše heslo bolo úspešne zmenené."
    },
    "registrations": {
      "destroyed": "Dovidenia! Váš účet bol úspešne zrušený. Dúfame, že sa čoskoro opäť uvidíme.",
      "inactive_signed_up": "Úspešne ste si vytvorili účet, ale nepodarilo sa nám prihlásiť vás. Dôvod: \"%{reason}\"",
      "link": "Vytvoriť účet",
      "reasons": {
        "inactive": "neaktívne",
        "locked": "zamknuté",
        "unconfirmed": "nepotvrdené"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Úspešne ste si aktualizovali účet."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Nesprávny email alebo heslo.",
      "invalid_token": "Neplatný autentifikačný identifikátor",
      "link": "Prihlásiť sa",
      "locked": "Váš účet je uzamknutý",
      "new": {
        "no_osm_account": "Nemáte účet u OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Ďakujeme za vašu podporu!",
        "sign_in_with": "Prihláste sa pomocou %{kind}",
        "sign_up_with_osm": "Registrujte sa.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Prihlásenie úspešné.",
      "signed_out": "Odhlásenie úspešné.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Než budete môcť pokračovať musíte sa prihlásiť alebo si vytvoriť účet",
      "unconfirmed": "Než budete môcť pokračovať musíte potvrdiť svoj účet."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Heslo",
          "remember_me": "Ostať prihlásený?"
        },
        "submit": "Prihlásiť sa"
      },
      "headline": "Prihlásiť sa"
    },
    "sign_out": {
      "headline": "Odhlásiť sa"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Potvrdiť svoj účet",
        "please_confirm": "Váš účet potvrdíte nasledujúcim odkazom:",
        "welcome": "Vitajte %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Heslo",
          "password_confirmation": "Znovu zadajte heslo",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Vytvoriť účet"
      },
      "headline": "Vytvoriť účet"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Váš účet bol úspešne odomknutý. Teraz ste prihláseny"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "bol už potvrdený, skúste sa prihlásiť",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nebolo potvrdené",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "sa musí rovnať %{count}",
      "even": "must be an even number",
      "exclusion": "je vyhradené pre iný účel",
      "expired": "expiroval, prosím, vyžiadajte si nový",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "musí byť väčšie ako %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "nie je v zozname povolených hodnôt",
      "invalid": "nie je platná hodnota",
      "less_than": "musí byť menšie ako %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nie je číslo",
      "not_an_integer": "musí byť celé číslo",
      "not_found": "nenájdeny",
      "not_locked": "nebol uzamknutý",
      "not_saved": {
        "few": "%{count} chyby zabránili uloženiu %{resource}:",
        "one": "%{count} chyba zabránila uloženiu %{resource}:",
        "other": "%{count} chýb zabránilo uloženiu %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "ste už použili",
      "too_long": "je príliš dlhá/ý (max. %{count} znakov)",
      "too_short": "je príliš krátky/a (min. %{count} znakov)",
      "wrong_length": "nemá správnu dĺžku (očakáva sa %{count} znakov)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Nasledujúce polia obsahujú chybne vyplnené údaje:",
      "header": {
        "few": "%{count} chyby zabránili uloženiu %{model}:",
        "one": "%{count} chyba zabránila uloženiu %{model}:",
        "other": "%{count} chýb zabránilo uloženiu %{model}:"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Sami môžete kedykoľvek zmeniť označenie miesta. Jednoducho vyberte správne označenie a dajte \"Uložiť\" - hotovo!",
      "1": "Ako prihlásený užívateľ môžete pridávať/opravovať všetky detaily miesta. Kliknite na \"Zmeniť\" a opravte alebo pridajte informácie.",
      "2": "Môžete pridať aj ďalšie informácie (napríklad: \"Majú tu mobilnú rampu\") v komentároch. Kliknite na \"Zmeniť\" a \"Pridať komentár\"."
    },
    "headline": "Je s týmto miestom nejaký problém?",
    "questions": {
      "0": "Označenie je nesprávne.",
      "1": "Údaje o mieste sú nesprávne alebo chýbajú.",
      "2": "Mám o tomto mieste viac informácií."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "Úspešné vytvorenie - %{resource_name}"
      },
      "destroy": {
        "alert": "%{resource_name} sa nepodarilo odstrániť",
        "notice": "%{resource_name} už neexistuje\n"
      },
      "update": {
        "notice": "Úspešne ste zmenili %{resource_name}"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Obrázok bol úspešne zmazaný"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Prístupné pre vozíčkarov",
    "show_limited_accessible_places": "Čiastočne prístupné pre invalidné vozíky",
    "show_places_without_status": "Neznámy stav",
    "show_unaccessible_places": "Bez bezbariérového prístupu"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Pohnite značkou na mape aby ste opravili polohu",
      "osm_username": "Nie ste ešte členom? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Vytvorte si účet na OpenStreetMap</a>",
      "password": "(nechajte prázdne ak nechcete zmeniť)",
      "phone": "For example: +49 30 12345678",
      "website": "Napríklad: http://www.example.com"
    },
    "labels": {
      "category": "Kategória:",
      "centralkey": "Spoločný kľúč:",
      "city": "Mesto:",
      "create": "Create a place",
      "email": "E-mail",
      "finish": "Dokončiť",
      "housenumber": "Číslo:",
      "lat": "Zemepisná šírka",
      "lon": "Zemepisná dĺžka",
      "name": "Meno:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Heslo",
      "password_confirmation": "Zopakujte heslo",
      "phone": "Telefón:",
      "postcode": "Smerovacie číslo:",
      "privacy_policy": "Súhlasím s paragrafmi 1 a 2 súhlasu o spracovaní osobných údajov.",
      "reset": "Obnoviť",
      "save": "Uložiť",
      "street": "Ulica:",
      "terms": "Súhlasím s podmienkami použitia.",
      "type": "Typ:",
      "website": "Stránka:",
      "wheelchair": "Prístupnosť pre vozíčkarov?",
      "wheelchair_description": "Poznámka k prístupnosti:",
      "wheelchair_toilet": "Toaleta prístupná pre vozíčkarov:"
    },
    "titles": {
      "basic": "Základné údaje",
      "optional": "Ďalšie informácie <span class=\"addition\">(všetky položky sú voliteľné)</span>"
    }
  },
  "global": {
    "form_validation_error": "Došlo k následujúcim chybám"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Domovská stránka",
      "keywords": "miesta prístupné pre vozíčkarov hľadať označovať",
      "search": "Hľadať",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "O Wheelmap",
      "blog": "Novinky",
      "choose_language": "Zvoľte jazyk",
      "contact": "Kontakt",
      "feedback": "Spätná väzba",
      "home": "Štart",
      "how_to_add_a_place": "Ako pridám miesta?",
      "imprint": "Impresum",
      "logged_in_as": "Prihlásený ako:",
      "login": "Prihlásiť sa",
      "logout": "Odhlásiť sa",
      "map": "Mapa",
      "newsletter": "Spravodaj",
      "press": "Tlač",
      "profile": "Profil",
      "projects": "Zapojte sa",
      "suggestions": "Návrhy",
      "what_is_barrier_free": "Čo to znamená \"prístupné pre vozíčkarov\"?",
      "what_is_wheelmap": "Čo to je Wheelmap?"
    },
    "searchbar": {
      "add_place": "Pridať ďalšie",
      "find": "Nájsť",
      "placeholder": "Hľadajte miesta",
      "title_add_place": "Pridajte sem nové miesto!"
    },
    "tagline": "Logo Wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategórie"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Zobrazujem %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> z celkovo <b>%{total}</b>"
      },
      "one_page": {
        "display_entries": {
          "few": "Zobrazujem <b>%{count}</b> %{entry_name}",
          "one": "Zobrazujem <b>%{count}</b> %{entry_name}",
          "other": "Zobrazujem <b>%{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Prosím vyberte si"
    },
    "submit": {
      "create": "Vytvoriť %{model}",
      "submit": "Uložiť %{model}",
      "update": "Aktualizovať %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Vyberte kategóriu",
        "deselect_all": "Skryť všetko",
        "select_all": "Zobraziť všetko",
        "wheelchair": "Prístupné pre vozíčkarov?"
      },
      "ie": {
        "action": {
          "ignore": "Ingnorovať",
          "upgrade": "Aktualizovať prehliadač"
        },
        "warning": {
          "headline": "Ospravedlňujeme sa!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Pridať nové miesto"
        }
      },
      "overlay": {
        "button": "Dobre, poďme na to!",
        "categories": "Filtrovať miesta podľa kategórií",
        "filter": "Filtrovať miesta podľa prístupnosti",
        "headline": "Označujte a hľadajte miesta prístupné pre vozíčkarov na Wheelmap.org - na celom svete a zadarmo. Je to jednoduché:",
        "lookup": "Hľadať konkrétne miesto",
        "secondary_headline": "Náš semaforový systém na označenie prístupnosti verejných objektov pre vozíčkarov:"
      },
      "popup": {
        "form": {
          "limited": "Čiastočne prístupné pre invalidné vozíky",
          "no": "Bez bezbariérového prístupu",
          "save": "Aktualizovať",
          "unknown": "Neznámy stav",
          "yes": "Prístupné"
        },
        "help": "Prístupné pre vozíčkarov? (Pomoc)",
        "more": "viac ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Ako?",
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
          "headline": "Všetky %{type} v meste %{city} s neznámou dostupnosťou pre vozíčkarov (%{count})\n"
        },
        "yes": {
          "headline": "Všetky %{type} prístupné pre vozíčkarov v %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Projekt od Sozialhelden.de"
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
      "city": "%{postcode} %{city}",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "Telefón:",
      "website": "Stránka:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ajaj, vaše zadanie bolo buď nesprávne alebo neúplné",
        "successfull": "Ďakujeme, váš príspevok bol uložený a čoskoro bude zobrazený na mape."
      }
    },
    "edit": {
      "header": {
        "title": "Upraviť miesto: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Zrušiť"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Prihlásenie bolo neúspešné",
      "not_available": "Ospravedlňujeme sa, táto stránka je dočasne nedostupná.",
      "not_existent": "Prepáčte, ale toto miesto už nie je dostupné.",
      "not_found": "Prepáčte, stránka sa nenašla.",
      "param_missing": "Prosím zadajte hľadaný výraz"
    },
    "flash": {
      "authorize_wheelmap": "Aby ste mohli meniť údaje potrebujete OpenStreetMsp účet"
    },
    "new": {
      "form": {
        "legend": "Poloha objektu",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Prístupnosť pre vozíčkarov",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Adresa",
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
            "name": "Podobné miesta",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Nové miesto | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Zrušiť"
      }
    },
    "node": {
      "link": {
        "claim": "Pracujete tu?",
        "edit_node": "Zmeniť miesto",
        "report_bug": "Nahláste problém"
      }
    },
    "node_data": {
      "address": "Adresa:",
      "contact_details": "Kontaktné údaje:"
    },
    "node_edit": {
      "details": "Detaily",
      "edit": "Zmeniť"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Komentár:"
    },
    "node_photos": {
      "add": "Pridať",
      "photos_of_this_place": "Fotky tohto miesta:",
      "upload": "Nahrať"
    },
    "node_similar": {
      "similar": "Podobné miesta: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Toaleta prístupná pre vozíčkarov:",
      "premium": "%{name} hovorí: toto miesto je",
      "wheelchair_accessibility": "Prístupnosť na vozíčku:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Zistite či je toto miesto prístupné pre vozíčkarov na Wheelmap.org. Alebo pridajte k miestu ďalšie informácie a fotky.",
          "title": "Toto miesto je na Wheelmap.org: ${name}"
        },
        "title": "Miesto: %{node} | wheelmap.org"
      },
      "link": {
        "back": "späť",
        "large_map": "Zväčšiť",
        "listing": "Všetky miesta typu  '%{type}' v %{city}",
        "upload": "Nahrať obrázok"
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
        "not_successfull": "Zadali ste neúplné alebo nesprávne údaje",
        "successfull": "Ďakujeme. Váš príspevok bol uložený a čoskoro bude online."
      }
    },
    "update_wheelchair": {
      "successfull": "Stav pre \"%{name}\" sa zmenil na \"%{status}\" a čoskoro bude prihlásený."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "€"
      }
    },
    "format": {
      "delimiter": " ",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miliarda",
          "million": "Milión",
          "quadrillion": "Biliarda",
          "thousand": "Tisíc",
          "trillion": "Bilión",
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
            "few": "Bajty",
            "one": "Bajt",
            "other": "Bajtov"
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
  "or": "alebo",
  "place": {
    "few": "%{count} miesta",
    "one": "%{count} miesto",
    "other": "%{count} miest"
  },
  "poi": {
    "category": {
      "accommodation": "Ubytovanie",
      "education": "Vzdelávanie",
      "food": "Jedlo",
      "government": "Vláda",
      "health": "Zdravie",
      "leisure": "Voľný čas",
      "misc": "Rôzne",
      "money_post": "Banka / pošta",
      "public_transfer": "Verejná doprava",
      "shopping": "Nákupy",
      "sport": "Šport",
      "tourism": "Cestovanie",
      "unknown": "Neznáme"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Plážový hotel",
        "bed_and_breakfast": "Nocľah s raňajkami",
        "camp_site": "Kemping",
        "caravan_site": "Autokemping pre obytné prívesy",
        "chalet": "Horská chata",
        "dormitory": "Internát",
        "guest_house": "Penzión",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Vysoká škola",
        "driving_school": "Autoškola",
        "kindergarten": "Škôlka",
        "library": "Knižnica",
        "museum": "Múzeum",
        "school": "Škola",
        "university": "Univerzita"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Záhradka",
        "cafe": "Kaviareň",
        "drinking_water": "Pitná voda",
        "fast_food": "Rýchle občerstvenie",
        "ice_cream": "Zmrzlina",
        "pub": "Krčma",
        "restaurant": "Reštaurácia"
      },
      "government": {
        "courthouse": "Budova súdu",
        "embassy": "Veľvyslanectvo",
        "employment_agency": "Pracovná agentúra",
        "government": "Vládna agentúra",
        "police": "Polícia",
        "public_building": "Verejná budova",
        "townhall": "Mestský úrad"
      },
      "health": {
        "alternative": "Praktik alternatívnej medicíny",
        "dentist": "Zubár",
        "doctors": "Lekár",
        "hearing_aids": "Dodavateľ načúvacích prístrojov",
        "hospital": "Nemocnica",
        "medical_supply": "Medicínske vybavenie",
        "occupational_therapist": "Činnostný terapeut",
        "pharmacy": "Lekáreň",
        "physiotherapist": "Fyzioterapeut",
        "psychotherapist": "Psychoterapeut",
        "social_facility": "Spoločenské zázemie",
        "speech_therapist": "Logopéd",
        "veterinary": "Veterinár"
      },
      "leisure": {
        "arena": "Štadión",
        "brothel": "Nevestinec",
        "casino": "Kasíno",
        "cinema": "Kino",
        "community_centre": "Komunitné centrum",
        "gallery": "Galéria",
        "massage": "Masážny salón",
        "nightclub": "Nočný klub",
        "playground": "Ihrisko",
        "sauna": "Sauna",
        "stripclub": "Strip club",
        "tattoo": "Tetovacie štúdio",
        "theatre": "Divadlo",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Združenie",
        "company": "Spoločnosť (kancelárie)",
        "estate_agent": "Realitná kancelária",
        "insurance": "Poistenie",
        "lawyer": "Právnik",
        "ngo": "Mimovládna organizácia",
        "place_of_worship": "Svätyňa",
        "political_party": "Centrála politickej strany",
        "toilets": "Toalety"
      },
      "money_post": {
        "atm": "Bankomat",
        "bank": "Banka",
        "bureau_de_change": "Zmenáreň",
        "post_box": "Poštovná schránka",
        "post_office": "Pošta"
      },
      "public_transfer": {
        "aerodrome": "Letisko",
        "bicycle_parking": "Stojan na bicykle",
        "bicycle_rental": "Požičovňa bicyklov",
        "boatyard": "Doky",
        "bus_station": "Autobusová stanica",
        "bus_stop": "Zastávka autobusu",
        "cable_car": "Lanovka",
        "car_rental": "Požičovňa automobilov",
        "car_sharing": "Zdieľanie automobilov",
        "chair_lift": "Sedačková lanovka",
        "ferry": "Trajekt",
        "ferry_terminal": "Nástupište na trajekt",
        "fuel": "Benzínová pumpa",
        "halt": "Zastávka",
        "light_rail": "Rýchlodrážna električka",
        "parking": "Parkovanie",
        "parking_aisle": "Parkovacia ulička",
        "platform": "Nástupište",
        "station": "Stanica",
        "subway_entrance": "Vchod do metra",
        "terminal": "Letiskový terminál",
        "tram_stop": "Zastávka električky"
      },
      "shopping": {
        "alcohol": "Alkohol",
        "antiques": "Starožitníctvo",
        "art": "Predajňa umeleckých diel",
        "bakery": "Pekáreň",
        "beauty": "Salón krásy",
        "beverages": "Nápoje",
        "bicycle": "Bicykle",
        "books": "Knihy",
        "butcher": "Mäsiarstvo",
        "car_repair": "Autoservis",
        "car_shop": "Automobily",
        "chemist": "Lekáreň",
        "clothes": "Oblečenie",
        "computer": "Počítače",
        "confectionery": "Cukráreň",
        "convenience": "Príslušenstvo",
        "copyshop": "Tlačiarenské služby",
        "deli": "Delikatesy",
        "department_store": "Obchodný dom",
        "doityourself": "Kutilské potreby",
        "dry_cleaning": "Čistiareň",
        "electronics": "Elektronika",
        "erotic": "Sexshop",
        "fabric": "Textil",
        "farm_shop": "Farmársky obchod",
        "florist": "Kvetinárstvo",
        "funeral_directors": "Dom smútku",
        "furniture": "Nábytok",
        "garden_centre": "Záhradkárske centrum",
        "gift": "Suveníry",
        "greengrocer": "Tržnica",
        "hairdresser": "Kaderníctvo",
        "hardware": "Železiarstvo",
        "interior_decoration": "Interiérové štúdio",
        "jewelry": "Klenotníctvo",
        "kiosk": "Stánok",
        "laundry": "Prádelňa",
        "mall": "Nákupné stredisko",
        "mobile_phone": "Predajňa mobilných telefónov",
        "music": "Predajňa platní",
        "musical_instrument": "Hudobniny",
        "newsagent": "Trafika",
        "optician": "Optik",
        "organic": "Organické výrobky",
        "outdoor": "Outdoorové vybavenie",
        "pet": "Zverimex",
        "photo": "Fotky",
        "second_hand": "Second hand",
        "shoes": "Topánky",
        "sports": "Šport",
        "stationery": "Papiernictvo",
        "supermarket": "Supermarket",
        "tailor": "Krajčír",
        "tea": "Predajňa čajov",
        "tobacco": "Fajčiarske potreby",
        "toys": "Hračky",
        "travel_agency": "Cestovná kancelária",
        "variety_store": "Diskontná predajňa",
        "video": "Videopožičovňa"
      },
      "sport": {
        "pitch": "Ihrisko",
        "sports_centre": "Športové centrum",
        "stadium": "Štadión",
        "swimming": "Plávanie",
        "swimming_pool": "Plavecký bazén"
      },
      "tourism": {
        "archaeological_site": "Archeologické nálezisko",
        "arts_centre": "Kultúrne centrum",
        "artwork": "Umenie",
        "attraction": "Atrakcia",
        "battlefield": "Bojisko",
        "beach": "Pláž",
        "beacon": "Maják",
        "castle": "Hrad",
        "cave_entrance": "Vstup do jaskyne",
        "information": "Informácie pre turistov",
        "memorial": "Pamätník",
        "theme_park": "Zábavný park",
        "tower": "Veža",
        "viewpoint": "Výhľad"
      },
      "unknown": {
        "unknown": "Neznáme"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Stav: pripojený",
          "grant": "Spojiť",
          "not_connected": "Stav: Nepripojený",
          "revoke": "Odpojiť"
        }
      },
      "headline": "Upravte svoj účet"
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
        "headline": "Prepáčte ale nenašli sme miesto s názvom \"%{query}\".",
        "hint": {
          "example": "<strong>Príklad:</strong> London, United Kingdom",
          "info": "Naše vyhľadávanie funguje len s názvom a/alebo s adresou. Preto prosím keď niečo hľadáte tak zadajte buď názov alebo adresu tohoto miesta. Vyhľadávanie podľa typu miesta napr. reštaurácia alebo kino nefunguje.",
          "work_in_progress": "Usilovne pracujeme na tom aby bolo vyhľadávanie miest v budúcnosti ešte jednoduchšie a intuitívnejšie."
        },
        "try_this": {
          "address": "Prosím zadajte <strong>konkrétnejšiu adresu</strong>.",
          "intro": "Skúste toto:",
          "spell_check": "Skontrolujte či ste text zadali správne."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "Vyhľadávanie pre \"%{q}\"",
        "not_found": "Nepodarilo sa nájsť žiadne miesta!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Naše vyhľadávanie bolo dočasne nedostupné.",
      "repeat_search": "Hľadať znova"
    }
  },
  "splash": {
    "countline": "%{count} miest už je označených.",
    "headline": "Každý môže pridávať miesta prístupné pre vozíčkarov!",
    "start": "Štart",
    "step1": "Kliknite na miesto ktoré poznáte",
    "step2": "Označte to a dajte uložiť",
    "step3": "A je to! Registráciu nie je potreba",
    "what_is_wheelmap": "Čo to je Wheelmap?"
  },
  "statistics": "Štatistiky",
  "support": {
    "array": {
      "last_word_connector": " a ",
      "sentence_connector": "a",
      "two_words_connector": " a ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Prosím vyberte"
    }
  },
  "time": {
    "am": "dopoludnia",
    "formats": {
      "default": "%a %d. %B %Y %H:%M %z",
      "long": "%A %d. %B %Y %H:%M",
      "short": "%d.%m. %H:%M"
    },
    "pm": "popoludní"
  },
  "toiletstatus": {
    "no": "Toaleta neprístupná pre invalidné vozíky",
    "unknown": "Stav WC neznámy",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Toaleta prístupná pre invalidné vozíky"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Váš účet bol aktivovaný!"
      },
      "error": {
        "notice": "Email a heslo sa nezhodujú."
      },
      "notice": "Úspech!"
    },
    "destroy": {
      "notice": "Dovidenia, zase sa vráťte. "
    },
    "new": {
      "email": "Email address",
      "login": "Prihlásiť sa",
      "login_with_twitter": "Prihláste sa cez Twitter",
      "password": "Heslo",
      "remember_me": "Ostať prihlásený"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Ako vás môžeme kontaktovať? Tieto údaje môžete kedykoľvek zmeniť na svojom profile."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Vaše obrázky"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Spravodaj"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Fotky"
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
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://news.wheelmap.org/en/\">Blog</a> or <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
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
          "settings": "Nastavenia"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Prvá",
      "last": "Posledná &raquo;",
      "next": "Ďalej &rsaquo;",
      "previous": "&lsaquo; Späť",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Čiastočne prístupné pre invalidné vozíky",
    "no": "Bez bezbariérového prístupu",
    "unknown": "Neznámy stav",
    "yes": "Prístupné"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Projekt od",
      "based_on": "Založené na",
      "become_a_supporter": "Podporte nás",
      "main_supporter": "Hlavný podporovateľ"
    },
    "itunes": {
      "alt": "Logo AppStore",
      "title": "Stiahnite si aplikáciu pre iPhone!"
    },
    "logo": {
      "alt": "Logo Wheelmap - nájdite miesta prístupné vozíčkarom",
      "title": "Wheelmap - nájdite miesta prístupné pre vozíčkarov"
    },
    "what_is": {
      "fully_accessible": "Vchod bez schodov, všetky izby bez chodov.",
      "limited_accessible": "Vchod s jedným schodom s max. výškou 7 cm (3 palce), väčšina izieb je bez schodov.",
      "not_accessible": "Vchod s jedným alebo niekoľkými schodmi, izby nie sú prístupné.",
      "unknown_accessible": "Pomôžte nám označovaním miest!"
    }
  },
  "will_paginate": {
    "next_label": "Ďalej &#8594;",
    "page_entries_info": {
      "multi_page": "Zobrazujem %{model} %{from} - %{to} z celkového počtu %{count}",
      "multi_page_html": "Zobrazujem %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> z celkového počtu <b>%{count}</b>\n",
      "single_page": {
        "one": "Zobrazujem 1 %{model}",
        "other": "Zobrazujem všetkých %{count} %{model}",
        "zero": "%{model} nebol nájdený"
      },
      "single_page_html": {
        "one": "Zobrazujem <b>1</b> %{model}",
        "other": "Zobrazené <b>všetkých&nbsp;%{count}</b> %{model}",
        "zero": "%{model} sa nenašlo\n"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Predchádzajúci"
  }
});
