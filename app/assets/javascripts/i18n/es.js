I18n.translations || (I18n.translations = {});
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), {
  "actions": {
    "cancel": "Cancelar",
    "next": "Siguiente",
    "save": "Guardar",
    "send": "Enviar"
  },
  "active_admin": {
    "access_denied": {
      "message": "No está autorizado/a a realizar esta acción."
    },
    "any": "Cualquiera",
    "batch_actions": {
      "action_label": "%{title} seleccionado",
      "button_label": "Acciones en masa",
      "default_confirmation": "¿Seguro que quieres hacer esto?",
      "delete_confirmation": "Eliminar %{plural_model}: ¿Está seguro?",
      "labels": {
        "destroy": "Borrar"
      },
      "link": "Añadir",
      "selection_toggle_explanation": "(Cambiar selección)",
      "succesfully_destroyed": {
        "one": "Se ha destruido 1 %{model} con éxito",
        "other": "Se han destruido %{count} %{plural_model} con éxito"
      }
    },
    "blank_slate": {
      "content": "No hay %{resource_name} aún.",
      "link": "Añadir"
    },
    "cancel": "Cancelar",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Comentar",
      "author": "Autor",
      "author_missing": "Anónimo",
      "author_type": "Tipo de autor",
      "body": "Cuerpo",
      "created_at": "Fecha de creación",
      "delete": "Borrar Comentario",
      "delete_confirmation": "¿Está seguro que desea borrar este comentario?",
      "errors": {
        "empty_text": "El comentario no fue guardado, el texto estaba vacío."
      },
      "no_comments_yet": "No hay comentarios aún.",
      "resource": "Recurso",
      "resource_type": "Tipo de recurso",
      "title": "Comentario",
      "title_content": "Comentarios (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Inicio",
    "dashboard_welcome": {
      "call_to_action": "Para agregar secciones edite 'app/admin/dashboard.rb'",
      "welcome": "Bienvenido a Active Admin. Esta es la página de inicio predeterminada."
    },
    "delete": "Eliminar",
    "delete_confirmation": "¿Está seguro de que quiere eliminar esto?",
    "delete_model": "Eliminar %{model}",
    "details": "Detalles de %{model}",
    "devise": {
      "change_password": {
        "submit": "Cambiar mi contraseña",
        "title": "Cambie su contraseña"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "¿Olvidó su contraseña?",
        "resend_confirmation_instructions": "Reenviar instrucciones de confirmación",
        "resend_unlock_instructions": "Reenviar instrucciones de desbloqueo",
        "sign_in": "registrarse",
        "sign_in_with_omniauth_provider": "Conéctate con %{provider}",
        "sign_up": "Ingresar"
      },
      "login": {
        "remember_me": "Recordarme",
        "submit": "iniciar sesión",
        "title": "iniciar sesión"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Reenviar instrucciones de confirmación",
        "title": "Reenviar instrucciones de confirmación"
      },
      "reset_password": {
        "submit": "Restablecer mi contraseña",
        "title": "¿Olvidó su contraseña?"
      },
      "sign_up": {
        "submit": "Registrarse",
        "title": "Registrarse"
      },
      "subdomain": {
        "title": "Subdominio"
      },
      "unlock": {
        "submit": "Reenviar instrucciones de desbloqueo",
        "title": "Reenviar instrucciones de desbloqueo"
      },
      "username": {
        "title": "Nombre de usuario"
      }
    },
    "download": "Descargar:",
    "dropdown_actions": {
      "button_label": "Acciones"
    },
    "edit": "Editar",
    "edit_model": "Editar %{model}",
    "empty": "Vacío",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Quitar Filtros",
        "filter": "Filtrar"
      },
      "predicates": {
        "contains": "Contiene",
        "ends_with": "Termina con",
        "equals": "Igual a",
        "greater_than": "Mayor que",
        "less_than": "Menor que",
        "starts_with": "Empieza con"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Eliminar",
    "has_many_new": "Añadir %{model}",
    "has_many_remove": "Quitar",
    "index_list": {
      "block": "Lista",
      "blog": "Blog",
      "grid": "Grilla",
      "table": "Tabla"
    },
    "less_than": "Less Than",
    "logout": "Salir",
    "main_content": "Por favor implemente %{model}#main_content para mostrar contenido.",
    "new_model": "Añadir %{model}",
    "next": "Siguiente",
    "pagination": {
      "empty": "No se han encontrado %{model}",
      "entry": {
        "one": "registro",
        "other": "registros"
      },
      "multiple": "Mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de un total de <b>%{total}</b>",
      "multiple_without_total": "Mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Mostrando <b>1</b> %{model}",
      "one_page": "Mostrando <b>un total de %{n}</b> %{model}"
    },
    "powered_by": "Funciona con %{active_admin} %{version}",
    "previous": "Anterior",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Filtros actuales:",
      "headline": "Alcance:",
      "no_current_filters": "Ninguno"
    },
    "sidebars": {
      "filters": "Filtros",
      "search_status": "Estado de la búsqueda"
    },
    "status_tag": {
      "no": "No",
      "yes": "Sí"
    },
    "unsupported_browser": {
      "headline": "Por favor tenga en cuenta que Active Admin no soporta versiones de Internet Explorer menores a 8.",
      "recommendation": "Recomendamos que actualice a la última versión de <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, o <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "Si está usando IE 9 o superior, asegúrese de <a href=\"http://windows.microsoft.com/es-es/windows7/webpages-look-incorrect-in-Internet-Explorer\">apagar la \"Vista de compatibilidad\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Ver"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Dirección",
        "address_city": "Ciudad",
        "address_housenumber": "Número de casa",
        "address_postcode": "Código postal",
        "address_street": "Calle",
        "name": "Nombre",
        "note": "Nota",
        "phone": "Teléfono",
        "type": "Tipo",
        "website": "Sitio web"
      },
      "user": {
        "first_name": "Nombre proporcionado",
        "last_name": "Apellido",
        "privacy_policy": "Política de privacidad",
        "terms": "Términos"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "debe ser aceptada",
        "blank": "no puede estar en blanco",
        "confirmation": "no se encontró coincidencia",
        "empty": "no puede estar vacío",
        "equal_to": "debe ser igual a %{count}",
        "even": "debe ser par",
        "exclusion": "está reservado",
        "greater_than": "tiene que ser mayor que %{count}",
        "greater_than_or_equal_to": "tiene que ser mayor o igual que %{count}",
        "inclusion": "no está en la lista",
        "invalid": "es incorrecto",
        "less_than": "tiene que ser inferior a %{count}",
        "less_than_or_equal_to": "tiene que ser inferior o igual a %{count}",
        "not_a_number": "no es un número",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "debe ser impar",
        "record_invalid": "La validación falló: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "ya ha sido cogido",
        "too_long": "es demasiado largo (máximo %{count} caracteres)",
        "too_short": "es demasiado corto (mínimo %{count} caracteres)",
        "wrong_length": "no tiene la longitud correcta (deben ser %{count} caracteres)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "no puede dejarse en blanco si ha introducido una contraseña"
            },
            "privacy_policy": {
              "accepted": "debe ser aceptado"
            },
            "terms": {
              "accepted": "debe ser aceptado"
            }
          }
        },
        "user_session": {
          "email": "Dirección de correo electrónico",
          "password": "Contraseña",
          "remember_me": "Siga conectado"
        }
      },
      "template": {
        "body": "Hubo problemas con los siguientos campos",
        "header": {
          "one": "1 error no deja que %{model} se guarde",
          "other": "%{count} errores no dejaron que %{model} se guarde"
        }
      }
    },
    "models": {
      "user": "Usuario"
    }
  },
  "apipie": {
    "api_documentation": "Documentación de la API",
    "comments_powered_by_disqus": "comentarios gracias a %{disqus}",
    "description": "Descripción",
    "enable_javascript_html": "Por favor, active JavaScript para ver el %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errores",
    "examples": "Ejemplos",
    "follow_instructions_href": "más instrucciones",
    "follow_instructions_html": "Siga %{href} sobre cómo describir sus controladores.",
    "goto_homepage_href": "%{app_name} página de documentación API  ",
    "goto_homepage_html": "Trate de ir a %{href}",
    "header_name": "Nombre de cabecera",
    "headers": "Cabeceras",
    "metadata": "Metadatos",
    "method_not_found_html": "Método  %{method} no encontrado para el recurso %{resource}.",
    "nil_allowed": "nil permitido",
    "no_docs_found": "No se encontró la documentación",
    "no_docs_found_descr": "No hemos encontrado ninguna documentación para tu API.",
    "oops": "Huy!!",
    "optional": "opcional",
    "param_name": "Nombre del parámetro",
    "params": "Parámetros",
    "required": "requerido",
    "resource": "Recurso",
    "resource_not_found_html": "Recurso %{resource} no encontrado.",
    "resources": "Recursos",
    "supported_formats": "Formatos soportados"
  },
  "application": {
    "require_no_user": {
      "notice": "Ya has ingresado..."
    },
    "require_user": {
      "notice": "Tienes que ingresar para ver esta página"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Añadir un nuevo lugar",
      "edit": "Editar lugar"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "cerrar",
    "skip": "saltear"
  },
  "date": {
    "abbr_day_names": [
      "Dom",
      "Lun",
      "Mar",
      "Mie",
      "Jue",
      "Vie",
      "Sáb"
    ],
    "abbr_month_names": [
      null,
      "ene",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "ago",
      "set",
      "oct",
      "nov",
      "dic"
    ],
    "day_names": [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%M %D %A",
      "short": "%M %D"
    },
    "month_names": [
      null,
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    "order": [
      ":año",
      "mes",
      ":día"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "sobre 1 hora",
        "other": "sobre %{count} horas"
      },
      "about_x_months": {
        "one": "sobre 1 mes",
        "other": "sobre %{count} meses"
      },
      "about_x_years": {
        "one": "sobre 1 año",
        "other": "sobre %{count} años"
      },
      "almost_x_years": {
        "one": "casi 1 año",
        "other": "casi %{count} años"
      },
      "half_a_minute": "medio minuto",
      "less_than_x_minutes": {
        "one": "menos de 1 minuto",
        "other": "menos de %{count} minutos"
      },
      "less_than_x_seconds": {
        "one": "menos de 1 segundo",
        "other": "menos de %{count} segundos"
      },
      "over_x_years": {
        "one": "más de 1 año",
        "other": "más de %{count} años"
      },
      "x_days": {
        "one": "1 día",
        "other": "%{count} días"
      },
      "x_minutes": {
        "one": "1 minuto",
        "other": "%{count} minutos"
      },
      "x_months": {
        "one": "1 mes",
        "other": "%{count} meses"
      },
      "x_seconds": {
        "one": "1 segundo",
        "other": "%{count} segundos"
      }
    },
    "prompts": {
      "day": "Día",
      "hour": "Hora",
      "minute": "Minuto",
      "month": "Mes",
      "second": "Segundos",
      "year": "Año"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Tu cuenta de correo ha sido confirmada.",
      "link": "No recibí ninguna instrucción de confirmación",
      "send_instructions": "En unos minutos recibirás un correo electrónico con las instrucciones de cómo confirmar tu cuenta.",
      "send_paranoid_instructions": "Si tu cuenta existe, recibirás un correo electrónico en pocos minutos con instrucciones de como confirmar tu cuenta"
    },
    "destroy": {
      "confirm": "¿Estás seguro?",
      "headline": "Borrar la cuenta",
      "link": "Borrar ahora"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Contraseña actual <i>(la necesitamos para confirmar tus cambios)</i>",
          "email": "Correo electrónico",
          "password": "Contraseña <i>(dejarla en blanco si no quieres cambiarla)</i>",
          "password_confirmation": "Repetir contraseña"
        },
        "submit": "Guardar cambios"
      },
      "headline": "Editar cuenta"
    },
    "failure": {
      "already_authenticated": "Ya estás registrado.",
      "inactive": "Tu cuenta todavía no está activada.",
      "invalid": "Correo electrónico o contraseña no válidos.",
      "invalid_token": "Ficha de auntenticación inválida.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Tu cuenta está bloqueada.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Tu sesión ha expirado, por favor ingresa de nuevo para continuar.",
      "unauthenticated": "Tienes que acceder a tu cuenta o registrarte antes de continuar",
      "unconfirmed": "Tienes que confirmar tu cuenta para continuar."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Por favor, haz clic en el enlace que acabamos de enviar a  tu dirección de correo electrónico. Si no recibes un correo electrónico de nosotros, por favor, primero fijate que no está en tu folder de correo basura. Si no está ahi, regresa a la página de registrarse e inténtalo de nuevo. ",
        "subject": "instrucciones de confirmación"
      },
      "reset_password_instructions": {
        "subject": "Instrucciones para restablecer contraseña"
      },
      "unlock_instructions": {
        "subject": "Instrucciones de desbloqueo"
      }
    },
    "mandatory": "* Obligatorio",
    "omniauth_callbacks": {
      "failure": "La autorización con %{kind} ha fallado. Error: \"%{reason}\". ",
      "permission_missing": "No otorgaste el permiso requerido. ",
      "success": "Has ingresado satisfactoriamente con %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Correo electrónico"
        },
        "submit": "Restaurar contraseña"
      },
      "headline": "¿Olvidaste tu contraseña?"
    },
    "password_reset": {
      "email": {
        "comment": "Si no has solicitado cambiar la contraseña por favor, ignora este correo<br/>Tu contraseña no se cambiará si no haces clic en este enlace",
        "headline": "Bienvenido %{email}",
        "link": "Cambiar contraseña",
        "text": "Hemos recibido un pedido para cambiar tu contraseña. Si enviaste el pedido, haz clic en el siguiente enlace. ¡Si no fue así, ignora esto!"
      },
      "form": {
        "labels": {
          "password": "Nueva contraseña",
          "password_confirmation": "Repetir contraseña"
        },
        "submit": "Restaurar contraseña"
      },
      "headline": "Restaurar contraseña"
    },
    "passwords": {
      "link": "¿Olvidaste tu contraseña?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "En unos pocos minutos recibirás un correo electrónico con instrucciones sobre cómo resetear tu password",
      "send_paranoid_instructions": "Si tu cuenta existe, en unos pocos minutos recibirás un correo electrónico con las instrucciones de como resetear tu password",
      "updated": "Tu contraseña ha sido cambiada. Ya estás conectado",
      "updated_not_active": "Tu contraseña se ha cambiado con éxito"
    },
    "registrations": {
      "destroyed": "¡Adiós! Tu cuenta ha sido cancelada. Esperamos verte de nuevo pronto.",
      "inactive_signed_up": "Te has registrado satisfactoriamente, pero no pudimos hacerte ingresar. Razón: \"%{reason}\"",
      "link": "Registrarse",
      "reasons": {
        "inactive": "inactivo",
        "locked": "bloqueado",
        "unconfirmed": "sin confirmar"
      },
      "signed_up": "Te has registrado satisfactoriamente. Te enviamos un email de confirmación",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Has actualizado tu cuenta satisfactoriamente."
    },
    "sessions": {
      "inactive": "Tu cuenta todavía no está activada.",
      "invalid": "Correo o contraseña incorrectos.",
      "invalid_token": "Token de autenticación inválido",
      "link": "Registrarse",
      "locked": "Tu cuenta está bloqueada.",
      "new": {
        "no_osm_account": "¿No tienes cuenta en OpenStreetMap?",
        "osm_promo_text": "Wheelmap está basado en datos geográficos de OpenStreetMap (OSM). OpenStreetMap es en mapa mundial creado por gente como tú. Es como una Wikipedia de mapas. Para habilitar la edición de lugares o crear nuevos, necesitas una cuenta en OpenStreetMap y debes de ingresar en ella. ",
        "promo_text_thank_you": "¡Muchas gracias por tu apoyo!",
        "sign_in_with": "Ingresar con %{kind}",
        "sign_up_with_osm": "Registrarse ahora.",
        "wheelmap_promo_text": "Con tu conocimiento acerca de lugares accesibles para silla de ruedas, tu puedes ayudar a gente con deficiencias de movilidad a planear mejor su día a día. Además, esto ayuda a OpenStreetMap a ser más detallado."
      },
      "signed_in": "Sesión iniciada satisfactoriamente",
      "signed_out": "Sesión finalizada",
      "timeout": "Tu sesión ha expirado, por favor ingresa de nuevo para continuar. ",
      "unauthenticated": "Necesitas ingresar o registrarte antes de continuar.",
      "unconfirmed": "Tienes que confirmar tu cuenta para continuar"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Correo electrónico",
          "password": "Contraseña",
          "remember_me": "¿Quieres seguir conectado?"
        },
        "submit": "Ingresar"
      },
      "headline": "Ingresar"
    },
    "sign_out": {
      "headline": "Salir"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirmar mi cuenta",
        "please_confirm": "Puedes confirmar tu cuenta a través del enlace siguiente:",
        "welcome": "Bievenido %{email}!"
      },
      "form": {
        "labels": {
          "email": "Correo electrónico",
          "password": "Contraseña",
          "password_confirmation": "Repetir contraseña",
          "wants_newsletter": "Sí, mantenme informado sobre Wheelmap - pero, por favor, no más de una vez por mes."
        },
        "submit": "Registrarse"
      },
      "headline": "Registrarse"
    },
    "unlocks": {
      "link": "¿No has recibido las instrucciones de desbloqueo?",
      "send_instructions": "En unos pocos minutos recibirás un correo electrónico con instrucciones sobre cómo desbloquear tu cuenta",
      "send_paranoid_instructions": "Si tienes una cuenta, en unos pocos minutos recibirás un correo electrónico con instrucciones sobre cómo desbloquear tu cuenta",
      "unlocked": "Tu cuenta ha sido desbloqueada. Ya estás conectado."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "debe de ser aceptado",
      "already_confirmed": "ya ha sido confirmado",
      "blank": "tiene que ser completado",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "no tiene confirmación",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "tiene que ser completado",
      "equal_to": "tiene que tener exactamente %{count}",
      "even": "debe de ser un número par",
      "exclusion": "está reservado",
      "expired": "ha caducado, solicite una nueva.",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "debe ser mayor que %{count}",
      "greater_than_or_equal_to": "debe de ser más grande que o igual a %{count}",
      "inclusion": "no es un valor correcto",
      "invalid": "no es válido",
      "less_than": "tiene que ser menor que %{count}",
      "less_than_or_equal_to": "debe de ser menos que o igual a %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "no es un número",
      "not_an_integer": "tiene que ser un número entero",
      "not_found": "no se ha encontrado",
      "not_locked": "no estaba bloqueado",
      "not_saved": {
        "one": "Un error ha impedido que se guarde %{resource}:",
        "other": "%{count} errores han impedido guardar un %{resource}:\n"
      },
      "odd": "debe de ser un número impar",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "ya ha sido tomado",
      "too_long": "es demasiado largo (no más de %{count} caracteres)",
      "too_short": "es demasiado corto (no menos de %{count} caracteres)",
      "wrong_length": "no tiene la longitud correcta (deben ser %{count} caracteres)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "La dirección del sitio web no es válida."
        }
      }
    },
    "template": {
      "body": "Hubo problemas con los siguientes campos:",
      "header": {
        "one": "Este %{model} no se ha podido guardar por un error",
        "other": "Este %{model} no se ha podido guardar por %{count} errores"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Siempre puedes cambiar el marcador de un lugar tú mismo. Solo debes seleccionar el marcador correcto y \"Guardar\" - ¡listo!",
      "1": "Si ingresas como usuario puedes agregar o corregir todos los detalles de un lugar. Haz clic en \"Editar\" y corrige o agrega información en la máscara.",
      "2": "Puedes agregar más información (ej. \"Este lugar tiene una rampa móvil\") y la sección de comentarios. Haz clic en \"Editar\" y \"Agregar comentario\"."
    },
    "headline": "¿Hay un problema con este lugar?",
    "questions": {
      "0": "El marcador es erróneo.",
      "1": "Los detalles del lugar son incorrectos o faltan.",
      "2": "Tengo más información acerca de este lugar."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} fue creado exitosamente."
      },
      "destroy": {
        "alert": "%{resource_name} no se puede borrar",
        "notice": "%{resource_name} fue eliminado satisfactoriamente"
      },
      "update": {
        "notice": "%{resource_name} se ha actualizado satisfactoriamente"
      }
    },
    "photos": {
      "destroy": {
        "notice": "La imagen ha sido borrada."
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Accesible en silla de ruedas",
    "show_limited_accessible_places": "Parcialmente accesible para personas con discapacidad",
    "show_places_without_status": "Estado desconocido",
    "show_unaccessible_places": "No accesible a sillas de ruedas"
  },
  "formtastic": {
    "cancel": "Cancelar",
    "create": "Guardar %{model}",
    "hints": {
      "email": "Tratamos tu dirección de forma confidencial. Prometemos no enviarte correo basura.",
      "lat": "Mueve el marcador en el mapa a la posición correcta",
      "osm_username": "¿Todavía no eres un miembro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\"> Crea una cuenta OpenStreetMap ahora</a>",
      "password": "(dejar vacío si no quiere modificarlo)",
      "phone": "Por ejemplo: +49 30 12345678",
      "website": "Por ejemplo: http://www.example.com"
    },
    "labels": {
      "category": "Categoría:",
      "centralkey": "Clave central:",
      "city": "Ciudad:",
      "create": "Crear un lugar ",
      "email": "Correo electrónico",
      "finish": "Finalizar",
      "housenumber": "No:",
      "lat": "Latitud",
      "lon": "Longitud",
      "name": "Nombre:",
      "osm_password": "Password de OpenStreetMap ",
      "osm_username": "Nombre de la cuenta de OpenStreetMap",
      "password": "Contraseña",
      "password_confirmation": "Repetir contraseña",
      "phone": "Teléfono:",
      "postcode": "Código Postal:",
      "privacy_policy": "Acepto los párrafos 1 y 2 del acuerdo de privacidad de datos.",
      "reset": "Reiniciar",
      "save": "Guardar",
      "street": "Calle:",
      "terms": "Acepto los términos de uso.",
      "type": "Tipo:",
      "website": "Sitio web:",
      "wheelchair": "¿Accesibilidad para silla de ruedas?",
      "wheelchair_description": "Comentario sobre la accesibilidad:",
      "wheelchair_toilet": "Baño accesible para silla de ruedas:"
    },
    "no": "No",
    "required": "requerido",
    "reset": "Restablecer %{model}",
    "submit": "Aceptar",
    "titles": {
      "basic": "Datos básicos",
      "optional": "Más información <span class=\"addition\">(todos los campos son opcionales)</span>"
    },
    "update": "Guardar %{model}",
    "yes": "Sí"
  },
  "global": {
    "form_validation_error": "Por favor revisa los siguientes errores"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org es un mapa en línea para buscar, encontrar y marcar lugares accesibles para silla de ruedas. ¿Participa marcando lugares públicos como bares, restaurantes, cines o supermercados!",
      "homepage": "Página principal",
      "keywords": "lugares accesibles silla de ruedas buscar marcadores pin",
      "search": "Buscar",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Acerca de Wheelmap",
      "blog": "Noticias",
      "choose_language": "Elija idioma",
      "contact": "Contacto",
      "feedback": "Comentarios",
      "home": "Empezar",
      "how_to_add_a_place": "¿Cómo agrego lugares?",
      "imprint": "Institucional",
      "logged_in_as": "Has ingresado como:",
      "login": "Ingresar",
      "logout": "Salir",
      "map": "Mapa",
      "newsletter": "Boletín de noticias",
      "press": "Prensa",
      "profile": "Perfil",
      "projects": "Involúcrate",
      "suggestions": "Sugerencias",
      "what_is_barrier_free": "¿Qué significa \"accesible para silla de ruedas\"?",
      "what_is_wheelmap": "¿Qué es Wheelmap?"
    },
    "searchbar": {
      "add_place": "Agregar otro lugar",
      "find": "Buscar",
      "placeholder": "Buscar un lugar",
      "title_add_place": "¡Agrega ahora mismo otro nuevo lugar en esta posición!"
    },
    "tagline": "Logo del wheelmap",
    "title": "Encuentra lugares accesibles para silla de ruedas",
    "toolbar": {
      "categories": "Categorías"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Mostrando <b>%{first}&nbsp;-&nbsp;%{last}</b> %{entry_name} de <b>%{total}</b> en total"
      },
      "one_page": {
        "display_entries": {
          "one": "Mostrando <b>%{count}</b> %{entry_name}",
          "other": "Mostrando <b>un total de %{count}</b> %{entry_name}",
          "zero": "No se han encontrado %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "Por favor elige"
    },
    "submit": {
      "create": "crear %{model}",
      "submit": "guardar %{model}",
      "update": "actualizar %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Mostrar en Wheelmap.org",
      "filter": {
        "category": "Elegir Categoría:",
        "deselect_all": "Deseleccionar todo",
        "select_all": "Seleccionar todo",
        "wheelchair": "¿Accesible para silla de ruedas?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorar",
          "upgrade": "Actualizar navegador"
        },
        "warning": {
          "headline": "¡Lo sentimos!",
          "message": "Parece que estás usando Internet Explorer. Wheelmap requiere un navegador compatible estandard para funcionar correctamente. Por favor, considera usar Firefox, Chrome, Safari o Opera. "
        }
      },
      "link": {
        "node": {
          "create": "Añadir un nuevo lugar"
        }
      },
      "overlay": {
        "button": "OK, ¡Vamos!",
        "categories": "Filtrar lugares por categorías",
        "filter": "Filtrar lugares por accesibilidad en silla de ruedas",
        "headline": "Marca y encuentra lugares accesibles en sillas de ruedas con Wheelmap.org - internacional y gratuito. Es fácil:",
        "lookup": "Buscar un lugar específico",
        "secondary_headline": "Nuestro semáforo para marcar la accesibilidad en silla de ruedas de los lugares públicos:"
      },
      "popup": {
        "form": {
          "limited": "Parcialmente accesible para personas con discapacidad",
          "no": "No accesible a sillas de ruedas",
          "save": "Actualizar",
          "unknown": "Estado desconocido",
          "yes": "Accesible en silla de ruedas"
        },
        "help": "¿Accesible para silla de ruedas? (Ayuda)",
        "more": "más ..."
      },
      "zoom_alert": "Haz zoom para ver mas lugares"
    }
  },
  "how?": "¿Cómo?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Todos los lugares parcialmente accesibles a la silla de ruedas %{type} en %{city} (%{count})"
        },
        "no": {
          "headline": "Todos los lugares no accesibles a la silla de ruedas %{type} en %{city} (%{count})"
        },
        "unknown": {
          "headline": "Todos los %{type} en %{city} con accesibilidad en silla de ruedas desconocida (%{count})"
        },
        "yes": {
          "headline": "Todos los %{type} accesibles en silla de ruedas en %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Un proyecto de Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Escoge una categoría"
    },
    "node": {
      "info_edit_position": "La ubicación aparecerá en Wheelmap tal como se muestra arriba. Si el marcador no está en el lugar correcto puedes <a href=\"%{url}\">cambiar su posición en OpenStreetMap.</a>",
      "mail": {
        "body": "(Por favor escribe solo en inglés o alemán.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problema con %{headline}"
      }
    },
    "node_type": {
      "prompt": "Escoge un tipo"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Teléfono:",
      "website": "Sitio web:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ups, tu carga fue incorrecta o incompleta",
        "successfull": "Gracias, tu actualización ha sido guardada con éxito y estará en línea en breve. "
      }
    },
    "edit": {
      "header": {
        "title": "Editar lugar: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "errors": {
      "default": "Ups! Algo salió mal. Hemos sido informados acerca de este problema",
      "not_authorized": "Disculpa, la autenticación ha fallado",
      "not_available": "Disculpa, esta página no está disponible temporalmente.",
      "not_existent": "Disculpa, este lugar ya no está disponible.",
      "not_found": "Disculpa, página no encontrada.",
      "param_missing": "Por favor, ingresa un término de búsqueda"
    },
    "flash": {
      "authorize_wheelmap": "Necesitas una cuenta OpenStreetMap para modificar datos."
    },
    "new": {
      "form": {
        "legend": "Ubicación del sitio",
        "location": "Por favor, haz click donde el lugar esta localizado en el mapa",
        "section": {
          "accessibility": {
            "name": "Accesibilidad para silla de ruedas",
            "title": "Información de la accesibilidad para silla de rueda"
          },
          "address": {
            "help": "Puedes mover el marcador para corregir la localización en el mapa",
            "name": "Dirección",
            "title": "¿Dónde esta el lugar?"
          },
          "contact": {
            "name": "Contacto",
            "title": "Otra información de contacto"
          },
          "name_category": {
            "name": "Nombra y coloca el tipo",
            "title": "Danos alguna información inicial sobre tu lugar"
          },
          "overview": {
            "title": "¿Es toda la información correcta?"
          },
          "similar_nodes": {
            "empty": "No hay lugares similares encontrados",
            "go_edit": "Continuar con este lugar",
            "go_new": "No es ninguno de los lugares mencionados arriba",
            "name": "Lugares similares",
            "title": "Encontramos lugares similares cerca. ¿Es uno de esos?"
          }
        },
        "title": "Agrega un lugar"
      },
      "header": {
        "title": "Nuevo lugar | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancelar"
      }
    },
    "node": {
      "link": {
        "claim": "¿Trabajas aquí?",
        "edit_node": "Editar lugar",
        "report_bug": "Reportar un problema"
      }
    },
    "node_data": {
      "address": "Dirección:",
      "contact_details": "Detalles de contacto:"
    },
    "node_edit": {
      "details": "Detalles",
      "edit": "Editar"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Comentario:"
    },
    "node_photos": {
      "add": "Agregar",
      "photos_of_this_place": "Fotos de este lugar:",
      "upload": "Subir"
    },
    "node_similar": {
      "similar": "Lugares similares: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Baño accesible para silla de ruedas:",
      "premium": "%{name} dice: este lugar es",
      "wheelchair_accessibility": "Accesibilidad para silla de ruedas:"
    },
    "node_streetview": {
      "streetview": "Vista de la calle:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Averigua si este lugar es accesible para silla de ruedas en Wheelmap.org. O agrega más información y fotos al lugar.",
          "title": "Este lugar está en Wheelmap.org: %{name}"
        },
        "title": "Lugar: %{node} | wheelmap.org"
      },
      "link": {
        "back": "volver",
        "large_map": "Ampliar",
        "listing": "Todos los lugares de tipo '%{type}' en %{city}",
        "upload": "Subir imagen"
      },
      "more_data_from": "Hay más información acerca de este lugar, validado por: ",
      "share": {
        "email": "Correo electrónico",
        "facebook": "Facebook",
        "text": "Encontré este lugar en Wheelmap.org %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Ups, tu carga fue incorrecta o incompleta",
        "successfull": "Gracias, tu envío ha sido guardado con éxito y estará en línea en breve. "
      }
    },
    "update_wheelchair": {
      "successfull": "El estado de \"%{name}\" ha cambiado a \"%{status}\" y estará en línea en breve. "
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": "-",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": "-",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billón",
          "million": "Millón",
          "quadrillion": "Trillón",
          "thousand": "Mil",
          "trillion": "Billón",
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
        "headline": "Necesitas conectar tu cuenta con tu cuenta de OpenStreetMap antes de crear o modificar un lugar en Wheelmap.org"
      }
    },
    "callback": {
      "notice": "Ahora tu cuenta de Wheelmap está conectada a tu cuenta de OpenStreetMap %{user}"
    }
  },
  "or": "o",
  "place": {
    "one": "%{count} lugar",
    "other": "%{count} lugares"
  },
  "poi": {
    "category": {
      "accommodation": "Alojamiento",
      "education": "Educación",
      "food": "Comida",
      "government": "Gobierno",
      "health": "Salud",
      "leisure": "Entretenimiento",
      "misc": "Miscelánea",
      "money_post": "Oficina de giro postal",
      "public_transfer": "Transporte público",
      "shopping": "Compras",
      "sport": "Deportes",
      "tourism": "Turismo",
      "unknown": "Desconocido"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel de playa",
        "bed_and_breakfast": "Dormir y desayuno",
        "camp_site": "Campo",
        "caravan_site": "Zona de caravanas",
        "chalet": "Chalet",
        "dormitory": "Dormitorio",
        "guest_house": "Casa de huéspedes",
        "hostel": "Hostal",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Universidad",
        "driving_school": "Autoescuela",
        "kindergarten": "Jardín de infancia",
        "library": "Biblioteca",
        "museum": "Museo",
        "school": "Colegio",
        "university": "Universidad"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Biergarten",
        "cafe": "Cafe",
        "drinking_water": "Agua potable",
        "fast_food": "Comida rápida",
        "ice_cream": "Heladería",
        "pub": "Pub",
        "restaurant": "Restaurante"
      },
      "government": {
        "courthouse": "Juzgado",
        "embassy": "Embajada",
        "employment_agency": "Agencia de empleos",
        "government": "Agencia gubernamental",
        "police": "Policía",
        "public_building": "Edificio público",
        "townhall": "Ayuntamiento"
      },
      "health": {
        "alternative": "Especialista en medicina alternativa",
        "dentist": "Dentista",
        "doctors": "Doctor",
        "hearing_aids": "Distribuidor de audífonos",
        "hospital": "Hospital",
        "medical_supply": "Suministros Médicos",
        "occupational_therapist": "Terapista ocupacional",
        "pharmacy": "Farmacia",
        "physiotherapist": "Fisioterapeuta",
        "psychotherapist": "Psicoterapeuta",
        "social_facility": "Instalaciones sociales",
        "speech_therapist": "Terapista del habla",
        "veterinary": "Veterinario"
      },
      "leisure": {
        "arena": "Estadio",
        "brothel": "Burdel",
        "casino": "Casino",
        "cinema": "Cine",
        "community_centre": "Centro comunitario",
        "gallery": "Galería",
        "massage": "Spa de masajes",
        "nightclub": "Discoteca",
        "playground": "Área de juegos",
        "sauna": "Sauna",
        "stripclub": "Club de striptease",
        "tattoo": "Tienda de tatuajes",
        "theatre": "Teatro",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Asocición",
        "company": "Empresa (oficinas)",
        "estate_agent": "Agente inmobiliario",
        "insurance": "Seguros",
        "lawyer": "Abogado",
        "ngo": "Organización no gubernamental",
        "place_of_worship": "Zona religiosa",
        "political_party": "Oficina de partido político",
        "toilets": "Sanitarios"
      },
      "money_post": {
        "atm": "ATM",
        "bank": "Banco",
        "bureau_de_change": "Cambio de moneda",
        "post_box": "Buzón",
        "post_office": "Oficina de correos"
      },
      "public_transfer": {
        "aerodrome": "Aeropuerto",
        "bicycle_parking": "Estacionamiento de bicicletas",
        "bicycle_rental": "Alquiler de Bicicletas",
        "boatyard": "Astillero",
        "bus_station": "Estación de autobús",
        "bus_stop": "Parada de autobús",
        "cable_car": "Teleférico",
        "car_rental": "Alquiler de coches",
        "car_sharing": "Compartir coches",
        "chair_lift": "Telesilla",
        "ferry": "Ferry",
        "ferry_terminal": "Terminal de Ferry",
        "fuel": "Gasolinera",
        "halt": "Apeadero",
        "light_rail": "Tren urbano",
        "parking": "Parking",
        "parking_aisle": "Parking lateral",
        "platform": "Plataforma",
        "station": "Metro",
        "subway_entrance": "Entrada de metro",
        "terminal": "Terminal del aeropuerto",
        "tram_stop": "Parada de tranvía"
      },
      "shopping": {
        "alcohol": "Licor",
        "antiques": "Antiguedades",
        "art": "Tienda de galería de arte",
        "bakery": "Panadería",
        "beauty": "Salón de belleza",
        "beverages": "Bebidas",
        "bicycle": "Tienda de bicicletas",
        "books": "Libros",
        "butcher": "Carnicería",
        "car_repair": "Taller de coches\n",
        "car_shop": "Concesionario",
        "chemist": "Botica",
        "clothes": "Ropa",
        "computer": "Ordenadores",
        "confectionery": "Bombonería",
        "convenience": "Comodidad",
        "copyshop": "Fotocopiadora",
        "deli": "Delicatessen",
        "department_store": "Almacén",
        "doityourself": "Hazlo tú mismo",
        "dry_cleaning": "Tintorería",
        "electronics": "Electrónicos",
        "erotic": "Sex shop",
        "fabric": "Tienda de telas",
        "farm_shop": "Granja",
        "florist": "Floristería",
        "funeral_directors": "Funeraría",
        "furniture": "Muebles",
        "garden_centre": "Centro de jardinería",
        "gift": "Tienda de regalos",
        "greengrocer": "Verdulería",
        "hairdresser": "Peluquería",
        "hardware": "Hardware",
        "interior_decoration": "Tienda de diseño de interiores",
        "jewelry": "Joyas",
        "kiosk": "Kiosko",
        "laundry": "Lavandería",
        "mall": "Centro comercial",
        "mobile_phone": "Tienda de móviles",
        "music": "Tienda de discos",
        "musical_instrument": "Tienda de instrumentos musicales",
        "newsagent": "Agente de noticias",
        "optician": "Ópica",
        "organic": "Tienda ecológica",
        "outdoor": "Suministros al aire libre",
        "pet": "Tiendas de mascotas",
        "photo": "Foto",
        "second_hand": "Segunda mano",
        "shoes": "Zapatos",
        "sports": "Deportes",
        "stationery": "Papelería",
        "supermarket": "Supermercado",
        "tailor": "Sastre",
        "tea": "Distribuidor de té",
        "tobacco": "Tabaquería",
        "toys": "Juguetes",
        "travel_agency": "Agencia de viajes",
        "variety_store": "Tienda de rebajas",
        "video": "Videoclub"
      },
      "sport": {
        "pitch": "Campo deportivo",
        "sports_centre": "Centro de deportes",
        "stadium": "Estadio",
        "swimming": "Natación",
        "swimming_pool": "Piscinas"
      },
      "tourism": {
        "archaeological_site": "Sitio arqueológico",
        "arts_centre": "Centro de artes",
        "artwork": "Material gráfico",
        "attraction": "Atracciones",
        "battlefield": "Campo de batalla",
        "beach": "Playa",
        "beacon": "Faro",
        "castle": "Castillo",
        "cave_entrance": "Entrada a la cueva",
        "information": "Información turística",
        "memorial": "Monumento",
        "theme_park": "Parque temático",
        "tower": "Torre",
        "viewpoint": "Punto de vista"
      },
      "unknown": {
        "unknown": "Desconocido"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Estado: conectado",
          "grant": "Conectarse ahora",
          "not_connected": "Estado: No conectado",
          "revoke": "Desconectar"
        }
      },
      "headline": "Editar tu perfil"
    }
  },
  "ransack": {
    "all": "todos",
    "and": "y",
    "any": "cualquier",
    "asc": "ascendente",
    "attribute": "atributo",
    "combinator": "combinado",
    "condition": "condición",
    "desc": "descendente",
    "or": "o",
    "predicate": "predicado",
    "predicates": {
      "blank": "está en blanco",
      "cont": "contiene",
      "cont_all": "contiene todos",
      "cont_any": "contiene cualquier",
      "does_not_match": "no coincide",
      "does_not_match_all": "no coincide con todos",
      "does_not_match_any": "no coincide con ninguna",
      "end": "termina con",
      "end_all": "termina con todo",
      "end_any": "termina con cualquier",
      "eq": "es igual a",
      "eq_all": "es igual a todos",
      "eq_any": "es igual a cualquier",
      "false": "es falso",
      "gt": "mayor que",
      "gt_all": "mayor que todos",
      "gt_any": "mayor que cualquier",
      "gteq": "mayor que o igual a",
      "gteq_all": "mayor que o igual a todos",
      "gteq_any": "mayor que o igual a cualquier",
      "in": "en",
      "in_all": "en todos",
      "in_any": "en cualquier",
      "lt": "menor que",
      "lt_all": "menor o igual a",
      "lt_any": "menor que cualquier",
      "lteq": "menor que o igual a",
      "lteq_all": "menor o igual a todos",
      "lteq_any": "menor o igual a cualquier",
      "matches": "coincidir",
      "matches_all": "coincidir a todos",
      "matches_any": "coincidir a cualquier",
      "not_cont": "no contiene",
      "not_cont_all": "no contiene toda",
      "not_cont_any": "no contiene ninguna",
      "not_end": "no termina con",
      "not_end_all": "no termina con todo",
      "not_end_any": "no termina con cualquier",
      "not_eq": "no es igual a",
      "not_eq_all": "no es iguala todos",
      "not_eq_any": "no es igual a cualquier",
      "not_in": "no en",
      "not_in_all": "no en todos",
      "not_in_any": "no en cualquier",
      "not_null": "no es nula",
      "not_start": "no inicia con",
      "not_start_all": "no inicia con toda",
      "not_start_any": "no comienza con cualquier",
      "null": "es nula",
      "present": "es presente",
      "start": "comienza con",
      "start_all": "comienza con toda",
      "start_any": "comienza con cualquier",
      "true": "es verdadero"
    },
    "search": "buscar",
    "sort": "ordernar",
    "value": "valor"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Disculpa, no pudimos encontrar un lugar llamado \"%{query}\".",
        "hint": {
          "example": "<strong>Ejemplo:</strong> Londres, Reino Unido",
          "info": "Nuestra búsqueda solo funciona con información del lugar o su dirección. Por favor haz una búsqueda en esos términos, ej: nombre de la calle y/o ciudad. Buscar un tipo de lugar, ej. restaurante o cine, ¡no funcionará!",
          "work_in_progress": "Trabajamos mucho para hacerla búsqueda de lugares cada vez más fácil e intuitiva."
        },
        "try_this": {
          "address": "Por favor, proporcione más <strong>detalles de la dirección</strong>.",
          "intro": "Pruebe esto:",
          "spell_check": "Revise la <strong>ortografía</strong> de su entrada"
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultado:",
          "other": "%{count} resultados:"
        }
      },
      "search": {
        "for": "Buscando \"%{q}\"",
        "not_found": "No se ha encontrado ningún lugar"
      }
    },
    "timeout": {
      "headline": "Lo sentimos, algo salio mal",
      "info": "Nuestro servicio de búsqueda estuvo no disponible",
      "repeat_search": "Reintentar la búsqueda"
    }
  },
  "splash": {
    "countline": "%{count} lugares ya han sido marcados.",
    "headline": "¡Todo el mundo puede añadir lugares accesible para sillas de ruedas!",
    "start": "Comenzar",
    "step1": "Haz clic en un lugar que conozcas",
    "step2": "Márcalo y pulsa guardar",
    "step3": "¡Eso es! No hace falta registrarse.",
    "what_is_wheelmap": "¿Qué es Wheelmap?"
  },
  "statistics": "Estadísticas",
  "support": {
    "array": {
      "last_word_connector": ", y",
      "sentence_connector": "y",
      "two_words_connector": "y",
      "words_connector": ","
    },
    "select": {
      "prompt": "Por favor elija"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%d de %B, %Y %H:%M",
      "short": "%b de %d %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Baño no accesible para silla de ruedas",
    "unknown": "Tipo de baño desconocido",
    "what_is": {
      "no": "El marco de la puerta mide como mínino 90cm (35''), dimensiones del baño son como mínimo 150 x 150 cm (59 x 59 ''), la altura del inodoro es para sillas, barandas plegables y lavamanos accesible.",
      "unknown": "Ayuda marcando el estado de los baños",
      "yes": "El marco de la puerta mide como mínimo 90cm (35''), dimensiones del baño son como mínimo 150 x 150 cm (59 x 59 ''), la altura del inodoro es para sillas, barandas plegables y lavamanos accesible."
    },
    "yes": "Baño accesible para silla de ruedas"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "¡Tu cuenta está activada!"
      },
      "error": {
        "notice": "El correo y la contraseña no coinciden."
      },
      "notice": "Estás conectado"
    },
    "destroy": {
      "notice": "¡Adiós! ¡Vuelve pronto!"
    },
    "new": {
      "email": "Dirección de email",
      "login": "Ingresar",
      "login_with_twitter": "Ingresar con Twitter",
      "password": "Contraseña",
      "remember_me": "Seguir conectado"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Ya casi lo haces! Ahora para finalizar el proceso: ",
        "set_password_for_mobile": "Te has registrado satisfactoriamente en OpenStreetMap. Por favor, escoge una dirección email que te gustaría usar para mantenerte informado sobre tus actividades (por ejemplo, el número de lugares que has marcado): Puedes acceder a esta información en tu \"Profile\".",
        "text": "¿Cómo podemos ponernos en contacto contigo? Puedes cambiar esta información más tarde en tu perfil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Tus imágenes subidas"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "La información de tu cuenta"
        },
        "title": "Perfil"
      },
      "newsletter": {
        "label": "Sí, mantenme informado sobre Wheelmap",
        "text": "Mantenme informado con los boletines informativos de Wheelmap. No te preocupe, no te enviaremos correos basura. Sabrás sobre nosotros una vez al mes a lo mucho.",
        "title": "Boletín de noticias"
      },
      "photos": {
        "empty": "No has subido ninguna foto aún",
        "title": "Fotos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hola",
          "personalized": "Hola %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "subida %{count} foto",
            "other": "subidas %{count} fotos"
          },
          "pois_added": {
            "one": "añadido %{count} lugar",
            "other": "añadidos %{count} lugares"
          },
          "pois_edited": {
            "one": "editado %{count} lugar",
            "other": "editados %{count} lugares"
          },
          "pois_marked": {
            "one": "marcado %{count} lugar",
            "other": "marcados %{count} lugares"
          },
          "text": "Tú tienes"
        },
        "text_html": "Hola,<br>\nBienvenido (de nuevo) a Wheelmap.org! Estamos felices de tenerte con nosotros! Puedes navegar en nuestro <a href=\\\"http://news.wheelmap.org/en/\\\">Blog</a> o <a href=\\\"http://news.wheelmap.org/en/FAQ/\\\">FAQs</a> si quieres saber un poco más sobre Wheelmap.org. O quieres aprender un poco sobre el <a href=\\\"http://news.wheelmap.org/en/wheelmap-ambassador/\\\">projecto</a> que ofrecemos y como puedes formar parte de ellos.<br>\nPara estar en contacto, puedes subscribirte a nuestro boletín mensual o seguirnos en <a href=\\\"https://www.facebook.com/wheelmap\\\">Facebook</a> y <a href=\\\"https://twitter.com/wheelmap\\\">Twitter</a>. Esperamos con ansías escuchar tus opiniones y empezar una conversación contigo!<br>\nY ahora, mapea feliz!<br>\nTu equipo de Wheelmap",
        "title": "Visión de conjunto"
      },
      "widget": {
        "categories": "Muestra el filtro de categoría",
        "center": "Mapa de la zona",
        "empty_center": "Buscar el centro del mapa ...",
        "empty_provider": "Escoger un proveedor",
        "height": "Alto",
        "legends": {
          "embed": "Código de inserción",
          "embed_explanation": "Puedes cambiar los datos de las latitudes (<code>lat</code>), longitudes (<code>lon</code>) y el nivel del zoom (<code>zoom</code>) en el código de arriba manualmente y, así, ajustar el segmento del mapa (widget) basándote en el lugar que quieres mostrar.",
          "general": "Crea tu propio widget de Wheelmap e insértalo en tu página web o blog.",
          "preview": "Vista previa",
          "settings": "Ajustes"
        },
        "providers": "Proveedor",
        "title": "Widget",
        "width": "Ancho"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Primera",
      "last": "Última &raquo;",
      "next": "Siguiente &rsaquo;",
      "previous": "&lsaquo; Anterior",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Parcialmente accesible para personas con discapacidad",
    "no": "No accesible a sillas de ruedas",
    "unknown": "Estado desconocido",
    "yes": "Accesible en silla de ruedas"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Un proyecto de",
      "based_on": "Basado en",
      "become_a_supporter": "Conviértete en colaborador",
      "main_supporter": "Colaborador principal"
    },
    "itunes": {
      "alt": "Logo de AppStore",
      "title": "¡Descarga la aplicación de iPhone ahora!"
    },
    "logo": {
      "alt": "Logo de Wheelmap - busca lugares accesibles para silla de ruedas",
      "title": "Wheelmap - busca lugares accesibles para silla de ruedas"
    },
    "what_is": {
      "fully_accessible": "La entrada no tiene escalones, todas las habitaciones no tienen escalones.",
      "limited_accessible": "La entrada tiene un escalón con una altura máxima de 7cm (3\"), la mayoría de las habitaciones no tienen escalones.",
      "not_accessible": "La entrada tiene uno o varios escalones, las habitaciones no son accesibles.",
      "unknown_accessible": "¡Ayude marcando sitios!"
    }
  },
  "will_paginate": {
    "next_label": "Siguiente &#8594;",
    "page_entries_info": {
      "multi_page": "Mostrando %{model} %{from} - %{to} de %{count} en total",
      "multi_page_html": "Mostrar %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> en total",
      "single_page": {
        "one": "Mostrando 1 %{model}",
        "other": "Mostrando %{count} %{model}",
        "zero": "No se ha encontrado %{model}"
      },
      "single_page_html": {
        "one": "Mostrando <b>1</b> %{model}",
        "other": "Mostrando <b>todo&nbsp;%{count}</b> %{model}",
        "zero": "No se ha encontrdo %{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "Anterior"
  }
});
