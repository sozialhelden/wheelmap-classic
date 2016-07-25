I18n.translations || (I18n.translations = {});
I18n.translations["ca"] = I18n.extend((I18n.translations["ca"] || {}), {
  "actions": {
    "cancel": "Cancel·lar",
    "next": "",
    "save": "Desar",
    "send": "Enviar"
  },
  "active_admin": {
    "access_denied": {
      "message": "No esta autoritzat a realitzar aquesta acció."
    },
    "any": "Qualsevol",
    "batch_actions": {
      "action_label": "%{title} seleccionat",
      "button_label": "les accions per lots",
      "default_confirmation": "¿Esteu segur que voleu fer-ho?",
      "delete_confirmation": "¿Està segur que desitja eliminar aquests %{plural_model}?",
      "labels": {
        "destroy": "esborrar"
      },
      "link": "crear una",
      "selection_toggle_explanation": "(Selecció de Canviar)",
      "succesfully_destroyed": {
        "one": "Va destruir amb èxit 1 %{model}",
        "other": "Va destruir amb èxit %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Encara no hi ha cap %{resource_name}.",
      "link": "Crea'n un/a"
    },
    "cancel": "Cancel·lar",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Afegeix comentari",
      "author": "autor",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Cos",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "El comentari no es va salvar, el text estava buida."
      },
      "no_comments_yet": "No hi ha comentaris",
      "resource": "Recurs",
      "resource_type": "Resource Type",
      "title": "comentari",
      "title_content": "comentaris (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Tauler",
    "dashboard_welcome": {
      "call_to_action": "Mira l'arxiu 'app/admin/dashboard.rb' per afegir seccions al tauler",
      "welcome": "Benvingut a Active Admin. Aquest és el tauler per defecte."
    },
    "delete": "Elimina",
    "delete_confirmation": "Segur que vols eliminar-ho?",
    "delete_model": "eliminar %{model}",
    "details": "Detalls de %{model}",
    "devise": {
      "change_password": {
        "submit": "Canviar la contrasenya",
        "title": "Canvieu la contrasenya"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Heu perdut la contrasenya?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Registrar",
        "sign_in_with_omniauth_provider": "Connecta't amb %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Recordar",
        "submit": "iniciar sessió",
        "title": "iniciar sessió"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Reenviar instruccions de confirmació",
        "title": "Reenviar instruccions de confirmació"
      },
      "reset_password": {
        "submit": "Restablir la contrasenya",
        "title": "Heu perdut la contrasenya?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Reenvia instruccions per a desbloquejar",
        "title": "Reenvia instruccions per a desbloquejar"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Descarregar:",
    "dropdown_actions": {
      "button_label": "accions"
    },
    "edit": "Edita",
    "edit_model": "Editar %{model}",
    "empty": "Buit",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Treure filtres",
        "filter": "Filtrar"
      },
      "predicates": {
        "contains": "Conté",
        "ends_with": "Acaba amb",
        "equals": "Igual a",
        "greater_than": "Més gran que",
        "less_than": "Més petit que",
        "starts_with": "Comença amb"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Eliminar",
    "has_many_new": "Afegir %{model}",
    "has_many_remove": "Treure",
    "index_list": {
      "block": "Llista",
      "blog": "Bloc",
      "grid": "Graella",
      "table": "Taula"
    },
    "less_than": "Less Than",
    "logout": "Desconnecta't",
    "main_content": "Implementa %{model}#main_content per mostrar contingut.",
    "new_model": "Crear %{model}",
    "next": "Següent",
    "pagination": {
      "empty": "No hi ha %{model}",
      "entry": {
        "one": "entrada",
        "other": "entrades"
      },
      "multiple": "S'estan mostrant %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{total}</b> en total",
      "multiple_without_total": "S'estan mostrant %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "S'està mostrant <b>1</b> %{model}",
      "one_page": "S'estan mostrant <b>tots %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Anterior",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtres",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "No",
      "yes": "Sí"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Mostra"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adreça",
        "address_city": "Ciutat",
        "address_housenumber": "",
        "address_postcode": "Codi postal",
        "address_street": "Carrer",
        "name": "Nom",
        "note": "Nota",
        "phone": "Telèfon",
        "type": "Tipus",
        "website": "Pàgina web"
      },
      "user": {
        "first_name": "Nom de pila",
        "last_name": "Cognom",
        "privacy_policy": "Política de privacitat",
        "terms": "Termes"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "cal que s'accepti",
        "blank": "No pot estar en blanc",
        "confirmation": "doesn't match confirmation",
        "empty": "no pot estar buit",
        "equal_to": "ha de ser igual a %{count}",
        "even": "ha de ser parell",
        "exclusion": "està reservat",
        "greater_than": "ha de ser més gran que %{count}",
        "greater_than_or_equal_to": "ha de ser més gran o igual que %{count}",
        "inclusion": "no està inclòs a la llista",
        "invalid": "no és vàlid",
        "less_than": "ha de ser més petit que %{count}",
        "less_than_or_equal_to": "ha de ser més petit o igual a %{count}",
        "not_a_number": "no és un nombre",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "ha de ser senar",
        "record_invalid": "Error de validació: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "ja s'ha fet",
        "too_long": "és massa llarg (el màxim és de %{count} caràcters)",
        "too_short": "és massa curt (el mínim són %{count} caràcters)",
        "wrong_length": "és una llargària incorrecte (hauria de ser de %{count} caràcters)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "no pot ser buit si s'ha determinat una contrasenya"
            },
            "privacy_policy": {
              "accepted": "s'ha d'acceptar"
            },
            "terms": {
              "accepted": "s'ha d'acceptar"
            }
          }
        },
        "user_session": {
          "email": "Adreça de correu electrònic",
          "password": "Contrasenya",
          "remember_me": "Stay logged in"
        }
      },
      "template": {
        "body": "Van haver-hi problemes amb els següents camps:",
        "header": {
          "one": "1 error prohibited this %{model} from being saved",
          "other": "%{count} errors prohibited this %{model} from being saved"
        }
      }
    },
    "models": {
      "user": "Usuari"
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
      "notice": "Ja heu iniciat la sessió..."
    },
    "require_user": {
      "notice": "Heu d'iniciar la sessió per veure aquesta pàgina."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Edita el lloc"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "tanca",
    "skip": "saltar"
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
      "confirmed": "El teu correu electrònic s'ha confirmat correctament.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Rebràs un correu en pocs minuts al correu electrònic que conté un enllaç de confirmació.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Estàs segur?",
      "headline": "Delete account",
      "link": "Esborrar-lo ara"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Contrasenya actual <i>(la necessitem per confirmar els canvis)</i>",
          "email": "Correu electrònic",
          "password": "Contrasenya <i>(deixa-ho en blanc si no vols canviar-la)</i>",
          "password_confirmation": "Repeteix la contrasenya"
        },
        "submit": "Desar canvis"
      },
      "headline": "Editar compte"
    },
    "failure": {
      "already_authenticated": "Ja has entrat.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Correu electrònic o contrasenya no vàlid",
      "invalid_token": "Ha fallat l'autenticació",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "El teu compte està bloquejat",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Necessites entrar o registrar-te abans de continuar",
      "unconfirmed": "Necessites confirmar el compte abans de continuar."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Un pas més per activar el compte"
      },
      "reset_password_instructions": {
        "subject": "Instruccions per reiniciar la contrasenya"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Es requereix",
    "omniauth_callbacks": {
      "failure": "L'autorització amb %{kind} ha fallat. Error: \"%{reason}\".\n",
      "permission_missing": "You did not grant the required permission.",
      "success": "Has entrat correctament amb %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Correu electrònic"
        },
        "submit": "Reinicia la contrasenya"
      },
      "headline": "Has oblidat la contrasenya?"
    },
    "password_reset": {
      "email": {
        "comment": "Si no has demanat un reinici de contrasenya ignora aquest missatge.<br/>La teva contrasenya no canviarà fins que no facis clic a l'enllaç de sobre i la canviïs tu.",
        "headline": "Benvingut %{email}",
        "link": "Canviar contrasenya",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Contrasenya nova",
          "password_confirmation": "Repeteix la contrasenya"
        },
        "submit": "Reinicia la contrasenya"
      },
      "headline": "Reinicia la contrasenya"
    },
    "passwords": {
      "link": "Has oblidat la contrasenya?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "La teva contrasenya s'ha canviat correctament i ara has entrat",
      "updated_not_active": "La teva contrasenya s'ha canviat correctament"
    },
    "registrations": {
      "destroyed": "Adéu. El compte s'ha cancel·lat correctament.Esperem tornar-te a veure aviat.",
      "inactive_signed_up": "T'has registrat correctament però no pots entrar. Motiu: \"%{reason}\"",
      "link": "Registra't",
      "reasons": {
        "inactive": "inactiu",
        "locked": "bloquejat",
        "unconfirmed": "no confirmat"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Has actualitzat el teu compte correctament."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Correu electrònic o contrasenya no vàlida",
      "invalid_token": "Ha fallat l'autenticació",
      "link": "Entra",
      "locked": "El teu compte està bloquejat",
      "new": {
        "no_osm_account": "No tens compte a OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Moltes gràcies pel teu suport.",
        "sign_in_with": "Entra amb %{kind}",
        "sign_up_with_osm": "Registra't ara",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Has entrat correctament",
      "signed_out": "Has sortit correctament",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Necessites entrar o registrar-te abans de continuar",
      "unconfirmed": "Necessites confirmar el compte abans de continuar."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Correu electrònic",
          "password": "Contrasenya",
          "remember_me": "Continua dins"
        },
        "submit": "Entrar"
      },
      "headline": "Entrar"
    },
    "sign_out": {
      "headline": "Sortir"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirmar el meu compte",
        "please_confirm": "Pots confirmar el compte a través del següent enllaç:",
        "welcome": "Benvingut %{email}!"
      },
      "form": {
        "labels": {
          "email": "Correu electrònic",
          "password": "Contrasenya",
          "password_confirmation": "Repeteix la contrasenya",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Registra't"
      },
      "headline": "Registra't"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "El compte ha estat desbloquejat correctament. Ara has entrat."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "ja s'ha confirmat",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "la confirmació no concorda",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "ha de ser exactament %{count}",
      "even": "must be an even number",
      "exclusion": "està reservat",
      "expired": "expirat, demana'n un de nou",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "ha de ser més gran que %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "no és un valor vàlid",
      "invalid": "no vàlid",
      "less_than": "ha de ser més petit que %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "no és un nombre",
      "not_an_integer": "ha de ser un nombre enter",
      "not_found": "no s'ha trobat",
      "not_locked": "no s'ha bloquejat",
      "not_saved": {
        "one": "Un error ha impedit desar %{resource}:",
        "other": "%{count} errors han impedit desar %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "ja s'ha fet",
      "too_long": "és massa llarg (no pot superar els %{count} caràcters)",
      "too_short": "és massa curt (no pot tenir menys de %{count} caràcters)",
      "wrong_length": "és de llargada no correcta (ha de tenir %{count} caràcters)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "L'adreça web no és vàlida"
        }
      }
    },
    "template": {
      "body": "Va haver-hi problemes amb els següents camps:",
      "header": {
        "one": "1 error ha impedit desar aquest %{model}",
        "other": "%{count} errors han impedit desar aquest %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Pots canviar el marcador d'un lloc tu mateix. Només cal que triïs el lloc correcte i \"Desis\"- fet!",
      "1": "Com a usuari pots afegir/corregir detalls d'un lloc. Clica a \"Editar\" i corregeix-lo o afegeix informació al lloc.",
      "2": "Pots afegir més informació (ex:\" Aquest lloc té rampa mòbil\") a la secció de comentaris.Clica a \"Editar\" i \"Afegir comentari\"."
    },
    "headline": "Hi ha un problema amb aquest lloc?",
    "questions": {
      "0": "El marcador és erroni.",
      "1": "Els detalls del lloc són incorrectes o falten.",
      "2": "Tinc molta informació del lloc."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} s'ha creat correctament"
      },
      "destroy": {
        "alert": "%{resource_name} no ha pogut ser eliminat",
        "notice": "%{resource_name} s'ha eliminat correctament\n"
      },
      "update": {
        "notice": "%{resource_name} s'ha actualitzat correctament"
      }
    },
    "photos": {
      "destroy": {
        "notice": "La imatge s'ha eliminat correctament"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "accessible amb cadira de rodes",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "No accessible amb cadira de rodes"
  },
  "formtastic": {
    "cancel": "Cancel·lar",
    "create": "Crear %{model}",
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Mou el marcador del mapa a la posició correcta",
      "osm_username": "Encara no en sou membre? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Creeu-vos ara un compte a OpenStreetMap</a>",
      "password": "(deixeu-ho en blanc si no voleu canviar-la)",
      "phone": "Per exemple: +493012345678",
      "website": "Per exemple: http://www.exemple.cat"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Clau central:",
      "city": "Ciutat:",
      "create": "Create a place",
      "email": "Correu electrònic",
      "finish": "Finalitza",
      "housenumber": "Núm:",
      "lat": "Latitud",
      "lon": "Longitud",
      "name": "Nom:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Contrasenya",
      "password_confirmation": "Repeteix la contrasenya",
      "phone": "Telèfon:",
      "postcode": "Codi postal:",
      "privacy_policy": "Accepto els paràgrafs 1 i 2 sobre la privacitat de dades.",
      "reset": "Reinicia",
      "save": "Desa",
      "street": "Carrer:",
      "terms": "Sí, accepto els termes d'ús.",
      "type": "Tipus:",
      "website": "Pàgina web:",
      "wheelchair": "Accessibilitat amb cadira de rodes?",
      "wheelchair_description": "Comentari de l'accessibilitat:",
      "wheelchair_toilet": "Lavabo amb accessibilitat amb cadira de rodes"
    },
    "no": "No",
    "required": "obligatori",
    "reset": "Restablir %{model}",
    "submit": "Acceptar",
    "titles": {
      "basic": "Dades bàsiques",
      "optional": "Més informació <span class=\"addition\">(tots els camps són opcionals)</span>"
    },
    "update": "Actualitzar %{model}",
    "yes": "Sí"
  },
  "global": {
    "form_validation_error": "Tingues en compte els errors llistats sota"
  },
  "header": {
    "meta": {
      "description": "",
      "homepage": "Pàgina d'inici",
      "keywords": "marca de cerca de llocs accessibles amb cadira de rodes",
      "search": "Cerca",
      "title": ""
    },
    "navigation": {
      "about_wheelmap": "Sobre Wheelmap",
      "blog": "Bloc",
      "choose_language": "Triar idioma",
      "contact": "Contactar",
      "feedback": "Comentaris",
      "home": "Inicia",
      "how_to_add_a_place": "Com podeu afegir llocs?",
      "imprint": "Impressió",
      "logged_in_as": "Sessió iniciada com a:",
      "login": "Inicieu sessió",
      "logout": "Finalitza la sessió",
      "map": "Mapa",
      "newsletter": "Butlletí",
      "press": "Prémer",
      "profile": "Perfil",
      "projects": "Projectes",
      "suggestions": "Suggerències",
      "what_is_barrier_free": "Què significa «accessible amb cadira de rodes»?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Afegeix un altre lloc",
      "find": "Cerca",
      "placeholder": "Cercar un lloc",
      "title_add_place": "Afegeix un lloc nou en aquesta posició"
    },
    "tagline": "Logotip de Wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Mostrant <b>%{first}&nbsp;-&nbsp;%{last}</b> %{entry_name} de <b>%{total}</b> en total"
      },
      "one_page": {
        "display_entries": {
          "one": "Mostrant <b>%{count}</b> %{entry_name}",
          "other": "Mostrant <b>un total de %{count}</b> %{entry_name}",
          "zero": "No s'han trobat %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "Si us plau, seleccioneu"
    },
    "submit": {
      "create": "crea %{model}",
      "submit": "desa %{model}",
      "update": "actualitza %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "",
      "filter": {
        "category": "Tria la categoria",
        "deselect_all": "Desfès la selecció",
        "select_all": "Selecciona-ho tot",
        "wheelchair": "És accessible amb cadira de rodes?"
      },
      "ie": {
        "action": {
          "ignore": "Ignora",
          "upgrade": "Actualitza el navegador"
        },
        "warning": {
          "headline": "Li demanem disculpes.",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "'Nem-hi!",
        "categories": "Filtra llocs per categories",
        "filter": "Filtrar llocs per accessibilitat per cadira de rodes",
        "headline": "Marca i troba llocs accessibles per a cadira de rodes amb Wheelmap.org - a tot el món i de franc. És fàcil:",
        "lookup": "Cercar un lloc determinat",
        "secondary_headline": "El nostre sistema de semàfors marca l'accessibilitat amb cadira de rodes de llocs públics:"
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "No accessible amb cadira de rodes",
          "save": "Actualitza",
          "unknown": "Unknown status",
          "yes": "Accessible amb cadira de rodes"
        },
        "help": "Accessible amb cadira de rodes? (ajuda)",
        "more": "més..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "Com?",
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
          "headline": "Tots els %{type} amb estat desconegut sobre l'accessibilitat amb cadira de rodes a %{city} (%{count})"
        },
        "yes": {
          "headline": "Llocs d'accessibilitat amb cadira de rodes %{type} a %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Un projecte de Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Tria la categoria"
    },
    "node": {
      "info_edit_position": "La localització apareixerà a Wheelmap com es mostra aquí sobre. Si el marcador no és al lloc correcte tu pots <a href=\"%{url}\">canviar la posició a OpenStreetMap.</a>",
      "mail": {
        "body": "(Escriu només en anglès o alemany.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problema amb %{headline}"
      }
    },
    "node_type": {
      "prompt": "Tria un tipus"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telèfon:",
      "website": "Pàgina web:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Vaja, la vostra entrada va ser incorrecta o bé incompleta",
        "successfull": "La vostra tramesa s'ha desat correctament i en breu apareixerà en línia. Moltes gràcies."
      }
    },
    "edit": {
      "header": {
        "title": "Edita el lloc: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel·la"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Ha fallat l'autenticació",
      "not_available": "Ho sentim, aquesta pàgina no està disponible temporalment.",
      "not_existent": "Aquest lloc ja no està disponible.",
      "not_found": "La pàgina no existeix",
      "param_missing": "Escriu un terme a cercar"
    },
    "flash": {
      "authorize_wheelmap": "Us cal un compte a OpenStreetMap per poder modificar dades"
    },
    "new": {
      "form": {
        "legend": "Localització del lloc",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "Adreça",
            "title": ""
          },
          "contact": {
            "name": "Contactar",
            "title": ""
          },
          "name_category": {
            "name": "",
            "title": ""
          },
          "overview": {
            "title": ""
          },
          "similar_nodes": {
            "empty": "",
            "go_edit": "",
            "go_new": "",
            "name": "",
            "title": ""
          }
        },
        "title": ""
      },
      "header": {
        "title": "Lloc nou | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel·la"
      }
    },
    "node": {
      "link": {
        "claim": "Treballeu aquí?",
        "edit_node": "Edita el lloc",
        "report_bug": "Informa d'un problema"
      }
    },
    "node_data": {
      "address": "Adreça:",
      "contact_details": "Detalls del contacte:"
    },
    "node_edit": {
      "details": "Detalls",
      "edit": "Editar"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Comentari:"
    },
    "node_photos": {
      "add": "Afegir:",
      "photos_of_this_place": "Fotos d'aquest lloc:",
      "upload": "Pujar"
    },
    "node_similar": {
      "similar": "Llocs similars: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Lavabo amb accessibilitat amb cadira de rodes",
      "premium": "%{name} diu: aquest lloc és",
      "wheelchair_accessibility": "Accessibilitat amb cadira de rodes:"
    },
    "node_streetview": {
      "streetview": "Vista de carrer"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Descobreix si aquest lloc és accessible amb cadira de rodes a Wheelmap.org. O afegeix-hi informació i fotos sobre el lloc.",
          "title": "Aquest lloc està a Wheelmap.org: %{name}"
        },
        "title": "Lloc: %{node} | wheelmap.org"
      },
      "link": {
        "back": "enrere",
        "large_map": "Ampliar",
        "listing": "Tots els llocs del tipus '%{type}' a %{city}",
        "upload": "Penja una imatge"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Correu electrònic",
        "facebook": "Facebook",
        "text": "",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Vaja, la vostra entrada va ser incorrecta o bé incompleta",
        "successfull": "Gràcies, la vostra tramesa ha estat desada correctament i en breu serà en línia."
      }
    },
    "update_wheelchair": {
      "successfull": "L'estat de «%{name}» ha canviat a «%{status}» i en breu estarà en línia."
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
          "billion": "Bilió",
          "million": "Milió",
          "quadrillion": "Quadrilió",
          "thousand": "Mil",
          "trillion": "Trilió",
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
  "or": "o",
  "place": {
    "one": "%{count} llocs",
    "other": "%{count} llocs"
  },
  "poi": {
    "category": {
      "accommodation": "Allotjament",
      "education": "Educació",
      "food": "Menjar",
      "government": "Govern",
      "health": "Salut",
      "leisure": "Oci",
      "misc": "",
      "money_post": "",
      "public_transfer": "",
      "shopping": "Botigues",
      "sport": "Esports",
      "tourism": "Turisme",
      "unknown": "Desconegut"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel de platja",
        "bed_and_breakfast": "Mitja pensió",
        "camp_site": "Zona d'acampada/Càmping",
        "caravan_site": "Zona d'acampada de caravanes",
        "chalet": "Casa rural",
        "dormitory": "Dormir",
        "guest_house": "Pensió",
        "hostel": "Hostal/alberg",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Residència",
        "driving_school": "Autoescola",
        "kindergarten": "Llar d'infants",
        "library": "Biblioteca",
        "museum": "Museu",
        "school": "Escola",
        "university": "Universitat"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Bar amb terrassa",
        "cafe": "Cafè",
        "drinking_water": "Font per beure",
        "fast_food": "Menjar ràpid",
        "ice_cream": "Gelateria",
        "pub": "Pub",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Jutjat",
        "embassy": "Ambaixada",
        "government": "Oficina governamental",
        "police": "Policia",
        "public_building": "Edifici públic",
        "townhall": ""
      },
      "health": {
        "dentist": "Dentista",
        "doctors": "",
        "hearing_aids": "Aparells auditius",
        "hospital": "Hospital",
        "medical_supply": "Subministraments mèdics",
        "pharmacy": "Farmàcia",
        "social_facility": "Serveis socials",
        "veterinary": "Veterinari"
      },
      "leisure": {
        "arena": "Estadi",
        "brothel": "Prostíbul",
        "casino": "Casino",
        "cinema": "Cinema",
        "community_centre": "",
        "gallery": "Galeria",
        "nightclub": "Discoteca",
        "playground": "Parc infantil",
        "sauna": "Sauna",
        "stripclub": "Club d'striptease",
        "theatre": "Teatre",
        "zoo": "Zoo"
      },
      "misc": {
        "company": "Companyia (oficina)",
        "estate_agent": "Immobiliària",
        "insurance": "Corredoria d'assegurances",
        "lawyer": "Despatx d'advocats",
        "place_of_worship": "Lloc de culte",
        "toilets": "Lavabos"
      },
      "money_post": {
        "atm": "Caixer automàtic",
        "bank": "Banc",
        "bureau_de_change": "Casa de canvi",
        "post_box": "Bústia",
        "post_office": "Oficina de correus"
      },
      "public_transfer": {
        "aerodrome": "Aeroport",
        "bicycle_parking": "Pàrquing de bicicletes",
        "bicycle_rental": "Lloguer de bicicletes",
        "boatyard": "",
        "bus_station": "Estació d'autobusos",
        "bus_stop": "Parada d'autobús",
        "cable_car": "Telefèric (amb cabina tancada)",
        "car_rental": "Lloguer de cotxes",
        "car_sharing": "Lloc per compartir cotxe",
        "chair_lift": "Telecadira",
        "ferry": "Ferri",
        "ferry_terminal": "Terminal de ferri",
        "fuel": "Gasolinera",
        "halt": "Baixador",
        "light_rail": "Metro lleuger",
        "parking": "Pàrquing",
        "parking_aisle": "Zona d'aparcaments",
        "platform": "Andana/marquesina",
        "station": "Estació de tren",
        "subway_entrance": "Entrada de metro",
        "terminal": "Terminal d'aeroport",
        "tram_stop": "Parada de tramvia"
      },
      "shopping": {
        "alcohol": "Licors",
        "bakery": "Forn i pastisseria",
        "beauty": "Saló de bellesa",
        "beverages": "Begudes",
        "bicycle": "Bicicletes i accessoris",
        "books": "Llibreria",
        "butcher": "Carnisseria",
        "car_repair": "Taller de cotxes",
        "car_shop": "Concessionari de cotxes",
        "chemist": "",
        "clothes": "Roba",
        "computer": "Informàtica",
        "confectionery": "Llaminadures",
        "convenience": "Queviures/petit súper",
        "deli": "Delicadeses",
        "department_store": "Gran magatzem",
        "doityourself": "Bricolatge",
        "dry_cleaning": "Tintoreria",
        "electronics": "Electrònica",
        "fabric": "Teleria",
        "farm_shop": "Productes de granja",
        "florist": "Floristeria",
        "furniture": "Mobles",
        "garden_centre": "",
        "gift": "Botiga de regals",
        "hairdresser": "Perruqueria",
        "hardware": "Ferreteria",
        "jewelry": "Joieria",
        "kiosk": "Quiosc",
        "laundry": "Bugaderia",
        "mall": "Centre comercial",
        "optician": "Òptica",
        "organic": "Botiga naturista",
        "outdoor": "Articles d'esport a l'aire lliure",
        "pet": "Botiga per mascotes",
        "photo": "Fotografia",
        "second_hand": "Segona mà",
        "shoes": "Sabateria",
        "sports": "Esports",
        "stationery": "Papereria",
        "supermarket": "Supermercat",
        "toys": "Joguines",
        "travel_agency": "Agència de viatges",
        "video": "Videoclub"
      },
      "sport": {
        "pitch": "Camp d'esports",
        "sports_centre": "Poliesportiu",
        "stadium": "Estadi",
        "swimming": "Natació",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Espai arqueològic",
        "arts_centre": "Centre d'arts",
        "artwork": "Obra d'art",
        "attraction": "Atracció turística",
        "battlefield": "Antic camp de batalla",
        "beach": "Platja",
        "beacon": "Far",
        "castle": "Castell",
        "cave_entrance": "Cova",
        "information": "Oficina de turisme",
        "memorial": "Monument",
        "theme_park": "Parc temàtic",
        "tower": "Torre",
        "viewpoint": "Vista panoràmica"
      },
      "unknown": {
        "unknown": "Desconegut"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Estat: Connectat",
          "grant": "Connecta ara",
          "not_connected": "Estat: No connectat",
          "revoke": "Desconnecta"
        }
      },
      "headline": "Editeu el vostre perfil"
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
        "headline": "No hem pogut trobar el lloc anomenat \"%{query}\".",
        "hint": {
          "example": "<strong>Exemple:</strong> Barcelona, Catalunya",
          "info": "El nostre servei de cerca només funciona amb nom i/o adreça.Per tant cerca el nom, el carrer o la població.Cercar per tipus ex: restaurant o cinema no funciona.",
          "work_in_progress": "Treballem molt per fer la cerca de llocs més senzilla i intuïtiva."
        },
        "try_this": {
          "address": "Dóna més <strong>detalls de l'adreça</strong>.",
          "intro": "Prova això:",
          "spell_check": "Comprova si <strong>has escrit correctament</strong> el lloc."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultat:",
          "other": "%{count} resultats:"
        }
      },
      "search": {
        "for": "S'està cercant \"%{q}\"",
        "not_found": "No s'ha pogut trobar llocs."
      }
    },
    "timeout": {
      "headline": "",
      "info": "El nostre servei de cerca no està disponible.",
      "repeat_search": "Reiniciar la cerca"
    }
  },
  "splash": {
    "countline": "S'han marcat %{count} llocs.",
    "headline": "Tothom pot afegir llocs accessibles amb cadira de rodes.",
    "start": "Inicia",
    "step1": "Feu clic sobre un lloc que conegueu",
    "step2": "Marqueu i feu clic per desar",
    "step3": "Ja està.No necessites registre.",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Estadístiques",
  "support": {
    "array": {
      "last_word_connector": "i",
      "sentence_connector": "i",
      "two_words_connector": "i",
      "words_connector": ","
    },
    "select": {
      "prompt": "Triar"
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
    "no": "Lavabo no accessible amb cadira de rodes",
    "unknown": "Lavabo de tipologia desconeguda",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Lavabo amb accessibilitat amb cadira de rodes"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Ara s'ha activat el vostre compte."
      },
      "error": {
        "notice": "L'adreça o la contrasenya no coincideixen."
      },
      "notice": "Ja hi ets."
    },
    "destroy": {
      "notice": "Adéu, torna aviat."
    },
    "new": {
      "email": "Email address",
      "login": "Inicia la sessió",
      "login_with_twitter": "Inicia la sessió amb Twitter",
      "password": "Contrasenya",
      "remember_me": "Continua dins"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Com ens podem posar en contacte amb tu? Pots canviar aquesta informació més tard, al teu perfil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Imatges que heu penjat"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Informació del teu compte"
        },
        "title": "Perfil"
      },
      "newsletter": {
        "label": "Sí, actualitza'm sobre Wheelmap.",
        "text": "",
        "title": "Butlletí"
      },
      "photos": {
        "empty": "",
        "title": "Fotos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hola",
          "personalized": "Hola %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "%{count} foto pujada ",
            "other": "%{count} fotos pujades "
          },
          "pois_added": {
            "one": "%{count} lloc afegit",
            "other": "%{count} llocs afegits"
          },
          "pois_edited": {
            "one": "",
            "other": ""
          },
          "pois_marked": {
            "one": "%{count} lloc marcat",
            "other": "%{count} llocs marcats"
          },
          "text": "Tens"
        },
        "text_html": "Hola,<br>\n(Tornem a ser) els de Wheelmap.org! Estem feliços de tenir-te abord amb nosaltres.Pots llegir el nostre <a href=\"http://wheelmap.org/en/blog-2/\">blog</a> o <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> si vols conèixer una mica millor Wheelmap.org. O pots saber-ne més sobre els  <a href=\"http://wheelmap.org/en/get-engaged/\">projectes</a> que oferim a Wheelmap.org i com hi pots participar.<br>\nEstar en contacte<br>\nPer estar en contacte et pots subscriure al nostre butlletí mensual i seguir-nos a <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> i <a href=\"https://twitter.com/wheelmap\">Twitter</a>. Volem saber la teva opinió i parlar amb tu!<br>\nI ara mapeja feliç!<br>\nEl teu equip Wheelmap",
        "title": "Resum"
      },
      "widget": {
        "categories": "",
        "center": "",
        "empty_center": "",
        "empty_provider": "",
        "height": "",
        "legends": {
          "embed": "",
          "embed_explanation": "",
          "general": "",
          "preview": "",
          "settings": ""
        },
        "providers": "",
        "title": "",
        "width": ""
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Primera",
      "last": "Última &raquo;",
      "next": "Següent &rsaquo;",
      "previous": "&lsaquo; Anterior",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "No accessible amb cadira de rodes",
    "unknown": "Unknown status",
    "yes": "Accessible amb cadira de rodes"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Un projecte de",
      "based_on": "Basat en",
      "become_a_supporter": "Covertiu-vos en col·laborador",
      "main_supporter": "Col·laborador"
    },
    "itunes": {
      "alt": "Logo de l'Appstore",
      "title": "Baixeu-vos ara l'aplicació per iPhone"
    },
    "logo": {
      "alt": "Logotip de Wheelmap - cerca llocs accessibles amb cadira de rodes",
      "title": "Wheelmap - cerca llocs accessibles amb cadira de rodes"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Següent &#8594;",
    "page_entries_info": {
      "multi_page": "S'està mostrant %{model} %{from} - %{to} de %{count} en total",
      "multi_page_html": "Mostrant %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de<b>%{count}</b> en total",
      "single_page": {
        "one": "S'està mostrant 1 %{model}",
        "other": "S'està visualitzant tots %{count} %{model}",
        "zero": "No %{model} trobat"
      },
      "single_page_html": {
        "one": "S'està mostrant <b>1</b> %{model}",
        "other": "S'està visualitzant <b>tot&nbsp;%{count}</b> %{model}",
        "zero": "%{model} no s'ha trobat"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Anterior\n"
  }
});
