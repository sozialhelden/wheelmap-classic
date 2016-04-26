I18n.translations || (I18n.translations = {});
I18n.translations["bg"] = I18n.extend((I18n.translations["bg"] || {}), {
  "actions": {
    "cancel": "Отказ",
    "next": "Следващ",
    "save": "Запази",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "Нямате права да извършите това действие."
    },
    "any": "Без значение",
    "batch_actions": {
      "action_label": "%{title} избран",
      "button_label": "Масови действия",
      "default_confirmation": "Наистина ли искате да направите това?",
      "delete_confirmation": "Сигурни ли сте, че искате да изтриете тези %{plural_model}?",
      "labels": {
        "destroy": "Изтриване"
      },
      "link": "Създаване",
      "selection_toggle_explanation": "(Инвертиране на маркирането)",
      "succesfully_destroyed": {
        "one": "Успешно изтриване на 1 %{model}",
        "other": "Успешно изтриване на %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Все още няма добавени %{resource_name}.",
      "link": "Създаване"
    },
    "cancel": "Отказ",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Добавяне на коментар",
      "author": "Автор",
      "author_missing": "Анонимен",
      "author_type": "Тип автор",
      "body": "Текст",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Коментарът с празен текст не беше запазен."
      },
      "no_comments_yet": "Все още няма коментари.",
      "resource": "Ресурс",
      "resource_type": "Тип ресурс",
      "title": "Коментар",
      "title_content": "Коментари (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Табло",
    "dashboard_welcome": {
      "call_to_action": "За да добавите секции, редактирайте 'app/admin/dashboard.rb'",
      "welcome": "Добре дошли в Active Admin. Това е таблото по подразбиране."
    },
    "delete": "Изтриване",
    "delete_confirmation": "Сигурни ли сте, че искате да изтриете това?",
    "delete_model": "Изтриване на %{model}",
    "details": "%{model} детайли",
    "devise": {
      "change_password": {
        "submit": "Промяна на паролата",
        "title": "Промяна на паролата"
      },
      "email": {
        "title": "Поща"
      },
      "links": {
        "forgot_your_password": "Забравена парола?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Вход",
        "sign_in_with_omniauth_provider": "Влез с %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Запомни ме",
        "submit": "Вход",
        "title": "Вход"
      },
      "password": {
        "title": "Парола"
      },
      "resend_confirmation_instructions": {
        "submit": "Изпрати отново инструкциите за потвърждаване",
        "title": "Изпрати отново инструкциите за потвърждаване"
      },
      "reset_password": {
        "submit": "Изпращане на нова парола",
        "title": "Забравена парола?"
      },
      "sign_up": {
        "submit": "Регистрация",
        "title": "Регистрация"
      },
      "subdomain": {
        "title": "Поддомейн"
      },
      "unlock": {
        "submit": "Изпрати отново инструкциите за отключване",
        "title": "Изпрати отново инструкциите за отключване"
      },
      "username": {
        "title": "Потребителско име"
      }
    },
    "download": "Изтегляне:",
    "dropdown_actions": {
      "button_label": "действия"
    },
    "edit": "Редакция",
    "edit_model": "Редакция на %{model}",
    "empty": "Празно",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Изчистване",
        "filter": "Филтриране"
      },
      "predicates": {
        "contains": "съдържа",
        "ends_with": "Завършва с",
        "equals": "равно на",
        "greater_than": "по-голямо от",
        "less_than": "по-малко от",
        "starts_with": "Започва с"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Изтриване",
    "has_many_new": "Добавяне на %{model}",
    "has_many_remove": "Премахване",
    "index_list": {
      "block": "Списък",
      "blog": "Блог",
      "grid": "Грид",
      "table": "Таблица"
    },
    "less_than": "Less Than",
    "logout": "Изход",
    "main_content": "Добавете %{model}#main_content за да видите съдържание.",
    "new_model": "Създаване на %{model}",
    "next": "Следващо",
    "pagination": {
      "empty": "Не са намерени %{model}",
      "entry": {
        "one": "запис",
        "other": "записи"
      },
      "multiple": "Показване %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> от общо <b>%{total}</b>",
      "multiple_without_total": "Показване %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Показване на <b>1</b> %{model}",
      "one_page": "Показване на <b>всички %{n}</b> %{model}"
    },
    "powered_by": "Задвижва се от %{active_admin} %{version}",
    "previous": "Предишно",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Филтри",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "не",
      "yes": "Да"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Преглед"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Адрес",
        "address_city": "Град",
        "address_housenumber": "Номер на къщата",
        "address_postcode": "Postcode",
        "address_street": "Улица",
        "name": "Име",
        "note": "Note",
        "phone": "Телефон",
        "type": "Вид",
        "website": "Website\n"
      },
      "user": {
        "first_name": "Име",
        "last_name": "Фамилия",
        "privacy_policy": "Декларация за поверителност",
        "terms": "Условия"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "трябва да се потвърди",
        "blank": "не може да е без стойност",
        "confirmation": "не съответства на потвърждението",
        "empty": "не може да е празно",
        "equal_to": "трябва да има стойност, равна на %{count}",
        "even": "трябва да е нечетно",
        "exclusion": "съдържа предварително зададена стойност",
        "greater_than": "трябва да има стойност, по-голяма от %{count}",
        "greater_than_or_equal_to": "трябва да има стойност, по-голяма или равна на %{count}",
        "inclusion": "съдържа непредвидена стойност",
        "invalid": "съдържа невярна стойност",
        "less_than": "трябва да има стойност, по-малка от %{count}",
        "less_than_or_equal_to": "трябва да има стойност, по-голяма или равна на %{count}",
        "not_a_number": "не е число",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "трябва да е четно",
        "record_invalid": "Имаше грешки: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "вече съществува",
        "too_long": "е прекаленo дълго (не може да е повече от %{count} символа)",
        "too_short": "е прекалено късо (не може да бъде по-малко от %{count} символа)",
        "wrong_length": "е с грешна дължина (трябва да е с дължина, равна на %{count} символа)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "Не може да бъде оставено празно, ако е дадена парола"
            },
            "privacy_policy": {
              "accepted": "трябва да бъдат приети"
            },
            "terms": {
              "accepted": "трябва да бъдат приети"
            }
          }
        },
        "user_session": {
          "email": "E-mail-адрес",
          "password": "Парола",
          "remember_me": "Остани включен."
        }
      },
      "template": {
        "body": "Възникнаха проблеми със следните полета:",
        "header": {
          "one": "1 грешка направи запазването на %{model} невъзможно",
          "other": "%{count} грешки направиха невъзможно запазването на %{model}:"
        }
      }
    },
    "models": {
      "user": "Потребител"
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
      "notice": "Ти вече си вътре"
    },
    "require_user": {
      "notice": "Трябва да се регистрираш, за да видиш тази страница."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Добавяне на ново място",
      "edit": "Редактирай място"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "затвори",
    "skip": "пропусни"
  },
  "date": {
    "abbr_day_names": [
      "нед",
      "пон",
      "вт",
      "ср",
      "чет",
      "пет",
      "съб"
    ],
    "abbr_month_names": [
      null,
      "яну.",
      "фев.",
      "март",
      "апр.",
      "май",
      "юни",
      "юли",
      "авг.",
      "сеп.",
      "окт.",
      "ноем.",
      "дек."
    ],
    "day_names": [
      "неделя",
      "понеделник",
      "вторник",
      "сряда",
      "четвъртък",
      "петък",
      "събота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "януари",
      "февруари",
      "март",
      "април",
      "май",
      "юни",
      "юли",
      "август",
      "септември",
      "октомври",
      "ноември",
      "декември"
    ],
    "order": [
      "!ruby/symbol day",
      "!ruby/symbol month",
      "!ruby/symbol year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "около 1 час",
        "other": "около %{count} часа"
      },
      "about_x_months": {
        "one": "около 1 месец",
        "other": "около %{count} месеца"
      },
      "about_x_years": {
        "one": "около 1 година",
        "other": "около %{count} години"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "половин минута",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "над 1 година",
        "other": "над %{count} години"
      },
      "x_days": {
        "one": "1 ден",
        "other": "%{count} дни"
      },
      "x_minutes": {
        "one": "1 минута",
        "other": "%{count} минути"
      },
      "x_months": {
        "one": "1 месец",
        "other": "%{count} месеца"
      },
      "x_seconds": {
        "one": "1 секунда",
        "other": "%{count} секунди"
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
      "confirmed": "Твоят акаунт беше потвърден успешно. Сега си регистриран.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Ще получиш и-мейл с инструкции за потвърждаване на акаунта ти до няколко минути.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Сигурен ли си?",
      "headline": "Delete account",
      "link": "Изтрий сега"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Актуална парола <i>(за потвърждение на промените)</i>",
          "email": "Email",
          "password": "Парола  <i>(остави празно, ако не искаш да я променяш)</i>",
          "password_confirmation": "Повтори паролата"
        },
        "submit": "Запази промените"
      },
      "headline": "Настройки на акаунта"
    },
    "failure": {
      "already_authenticated": "Вече си вътре.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Невалиден и-мейл или парола.",
      "invalid_token": "Невалиден код за активиране.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Твоят акаунт е блокиран.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Трябва да влезеш или да се регистрираш, за да продължиш.",
      "unconfirmed": "Трябва да потвърдиш акаунта си, преди да продължиш."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Още една стъпка до активирането на акаунта ти"
      },
      "reset_password_instructions": {
        "subject": "Нови инструкции за парола"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Задължително поле",
    "omniauth_callbacks": {
      "failure": "Идентификацията с %{kind} е неуспешна. Грешка: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Успешно регистриран с %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Нова парола"
      },
      "headline": "Забравена парола?"
    },
    "password_reset": {
      "email": {
        "comment": "В случай, че не си искал нулиране на паролата, можеш да игнорираш този и-мейл. <br/> Твоята парола няма да бъде променена, освен ако не кликнеш върху линка по-горе и не зададеш нова парола.",
        "headline": "Добре дошъл/дошла %{email}",
        "link": "Смяна на парола",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Нова парола",
          "password_confirmation": "Повтори парола"
        },
        "submit": "Нова парола"
      },
      "headline": "Нова парола"
    },
    "passwords": {
      "link": "Забравена парола?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Паролата ти беше сменена успешно. Сега си вътре.",
      "updated_not_active": "Паролата ти беше сменена успешно."
    },
    "registrations": {
      "destroyed": "Чао! Твоят акаунт беше успешно отменен. Надяваме се да те видим отново скоро.",
      "inactive_signed_up": "Регистрацията ти е успешна, но имаше проблем с влизането. Причина: \"%{reason}\"",
      "link": "Регистрация",
      "reasons": {
        "inactive": "неактивен",
        "locked": "заключено",
        "unconfirmed": "непотвърден"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Ти актуализира акаунта си успешно."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Невалиден и-мейл или парола.",
      "invalid_token": "Невалиден код за активиране.",
      "link": "Вход",
      "locked": "Твоят акаунт е блокиран.",
      "new": {
        "no_osm_account": "Нямаш регистрация в OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Благодарим за подкрепата!",
        "sign_in_with": " Влез с %{kind}",
        "sign_up_with_osm": "Регистрирай се сега.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Успешна регистрация.",
      "signed_out": "Излезе успешно.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Трябва да се регистрираш или да влезеш, за да продължиш.",
      "unconfirmed": "Трябва да потвърдиш акаунта си, за да продължиш."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Парола",
          "remember_me": "Запомняне?"
        },
        "submit": "Вход"
      },
      "headline": "Вход"
    },
    "sign_out": {
      "headline": "Изход"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Потвърди акаунта",
        "please_confirm": "Можеш да потвърдиш акаунта си с този линк:",
        "welcome": "Добре дошъл %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Парола",
          "password_confirmation": "Повтори паролата",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Регистрация"
      },
      "headline": "Регистрация"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Твоят акаунт беше отключен успешно. Вече си в профила си."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "вече е потвърден",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "не съответства на потвърждението",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "трябва да има стойност, равна на %{count}",
      "even": "must be an even number",
      "exclusion": "съдържа предварително зададена стойност",
      "expired": "Невалидно, моля заяви ново",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "трябва да има стойност, по-голяма от %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "съдържа непредвидена стойност",
      "invalid": "съдържа невярна стойност",
      "less_than": "трябва да има стойност, по-малка от %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "не е число",
      "not_an_integer": "трябва да бъде число",
      "not_found": "не беше намерен",
      "not_locked": "не беше заключено",
      "not_saved": {
        "one": "Заради грешка не можа да бъде запазен %{resource}:",
        "other": "%{count} грешки направиха невъзможно запазването на %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "вече е заето",
      "too_long": "е прекаленo дълго (не може да е повече от %{count} символа)",
      "too_short": "е прекалено късо (не може да бъде по-малко от %{count} символа)",
      "wrong_length": "е с грешна дължина (трябва да е с дължина, равна на %{count} символа)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Имаше проблеми със следните полета:",
      "header": {
        "one": "1 грешка направи запазването на %{model} невъзможно",
        "other": "%{count} грешки направиха невъзможно запазването на %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Винаги можеш да промениш маркировката на това място самостоятелно. Просто избери правилния символ и натисни \"Запази\" - готово!",
      "1": "Като регистриран потребител можеш да добяваш или коригираш всички детайли относно това място. Натисни \"Редактирай\" и промени или добави информацията в полето.",
      "2": "Можеш да добавиш допълнителна информация (например \"Това място има мобилна рампа\") в секцията за коментари. Натисни \"Редактирай\" и \"Добави коментар\"."
    },
    "headline": "Има ли проблем с това място?",
    "questions": {
      "0": "Маркирането е погрешно.",
      "1": "Детайлите за това място са неправилни или липсват.",
      "2": "Имам повече информация за това място."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} беше създаден успешно"
      },
      "destroy": {
        "alert": "%{resource_name} не може да бъде преместен",
        "notice": "%{resource_name} беше успешно изтрит"
      },
      "update": {
        "notice": "%{resource_name} беше актуализиран успешно"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Снимката беше изтрита успешно"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "достъпно за инвалидни колички",
    "show_limited_accessible_places": "Частичнo достъпнo за инвалидни колички",
    "show_places_without_status": "Неизвестен статус",
    "show_unaccessible_places": "недостъпно за инвалидни колички"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Премести маркера на картата на правилната позиция",
      "osm_username": "Още не си член? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Създай OpenStreetMap акаунт сега</a>",
      "password": "(остави празно, ако не искаш промяна)",
      "phone": "For example: +49 30 12345678",
      "website": "Например:  http://www.example.com "
    },
    "labels": {
      "category": "Категория:",
      "centralkey": "Централен код:",
      "city": "Град:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Готово",
      "housenumber": "Номер:",
      "lat": "Ширина",
      "lon": "Дължина",
      "name": "Име:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Парола",
      "password_confirmation": "Повтори паролата",
      "phone": "Телефон:",
      "postcode": "Пощенски код:",
      "privacy_policy": "Приемам параграф 1 и 2 от декларацията за поверителност на личните данни.",
      "reset": "Нулирай",
      "save": "Запази",
      "street": "Улица:",
      "terms": "Приемам условията за ползване.",
      "type": "Вид:",
      "website": "Уебсайт:",
      "wheelchair": "Достъп за инвалидни колички?",
      "wheelchair_description": "Коментар относно достъпа:",
      "wheelchair_toilet": "Тоалетна, достъпна за инвалидни колички:"
    },
    "titles": {
      "basic": "Основни данни",
      "optional": "Повече информация <span class=\"addition\">(всички полета са по желание)</span>"
    }
  },
  "global": {
    "form_validation_error": "Моля, обърни внимание на грешките, изброени по-долу"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Начална страница",
      "keywords": "достъпни за инвалидни колички места търси намери маркирай",
      "search": "Търси",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "За Wheelmap",
      "blog": "Новини",
      "choose_language": "Избери език",
      "contact": "Контакт",
      "feedback": "Обратна връзка",
      "home": "Начало",
      "how_to_add_a_place": "Как се добавят места?",
      "imprint": "Контакт",
      "logged_in_as": "Регистриран като:",
      "login": "Вход",
      "logout": "Изход",
      "map": "Карта",
      "newsletter": "Newsletter",
      "press": "Преса",
      "profile": "Профил",
      "projects": "Проекти",
      "suggestions": "Предложения",
      "what_is_barrier_free": "Какво значи \"достъпно за инвалидни колички\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Добави ново място",
      "find": "Намери",
      "placeholder": "Търси място",
      "title_add_place": "Добави ново място на тази позиция сега!"
    },
    "tagline": "Лого на Wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Категории"
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
      "prompt": "Моля избери"
    },
    "submit": {
      "create": "Създай %{model}",
      "submit": "запази %{model}",
      "update": "обнови %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Избери категория",
        "deselect_all": "Отмаркирай всички",
        "select_all": "Избери всички",
        "wheelchair": "Достъпно за инвалидни колички?"
      },
      "ie": {
        "action": {
          "ignore": "Игнорирай",
          "upgrade": "Актуализирай браузъра"
        },
        "warning": {
          "headline": "Извиняваме се!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Добавяне на ново място"
        }
      },
      "overlay": {
        "button": "OK, тръгваме!",
        "categories": "Филтрирай места по категории",
        "filter": "Филтрирай места по достъпност за инвалидни колички",
        "headline": "Маркирай и намирай места, достъпни за инвалидни колички с Wheelmap.org - безплатно и в цял свят. Лесно е:",
        "lookup": "Търси определено място",
        "secondary_headline": "Нашата система за отбелязване на места, достъпни за инвалидни колички:"
      },
      "popup": {
        "form": {
          "limited": "Частичнo достъпнo за инвалидни колички",
          "no": "недостъпно за инвалидни колички",
          "save": "Актуализация",
          "unknown": "Неизвестен статус",
          "yes": "достъпно за инвалидни колички"
        },
        "help": "Достъпно за инвалидни колички? (Помощ)",
        "more": "повече..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Как?",
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
          "headline": "Всички %{type} в %{city} с неизвестен достъп за инвалидни колички (%{count})"
        },
        "yes": {
          "headline": "Всички достъпни за инвалидни колички %{type} в %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Проект на Sozialhelden.de"
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
      "phone": "Телефон:",
      "website": "Уебсайт:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Грешка, информацията е неправилна или непълна.",
        "successfull": "Благодарим ти, твоят принос беше запазен и ще бъде онлайн в най-скоро време."
      }
    },
    "edit": {
      "header": {
        "title": "Редактирай място: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Отказ"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Съжаляваме, удостоверяването не беше успешно.",
      "not_available": "Съжаляваме, тази страница временно е недостъпна.",
      "not_existent": "За съжаление, това място вече не е на разположение.",
      "not_found": "Съжаляваме, страницата не може да бъде намерена.",
      "param_missing": "Моля, въведи дума за търсене"
    },
    "flash": {
      "authorize_wheelmap": "Трябва ти OpenStreetMap-акаунт, за да променяш данни."
    },
    "new": {
      "form": {
        "legend": "Местоположение",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Адрес",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Контакт",
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
        "title": "Ново място | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Отказ"
      }
    },
    "node": {
      "link": {
        "claim": "Тук ли работиш?",
        "edit_node": "Редактирай място",
        "report_bug": "Съобщи за проблем"
      }
    },
    "node_data": {
      "address": "Адрес:",
      "contact_details": "Данни за контакт:"
    },
    "node_edit": {
      "details": "Детайли",
      "edit": "Редактирай"
    },
    "node_map": {
      "map": "Карта:"
    },
    "node_note": {
      "comment": "Коментар:"
    },
    "node_photos": {
      "add": "Добави",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Снимки от това място:",
      "upload": "Прикачи"
    },
    "node_similar": {
      "similar": "Подобни места: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Тоалетна, достъпна за инвалидни колички:",
      "premium": "%{name} казва: това място е",
      "wheelchair_accessibility": "Достъп за инвалидни колички:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Разбери дали това място е достъпно за инвалидни колички на Wheelmap.org. Или добави допълнителна информация и снимки към мястото.",
          "title": "Това място е на Wheelmap.org: %{name}"
        },
        "title": "Място: %{node} | wheelmap.org"
      },
      "link": {
        "back": "обратно",
        "large_map": "Увеличи",
        "listing": "Всички видове '%{type}' в %{city}",
        "upload": "Качи снимка"
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
        "not_successfull": "Грешка, информацията е непълна или неправилна.",
        "successfull": "Благодарим ти! Твоят принос беше запазен успешно и ще бъде онлайн в най-скоро време."
      }
    },
    "update_wheelchair": {
      "successfull": "Статусът на \"%{name}\" беше променен на \"%{status}\" и ще бъде онлайн в най-скоро време."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ,",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "лв."
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Билион",
          "million": "Милион",
          "quadrillion": "Квадрилион",
          "thousand": "Хиляда",
          "trillion": "Трилион",
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
  "or": "или",
  "place": {
    "one": "%{count} места",
    "other": "%{count} места"
  },
  "poi": {
    "category": {
      "accommodation": "Настаняване",
      "education": "Образование",
      "food": "Храна",
      "government": "Институции",
      "health": "Здраве",
      "leisure": "Отдих и свободно време",
      "misc": "Разни",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Магазини",
      "sport": "Спорт",
      "tourism": "Туризъм",
      "unknown": "Неизвестен"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Хотел на плажа",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Къмпинг за палатки",
        "caravan_site": "Къмпинг за каравани",
        "chalet": "Хижа",
        "dormitory": "Общежитие",
        "guest_house": "Къща за гости",
        "hostel": "Хостел",
        "hotel": "Хотел",
        "motel": "Мотел"
      },
      "education": {
        "college": "ВУЗ",
        "driving_school": "Шофьорски курсове",
        "kindergarten": "Детска градина",
        "library": "Библиотека",
        "museum": "Музей",
        "school": "Училище",
        "university": "Университет"
      },
      "food": {
        "bar": "Бар",
        "biergarten": "Бирария",
        "cafe": "Кафе",
        "drinking_water": "Питейна вода",
        "fast_food": "Бързо хранене",
        "ice_cream": "Сладоледена къща",
        "pub": "Бар",
        "restaurant": "Ресторант"
      },
      "government": {
        "courthouse": "Съдебна палата",
        "embassy": "Посолство",
        "employment_agency": "Employment agency",
        "government": "Държавна институция",
        "police": "Полиция",
        "public_building": "Обществена сграда",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Зъболекар",
        "doctors": "Doctor",
        "hearing_aids": "Магазин за слухови апарати",
        "hospital": "Болница",
        "medical_supply": "Лекарства",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Аптека",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Социално съоръжение",
        "speech_therapist": "Speech therapist",
        "veterinary": "Ветеринар"
      },
      "leisure": {
        "arena": "Арена",
        "brothel": "Публичен дом",
        "casino": "Казино",
        "cinema": "Кино",
        "community_centre": "Community centre",
        "gallery": "Галерия",
        "massage": "Massage spa",
        "nightclub": "Нощен клуб",
        "playground": "Площадка за игра",
        "sauna": "Сауна",
        "stripclub": "Стриптийз бар",
        "tattoo": "Tattoo shop",
        "theatre": "Театър",
        "zoo": "Зоологическа градина"
      },
      "misc": {
        "association": "Association",
        "company": "Фирма (офис)",
        "estate_agent": "Агенция за недвижими имоти",
        "insurance": "Застраховки",
        "lawyer": "Адвокат",
        "ngo": "Non-government organisation",
        "place_of_worship": "Място за поклонение",
        "political_party": "Political party office",
        "toilets": "Тоалетни"
      },
      "money_post": {
        "atm": "Банкомат",
        "bank": "Банка",
        "bureau_de_change": "Обменно бюро",
        "post_box": "Пощенска кутия",
        "post_office": "Поща"
      },
      "public_transfer": {
        "aerodrome": "Летище",
        "bicycle_parking": "Паркинг за велосипеди",
        "bicycle_rental": "Колела под наем",
        "boatyard": "Boat yard",
        "bus_station": "Автобусна спирка",
        "bus_stop": "Автобусна спирка",
        "cable_car": "Лифт",
        "car_rental": "Автомобили под наем",
        "car_sharing": "Споделено пътуване",
        "chair_lift": "Седалков лифт",
        "ferry": "Ферибот",
        "ferry_terminal": "Фериботен терминал",
        "fuel": "Бензиностанция",
        "halt": "Спирка",
        "light_rail": "Теснолинейка",
        "parking": "Паркинг",
        "parking_aisle": "Паркинг алея",
        "platform": "Перон",
        "station": "Метро",
        "subway_entrance": "Вход за метро",
        "terminal": "Летищен терминал",
        "tram_stop": "Трамвайна спирка"
      },
      "shopping": {
        "alcohol": "Магазин за спиртни напитки",
        "bakery": "Фурна",
        "beauty": "Салон за красота",
        "beverages": "Напитки",
        "bicycle": "Магазин за колела",
        "books": "Книги",
        "butcher": "Месар",
        "car_repair": "Автомобилен сервиз",
        "car_shop": "Автомобилна къща",
        "chemist": "Chemist / Drugstore",
        "clothes": "Дрехи",
        "computer": "Компютър",
        "confectionery": "Магазин за сладкиши",
        "convenience": "Малък магазин",
        "deli": "Деликатеси",
        "department_store": "Търговски комплекс",
        "doityourself": "Направи си сам",
        "dry_cleaning": "Химическо чистене",
        "electronics": "Електроника",
        "fabric": "Магазин за платове",
        "farm_shop": "Магазин за регионално производство",
        "florist": "Цветар",
        "furniture": "Мебели",
        "garden_centre": "Garden centre",
        "gift": "Магазин за подаръци",
        "hairdresser": "Фризьор",
        "hardware": "Магазин за влакчета",
        "jewelry": "Бижутерия",
        "kiosk": "Будка",
        "laundry": "Обществена пералня",
        "mall": "Мол",
        "optician": "Оптика",
        "organic": "Био магазин",
        "outdoor": "Туристическа екипировка",
        "pet": "Зоо магазин",
        "photo": "Снимка",
        "second_hand": "Second hand мода",
        "shoes": "Обувки",
        "sports": "Спорт",
        "stationery": "Канцеларски принадлежности",
        "supermarket": "Супермаркет",
        "toys": "Играчки",
        "travel_agency": "Туристическа агенция",
        "video": "Видеотека"
      },
      "sport": {
        "pitch": "Спортно игрище",
        "sports_centre": "Спортен център",
        "stadium": "Стадион",
        "swimming": "Плуване",
        "swimming_pool": "Басейн"
      },
      "tourism": {
        "archaeological_site": "Археологически обект",
        "arts_centre": "Културен център",
        "artwork": "Произведение на изкуството",
        "attraction": "Атракция",
        "battlefield": "Бойно поле",
        "beach": "Плаж",
        "beacon": "Фар",
        "castle": "Замък",
        "cave_entrance": "Вход на пещера",
        "information": "Туристическа информация",
        "memorial": "Паметник",
        "theme_park": "Развлекателен парк",
        "tower": "Кула",
        "viewpoint": "Панорамна точка"
      },
      "unknown": {
        "unknown": "Неизвестен"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Статус: свързан",
          "grant": "Свържи се сега",
          "not_connected": "Статус: няма връзка",
          "revoke": "Изключи"
        }
      },
      "headline": "Настройки на профила"
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
          "example": "<strong>Пример:</strong> Лондон, Великобритания",
          "info": "Търсенето работи само с името и/или адреса. Затова, моля, потърси името на мястото или адреса, например името на улица и/или град. Търсенето на вида на мястото, например ресторант или кино, не работи!",
          "work_in_progress": "Работим усилено, за да направим търсенето на места по-лесно и по-интуитивно в бъдеще."
        },
        "try_this": {
          "address": "Моля дай повече <strong>детайли на адреса</strong>.",
          "intro": "Опитай това:",
          "spell_check": "Провери <strong>правописа</strong> на въведената информация."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} резултат:",
          "other": "%{count} резултата:"
        }
      },
      "search": {
        "for": "Търсене на \"%{q}\"",
        "not_found": "Не бяха намерени места!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Съжаляваме, функцията за търсене е временно недостъпна",
      "repeat_search": "Опитай търсенето отново"
    }
  },
  "splash": {
    "countline": "%{count} места са вече маркирани.",
    "headline": "Всеки може да добавя достъпни за инвалидни колички места!",
    "start": "Начало",
    "step1": "Кликни върху познато място",
    "step2": "Маркирай и натисни \"запази\".",
    "step3": "Това е! Не е необходима регистрация.",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Статистики",
  "support": {
    "array": {
      "last_word_connector": " и ",
      "sentence_connector": "и",
      "two_words_connector": " и ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Моля отбележи"
    }
  },
  "time": {
    "am": "преди обяд",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "следобед"
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
        "notice": "Твоят акаунт е активиран!"
      },
      "error": {
        "notice": "И-мейлът и паролата не съвпадат."
      },
      "notice": "Ти си вътре!"
    },
    "destroy": {
      "notice": "Чао, до скоро!"
    },
    "new": {
      "email": "Email address",
      "login": "Вход",
      "login_with_twitter": "Влез с Twitter.",
      "password": "Парола",
      "remember_me": "Запомни ме"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Как можем да се свържем с теб? По-късно можеш да промениш тази информация в профила си."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Твоите качени снимки"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Профил"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Снимки"
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
          "settings": "Настройки"
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
    "limited": "Частичнo достъпнo за инвалидни колички",
    "no": "недостъпно за инвалидни колички",
    "unknown": "Неизвестен статус",
    "yes": "достъпно за инвалидни колички"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Проект на",
      "based_on": "Базиран на:",
      "become_a_supporter": "Подкрепи проекта",
      "main_supporter": "Основни партньори"
    },
    "itunes": {
      "alt": "Лого на AppStore ",
      "title": "Свали iPhone App сега!"
    },
    "logo": {
      "alt": "Wheelmap лого - намери места, достъпни за инвалидни колички",
      "title": "Wheelmap - намери места, достъпни за инвалидни колички"
    },
    "what_is": {
      "fully_accessible": "Вход без стъпала. Всички стаи са без стъпала.",
      "limited_accessible": "Входът има едно стъпало с макс. височина от 7 cm (3 инча). Повечето стаи са без стъпала.",
      "not_accessible": "Входът има стъпало или няколко стъпала. Стаите не са достъпни.",
      "unknown_accessible": "Помогнете, като маркирате места!"
    }
  },
  "will_paginate": {
    "next_label": "Напред &#8594;",
    "page_entries_info": {
      "multi_page": "Показва %{model} %{from} - %{to} общо %{count} на брой",
      "multi_page_html": "Показване на %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> общо <b>%{count}</b> на брой",
      "single_page": {
        "one": "Показване на 1 %{model}",
        "other": "Показване на всички %{count} %{model}",
        "zero": "Не беше намерен %{model}"
      },
      "single_page_html": {
        "one": "Показване на <b>1</b> %{model}",
        "other": "Показване на <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Не беше намерен %{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Назад"
  }
});
