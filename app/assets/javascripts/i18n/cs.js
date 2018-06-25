I18n.translations || (I18n.translations = {});
I18n.translations["cs"] = I18n.extend((I18n.translations["cs"] || {}), {
  "actions": {
    "cancel": "Zrušit",
    "next": "Další",
    "save": "Uložit",
    "send": "Odeslat"
  },
  "active_admin": {
    "access_denied": {
      "message": "Nemáte oprávnění k provedení této akce."
    },
    "any": "Kterákoliv",
    "batch_actions": {
      "action_label": "%{title}",
      "button_label": "Hromadné akce",
      "default_confirmation": "Jste si jisti, že chcete provést?",
      "delete_confirmation": "Jste si jisti, že chcete smazat tyto %{plural_model}?",
      "labels": {
        "destroy": "Vymazat"
      },
      "link": "Vytvořit",
      "selection_toggle_explanation": "(Změnit výběr)",
      "succesfully_destroyed": {
        "few": "Úspěšně smazány %{count} %{plural_model}",
        "one": "Úspěšně smazán %{model}",
        "other": "Úspěšně smazáno %{count} %{plural_model}",
        "zero": "Nebyl smazán žádný %{model}"
      }
    },
    "blank_slate": {
      "content": "Zatím zde není žádný obsah.",
      "link": "Vytvořit"
    },
    "cancel": "Zrušit",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Přidat komentář",
      "author": "Autor",
      "author_missing": "Anonymní",
      "author_type": "Typ autora",
      "body": "Tělo",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Komentář nebyl uložen, je prázdný."
      },
      "no_comments_yet": "Žádný komentář",
      "resource": "Zdroj",
      "resource_type": "Typ zdroje",
      "title": "Komentář",
      "title_content": "Komentáře administrátorů (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Úvod",
    "dashboard_welcome": {
      "call_to_action": "Pro přidání sekcí na nástěnku se podívejte do souboru 'app/admin/dashboard.rb'",
      "welcome": "Vítejte v Active Admin. Toto je nástěnka."
    },
    "delete": "Smazat",
    "delete_confirmation": "Jste si jistí, že chcete tuto položku smazat?",
    "delete_model": "Smazat",
    "details": "Detaily",
    "devise": {
      "change_password": {
        "submit": "Změnit své heslo",
        "title": "Změnit heslo"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Zapomněli jste heslo?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Přihlásit se",
        "sign_in_with_omniauth_provider": "Přihlásit se přes %{provider}",
        "sign_up": "Registrovat se"
      },
      "login": {
        "remember_me": "Zapamatovat si mě",
        "submit": "Přihlásit",
        "title": "Přihlášení"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Obnovit heslo",
        "title": "Zapomněli jste heslo?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Zaslat instrukce k odemčení účtu",
        "title": "Zaslání instrukcí k odemčení účtu"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Stáhnout:",
    "dropdown_actions": {
      "button_label": "Akce"
    },
    "edit": "Upravit",
    "edit_model": "Upravit",
    "empty": "Prázdné",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Vyčistit filtry",
        "filter": "Filtrovat"
      },
      "predicates": {
        "contains": "Obsahuje",
        "ends_with": "Končí na",
        "equals": "Odpovídá",
        "greater_than": "Větší než",
        "less_than": "Menší než",
        "starts_with": "Začíná na"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Smazat",
    "has_many_new": "Přidat nový",
    "has_many_remove": "Odstranit",
    "index_list": {
      "block": "Seznam",
      "blog": "Blog",
      "grid": "Tabulka",
      "table": "Tabulka"
    },
    "less_than": "Less Than",
    "logout": "Odhlásit",
    "main_content": "Implementujte prosím %{model}#main_content pro zobrazení obsahu.",
    "new_model": "Vytvořit",
    "next": "Následující",
    "pagination": {
      "empty": "Nenalezen.",
      "entry": {
        "few": "položky",
        "one": "položka",
        "other": "položky"
      },
      "multiple": "<b>%{from}&nbsp;-&nbsp;%{to}</b> z <b>%{total}</b>",
      "multiple_without_total": "<b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Zobrazena  <b>1</b> položka",
      "one_page": "Počet zobrazených položek %{n}"
    },
    "powered_by": "%{active_admin} %{version}",
    "previous": "Předchozí",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtry",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Ne",
      "yes": "Ano"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Zobrazit"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adresa",
        "address_city": "Město",
        "address_housenumber": "Číslo domu",
        "address_postcode": "PSČ",
        "address_street": "Ulice",
        "name": "Název",
        "note": "Poznámka",
        "phone": "Telefon",
        "type": "Typ",
        "website": "Stránka"
      },
      "user": {
        "first_name": "Křestní jméno",
        "last_name": "Příjmení",
        "privacy_policy": "Ochrana soukromí",
        "terms": "Podmínky"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "musí být potvrzeno",
        "blank": "je povinná položka",
        "confirmation": "nebylo potvrzeno",
        "empty": "nesmí být prázdný/á/é",
        "equal_to": "musí být rovno %{count}",
        "even": "musí být sudé číslo",
        "exclusion": "je vyhrazeno pro jiný účel",
        "greater_than": "musí být větší než %{count}",
        "greater_than_or_equal_to": "musí být větší nebo rovno %{count}",
        "inclusion": "není v seznamu povolených hodnot",
        "invalid": "není platná hodnota",
        "less_than": "musí být méně než %{count}",
        "less_than_or_equal_to": "musí být méně nebo rovno %{count}",
        "not_a_number": "není číslo",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "musí být liché číslo",
        "record_invalid": "Validace je neúspešná: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "již databáze obsahuje",
        "too_long": "je příliš dlouhý/á/é (max. %{count} znaků)",
        "too_short": "je příliš krátký/á/é (min. %{count} znaků)",
        "wrong_length": "nemá správnou délku (očekáváno %{count} znaků)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "nemůže být prázdné když je zadané heslo"
            },
            "privacy_policy": {
              "accepted": "musí být přijato"
            },
            "terms": {
              "accepted": "musí být přijaté"
            }
          }
        },
        "user_session": {
          "email": "Emailová adresa",
          "password": "Heslo",
          "remember_me": "Zůstaňte přihlášení"
        }
      },
      "template": {
        "body": "Následující pole obsahují chybně vyplněné údaje: ",
        "header": {
          "one": "Při ukládání objektu %{model} došlo k chybám a nebylo jej možné uložit",
          "other": "Při ukládání objektu %{model} došlo ke %{count} chybám a nebylo možné jej uložit"
        }
      }
    },
    "models": {
      "user": "Uživatel"
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
      "notice": "Už jste přihlášený..."
    },
    "require_user": {
      "notice": "Musíte se přihlásit aby jste viděli tuto stránku."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Přidat místo",
      "edit": "Upravit místo"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "zavřít",
    "skip": "přeskočit"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Napište nám v angličtině nebo němčině, prosím.",
        "flash_after_submit": "Děkujeme Vám, že jste nás kontaktoval. Náš podpůrný tým se Vám ozve hned jak to bude možné.",
        "header_text_html": "Pokud potřebujete pomoc, nejdřív hledejte v <a href=\"https://news.wheelmap.org/en/faq/\">nejčastěji kladených otázkách</a>, prosím. Pokud v nich nenaleznete řešení Vašeho problému, odpovězte prosím na následovní otázky, abychom ho mohli odstranit.",
        "note": "Nezapomeňte, že Wheelmap je projekt s otevřeným zdrojem a je provozován neziskovou organizací a na vývoj aplikace nemáme dostatek prostředků.",
        "questions": {
          "a": "Co jste dělal?",
          "b": "Co jste čekal, že se stane?",
          "c": "Co se ve skutečnosti událo?"
        },
        "submit_button": "Odeslat",
        "title": "Nahlaste problém"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Ne",
      "Po",
      "Út",
      "St",
      "Čt",
      "Pá",
      "So"
    ],
    "abbr_month_names": [
      null,
      "Led",
      "Úno",
      "Bře",
      "Dub",
      "Kvě",
      "Čvn",
      "Čvc",
      "Srp",
      "Zář",
      "Říj",
      "Lis",
      "Pro"
    ],
    "day_names": [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota"
    ],
    "formats": {
      "default": "%d. %m. %Y",
      "long": "%d. %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec"
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
        "one": "asi měsícem",
        "other": "asi %{count} měsíci"
      },
      "about_x_years": {
        "one": "asi rokem",
        "other": "asi %{count} roky"
      },
      "almost_x_years": {
        "one": "téměř rokem",
        "other": "téměř %{count} roky"
      },
      "half_a_minute": "půl minutou",
      "less_than_x_minutes": {
        "one": "necelou minutou",
        "other": "ani ne %{count} minutami"
      },
      "less_than_x_seconds": {
        "one": "necelou sekundou",
        "other": "ani ne %{count} sekundami"
      },
      "over_x_years": {
        "one": "více než rokem",
        "other": "více než %{count} roky"
      },
      "x_days": {
        "one": "24 hodinami",
        "other": "%{count} dny"
      },
      "x_minutes": {
        "one": "minutou",
        "other": "%{count} minutami"
      },
      "x_months": {
        "one": "měsícem",
        "other": "%{count} měsíci"
      },
      "x_seconds": {
        "one": "sekundou",
        "other": "%{count} sekundami"
      }
    },
    "prompts": {
      "day": "Den",
      "hour": "Hodina",
      "minute": "Minuta",
      "month": "Měsíc",
      "second": "Sekunda",
      "year": "Rok"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Váš účet byl úspěšně potvrzen.",
      "link": "Neobdrželi jste instrukce k potvrzení?",
      "send_instructions": "Za několik minut obdržíte email s instrukcemi k potvrzení vašeho účtu.",
      "send_paranoid_instructions": "Pokud váš účet existuje, tak za několik minut obdržíte informační email s instrukcemi k potvrzení vašeho účtu."
    },
    "destroy": {
      "confirm": "Jste si jistí?",
      "headline": "Smazat účet",
      "link": "Smazat"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Současné heslo <i>(potřebujeme ověřit vaše změny)</i>",
          "email": "Email",
          "password": "Heslo <i>(nechte prázdné jestli ho nechcete měnit)</i>",
          "password_confirmation": "Znovu zadejte heslo"
        },
        "submit": "Uložit změny"
      },
      "headline": "Změnit účet"
    },
    "failure": {
      "already_authenticated": "Přihlášení již proběhlo.",
      "inactive": "Váš účet zatím nebyl aktivován.",
      "invalid": "Nesprávný email nebo heslo.",
      "invalid_token": "Neplatný ověřovací symbol.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Váš účet je uzamčen.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Vaše přihlášení vypršelo, znovu se přihlaste a pokračujte. ",
      "unauthenticated": "Musíte se zaregistrovat nebo přihlásit, pak můžete pokračovat.",
      "unconfirmed": "Musíte potvrdit svůj účet, pak můžete pokračovat."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Klikněte, prosím, na odkaz, který jsme vám odeslali na vaši emailovou adresu. Pokud od nás neobdržíte email, tak jako první zkontrolujte, zda se nenachází ve složce Spam. Pokud zde není, tak se vraťte na přihlašovací stránku a zkuste to znovu. ",
        "subject": "Potvrzovací instrukce"
      },
      "reset_password_instructions": {
        "subject": "Instrukce k nastavení nového hesla"
      },
      "unlock_instructions": {
        "subject": "Odemknout instrukce"
      }
    },
    "mandatory": "* Povinné",
    "omniauth_callbacks": {
      "failure": "Není možné autorizovat z %{kind}, protože: \"%{reason}\".",
      "permission_missing": "Neudělili jste požadované povolení.",
      "success": "Úspěšná autorizace z účtu %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Obnovit heslo"
      },
      "headline": "Zapomněli jste heslo?"
    },
    "password_reset": {
      "email": {
        "comment": "Jestli jste nežádali o obnovení hesla tak tento email ignorujte. <br/> Vaše heslo bude změněné jenom jestli kliknete na odkaz nahoře a nastavíte si heslo nové.",
        "headline": "Vítejte %{email}",
        "link": "Změnit heslo",
        "text": "Obdrželi jsme požadavek na změnu vašeho hesla. Pokud jste odeslali požadavek, tak klikněte na následující odkaz - pokud ne, tak toto hlášení ignorujte!"
      },
      "form": {
        "labels": {
          "password": "Nové heslo",
          "password_confirmation": "Zopakujte heslo"
        },
        "submit": "Obnovit heslo"
      },
      "headline": "Obnovit heslo"
    },
    "passwords": {
      "link": "Zapomněli jste heslo?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Za několik minut obdržíte email s instrukcemi k obnovení vašeho hesla",
      "send_paranoid_instructions": "Pokud váš účet existuje, tak za několik minut obdržíte informační email s instrukcemi k obnovení vašeho hesla",
      "updated": "Vaše heslo bylo úspěšně změněno. Nyní jste přihlášen(a).",
      "updated_not_active": "Vaše heslo bylo úspěšně změněno."
    },
    "registrations": {
      "destroyed": "Nashle! Váš účet byl úspěšně zrušen. Doufáme, že se brzy opět uvidíme.",
      "inactive_signed_up": "Registrace byla úspěšná. Nicméně, nemůžete se přihlásit, protože: \"%{reason}\".",
      "link": "Vytvořit účet",
      "reasons": {
        "inactive": "Váš účet ještě nebyl aktivován.",
        "locked": "zamčeno",
        "unconfirmed": "nepotvrzené"
      },
      "signed_up": "Úspěšně jste se přihlásili. Byl vám zaslán potvrzovací email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Úspěšně jste si aktualizovali účet."
    },
    "sessions": {
      "inactive": "Váš účet zatím nebyl aktivován",
      "invalid": "Nesprávný email nebo heslo.",
      "invalid_token": "Neplatný ověřovací symbol.",
      "link": "Přihlásit se",
      "locked": "Váš účet je zablokovaný",
      "new": {
        "no_osm_account": "Nemáte účet u OpenStreetMap?",
        "osm_promo_text": "Wheelmap je založena na geodatech z OpenStreetMap (OSM). OpenStreetMap je celosvětová mapa, která je zadarmo a je vytvořena lidmi jako jste vy. Je to něco jako Wikipedie pro mapy. Abyste mohli upravovat místa nebo vytvářet nová, tak potřebujete účet na OpenStreetMap, se kterým musíte být přihlášen.",
        "promo_text_thank_you": "Děkujeme za vaší podporu!",
        "sign_in_with": "Přihlašte se pomocí %{kind}",
        "sign_up_with_osm": "Zaregistrujte se.",
        "wheelmap_promo_text": "Pokud máte povědomí o místech s přístupem pro vozíčkáře, tak můžete pomoci těmto lidem s jejich každodenními problémy. Jinak alespoň pomůžete do detailu popsat OpenStreetMap. "
      },
      "signed_in": "Přihlášení úspěšné.",
      "signed_out": "Odhlášení úspěšné.",
      "timeout": "Vaše přihlášení vypršelo, znovu se přihlaste a pokračujte.",
      "unauthenticated": "Musíte se zaregistrovat nebo přihlásit, pak můžete pokračovat.",
      "unconfirmed": "Musíte potvrdit svůj účet, pak můžete pokračovat."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Heslo",
          "remember_me": "Zůstat přihlášený?"
        },
        "submit": "Přihlásit se"
      },
      "headline": "Přihlásit se"
    },
    "sign_out": {
      "headline": "Odhlásit se"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Potvrdit svůj účet",
        "please_confirm": "Váš účet potvrdíte následujícím odkazem:",
        "welcome": "Vítejte %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Heslo",
          "password_confirmation": "Znovu zadejte heslo",
          "wants_newsletter": "Ano, upozorňujte mě na aktualizace k aplikaci Wheelmap - ale ne více, než jednou za měsíc."
        },
        "submit": "Vytvořit účet"
      },
      "headline": "Vytvořit účet"
    },
    "unlocks": {
      "link": "Neobdrželi jste instrukce k odemknutí?",
      "send_instructions": "Za několik minut obdržíte email s instrukcemi k odemknutí vašeho účtu",
      "send_paranoid_instructions": "Pokud váš účet existuje, tak za několik minut obdržíte informační email s instrukcemi k odemknutí vašeho účtu",
      "unlocked": "Váš účet byl úspěšně odemknut. Nyní jste přihlášen(a)."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "musí být potvrzeno",
      "already_confirmed": "byl již potvrzen, prosím, zkuste se přihlásit",
      "blank": "musí být vyplněno",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nebylo potvrzeno",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "musí být vyplněno",
      "equal_to": "musí být rovno %{count}",
      "even": "musí být sudé číslo",
      "exclusion": "je vyhrazeno pro jiný účel",
      "expired": "vypršel, prosím, požádejte si o nový",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "musí být větší než %{count}",
      "greater_than_or_equal_to": "musí být větší nebo rovno %{count}",
      "inclusion": "není v seznamu povolených hodnot",
      "invalid": "není platná hodnota",
      "less_than": "musí být méně než %{count}",
      "less_than_or_equal_to": "musí být méně nebo rovno %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "není číslo",
      "not_an_integer": "musí být celé číslo",
      "not_found": "nenalezen",
      "not_locked": "nebyl uzamčen",
      "not_saved": {
        "few": "%{count} chyby zabránily uložení %{resource}:",
        "one": "%{count} chyba zabránila uložení %{resource}:",
        "other": "%{count} chyb zabránilo uložení %{resource}:"
      },
      "odd": "musí být liché číslo",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "již databáze obsahuje",
      "too_long": "je příliš dlouhý/á/é (max. %{count} znaků)",
      "too_short": "je příliš krátký/á/é (min. %{count} znaků)",
      "wrong_length": "nemá správnou délku (očekáváno %{count} znaků)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Neplatná adresa webové stránky."
        }
      }
    },
    "template": {
      "body": "Následující pole obsahují chybně vyplněné údaje: ",
      "header": {
        "few": "%{count} chyby zabránily uložení %{resource}:",
        "one": "%{count} chyba zabránila uložení %{resource}:",
        "other": "%{count} chyb zabránilo uložení %{resource}:"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Kdykoliv můžete sami změnit označení místa. Jednoduše zvolte správné označení a dejte \"Uložit\" - hotovo!",
      "1": "Jako přihlášený uživatel můžete přidávat / opravovat všechny údaje o místě. Klikněte na \"Změnit\" a upravte nebo přidejte informaci do pole.",
      "2": "V sekci komentářů můžete přidat další informace (např. \"Toto místo má plošinu pro vozíčkáře\"). Klikněte na \"Změnit\" a pak na \"Přidat komentář\"."
    },
    "headline": "Je s tímto místem nějaký problém?",
    "questions": {
      "0": "Označení je špatně.",
      "1": "Podrobnosti o tomto místě jsou nesprávné nebo chybějící.",
      "2": "O tomto místě mám více informací."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} - úspěšně vytvorřeno"
      },
      "destroy": {
        "alert": "%{resource_name} se nepovedlo odstranit",
        "notice": "%{resource_name} již neexistuje"
      },
      "update": {
        "notice": "Úspěšně jste změnili %{resource_name}"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Obrázek byl úspěšně smazaný"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Přístupné pro vozíčkáře",
    "show_limited_accessible_places": "Částečně bezbariérový přístup",
    "show_places_without_status": "Status neznámý",
    "show_unaccessible_places": "Není bezbariérový"
  },
  "formtastic": {
    "hints": {
      "email": "Vaše adresa je u nás v bezpečí - žádný spam. Slibujeme!",
      "lat": "Posuňte značku na mapě aby jste opravili polohu",
      "osm_username": "Ještě k nám nepatříte? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\"> Vytvořite si nyní účet na OpenStreetMap</a>",
      "password": "(nechte prázdné když nechcete změnit)",
      "phone": "Například: +49 30 12345678",
      "website": "Například: http://www.example.com"
    },
    "labels": {
      "category": "Kategorie:",
      "centralkey": "Společný klíč:",
      "city": "Město:",
      "create": "Vytvořit místo",
      "email": "Email",
      "finish": "Dokončit",
      "housenumber": "Číslo:",
      "lat": "Zeměpisná šířka",
      "lon": "Zeměpisná délka",
      "name": "Jméno:",
      "osm_password": "Heslo k OpenStreetMap",
      "osm_username": "Účet na OpenStreetMap",
      "password": "Heslo",
      "password_confirmation": "Zopakujte heslo",
      "phone": "Telefon:",
      "postcode": "Směrovací číslo:",
      "privacy_policy": "Souhlasím s paragrafy 1 a 2 ochrany osobních údajů.",
      "reset": "Obnovit",
      "save": "Uložit",
      "street": "Ulice:",
      "terms": "Souhlasím s podmínkami použití.",
      "type": "Typ:",
      "website": "Stránka:",
      "wheelchair": "Přístupnost pro vozíčkáře?",
      "wheelchair_description": "Poznámka k přístupnosti:",
      "wheelchair_toilet": "Toaleta přístupná pro vozíčkáře:"
    },
    "titles": {
      "basic": "Základní údaje",
      "optional": "Více informací <span class=\"addition\">(všechny položky jsou povinné)</span>"
    }
  },
  "global": {
    "form_validation_error": "Došlo k následujícím chybám"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org je online mapa k vyhledávání a označení míst vhodných pro vozíčkáře. Zapojte se do označování veřejných míst, jako jsou bary, restaurace, kina nebo supermarkety.",
      "homepage": "Domovská stránka",
      "keywords": "místa přístupné pro vozíčkáře hledat označovat",
      "search": "Hledat",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Novinky",
      "choose_language": "Zvolte jazyk",
      "contact": "Kontakt",
      "faq": "Často kladené dotazy",
      "feedback": "Zpětná vazba",
      "home": "Start",
      "how_to_add_a_place": "Jak přidám místa?",
      "imprint": "Impresum",
      "logged_in_as": "Přihlášen jako:",
      "login": "Přihlásit se",
      "logout": "Odhlásit se",
      "map": "Mapa",
      "newsletter": "Novinky",
      "press": "Tisk",
      "privacy": "Privacy Policy",
      "profile": "Profil",
      "projects": "Zapojte se",
      "report_problem": "Nahlaste problém",
      "suggestions": "Návrhy",
      "travelguide": "Cestovní průvodce",
      "what_is_barrier_free": "Co to znamená \"přístupné pro vozíčkáře\"?",
      "what_is_wheelmap": "Co je to Wheelmap?"
    },
    "searchbar": {
      "add_place": "Přidat další místo",
      "find": "Najít",
      "placeholder": "Hledat místo",
      "title_add_place": "Přidejte sem nové místo!"
    },
    "tagline": "Logo Wheelmap",
    "title": "Najít bezbariérová místa",
    "toolbar": {
      "categories": "Kategorie"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Zobrazuji %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> z <b>%{total} celkových</b>"
      },
      "one_page": {
        "display_entries": {
          "few": "Zobrazuji <b>%{count}</b> %{entry_name}",
          "one": "Zobrazuji <b>%{count}</b> %{entry_name}",
          "other": "Zobrazuji <b>%{count}</b> %{entry_name}",
          "zero": "Žádná položka nenalezena"
        }
      }
    },
    "select": {
      "prompt": "Prosím vyberte si"
    },
    "submit": {
      "create": "Vytvořit %{model}",
      "submit": "Uložit %{model}",
      "update": "Aktualizovat %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Ukázat na Wheelmap.org",
      "filter": {
        "category": "Vyberte kategorii",
        "deselect_all": "Odznačit vše",
        "select_all": "Označit vše",
        "wheelchair": "Bezbariérový přístup?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorovat",
          "upgrade": "Aktualizovat prohlížeč"
        },
        "warning": {
          "headline": "Omlouváme se!",
          "message": "Zdá se, že používáte Internet Explorer. Wheelmap funguje správně jen v prohlížečích, které odpovídají webovým standardům. Prosím zvažte použití prohlížečů Firefox, Chrome, Safari nebo Opera."
        }
      },
      "link": {
        "node": {
          "create": "Přidat místo"
        }
      },
      "overlay": {
        "button": "Dobře, pojďme na to!",
        "categories": "Filtrovat místa podle kategorií",
        "filter": "Filtrovat místa podle přístupnosti",
        "headline": "Označujte a hledejte místa přístupné pro vozíčkáře na Wheelmap.org - na celém světe a zdarma. Je to jednoduché:",
        "lookup": "Hledat konkrétní místo",
        "secondary_headline": "Náš semaforový systém pro označení přístupnosti objektů pro vozíčkáře:"
      },
      "popup": {
        "form": {
          "limited": "Částečně bezbariérový přístup",
          "no": "Není bezbariérový",
          "save": "Aktualizovat",
          "unknown": "Status neznámý",
          "yes": "Přístupné pro vozíčkáře"
        },
        "help": "Přístupné pro vozíčkáře? (Pomoc)",
        "more": "více ..."
      },
      "zoom_alert": "Přibližte si mapu, abyste viděli více míst."
    }
  },
  "how?": "Jak?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Všechny %{type} s omezeným přístupem pro vozíčkáře v %{city} (%{count})"
        },
        "no": {
          "headline": "Všechny %{type} s bariérami v %{city} (%{count})"
        },
        "unknown": {
          "headline": "Všechny %{type} ve městě %{city} s neznámou dostupností pro vozíčkáře (%{count})"
        },
        "yes": {
          "headline": "Všechny bezbariérové přístupy %{type} v %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Projekt Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Zvolte kategorii"
    },
    "node": {
      "info_edit_position": "Poloha se zobrazí na Wheelmap, tak jak je uvedeno výše. Pokud značka není na správném místě, můžete <a href=\"%{url}\"> změnit pozici na OpenStreetMap. </a>",
      "mail": {
        "body": "(Pište prosím pouze anglicky nebo německy). \n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problém s %{headline}"
      }
    },
    "node_type": {
      "prompt": "Zvolte typ"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Stránka:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Jeje, vaše zadání bylo nesprávné nebo neúplné",
        "successfull": "Děkujeme, váš příspěvek byl uložený a brzy bude zobrazený na mapě."
      }
    },
    "edit": {
      "header": {
        "title": "Upravit místo: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Zrušit\n"
      }
    },
    "errors": {
      "default": "Jejda, něco se pokazilo. Správci stránky byli o problému informováni.",
      "not_authorized": "Přihlášení bylo neúspěšné",
      "not_available": "Omlouváme se, tahle stránka je dočasně nedostupná.",
      "not_existent": "Omlouváme se, ale toto místo již není dostupné.",
      "not_found": "Omlouváme se, ale stránka nebyla nalezena.",
      "param_missing": "Zadejte prosím hledaný výraz"
    },
    "flash": {
      "authorize_wheelmap": "K úpravě dat je potřeba účet na OpenStreetMap"
    },
    "new": {
      "form": {
        "legend": "Poloha objektu",
        "location": "Klikněte, prosím, na mapu, kde je dané místo umístěno!",
        "section": {
          "accessibility": {
            "name": "Dostupnost pro vozíčkáře",
            "title": "Informace o dostupnosti pro vozíčkáře"
          },
          "address": {
            "help": "Můžete přesunout označovací kurzor na správné místo na mapě.",
            "name": "Adresa",
            "title": "Kde je to místo?"
          },
          "contact": {
            "name": "Kontakt",
            "title": "Jiné kontaktní informace"
          },
          "name_category": {
            "name": "Typ jména a místa",
            "title": "Poskytněte nám důležité informace o vašem bydlišti:"
          },
          "overview": {
            "title": "Jsou všechny informace správné?"
          },
          "similar_nodes": {
            "empty": "Nebyla nalezena příbuzná místa",
            "go_edit": "Pokračovat s tímto místem",
            "go_new": "Neodpovídá místům nahoře ...",
            "name": "Podobné místa",
            "title": "Našli jsme podobná místa. Je to jedno z těchto?"
          }
        },
        "title": "Přidat místo"
      },
      "header": {
        "title": "Nové místo | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Zrušit\n"
      }
    },
    "node": {
      "link": {
        "claim": "Pracujete zde?",
        "edit_node": "Upravit místo",
        "report_bug": "Nahlaste problém"
      }
    },
    "node_data": {
      "address": "Adresa:",
      "contact_details": "Kontakní údaje:"
    },
    "node_edit": {
      "details": "Detaily",
      "edit": "Změnit"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Komentář:"
    },
    "node_photos": {
      "add": "Přidat",
      "alert": "Upozornění: Vchod by měl být na fotografii jasně viditelný, aby bylo patrné následující: Jsou u vchodu schody? Jaká je přibližná výška schodu? Jak široké jsou dveře? Fotografie musí být ve formátu JPG nebo PNG a neměla by být větší než 10 MB.",
      "photos_of_this_place": "Fotky tohoto místa:",
      "upload": "Nahrát"
    },
    "node_similar": {
      "similar": "Podobné místa:  %{name}"
    },
    "node_status": {
      "accessible_toilet": "Toaleta přístupná pro vozíčkáře:",
      "premium": "%{name} říká: toto místo je",
      "wheelchair_accessibility": "Přístupnost pro vozíčkáře:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Na Wheelmap.org zjistíte, jestli je toto místo přístupné pro vozíčkáře. Také můžete přidat další informace a fotky k danému místu.",
          "title": "Tohle místo je na Wheelmap.org: %{name}"
        },
        "title": "Místo: %{node} | wheelmap.org\n"
      },
      "link": {
        "back": "zpět",
        "large_map": "Zvětšit",
        "listing": "Všechna místa typu '%{type}' v %{city}",
        "upload": "Nahrát obrázek"
      },
      "more_data_from": "O tomhle místě je více údajů, zkontroloval:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "Našel jsem toto místo na Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Zadali jste neúplné nebo nesprávné heslo",
        "successfull": "Děkujeme, váš příspěvek byl uložený a brzy bude zobrazený na mapě."
      }
    },
    "update_wheelchair": {
      "successfull": "Stav pro \"%{name}\" byl změněný na \"%{status}\" a brzy bude online."
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
        "unit": "Kč"
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
          "billion": "Miliarda",
          "million": "Milion",
          "quadrillion": "Kvadrilion",
          "thousand": "Tisíc",
          "trillion": "Bilion",
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
            "other": "Bajtů"
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
        "headline": "Abyste mohli vytvářet nebo editovat místa na Wheelmap.org, musíte si propojit svůj účet se svým účtem na OpenStreetMap."
      }
    },
    "callback": {
      "notice": "Váš účet na Wheelmap je nyní propojený s účtem uživatele %{user} na OpenStreetMap."
    }
  },
  "or": "nebo",
  "place": {
    "few": "%{count} místa",
    "one": "%{count} místo",
    "other": "%{count} míst"
  },
  "poi": {
    "category": {
      "accommodation": "Ubytování",
      "education": "Vzdělávání",
      "food": "Jídlo",
      "government": "Vláda",
      "health": "Zdraví",
      "leisure": "Volný čas",
      "misc": "Různé",
      "money_post": "Banka / Pošta",
      "public_transfer": "Veřejná doprava",
      "shopping": "Nákupy",
      "sport": "Sport",
      "tourism": "Cestování",
      "unknown": "Neznámé"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Plážový hotel",
        "bed_and_breakfast": "Nocleh se snídaní",
        "camp_site": "Kemp",
        "caravan_site": "Autokemp pro obytné přívěsy",
        "chalet": "Horská chata",
        "dormitory": "Koleje",
        "guest_house": "Penzion",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Vysoká škola",
        "driving_school": "Autoškola",
        "kindergarten": "Školka",
        "library": "Knihovna",
        "museum": "Muzeum",
        "school": "Škola",
        "university": "Univerzita"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Zahrádka",
        "cafe": "Kafe",
        "drinking_water": "Pitná voda",
        "fast_food": "Rychlé občerstvení",
        "ice_cream": "Zmrzlina",
        "pub": "Hospoda",
        "restaurant": "Restaurace"
      },
      "government": {
        "courthouse": "Soud",
        "embassy": "Velvyslanectví",
        "employment_agency": "Pracovní agentura",
        "government": "Vládní agentura",
        "police": "Policie",
        "public_building": "Veřejná budova",
        "townhall": "Radnice"
      },
      "health": {
        "alternative": "Lékař alternativní medicíny",
        "dentist": "Zubař",
        "doctors": "Doktor",
        "hearing_aids": "Dodavatel naslouchacích pomůcek",
        "hospital": "Nemocnice",
        "medical_supply": "Medicínské vybavení",
        "occupational_therapist": "Pracovní terapeut/ka",
        "pharmacy": "Lékárna",
        "physiotherapist": "Fyzioterapeut/ka",
        "psychotherapist": "Psychoterapeut/k",
        "social_facility": "Společenské zázemí",
        "speech_therapist": "Logoped/ka",
        "veterinary": "Veterinář"
      },
      "leisure": {
        "arena": "Stadion",
        "brothel": "Nevěstinec",
        "casino": "Kasino",
        "cinema": "Kino",
        "community_centre": "Komunitní centrum",
        "gallery": "Galerie",
        "massage": "Masérský salon",
        "nightclub": "Noční klub",
        "playground": "Hřiště",
        "sauna": "Sauna",
        "stripclub": "Strip club",
        "tattoo": "Tetovací salon",
        "theatre": "Divadlo",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Asociace",
        "company": "Společnost (Kancelář)",
        "estate_agent": "Realitní kancelář",
        "insurance": "Pojištění",
        "lawyer": "Právník",
        "ngo": "Nevládní organizace",
        "place_of_worship": "Svatyně",
        "political_party": "Kancelář politické strany",
        "toilets": "Toalety"
      },
      "money_post": {
        "atm": "Bankomat",
        "bank": "Banka",
        "bureau_de_change": "Směnárna",
        "post_box": "Poštovná schránka",
        "post_office": "Pošta"
      },
      "public_transfer": {
        "aerodrome": "Letiště",
        "bicycle_parking": "Stojan na kola",
        "bicycle_rental": "Půjčovna kol",
        "boatyard": "Přístav",
        "bus_station": "Autobusová stanice",
        "bus_stop": "Zastávka autobusu",
        "cable_car": "Lanovka",
        "car_rental": "Půjčovna automobilů",
        "car_sharing": "Sdílení automobilů",
        "chair_lift": "Sedačková lanovka",
        "ferry": "Trajekt",
        "ferry_terminal": "Nástupiśtě na trajekt",
        "fuel": "Benzínová pumpa",
        "halt": "Zastávka",
        "light_rail": "Rýchlodražna tramvaj",
        "parking": "Parkování",
        "parking_aisle": "Parkovací ulička",
        "platform": "Nástupiště",
        "station": "Nádraží",
        "subway_entrance": "Vchod do metra",
        "terminal": "Letištní terminál",
        "tram_stop": "Zastávka tramvaje"
      },
      "shopping": {
        "alcohol": "Alkohol",
        "antiques": "Starožitnosti",
        "art": "Galerie",
        "bakery": "Pekárna",
        "beauty": "Salon krásy",
        "beverages": "Nápoje",
        "bicycle": "Kola",
        "books": "Knihy",
        "butcher": "Řeznictví",
        "car_repair": "Autoservis",
        "car_shop": "Automobily",
        "chemist": "Drogerie / Lékárna",
        "clothes": "Oblečení",
        "computer": "Počítače",
        "confectionery": "Cukrárna",
        "convenience": "Příslušenství",
        "copyshop": "Kopírovací centrum",
        "deli": "Delikatesy",
        "department_store": "Obchodní dům",
        "doityourself": "Kutilské potřeby",
        "dry_cleaning": "Čistírna",
        "electronics": "Elektronika",
        "erotic": "Sexshop",
        "fabric": "Textil",
        "farm_shop": "Farmářský obchod",
        "florist": "Květinářství",
        "funeral_directors": "Pohřební ústav",
        "furniture": "Nábytek",
        "garden_centre": "Zahradní centrum",
        "gift": "Suvenýry",
        "greengrocer": "Zelenina",
        "hairdresser": "Kadeřnictví",
        "hardware": "Železářství",
        "interior_decoration": "Obchod s bytovou architekturou",
        "jewelry": "Klenotnictví",
        "kiosk": "Stánek",
        "laundry": "Prádelna",
        "mall": "Nákupní středisko",
        "mobile_phone": "Obchod s mobilními telefony",
        "music": "Obchod s nahrávkami",
        "musical_instrument": "Obchod s hudebními nástroji",
        "newsagent": "Trafika",
        "optician": "Optika",
        "organic": "Organické výrobky",
        "outdoor": "Outdoorové vybavení",
        "pet": "Zverimex",
        "photo": "Fotky",
        "second_hand": "Second hand",
        "shoes": "Boty",
        "sports": "Sporty",
        "stationery": "Papírnictví",
        "supermarket": "Supermarket",
        "tailor": "Krejčí",
        "tea": "Nabídka čaje",
        "tobacco": "Tabák",
        "toys": "Hračky",
        "travel_agency": "Cestovní kancelář",
        "variety_store": "Prodejna zlevněného zboží",
        "video": "Videopůjčovna"
      },
      "sport": {
        "pitch": "Hřiště",
        "sports_centre": "Sportovní centrum",
        "stadium": "Stadion",
        "swimming": "Plavání",
        "swimming_pool": "Plavecký bazen"
      },
      "tourism": {
        "archaeological_site": "Archeologické naleziště",
        "arts_centre": "Kulturní centrum",
        "artwork": "Umění",
        "attraction": "Atrakce",
        "battlefield": "Bojiště",
        "beach": "Pláž",
        "beacon": "Maják",
        "castle": "Hrad",
        "cave_entrance": "Vstup do jeskyně",
        "information": "Turistické informace",
        "memorial": "Památník",
        "theme_park": "Zábavný park",
        "tower": "Věž",
        "viewpoint": "Rozhled"
      },
      "unknown": {
        "unknown": "Neznámé"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Stav: připojený",
          "grant": "Připojit se",
          "not_connected": "Stav: Nepřipojeno",
          "revoke": "Odpojit"
        }
      },
      "headline": "Upravte svůj účet"
    }
  },
  "ransack": {
    "all": "každou",
    "and": "a",
    "any": "kteroukoliv",
    "asc": "vzestupné",
    "attribute": "atribut",
    "combinator": "kombinátor",
    "condition": "podmínka",
    "desc": "sestupné",
    "or": "nebo",
    "predicate": "predikát",
    "predicates": {
      "blank": "je prázdné",
      "cont": "obsahuje",
      "cont_all": "obsahuje všechny",
      "cont_any": "obsahuje kterékoliv",
      "does_not_match": "neodpovídá",
      "does_not_match_all": "neodpovídá všem",
      "does_not_match_any": "neodpovídá kterékoliv",
      "end": "končí s",
      "end_all": "končí se všemi",
      "end_any": "končí s kteroukoliv",
      "eq": "rovno",
      "eq_all": "rovno všem",
      "eq_any": "rovno kterékoliv",
      "false": "není pravdivé",
      "gt": "větší než",
      "gt_all": "větší než všechny",
      "gt_any": "větší než kterákoliv",
      "gteq": "větší nebo rovno než",
      "gteq_all": "větší nebo rovno než všechny",
      "gteq_any": "větší nebo rovno než kterákoliv",
      "in": "v",
      "in_all": "ve všech",
      "in_any": "v kterékoliv",
      "lt": "menší než",
      "lt_all": "menší než všechny",
      "lt_any": "menší než kterákoliv",
      "lteq": "menší nebo rovno než",
      "lteq_all": "menší nebo rovno než všechny",
      "lteq_any": "menší nebo rovno než kterákoliv",
      "matches": "odpovídá",
      "matches_all": "odpovídá všem",
      "matches_any": "odpovídá kterékoliv",
      "not_cont": "neobsahuje",
      "not_cont_all": "neobsahuje všechny",
      "not_cont_any": "neobsahuje kteroukoliv",
      "not_end": "nekončí s",
      "not_end_all": "nekončí se všemi",
      "not_end_any": "nekončí s kteroukoliv",
      "not_eq": "nerovno",
      "not_eq_all": "nerovno všem",
      "not_eq_any": "nerovno kterékoliv",
      "not_in": "není v",
      "not_in_all": "není ve všech",
      "not_in_any": "není v kterékoliv",
      "not_null": "není null",
      "not_start": "nezačíná s",
      "not_start_all": "nezačíná se všemi",
      "not_start_any": "nezačíná s kteroukoliv",
      "null": "je null",
      "present": "je vyplněné",
      "start": "začíná s",
      "start_all": "začíná se všemi",
      "start_any": "začíná s kteroukoliv",
      "true": "je pravdivé"
    },
    "search": "vyhledávání",
    "sort": "řazení",
    "value": "hodnota"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Je nám líto, ale nemohli jsme najít místo s názvem \"%{query}\".",
        "hint": {
          "example": "<strong>Příklad:</strong> London, United Kingdom",
          "info": "Naše vyhledávaní pracuje pouze s názvem nebo adresou místa. Proto prosím hledejte pouze podle názvu nebo adresy. Vyhledávaní podle typu místa, napr. restaurace nebo kino, nebude fungovat!",
          "work_in_progress": "Snažíme se aby bulo vyhledávaní v budoucnosti ještě jednodušší a intuitivnější."
        },
        "try_this": {
          "address": "Prosím zadejte více informací o adrese.",
          "intro": "Zkuste tohle:",
          "spell_check": "Zkontrolujte zadaný text."
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} výsledků:",
          "one": "%{count} výsledek:",
          "other": "%{count} výsledků:"
        }
      },
      "search": {
        "for": "Vyhledávání \"%{q}\"",
        "not_found": "Nepovedlo se najít žádná místa!"
      }
    },
    "timeout": {
      "headline": "Omlouváme se, něco se pokazilo",
      "info": "Vyhledávání bylo dočasně nedostupné.",
      "repeat_search": "Hledat znovu"
    }
  },
  "splash": {
    "countline": "%{count} míst, které již byly označeny.",
    "headline": "Každý může přidat bezbariérová ​​místa!",
    "start": "Start",
    "step1": "Klikněte na místo, které znáte",
    "step2": "Označte to a dejte uložit",
    "step3": "To je ono! Žádná registrace není nutná",
    "what_is_wheelmap": "Co je to Wheelmap?"
  },
  "statistics": "Statistiky",
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
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%A %d. %B %Y %H:%M",
      "short": "%d. %m. %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Bez bezbariérového přístupu na WC",
    "unknown": "Neznámý stav toalet.",
    "what_is": {
      "no": "Vnitřní šířka dveřních otvorů je min. 90 cm, volný prostor min. 150 x 150 cm, bezbariérová výška WC sedátka, skládací úchyt zábradlí a přístupné umyvadlo.",
      "unknown": "Pomozte s označením stavu WC!",
      "yes": "Vnitřní šířka dveřních otvorů je min. 90 cm, volný prostor min. 150 x 150 cm, bezbariérová výška WC sedátka, skládací úchyt zábradlí a přístupné umyvadlo."
    },
    "yes": "Bezbariérový přístup na WC"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Váš účet je nyní aktivován!"
      },
      "error": {
        "notice": "E-mail a heslo se neshodují."
      },
      "notice": "Úspěch!"
    },
    "destroy": {
      "notice": "Nashledanou, vraťe se brzy!"
    },
    "new": {
      "email": "Emailová adresa",
      "login": "Přihlásit se",
      "login_with_twitter": "Přihlašte se přes Twitter",
      "password": "Heslo",
      "remember_me": "Zůstat přihlášen"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Už je to skoro hotové! Ještě dokončit účet na Wheelmap:",
        "set_password_for_mobile": "Úspěšně jste se zaregistroval/a na OpenStreetMap. Prosím vyberte emailovou adresu, abych vás mohli informovat o vašich aktivitách (např. počet míst, které jste označil/a). Nastavení je dostupné v položce \"Profil\".",
        "text": "Jak vás můžeme kontaktovat? Tyto informace můžete později změnit ve vašem profilu."
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
          "user_data": "Informace o vašem účtu"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Ano, posílejte mi novinky o Wheelmap.",
        "text": "Zůstaňte informovaní o novinkách na Wheelmap. Nebojte se, nebudeme vás spamovat. Uslyšíte o nás jednou za měsíc.",
        "title": "Novinky"
      },
      "photos": {
        "empty": "Zatím jste nenahráli žádné fotografie.",
        "title": "Fotky"
      },
      "show": {
        "greeting": {
          "anonymously": "Vítejte",
          "personalized": "Vítejte, %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "few": "nahrál/a %{count} fotky",
            "one": "nahrál/a %{count} fotku",
            "other": "nahrál/a %{count} fotek"
          },
          "pois_added": {
            "few": "přidal %{count} místa",
            "one": "přidal %{count} místo",
            "other": "přidal %{count} míst"
          },
          "pois_edited": {
            "few": "Upravit %{count} míst",
            "one": "Upravená %{count} místa",
            "other": "Upravená %{count} místa"
          },
          "pois_marked": {
            "few": "označil/a %{count} místa",
            "one": "označil/a %{count} místo",
            "other": "označil/a %{count} míst"
          },
          "text": "Už jste"
        },
        "text_html": "Ahoj,<br>\nVítejte (zpět) na Wheelmap.org! Jsme rádi, že se opět shledáváme! Můžete prohlížet váš <a href=\"http://news.wheelmap.org/en/\">Blog</a>nebo<a href=\"http://news.wheelmap.org/en/FAQ/\">Často kladené otázky</a>, pokud chcete Wheelmap.org poznat trochu více. Nebo se můžete dozvědět více o <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projektech</a>, které nabízíme na Wheelmap.org a jak se do nich můžete zapojit.<br>Abyste zůstali v kontaktu, tak můžete odebírat naše měsíční novinky a sledovat nás na <a href=\"https://www.facebook.com/wheelmap\">Facebooku</a> a <a href=\"https://twitter.com/wheelmap\">Twitteru</a>. Těšíme se na váš názor a na začátek společného rozhovoru!<br>\nA nyní přejeme veselé mapování!<br>\nVáš Wheelmap team",
        "title": "Přehled"
      },
      "widget": {
        "categories": "Zobrazit filtr kategorií",
        "center": "Oblast mapy",
        "empty_center": "Hledat střed mapy ...",
        "empty_provider": "Vyberte poskytovatele",
        "height": "Výška",
        "legends": {
          "embed": "Vložený kód ",
          "embed_explanation": "Můžete změnit specifikace pro zeměpisnou šířku (<code>lat</code>), zeměpisnou délku (<code>lon</code>) a úroveň přiblížení (<code>zoom</code>) manuálně v kódu, čímž se upraví segment mapy (widget) podle místa, které chcete zobrazit.",
          "general": "Vytvořte si vlastní Wheelmap widget a vložte jej na vaši internetovou stránku nebo blog.",
          "preview": "Náhled",
          "settings": "Nastavení"
        },
        "providers": "Poskytovatel",
        "title": "Widget",
        "width": "Šířka"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; První",
      "last": "Poslední &raquo;",
      "next": "Další &rsaquo;",
      "previous": "&lsaquo; Předchozí",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Částečně bezbariérový přístup",
    "no": "Není bezbariérový",
    "unknown": "Status neznámý",
    "yes": "Přístupné pro vozíčkáře"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Projekt od",
      "based_on": "Založeno na",
      "become_a_supporter": "Staňte se příznivcem",
      "main_supporter": "Hlavní zastánce"
    },
    "itunes": {
      "alt": "Logo AppStore",
      "title": "Stáhněte si aplikaci pro iPhone!"
    },
    "logo": {
      "alt": "Wheelmap Logo - najít bezbariérová ​​místa",
      "title": "Wheelmap - najít bezbariérová ​​místa"
    },
    "what_is": {
      "fully_accessible": "Vstup bez schodů, všechny místnosti bez schodů.",
      "limited_accessible": "Vstup má jeden schod s max. výškou 7 cm (3 palce), většina místností je bez schodů.",
      "not_accessible": "Vstup má jeden schod nebo několik schodů, místnosti nejsou přístupné.",
      "unknown_accessible": "Pomozte zaznamenat místa!"
    }
  },
  "will_paginate": {
    "next_label": "Další &#8594;",
    "page_entries_info": {
      "multi_page": "Zobrazuju %{model} %{from} - %{to} z celkového počtu %{count}",
      "multi_page_html": "Zobrazuji %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> z celkového počtu <b>%{count}</b>",
      "single_page": {
        "one": "Zobrazuji 1 %{model}",
        "other": "Zobrazuji všech %{count} %{model}",
        "zero": "%{model} nenalezeno"
      },
      "single_page_html": {
        "one": "Zobrazuji <b>1</b> %{model}",
        "other": "Zobrazuji <b>všech&nbsp;%{count}</b> %{model}",
        "zero": "%{model} nenalezeno"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Předchozí"
  }
});
