I18n.translations || (I18n.translations = {});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {
  "actions": {
    "cancel": "Отменить",
    "next": "Далее",
    "save": "Сохранить",
    "send": "Отправить"
  },
  "active_admin": {
    "access_denied": {
      "message": "Вы не авторизованы для выполнения данного действия."
    },
    "any": "Любой",
    "batch_actions": {
      "action_label": "%{title} выбранное",
      "button_label": "Групповые операции",
      "default_confirmation": "Вы уверены, что вы хотите это сделать?",
      "delete_confirmation": "Вы уверены, что хотите удалить %{plural_model}?",
      "labels": {
        "destroy": "Удалить"
      },
      "link": "Создать",
      "selection_toggle_explanation": "(Отметить всё / Снять выделение)",
      "succesfully_destroyed": {
        "few": "Успешно удалено: %{count} %{plural_model}",
        "many": "Успешно удалено: %{count} %{plural_model}",
        "one": "Успешно удалено: 1 %{model}",
        "other": "Успешно удалено: %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Пока нет %{resource_name}.",
      "link": "Создать"
    },
    "cancel": "Отмена",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Добавить Комментарий",
      "author": "Автор",
      "author_missing": "Аноним",
      "author_type": "Тип автора",
      "body": "Текст",
      "created_at": "Created",
      "delete": "Удалить Комментарий",
      "delete_confirmation": "Вы уверены, что хотите удалить этот комментарий?",
      "errors": {
        "empty_text": "Комментарий не сохранен, текст не должен быть пустым."
      },
      "no_comments_yet": "Пока нет комментариев.",
      "resource": "Ресурс",
      "resource_type": "Тип ресурса",
      "title": "Комментарий",
      "title_content": "Комментарии (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Панель управления",
    "dashboard_welcome": {
      "call_to_action": "Чтобы добавить сюда что-нибудь загляните в 'app/admin/dashboard.rb'",
      "welcome": "Добро пожаловать в Active Admin. Это стандартная страница управления сайтом."
    },
    "delete": "Удалить",
    "delete_confirmation": "Вы уверены, что хотите удалить это?",
    "delete_model": "Удалить %{model}",
    "details": "%{model} подробнее",
    "devise": {
      "change_password": {
        "submit": "Изменение пароля",
        "title": "Изменение пароля"
      },
      "email": {
        "title": "Эл. почта"
      },
      "links": {
        "forgot_your_password": "Забыли пароль?",
        "resend_confirmation_instructions": "Повторная отправка инструкций подтверждения",
        "resend_unlock_instructions": "Повторная отправка инструкций разблокировки",
        "sign_in": "Войти",
        "sign_in_with_omniauth_provider": "Войти с помощью %{provider}",
        "sign_up": "Зарегистрироваться"
      },
      "login": {
        "remember_me": "Запомнить меня",
        "submit": "Войти",
        "title": "Войти"
      },
      "password": {
        "title": "Пароль"
      },
      "resend_confirmation_instructions": {
        "submit": "Выслать повторно письмо с активацией",
        "title": "Выслать повторно письмо с активацией"
      },
      "reset_password": {
        "submit": "Сбросить пароль",
        "title": "Забыли пароль?"
      },
      "sign_up": {
        "submit": "Зарегистрироваться",
        "title": "Зарегистрироваться"
      },
      "subdomain": {
        "title": "Поддомен"
      },
      "unlock": {
        "submit": "Повторно отправить инструкции по разблокировке",
        "title": "Повторно отправить инструкции по разблокировке"
      },
      "username": {
        "title": "Имя пользователя"
      }
    },
    "download": "Загрузка:",
    "dropdown_actions": {
      "button_label": "Oперации"
    },
    "edit": "Изменить",
    "edit_model": "Изменить %{model}",
    "empty": "Пусто",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Очистить",
        "filter": "Фильтровать"
      },
      "predicates": {
        "contains": "Содержит",
        "ends_with": "Заканчивается",
        "equals": "Равно",
        "greater_than": "больше",
        "less_than": "меньше",
        "starts_with": "Начинается с"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Удалить",
    "has_many_new": "Добавить %{model}",
    "has_many_remove": "Убрать",
    "index_list": {
      "block": "Список",
      "blog": "Блог",
      "grid": "Сетка",
      "table": "Таблица"
    },
    "less_than": "Less Than",
    "logout": "Выйти",
    "main_content": "Создайте %{model}#main_content для отображения содержимого.",
    "new_model": "Создать %{model}",
    "next": "След.",
    "pagination": {
      "empty": "%{model} не найдено",
      "entry": {
        "few": "записи",
        "many": "записей",
        "one": "запись",
        "other": "записей"
      },
      "multiple": "Результат: %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> из <b>%{total}</b>",
      "multiple_without_total": "Результат: %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Результат: <b>1</b> %{model}",
      "one_page": "Результат: <b>%{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Пред.",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Текущий фильтр:",
      "headline": "Область:",
      "no_current_filters": "Ни один"
    },
    "sidebars": {
      "filters": "Фильтры",
      "search_status": "Статус поиска"
    },
    "status_tag": {
      "no": "Нет",
      "yes": "Да"
    },
    "unsupported_browser": {
      "headline": "Пожалуйста, обратите внимание, что ActiveAdmin больше не поддерживает Internet Explorer 8 версии и старее",
      "recommendation": "Мы рекомендуем обновить версию вашего браузера (<a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, или <a href=\"https://mozilla.org/firefox/\">Firefox</a>).",
      "turn_off_compatibility_view": "Если вы используете IE 9 или новее, убедитесь, что <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">вы выключили опцию \"Просмотр в режиме совместимости\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Открыть"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Адрес",
        "address_city": "Город",
        "address_housenumber": "Номер дома",
        "address_postcode": "Почтовый индекс",
        "address_street": "Улица",
        "name": "Название",
        "note": "Заметка",
        "phone": "Телефон",
        "type": "Тип",
        "website": "Веб-сайт"
      },
      "user": {
        "first_name": "Дать имя",
        "last_name": "Фамилия",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "нужно подтвердить",
        "blank": "не может быть пустым",
        "confirmation": "не совпадает с подтверждением",
        "empty": "не может быть пустым",
        "equal_to": "может иметь лишь значение, равное %{count}",
        "even": "может иметь лишь четное значение",
        "exclusion": "имеет зарезервированное значение",
        "greater_than": "может иметь значение большее %{count}",
        "greater_than_or_equal_to": "может иметь значение большее или равное %{count}",
        "inclusion": "имеет непредусмотренное значение",
        "invalid": "имеет неверное значение",
        "less_than": "может иметь значение меньшее чем %{count}",
        "less_than_or_equal_to": "может иметь значение меньшее или равное %{count}",
        "not_a_number": "не является числом",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "может иметь лишь четное значение",
        "record_invalid": "Проверка не удалась:%{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "уже существует",
        "too_long": "слишком длинный (максимум %{count} знаков )",
        "too_short": "слишком короткий (минимум %{count} знаков )",
        "wrong_length": "не правильная длинна (должна быть %{count} знаков)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "не может быть пустым, в случае предоставления пароля"
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
          "email": "Адрес электронной почты",
          "password": "пароль",
          "remember_me": "оставаться зарегистрированным"
        }
      },
      "template": {
        "body": "Проблемы возникли со следующими полями:",
        "header": {
          "one": "%{model}: сохранение не удалось из-за %{count} ошибки",
          "other": "%{count} сохранение не удалось из-за ошибки %{model}"
        }
      }
    },
    "models": {
      "user": "Пользователь"
    }
  },
  "apipie": {
    "api_documentation": "API документация",
    "comments_powered_by_disqus": "комментарии представлены %{disqus}",
    "description": "Описание",
    "enable_javascript_html": "Пожалуйста включите JavaScript, чтобы просматривать %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Ошибки",
    "examples": "Примеры",
    "follow_instructions_href": "дополнительные инструкции",
    "follow_instructions_html": "Перейдите по ссылке %{href}, чтобы узнать как описать ваш API.",
    "goto_homepage_href": "%{app_name} домашняя страница API документации",
    "goto_homepage_html": "Перейдите %{href}",
    "header_name": "Название заголовка",
    "headers": "Заголовки",
    "metadata": "Метаданные",
    "method_not_found_html": "Метод %{method} для ресурса %{resource} не найден.",
    "nil_allowed": "nil разрешен",
    "no_docs_found": "Документация не найдена",
    "no_docs_found_descr": "Мы не нашли никакой документации для вашего API.",
    "oops": "Ой!!",
    "optional": "необязательно",
    "param_name": "Имя параметра",
    "params": "Параметры",
    "required": "обязательно",
    "resource": "Ресурс",
    "resource_not_found_html": "Ресурс %{resource} не найден.",
    "resources": "Ресурсы",
    "supported_formats": "Поддерживаемые форматы"
  },
  "application": {
    "require_no_user": {
      "notice": "Вы уже зарегистрированы"
    },
    "require_user": {
      "notice": "Вы должны зарегистрироваться чтобы увидеть эту страницу"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Добавить новое место",
      "edit": "Изменить место"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "закрыть",
    "skip": "пропустить"
  },
  "date": {
    "abbr_day_names": [
      "Вс",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ],
    "abbr_month_names": [
      null,
      "янв.",
      "февр.",
      "марта",
      "апр.",
      "мая",
      "июня",
      "июля",
      "авг.",
      "сент.",
      "окт.",
      "нояб.",
      "дек."
    ],
    "day_names": [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
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
        "few": "около %{count} часов",
        "many": "около %{count} часов",
        "one": "около %{count} часа",
        "other": "около %{count} часа"
      },
      "about_x_months": {
        "few": "около %{count} месяцев",
        "many": "около %{count} месяцев",
        "one": "около %{count} месяца",
        "other": "около %{count} месяца"
      },
      "about_x_years": {
        "few": "около %{count} лет",
        "many": "около %{count} лет",
        "one": "около %{count} года",
        "other": "около %{count} лет"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "меньше минуты",
      "less_than_x_minutes": {
        "few": "меньше %{count} минут",
        "many": "меньше %{count} минут",
        "one": "меньше %{count} минуты",
        "other": "меньше %{count} минуты"
      },
      "less_than_x_seconds": {
        "few": "меньше %{count} секунд",
        "many": "меньше %{count} секунд",
        "one": "меньше %{count} секунды",
        "other": "меньше %{count} секунды"
      },
      "over_x_years": {
        "few": "больше %{count} лет",
        "many": "больше %{count} лет",
        "one": "больше %{count} года",
        "other": "больше %{count} лет"
      },
      "x_days": {
        "few": "%{count} дня",
        "many": "%{count} дней",
        "one": "%{count} день",
        "other": "%{count} дня"
      },
      "x_minutes": {
        "few": "%{count} минуты",
        "many": "%{count} минут",
        "one": "%{count} минуту",
        "other": "%{count} минуты"
      },
      "x_months": {
        "few": "%{count} месяца",
        "many": "%{count} месяцев",
        "one": "%{count} месяц",
        "other": "%{count} месяца"
      },
      "x_seconds": {
        "few": "%{count} секунды",
        "many": "%{count} секунд",
        "one": "%{count} секунда",
        "other": "%{count} секунды"
      }
    },
    "prompts": {
      "day": "День",
      "hour": "Часов",
      "minute": "Минут",
      "month": "Месяц",
      "second": "Секунд",
      "year": "Год"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Ваша учётная запись успешно подтверждена",
      "link": "Вы не получили инструкции для подтверждения аккаунта?",
      "send_instructions": "В течение нескольких минут Вы получите e-mail с инструкциями по подтверждению вашей учётной записи.",
      "send_paranoid_instructions": "Если ваш аккаунт существует, вы получите письмо с инструкциями, как подтвердить свой аккаунт в течение нескольких минут."
    },
    "destroy": {
      "confirm": "Вы уверены?",
      "headline": "Удалить аккаунт",
      "link": "Удалить сейчас"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Ваш пароль <i>(необходим для подтверждения Ваших изменений)</i>",
          "email": "Адрес электронной почты",
          "password": "Ваш пароль (оставьте пустым если не хотите его менять)",
          "password_confirmation": "Повторить пароль"
        },
        "submit": "Сохранить изменения"
      },
      "headline": "Управление аккаунтом"
    },
    "failure": {
      "already_authenticated": "Вы уже авторизованы",
      "inactive": "Ваш аккаунт ещё не активирован.",
      "invalid": "Неверное имя пользователя или пароль.",
      "invalid_token": "Недопустимый маркер аутентификации",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Ваш аккаунт заблокирован",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Ваша сессия завершена, пожалуйста, войдите ещё раз, чтобы продолжить.",
      "unauthenticated": "Вы должны войти или зарегистрироваться, прежде чем продолжить",
      "unconfirmed": "Вы должны подтвердить свой аккаунт, прежде чем продолжить."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Пожалуйста, перейдите по ссылке, которую мы только что отправили на ваш адрес. Если Вы не получили письмо, пожалуйста, сначала проверьте нет ли его в папке со спамом. Если нет, вернитесь на страницу регистрации и попробуйте снова.",
        "subject": "Еще один шаг для активации Вашего аккаунта"
      },
      "reset_password_instructions": {
        "subject": "Инструкции для сброса пароля"
      },
      "unlock_instructions": {
        "subject": "Инструкции для разблокировки"
      }
    },
    "mandatory": "* обязательное поле",
    "omniauth_callbacks": {
      "failure": "Авторизация с %{kind} не удалась. Ошибка: \"%{reason}\".",
      "permission_missing": "Вы не предоставили необходимого разрешения.",
      "success": "Успешно вошли в систему с %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Адрес электронной почты"
        },
        "submit": "Восстановить пароль"
      },
      "headline": "Забыли пароль?"
    },
    "password_reset": {
      "email": {
        "comment": "Если Вы не делали запрос об изменении Вашего пароля, пожалуйста, проигнорируйте это сообщение.<br/>Ваш пароль останется прежним, пока Вы не перейдете по этой ссылке.",
        "headline": "Добро пожаловать %{email} ",
        "link": "Сменить пароль",
        "text": "Мы получили запрос на изменение вашего пароля. Если это сделали вы - можете изменить его, перейдя по следующей ссылке, иначе просто проигнорируйте данное сообщение."
      },
      "form": {
        "labels": {
          "password": "Новый пароль",
          "password_confirmation": "Повторить пароль"
        },
        "submit": "Восстановить пароль"
      },
      "headline": "Вернуть пароль"
    },
    "passwords": {
      "link": "Забыли пароль?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.",
      "send_paranoid_instructions": "Если ваша учётная запись существует, в течение нескольких минут вы получите письмо с инструкциями о том, как сбросить пароль",
      "updated": "Ваш пароль изменён. Теперь вы вошли в систему.",
      "updated_not_active": "Пароль изменён успешно"
    },
    "registrations": {
      "destroyed": "До свидания! Ваша учётная запись удалена. Надеемся снова увидеть вас.",
      "inactive_signed_up": "Вы  успешно подписались, нет возможности входа. Причина:\"%{reason}\"",
      "link": "Регистрация",
      "reasons": {
        "inactive": "не активен",
        "locked": "заблокированный",
        "unconfirmed": "неподтверждённый"
      },
      "signed_up": "Вы успешно зарегистрировались. Вам было отправлено письмо с инструкциями по подтверждению вашей учётной записи.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Ваша учётная запись изменена."
    },
    "sessions": {
      "inactive": "Ваш аккаунт ещё не активирован",
      "invalid": "Неверный пароль или email.",
      "invalid_token": "Неверный ключ аутентификации.",
      "link": "Войти",
      "locked": "Ваш аккаунт заблокирован.",
      "new": {
        "no_osm_account": "Нет аккунта на OpenStreetMap?",
        "osm_promo_text": "Wheelmap базируется на географических данных OpenStreetMap (OSM). OpenStreetMap — это свободная карта всего мира всем, созданная такими же людьми, как и вы.. Это как Википедия для карт. Для того, чтобы изменить место или создавать новые, нужно зарегистрироваться на OpenStreetMap.",
        "promo_text_thank_you": "Спасибо большое за вашу поддержку!",
        "sign_in_with": "Войти с %{kind}",
        "sign_up_with_osm": "Зарегистрируйтесь сейчас.",
        "wheelmap_promo_text": "С помощью ваших знаний о местах, адаптированных для людей на инвалидных колясках, вы можете помочь людям с физическими недостатками в организации их повседневной жизни. Кроме того, это поможет сделать OpenStreetMap более подробным."
      },
      "signed_in": "Вход в систему выполнен.",
      "signed_out": "Вы успешно вышли из системы",
      "timeout": "Ваша сессия завершена, пожалуйста, войдите ещё раз, чтобы продолжить.",
      "unauthenticated": "Вы должны войти или зарегистрироваться, прежде чем сможете продолжить.",
      "unconfirmed": "Вы должны подтвердить Ваш аккаунт, прежде чем сможете продолжить."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Адрес электронной почты",
          "password": "Пароль",
          "remember_me": "Запомнить пароль"
        },
        "submit": "войти"
      },
      "headline": "Войти"
    },
    "sign_out": {
      "headline": "Выйти"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Подтвердите свой ​​аккаунт",
        "please_confirm": "Вы можете подтвердить свой аккаунт по ссылке ниже:",
        "welcome": "Добро пожаловать %{email}!"
      },
      "form": {
        "labels": {
          "email": "Адрес электронной почты",
          "password": "Пароль",
          "password_confirmation": "Повторить пароль",
          "wants_newsletter": "Да, держите меня в курсе о Wheelmap - но, пожалуйста, не чаще одного раза в месяц."
        },
        "submit": "Зарегистрироваться"
      },
      "headline": "Зарегистрироваться"
    },
    "unlocks": {
      "link": "Вы не получили инструкции для разблокировки аккаунта?",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по разблокировке вашей учётной записи",
      "send_paranoid_instructions": "Если ваша учётная запись существует, в течение нескольких минут вы получите письмо с инструкциями о том, как её разблокировать",
      "unlocked": "Ваша учётная запись разблокирована. Теперь вы вошли в систему."
    }
  },
  "errors": {
    "dynamic_format": "%{message} ",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "должен быть принят",
      "already_confirmed": "уже подтверждён",
      "blank": "должно быть заполнено",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "не соответствует подтверждению",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "должно быть заполнено",
      "equal_to": "должен быть точно %{count} ",
      "even": "должен быть чётным числом",
      "exclusion": "зарезервировано",
      "expired": "истёк срок, пожалуйста, запросите новый",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "должен быть больше чем %{count}",
      "greater_than_or_equal_to": "должен быть больше или равен %{count}",
      "inclusion": "недействительное значение",
      "invalid": "недействительно",
      "less_than": "должен быть меньше чем %{count} ",
      "less_than_or_equal_to": "должен быть меньше или равен %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "Не является числом",
      "not_an_integer": "Должно быть целым",
      "not_found": "Не найдено",
      "not_locked": "Не была заблокирована",
      "not_saved": {
        "few": "%{count} ошибки мешают сохранению %{resource}:",
        "many": "%{count} ошибок мешают сохранению %{resource}:",
        "one": "%{count} ошибка мешает сохранению %{resource}:",
        "other": "%{count} ошибок мешают сохранению %{resource}:"
      },
      "odd": "должен быть нечетным числом",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "уже был использован",
      "too_long": "слишком длинное значение (должно быть не больше чем %{count} знаков)",
      "too_short": "слишком короткое значение (должно быть не меньше, чем %{count}  знаков)",
      "wrong_length": "неверная длина значения (должно быть %{count}  знаков)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Неверный формат адреса сайта."
        }
      }
    },
    "template": {
      "body": "Были проблемы со следующими полями:",
      "header": {
        "few": "%{count} ошибки мешают сохранению этой %{model}",
        "many": "%{count} ошибок мешают сохранению этой %{model}",
        "one": "1 ошибка мешает сохранению этой %{model}",
        "other": "%{count} ошибок мешают сохранению этой %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Вы в любое время можете изменить категорию места самостоятельно. Просто выберите нужную категорию и нажмите \"Сохранить\" - готово!",
      "1": "Как зарегистрированный пользователь вы можете добавлять/корректировать любую информацию о месте. Нажмите на кнопку \"Изменить\" и откорректируйте или добавьте информацию.",
      "2": "Вы можете добавить дополнительную информацию (например, \"Это место оснащено мобильной рампой\") в разделе комментариев. Нажмите \"Редактировать\" и \"Добавить комментарий\"."
    },
    "headline": "Какая то информация не верна?",
    "questions": {
      "0": "Неверная категория.",
      "1": "Информация неверна или отсутствует.",
      "2": "У меня есть дополнительная информация."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} был успешно создан"
      },
      "destroy": {
        "alert": "%{resource_name} не могут быть удалены",
        "notice": "%{resource_name} был успешно удалён"
      },
      "update": {
        "notice": "%{resource_name} был успешно обновлён"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Изображение успешно удалено"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "доступно на кресле-коляске",
    "show_limited_accessible_places": "Частично доступно на инвалидных креслах",
    "show_places_without_status": "Неизвестный статус",
    "show_unaccessible_places": "Недоступно для людей на кресле-коляске"
  },
  "formtastic": {
    "hints": {
      "email": "Мы сохраним ваш адрес в секрете и не будем отправлять на него спам. Обещаем!",
      "lat": "Нажмите на карту и поместите маркер в точную позицию.",
      "osm_username": "Ещё не зарегистрированы? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\"> Создать аккаунт Openstreetmap</a> ",
      "password": "(оставьте поле пустым, если не хотите изменять значение)",
      "phone": "Например: +7 495 123 45 67",
      "website": "например: http://www.example.com"
    },
    "labels": {
      "category": "Категория:",
      "centralkey": "Центральная клавиша:",
      "city": "Город:",
      "create": "Создать место",
      "email": "Адрес электронной почты",
      "finish": "конец",
      "housenumber": "Номер:",
      "lat": "Широта",
      "lon": "Долгота",
      "name": "Название:",
      "osm_password": "Пароль OpenStreetMap",
      "osm_username": "Имя пользователя OpenStreetMap",
      "password": "Пароль",
      "password_confirmation": "Повторите пароль",
      "phone": "Телефон:",
      "postcode": "Индекс:",
      "privacy_policy": "Я принимаю параграфы 1 и 2 соглашения о конфиденциальности данных.",
      "reset": "Сброс",
      "save": "Сохранить",
      "street": "Улица:",
      "terms": "Я принимаю правила пользования.",
      "type": "Тип:",
      "website": "Вебсайт:",
      "wheelchair": "Доступно ли на кресле-коляске?",
      "wheelchair_description": "Прокомментируйте доступность:",
      "wheelchair_toilet": "Туалет, оборудованный для колясочников:"
    },
    "titles": {
      "basic": "Основные данные",
      "optional": "Больше информации <span class=\"addition\">(все поля являются необязательными)</span> "
    }
  },
  "global": {
    "form_validation_error": "Обратите, пожалуйста, внимание на список ошибок внизу"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org - это онлайн-карта предназначенная для того, чтобы искать и отмечать места, доступных на инвалидных колясках. Примите участие, отметив общественные места, такие как бары, рестораны, кинотеатры и супермаркеты!",
      "homepage": "Домашняя страница",
      "keywords": "поиск мест, доступных на кресле-коляске",
      "search": "Поиск",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "О Wheelmap",
      "blog": "Блог",
      "choose_language": "Выберите язык",
      "contact": "Контакты",
      "feedback": "Отзыв",
      "home": "Старт",
      "how_to_add_a_place": "Как добавлять новые места?",
      "imprint": "Обратная связь",
      "logged_in_as": "Вы вошли как:",
      "login": "Войти",
      "logout": "Выход",
      "map": "Карта",
      "newsletter": "Подписаться на обновления",
      "press": "Пресса",
      "profile": "Профиль",
      "projects": "Включайтесь",
      "suggestions": "Предложения",
      "what_is_barrier_free": "Что значит \"доступно на кресле-коляске\"?",
      "what_is_wheelmap": "Что такое Wheelmap?"
    },
    "searchbar": {
      "add_place": "Добавить другое место",
      "find": "Найти",
      "placeholder": "Какое место найти?",
      "title_add_place": "Добавить новое место в этой позиции сейчас!"
    },
    "tagline": "Логотип Wheelmap",
    "title": "Поиск мест, доступных на кресле-коляске ",
    "toolbar": {
      "categories": "Категории"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Показана %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> из <b>%{total}</b>"
      },
      "one_page": {
        "display_entries": {
          "few": "Показаны <b>%{count}</b> %{entry_name}",
          "many": "Показаны <b>%{count}</b> %{entry_name}",
          "one": "Показано <b>%{count}</b> %{entry_name}",
          "other": "Показаны <b>все %{count}</b> %{entry_name}\"",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Пожалуйста, выберите"
    },
    "submit": {
      "create": "Создать %{model}",
      "submit": "Сохранить %{model}",
      "update": "Обновление %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Показать на Wheelmap.org",
      "filter": {
        "category": "Выберите категорию",
        "deselect_all": "Отменить все",
        "select_all": "Выбрать все",
        "wheelchair": "Доступно ли на кресле-коляске?"
      },
      "ie": {
        "action": {
          "ignore": "Отклонено",
          "upgrade": "Обновите браузер"
        },
        "warning": {
          "headline": "Приносим свои извинения!",
          "message": "Кажется, вы использует Internet Explorer. Для корректной работы с Wheelmap требуется соответствующий стандартам браузер. Пожалуйста, подумайте об использовании Firefox, Chrome, Safari или Opera."
        }
      },
      "link": {
        "node": {
          "create": "Добавить новое место"
        }
      },
      "overlay": {
        "button": "OK, вперёд!",
        "categories": "Фильтровать места по категориям",
        "filter": "Фильтровать места по доступности",
        "headline": "Отмечайте и ищите доступные на кресле-коляске места с помощью Wheelmap.org - бесплатно и по всему миру. Это просто:",
        "lookup": "Поиск определённого места",
        "secondary_headline": "Наша система светофора для оценки доступности общественных мест для колясочников:"
      },
      "popup": {
        "form": {
          "limited": "Частично доступно на инвалидных креслах",
          "no": "Недоступно для людей на кресле-коляске",
          "save": "обновление",
          "unknown": "Неизвестный статус",
          "yes": "Доступно для кресел-колясок"
        },
        "help": "Доступно ли на кресле-коляске? (Справка)",
        "more": "Подробней ..."
      },
      "zoom_alert": "Приблизьте, чтобы увидеть больше мест."
    }
  },
  "how?": "Как?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Все частично доступные для колясочников %{type} в %{city} (%{count})"
        },
        "no": {
          "headline": "Все недоступные для колясочников %{type} в %{city} (%{count})"
        },
        "unknown": {
          "headline": "Все %{type} в %{city} с неопределенным статусом доступности для колясочников(%{count})"
        },
        "yes": {
          "headline": "Все места адаптированы для людей на инвалидных коляках %{type} в %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Проект Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Выберите категорию"
    },
    "node": {
      "info_edit_position": "Место появится на Wheelmap, как это показано выше. Если маркер установлен некорректно, вы можете  <a href=\"%{url}\">изменить его положение на OpenStreetMap.</a>",
      "mail": {
        "body": "(Пожалуйста, пишите по-английски или по-немецки.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Выберите тип"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode} ",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "Телефон:",
      "website": "Вебсайт:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "К сожалению, введенная Вами информация неполная или некорректная",
        "successfull": "Спасибо, ваша заявка была успешно сохранена и будет выполнена в ближайшее время."
      }
    },
    "edit": {
      "header": {
        "title": "Изменить место:%{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Отмена"
      }
    },
    "errors": {
      "default": "Что-то пошло не так. Мы получили информацию об этой проблеме",
      "not_authorized": "К сожалению, аутентификация не удалась",
      "not_available": "Извините, эта страница временно недоступна.",
      "not_existent": "Извините, но место больше не доступно.",
      "not_found": "Страница не найдена",
      "param_missing": "Пожалуйста, предоставьте задачу для поиска"
    },
    "flash": {
      "authorize_wheelmap": "Вы должны иметь аккаунт на OpenStreetMap для изменения данных"
    },
    "new": {
      "form": {
        "legend": "Расположение места",
        "location": "Нажмите на карте там, где находится это место!",
        "section": {
          "accessibility": {
            "name": "Доступность на кресле-коляске",
            "title": "Информация о доступности на кресле-коляске"
          },
          "address": {
            "help": "Вы можете перемещать маркер в нужное место на карте.",
            "name": "Адрес",
            "title": "Где это место?"
          },
          "contact": {
            "name": "Контакты",
            "title": "Другая контактная информация"
          },
          "name_category": {
            "name": "Название и тип места",
            "title": "Дайте нам первичную информацию о вашем заведении:"
          },
          "overview": {
            "title": "Вся информация верна?"
          },
          "similar_nodes": {
            "empty": "Похожие места не были найдены.",
            "go_edit": "Продолжить с этим местом",
            "go_new": "Это ни одно из вышеперечисленных мест…",
            "name": "Похожие места",
            "title": "Мы нашли поблизости подобные места. Это одно из них?"
          }
        },
        "title": "Добавить место"
      },
      "header": {
        "title": "Новое место | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Отмена"
      }
    },
    "node": {
      "link": {
        "claim": "Вы работаете здесь?",
        "edit_node": "Изменить место",
        "report_bug": "Сообщить о проблеме"
      }
    },
    "node_data": {
      "address": "Адрес:",
      "contact_details": "Контактная информация:"
    },
    "node_edit": {
      "details": "Подробности",
      "edit": "Изменить"
    },
    "node_map": {
      "map": "Карта:"
    },
    "node_note": {
      "comment": "Комментарий:"
    },
    "node_photos": {
      "add": "Добавить",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Фото этого места:",
      "upload": "Загрузить"
    },
    "node_similar": {
      "similar": "Похожие места: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Туалет, оборудованный для колясочников:",
      "premium": "%{name} говорит: это место",
      "wheelchair_accessibility": "Доступность на кресле-коляске:"
    },
    "node_streetview": {
      "streetview": "Панорамы улиц:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Узнайте, доступно ли это место для колясочников на Wheelmap.org. Или добавьте дополнительную информацию и фотографии места.",
          "title": "Это место на Wheelmap.org: %{name}"
        },
        "title": "Место: %{node} | wheelmap.org"
      },
      "link": {
        "back": "Назад",
        "large_map": "Увеличить",
        "listing": "Все места типа %{type}' в %{city}",
        "upload": "Загрузить изображение"
      },
      "more_data_from": "Существует подробная информацию об этом месте, проверенная:",
      "share": {
        "email": "Адрес электронной почты",
        "facebook": "Facebook",
        "text": "Я нашел(-ла) это место на Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "К сожалению, введенная Вами информация неверная или неполная",
        "successfull": "Спасибо, Ваша заявка была успешно сохранена и будет выполнена в ближайшее время."
      }
    },
    "update_wheelchair": {
      "successfull": "Статус \"%{name}\" был изменён на \"%{status} и в ближайшее время будет обновлён."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%n %u",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "доллар"
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
        "format": "%n %u ",
        "units": {
          "billion": "Миллиард",
          "million": "Миллион",
          "quadrillion": "Квадрильон",
          "thousand": "Тысяча",
          "trillion": "Триллион",
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
            "few": "Байта",
            "many": "Б",
            "one": "Байт",
            "other": "Б"
          },
          "gb": "ГБ",
          "kb": "кБ",
          "mb": "МБ",
          "tb": "ТВ"
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
        "headline": "Вам необходимо подключить свой аккаунт к аккаунту OpenStreetMap, прежде чем вы можете создавать или изменять места на Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Ваш аккаунт Wheelmap теперь подключён к аккаунту OpenStreetMap %{user}."
    }
  },
  "or": "или",
  "place": {
    "few": "%{count} места",
    "many": "%{count} мест",
    "one": "%{count} место",
    "other": "%{count} мест"
  },
  "poi": {
    "category": {
      "accommodation": "Проживание",
      "education": "Образование",
      "food": "Питание",
      "government": "Гос. учреждения",
      "health": "Здоровье",
      "leisure": "Досуг",
      "misc": "Смешанное",
      "money_post": "Банк / Почтовое отделение",
      "public_transfer": "Общественный транспорт",
      "shopping": "Шопинг",
      "sport": "Спорт",
      "tourism": "Туризм",
      "unknown": "Неизвестный"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Пляж отеля",
        "bed_and_breakfast": "Аренда жилья",
        "camp_site": "Турбаза",
        "caravan_site": "Палаточный лагерь",
        "chalet": "Шале",
        "dormitory": "Общежитие",
        "guest_house": "Гостевой дом",
        "hostel": "Хостел",
        "hotel": "Отель",
        "motel": "Мотель"
      },
      "education": {
        "college": "Колледж",
        "driving_school": "Автошкола",
        "kindergarten": "Детский сад",
        "library": "Библиотека",
        "museum": "Музей",
        "school": "Школа",
        "university": "Университет"
      },
      "food": {
        "bar": "Бар",
        "biergarten": "Паб под открытим небом",
        "cafe": "Кафе",
        "drinking_water": "Питьевая вода",
        "fast_food": "Фаст фуд",
        "ice_cream": "Кафе-мороженое",
        "pub": "Паб",
        "restaurant": "Ресторан"
      },
      "government": {
        "courthouse": "Суд",
        "embassy": "Посольство",
        "employment_agency": "Employment agency",
        "government": "Государственное учреждение",
        "police": "Полиция",
        "public_building": "Общественное здание",
        "townhall": "Администрация"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Стоматолог",
        "doctors": "Врач",
        "hearing_aids": "Продажа слуховых аппаратов",
        "hospital": "Больница",
        "medical_supply": "Медикаменты",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Аптека",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Социальный центр",
        "speech_therapist": "Speech therapist",
        "veterinary": "Ветеринар"
      },
      "leisure": {
        "arena": "Площадь",
        "brothel": "Публичный дом",
        "casino": "Казино",
        "cinema": "Кинотеатр",
        "community_centre": "Общественный центр",
        "gallery": "Галерея",
        "massage": "Massage spa",
        "nightclub": "Ночной клуб",
        "playground": "Детская площадка",
        "sauna": "Сауна",
        "stripclub": "Стрипклуб",
        "tattoo": "Tattoo shop",
        "theatre": "Театр",
        "zoo": "Зоопарк"
      },
      "misc": {
        "association": "Association",
        "company": "Компания (офис)",
        "estate_agent": "Агентство недвижимости",
        "insurance": "Страхование",
        "lawyer": "Юрист",
        "ngo": "Non-government organisation",
        "place_of_worship": "Место поклонения",
        "political_party": "Political party office",
        "toilets": "Туалет"
      },
      "money_post": {
        "atm": "Банкомат",
        "bank": "Банк",
        "bureau_de_change": "Обмен валюты",
        "post_box": "Почтовый ящик",
        "post_office": "Почтовое отделение"
      },
      "public_transfer": {
        "aerodrome": "Аэропорт",
        "bicycle_parking": "Велопарковка",
        "bicycle_rental": "Прокат велосипедов",
        "boatyard": "Лодочная мастерская",
        "bus_station": "Автобусная станция",
        "bus_stop": "Автобусная остановка",
        "cable_car": "Канатная дорога",
        "car_rental": "Прокат автомобилей",
        "car_sharing": "Автообмен",
        "chair_lift": "Кресельный подъемник",
        "ferry": "Паром",
        "ferry_terminal": "Терминал парома",
        "fuel": "Автозаправка",
        "halt": "Остановка",
        "light_rail": "Легкорельсовый транспорт",
        "parking": "Парковка",
        "parking_aisle": "Проход на парковку",
        "platform": "Платформа",
        "station": "Железнодорожный вокзал",
        "subway_entrance": "Вход в метро",
        "terminal": "Терминал аэропорта",
        "tram_stop": "Трамвайная остановка"
      },
      "shopping": {
        "alcohol": "Спиртные напитки",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "Кондитерская",
        "beauty": "Салон красоты",
        "beverages": "Напитки",
        "bicycle": "Велосипедний магазин",
        "books": "Книги",
        "butcher": "Мясная лавка",
        "car_repair": "Автосервис",
        "car_shop": "Автосалон",
        "chemist": "Бытовая химия",
        "clothes": "Одежда",
        "computer": "Компьютер",
        "confectionery": "Магазин сладостей",
        "convenience": "Удобства",
        "copyshop": "Copy shop",
        "deli": "Гастроном",
        "department_store": "Универмаг",
        "doityourself": "Сделай сам",
        "dry_cleaning": "Химчистка",
        "electronics": "Электроника",
        "erotic": "Sex shop",
        "fabric": "Магазин тканей",
        "farm_shop": "Магазин фермерских продуктов",
        "florist": "Флорист",
        "funeral_directors": "Funeral home",
        "furniture": "Мебель",
        "garden_centre": "Садовый центр",
        "gift": "Магазин \"Подарки\"",
        "greengrocer": "Greengrocer",
        "hairdresser": "Парикмахер",
        "hardware": "Аппаратура",
        "interior_decoration": "Interior design shop",
        "jewelry": "Ювелирные изделия",
        "kiosk": "Киоск",
        "laundry": "Прачечная",
        "mall": "Торговый центр",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "Оптика",
        "organic": "Магазин экологических продуктов",
        "outdoor": "Товары для активного отдыха",
        "pet": "Зоомагазин",
        "photo": "Фото",
        "second_hand": "Секонд Хенд",
        "shoes": "Обувь",
        "sports": "Спорт",
        "stationery": "Канцелярские товары",
        "supermarket": "Супермаркет",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Магазин игрушек",
        "travel_agency": "Туристическое агентство",
        "variety_store": "Discount store",
        "video": "Видеопрокат"
      },
      "sport": {
        "pitch": "Спортплощадка",
        "sports_centre": "Спортзал",
        "stadium": "Стадион",
        "swimming": "Плаванье",
        "swimming_pool": "Бассейн"
      },
      "tourism": {
        "archaeological_site": "Археологические раскопки",
        "arts_centre": "Арт центр",
        "artwork": "Произведение искусства",
        "attraction": "Аттракцион",
        "battlefield": "Поле боя",
        "beach": "Пляж",
        "beacon": "Маяк",
        "castle": "Замок",
        "cave_entrance": "Вход в пещеру",
        "information": "Информация для туристов",
        "memorial": "Памятник",
        "theme_park": "Парк развлечений",
        "tower": "Башня",
        "viewpoint": "Смотровая площадка"
      },
      "unknown": {
        "unknown": "Неизвестный"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Статус: подключенный",
          "grant": "Соединить",
          "not_connected": "Статус: не подключено",
          "revoke": "Отключено"
        }
      },
      "headline": "Изменить профиль"
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
        "headline": "Извините, мы не нашли места с названием \"%{query}\".",
        "hint": {
          "example": "<strong>Например:</strong> Архангельск, Россия",
          "info": "Наш сервис поиска работает только с названиями и/или адресной информацией. Пожалуйста, ищите по названию места или адресу: например, названию улицы и/или города. Поиск типа места, например, ресторана или кинотеатра, не работает!",
          "work_in_progress": "Мы прилагаем все усилия, чтобы сделать поиск мест проще и понятнее в будущем."
        },
        "try_this": {
          "address": "Укажите более <strong>подробный адрес</strong>.",
          "intro": "Попробуйте это:",
          "spell_check": "Проверьте <strong>орфографию</strong> вашего текста."
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} результата:",
          "many": "%{count} результатов:",
          "one": "1 результат:",
          "other": "%{count} результатов:"
        }
      },
      "search": {
        "for": "Искать для \"%{q}\"",
        "not_found": "Нет мест, которые можно найти!"
      }
    },
    "timeout": {
      "headline": "Извините, что-то пошло не так",
      "info": "К сожалению, поиск временно не доступнен ",
      "repeat_search": "Повторить поиск"
    }
  },
  "splash": {
    "countline": "%{count} мест уже были отмечены",
    "headline": "Каждый может добавлять места, доступные на креслах-колясках!",
    "start": "Старт",
    "step1": "Нажмите на место, которое вы знаете",
    "step2": "Отметьте его и нажмите кнопку сохранения",
    "step3": "Вот и все! Регистрация не обязательна",
    "what_is_wheelmap": "Что такое Wheelmap?"
  },
  "statistics": "Статистика",
  "support": {
    "array": {
      "last_word_connector": " и ",
      "sentence_connector": "и",
      "two_words_connector": " и ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Пожалуйста, выберите"
    }
  },
  "time": {
    "am": "утра",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "вечера"
  },
  "toiletstatus": {
    "no": "Недоступный для людей на кресле-коляске туалет",
    "unknown": "Наличие туалета оборудованного для инвалидов неизвестно",
    "what_is": {
      "no": "Внутренняя ширина дверных проемов мин. 90 см, чистое пространство пола мин. 150х150 см, сиденье унитаза на высоте кресла-коляски, складные поручни и доступная раковина.",
      "unknown": "Помогите, отмечая доступность туалетов!",
      "yes": "Внутренняя ширина дверных проемов мин. 90 см, чистое пространство пола мин. 150х150 см, сиденье унитаза на высоте кресла-коляски, складные поручни и доступная раковина."
    },
    "yes": "Доступный для людей на кресле-коляске туалет"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Ваш аккаунт уже активирован!"
      },
      "error": {
        "notice": "Email и пароль не совпадают."
      },
      "notice": "Вы вошли!"
    },
    "destroy": {
      "notice": "Пока, до скорого возвращения!"
    },
    "new": {
      "email": "Адрес эл. почты",
      "login": "Войти",
      "login_with_twitter": "Войти в Twitter",
      "password": "Пароль",
      "remember_me": "Запомнить меня"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Почти готово! Теперь для завершения регистрации аккаунта Wheelmap:",
        "set_password_for_mobile": "Регистрация на OpenStreetMap завершена. Теперь выберите адрес эл. почты, который Wheelmap будет использовать, чтобы информировать вас (например, о количестве мест, которые вы отметили). Вы можете получить доступ к этой информации в вашем \"Профиле\".",
        "text": "Как мы можем связаться с вами? Вы можете изменить эту информацию позже в своём профиле."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Загруженные Вами изображения"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Информация о вашем аккаунте"
        },
        "title": "Профиль"
      },
      "newsletter": {
        "label": "Да, держите меня в курсе о новостях Wheelmap.",
        "text": "Будьте в курсе с бюллетенем Wheelmap. Не беспокойтесь, мы не будем рассылать вам спам. Вы услышите о нас максимум раз в месяц.",
        "title": "Подписаться на обновления"
      },
      "photos": {
        "empty": "Вы ещё не загружали фото.",
        "title": "Фото"
      },
      "show": {
        "greeting": {
          "anonymously": "Привет всем",
          "personalized": "Привет, %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "few": "загрузили %{count} фото",
            "many": "загрузили %{count} фото",
            "one": "загрузили %{count} фото",
            "other": "загрузили %{count} фото"
          },
          "pois_added": {
            "few": "добавили %{count} места",
            "many": "добавили %{count} мест",
            "one": "добавили %{count} место",
            "other": "добавили %{count} мест"
          },
          "pois_edited": {
            "few": "отредактирвовали %{count} места",
            "many": "отредактирвовали %{count} мест",
            "one": "отредактирвовали %{count} место",
            "other": "отредактирвовали %{count} мест"
          },
          "pois_marked": {
            "few": "отметили %{count} места",
            "many": "отметили %{count} мест",
            "one": "отметили %{count} место",
            "other": "отметили %{count} мест"
          },
          "text": "Вы"
        },
        "text_html": "Привет,<br>\nДобро пожаловать (вновь) на Wheelmap.org! Мы рады видеть вас на борту! Вы можете просмотреть наш <a href=\\\"http://news.wheelmap.org/en/\\\">Блог</a> или <a href=\\\"http://news.wheelmap.org/en/FAQ/\\\">Вопросы и ответы</a>, если вы хотите узнать Wheelmap.org немного больше. Или вы можете узнать больше о <a href=\\\"http://news.wheelmap.org/en/wheelmap-ambassador/\\\">проектах</a>, которые мы предлагаем совместно с Wheelmap.org и о том, как вы можете принять в них участие.<br>\nPЧтобы поддерживать контакт, вы можете подписаться на нашу ежемесячную рассылку и следовать за нами на <a href=\\\"https://www.facebook.com/wheelmap\\\">Facebook</a> и <a href=\\\"https://twitter.com/wheelmap\\\">Twitter</a>. Мы с нетерпением ждем ваши мнения и начала общения с вами!<br>\nА теперь, счастливого картографирования!<br>\nВаша Wheelmap команда",
        "title": "Обзор"
      },
      "widget": {
        "categories": "Показать фильтр категорий",
        "center": "Область карты",
        "empty_center": "Поиск центра карты...",
        "empty_provider": "Выберите провайдера",
        "height": "Высота",
        "legends": {
          "embed": "Код для встраивания",
          "embed_explanation": "Вы можете изменить указанные широту (<code>lat</code>), долготу (<code>lon</code>) и уровень масштабирования (<code>zoom</code>) в коде выше вручную и тем самым настроить сегмент карты (виджет) в зависимости от местоположения, которое вы хотите показать.",
          "general": "Создайте собственный Wheelmap виджет и установите его на свой сайт или блог.",
          "preview": "Предпросмотр",
          "settings": "Настройки"
        },
        "providers": "Провайдер",
        "title": "Виджет",
        "width": "Ширина"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Первая",
      "last": "Последняя &raquo;",
      "next": "Следующая &rsaquo;",
      "previous": "&lsaquo; Предыдущая",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Частично доступно на инвалидных креслах",
    "no": "Недоступно для людей на кресле-коляске",
    "unknown": "Неизвестный статус",
    "yes": "Доступно для кресел-колясок"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Проект",
      "based_on": "Основан на",
      "become_a_supporter": "Стать сопровождающим",
      "main_supporter": "Главный партнёр"
    },
    "itunes": {
      "alt": "Логотип AppStore",
      "title": "Скачать iPhone App сейчас!"
    },
    "logo": {
      "alt": "Логотип Wheelmap - найти места, доступные на кресле-коляске",
      "title": "Wheelmap - найти места, доступные на кресле-коляске"
    },
    "what_is": {
      "fully_accessible": "Вход без ступенек. Все помещения без ступенек.",
      "limited_accessible": "Вход имеет одну ступеньку максимальной высотой 7 см (3 дюйма). Большинство помещений без ступенек.",
      "not_accessible": "Вход имеет одну или несколько ступенек. Помещения не приспособлены для инвалидов.",
      "unknown_accessible": "Помогите, отмечая места!"
    }
  },
  "will_paginate": {
    "next_label": "Следующий &#8594;",
    "page_entries_info": {
      "multi_page": "Отображение %{model} %{from} - %{to} of %{count} в общей сложности",
      "multi_page_html": "Показывать %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> з <b>%{count}</b> в целом",
      "single_page": {
        "one": "Показано 1 %{model}",
        "other": "Отображать все %{count} %{model}",
        "zero": "Не найдено %{model}"
      },
      "single_page_html": {
        "one": "Отображать <b>1</b> %{model}",
        "other": "Отображать <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Не найдено %{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Предыдущий"
  }
});
