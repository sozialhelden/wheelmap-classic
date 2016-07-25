I18n.translations || (I18n.translations = {});
I18n.translations["hu"] = I18n.extend((I18n.translations["hu"] || {}), {
  "actions": {
    "cancel": "Mégsem",
    "next": "Tovább",
    "save": "Mentés",
    "send": "Küldés"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Összes",
    "batch_actions": {
      "action_label": "%{title} kiválasztva",
      "button_label": "Tömeges műveletek",
      "default_confirmation": "Biztos vagy benne, hogy a ön akar-hoz csinál ez?",
      "delete_confirmation": "Biztosan törli ezeket a %{plural_model}?",
      "labels": {
        "destroy": "Törlés"
      },
      "link": "Létrehozás",
      "selection_toggle_explanation": "(Kijelölés megfordítása)",
      "succesfully_destroyed": {
        "one": "1 %{model} sikeresen törölve",
        "other": "%{count} %{plural_model} sikeresen törölve"
      }
    },
    "blank_slate": {
      "content": "Még nincs létrehozva %{resource_name}.",
      "link": "Létrehozás most"
    },
    "cancel": "Mégsem",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Új hozzászólás",
      "author": "Szerző",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Törzs",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "A hozzászólás nem lett mentve, a törzs nem lehet üres."
      },
      "no_comments_yet": "Nincsenek hozzászólások.",
      "resource": "Erőforrás",
      "resource_type": "Resource Type",
      "title": "Hozzászólás",
      "title_content": "%{count} hozzászólás"
    },
    "create_model": "New %{model}",
    "dashboard": "Vezérlőpult",
    "dashboard_welcome": {
      "call_to_action": "Elemek hozzáadásához nézze meg a 'app/admin/dashboard.rb' fájlt",
      "welcome": "Üdvözöljük az Active Admin felületén. Ez a vezérlőpult kezdőlapja"
    },
    "delete": "Törlés",
    "delete_confirmation": "Biztosan törli ezt az elemet?",
    "delete_model": "%{model} törlése",
    "details": "%{model} részletei",
    "devise": {
      "change_password": {
        "submit": "Jelszó módosítása",
        "title": "A jelszó módosítása"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Elfelejtette a jelszavát?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Bejelentkezés",
        "sign_in_with_omniauth_provider": "Jelentkezzen be a %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Emlékezz rám",
        "submit": "Belépés",
        "title": "Bejelentkezés"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Megerősítő levél újraküldése",
        "title": "Megerősítő levél újraküldése"
      },
      "reset_password": {
        "submit": "Visszaállítása a jelszót",
        "title": "Elfelejtette a jelszavát?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Újraküldés unlock utasítások",
        "title": "Újraküldés unlock utasítások"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Letöltés:",
    "dropdown_actions": {
      "button_label": "Műveletek"
    },
    "edit": "Szerkesztés",
    "edit_model": "%{model} módosítása",
    "empty": "Üres",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Feltételek törlése",
        "filter": "Szűrés"
      },
      "predicates": {
        "contains": "Tartalmazza",
        "ends_with": "végződik",
        "equals": "Pontosan",
        "greater_than": "Nagyobb, mint",
        "less_than": "Kisebb, mint",
        "starts_with": "kezdődik"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Törlés",
    "has_many_new": "Új %{model} hozzáadása",
    "has_many_remove": "Eltávolít",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Kilépés",
    "main_content": "Kérem, implementálja a %{model}#main_content metódust a tartalom megjelenítéséhez.",
    "new_model": "Új %{model}",
    "next": "Következő",
    "pagination": {
      "empty": "Nincs több %{model}",
      "entry": {
        "one": "elem",
        "other": "elem"
      },
      "multiple": "%{model} listájának megjelenítése, <b>%{from}&nbsp;-&nbsp;%{to}</b>/<b>%{total}</b> ",
      "multiple_without_total": "%{model} listájának megjelenítése, <b>%{from}&nbsp;-&nbsp;%{to}</b> ",
      "one": "<b>Egy</b> %{model} megjelenítése",
      "one_page": "<b>Az összes (%{n} db)</b> %{model} megjelenítése"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Előző",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Szűrők",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nem",
      "yes": "Igen"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Megtekintés"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Cím",
        "address_city": "Város",
        "address_housenumber": "Házszám",
        "address_postcode": "Irányítószám",
        "address_street": "Utca",
        "name": "Név",
        "note": "Megjegyzés",
        "phone": "Telefon",
        "type": "Típus",
        "website": "Honlap"
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
      "notice": "Már be vagy jelentkezve..."
    },
    "require_user": {
      "notice": "Be kell jelentkezned, hogy láthasd az oldal tartalmát."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Új hely hozzáadása",
      "edit": "Hely módosítása"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "bezár",
    "skip": "kihagy"
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
      "confirmed": "Az email-címedet sikeresen megerősítetted.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Néhány percen belül kapsz egy emailt, benne egy linkkel, mellyel megerősítheted a címed.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Biztos vagy benne?",
      "headline": "Delete account",
      "link": "Törlés most"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Jelenlegi jelszó <i>(a változtatások megerősítéhez szükséges)</i>",
          "email": "Email",
          "password": "Jelszó <i>(hagyd üresen, ha nem akarod megváltoztatni)</i>",
          "password_confirmation": "Új jelszó megerősítése"
        },
        "submit": "Változtatások mentése"
      },
      "headline": "Fiók szerkesztése"
    },
    "failure": {
      "already_authenticated": "Már be vagy jelentkezve.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Helytelen email vagy jelszó.",
      "invalid_token": "Érvénytelen azonosítási token",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "A fiókod zárolva van",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "A folytatáshoz jelentkezz be vagy regisztrálj",
      "unconfirmed": "A folytatáshoz meg kell erősítened a regisztrációdat."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Egy utolsó lépés a fiókod aktiválásához"
      },
      "reset_password_instructions": {
        "subject": "Jelszó-visszaállítási útmutató"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Kötelező",
    "omniauth_callbacks": {
      "failure": "Sikertelen azonosítás ezzel: %{kind}.  Hiba: \"%{reason}\". ",
      "permission_missing": "You did not grant the required permission.",
      "success": "Sikeres bejelentkezés ezzel: %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Jelszó helyreállítása"
      },
      "headline": "Elfelejtett jelszó?"
    },
    "password_reset": {
      "email": {
        "comment": "Ha nem kérted a jelszavad helyreállítását, hagyd figyelmen kívül ezt az emailt.<br/>A jelszavad nem lesz megváltoztatva, csak akkor, ha megnyitod a fenti linket és beállítasz egy új jelszót.",
        "headline": "Üdv, %{email}",
        "link": "Jelszavam megváltoztatása",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Új jelszó",
          "password_confirmation": "Új jelszó megerősítése"
        },
        "submit": "Jelszó helyreállítása"
      },
      "headline": "Jelszó helyreállítása"
    },
    "passwords": {
      "link": "Elfelejtett jelszó?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "A jelszavadat sikeresen megváltoztattuk, be is vagy jelentkezve",
      "updated_not_active": "A jelszavadat sikeresen megváltoztattuk"
    },
    "registrations": {
      "destroyed": "Viszlát! A fiókodat töröltük. Reméljük, hamarosan újra látunk.",
      "inactive_signed_up": "Sikeresen regisztráltál, de nem sikerült a bejelentkezés. Oka: \"%{reason}\"",
      "link": "Regisztráció",
      "reasons": {
        "inactive": "inaktív",
        "locked": "zárolt",
        "unconfirmed": "megerősítetlen"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Sikeresen frissítetted a fiókodat."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Helytelen email vagy jelszó.",
      "invalid_token": "Érvényletelen azonosítási token",
      "link": "Bejelentkezés",
      "locked": "A fiókod zárolva van",
      "new": {
        "no_osm_account": "Nincs OpenStreetMap fiókod?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Köszönjük szépen a támogatásodat!",
        "sign_in_with": "Belépés ezzel: %{kind} ",
        "sign_up_with_osm": "Regisztrálj most.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Sikeres bejelentkezés",
      "signed_out": "Sikeresen kijelentkeztél",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "A folytatáshoz jelentkezz be vagy regisztrálj",
      "unconfirmed": "Meg kell erősítened a regisztrációd, mielőtt továbbléphetsz"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Jelszó",
          "remember_me": "Maradj bejelentkezve?"
        },
        "submit": "Bejelentkezés"
      },
      "headline": "Bejelentkezés"
    },
    "sign_out": {
      "headline": "Kijelentkezés"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Erősítsd meg a regisztrációdat",
        "please_confirm": "Regisztrációdat az alábbi linken erősítheted meg:",
        "welcome": "Üdv, %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Jelszó",
          "password_confirmation": "Jelszó megerősítése",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Regisztráció"
      },
      "headline": "Regisztráció"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Sikeresen feloldottad a fiókod zárolását. Be vagy jelentkezve."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "már megerősítésre került",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nem egyezik meg a visszaigazolással",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "pontosan ennyi legyen: %{count}",
      "even": "must be an even number",
      "exclusion": "foglalt",
      "expired": "lejárt, kérjük kérj egy újat",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "nagyobb kell legyen, mint %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "érvénytelen érték",
      "invalid": "érvénytelen",
      "less_than": "kisebb kell legyen, mint %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nem egy szám",
      "not_an_integer": "egész szám kell legyen",
      "not_found": "nem található",
      "not_locked": "nem volt lezárva",
      "not_saved": {
        "one": "Egy hiba megakadályozza %{resource} mentését:",
        "other": "%{count} hiba akadályozza %{resource} mentését:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "már foglalt",
      "too_long": "túl hosszú (ne legyen több, mint %{count} karakter)",
      "too_short": "túl rövid (ne legyen kevesebb, mint %{count} karakter)",
      "wrong_length": "hiba a hosszúsággal (%{count} karakter kéne legyen)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Érvénytelen a weboldal címe."
        }
      }
    },
    "template": {
      "body": "Problémák adódtak a következő mezőkkel:",
      "header": {
        "one": "Egy hiba megakadályozza %{model} mentését",
        "other": "%{count} a hiba megakadályozza %{model} mentését"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Bármikor megváltoztathatod egy hely besorolását. Csak válaszd ki a megfelelő színjelzést és kattints a \"Mentés\" gombra - Kész is!",
      "1": "Bejelentkezett felhasználóként egy hely bármelyik adatát megadhatod vagy kijavíthatod. Kattints a \"Szerkesztés\" gombra és javítsd vagy pótold az adatokat a szövegmezőben.",
      "2": "További adatokat (pl. \"Ez a hely mobil rámpával rendelkezik\") a hozzászólásként tudsz hozzáadni. Kattints a \"Szerkesztés\", majd az \"Új hozzászólás\" gombokra."
    },
    "headline": "Probléma van ezzel a hellyel?",
    "questions": {
      "0": "Rossz besorolás.",
      "1": "A hely adatai helytelenek vagy hiányoznak.",
      "2": "Több információval rendelkezem erről a helyről."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} sikeresen létrejött"
      },
      "destroy": {
        "alert": "%{resource_name} nem eltávolítható",
        "notice": "%{resource_name} sikeresen törölve lett"
      },
      "update": {
        "notice": "%{resource_name} sikeresen frissítve lett"
      }
    },
    "photos": {
      "destroy": {
        "notice": "A kép sikeresen törölve lett"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "akadálymentes",
    "show_limited_accessible_places": "Részben akadálymentesített",
    "show_places_without_status": "Ismeretlen állapot",
    "show_unaccessible_places": "Kerekesszékkel nem akadálymentes"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Mozgasd a jelölőt a térképen és helyes pozicióra",
      "osm_username": "Még nem vagy tag? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Készítsd el OpenStreetMap fiókod most</a>",
      "password": "(hagyd üresen a mezőt, ha nem akarod megváltoztatni)",
      "phone": "For example: +49 30 12345678",
      "website": "Például: http://www.example.com"
    },
    "labels": {
      "category": "Kategória:",
      "centralkey": "Központi kulcs:",
      "city": "Település:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Kész",
      "housenumber": "Hsz.:",
      "lat": "Szélesség",
      "lon": "Hosszúság",
      "name": "Név:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Jelszó",
      "password_confirmation": "Jelszó megerősítése",
      "phone": "Telefon:",
      "postcode": "Irányítószám:",
      "privacy_policy": "Elfogadom az adatvédelmi nyilatkozat 1. és 2. paragrafusait..",
      "reset": "Újrakezd",
      "save": "Mentés",
      "street": "Utca:",
      "terms": "Elfogadom a felhasználói feltételeket.",
      "type": "Típus:",
      "website": "Webcím:",
      "wheelchair": "Kerekesszékkel akadálymentes?",
      "wheelchair_description": "Megjegyzés az akadálymentességről:",
      "wheelchair_toilet": "Kerekesszékkel is használható mosdó:"
    },
    "titles": {
      "basic": "Alapadat",
      "optional": "További információ <span class=\"addition\">(mindegyik mező opcionális)</span>"
    }
  },
  "global": {
    "form_validation_error": "Kérjük, nézd át az alábbi hibákat"
  },
  "header": {
    "meta": {
      "description": "",
      "homepage": "Kezdőlap",
      "keywords": "kerekesszék akadálymentes hely talál keres bejelölés",
      "search": "Keresés",
      "title": ""
    },
    "navigation": {
      "about_wheelmap": "A Wheelmapről",
      "blog": "Hírek",
      "choose_language": "Válassz nyelvet!",
      "contact": "Elérhetőség",
      "feedback": "Visszajelzés",
      "home": "Indítás",
      "how_to_add_a_place": "Hogyan adhatok hozzá egy új helyet?",
      "imprint": "Impresszum",
      "logged_in_as": "Bejelentkezve, mint",
      "login": "Bejelentkezés",
      "logout": "Kijelentkezés",
      "map": "Térkép",
      "newsletter": "Hírlevél",
      "press": "Sajtó",
      "profile": "Profil",
      "projects": "Projektek",
      "suggestions": "Javaslatok",
      "what_is_barrier_free": "Mit jelent a \"kerekesszékkel akadálymentes\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Új hely felvétele",
      "find": "Keres",
      "placeholder": "Hely keresése",
      "title_add_place": "Adj hozzá egy új helyet ezen a ponton most!"
    },
    "tagline": "Wheelmap embléma",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategóriák"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "%{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> megjelenítve (összesen <b>%{total}</b>)"
      },
      "one_page": {
        "display_entries": "<b>Mind a %{count}</b> %{entry_name} megjelenítve"
      }
    },
    "select": {
      "prompt": "Kérjük, válassz"
    },
    "submit": {
      "create": "%{model} létrehozása",
      "submit": "%{model} mentése",
      "update": "%{model} frissítése"
    }
  },
  "home": {
    "index": {
      "embed_link": "",
      "filter": {
        "category": "Válassz kategóriát",
        "deselect_all": "Minden kijelölés megszüntetése",
        "select_all": "Mindent kijelöl",
        "wheelchair": "Kerekesszékkel akadálymentes?"
      },
      "ie": {
        "action": {
          "ignore": "Mellőz",
          "upgrade": "Böngésző frissítése"
        },
        "warning": {
          "headline": "Elnézést kérünk!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Új hely hozzáadása"
        }
      },
      "overlay": {
        "button": "Rendben, mehet!",
        "categories": "Kategóriák szerinti szűrés",
        "filter": "Akadálymentesség szerinti szűrés",
        "headline": "Találd meg és jelöld be az akadálymentes helyeket a Wheelmap.org segítségével - Világszerte, ingyen. Ilyen egyszerű:",
        "lookup": "Keresés név vagy cím szerint",
        "secondary_headline": "Jelzőlámpáink színei jelzik a helyek akadálymentességét:"
      },
      "popup": {
        "form": {
          "limited": "Részben akadálymentesített",
          "no": "Kerekesszékkel nem akadálymentes",
          "save": "Frissítés",
          "unknown": "Ismeretlen állapot",
          "yes": "akadálymentes"
        },
        "help": "Kerekesszékkel akadálymentes? (Segítség)",
        "more": "több ..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "Hogyan?",
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
          "headline": "Minden ismeretlen státuszú %{type} itt: %{city} (%{count})"
        },
        "yes": {
          "headline": "Minden kerekesszékkel is akadálymentes %{type} itt: %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "A Sozialhelden.de projektje"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Válassz egy kategóriát"
    },
    "node": {
      "info_edit_position": "A hely a fenti módon fog megjelenni a Wheelmapen. Ha a jelölő nem a megfelelő ponton van, <a href=\"%{url}\">megváltoztathatod a helyzetét az OpenStreetMap-en.</a>",
      "mail": {
        "body": "(Kérünk, hogy csak angol vagy német nyelven írj.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Probléma a következővel: %{headline}"
      }
    },
    "node_type": {
      "prompt": "Válassz egy típust"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Webcím:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Hupsz, a beírt szöveg helytelen vagy nem teljes",
        "successfull": "Köszönjük, a változtatásodat sikeresen elmentettük és hamarosan online lesznek."
      }
    },
    "edit": {
      "header": {
        "title": "Hely modosítása: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Mégsem"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Sajnáljuk, sikertelen bejelentkezés",
      "not_available": "Sajnáljuk, az oldal átmenetileg nem elérhető.",
      "not_existent": "Sajnáljuk, ez a hely már nem elérhető.",
      "not_found": "Sajnáljuk, az oldal nem található.",
      "param_missing": "Kérjük, adj meg egy kifejezést"
    },
    "flash": {
      "authorize_wheelmap": "Az adatok módosításához szükséged van egy OpenStreetMap fiókra."
    },
    "new": {
      "form": {
        "legend": "A hely elhelyezkedése",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "Cím",
            "title": ""
          },
          "contact": {
            "name": "Elérhetőség",
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
        "title": "Új hely | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Mégsem"
      }
    },
    "node": {
      "link": {
        "claim": "Itt dolgozol?",
        "edit_node": "Hely szerkesztése",
        "report_bug": "Hiba jelentése"
      }
    },
    "node_data": {
      "address": "Cím:",
      "contact_details": "Elérhetőségek:"
    },
    "node_edit": {
      "details": "Részletek",
      "edit": "Szerkesztés"
    },
    "node_map": {
      "map": "Térkép:"
    },
    "node_note": {
      "comment": "Megjegyzés:"
    },
    "node_photos": {
      "add": "Hozzáad",
      "photos_of_this_place": "Fényképek a helyről:",
      "upload": "Feltöltés"
    },
    "node_similar": {
      "similar": "Hasonló helyek: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Kerekesszékkel is használható mosdó:",
      "premium": "%{name} szerint ez a hely",
      "wheelchair_accessibility": "Kerekesszékes akadálymentesség:"
    },
    "node_streetview": {
      "streetview": "Utcanézet:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Derítsd ki a Wheelmap.org-on, hogy ez a hely kerekesszékkel akadálymentes-e, vagy egészítsd ki további információkkal és képekkel.",
          "title": "%{name} a Wheelmap.org-on "
        },
        "title": "Hely: %{node} | wheelmap.org"
      },
      "link": {
        "back": "vissza",
        "large_map": "Nagyít",
        "listing": "Összes '%{type}' típusú hely itt: %{city}",
        "upload": "Kép feltöltése"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Hopsz, a beírt szöveg helytelen vagy nem teljes",
        "successfull": "Köszönjük, a változtatásodat sikeresen lementettük és hamarosan online lesznek. "
      }
    },
    "update_wheelchair": {
      "successfull": "A \"%{name}\" állapota erre változott: \"%{status}\" és hamarosan megjelenik az oldalon."
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
          "billion": "Milliárd",
          "million": "Millió",
          "quadrillion": "Kvadrillió",
          "thousand": "Ezer",
          "trillion": "Trillió",
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
            "other": "Byte"
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
  "or": "vagy",
  "place": {
    "one": "%{count} hely",
    "other": "%{count} hely"
  },
  "poi": {
    "category": {
      "accommodation": "Szállás",
      "education": "Oktatás",
      "food": "Étkezés",
      "government": "Állami hivatal",
      "health": "Egészségügy",
      "leisure": "Szabadidő",
      "misc": "Egyebek",
      "money_post": "",
      "public_transfer": "",
      "shopping": "Bevásárlás",
      "sport": "Sport",
      "tourism": "Turisztika",
      "unknown": "Ismeretlen"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Tengerparti szálloda",
        "bed_and_breakfast": "Szállás és reggeli",
        "camp_site": "Sátorozóhely",
        "caravan_site": "Lakókocsis kemping",
        "chalet": "Nyaraló",
        "dormitory": "Diákotthon",
        "guest_house": "Vendégház",
        "hostel": "Turistaszálló",
        "hotel": "Szálloda",
        "motel": "Motel"
      },
      "education": {
        "college": "Főiskola",
        "driving_school": "Autós iskola",
        "kindergarten": "Óvoda",
        "library": "Könyvtár",
        "museum": "Múzeum",
        "school": "Iskola",
        "university": "Egyetem"
      },
      "food": {
        "bar": "Bár",
        "biergarten": "Sörkert",
        "cafe": "Kávézó",
        "drinking_water": "Ivóvíz",
        "fast_food": "Gyorsétterem",
        "ice_cream": "Fagyizó",
        "pub": "Kocsma",
        "restaurant": "Étterem"
      },
      "government": {
        "courthouse": "Bíróság",
        "embassy": "Követség",
        "government": "Kormányhivatal",
        "police": "Rendőrség",
        "public_building": "Középület",
        "townhall": ""
      },
      "health": {
        "dentist": "Fogorvos",
        "doctors": "",
        "hearing_aids": "Hallókészülék kereskedő",
        "hospital": "Kórház",
        "medical_supply": "Orvosi eszközök",
        "pharmacy": "Gyógyszertár",
        "social_facility": "Szociális létesítmény",
        "veterinary": "Állatorvos"
      },
      "leisure": {
        "arena": "Aréna",
        "brothel": "Bordély",
        "casino": "Kaszinó",
        "cinema": "Mozi",
        "community_centre": "",
        "gallery": "Galléria",
        "nightclub": "Éjszakai bár",
        "playground": "Játszótér",
        "sauna": "Szauna",
        "stripclub": "Sztriptízbár",
        "theatre": "Színház",
        "zoo": "Állatkert"
      },
      "misc": {
        "company": "Cég (Iroda)",
        "estate_agent": "Ingatlanügynökség",
        "insurance": "Biztosító",
        "lawyer": "Ügyvéd",
        "place_of_worship": "Vallási hely",
        "toilets": "Toalett"
      },
      "money_post": {
        "atm": "Bankautomata",
        "bank": "Bank",
        "bureau_de_change": "Valutaváltó",
        "post_box": "Postaláda",
        "post_office": "Postahivatal"
      },
      "public_transfer": {
        "aerodrome": "Reptér",
        "bicycle_parking": "Bicikliparkoló",
        "bicycle_rental": "Biciklikölcsönző",
        "boatyard": "",
        "bus_station": "Buszállomás",
        "bus_stop": "Buszmegálló",
        "cable_car": "Nagykabinos drótkötélpálya",
        "car_rental": "Autókölcsönző",
        "car_sharing": "Közautó",
        "chair_lift": "Függőszékes drótkötélpálya",
        "ferry": "Komp",
        "ferry_terminal": "Kompkikötő",
        "fuel": "Benzinkút",
        "halt": "Vasúti megállóhely",
        "light_rail": "HÉV",
        "parking": "Parkoló",
        "parking_aisle": "Parkolóút",
        "platform": "Peron",
        "station": "Pályaudvar",
        "subway_entrance": "Metrólejáró",
        "terminal": "Reptéri terminál",
        "tram_stop": "Villamosmegálló"
      },
      "shopping": {
        "alcohol": "Állami italbolt",
        "bakery": "Pékség",
        "beauty": "Szépségszalon",
        "beverages": "Italbolt",
        "bicycle": "Biciklibolt",
        "books": "Könyvesbolt",
        "butcher": "Hentes",
        "car_repair": "Autószervíz",
        "car_shop": "Autóbolt",
        "chemist": "",
        "clothes": "Ruhabolt",
        "computer": "Számítógépbolt",
        "confectionery": "Édességbolt",
        "convenience": "Közért",
        "deli": "Csemegebolt",
        "department_store": "Áruház",
        "doityourself": "Barkácsbolt",
        "dry_cleaning": "Ruhatisztító",
        "electronics": "Elektronikai szaküzlet",
        "fabric": "Méteráru",
        "farm_shop": "Termelői bolt",
        "florist": "Virágüzlet",
        "furniture": "Bútorüzlet",
        "garden_centre": "",
        "gift": "Ajándékbolt",
        "hairdresser": "Fodrászat",
        "hardware": "Háztartási bolt",
        "jewelry": "Ékszerészet",
        "kiosk": "Trafik",
        "laundry": "Mosoda",
        "mall": "Bevásárló központ",
        "optician": "Optikus",
        "organic": "Biobolt",
        "outdoor": "Túrabolt",
        "pet": "Kisállatkereskedés",
        "photo": "Fényképész",
        "second_hand": "Túrkáló",
        "shoes": "Cipőbolt",
        "sports": "Sportáruház",
        "stationery": "Irodaszerek",
        "supermarket": "Szupermarket",
        "toys": "Játékbolt",
        "travel_agency": "Utazási iroda",
        "video": "Videokölcsönző"
      },
      "sport": {
        "pitch": "Sportpálya",
        "sports_centre": "Sportközpont",
        "stadium": "Stadion",
        "swimming": "Uszoda",
        "swimming_pool": "Úszómedence"
      },
      "tourism": {
        "archaeological_site": "Régészeti lelőhely",
        "arts_centre": "Művészeti központ",
        "artwork": "Műtárgyak",
        "attraction": "Látványosság",
        "battlefield": "Harcmező",
        "beach": "Strand",
        "beacon": "Világítótorony",
        "castle": "Kastély",
        "cave_entrance": "Barlangbejárat",
        "information": "Turisztikai információ",
        "memorial": "Emlékmű",
        "theme_park": "Vidámpark",
        "tower": "Torony",
        "viewpoint": "Kilátó"
      },
      "unknown": {
        "unknown": "Ismeretlen"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Állapot: csatlakozva",
          "grant": "Csatlakozz most",
          "not_connected": "Állapot: nincs csatlakozva",
          "revoke": "Szétkapcsol"
        }
      },
      "headline": "Profil szerkesztése"
    }
  },
  "ransack": {
    "all": "mindegyik",
    "and": "és",
    "any": "bármely",
    "asc": "növekvő",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "feltétel",
    "desc": "csökkenő",
    "or": "vagy",
    "predicate": "állítás",
    "predicates": {
      "blank": "üres",
      "cont": "tartalmazza",
      "cont_all": "mindet tartalmazza",
      "cont_any": "bármelyiket tartalmazza",
      "does_not_match": "nem egyezik",
      "does_not_match_all": "nem egyezik az összessel",
      "does_not_match_any": "nem egyezik semelyikkel",
      "end": "így végződik",
      "end_all": "ezekkel végződik",
      "end_any": "bármelyikkel végződik",
      "eq": "egyenlő",
      "eq_all": "minddel egyenlő",
      "eq_any": "bármelyikkel egyenlő",
      "false": "hamis",
      "gt": "nagyobb, mint",
      "gt_all": "mindegyiknél nagyobb",
      "gt_any": "bármelyiknél nagyobb",
      "gteq": "nagyobb vagy egyenlő, mint",
      "gteq_all": "mindegyiknél nagyobb vagy egyenlő",
      "gteq_any": "bármelyiknél nagyobb vagy egyenlő",
      "in": "értéke",
      "in_all": "értéke mindegyik",
      "in_any": "értéke bármelyik",
      "lt": "kisebb, mint",
      "lt_all": "mindegyiknél kisebb",
      "lt_any": "bármelyiknél kisebb",
      "lteq": "kisebb vagy egyenlő, mint",
      "lteq_all": "mindegyiknél kisebb vagy egyenlő",
      "lteq_any": "bármelyiknél kisebb vagy egyenlő",
      "matches": "egyezik",
      "matches_all": "minddel egyezik",
      "matches_any": "bármelyikkel egyezik",
      "not_cont": "nem tartalmazza",
      "not_cont_all": "nem tartalmazza mindet",
      "not_cont_any": "egyiket sem tartalmazza",
      "not_end": "nem úgy végződik",
      "not_end_all": "nem ezekkel végződik",
      "not_end_any": "nem ezek egyikével végződik",
      "not_eq": "nem egyenlő",
      "not_eq_all": "nem egyenlő egyikkel sem",
      "not_eq_any": "nem egyenlő bármelyikkel",
      "not_in": "nem ez az értéke",
      "not_in_all": "értéke nem ezek az elemek",
      "not_in_any": "értéke egyik sem",
      "not_null": "nem null",
      "not_start": "nem így kezdődik",
      "not_start_all": "nem ezekkel kezdődik",
      "not_start_any": "nem ezek egyikével kezdődik",
      "null": "null",
      "present": "létezik",
      "start": "így kezdődik",
      "start_all": "ezekkel kezdődik",
      "start_any": "bármelyikkel kezdődik",
      "true": "igaz"
    },
    "search": "keresés",
    "sort": "rendezés",
    "value": "érték"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Sajnáljuk, de nem találtunk \"%{query}\" nevű helyet.",
        "hint": {
          "example": "<strong>Példa:</strong> Budapest, Magyarország",
          "info": "Keresőszolgáltatásunk csak név és/vagy cím alapján keres. Kérjük, a keresésnél ezért a hely pontos nevét vagy címét (pl. utcanév és/vagy város) adja meg. A kereső nem ad találatot olyan általános megnevezésekre, mint pl. étterem vagy mozi!",
          "work_in_progress": "Keményen dolgozunk, hogy a keresést könnyebben és ösztönösebben használhatóvá tegyük a jövőben."
        },
        "try_this": {
          "address": "Kérjük, pontosítsd <strong>a címet</strong>.",
          "intro": "Próbáld így:",
          "spell_check": "Ellenőrizd <strong>a helyesírási hibákat</strong> a beírt szövegben."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} eredmény:",
          "other": "%{count} eredmény:"
        }
      },
      "search": {
        "for": "\"%{q}\" keresése",
        "not_found": "Nem találhatóak helyek!"
      }
    },
    "timeout": {
      "headline": "",
      "info": "A keresési funkciónk átmenetileg nem volt elérhető.",
      "repeat_search": "Próbáld újra"
    }
  },
  "splash": {
    "countline": "%{count} hely már be van jelölve.",
    "headline": "Bárki tud kerekesszékkel is akadálymentes helyeket hozzáadni!",
    "start": "Indítás",
    "step1": "Kattints egy helyre, amit ismersz",
    "step2": "Jelöld be és kattints a mentésre",
    "step3": "Ennyi! Nincs szükség regisztrációra",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statisztika",
  "support": {
    "array": {
      "last_word_connector": "és",
      "sentence_connector": "és",
      "two_words_connector": "és",
      "words_connector": ","
    },
    "select": {
      "prompt": "Kérjük, válassz"
    }
  },
  "time": {
    "am": "de",
    "formats": {
      "default": "%Y %b %d %a %H:%M:%S %z",
      "long": "%Y %B %d %H:%M",
      "short": "%b %d %H:%M"
    },
    "pm": "du"
  },
  "toiletstatus": {
    "no": "Nincs akadálymentesített mosdó",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Akadálymentesített mosdó"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "A felhasználód mostantól aktív!"
      },
      "error": {
        "notice": "Az e-mail cím és jelszó nem egyezik."
      },
      "notice": "Bent vagy!"
    },
    "destroy": {
      "notice": "Viszlát! Várunk vissza!"
    },
    "new": {
      "email": "Email address",
      "login": "Bejelentkezés",
      "login_with_twitter": "Bejelentkezés Twitterrel",
      "password": "Jelszó",
      "remember_me": "Maradjak bejelentkezve"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Hogyan maradhatunk kapcsolatban veled? Ezt az információt késöbb is megváltoztathatod a profilodban."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Felöltött képeid"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": ""
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "",
        "text": "",
        "title": "Hírlevél"
      },
      "photos": {
        "empty": "",
        "title": "Fotók"
      },
      "show": {
        "greeting": {
          "anonymously": "",
          "personalized": ""
        },
        "overview": {
          "photos_uploaded": {
            "one": "",
            "other": ""
          },
          "pois_added": {
            "one": "",
            "other": ""
          },
          "pois_edited": {
            "one": "",
            "other": ""
          },
          "pois_marked": {
            "one": "",
            "other": ""
          },
          "text": ""
        },
        "text_html": "",
        "title": ""
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
          "settings": "Beállítások"
        },
        "providers": "",
        "title": "",
        "width": ""
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Következő &rsaquo;",
      "previous": "&lsaquo; Előző",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Részben akadálymentesített",
    "no": "Kerekesszékkel nem akadálymentes",
    "unknown": "Ismeretlen állapot",
    "yes": "akadálymentes"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Megálmodta a",
      "based_on": "Alapok: ",
      "become_a_supporter": "Legyél támogató ",
      "main_supporter": "Fő támogatónk"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Töltsd le az iPhone alkalmazást most!"
    },
    "logo": {
      "alt": "Wheelmap logo - keress kerekesszékkel is akadálymentes helyeket",
      "title": "Wheelmap - keress kerekesszékkel is akadálymentes helyeket"
    },
    "what_is": {
      "fully_accessible": "Lépcső nélküli bejárat, minden szoba lépcső nélküli.",
      "limited_accessible": "A bejáratnak van egy max. 7 cm magasságú (3 hüv.) lépcsője, a legtöbb szoba lépcső nélküli.",
      "not_accessible": "A bejáratnak van egy lépcsője vagy több lépcsője, a szobák nem hozzáférhetőek.",
      "unknown_accessible": "Segíts te is a helyek bejelölésével!"
    }
  },
  "will_paginate": {
    "next_label": "Következő &#8594;",
    "page_entries_info": {
      "multi_page": "%{model} %{from} - %{to} megjelenítve (összesen %{count})",
      "multi_page_html": "%{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> megjelenítve (összesen <b>%{count}</b>)",
      "single_page": {
        "one": "1 %{model} megjelenítve",
        "other": "Mind a %{count} %{model} mejelenítve",
        "zero": "Nincs találat erre: %{model}"
      },
      "single_page_html": {
        "one": "<b>1</b> %{model} megjelenítve",
        "other": "<b>Mind&nbsp;a&nbsp;%{count}</b> %{model} megjelenítve",
        "zero": "Nincs találat erre: %{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Előző"
  }
});
