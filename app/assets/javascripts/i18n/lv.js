I18n.translations || (I18n.translations = {});
I18n.translations["lv"] = I18n.extend((I18n.translations["lv"] || {}), {
  "actions": {
    "cancel": "",
    "next": "",
    "save": "Saglabāt",
    "send": ""
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Jebkurš",
    "batch_actions": {
      "action_label": "%{title} Selected",
      "button_label": "Batch Actions",
      "default_confirmation": "Vai tiešām vēlaties to darīt?",
      "delete_confirmation": "Vai tiešām vēlaties dzēst šos %{plural_model}?",
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
      "content": "Sadaļā '%{resource_name}' nav neviena ieraksta.",
      "link": "Izveidot jaunu"
    },
    "cancel": "Atcelt",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Pievienot komentāru",
      "author": "Autors",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Saturs",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Komentārs netika saglabāts - nekas nav ierakstīts"
      },
      "no_comments_yet": "Nav neviena komentāra.",
      "resource": "Resurss",
      "resource_type": "Resource Type",
      "title": "Komentārs",
      "title_content": "Komentāri (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Panelis",
    "dashboard_welcome": {
      "call_to_action": "Izmantojiet 'app/admin/dashboard.rb', lai pievienotu sadaļas panelim.",
      "welcome": "Laipni lūgti Active Admin."
    },
    "delete": "Dzēst",
    "delete_confirmation": "Vai Tu tiešām vēlies dzēst?",
    "delete_model": "Dzēst '%{model}' ierakstu",
    "details": "Apraksts",
    "devise": {
      "change_password": {
        "submit": "Nomainīt savu paroli",
        "title": "Nomainīt paroli"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Aizmirsāt savu paroli?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "pierakstīties",
        "sign_in_with_omniauth_provider": "Pierakstieties ar %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "atcerēties mani",
        "submit": "Ielogojaties",
        "title": "Ielogojaties"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Atjaunotu savu paroli",
        "title": "Aizmirsāt savu paroli?"
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
    "download": "Lejuplādēt:",
    "dropdown_actions": {
      "button_label": "Actions"
    },
    "edit": "Labot",
    "edit_model": "Labot '%{model}' ierakstu",
    "empty": "Tukšs",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Novākt filtrus",
        "filter": "Filtrēt"
      },
      "predicates": {
        "contains": "Satur",
        "ends_with": "Beidzas ar",
        "equals": "Vienāds ar",
        "greater_than": "Lielāks par",
        "less_than": "Mazāks par",
        "starts_with": "Sākas ar"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Dzēst",
    "has_many_new": "Pievienot jaunu '%{model}' ierakstu",
    "has_many_remove": "Noņemt",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Iziet",
    "main_content": "Lūdzu implementēt %{model}#main_content, lai rādītos saturs.",
    "new_model": "Pievienot '%{model}' ierakstu",
    "next": "Nākošā",
    "pagination": {
      "empty": "Nav ierakstu",
      "entry": {
        "one": "ieraksts",
        "other": "ieraksti"
      },
      "multiple": "<b>%{from}&nbsp;-&nbsp;%{to}</b> ieraksti no <b>%{total}</b> kopā",
      "multiple_without_total": "<b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "<b>1</b> ieraksts",
      "one_page": "<b>%{n}</b> ieraksti"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Iepriekšējā",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtri",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nē",
      "yes": "Jā"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Apskatīt"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "",
        "address_city": "",
        "address_housenumber": "",
        "address_postcode": "",
        "address_street": "",
        "name": "",
        "note": "",
        "phone": "",
        "type": "",
        "website": ""
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
        "accepted": "Jāapstiprina",
        "blank": "nevar palikt neaizpildīts",
        "confirmation": "neatbilst apstiprinājumam",
        "empty": "nevar būt tukšs",
        "equal_to": "jābūt vienādam ar %{count}",
        "even": "jābūt pāra skaitlim",
        "exclusion": "ir rezervēts",
        "greater_than": "ir jābūt lielākam par  %{count}",
        "greater_than_or_equal_to": "Ir jābūt lielākam vai vienādam ar  %{count}",
        "inclusion": "nav iekļauts sarakstā",
        "invalid": "nederīgs",
        "less_than": "vēŗtībai jābūt mazākai par %{count}",
        "less_than_or_equal_to": "Ir jābūt mazākam vai vienādam ar %{count}",
        "not_a_number": "nav skaitlis",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "jābūt nepāra vērtībai",
        "record_invalid": "Apstiprināšana neizdevās: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "jau ir aizņemts",
        "too_long": "Ir par garu (maksimums %{count} zīmes)",
        "too_short": "ir par īsu (minimums ir %{count} zīmes)",
        "wrong_length": "garums ir nepareizs (jābūt %{count} zīmēm)"
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
          "email": "E-pasta adrese",
          "password": "Parole",
          "remember_me": "Palikt piereģistrētam"
        }
      },
      "template": {
        "body": "Radās sarežģījumi ar sekojošiem laukiem:",
        "header": {
          "one": "1 kļūda neļāva saglabāt %{model}",
          "other": "%{count} kļūdas liedza saglabāt %{model}"
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
      "notice": "Jūs jau esat pierakstījies..."
    },
    "require_user": {
      "notice": "Jums ir jāpierakstās lai redzētu šo lapu."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Labot vietu"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "aizvērt",
    "skip": "izlaist"
  },
  "date": {
    "abbr_day_names": [
      "Sv.",
      "P.",
      "O.",
      "T.",
      "C.",
      "Pk.",
      "S."
    ],
    "abbr_month_names": [
      null,
      "Janv",
      "Febr",
      "Marts",
      "Apr",
      "Maijs",
      "Jūn",
      "Jūl",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "svētdiena",
      "pirmdiena",
      "otrdiena",
      "trešdiena",
      "ceturtdiena",
      "piektdiena",
      "sestdiena"
    ],
    "formats": {
      "default": "%d.%m.%Y.",
      "long": "%Y. gada %e. %B",
      "short": "%e. %B"
    },
    "month_names": [
      null,
      "janvārī",
      "februārī",
      "martā",
      "aprīlī",
      "maijā",
      "jūnijā",
      "jūlijā",
      "augustā",
      "septembrī",
      "oktobrī",
      "novembrī",
      "decembrī"
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
        "one": "apmēram 1 stunda",
        "other": "apmēram %{count} stundas"
      },
      "about_x_months": {
        "one": "apmēram 1 mēnesis",
        "other": "apmēram %{count} mēneši"
      },
      "about_x_years": {
        "one": "apmēram 1 gads",
        "other": "apmēram %{count} gadi"
      },
      "almost_x_years": {
        "one": "gandrīz 1 gads",
        "other": "gandrīz %{count} gadi"
      },
      "half_a_minute": "pusminūte",
      "less_than_x_minutes": {
        "one": "mazāk par vienu minūti",
        "other": "mazāk par %{count} minūtēm"
      },
      "less_than_x_seconds": {
        "one": "mazāk par vienu sekundi",
        "other": "mazāk par %{count} sekundēm"
      },
      "over_x_years": {
        "one": "vairāk kā gads",
        "other": "vairāk kā %{count} gadi"
      },
      "x_days": {
        "one": "1 diena",
        "other": "%{count} dienas"
      },
      "x_minutes": {
        "one": "1 minūte",
        "other": "%{count} minūtes"
      },
      "x_months": {
        "one": "1 mēnesis",
        "other": "%{count} mēneši"
      },
      "x_seconds": {
        "one": "1 sekunde",
        "other": "%{count} sekundes"
      }
    },
    "prompts": {
      "day": "diena",
      "hour": "stunda",
      "minute": "minūte",
      "month": "mēnesis",
      "second": "sekunde",
      "year": "gads"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Jūsu konts tika veiksmīgi apstiprināts. Jūs esat pierakstījies.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Pēc dažām minūtēm Jūs saņemsiet e-pastu ar instrukcijām, kā apstiprināt savu kontu.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Vai esat pārliecināts?",
      "headline": "Delete account",
      "link": "Izdzēst tūlīt"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Parole <i>(nepieciešama lai apstiprinātu veiktās izmaiņas)</i>",
          "email": "E-pasts",
          "password": "Parole <i>(atstājiet tukšu, ja nevēlaties to mainīt)</i>",
          "password_confirmation": "Atkārtojiet paroli"
        },
        "submit": "Saglabāt izmaiņas"
      },
      "headline": "Izmainīt kontu"
    },
    "failure": {
      "already_authenticated": "Jūs esat jau pierakstījies",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Nederīgs e-pasts vai parole",
      "invalid_token": "Nederīgs autorizācijas apliecinājums",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Jūsu konts ir bloķēts",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Lai turpinātu, jums ir jāpierakstās vai jāizveido konts",
      "unconfirmed": "Pirms turpiniet, jums ir jāapstiprina savs konts"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Vēl viens solis, lai aktivizētu jūsu kontu"
      },
      "reset_password_instructions": {
        "subject": "Paroles atjaunošanas instrukcijas"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* obligāts",
    "omniauth_callbacks": {
      "failure": "Autorizācija ar %{kind} neizdevās. Kļūda: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Veiksmīgi pierakstījies ar %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-pasts"
        },
        "submit": "Atjaunot paroli"
      },
      "headline": "Aizmirsāt paroli?"
    },
    "password_reset": {
      "email": {
        "comment": "Ja Jūs nepieprasījāt paroles maiņu, vienkārši ignorējiet šo e-pastu.<br/>Jūsu parole tiks nomainīta tikai tad, ja uzklikšķināsiet uz augstākminētās saites un norādīsiet jauno paroli",
        "headline": "Laipni lūdzam, %{email}!",
        "link": "Nomainīt manu paroli",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Jauna parole",
          "password_confirmation": "Atkārtojiet paroli"
        },
        "submit": "Atjaunot paroli:"
      },
      "headline": "Atjaunot paroli"
    },
    "passwords": {
      "link": "Aizmirsāt paroli?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Jūsu parole tika veiksmīgi nomainīta, tagad esat pierakstījies",
      "updated_not_active": "Jūsu parole ir veiksmīgi nomainīta"
    },
    "registrations": {
      "destroyed": "Uz redzēšanos! Jūsu konts tika veiksmīgi atcelts. Mēs ceram drīz atkal jūs redzēt.",
      "inactive_signed_up": "Jūs esat veiksmīgi piereģistrējies, bet pierakstīšanās neiedevās. Iemesls: \"%{reason}\"",
      "link": "Izveidot kontu",
      "reasons": {
        "inactive": "neaktīvs",
        "locked": "bloķēts",
        "unconfirmed": "neapstiprināts"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Jūsu konts ir veiksmīgi atjaunots."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Nederīgs e-pasts vai parole",
      "invalid_token": "Nederīga autorizācijas atslēga",
      "link": "Pierakstīties",
      "locked": "Jūsu konts ir bloķēts",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Pierakstīšanās izdevās",
      "signed_out": "Jūs esat veiksmīgi izrakstījies",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Lai turpinātu, jums ir jāpierakstās vai jāizveido konts",
      "unconfirmed": "Jums ir jāapstiprina savs konts pirms turpināt"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-pasts",
          "password": "Parole",
          "remember_me": "Palikt piereģistrētam?"
        },
        "submit": "Pierakstīties"
      },
      "headline": "Pierakstīties"
    },
    "sign_out": {
      "headline": "Izrakstīties"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Apstiprināt manu kontu",
        "please_confirm": "Jūs varat apstiprināt savu kontu izmantojot saiti zemāk:",
        "welcome": "Laipni lūdzam, %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-pasts",
          "password": "Parole",
          "password_confirmation": "Atkārtojiet paroli",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Izveidot kontu"
      },
      "headline": "Pierakstīties"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Jūsu konts tika veiksmīgi atbloķēts un esat veiksmīgi pierakstījies."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "jau ir apstiprināts",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "Neatbilst apstiprinājumam",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "Jābūt precīzi %{count}",
      "even": "must be an even number",
      "exclusion": "ir rezervēts",
      "expired": "Izbeidzies derīgums, lūdzu pieprasiet jaunu",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "jābūt lielākam par %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "nederīga vērtība",
      "invalid": "nav derīgs",
      "less_than": "jābūt mazāk nekā %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nav skaitlis",
      "not_an_integer": "jābūt veselam skaitlim",
      "not_found": "netika atrasts",
      "not_locked": "netika bloķēts",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "jau ir aizņemts",
      "too_long": "ir par garu (ne vairāk kā %{count} zīmes)",
      "too_short": "ir par īsu (ne mazāk kā %{count} zīmes)",
      "wrong_length": "garums ir nepareizs (jābūt %{count} zīmēm)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": ""
        }
      }
    },
    "template": {
      "body": "Ar sekojošiem laukiem radās problēmas:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "",
      "1": "",
      "2": ""
    },
    "headline": "",
    "questions": {
      "0": "",
      "1": "",
      "2": ""
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "Veiksmīgi tika izveidots %{resource_name} "
      },
      "destroy": {
        "alert": "%{resource_name} nevarēja izdzēst ",
        "notice": "%{resource_name} tika veiksmīgi izdzēsts"
      },
      "update": {
        "notice": "%{resource_name} tika veiksmīgi atjaunots"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Attēls tika veiksmīgi izdzēsts"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "pieejams ar ratiņkrēslu",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Not wheelchair accessible"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Pārvietojiet atzīmi uz pareizo vietu kartē ",
      "osm_username": "Neesi reģistrējies? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a>",
      "password": "(atstājiet tukšu, ja nevēlaties mainīt)",
      "phone": "For example: +49 30 12345678",
      "website": "Piemēram: http://www.piemers.com"
    },
    "labels": {
      "category": "Kategorija:",
      "centralkey": "Centrālā atslēga:",
      "city": "Pilsēta:",
      "create": "Create a place",
      "email": "E-pasts",
      "finish": "Beigas",
      "housenumber": "Nr.:",
      "lat": "garums",
      "lon": "garums",
      "name": "Vārds:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Parole",
      "password_confirmation": "Atkārtot paroli",
      "phone": "Tālrunis:",
      "postcode": "pasta indekss:",
      "privacy_policy": "Es piekrītu 1. un 2. privātuma vienošanās daļai.",
      "reset": "Reset",
      "save": "Saglabāt",
      "street": "Iela:",
      "terms": "Es piekrītu lietošanas noteikumiem",
      "type": "Veids:",
      "website": "Mājas lapa:",
      "wheelchair": "Pieejamība ar ratiņkrēslu?",
      "wheelchair_description": "Komentārs par pieejamību",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "Pamatdati",
      "optional": "Vairāk informācijas <span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "Lūdzu ņemiet vērā zemāk uzskaitītās kļūdas"
  },
  "header": {
    "meta": {
      "description": "",
      "homepage": "Mājas lapa",
      "keywords": "Ar ratiņkrēsliem pieejamas vietas meklēt atrast atzīmēt",
      "search": "Meklēt",
      "title": ""
    },
    "navigation": {
      "about_wheelmap": "",
      "blog": "Blogs",
      "choose_language": "",
      "contact": "",
      "feedback": "Atsauksmes",
      "home": "Sākt",
      "how_to_add_a_place": "Ka es varu pievienot vietas?",
      "imprint": "Par mums",
      "logged_in_as": "Pierakstījies kā: ",
      "login": "Pierakstīties",
      "logout": "Izrakstīties",
      "map": "",
      "newsletter": "Paziņojumi par jaunumiem",
      "press": "Presei",
      "profile": "Profils",
      "projects": "",
      "suggestions": "Ieteikumi",
      "what_is_barrier_free": "Ko \"pieejams ar ratiņkrēslu\" nozīmē?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Pievienot jaunu vietu",
      "find": "atrast",
      "placeholder": "piem., Sunset Boulevard L.A. or Brandenburg Gate Berlin",
      "title_add_place": "Pievieno jaunu vietu šajā pozīcijā!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": ""
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Parāda  %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> no <b>%{total}</b> kopumā"
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
      "prompt": "Lūdzu izvēlieties"
    },
    "submit": {
      "create": "izveidot %{model}",
      "submit": "saglabāt %{model}",
      "update": "atjaunot %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "",
      "filter": {
        "category": "Izvēlēties kategoriju:",
        "deselect_all": "Neizvēlēties visu",
        "select_all": "Izvēlēties visu",
        "wheelchair": "Pieejams ar ratiņkrēslu?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorēt",
          "upgrade": "Atjaunot pārlūku"
        },
        "warning": {
          "headline": "Atvainojiet!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "",
        "categories": "",
        "filter": "",
        "headline": "",
        "lookup": "",
        "secondary_headline": ""
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Not wheelchair accessible",
          "save": "Atjaunot",
          "unknown": "Unknown status",
          "yes": "pieejams ar ratiņkrēslu"
        },
        "help": "Pieejams ar ratiņkrēslu? (Palīdzība)",
        "more": "vairāk..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "Kā?",
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
          "headline": "Visas (%{count}) %{type} vietas ar vēl nezināmu pieejamības ar ratiņkrēsliem statusu %{city}"
        },
        "yes": {
          "headline": "Visas (%{count}) ar ratiņkrēslu pieejamās %{type} vietas %{city}"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.de projekts"
      }
    }
  },
  "models": {
    "category": {
      "prompt": ""
    },
    "node": {
      "info_edit_position": "",
      "mail": {
        "body": "",
        "subject": ""
      }
    },
    "node_type": {
      "prompt": ""
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": " %{street} %{housenumber}"
    },
    "tags": {
      "phone": "Tālrunis:",
      "website": "Mājas lapa:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ui, ievadītie dati bija vai nu nekorekti vai arī nepilnīgi",
        "successfull": "Paldies, jūsu ieraksts tika veiksmīgi saglabāts un drīz būs pieejams tiešsaistē. "
      }
    },
    "edit": {
      "header": {
        "title": "Labot vietu: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Atcelt"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Atvainojiet, autorizācija neizdevās",
      "not_available": "Atvainojiet, šī lapa šobrīd nav pieejama",
      "not_existent": "Atvainojiet, šī vieta vairs nav pieejama",
      "not_found": "Atvainojiet, lapa nav atrasta.",
      "param_missing": "lūdzu norādiet terminu meklēšanai"
    },
    "flash": {
      "authorize_wheelmap": "Jums ir nepieciešams OpenStreetMap konts lai mainītu datus"
    },
    "new": {
      "form": {
        "legend": "",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "",
            "title": ""
          },
          "contact": {
            "name": "",
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
        "title": "Jauna vieta | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Atcelt"
      }
    },
    "node": {
      "link": {
        "claim": "Vai tu šeit strādā?",
        "edit_node": "Labot vietu",
        "report_bug": "Ziņot par problēmu"
      }
    },
    "node_data": {
      "address": "",
      "contact_details": ""
    },
    "node_edit": {
      "details": "",
      "edit": ""
    },
    "node_map": {
      "map": ""
    },
    "node_note": {
      "comment": ""
    },
    "node_photos": {
      "add": "",
      "photos_of_this_place": "",
      "upload": ""
    },
    "node_similar": {
      "similar": ""
    },
    "node_status": {
      "accessible_toilet": "",
      "premium": "",
      "wheelchair_accessibility": ""
    },
    "node_streetview": {
      "streetview": ""
    },
    "show": {
      "header": {
        "meta": {
          "description": "",
          "title": ""
        },
        "title": "Vieta: %{node} | wheelmap.org"
      },
      "link": {
        "back": "atpakaļ",
        "large_map": "Palielināt",
        "listing": "Visas '%{type}' veida vietas %{city}",
        "upload": "Augšupuzlādēt attēlu"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-pasts",
        "facebook": "",
        "text": "",
        "twitter": ""
      },
      "show-in-osm": "OpenStreetMap\n"
    },
    "update": {
      "flash": {
        "not_successfull": "Ups, Jūsu ieraksts bija vai nu nekorekts vai arī nepilnīgs",
        "successfull": "Paldies, jūsu ieraksts tika veiksmīgi saglabāts un tūlīt būs pieejams tiešsaistē"
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\" statuss ir izmainīts uz \"%{status} wheelchair accessible\". Izmaiņas drīz būs redzamas tiešsaistē."
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
        "unit": "Ls"
      }
    },
    "format": {
      "delimiter": ".",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miljards",
          "million": "miljons",
          "quadrillion": "Kvadriljons",
          "thousand": "tūkstotis",
          "trillion": "Triljons",
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
  "or": "vai",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "Apmešanās vietas",
      "education": "Izglītība",
      "food": "Sabiedriskā ēdināšana",
      "government": "Valdība",
      "health": "Veselība",
      "leisure": "Atpūta",
      "misc": "",
      "money_post": "",
      "public_transfer": "",
      "shopping": "Iepirkšanās",
      "sport": "Sports",
      "tourism": "Tūrisms",
      "unknown": "Nezināms"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Pludmales viesnīca",
        "bed_and_breakfast": "B&B",
        "camp_site": "Nometnes vieta",
        "caravan_site": "Treileru kempings",
        "chalet": "Kempinga mājiņas",
        "dormitory": "",
        "guest_house": "Viesu māja",
        "hostel": "Hostelis",
        "hotel": "Viesnīca",
        "motel": "Motelis"
      },
      "education": {
        "college": "Koledža",
        "driving_school": "",
        "kindergarten": "Bērnu dārzs",
        "library": "Bibliotēka",
        "museum": "Muzejs",
        "school": "Skola",
        "university": "Universitāte"
      },
      "food": {
        "bar": "Bārs",
        "biergarten": "Alus dārzs",
        "cafe": "Kafejnīca",
        "drinking_water": "Dzeramais ūdens",
        "fast_food": "Ātrā ēdināšana",
        "ice_cream": "",
        "pub": "Krogs",
        "restaurant": "Restorāns"
      },
      "government": {
        "courthouse": "Tiesa",
        "embassy": "Vēstniecība",
        "government": "",
        "police": "Policija",
        "public_building": "Publiska ēka",
        "townhall": ""
      },
      "health": {
        "dentist": "",
        "doctors": "",
        "hearing_aids": "Dzirdes aparātu izplatītājs",
        "hospital": "Slimnīca",
        "medical_supply": "Medicīnas preces",
        "pharmacy": "Aptieka",
        "social_facility": "Sociālā iestāde",
        "veterinary": "veterinārā klīnika"
      },
      "leisure": {
        "arena": "Arēna",
        "brothel": "Bordelis",
        "casino": "",
        "cinema": "Kinoteātris",
        "community_centre": "",
        "gallery": "Galerija",
        "nightclub": "Naktsklubs",
        "playground": "Rotaļu laukums",
        "sauna": "Pirts",
        "stripclub": "Striptīza klubs",
        "theatre": "Teātris",
        "zoo": "Zooloģiskais dārzs"
      },
      "misc": {
        "company": "Uzņēmums (birojs)",
        "estate_agent": "",
        "insurance": "",
        "lawyer": "Juridiskie pakalpojumi",
        "place_of_worship": "Reliģisks objekts",
        "toilets": "Labierīcības"
      },
      "money_post": {
        "atm": "bankomāts",
        "bank": "Banka",
        "bureau_de_change": "Valūtas maiņa",
        "post_box": "Vēstuļu kaste",
        "post_office": "Pasta nodaļa"
      },
      "public_transfer": {
        "aerodrome": "Lidosta",
        "bicycle_parking": "Velosipēdu novietne",
        "bicycle_rental": "Velosipēdu noma",
        "boatyard": "",
        "bus_station": "Autobusa pietura",
        "bus_stop": "Autobusu pietura",
        "cable_car": "Trosu dzelzceļš",
        "car_rental": "Auto noma",
        "car_sharing": "Auto koplietošana",
        "chair_lift": "Pacēlājs",
        "ferry": "Prāmis",
        "ferry_terminal": "Prāmju piestātne",
        "fuel": "Degvielas uzpildes stacija",
        "halt": "Pietura",
        "light_rail": "Pilsētas vilciens",
        "parking": "Auto stāvvieta",
        "parking_aisle": "auto stāvvieta",
        "platform": "Platforma",
        "station": "Metro",
        "subway_entrance": "Ieeja metro",
        "terminal": "Lidostas terminālis",
        "tram_stop": "Tramvaja pietura"
      },
      "shopping": {
        "alcohol": "Alkohols",
        "bakery": "Konditoreja",
        "beauty": "",
        "beverages": "Dzērieni",
        "bicycle": "Velosipēdu veikals",
        "books": "Grāmatas",
        "butcher": "Gaļas veikals",
        "car_repair": "Auto remonts",
        "car_shop": "Auto veikals",
        "chemist": "",
        "clothes": "Apģērbs",
        "computer": "Datori",
        "confectionery": "",
        "convenience": "Dažādas preces",
        "deli": "",
        "department_store": "Universālveikals",
        "doityourself": "mājai & dārzam",
        "dry_cleaning": "Ķīmiskā tīrītava",
        "electronics": "Elektronika",
        "fabric": "",
        "farm_shop": "",
        "florist": "Florists",
        "furniture": "Mēbeles",
        "garden_centre": "",
        "gift": "",
        "hairdresser": "Frizieris",
        "hardware": "Saimniecības preces",
        "jewelry": "",
        "kiosk": "Kiosks",
        "laundry": "Veļas mazgātuve",
        "mall": "Iepirkšanās centrs",
        "optician": "optiķis",
        "organic": "",
        "outdoor": "",
        "pet": "",
        "photo": "Foto",
        "second_hand": "lietoti apģērbi",
        "shoes": "Apavi",
        "sports": "Sports",
        "stationery": "Rakstāmlietas",
        "supermarket": "Lielveikals",
        "toys": "",
        "travel_agency": "",
        "video": "Video noma"
      },
      "sport": {
        "pitch": "",
        "sports_centre": "Sporta centrs",
        "stadium": "Stadions",
        "swimming": "Peldēšana",
        "swimming_pool": "Peldbaseins"
      },
      "tourism": {
        "archaeological_site": "Arheoloģisko izrakumu vieta",
        "arts_centre": "Mākslas centrs",
        "artwork": "Mākslas darbs",
        "attraction": "Ievērojama vieta",
        "battlefield": "Kaujas lauks",
        "beach": "Pludmale",
        "beacon": "Bāka",
        "castle": "Pils",
        "cave_entrance": "Ieeja alā",
        "information": "Tūrisma informācija",
        "memorial": "Memoriāls",
        "theme_park": "Atrakciju parks",
        "tower": "Tornis",
        "viewpoint": "Skatu laukums"
      },
      "unknown": {
        "unknown": "Nezināms"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Statuss: tiešsaistē",
          "grant": "Pieslēgties tūlīt",
          "not_connected": "Satuss: Nav tiešsaistē",
          "revoke": "Atvienoties"
        }
      },
      "headline": "Mainīt savu profilu"
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
        "headline": "",
        "hint": {
          "example": "",
          "info": "",
          "work_in_progress": ""
        },
        "try_this": {
          "address": "",
          "intro": "",
          "spell_check": ""
        }
      },
      "results": {
        "ticker": {
          "one": "",
          "other": "",
          "zero": ""
        }
      },
      "search": {
        "for": "Meklē \"%{q}\"",
        "not_found": "Neviena vieta nav atrasta!"
      }
    },
    "timeout": {
      "headline": "",
      "info": "",
      "repeat_search": ""
    }
  },
  "splash": {
    "countline": "%{count} vietas jau ir atzīmētas",
    "headline": "Ikviens var pievienot ar ratiņkrēsliem pieejamās vietas!",
    "start": "Sākt",
    "step1": "Klikšķiniet uz vietas, kuru ziniet",
    "step2": "Atzīmējiet to un nospiežiet saglabāt",
    "step3": "Tas arī viss! Reģistrācija nav nepieciešama",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistika",
  "support": {
    "array": {
      "last_word_connector": "un",
      "sentence_connector": "un",
      "two_words_connector": "un",
      "words_connector": ","
    },
    "select": {
      "prompt": "Lūdzu izvēlieties"
    }
  },
  "time": {
    "am": "no rīta",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "vakarā"
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
        "notice": "Jūsu konts ir aktivizēts!"
      },
      "error": {
        "notice": "E-pasts un parole nesakrīt"
      },
      "notice": "Izdevās pierakstīties!"
    },
    "destroy": {
      "notice": "Uz redzēšanos! "
    },
    "new": {
      "email": "Email address",
      "login": "Pierakstīties",
      "login_with_twitter": "Pierakstīties ar Twitter",
      "password": "Parole",
      "remember_me": "Palikt piereģistrētam"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "How can we get in touch with you? You can change this information later in your profile."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Your uploaded images"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": ""
        },
        "title": "Profils"
      },
      "newsletter": {
        "label": "",
        "text": "",
        "title": "Paziņojumi par jaunumiem"
      },
      "photos": {
        "empty": "",
        "title": ""
      },
      "show": {
        "greeting": {
          "anonymously": "",
          "personalized": ""
        },
        "overview": {
          "photos_uploaded": {
            "one": "",
            "other": "",
            "zero": ""
          },
          "pois_added": {
            "one": "",
            "other": "",
            "zero": ""
          },
          "pois_edited": {
            "one": "",
            "other": "",
            "zero": ""
          },
          "pois_marked": {
            "one": "",
            "other": "",
            "zero": ""
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
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Nākošais &rsaquo;",
      "previous": "&lsaquo; Iepriekšējais",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "Not wheelchair accessible",
    "unknown": "Unknown status",
    "yes": "pieejams ar ratiņkrēslu"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "projekts",
      "based_on": "Balstīts uz",
      "become_a_supporter": "Kļūsti par atbalstītāju",
      "main_supporter": "Galvenais atbalstītājs"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Lejupielādējiet iPhone App tūlīt!"
    },
    "logo": {
      "alt": "Wheelmap Logo - atrodiet ar ratiņkrēslu pieejamas vietas",
      "title": "Wheelmap - atrodiet ar ratiņkrēslu pieejamas vietas"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Nākošais &#8594;",
    "page_entries_info": {
      "multi_page": "Rāda %{from} - %{to} no %{count} %{model} kopumā",
      "multi_page_html": "Parāda  %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> no <b>%{count}</b> kopumā",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Iepriekšējais"
  }
});
