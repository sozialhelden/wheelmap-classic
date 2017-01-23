I18n.translations || (I18n.translations = {});
I18n.translations["pt"] = I18n.extend((I18n.translations["pt"] || {}), {
  "actions": {
    "cancel": "Cancelar",
    "next": "Seguinte",
    "save": "Guardar",
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
        "address_housenumber": "Número de casa",
        "address_postcode": "Código postal",
        "address_street": "Rua",
        "name": "Nome",
        "note": "Nota",
        "phone": "Telefone",
        "type": "Tipo",
        "website": "Website"
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
        "format": "%{attribute}%{message}"
      },
      "messages": {
        "accepted": "tem de ser aceite",
        "blank": "não pode estar em branco",
        "confirmation": "não coincide com a confirmação",
        "empty": "não pode estar vazio",
        "equal_to": "tem de ser igual a %{count}",
        "even": "tem de ser par",
        "exclusion": "é reservado",
        "greater_than": "tem de ser maior que %{count}",
        "greater_than_or_equal_to": "tem de ser maior ou igual a %{count}",
        "inclusion": "não está incluído na lista",
        "invalid": "é inválido",
        "less_than": "tem de ser menor que %{count}",
        "less_than_or_equal_to": "tem de ser menor ou igual a %{count}",
        "not_a_number": "não é um número",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "tem de ser ímpar",
        "record_invalid": "A validação falhou: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "não está disponível",
        "too_long": "é demasiado grande (o mínimo é de %{count} characters)",
        "too_short": "é demasiado pequeno (o mínimo é de %{count} caracteres)",
        "wrong_length": "comprimento errado (deve ter %{count} caracteres)"
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
          "email": "E-mail",
          "password": "Palavra Passe",
          "remember_me": "Manter-se ligado à conta"
        }
      },
      "template": {
        "body": "Por favor, verifique os seguintes campos:",
        "header": {
          "one": "Não foi possível guardar %{model}: 1 erro",
          "other": "Não foi possível guardar %{model}: %{count} erros"
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
      "notice": "Já está ligado à sua conta"
    },
    "require_user": {
      "notice": "Tem de se ligar à sua conta para ver o conteúdo desta página."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Adicionar um novo local",
      "edit": "Editar um lugar"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "fechar",
    "skip": "ignorar"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Por favor escreva-nos em Inglês Ou Alemão.",
        "flash_after_submit": "Obrigado por nos contactar. A nossa equipa de suporte irá tratar do problema mal possa.",
        "header_text_html": "Por favor consulte primeiro as <a href=\"https://news.wheelmap.org/en/faq/\">perguntas frequentes</a> para servir de ajuda. Se a solução para o seu problema não estiver descrito, por favor responda às seguintes questões para que nós possamos corrigir o problema.",
        "note": "Note que o Wheelmap é um projecto de código-aberto administrado por uma organização sem fins lucrativos e temos recursos limitados para o desenvolvimento de aplicações.",
        "questions": {
          "a": "O que fez?",
          "b": "O que era esperado que acontecece?",
          "c": "O que ocorreu em vez disso?"
        },
        "submit_button": "Enviar",
        "title": "Report a problem"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sáb"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    "day_names": [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "%d de %B de %Y",
      "short": "%d de %B"
    },
    "month_names": [
      null,
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
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
        "one": "aproximadamente 1 hora",
        "other": "aproximadamente %{count} horas"
      },
      "about_x_months": {
        "one": "aproximadamente 1 mês",
        "other": "aproximadamente %{count} meses"
      },
      "about_x_years": {
        "one": "aproximadamente 1 ano",
        "other": "aproximadamente %{count} anos"
      },
      "almost_x_years": {
        "one": "quase 1 ano",
        "other": "quase %{count} years"
      },
      "half_a_minute": "meio minuto",
      "less_than_x_minutes": {
        "one": "menos de um minuto",
        "other": "menos de %{count} minutos"
      },
      "less_than_x_seconds": {
        "one": "menos de 1 segundo",
        "other": "menos de %{count} segundos"
      },
      "over_x_years": {
        "one": "mais de 1 ano",
        "other": "mais de %{count} anos"
      },
      "x_days": {
        "one": "1 dia",
        "other": "%{count} dias"
      },
      "x_minutes": {
        "one": "1 minuto",
        "other": "%{count} minutos"
      },
      "x_months": {
        "one": "1 mês",
        "other": "%{count} meses"
      },
      "x_seconds": {
        "one": "1 segundo",
        "other": "%{count} segundos"
      }
    },
    "prompts": {
      "day": "Dia",
      "hour": "Hora",
      "minute": "Minuto",
      "month": "Mês",
      "second": "Segundo",
      "year": "Ano"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "A sua conta está confirmada. Está agora ligado à sua conta.",
      "link": "Não recebeu nenhumas instruções de confirmação?",
      "send_instructions": "Receberá dentro de minutos um e-mail com intruções de como confirmar a sua conta.",
      "send_paranoid_instructions": "Se a sua conta existir, irá receber um email em poucos minutos com instruções sobre a confirmação da sua conta."
    },
    "destroy": {
      "confirm": "Tem a certeza?",
      "headline": "Eliminar conta",
      "link": "Eliminar agora"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Palavra-passe atual <i> (precisamos dela para confirmar as suas alterações) </i>",
          "email": "E-mail",
          "password": "Palavra-passe <i> (deixar em branco se não quiser mudar) </i>",
          "password_confirmation": "Repita a palavra passe"
        },
        "submit": "Guardar alterações"
      },
      "headline": "Editar conta"
    },
    "failure": {
      "already_authenticated": "Já iniciou a sessão.",
      "inactive": "A sua conta ainda não foi ativada.",
      "invalid": "Palavra-passe ou email inválido.",
      "invalid_token": "Token de autenticação inválido",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "A sua conta está bloqueada",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "A sua sessão expirou, por favor entre de novo na sua conta.",
      "unauthenticated": "Tem de se registar antes de poder continuar",
      "unconfirmed": "Tem de confirmar a sua conta antes de continuar."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Por favor clique no link que se encontra no email que lhe enviámos. Se não recebeu um email nosso, por favor confirme primeiro se por acaso não foi parar à pasta de spam do seu email. Se realmente não recebeu retorne à página de entrar na sua conta e tente de novo para que lhe seja enviado um novo email.",
        "subject": "Confirmação das instruções"
      },
      "reset_password_instructions": {
        "subject": "Restabelecer as instruções sobre a palavra-passe"
      },
      "unlock_instructions": {
        "subject": "Instruções de desbloqueio"
      }
    },
    "mandatory": "* campo obrigatório",
    "omniauth_callbacks": {
      "failure": "A autorização com %{kind} falhou. Erro: \"%{reason}.",
      "permission_missing": "Não forneceu a permissão necessária.",
      "success": "Autenticação bem sucedida com %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Restabelecer a palavra-passe"
      },
      "headline": "Esqueceu-se da palavra-passe?"
    },
    "password_reset": {
      "email": {
        "comment": "Se não pediu para alterar a sua palavra-passe, por favor ignore este email <br/>. A sua palavra-passe não será alterada a não ser que carregue no seguinte link.",
        "headline": "Bem-vindo(a) %{email}",
        "link": "Mudar a palavra-passe",
        "text": "Recebemos um pedido para alterar a sua palavra-passe no nosso site wheelmap.org. Se foi você que fez o pedido, clique no seguinte link - caso contrário ignore este email!"
      },
      "form": {
        "labels": {
          "password": "Nova palavra-passe",
          "password_confirmation": "Repita a palavra-passe"
        },
        "submit": "Restabelecer a palavra-passe"
      },
      "headline": "Restabelecer a palavra-passe"
    },
    "passwords": {
      "link": "Esqueceu-se da palavra-passe?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Irá receber um email com instruções como repor a sua palavra-passe dentro de minutos",
      "send_paranoid_instructions": "Se a sua conta existir, irá receber um email em poucos minutos com instruções sobre a reposição da sua palavra-passe",
      "updated": "A sua palavra-passe foi alterada com sucesso. Está agora ligado à sua conta",
      "updated_not_active": "A sua palavra-passe foi alterada com sucesso"
    },
    "registrations": {
      "destroyed": "A sua conta foi cancelada com sucesso. Esperamos vê-lo(a) novamente.",
      "inactive_signed_up": "Entrou na sua conta com sucesso, mas não foi possível completar o processo pela seguinte razão: \"%{reason}\"",
      "link": "Criar conta",
      "reasons": {
        "inactive": "inativo",
        "locked": "bloqueado",
        "unconfirmed": "não confirmado"
      },
      "signed_up": "A conta foi criada com sucesso. Foi-lhe enviado um email de confirmação.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Atualizou a sua conta com sucesso"
    },
    "sessions": {
      "inactive": "A sua conta ainda não foi ativada",
      "invalid": "E-mail ou palavra-passe inválida ",
      "invalid_token": "Token de autenticação inválido",
      "link": "Iniciar sessão",
      "locked": "A sua conta está bloqueada",
      "new": {
        "no_osm_account": "Sem conta no OpenStreetMap?",
        "osm_promo_text": "O Wheelmap é baseado em dados geográficos do OpenStreetMap (OSM). O OpenStreetMap é um mapa mundial livre e editável por qualquer pessoa. É como a Wikipédia dos mapas. Por forma a conseguir editar locais ou criar novos locais tem de ter uma conta de utilizador no OpenStreetMap e necessita de iniciar sessão com ela.",
        "promo_text_thank_you": "Obrigado pelo seu apoio!",
        "sign_in_with": "Iniciar sessão com %{kind}",
        "sign_up_with_osm": "Criar conta agora.",
        "wheelmap_promo_text": "Com o seu conhecimento sobre locais com acessibilidade a cadeira de rodas pode ajudar outras pessoas com dificuldades físicas a planearem melhor as suas vidas diariamente. Além disso, ajudará a tornar o OpenStreetMap mais completo e detalhado."
      },
      "signed_in": "Entrou na conta com sucesso",
      "signed_out": "Saiu da conta com sucesso",
      "timeout": "A sua sessão expirou, por favor entre de novo na sua conta.",
      "unauthenticated": "Tem de criar uma conta ou entrar na sua conta para continuar.",
      "unconfirmed": "Tem de confirmar a sua conta antes de continuar"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra passe",
          "remember_me": "manter-se ligado à sua conta"
        },
        "submit": "entrar"
      },
      "headline": "Entrar"
    },
    "sign_out": {
      "headline": "Sair"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirme a sua conta",
        "please_confirm": "Pode confirmar a sua conta com o link seguinte:",
        "welcome": "Bem-vindo(a) %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra passe",
          "password_confirmation": "Repita a palavra passe",
          "wants_newsletter": "Sim, manter-me informado sobre o Wheelmap - mas por favor não mais do que 1 vez por mês"
        },
        "submit": "Registrar-se"
      },
      "headline": "Registrar-se"
    },
    "unlocks": {
      "link": "Não recebeu instruções para desbloqueio da conta?",
      "send_instructions": "Irá receber um email em poucos minutos com instruções sobre como desbloquear a sua conta",
      "send_paranoid_instructions": "Se a sua existir, irá receber um email dentro de poucos minutos com instuções sobre como desbloquear a sua conta",
      "unlocked": "A sua conta foi desbloqueada com sucesso. Está agora ligado(a) à sua conta"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "tem de ser aceite",
      "already_confirmed": "já estava confirmado, por favor volte a registrar-se",
      "blank": "tem de ser preenchido",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "não coincide com a confirmação",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "tem de ser preenchido",
      "equal_to": "tem de ser igual a %{count}",
      "even": "tem de ser um número par",
      "exclusion": "é reservado",
      "expired": "expirou, por favor peça um novo",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "tem de ser maior que %{count}",
      "greater_than_or_equal_to": "tem de ser maior ou igual a %{count}",
      "inclusion": "não está incluído na lista",
      "invalid": "é inválido",
      "less_than": "tem de ser menor que %{count}",
      "less_than_or_equal_to": "tem de ser menor ou igual a %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "não é um número",
      "not_an_integer": "tem de ser um número integral",
      "not_found": "não foi encontrado",
      "not_locked": "não estava bloqueado",
      "not_saved": {
        "one": "Um erro impdiu que %{resource} fosse salvo:",
        "other": "%{count} erros impediu que %{resource} fossem salvos :"
      },
      "odd": "tem de ser um número ímpar",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "já pertence a outra pessoa",
      "too_long": "é demasiado grande (o mínimo é de %{count} characters)",
      "too_short": "é demasiado pequeno (o mínimo é de %{count} caracteres)",
      "wrong_length": "comprimento errado (deve ter %{count} caracteres)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "O endereço do sítio web não é válido."
        }
      }
    },
    "template": {
      "body": "Houve problemas com os seguintes campos: ",
      "header": {
        "one": "Um erro impdiu que %{model} fosse salvo:",
        "other": "%{count} erros impediu que %{model} fossem salvos :"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Pode sempre alterar a marcação de um local. Basta escolher a marcação correta e \"Guardar\" - já está!",
      "1": "Como utilizador autenticado, pode adicionar / corrigir todos os detalhes de um local. Clique em \"Editar\" e corrija ou adicione a informação.",
      "2": "Pode adicionar mais informação (por ex. \"Este local tem uma rampa móvel\") na secção de comentários. Clique em \"Editar\" e \"Adicionar comentário\"."
    },
    "headline": "Existe algum problema com este local?",
    "questions": {
      "0": "O marcador está errado.",
      "1": "Os detalhes do local estão incorretos ou em falta.",
      "2": "Eu tenho mais informações sobre este local."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} foi criado com sucesso."
      },
      "destroy": {
        "alert": "%{resource_name} não pode ser eliminado. ",
        "notice": "%{resource_name} foi eliminado com sucesso"
      },
      "update": {
        "notice": "%{resource_name} foi actualizado com sucesso"
      }
    },
    "photos": {
      "destroy": {
        "notice": "A imagem foi eliminada com sucesso"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "acessível a cadeira de rodas",
    "show_limited_accessible_places": "Parcialmente acessível por cadeira de rodas",
    "show_places_without_status": "Estado desconhecido",
    "show_unaccessible_places": "Sem acesso a cadeiras de rodas"
  },
  "formtastic": {
    "cancel": "Cancelar %{model}",
    "create": "Criar %{model}",
    "hints": {
      "email": "Nós lidamos com o seu endereço de forma confidencial. Prometemos não enviar spam!",
      "lat": "Coloque o inicador que se encontra no mapa para a posição correcta ",
      "osm_username": "Ainda não é membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Criar uma conta Openstreetmp agora</a>",
      "password": "(deixe em branco se não quiser mudar) ",
      "phone": "Por exemplo: +351 21 1234567",
      "website": "p. ex. http://www.example.com"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Chave central:",
      "city": "Cidade:",
      "create": "Criar um local",
      "email": "E-mail",
      "finish": "Terminar",
      "housenumber": "Nr:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Nome:",
      "osm_password": "Palavra-passe do OpenStreetMap",
      "osm_username": "Nome da conta no OpenStreetMap",
      "password": "Palavra passe",
      "password_confirmation": "Repita a palavra passe",
      "phone": "Telefone:",
      "postcode": "código postal:",
      "privacy_policy": "Eu aceito os parágrafos 1 e 2 do acordo de privacidade dos dados.",
      "reset": "Limpar",
      "save": "Guardar",
      "street": "Rua:",
      "terms": "Eu aceito os termos de utilização.",
      "type": "Tipo",
      "website": "Website",
      "wheelchair": "Acessibilidade para cadeira de rodas?",
      "wheelchair_description": "Comentário sobre a acessibilidade: ",
      "wheelchair_toilet": "Casa de banho acessível a cadeiras de rodas:"
    },
    "no": "Não",
    "required": "obrigatório",
    "reset": "Resetar %{model}",
    "submit": "Salvar %{model}",
    "titles": {
      "basic": "Data base ",
      "optional": "Mais informação <span class=\"addition\">(all fields are optional)</span>"
    },
    "update": "Atualizar %{model}",
    "yes": "Sim"
  },
  "global": {
    "form_validation_error": "Por favor tome atenção aos erros mencionados em baixo."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org é um serviço na Internet para procurar, encontrar e marcar locais com acessibilidade a cadeiras de rodas. Ajude também a marcar locais públicos como bares, restaurantes, cinemas ou supermercados!",
      "homepage": "Homepage",
      "keywords": "lugares acessíveis a cadeira de rodas procurar indicador de procura",
      "search": "Procurar",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Escolher o idioma",
      "contact": "Contacto",
      "faq": "Perguntas Frequentes",
      "feedback": "Feedbck",
      "home": "Iniciar",
      "how_to_add_a_place": "Como adicionar lugares?",
      "imprint": "Imprimir",
      "logged_in_as": "Registrado como:",
      "login": "Entrar",
      "logout": "Sair",
      "map": "Mapa",
      "newsletter": "Boletim de Notícias",
      "press": "Imprensa",
      "profile": "Perfil",
      "projects": "Envolva-se",
      "report_problem": "Report a problem",
      "suggestions": "Sugestões",
      "travelguide": "Guia de viagem",
      "what_is_barrier_free": "Qual o significado de \"acessível a cadeira de rodas\"?",
      "what_is_wheelmap": "O que é o Wheelmap?"
    },
    "searchbar": {
      "add_place": "Adicionar outro lugar",
      "find": "encontrar",
      "placeholder": "p. Ex. Sunset Boulevard L.A. ou o Portão de Brandenburgo",
      "title_add_place": "Adicionar um novo lugar nesta posição agora!"
    },
    "tagline": "Lógotipo do Wheelmap",
    "title": "Procurar locais com acessibilidades a cadeiras de rodas",
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
      "prompt": "Por favor seleccione"
    },
    "submit": {
      "create": "Criar  %{model}",
      "submit": "Guardar  %{model}",
      "update": "Actualizar  %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Mostrar em Wheelmap.org",
      "filter": {
        "category": "Categoria:",
        "deselect_all": "Desselecionar tudo",
        "select_all": "Selecionar tudo",
        "wheelchair": "Acessivel a cadeira de rodas? (O que significa isto?) "
      },
      "ie": {
        "action": {
          "ignore": "Ignorar",
          "upgrade": "Atualizar Navegador"
        },
        "warning": {
          "headline": "Pedimos desculpa!",
          "message": "Parece que está a usar o Internet Explorer. O Wheelmap necessita de um navegador que cumpra os padrões por forma a funcionar corretamente. Por favor considere usar um como o Firefox, Chrome, Safari ou Opera."
        }
      },
      "link": {
        "node": {
          "create": "Adicionar um novo local"
        }
      },
      "overlay": {
        "button": "OK, vamos lá!",
        "categories": "Filtrar locais por categorias",
        "filter": "Filtrar os locais por acessibilidade a cadeiras de rodas",
        "headline": "Marque e encontre lugares acessíveis a cadeira de rodas com o Wheelmap.org - em todo o mundo e gratuitamente. É fácil:",
        "lookup": "Procurar por um local específico",
        "secondary_headline": "O nosso sistema de cores de semáforo para marcar os locais com acessibilidades a cadeiras de rodas:"
      },
      "popup": {
        "form": {
          "limited": "Parcialmente acessível por cadeira de rodas",
          "no": "Sem acesso a cadeiras de rodas",
          "save": "Atualizar",
          "unknown": "Estado desconhecido",
          "yes": "Acessível a cadeira de rodas"
        },
        "help": "Acessível a cadeira de rodas? (Ajuda)",
        "more": "mais..."
      },
      "zoom_alert": "Aproxime a visualização para ver mais locais."
    }
  },
  "how?": "Como?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Todos os(as) %{type} parcialmente acessíveis a cadeiras de rodas em %{city} (%{count})"
        },
        "no": {
          "headline": "Todos os(as) %{type} não acessíveis a cadeiras de rodas em %{city} (%{count})"
        },
        "unknown": {
          "headline": "Todos os(as) %{type} sem informação de acessibilidade a cadeiras de rodas em %{city} (%{count})"
        },
        "yes": {
          "headline": "Todos os(as) %{type} acessíveis a cadeiras de rodas em %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Um projecto de Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Escolha uma categoria"
    },
    "node": {
      "info_edit_position": "A localização irá aparecer no Wheelmap como mostrado acima. Se o marcador não estiver no local correto, pode <a href=\"%{url}\">alterar a posição deste no site do OpenStreetMap.</a>",
      "mail": {
        "body": "(Por favor escreva apenas em Inglês ou Alemão.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
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
      "website": "site na Web:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, os dados introduzido estão incorrectos ou incompletos",
        "successfull": "Muito obrigado, os dados submetidos foram guardados com sucesso e estarão online em breve. "
      }
    },
    "edit": {
      "header": {
        "title": "Editar local: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "errors": {
      "default": "Opa! Algo correu mal. Este problema foi reportado automaticamente aos programadores",
      "not_authorized": "Desculpe, a autentificação falhou",
      "not_available": "Desculpe, mas esta página não está de momento acessível",
      "not_existent": "Desculpe, este lugar já não está mais acessível",
      "not_found": "Desculpe, a página não foi encontrada",
      "param_missing": "Por Favor introduza um termo para procura"
    },
    "flash": {
      "authorize_wheelmap": "Você precisa de uma conta OpenStreetMap para alterar os dados."
    },
    "new": {
      "form": {
        "legend": "Localização do local",
        "location": "Por favor clique no mapa onde o local se encontra!",
        "section": {
          "accessibility": {
            "name": "Acessibilidade a cadeiras de rodas",
            "title": "Informação sobre acecibilidade a cadeiras de rodas"
          },
          "address": {
            "help": "Pode mover o marcador para a localização correta no mapa.",
            "name": "Endereço",
            "title": "Onde está o local?"
          },
          "contact": {
            "name": "Contacto",
            "title": "Outras informações de contacto"
          },
          "name_category": {
            "name": "Nome e tipo de local",
            "title": "Forneça-nos alguma informação inicial sobre o seu local:"
          },
          "overview": {
            "title": "Toda a informação está correta?"
          },
          "similar_nodes": {
            "empty": "Não foram encontrados locais similares.",
            "go_edit": "Continuar com este local",
            "go_new": "Não é nenhum dos locais acima...",
            "name": "Locais similares",
            "title": "Encontramos locais similares perto. É um destes?"
          }
        },
        "title": "Adicionar um local"
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
        "claim": "Trabalha neste local?",
        "edit_node": "Editar lugar",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "Endereço:",
      "contact_details": "Detalhes de contacto:"
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
      "alert": "Tenha em atenção: a entrada deve ser claramente visível na foto para apresentar o seguinte: existem degraus na entrada? Qual é a altura aproximada do degrau? Qual é a largura da porta? A foto deve estar no formato JPEG ou PNG. Não deve ter um tamanho superior a 10 MB.",
      "photos_of_this_place": "Fotografias deste local:",
      "upload": "Enviar"
    },
    "node_similar": {
      "similar": "Locais similares: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Casa de banho acessível a cadeiras de rodas:",
      "premium": "%{name} diz: este local é",
      "wheelchair_accessibility": "Acessibilidade a cadeiras de rodas:"
    },
    "node_streetview": {
      "streetview": "Vista da rua:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Saiba se este local está marcado no Wheelmap.org como acessível a cadeiras de rodas. Ou adicione mais informação e fotografias do local.",
          "title": "Este local está em Wheelmap.org: %{name}"
        },
        "title": "Local: %{node} | wheelmap.org"
      },
      "link": {
        "back": "voltar",
        "large_map": "Aumentar",
        "listing": "Todos os locais do tipo '%{type}' em %{city}",
        "upload": "Enviar imagem"
      },
      "more_data_from": "Existe mais informação sobre este local, validada por:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "Encontrei este local em Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, os dados introduzido estão incorrectos ou incompletos",
        "successfull": "Muito obrigado, os dados submetidos foram guardados com sucesso e estarão online em breve. "
      }
    },
    "update_wheelchair": {
      "successfull": "O estado de \"%{name}\" foi alterado para \"%{status}\" e estará disponível no site brevemente."
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
        "headline": "Tem de ligar a sua conta à conta que tenha no OpenStreetMap antes de poder criar ou alterar locais no Wheelmap.org."
      }
    },
    "callback": {
      "notice": "A sua conta do Wheelmap está ligada à sua conta %{user} no OpenStreetMap."
    }
  },
  "or": "ou",
  "place": {
    "one": "%{count} local",
    "other": "%{count} locais"
  },
  "poi": {
    "category": {
      "accommodation": "Acomodação ",
      "education": "Ecucação ",
      "food": "Comida",
      "government": "Governo",
      "health": "Saúde",
      "leisure": "Prazer",
      "misc": "Outros",
      "money_post": "Banco / Estação de Correios",
      "public_transfer": "Transporte público",
      "shopping": "Shopping",
      "sport": "Desporto",
      "tourism": "Turismo",
      "unknown": "Desconhecido"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel Praia",
        "bed_and_breakfast": "Bed and Breakfast",
        "camp_site": "Acampamento",
        "caravan_site": "Sitio de caravana",
        "chalet": "Chalet",
        "dormitory": "Residência universitária / dormitório",
        "guest_house": "Guest House",
        "hostel": "Pousada",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Colégio",
        "driving_school": "Escola de condução",
        "kindergarten": "Jardim escola",
        "library": "Biblioteca",
        "museum": "Museu",
        "school": "Escola",
        "university": "Universidade"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Bar de cerveja",
        "cafe": "café",
        "drinking_water": "Agua potável",
        "fast_food": "Fast food",
        "ice_cream": "Gelataria / geladaria",
        "pub": "Pub",
        "restaurant": "Restaurante"
      },
      "government": {
        "courthouse": "Tribunal",
        "embassy": "Embaixada",
        "employment_agency": "Agência de emprego",
        "government": "Organismo governamental",
        "police": "Polícia",
        "public_building": "Edificio público",
        "townhall": "Câmara Municipal / Junta de Freguesia"
      },
      "health": {
        "alternative": "Praticante de medicinas alternativas",
        "dentist": "Dentista",
        "doctors": "Médico",
        "hearing_aids": "Vendedor de aparelhos auditivos",
        "hospital": "Hospital",
        "medical_supply": "Equipamento médico / ortopédico",
        "occupational_therapist": "Terapeuta ocupacional",
        "pharmacy": "Farmácia",
        "physiotherapist": "Fisioterapeuta",
        "psychotherapist": "Psicoterapeuta",
        "social_facility": "Infraestruturas sociais",
        "speech_therapist": "Terapeuta da fala",
        "veterinary": "Veterenário"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordel",
        "casino": "Casino",
        "cinema": "Cinema",
        "community_centre": "Centro comunitário",
        "gallery": "Galeria",
        "massage": "SPA e massagens",
        "nightclub": "Clube Nocturno",
        "playground": "Parque infantil",
        "sauna": "Sauna",
        "stripclub": "Clube de striptease",
        "tattoo": "Tatuador",
        "theatre": "Teatro",
        "zoo": "Zoológico"
      },
      "misc": {
        "association": "Associação",
        "company": "Empresa (escritório)",
        "estate_agent": "Imobiliária",
        "insurance": "Seguradora",
        "lawyer": "Advogado",
        "ngo": "Organização não-governamental",
        "place_of_worship": "Lugar de oração ",
        "political_party": "Sede / filial de partido político",
        "toilets": "Casa de banho"
      },
      "money_post": {
        "atm": "Caixa Multibanco",
        "bank": "Banco",
        "bureau_de_change": "Loja de Cambio",
        "post_box": "Caixa de Correio",
        "post_office": "Correios"
      },
      "public_transfer": {
        "aerodrome": "Aeroporto",
        "bicycle_parking": "Parque para bicicletas",
        "bicycle_rental": "Aluguer de bicicletas",
        "boatyard": "Estaleiro naval",
        "bus_station": "Estação de Autocarros",
        "bus_stop": "Estação de Autocarros",
        "cable_car": "Teleférico",
        "car_rental": "Aluguer de carros",
        "car_sharing": "Car sharing",
        "chair_lift": "Elevador",
        "ferry": "Ferry",
        "ferry_terminal": "Terminal Ferry",
        "fuel": "Bomba de gasolina",
        "halt": "Estação ",
        "light_rail": "Metro",
        "parking": "Parque de estacionamento",
        "parking_aisle": "Lugar de estacionamento",
        "platform": "Plataforma",
        "station": "Metro",
        "subway_entrance": "Entrada do Metro ",
        "terminal": "Terminal de Aeroporto ",
        "tram_stop": "Estação de eléctrico"
      },
      "shopping": {
        "alcohol": "Licor",
        "antiques": "Antiguidades",
        "art": "Galeria de arte",
        "bakery": "Padaria",
        "beauty": "Salão de beleza",
        "beverages": "Bebidas",
        "bicycle": "Loja de bicicletas",
        "books": "Livros",
        "butcher": "Talho",
        "car_repair": "Oficina de automóveis",
        "car_shop": "Loja de automóveis / stande",
        "chemist": "Parafarmácia",
        "clothes": "Roupa",
        "computer": "Computador",
        "confectionery": "Loja de guloseimas",
        "convenience": "Conveniência",
        "copyshop": "Loja de impressão / fotocópias",
        "deli": "Loja de artigos finos e iguarias",
        "department_store": "Shopping Center",
        "doityourself": "Faça você mesmo",
        "dry_cleaning": "Limpeza a seco",
        "electronics": "Eletrónica",
        "erotic": "Loja de artigos eróticos / sex shop",
        "fabric": "Loja de tecidos",
        "farm_shop": "Loja de quinta / fazenda / produtos locais",
        "florist": "Florista",
        "funeral_directors": "Funerária",
        "furniture": "Móvéis",
        "garden_centre": "Loja de jardinajem",
        "gift": "Loja de lembranças e presentes",
        "greengrocer": "Loja de frutas e verduras",
        "hairdresser": "Cabeleireiro",
        "hardware": "Hardware",
        "interior_decoration": "Loja de design de interiores",
        "jewelry": "Joalharia",
        "kiosk": "Quisque",
        "laundry": "Lavandaria",
        "mall": "Shopping Center",
        "mobile_phone": "Loja de telemóveis",
        "music": "Loja de música",
        "musical_instrument": "Loja de instrumentos musicais",
        "newsagent": "Banca de jornais e revistas",
        "optician": "Óptica",
        "organic": "Loja de produtos orgânicos",
        "outdoor": "Loja de artigos para o ar livre",
        "pet": "Loja de animais",
        "photo": "Loja de fotografia / equipamento",
        "second_hand": "Artigos em segunda mão",
        "shoes": "Sapatos",
        "sports": "Artigos desportivos",
        "stationery": "Artigos de escritório",
        "supermarket": "Supermercado",
        "tailor": "Alfaiate",
        "tea": "Loja de chá",
        "tobacco": "Tabacaria",
        "toys": "Brinquedos",
        "travel_agency": "Agência de viagens",
        "variety_store": "Loja de descontos / preço fixo",
        "video": "Videoclube"
      },
      "sport": {
        "pitch": "Campo desportivo",
        "sports_centre": "Centro de desporto",
        "stadium": "Estádio",
        "swimming": "Nadar",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Local arqueológico",
        "arts_centre": "centro de artes",
        "artwork": "Obra de arte",
        "attraction": "Atracção",
        "battlefield": "Campo de batalha",
        "beach": "Praia",
        "beacon": "Farol",
        "castle": "castelo",
        "cave_entrance": "Entrada da caverna",
        "information": "Informação para turistas",
        "memorial": "Memorial",
        "theme_park": "Parque temático",
        "tower": "Torre",
        "viewpoint": "Ponto de vista"
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
          "connected": "Estado: Ligado",
          "grant": "Ligar agora",
          "not_connected": "Estado: Desligado",
          "revoke": "Desligar "
        }
      },
      "headline": "Editar o seu profil"
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
        "headline": "Desculpe, não conseguimos encontrar um local com o nome \"%{query}\".",
        "hint": {
          "example": "<strong>Exemplo:</strong> Lisboa, Portugal",
          "info": "O nosso serviço de procura apenas funciona com a informação do nome e/ou endereço. Por isso, procure pelo nome do local ou pelo endereço do mesmo, isto é, nome da tua e/ou cidade. A procura por um tipo de local, isto é, restaurante ou cinema não funciona!",
          "work_in_progress": "Nós trabalhamos arduamente para tornar a procura de locais mais fácil e mais intuitiva."
        },
        "try_this": {
          "address": "Por favor forneça mais <strong>detalhes do endereço</strong>.",
          "intro": "Tente isto:",
          "spell_check": "Confirme a <strong>ortografia</strong> que introduziu."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultado:",
          "other": "%{count} resultados:"
        }
      },
      "search": {
        "for": "Procurando \"%{q}",
        "not_found": "Não foi possível encontrar um lugar"
      }
    },
    "timeout": {
      "headline": "Desculpe, aconteceu algo de errado",
      "info": "O nosso serviço de procura estava temporariamente indisponível.",
      "repeat_search": "Procurar novamente"
    }
  },
  "splash": {
    "countline": "%{count} locais já foram marcados.",
    "headline": "Qualquer pessoa pode adicionar locais com acessibilidade a cadeiras de rodas!",
    "start": "Iniciar",
    "step1": "Clique num local que conheça",
    "step2": "Marque-o e clique em guardar",
    "step3": "É isto! Não é necessário registar-se",
    "what_is_wheelmap": "O que é o Wheelmap?"
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
      "prompt": "Por favor seleccione"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%A, %d de %B de %Y, %H:%Mh",
      "long": "%A, %d de %B de %Y, %H:%Mh",
      "short": "%d/%m, %H:%M hs"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Sem casa de banho acessível a cadeiras de rodas",
    "unknown": "Informação sobre acessibilidade da casa de banho desconhecida",
    "what_is": {
      "no": "Largura mínima das portas/passagens: 90 cm (35 polegadas), área útil livre mínima: 150 x 150 cm (59 x 59 polegadas), sanita com altura adequada para cadeira de rodas, varões de apoio dobráveis e lavatório acessível.",
      "unknown": "Ajude a indicar a acessibilidade da casa de banho!",
      "yes": "Largura mínima das portas/passagens: 90 cm (35 polegadas), área útil livre mínima: 150 x 150 cm (59 x 59 polegadas), sanita com altura adequada para cadeira de rodas, varões de apoio dobráveis e lavatório acessível."
    },
    "yes": "Casa de banho acessível a cadeiras de rodas"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "A sua conta está agora activa."
      },
      "error": {
        "notice": "E-Mail e palavra passe não correspondem"
      },
      "notice": "Você está dentro!"
    },
    "destroy": {
      "notice": "Adeus, até breve!"
    },
    "new": {
      "email": "Endereço de email",
      "login": "Log in",
      "login_with_twitter": "Log in com Twitter",
      "password": "Palavra passe",
      "remember_me": "Mantenha-se connectado"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Está quase lá! Agora sobre a finalizar a sua conta no Wheelmap:",
        "set_password_for_mobile": "Registou-se com sucesso no OpenStreetMap. Por favor escolha um endereço de email que para que nós possamos informá-lo(a) sobre as suas atividades (por exemplo o número de locais que marcou). Pode aceder a esta informação no \"Perfil\" da sua conta.",
        "text": "Como podemos contactá-lo(a)? Pode alterar esta informação mais tarde no perfil da sua conta."
      }
    },
    "edit": {
      "headline": {
        "your_images": "As suas imagens enviadas"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Informação da sua conta"
        },
        "title": "Perfil"
      },
      "newsletter": {
        "label": "Sim, enviar-me notícias do Wheelmap.",
        "text": "Mantenha-se atualizado com o boletim de notícias do Wheelmap. Não se preocupe, não enviaremos spam. Receberá no máximo 1 notícia por mês.",
        "title": "Boletim de Notícias"
      },
      "photos": {
        "empty": "Ainda não enviou nenhuma fotografia.",
        "title": "Fotografias"
      },
      "show": {
        "greeting": {
          "anonymously": "Olá",
          "personalized": "Olá %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "%{count} fotografia enviada",
            "other": "%{count} fotografias enviadas"
          },
          "pois_added": {
            "one": "%{count} local adicionado",
            "other": "%{count} locais adicionados"
          },
          "pois_edited": {
            "one": "%{count}  local editado",
            "other": "%{count} locais editados"
          },
          "pois_marked": {
            "one": "%{count} local marcado",
            "other": "%{count} locais marcados"
          },
          "text": "Tem"
        },
        "text_html": "Olá,<br>\nBem-vindo(a) ao Wheelmap.org! Estamos contentes por o/a ter a bordo! Pode consultar o nosso <a href=\"http://news.wheelmap.org/en/\">Blogue</a> ou as <a href=\"http://news.wheelmap.org/en/FAQ/\">Perguntas Frequentes</a> se quiser saber um pouco mais sobre o Wheelmap.org. Ou pode saber mais sobre os <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projetos</a> que oferecemos à volta do Wheelmap.org e como pode ajudar.<br>\nPara manter-se em contacto pode subscrever o nosso boletim mensal e seguir-nos no <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> e o <a href=\"https://twitter.com/wheelmap\">Twitter</a>. Gostamos sempre de saber a opinião das pessoas!<br>\nE agora, bons mapeamentos!<br>\nA equipa do Wheelmap",
        "title": "Visão geral"
      },
      "widget": {
        "categories": "Mostrar filtro de categorias",
        "center": "Área do mapa",
        "empty_center": "Procurar pelo centro do mapa...",
        "empty_provider": "Escolha um Fornecedor",
        "height": "Altura",
        "legends": {
          "embed": "Código para incorporar",
          "embed_explanation": "Pode alterar as especificações para a latitude (<code>lat</code>), longitude (<code>lon</code>) e nível de zoom (<code>zoom</code>) no código acima manualmente e portanto ajustar o segmento do mapa (widget) de acordo com a localização que pretenda mostrar.",
          "general": "Crie o seu próprio widget Wheelmap e incorpore-o no seu sítio web ou blogue.",
          "preview": "Prever",
          "settings": "Definições"
        },
        "providers": "Fornecedor",
        "title": "Widget",
        "width": "Largura"
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
    "limited": "Parcialmente acessível por cadeira de rodas",
    "no": "Sem acesso a cadeiras de rodas",
    "unknown": "Estado desconhecido",
    "yes": "acessível a cadeira de rodas"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Um projeto por",
      "based_on": "Baseado em",
      "become_a_supporter": "Torne-se um patrocinador",
      "main_supporter": "Patrocinador principal"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Faça agora o download do seu iPhone App!"
    },
    "logo": {
      "alt": "Wheelmap Logo - encontre lugares com acessibilidade para cadeira de rodas",
      "title": "Wheelmap - encontre lugares com acessibilidade para cadeira de rodas"
    },
    "what_is": {
      "fully_accessible": "Entrada sem degraus, nenhuma das divisões tem degraus.",
      "limited_accessible": "A entrada tem um degrau, com altura máxima de 7 cm (3 pol), a maior parte das divisões não têm degraus.",
      "not_accessible": "A entrada tem um degrau ou vários degraus, as divisões não são acessíveis.",
      "unknown_accessible": "Ajude, assinalando locais!"
    }
  },
  "will_paginate": {
    "next_label": "Seguinte &#8594;",
    "page_entries_info": {
      "multi_page": "A mostrar %{model} %{from} - %{to} de %{count} no total",
      "multi_page_html": "A mostrar %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> no total",
      "single_page": {
        "one": "A mostrar 1 %{model}",
        "other": "A mostrar todos os %{count} %{model}",
        "zero": "Nenhum %{model} encontrado"
      },
      "single_page_html": {
        "one": "A mostrar <b>1</b> %{model}",
        "other": "A mostrar <b>tudo&nbsp;%{count}</b> %{model}",
        "zero": "Nenhum %{model} encontrado"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Anterior"
  }
});
