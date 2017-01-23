I18n.translations || (I18n.translations = {});
I18n.translations["pt_BR"] = I18n.extend((I18n.translations["pt_BR"] || {}), {
  "actions": {
    "cancel": "Deletar",
    "next": "Avançar",
    "save": "Salvar",
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
        "address_housenumber": "Número da casa",
        "address_postcode": "CEP",
        "address_street": "Rua",
        "name": "Nome",
        "note": "Nota",
        "phone": "Telefone",
        "type": "Tipo",
        "website": "Site"
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
      "notice": "Já está conectado à sua conta"
    },
    "require_user": {
      "notice": "Tem de se ligar à sua conta para ver o conteúdo desta página."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Adicionar um novo lugar",
      "edit": "Editar lugar"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "fechar",
    "skip": "Pular"
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
        "title": "Relatar um problema"
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
      "confirmed": "Seu e-mail foi confirmado com sucesso.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Dentro de alguns minutos você receberá um e-mail com link de confirmação.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Tem certeza?",
      "headline": "Delete account",
      "link": "Apagar agora"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Senha atual <i>(necessária para confirmar as alterações)</i>",
          "email": "E-mail",
          "password": "Senha <i>(deixar em branco se não quiser mudar)</i>",
          "password_confirmation": "Repetir senha"
        },
        "submit": "Salvar mudanças"
      },
      "headline": "Configuração da conta"
    },
    "failure": {
      "already_authenticated": "Você já está conectado.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Senha ou endereço de e-mail não confere. ",
      "invalid_token": "Token de autenticação inválido",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "A sua conta está bloqueada",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Você precisa autenticar-se ou registrar-se antes de continuar",
      "unconfirmed": "Por favor, confirme sua conta antes de continuar."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Mais um passo para ativar sua conta"
      },
      "reset_password_instructions": {
        "subject": "Instruções para redefinir a senha"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* campo obrigatório",
    "omniauth_callbacks": {
      "failure": "A autenticação usando o %{kind} falhou. Erro: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Autenticado com sucesso usando o %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Redefinir senha"
      },
      "headline": "Esqueceu a senha?"
    },
    "password_reset": {
      "email": {
        "comment": "Se você não solicitou alteração de senha, apenas ignore este e-mail <br/>. Sua senha não será mudada a menos que você clique o link acima e configure uma nova.",
        "headline": "Bem vindo %{email}",
        "link": "Alterar minha senha",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nova senha",
          "password_confirmation": "Repetir senha"
        },
        "submit": "Escolher nova senha"
      },
      "headline": "Redefinir senha"
    },
    "passwords": {
      "link": "Esquececeu sua senha?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "A sua senha foi alterada com sucesso. Está conectado(a) à sua conta.",
      "updated_not_active": "A sua senha foi modificada com sucesso."
    },
    "registrations": {
      "destroyed": "Até logo! A sua conta foi cancelada com sucesso, mas nós estaremos esperando você.",
      "inactive_signed_up": "Você foi registrado com sucesso mas sua conta não pôde ser conectada. Motivo: \"%{reason}\"",
      "link": "Criar conta",
      "reasons": {
        "inactive": "inativo",
        "locked": "bloqueado",
        "unconfirmed": "não confirmado"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Sua conta foi atualizada."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Senha ou endereço de e-mail não confere. ",
      "invalid_token": "Token de autenticação inválido",
      "link": "Entrar",
      "locked": "A sua conta está bloqueada",
      "new": {
        "no_osm_account": "Você não tem conta no OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Muito obrigado por sua ajuda!",
        "sign_in_with": "Conectar usando %{kind}",
        "sign_up_with_osm": "Registrar-se agora.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Conectou a conta com sucesso",
      "signed_out": "Desconectado",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Por favor conecte-se ou registre-se novamente para continuar",
      "unconfirmed": "Tem de confirmar a sua conta antes de continuar"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Senha",
          "remember_me": "Deseja se manter conectado?"
        },
        "submit": "Entrar"
      },
      "headline": "Entrar"
    },
    "sign_out": {
      "headline": "Sair"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirmar minha conta",
        "please_confirm": "Você pode confirmar a sua conta clicando no link a seguir:",
        "welcome": "Bem vindo %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Senha",
          "password_confirmation": "Repetir senha",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Registrar-se"
      },
      "headline": "Registrar-se"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Sua conta foi reativada com sucesso, e agora está conectada."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "já estava confirmado, por favor volte a registrar-se",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "não coincide com a confirmação",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "tem de ser igual a %{count}",
      "even": "must be an even number",
      "exclusion": "não está disponível",
      "expired": "expirou, peça novamente",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "tem de ser maior que %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "não é um valor válido",
      "invalid": "é inválido",
      "less_than": "tem de ser menor que %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "não é um número",
      "not_an_integer": "tem de ser um número integral",
      "not_found": "não encontrado",
      "not_locked": "não estava bloqueado",
      "not_saved": {
        "one": "Um erro impdiu que %{resource} fosse salvo:",
        "other": "%{count} erros impediram que %{resource} fosse salvo:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "já existe",
      "too_long": "é demasiado grande (o máximo é de %{count} charateres)",
      "too_short": "é demasiado curto. (O mínimo é de %{count} carateres.)",
      "wrong_length": "tem comprimento errado (deve ter exatamente %{count} carateres)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Endereço de site não é válido."
        }
      }
    },
    "template": {
      "body": "Houve problemas com os seguintes campos: ",
      "header": {
        "one": "Um erro impdiu que %{model} fosse salvo:",
        "other": "%{count} erros impediram que %{model} fosse salvo."
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Você sempre pode mudar a marcação dum lugar. Simplesmente escolhe a classificação certa e \"Salvar\" - pronto!",
      "1": "Como usuário logado você pode acrescentar / corrigir detalhes dum lugar. Clique em \"Editar\" em corrija ou acrescente informações.",
      "2": "Você pode acrescentar mais informações (por exemplo, \"Este lugar possui uma rampa móvel\") na seção de comentários. Clique em \"Editar\" e \"Adicionar comentário\"."
    },
    "headline": "Tem algum problema com este lugar?",
    "questions": {
      "0": "A marcação está errada.",
      "1": "Os detalhes do lugar estão incorretos ou faltam.",
      "2": "Tenho mais informações sobre este lugar."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} foi criado com sucesso."
      },
      "destroy": {
        "alert": "%{resource_name} não pôde ser excluido.",
        "notice": "%{resource_name} foi excluido com sucesso."
      },
      "update": {
        "notice": "%{resource_name} foi atualizado com sucesso."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Imagem removida com sucesso"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Acessível a cadeirantes",
    "show_limited_accessible_places": "Parcialmente acessível a cadeira de rodas",
    "show_places_without_status": "Status desconhecido",
    "show_unaccessible_places": "Não acessível para cadeira de rodas"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Coloque o indicador no mapa na posição certa",
      "osm_username": "Ainda não é membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Criar uma conta Openstreetmap</a>",
      "password": "(deixar em branco se não quiser modificar) ",
      "phone": "Por exemplo: +55 11 12345678",
      "website": "Exemplo: http://www.example.com"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Chave central:",
      "city": "Cidade:",
      "create": "Create a place",
      "email": "E-mail",
      "finish": "Terminar",
      "housenumber": "N°:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Nome:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Senha",
      "password_confirmation": "Repetir senha",
      "phone": "Telefone:",
      "postcode": "CEP:",
      "privacy_policy": "Aceito parágrafos 1 e 2 do acordo de privacidade de dados",
      "reset": "Recomeçar",
      "save": "Salvar",
      "street": "Rua:",
      "terms": "Aceito os termos de uso.",
      "type": "Tipo:",
      "website": "Website:",
      "wheelchair": "Acessível a cadeirantes?",
      "wheelchair_description": "Comentário sobre a acessibilidade: ",
      "wheelchair_toilet": "Banheiro acessível:"
    },
    "titles": {
      "basic": "Dados básicos",
      "optional": "Mais informações <span class=\"addition\">(todos os campos são opcionais)</span>"
    }
  },
  "global": {
    "form_validation_error": "Por favor veja os erros abaixo."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Página principal",
      "keywords": "lugares acessíveis a cadeirantes cadeira de rodas achar procurar marcar",
      "search": "Procurar",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Escolher idioma",
      "contact": "Contato",
      "faq": "Perguntas Frequentes",
      "feedback": "Feedback",
      "home": "Iniciar",
      "how_to_add_a_place": "Como adicionar lugares?",
      "imprint": "Contato",
      "logged_in_as": "Conectado como:",
      "login": "Entrar",
      "logout": "Sair",
      "map": "Mapa",
      "newsletter": "Newsletter",
      "press": "Imprensa",
      "profile": "Perfis",
      "projects": "Envolva-se",
      "report_problem": "Relatar um problema",
      "suggestions": "Sugestões",
      "travelguide": "Travel guide",
      "what_is_barrier_free": "Qual o significado de \"acessível a cadeirantes\"?",
      "what_is_wheelmap": "O que é Wheelmap?"
    },
    "searchbar": {
      "add_place": "Adicionar outro lugar",
      "find": "Encontrar",
      "placeholder": "exemplos: 'Brasília', 'Av. Paulista, São Paulo'",
      "title_add_place": "Adicionar um novo lugar nesta posição agora!"
    },
    "tagline": "Logotipo do Wheelmap",
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
      "prompt": "Por favor selecione"
    },
    "submit": {
      "create": "Criar  %{model}",
      "submit": "Salvar  %{model}",
      "update": "Atualizar  %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Escolher categoria",
        "deselect_all": "Desativar todos",
        "select_all": "Ativar todos",
        "wheelchair": "Acessível a cadeirantes?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorar",
          "upgrade": "Atualizar browser"
        },
        "warning": {
          "headline": "Desculpe!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Adicionar um novo lugar"
        }
      },
      "overlay": {
        "button": "Vamos lá!",
        "categories": "Filtrar lugares por categoria",
        "filter": "Filtrar lugares por acessibilidade",
        "headline": "Marque e encontre lugares acessíveis a cadeirantes com Wheelmap.org - no mundo tudo e de graça. É simples:",
        "lookup": "Buscar um lugar específico",
        "secondary_headline": "Nosso sistema de semáforo para indicar a acessibilidade de lugares públicos:"
      },
      "popup": {
        "form": {
          "limited": "Parcialmente acessível a cadeira de rodas",
          "no": "Não acessível para cadeira de rodas",
          "save": "Salvar",
          "unknown": "Status desconhecido",
          "yes": "Acessível a cadeirantes"
        },
        "help": "Acessível a cadeirantes? (Ajuda)",
        "more": "mais ..."
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
          "headline": "Todos os %{type} em %{city} com acessibilidade desconhecida (%{count})"
        },
        "yes": {
          "headline": "Todos os %{type} acessíveis a cadeirantes em %{city} (%{count})"
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
      "prompt": "Escolher categoria"
    },
    "node": {
      "info_edit_position": "O lugar aparecerá no Wheelmap tal como é mostrado acima. Se o marcador não está no ponto correto, é possível <a href=\"%{url}\">mudar a posição dele no OpenStreetMap.</a> ",
      "mail": {
        "body": "(Por favor, somente escreva em inglês ou alemão.)\n\nHi Sozialhelden,\n\nSomething is wrong with this location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problema com %{headline}"
      }
    },
    "node_type": {
      "prompt": "Escolher tipo"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{street}, %{housenumber}"
    },
    "tags": {
      "phone": "Telefone:",
      "website": "Website:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, os dados ainda estão incorretos ou incompletos.",
        "successfull": "Muito obrigado, os dados submetidos foram salvos com sucesso e estarão online em breve. "
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
      "not_authorized": "Desculpe, a autentificação falhou",
      "not_available": "Desculpe, mas no momento esta página não está disponível",
      "not_existent": "Desculpe, este lugar não existe mais",
      "not_found": "Desculpe, a página não foi encontrada",
      "param_missing": "Por favor digite sua busca."
    },
    "flash": {
      "authorize_wheelmap": "Para alterar os dados você precisa duma conta OpenStreetMap."
    },
    "new": {
      "form": {
        "legend": "Localização do lugar",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Acessibilidade a cadeirante",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Endereço",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contato",
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
            "name": "Lugares parecidos",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Novo lugar | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "node": {
      "link": {
        "claim": "Você trabalha aqui?",
        "edit_node": "Editar lugar",
        "report_bug": "Relatar um problema"
      }
    },
    "node_data": {
      "address": "Endereço:",
      "contact_details": "Contato:"
    },
    "node_edit": {
      "details": "Detalhes",
      "edit": "Editar"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Comentário:"
    },
    "node_photos": {
      "add": "Adicionar",
      "photos_of_this_place": "Fotos deste lugar:",
      "upload": "Transferência"
    },
    "node_similar": {
      "similar": "Lugares parecidos: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Banheiro acessível:",
      "premium": "%{name} diz: este lugar é",
      "wheelchair_accessibility": "Acessibilidade a cadeirantes:"
    },
    "node_streetview": {
      "streetview": "Vista de rua:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Saiba se um lugar é acessível a cadeirantes pelo Wheelmap.org. Ou acrescente mais informações e fotos ao lugar.",
          "title": "Este lugar está em Wheelmap.org: %{name}"
        },
        "title": "Lugar: %{node} | wheelmap.org"
      },
      "link": {
        "back": "Voltar",
        "large_map": "Aumentar",
        "listing": "Todos os lugares do tipo '%{type}' em %{city}",
        "upload": "Transferir imagem"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "mostrar em Openstreetmap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, os dados ainda são incompletos ou incorretos.",
        "successfull": "Muito obrigado, os dados submetidos foram guardados com sucesso e estarão online em breve. "
      }
    },
    "update_wheelchair": {
      "successfull": "O status  do lugar \"%{name}\" foi mudado para \"%{status}\"."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ".",
        "format": "%u%n",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "€"
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
          "billion": "Bilhão",
          "million": "Milhão",
          "quadrillion": "Quatrilhão",
          "thousand": "Mil",
          "trillion": "Trilhão",
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
      "accommodation": "Acomodação ",
      "education": "Educação ",
      "food": "Comidas & Bebidas",
      "government": "Governo",
      "health": "Saúde",
      "leisure": "Lazer",
      "misc": "Diversos",
      "money_post": "Banco / Agência de Correios",
      "public_transfer": "Transporte público",
      "shopping": "Compras",
      "sport": "Esporte",
      "tourism": "Turismo",
      "unknown": "Desconhecido"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel de praia",
        "bed_and_breakfast": "Pensão",
        "camp_site": "Acampamento",
        "caravan_site": "Acampamento de treiler",
        "chalet": "Chalet",
        "dormitory": "Moradia",
        "guest_house": "Albergue",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Hotel de rodovia"
      },
      "education": {
        "college": "Colégio",
        "driving_school": "Autoescola",
        "kindergarten": "Creche",
        "library": "Biblioteca",
        "museum": "Museu",
        "school": "Escola",
        "university": "Universidade"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Cervejaria ao ar livre",
        "cafe": "Café",
        "drinking_water": "Agua potável",
        "fast_food": "Lanchonete",
        "ice_cream": "Sorveteria",
        "pub": "Pub",
        "restaurant": "Restaurante"
      },
      "government": {
        "courthouse": "Tribunal",
        "embassy": "Embaixada",
        "employment_agency": "Agência de Emprego",
        "government": "Agência governamental",
        "police": "Polícia",
        "public_building": "Prédio público",
        "townhall": "Prefeitura"
      },
      "health": {
        "alternative": "Médico de medicina alternativa",
        "dentist": "Dentista",
        "doctors": "Médico",
        "hearing_aids": "Loja de aparelhos auditivos",
        "hospital": "Hospital",
        "medical_supply": "Equipamentos Médicos",
        "occupational_therapist": "Terapeuta Ocupacional",
        "pharmacy": "Farmácia",
        "physiotherapist": "Fisioterapeuta",
        "psychotherapist": "Psicoterapeuta",
        "social_facility": "Instituição social",
        "speech_therapist": "Terapeuta de fala",
        "veterinary": "Veterinário"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordel",
        "casino": "Cassino",
        "cinema": "Cinema",
        "community_centre": "Centro comunitário",
        "gallery": "Galeria de arte",
        "massage": "Spa de massagem",
        "nightclub": "Casa noturna",
        "playground": "Área recreacional",
        "sauna": "Sauna",
        "stripclub": "clube de strip-tease",
        "tattoo": "Estúdio de tatuagem",
        "theatre": "Teatro",
        "zoo": "Zoológico"
      },
      "misc": {
        "association": "Associação",
        "company": "Empresa",
        "estate_agent": "Imobiliária",
        "insurance": "Seguradora",
        "lawyer": "Advogado",
        "ngo": "Organização não governamental",
        "place_of_worship": "Lugar de Adoração",
        "political_party": "Escritório de partido político",
        "toilets": "Banheiros públicos"
      },
      "money_post": {
        "atm": "Caixa eletrônico",
        "bank": "Banco",
        "bureau_de_change": "Loja de Câmbio",
        "post_box": "Caixa de Correio",
        "post_office": "Agência de Correios"
      },
      "public_transfer": {
        "aerodrome": "Aeroporto",
        "bicycle_parking": "Bicicletário",
        "bicycle_rental": "Aluguel de bicicletas",
        "boatyard": "Estaleiro",
        "bus_station": "Ponto de ônibus",
        "bus_stop": "Ponto de ônibus",
        "cable_car": "Teleférico de cabine",
        "car_rental": "Aluguel de carros",
        "car_sharing": "Car sharing (compartilhamento)",
        "chair_lift": "Teleférico de cadeira",
        "ferry": "Ferry",
        "ferry_terminal": "Terminal de barco",
        "fuel": "Posto de gasolina",
        "halt": "Estação",
        "light_rail": "Metrô Leve",
        "parking": "Estacionamento",
        "parking_aisle": "Corredor de estacionamento",
        "platform": "Plataforma",
        "station": "Metrô",
        "subway_entrance": "Entrada do Metrô",
        "terminal": "Terminal de Aeroporto ",
        "tram_stop": "Parada de bonde"
      },
      "shopping": {
        "alcohol": "Bebidas alcoólicas",
        "antiques": "Antiquário",
        "art": "Loja de arte",
        "bakery": "Padaria",
        "beauty": "Salão de beleza",
        "beverages": "Bebidas",
        "bicycle": "Loja de bicicletas",
        "books": "Livraria",
        "butcher": "Açougue",
        "car_repair": "Oficina mecânica",
        "car_shop": "Loja de automóveis",
        "chemist": "Manipuladora Farmacêutica / Farmácia",
        "clothes": "Roupa",
        "computer": "Computadores",
        "confectionery": "Confeitaria",
        "convenience": "Loja de Conveniência",
        "copyshop": "Copiadora",
        "deli": "Delicatessen",
        "department_store": "Loja de Departamentos",
        "doityourself": "Loja de ferragens",
        "dry_cleaning": "Lavanderia a seco",
        "electronics": "Loja de Eletrônicos",
        "erotic": "Sex shop",
        "fabric": "Lojas de tecidos",
        "farm_shop": "Loja de fazenda",
        "florist": "Florista",
        "funeral_directors": "Funerária",
        "furniture": "Móveis",
        "garden_centre": "Centro de jardinagem",
        "gift": "Loja de presentes",
        "greengrocer": "Quitanda",
        "hairdresser": "Cabeleireiro",
        "hardware": "Utensílios e Ferramentas",
        "interior_decoration": "Loja de decoração",
        "jewelry": "Joalharia",
        "kiosk": "Quiosque",
        "laundry": "Lavandaria",
        "mall": "Shopping Center",
        "mobile_phone": "Loja de celular",
        "music": "Loja de discos",
        "musical_instrument": "Loja de instrumentos musicais",
        "newsagent": "Banca de jornal",
        "optician": "Ótica",
        "organic": "Loja orgânica",
        "outdoor": "Equipamento Outdoor",
        "pet": "Pet shop",
        "photo": "Loja de fotografia",
        "second_hand": "Brechó",
        "shoes": "Sapataria",
        "sports": "Produtos esportivos",
        "stationery": "Papelaria",
        "supermarket": "Supermercado",
        "tailor": "Alfaiate",
        "tea": "Loja de chá",
        "tobacco": "Tabacaria",
        "toys": "Brinquedos",
        "travel_agency": "Agência de viagens",
        "variety_store": "Loja de descontos",
        "video": "Locadora"
      },
      "sport": {
        "pitch": "Quadra de esporte",
        "sports_centre": "Centro esportivo",
        "stadium": "Estádio",
        "swimming": "Natação",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Local arqueológico",
        "arts_centre": "Centro de artes",
        "artwork": "Obra de arte",
        "attraction": "Atracção",
        "battlefield": "Campo de batalha",
        "beach": "Praia",
        "beacon": "Farol",
        "castle": "Castelo",
        "cave_entrance": "Entrada de caverna",
        "information": "Informação para turistas",
        "memorial": "Memorial",
        "theme_park": "Parque temático",
        "tower": "Torre",
        "viewpoint": "Mirante"
      },
      "unknown": {
        "unknown": "Desconhecido"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Estatus: Conectado",
          "grant": "Ligar agora",
          "not_connected": "Status: não conectado",
          "revoke": "Desligar"
        }
      },
      "headline": "Editar o seu perfil"
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
        "headline": "Desculpe, não podíamos achar um lugar com o nome \"%{query}\".",
        "hint": {
          "example": "<strong>Exemplo:</strong> São Paulo, Brasil",
          "info": "Nosso serviço de busca funciona somente com nome e/ou informações de endereço. Portanto, ou procure pelo nome do lugar ou por um endereço, por exemplo, nome de rua e/ou cidade. Buscar pelo tipo dum lugar, por exemplo restaurante ou cinema, não funciona.",
          "work_in_progress": "Trabalhamos duro para tornar buscar lugares mais fácil e mais intuitivo no futuro."
        },
        "try_this": {
          "address": "Por favor, forneça mais <strong>detalhes de endereço</strong>.",
          "intro": "Tente isso:",
          "spell_check": "Verifique a <strong>ortografia</strong>."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultado:",
          "other": "%{count} resultados:"
        }
      },
      "search": {
        "for": "Procurando \"%{q}\"",
        "not_found": "Nenhum lugar encontrado!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Nosso sistema de busca estava temporariamente indisponível.",
      "repeat_search": "Nova busca"
    }
  },
  "splash": {
    "countline": "%{count} lugares já foram marcados.",
    "headline": "Todo mundo pode adicionar lugares acessíveis!",
    "start": "Começar",
    "step1": "Clique num lugar que você conhece.",
    "step2": "Marque-lo e clique em \"Salvar\"",
    "step3": "Pronto! Nenhum registro necessário!",
    "what_is_wheelmap": "O que é Wheelmap?"
  },
  "statistics": "Estatísticas",
  "support": {
    "array": {
      "last_word_connector": ", e",
      "sentence_connector": "e",
      "two_words_connector": " e ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Por favor selecione"
    }
  },
  "time": {
    "am": "da manhã",
    "formats": {
      "default": "%A, %d de %B de %Y, %H:%M",
      "long": "%A, %d de %B de %Y, %H:%M",
      "short": "%d/%m, %H:%M"
    },
    "pm": "de tarde"
  },
  "toiletstatus": {
    "no": "Sem banheiro adaptado para cadeirantes",
    "unknown": "Não sei informar sobre os banheiros",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Banheiro acessível a cadeirantes"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "A sua conta foi ativada."
      },
      "error": {
        "notice": "E-Mail e senha não conferem."
      },
      "notice": "Você está dentro!"
    },
    "destroy": {
      "notice": "Até breve!"
    },
    "new": {
      "email": "Email address",
      "login": "Entrar",
      "login_with_twitter": "Conecte-se pelo Twitter",
      "password": "Senha",
      "remember_me": "Mantenha-se connectado"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Você se registrou com sucesso. Nos lhe informaremos sobre notícias importantes acerca do Wheelmap."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Suas imagens"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Informação de sua conta"
        },
        "title": "Perfis"
      },
      "newsletter": {
        "label": "Sim, informam-me sobre Wheelmap. ",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Fotos"
      },
      "show": {
        "greeting": {
          "anonymously": "Olá!",
          "personalized": "Oi %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "%{count} lugares transferidos",
            "other": "%{count} lugares carregados"
          },
          "pois_added": {
            "one": "%{count} lugares adicionados",
            "other": "%{count} lugares adicionados"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "%{count} lugares marcados",
            "other": "%{count} lugares marcados"
          },
          "text": "Você tem"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://news.wheelmap.org/en/\">Blog</a> or <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Visão geral"
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
          "settings": "Configurações"
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
    "limited": "Parcialmente acessível a cadeira de rodas",
    "no": "Não acessível para cadeira de rodas",
    "unknown": "Status desconhecido",
    "yes": "Acessível a cadeirantes"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Um projeto de",
      "based_on": "Baseado em",
      "become_a_supporter": "Tornar-se patrocinador",
      "main_supporter": "Patrocinador principal"
    },
    "itunes": {
      "alt": "AppStore Logotipo",
      "title": "Faça agora o download do seu iPhone App!"
    },
    "logo": {
      "alt": "Wheelmap Logotipo - Encontre lugares acessíveis a cadeirantes",
      "title": "Wheelmap - Encontre lugares acessíveis a cadeirantes"
    },
    "what_is": {
      "fully_accessible": "Entrada sem degraus, todos os cômodos sem degraus.",
      "limited_accessible": "A entrada tem um degrau com altura máxima de 7 cm (3 pol), a maioria dos cômodos não tem degraus.",
      "not_accessible": "A entrada tem um ou vários degraus, os cômodos não são acessíveis.",
      "unknown_accessible": "Ajude marcando lugares!"
    }
  },
  "will_paginate": {
    "next_label": "Próximo &#8594;",
    "page_entries_info": {
      "multi_page": "Mostre %{model} %{from} - %{to} de %{count} no total",
      "multi_page_html": "Mostre %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> dum total de <b>%{count}</b>",
      "single_page": {
        "one": "Mostrar 1 %{model}",
        "other": "Mostrar todos os %{count} %{model}",
        "zero": "%{model} não encontrado"
      },
      "single_page_html": {
        "one": "Mostrar <b>1</b> %{model}",
        "other": "Mostre <b>todos os &nbsp;%{count}</b> %{model}",
        "zero": "%{model} não encontrado"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Voltar"
  }
});
