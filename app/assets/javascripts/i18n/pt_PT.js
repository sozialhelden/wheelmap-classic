I18n.translations || (I18n.translations = {});
I18n.translations["pt_PT"] = I18n.extend((I18n.translations["pt_PT"] || {}), {
  "actions": {
    "cancel": "Cancelar",
    "next": "Next",
    "save": "Gravar",
    "send": "Enviar"
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
        "address": "Endereço",
        "address_city": "Cidade",
        "address_housenumber": "House number",
        "address_postcode": "Código Postal",
        "address_street": "Rua",
        "name": "Nome",
        "note": "Nota",
        "phone": "Telefone",
        "type": "Tipo",
        "website": "Sítio da Internet"
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
      "notice": "Já está ligado..."
    },
    "require_user": {
      "notice": "Deve fazer login para ver esta página."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Editar lugar"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "fechar",
    "skip": "saltar"
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
        "title": "Reportar um problema"
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
      "confirmed": "Your email address was successfully confirmed.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "In a few minutes you will receive an email with a link to confirm your email address.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Are you sure?",
      "headline": "Delete account",
      "link": "Delete now"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Current password <i>(we need it to confirm your changes)</i>",
          "email": "E-mail",
          "password": "Password <i>(leave empty if you don\\'t want to change it)</i>",
          "password_confirmation": "Repetir password"
        },
        "submit": "Save changes"
      },
      "headline": "Edit account"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Your account is locked",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing."
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
    "mandatory": "* Required",
    "omniauth_callbacks": {
      "failure": "Authorization with %{kind} failed. Error: \"%{reason}\". ",
      "permission_missing": "You did not grant the required permission.",
      "success": "Successfully logged in with %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Reset password"
      },
      "headline": "Esqueceu palavra-passe?"
    },
    "password_reset": {
      "email": {
        "comment": "If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.",
        "headline": "Welcome %{email}",
        "link": "Change my password",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "New password",
          "password_confirmation": "Repetir password"
        },
        "submit": "Reset password"
      },
      "headline": "Reset password"
    },
    "passwords": {
      "link": "Esqueceu palavra-passe?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Your password was changed successfully, you are now logged in",
      "updated_not_active": "Your password was changed successfully"
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
      "updated": "You have updated your account successfully."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "link": "Sign in",
      "locked": "Your account is locked",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Logged in successfully",
      "signed_out": "You have signed out successfully",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra-chave",
          "remember_me": "Stay logged in?"
        },
        "submit": "Ligar"
      },
      "headline": "Ligar"
    },
    "sign_out": {
      "headline": "Desligar"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra-chave",
          "password_confirmation": "Repetir password",
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
      "already_confirmed": "confirmado",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "a confirmação não corresponde",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "deve ter exatamente %{count}",
      "even": "must be an even number",
      "exclusion": "Reservado",
      "expired": "Expirou, por favor faça um novo pedido",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "deve ser superior a %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "não é um valor válido",
      "invalid": "inválido",
      "less_than": "deve ter menos de %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "não é um número",
      "not_an_integer": "deve ser um número inteiro",
      "not_found": "não encontrado",
      "not_locked": "não foi bloqueado",
      "not_saved": {
        "one": "Um erro impossibilitou guardar %{resource}:",
        "other": "%{count} erros impossibilitaram guardar %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "Já existe",
      "too_long": "Demasiado longo (não pode ter mais de %{count} caracteres)",
      "too_short": "Demasiado curto (não pode ter mais de %{count} caracteres)",
      "wrong_length": "Tamanho errado (deve ter %{count} caracteres)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "O endreço da página internet não é válido."
        }
      }
    },
    "template": {
      "body": "Registaram-se problemas com os seguintes campos:",
      "header": {
        "one": "1 erro impossibilitou o registo de %{model}",
        "other": "%{count} erros impossibilitaram o registo de %{model} "
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Pode sempre altear o marcador de um lugar por si. Escolha apenas o marcador correto e \"Guardar\".",
      "1": "Enquanto um utilizador, pode adicionar / corrigir todos os detalhes de um lugar. Clique em \"Editar\" e corrija ou adicione a informação na janela.",
      "2": "Pode adicionar mais informação (ex. \"Este lugar tem rampa\") na secção dos comentários. Clique em \"Editar\" e \"Adicionar comentário\"."
    },
    "headline": "Há algum problema com este lugar?",
    "questions": {
      "0": "Marcação errada.",
      "1": "Não existem informações do lugar ou estão incorretas.",
      "2": "Tenho mais informação sobre este lugar."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} foi criado com sucesso"
      },
      "destroy": {
        "alert": "%{resource_name} não pode ser removido",
        "notice": "%{resource_name} foi removido com sucesso"
      },
      "update": {
        "notice": "%{resource_name} foi atualizado com sucesso"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Imagem removida com sucesso"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Acessível a cadeiras de rodas",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Sem acessibilidade a cadeira de rodas"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Mova o marcado no mapa para a posição correta",
      "osm_username": "Ainda não é membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Crie uma conta OpenStreetMap agora</a>",
      "password": "(deixe em branco se não pretende alterar)",
      "phone": "For example: +49 30 12345678",
      "website": "Por exemplo: http://www.example.com"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Chave central:",
      "city": "Cidade:",
      "create": "Create a place",
      "email": "E-mail",
      "finish": "Terminar",
      "housenumber": "Não:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Nome:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Palavra-passe",
      "password_confirmation": "Repetir password",
      "phone": "Telefone:",
      "postcode": "Código postal:",
      "privacy_policy": "Eu aceito os parágrafos 1 e 2 do acordo de privacidade.",
      "reset": "Reset",
      "save": "Gravar",
      "street": "Rua:",
      "terms": "Aceito as condições de uso.",
      "type": "Tipo:",
      "website": "Página internet:",
      "wheelchair": "Acessível a cadeiras de rodas?",
      "wheelchair_description": "Comentário à acessibilidade:",
      "wheelchair_toilet": "WC acessível a cadeiras de rodas:"
    },
    "titles": {
      "basic": "Dados básicos",
      "optional": "Mais informação  <span class=\"addition\">(todos os campos são opcionais)</span>"
    }
  },
  "global": {
    "form_validation_error": "Por favor reveja os erros listados abaixo"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Página inicial",
      "keywords": "encontrar marcador de locais acessíveis a cadeiras de rodas",
      "search": "Pesquisar",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Notícias",
      "choose_language": "Escolher língua",
      "contact": "Contacto",
      "faq": "FAQ",
      "feedback": "Feedback",
      "home": "Começar",
      "how_to_add_a_place": "Como posso adicionar lugares?",
      "imprint": "Imprimir",
      "logged_in_as": "Ligado como:",
      "login": "Ligar",
      "logout": "Desligar",
      "map": "Mapa",
      "newsletter": "Newsletter",
      "press": "Imprensa",
      "profile": "Perfil",
      "projects": "Get involved",
      "report_problem": "Reportar um problema",
      "suggestions": "Sugestões",
      "travelguide": "Travel guide",
      "what_is_barrier_free": "O que significa \"acessível a cadeiras de rodas\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Adicionar outro lugar",
      "find": "Encontrar",
      "placeholder": "Pesquisar outro lugar",
      "title_add_place": "Adicionar um novo lugar a esta posição agora!"
    },
    "tagline": "Logo Wheelmap ",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categorias"
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
      "prompt": "Por favor escolha"
    },
    "submit": {
      "create": "criar %{model}",
      "submit": "guardar %{model}",
      "update": "atualizar %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Escolha a categoria",
        "deselect_all": "Remover seleção",
        "select_all": "Selecionar todos",
        "wheelchair": "Acessível a cadeiras de rosas?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorar",
          "upgrade": "Atualizar página"
        },
        "warning": {
          "headline": "Pedimos desculpa!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "Ok, vamos!",
        "categories": "Filtrar lugares por categorias",
        "filter": "Filtrar lugares por acessibilidade a cadeiras de rodas",
        "headline": "Encontrar e marcar lugares acessíveis a pessoas de cadeiras de rodas com Wheelmap.org - em todo o mundo e sem custos. É fácil:",
        "lookup": "Pesquisar um lugar específico",
        "secondary_headline": "Sistema luminoso para indicar a acessibilidade de lugares públicos: "
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Sem acessibilidade a cadeira de rodas",
          "save": "Atualizar",
          "unknown": "Unknown status",
          "yes": "Acessível a cadeiras de rodas"
        },
        "help": "Acessível a cadeiras de rodas? (Ajuda)",
        "more": "mais..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Como?",
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
          "headline": "Todos os %{type} em %{city}  com acessibilidade a cadeiras de rodas desconhecida (%{count})"
        },
        "yes": {
          "headline": "Todos os locais  %{type} acessíveis a cadeiras de rodas em %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Um projeto de Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Escolha uma categoria"
    },
    "node": {
      "info_edit_position": "A localização vai aparecer Wheelmap como está acima. Se o marcados não está no local correto, pode <a href=\"%{url}\">alterar a sua localização no OpenStreetMap</a>.",
      "mail": {
        "body": "(Por favor, escreca apenas em Inglês ou Alemão).\n\nOlá Sozialhelden,\nestá alguma coisa errada com a localização: %{url}\n\nO problema é:",
        "subject": "[Wheelmap] Problema com %{headline}"
      }
    },
    "node_type": {
      "prompt": "Escolha um tipo"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefone:",
      "website": "Página internet:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Desculpe, a sua introdução estava incorreta ou incompleta",
        "successfull": "Obrigado, a sua submissão foi guardade com sucesso e estará online em breve."
      }
    },
    "edit": {
      "header": {
        "title": "Editar lugar: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Desculpe, falha na autentificação",
      "not_available": "Pedimos desculpa, página temporariamente indisponível.",
      "not_existent": "Pedimos desculpa, o lugar já não se encontra indisponível.",
      "not_found": "Desculpe, página não encontrada.",
      "param_missing": "Por favor indique uma palavra de pesquisa"
    },
    "flash": {
      "authorize_wheelmap": "Precisa de ter uma conta OpenStreetMap a modificar dados"
    },
    "new": {
      "form": {
        "legend": "Localização do lugar",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Endereço",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contacto",
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
        "title": "Lugar novo  | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "node": {
      "link": {
        "claim": "Trabalha aqui?",
        "edit_node": "Editar lugar",
        "report_bug": "Reportar um problema"
      }
    },
    "node_data": {
      "address": "Morada:",
      "contact_details": "Detalhes do contato:"
    },
    "node_edit": {
      "details": "Detalhes",
      "edit": "Editar"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Adicionar comentário:"
    },
    "node_photos": {
      "add": "Adicionar",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Fotografias deste lugar:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Lugares semelhantes: %{name}"
    },
    "node_status": {
      "accessible_toilet": "WC acessível a cadeiras de rodas:",
      "premium": "%{name} diz: este lugar é",
      "wheelchair_accessibility": "Acessibilidade a cadeiras de rodas:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Confirme se este lugar é acessível a cadeiras de rodas em Wheelmap.org. Ou adicione mais informações e fotografias do lugar.",
          "title": "Este sítio no Wheelmap.org: %{name}"
        },
        "title": "Lugar: %{node} | wheelmap.org"
      },
      "link": {
        "back": "voltar",
        "large_map": "Aumentar",
        "listing": "Todos os lugares do tipo '%{type}' em %{city}",
        "upload": "Carregar imagem"
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
        "not_successfull": "Desculpe, a sua introdução estava incorreta ou incompleta",
        "successfull": "Obrigado, a sua submissão foi guardada com sucesso e estará online em breve."
      }
    },
    "update_wheelchair": {
      "successfull": "O estado para \"%{name}\" foi modificado para \"%{status}\" e estará online em breve."
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
          "billion": "Bilião",
          "million": "Milhão",
          "quadrillion": "Quadrilião",
          "thousand": "Milhar",
          "trillion": "Trilião",
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
  "or": "ou",
  "place": {
    "one": "%{count} lugar",
    "other": "%{count} lugares"
  },
  "poi": {
    "category": {
      "accommodation": "Alojamento",
      "education": "Educação",
      "food": "Restauração",
      "government": "Governamental",
      "health": "Saúde",
      "leisure": "Lazer",
      "misc": "Miscelâneos",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Lojas",
      "sport": "Desporto",
      "tourism": "Turismo",
      "unknown": "Local desconhecido"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Praia concessionada",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Campismo",
        "caravan_site": "Parque de caravanas",
        "chalet": "Chalet",
        "dormitory": "Dormitório",
        "guest_house": "Casa de hóspedes",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Colégio",
        "driving_school": "Escola de condução",
        "kindergarten": "Infantário",
        "library": "Biblioteca",
        "museum": "Museu",
        "school": "Escola",
        "university": "Universidade"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Cervejaria ao ar livre",
        "cafe": "Café",
        "drinking_water": "Água potável",
        "fast_food": "Fast Food",
        "ice_cream": "Gelataria",
        "pub": "Pub",
        "restaurant": "Restaurante"
      },
      "government": {
        "courthouse": "Tribunal",
        "embassy": "Embaixada",
        "employment_agency": "Employment agency",
        "government": "Agência governamental",
        "police": "Polícia",
        "public_building": "Edifício público",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentista",
        "doctors": "Doctor",
        "hearing_aids": "Loja de aparelhos auditivos",
        "hospital": "Hospital",
        "medical_supply": "Equipamentos médicos",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Farmácia",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Centro social",
        "speech_therapist": "Speech therapist",
        "veterinary": "Veterinário"
      },
      "leisure": {
        "arena": "Estádio",
        "brothel": "Casa de prostituição",
        "casino": "Casino",
        "cinema": "Cinema",
        "community_centre": "Community centre",
        "gallery": "Galeria",
        "massage": "Massage spa",
        "nightclub": "Discoteca",
        "playground": "Parque infantil",
        "sauna": "Sauna",
        "stripclub": "Bar de strip",
        "tattoo": "Tattoo shop",
        "theatre": "Teatro",
        "zoo": "Jardim zoológico"
      },
      "misc": {
        "association": "Association",
        "company": "Escritório (empresa)",
        "estate_agent": "Agência imobiliária",
        "insurance": "Seguradora",
        "lawyer": "Advogado",
        "ngo": "Non-government organisation",
        "place_of_worship": "Local de culto",
        "political_party": "Political party office",
        "toilets": "WC"
      },
      "money_post": {
        "atm": "Multibanco",
        "bank": "Banco",
        "bureau_de_change": "Casa de câmbio",
        "post_box": "Marco de correio",
        "post_office": "Correios"
      },
      "public_transfer": {
        "aerodrome": "Aeroporto",
        "bicycle_parking": "Estacionamento de biclicletas",
        "bicycle_rental": "Aluguer de bicicletas",
        "boatyard": "Boat yard",
        "bus_station": "Terminal rodoviário",
        "bus_stop": "Paragem de autocarros",
        "cable_car": "Teleférico",
        "car_rental": "Rent-a-car",
        "car_sharing": "Partilha de carros",
        "chair_lift": "Telecadeira",
        "ferry": "Ferry",
        "ferry_terminal": "Cais de ferry",
        "fuel": "Bomba de gasolina",
        "halt": "Apeadeiro",
        "light_rail": "Metro ligeiro",
        "parking": "Estacionamento",
        "parking_aisle": "Lugar de estacionamento",
        "platform": "Cais",
        "station": "Estação de comboios",
        "subway_entrance": "Entrada de metro",
        "terminal": "Terminal de aeroporto",
        "tram_stop": "Paragem de elétrico"
      },
      "shopping": {
        "alcohol": "Licor",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "Padaria",
        "beauty": "Salão de beleza",
        "beverages": "Bebidas",
        "bicycle": "Loja de bicicletas",
        "books": "Livros",
        "butcher": "Talho",
        "car_repair": "Oficina automóvel",
        "car_shop": "Stand automóvel",
        "chemist": "Chemist / Drugstore",
        "clothes": "Loja de roupa",
        "computer": "Loja de informática",
        "confectionery": "Loja de doces",
        "convenience": "Loja de conveniência",
        "copyshop": "Copy shop",
        "deli": "Loja gourmet",
        "department_store": "Armazéns (lojas)",
        "doityourself": "Bricolage",
        "dry_cleaning": "Limpeza a seco",
        "electronics": "Electrónica",
        "erotic": "Sex shop",
        "fabric": "Loja de confeções",
        "farm_shop": "Loja do produtor",
        "florist": "Florista",
        "funeral_directors": "Funeral home",
        "furniture": "Mobiliário",
        "garden_centre": "Garden centre",
        "gift": "Loja de recordações",
        "greengrocer": "Greengrocer",
        "hairdresser": "Cabeleireiro",
        "hardware": "Drogaria",
        "interior_decoration": "Interior design shop",
        "jewelry": "Ourivesaria",
        "kiosk": "Quisque",
        "laundry": "Lavandaria",
        "mall": "Centro comercial",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "Óptica",
        "organic": "Loja de produtos biológicos",
        "outdoor": "Produtos de atividades ao ar livre",
        "pet": "Loja de animais",
        "photo": "Loja de fotografia",
        "second_hand": "Cash converter",
        "shoes": "Sapataria",
        "sports": "Loja de desporto",
        "stationery": "Material de escritório",
        "supermarket": "Supermercado",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Loja de brinquedos",
        "travel_agency": "Agência de viagens",
        "variety_store": "Discount store",
        "video": "Clube de vídeo"
      },
      "sport": {
        "pitch": "Campo desportivo",
        "sports_centre": "Centro desportivo",
        "stadium": "Estádio",
        "swimming": "Natação",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Sítio arqueológico",
        "arts_centre": "Centro de arte",
        "artwork": "Estátua",
        "attraction": "Atração",
        "battlefield": "Campo de batalha",
        "beach": "Praia",
        "beacon": "Farol",
        "castle": "Castelo",
        "cave_entrance": "Gruta",
        "information": "Informação turística",
        "memorial": "Memorial",
        "theme_park": "Parque temático",
        "tower": "Torre",
        "viewpoint": "Miradouro"
      },
      "unknown": {
        "unknown": "Local desconhecido"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Estado: ligado",
          "grant": "Ligar agora",
          "not_connected": "Estado: Não ligado",
          "revoke": "Desligar"
        }
      },
      "headline": "Editar perfil"
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
          "example": "<strong>Exemplo:</strong> Londres, Reino Unido",
          "info": "A nossa pesquisa só funciona com a informação do nome e/ou endereço. Desta forma, preencha um dos campos para o nome do lugar ou o endereço (por ex., nome da rua e/ou cidade). A pesquina pelo tipo de lugar (ex. restaurante ou cinema), não funciona!",
          "work_in_progress": "Tentamos veemente tornar a pesquisa de lugares mais fácil e intuitiva no futuro."
        },
        "try_this": {
          "address": "Por favor, forneça mais <strong>detalhes do endereço</strong>.",
          "intro": "Tente isto:",
          "spell_check": "Confirme o <strong>texto</strong> inserido."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultado:",
          "other": "%{count} resultados:"
        }
      },
      "search": {
        "for": "A pesquisar \"%{q}\"",
        "not_found": "Não foram encontrados lugares!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "O nosso serviço de pesquisa está temporariamente indisponível.",
      "repeat_search": "Volte a tentar"
    }
  },
  "splash": {
    "countline": "%{count} lugares que já foram marcados.",
    "headline": "Qualquer um pode adicionar lugares acessíveis a cadeiras de rodas!",
    "start": "Começar",
    "step1": "Clique num lugar que conheça",
    "step2": "Marque-o e clique guardar",
    "step3": "É isto! Não é preciso registo",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Estatísticas",
  "support": {
    "array": {
      "last_word_connector": "e",
      "sentence_connector": "e",
      "two_words_connector": "e",
      "words_connector": ","
    },
    "select": {
      "prompt": "Por favor selecione"
    }
  },
  "time": {
    "am": "A.M.",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "P.M."
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
        "notice": "A sua conta está ativa!"
      },
      "error": {
        "notice": "O e-mail e a password não correspondem."
      },
      "notice": "Está ligado!"
    },
    "destroy": {
      "notice": "Adeus, volte em breve!"
    },
    "new": {
      "email": "Email address",
      "login": "Ligar",
      "login_with_twitter": "Ligar com o Twitter",
      "password": "Palavra-passe",
      "remember_me": "Permanecer ligado"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Como é que o podemos contactar? Pode editar esta informação mais tarde no seu perfil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "As suas imagens carregadas"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Perfil"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Fotografias"
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
          "settings": "Definições"
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
    "limited": "Partially wheelchair accessible",
    "no": "Sem acessibilidade a cadeira de rodas",
    "unknown": "Unknown status",
    "yes": "Acessível a cadeiras de rodas"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Um projeto de",
      "based_on": "Baseado em",
      "become_a_supporter": "Torne-se num patrocinador",
      "main_supporter": "Patrocinador principal"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Faça o download da iPhone App agora!"
    },
    "logo": {
      "alt": "Wheelmap Logo - encontre lugares acessíveis a cadeiras de rodas",
      "title": "Wheelmap - encontre lugares acessíveis a cadeiras de rodas"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Próximo &#8594;",
    "page_entries_info": {
      "multi_page": "A apresentar %{model} %{from} - %{to} de %{count} no total",
      "multi_page_html": "A apresentar %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> no total",
      "single_page": {
        "one": "A apresentar 1 %{model}",
        "other": "A apresentar todos os %{count} %{model}",
        "zero": "%{model} não encontrado"
      },
      "single_page_html": {
        "one": "A apresentar <b>1</b> %{model}",
        "other": "A apresentar <b>all&nbsp;%{count}</b> %{model}",
        "zero": "%{model} não encontrado"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Anterior"
  }
});
