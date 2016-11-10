I18n.translations || (I18n.translations = {});
I18n.translations["sq_AL"] = I18n.extend((I18n.translations["sq_AL"] || {}), {
  "actions": {
    "cancel": "Anullo",
    "next": "Next",
    "save": "Ruaj",
    "send": "Send"
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
        "address": "Adresë",
        "address_city": "Qytet",
        "address_housenumber": "House number",
        "address_postcode": "Postcode",
        "address_street": "Rrugë",
        "name": "Emër",
        "note": "Note",
        "phone": "Telefon",
        "type": "Lloj",
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
      "notice": "Ju jeni tanimë i identifikuar..."
    },
    "require_user": {
      "notice": "Ju duhet të jeni të identifikuar për të parë këtë faqe."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Redakto vend"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "mbyll",
    "skip": "kapërce"
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
          "email": "Email",
          "password": "Password <i>(leave empty if you don\\'t want to change it)</i>",
          "password_confirmation": "Përsërit fjalëkalimin"
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
          "email": "Email"
        },
        "submit": "Reset password"
      },
      "headline": "Harruat fjalëkalimin?"
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
          "password_confirmation": "Përsërit fjalëkalimin"
        },
        "submit": "Reset password"
      },
      "headline": "Reset password"
    },
    "passwords": {
      "link": "Harruat fjalëkalimin?",
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
          "email": "Email",
          "password": "Fjalëkalim",
          "remember_me": "Stay logged in?"
        },
        "submit": "Identifikohu"
      },
      "headline": "Identifikohu"
    },
    "sign_out": {
      "headline": "Dil"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Fjalëkalim",
          "password_confirmation": "Përsërit fjalëkalimin",
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
      "already_confirmed": "është konfirmuar tanimë",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nuk përputhet konfirmimi",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "duhet të jetë saktësisht %{count}",
      "even": "must be an even number",
      "exclusion": "është rezervuar",
      "expired": "ka skaduar, ju lutemi kërkoni një të ri",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "duhet të jetë më i madh se %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "jo një vlerë e vlefshme",
      "invalid": "jo e vlefshme",
      "less_than": "duhet të jetë më e vogël se %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nuk është një numër",
      "not_an_integer": "duhet të jetë një numër i plotë",
      "not_found": "nuk u gjet",
      "not_locked": "nuk ishte mbyllur",
      "not_saved": {
        "one": "Një gabim nuk lejoi të ruhej një %{resource}:",
        "other": "%{count} gabime nuk lejuan të ruhej një %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "është marrë tashmë",
      "too_long": "është shumë i gjatë (jo më shumë se %{count} karaktere)",
      "too_short": "është shumë i shkrurtër (jo më i vogël se %{count} karaktere)",
      "wrong_length": "është gjatësi e gabuar (duhet të jetë %{count} karaktere)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Pati probleme me fushat e mëposhtme:",
      "header": {
        "one": "1 gabim nuk lejoji të ruhej ky %{model}",
        "other": "%{cont} gabime nuk lejuan të ruhej këtë %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Ju mundeni gjithnjë të ndryshoni personalisht shenjimin e një vendi. Vetëm zgjidh shenjimin e saktë dhe \"Ruaj\" - u krye!",
      "1": "Si një përdorues i identifikuar ju mund të shtoni/korrigjoni të gjithë detajet e një vendi. Klikoni mbi \"Redakto\" dhe korrigjoni ose shtoni informacion në zonën përkatëse.",
      "2": "Ju mund të shtoni informacion të mëtejshëm (p.sh. \"Ky vend ka një platëformë të pjerrët të lëvizshme\") në seksionin e komentit. Kliko mbi \"Redakto\" dhe \"Shto koment\"."
    },
    "headline": "A ka ndonjë problem me këtë vend?",
    "questions": {
      "0": "Shenjimi është gabim.",
      "1": "Detajet e këtij vendi janë jo korrekte ose mungojnë.",
      "2": "Unë kam më shumë informacion për këtë vend."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resourse_name} u krijua me sukses"
      },
      "destroy": {
        "alert": "%{resource_name} nuk mund të largohet",
        "notice": "%{resource_name} u fshi me sukses"
      },
      "update": {
        "notice": "%{resource_name} u ngarkua me sukses"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Imazhi u fshi me sukses"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "E aksesueshme në karrige me rrota",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "E pa aksesueshme në karrige me rrota"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Lëvize shenjuesin mbi hartë te vendi i saktë",
      "osm_username": "Nuk jeni pjestarë ende? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Krijo një llogari OpenStreetMap tani</a>",
      "password": "(lëre bosh nëse nuk dëshironi ta ndryshoni)",
      "phone": "For example: +49 30 12345678",
      "website": "Për shembull: http://www.example.com"
    },
    "labels": {
      "category": "Kategori:",
      "centralkey": "Çelës qendror",
      "city": "Qytet:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Përfundo",
      "housenumber": "Jo:",
      "lat": "Gjerësi",
      "lon": "Gjatësi",
      "name": "Emër:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Fjalëkalim",
      "password_confirmation": "Përsërit fjalëkalimin",
      "phone": "Telefon:",
      "postcode": "Kodi postar:",
      "privacy_policy": "Pranoj paragrafin 1 dhe 2 të marrëveshjes së privatësisë së të dhënave.",
      "reset": "Rivë",
      "save": "Ruaj",
      "street": "Rruga:",
      "terms": "Unë pranoj kushtet e përdorimit.",
      "type": "Lloji:",
      "website": "Website:",
      "wheelchair": "Aksesueshmëria në karrige me rrota?",
      "wheelchair_description": "Koment mbi aksesueshmërinë:",
      "wheelchair_toilet": "Tualet i aksesueshëm për karrige me rrota"
    },
    "titles": {
      "basic": "Të thëna bazë",
      "optional": "Më shumë informacion <spam class=\"addition\">(të gjitha fushat janë me zgjedhje)</span>"
    }
  },
  "global": {
    "form_validation_error": "Ju lutem shënoni gabimet e listuar poshtë"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Kryefaqja",
      "keywords": "vende të aksesueshme në karrige me rrota gjej kërko shënjo",
      "search": "Kërko",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Rreth Wheelmap",
      "blog": "Lajme",
      "choose_language": "Zgjidh gjuhёn",
      "contact": "Kontakt",
      "feedback": "Reagim",
      "home": "Fillo",
      "how_to_add_a_place": "Si të shtoj vende?",
      "imprint": "Imprint",
      "logged_in_as": "I identifikuar si:",
      "login": "Identifikohu",
      "logout": "Dil",
      "map": "Harta",
      "newsletter": "Fletushkë",
      "press": "Shtypi",
      "profile": "Profil",
      "projects": "Get involved",
      "suggestions": "Sugjerime",
      "what_is_barrier_free": "Çfarë do të thotë \"e aksesueshme në karrige me rrota\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Shto një vend tjetër",
      "find": "Gjej",
      "placeholder": "Kërko për një vend",
      "title_add_place": "Shto një vend në këtë pozicion tani!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategoritё"
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
      "prompt": "Ju lutem zgjidhni"
    },
    "submit": {
      "create": "krijoni %{model}",
      "submit": "ruaj %{model}",
      "update": "përditëso %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Zgjidh kategorinë",
        "deselect_all": "Deselektoni të gjitha",
        "select_all": "Selektoni të gjitha",
        "wheelchair": "E aksesueshme në karrige me rrota?"
      },
      "ie": {
        "action": {
          "ignore": "Injoro",
          "upgrade": "Përditëso Shfletuesin"
        },
        "warning": {
          "headline": "Ju kërkojmë ndjesë!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "Ok, le të fillojmë!",
        "categories": "Filtro vendet sipas katagorisë",
        "filter": "Filtro vende sipas aksesueshmërisë në karrigeve me rrota",
        "headline": "Shëno dhe gjej vendet me e aksesueshme në karrige me rrota me Wheelmap.org - në gjithë botën dhe falas. Është e thjeshtë:",
        "lookup": "Kërko për një vend të veçantë",
        "secondary_headline": "Sistemi jonë i semaforit për të shënuar aksesueshmërinë në karrige me rrota të vendeve publike:"
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "E pa aksesueshme në karrige me rrota",
          "save": "Përditëso",
          "unknown": "Unknown status",
          "yes": "E aksesueshme në karrige me rrota"
        },
        "help": "E aksesueshme në karrige me rrota? (Ndihmë)",
        "more": "më shumë..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Si?",
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
          "headline": "Të gjitha %{type} në %{city} me status të papërcaktuar për karrige me rrota (%{count})"
        },
        "yes": {
          "headline": "Të gjitha të aksesueshme në karrige me rrota %{type} në %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Një projekt nga Sozialhelden.de"
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
      "phone": "Telefon:",
      "website": "Website:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Uups, informacioni juaj i futur ishte ose jo korrekt ose i paplotë",
        "successfull": "Ju faleminderit,..."
      }
    },
    "edit": {
      "header": {
        "title": "Redakto vend: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anullo"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Na vjen keq, vërtetimi dështoi",
      "not_available": "Na vjen keq, kjo faqe është përkohësisht jo e disponueshme.",
      "not_existent": "Na vjen keq, ky vend nuk është i disponueshëm më.",
      "not_found": "Na vjen keq, faqja nuk u gjend.",
      "param_missing": "Ju lutemi jepni një term kërkimi"
    },
    "flash": {
      "authorize_wheelmap": "Ju keni nevojë për një llogari OpenStreetMap për të modifikuar të dhënat"
    },
    "new": {
      "form": {
        "legend": "Vendndodhja",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Adresë",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Kontakt",
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
        "title": "Vend i ri | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anullo"
      }
    },
    "node": {
      "link": {
        "claim": "A punoni këtu?",
        "edit_node": "Redakto vend",
        "report_bug": "Raporto një problem"
      }
    },
    "node_data": {
      "address": "Adresa:",
      "contact_details": "Të dhënat për kontakt:"
    },
    "node_edit": {
      "details": "Detaje",
      "edit": "Redakto"
    },
    "node_map": {
      "map": "Hartë:"
    },
    "node_note": {
      "comment": "Koment:"
    },
    "node_photos": {
      "add": "Shto",
      "photos_of_this_place": "Foto të këtij vendi:",
      "upload": "Ngarko"
    },
    "node_similar": {
      "similar": "Vende të ngjashëm: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Tualet i aksesueshëm për karrige me rrota",
      "premium": "%{name} thotë: ky vend është ",
      "wheelchair_accessibility": "Aksesueshmëria në karrige me rrota"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Zbulo nëse ky vend është i aksesueshëm në karrige me rrota në Wheelmap.org. Ose shto informacion të mëtejshëm dhe foto të vendit.",
          "title": "Ky vend është në Wheelmap.org: %{name}"
        },
        "title": "Vend: %{node} | wheelmap.org"
      },
      "link": {
        "back": "kthehu",
        "large_map": "Zmadho",
        "listing": "Të gjithë vendet e '%{type}' në %{city}",
        "upload": "Ngarko imazh"
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
        "not_successfull": "Uups, informacioni juaj i futur ishte ose jo korrekt ose i paplotë",
        "successfull": "Ju faleminderit,..."
      }
    },
    "update_wheelchair": {
      "successfull": "Statusi për \"%{name}\" ka ndryshuar në \"%{status}\" dhe do të jetë në linjë së shpejti."
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
          "billion": "Miliardë",
          "million": "Milion",
          "quadrillion": "Kardilion",
          "thousand": "Mijë",
          "trillion": "Trilion",
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
  "or": "ose",
  "place": {
    "one": "%{count} vend",
    "other": "%{count} vende"
  },
  "poi": {
    "category": {
      "accommodation": "Akomodim",
      "education": "Edukim",
      "food": "Ushqim",
      "government": "Qeveri",
      "health": "Shëndet",
      "leisure": "Kohë e lirë",
      "misc": "I llojllojshëm",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Blerje",
      "sport": "Sport",
      "tourism": "Turizëm",
      "unknown": "I papërcaktuar"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel plazhi",
        "bed_and_breakfast": "Shtrat dhe mëngjes",
        "camp_site": "Vend për kamp",
        "caravan_site": "Vend për karavan",
        "chalet": "Shtëpizë",
        "dormitory": "Fjetore",
        "guest_house": "Shtëpi mikpritëse",
        "hostel": "Bujtinë",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Kolegj",
        "driving_school": "Autoshkollë",
        "kindergarten": "Çerdhe",
        "library": "Bibliotekë",
        "museum": "Muze",
        "school": "Shkollë",
        "university": "Universitet"
      },
      "food": {
        "bar": "Pijetore",
        "biergarten": "Birrari në të hapur",
        "cafe": "Kafene",
        "drinking_water": "Ujë i pijshëm",
        "fast_food": "Fast food",
        "ice_cream": "Akullore",
        "pub": "Pab",
        "restaurant": "Restorant"
      },
      "government": {
        "courthouse": "Gjykatë",
        "embassy": "Ambasadë",
        "employment_agency": "Employment agency",
        "government": "Agjenci qeveritare",
        "police": "Polici",
        "public_building": "Godinë publike",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Dyqan për pajisje dëgjimi",
        "hospital": "Spital",
        "medical_supply": "Vegla mjeksore",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Farmaci",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Objekt shoqëror",
        "speech_therapist": "Speech therapist",
        "veterinary": "Veterinar"
      },
      "leisure": {
        "arena": "Arenë",
        "brothel": "Shtëpi publike",
        "casino": "Kazino",
        "cinema": "Kinema",
        "community_centre": "Community centre",
        "gallery": "Galeri",
        "massage": "Massage spa",
        "nightclub": "Klub nate",
        "playground": "Shesh lojrash",
        "sauna": "Sauna",
        "stripclub": "Klub striptrize",
        "tattoo": "Tattoo shop",
        "theatre": "Teatër",
        "zoo": "Kopsht zoologjik"
      },
      "misc": {
        "association": "Association",
        "company": "Kompani (Zyrë)",
        "estate_agent": "Agjent imobilar",
        "insurance": "Zyrë sigurimi",
        "lawyer": "Avokat",
        "ngo": "Non-government organisation",
        "place_of_worship": "Vend adhurimi",
        "political_party": "Political party office",
        "toilets": "Tualete"
      },
      "money_post": {
        "atm": "ATM",
        "bank": "Bankë",
        "bureau_de_change": "Zyrë këmbimi valutor",
        "post_box": "Kuti postare",
        "post_office": "Zyrë postare"
      },
      "public_transfer": {
        "aerodrome": "Aeroport",
        "bicycle_parking": "Parking për biçikleta",
        "bicycle_rental": "Biçikletë me qira",
        "boatyard": "Boat yard",
        "bus_station": "Stacion autobusi",
        "bus_stop": "Qëndrim autobusi",
        "cable_car": "Teleferik",
        "car_rental": "Makinë me qira",
        "car_sharing": "Car sharing",
        "chair_lift": "Ngritje karrigieje",
        "ferry": "Traget",
        "ferry_terminal": "Terminal tragetesh",
        "fuel": "Pikë karburanti",
        "halt": "Ndal",
        "light_rail": "Tramvaj",
        "parking": "Parking",
        "parking_aisle": "Parking aisle",
        "platform": "Platformë",
        "station": "Stacion treni",
        "subway_entrance": "Hyrja në metro",
        "terminal": "Terminal aeroporti",
        "tram_stop": "Qendrim tramvaji"
      },
      "shopping": {
        "alcohol": "Pije alkolike",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "Dyqan buke",
        "beauty": "Sallon bukurie",
        "beverages": "Pije alkoolike",
        "bicycle": "Dyqan biçikletash",
        "books": "Libra",
        "butcher": "Mishshitës",
        "car_repair": "Riparim makine",
        "car_shop": "Dyqan makinash",
        "chemist": "Chemist / Drugstore",
        "clothes": "Dyqan rrobash",
        "computer": "Dyqan kompjuterash",
        "confectionery": "Dyqan ëmbëlsirash",
        "convenience": "Dyqan i vogël",
        "copyshop": "Copy shop",
        "deli": "Ushqime të zgjedhura",
        "department_store": "Qendër tregtare",
        "doityourself": "Bëje vet",
        "dry_cleaning": "Pastrim kimik",
        "electronics": "Elektronike",
        "erotic": "Sex shop",
        "fabric": "Dyqan pëlhurash",
        "farm_shop": "Dyqan ferme",
        "florist": "Luleshitës",
        "funeral_directors": "Funeral home",
        "furniture": "Mobilje",
        "garden_centre": "Garden centre",
        "gift": "Suvenir",
        "greengrocer": "Greengrocer",
        "hairdresser": "Floktar",
        "hardware": "Harduer",
        "interior_decoration": "Interior design shop",
        "jewelry": "Stoli",
        "kiosk": "Kiosk",
        "laundry": "Lavandari",
        "mall": "Qendër tregtare",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "Dyqan syzesh optike",
        "organic": "Dyqan organik",
        "outdoor": "Furnizim në natyrë",
        "pet": "Dyqan kafshësh shtëpie",
        "photo": "Foto",
        "second_hand": "Të dorës së dytë",
        "shoes": "Këpucë",
        "sports": "Sporte",
        "stationery": "Kancelari",
        "supermarket": "Supermarket",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Lojra",
        "travel_agency": "Agjenci udhëtimi",
        "variety_store": "Discount store",
        "video": "Dyqan i vidjosh me qira"
      },
      "sport": {
        "pitch": "Fushë sportive",
        "sports_centre": "Qendër sportive",
        "stadium": "Stadium",
        "swimming": "Not",
        "swimming_pool": "Pishinë"
      },
      "tourism": {
        "archaeological_site": "Zonë arkeologjike",
        "arts_centre": "Qendër artesh",
        "artwork": "Vepër arti",
        "attraction": "Pikë turistike",
        "battlefield": "Fushë beteje",
        "beach": "Plazh",
        "beacon": "Far",
        "castle": "Kështjellë",
        "cave_entrance": "Hyrje shpelle",
        "information": "Informacion turistik",
        "memorial": "Memorial",
        "theme_park": "Park lojrash",
        "tower": "Kullë",
        "viewpoint": "Pikë vështrimi"
      },
      "unknown": {
        "unknown": "I papërcaktuar"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: lidhur",
          "grant": "Lidhu tani",
          "not_connected": "Status: Jo e lidhur",
          "revoke": "E shkëputur"
        }
      },
      "headline": "Redakto profilin tënd"
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
          "example": "<strong>Shembull:</strong> Londër, Mbretëria e Bashkuar",
          "info": "Shërbimi jonë i kërkimit punon vetëm me emra dhe/ose informacion adrese. Prandaj, ju lutem ose kërkoni për emrin e vendit ose një adresë, p.sh. emër rruge dhe/ose qyteti. Të kërkuarit për një tip vendi, p.sh. resorant ose kinema, nuk jep rezultat!",
          "work_in_progress": "Ne punojmë fort për ta bërë kërkimin për vendet më të lehtë dhe më intuituv në të ardhmen."
        },
        "try_this": {
          "address": "Ju lutem jepni më shumë <strong>detaje të ardesës</strong>",
          "intro": "Provoni këtë:",
          "spell_check": "Kontrollo <strong>drejtshkrimin</strong> e informacionit tuaj të futur."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} rezultat:",
          "other": "%{count} rezultate:"
        }
      },
      "search": {
        "for": "Duke kërkuar për \"%{q}\"",
        "not_found": "Asnjë vend nuk u gjend!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Shërbimi jonë i kërkimit ishte përkohësisht jo i disponueshëm.",
      "repeat_search": "Riprovo kërkimin"
    }
  },
  "splash": {
    "countline": "%{count} vende janë shënuar tashmë.",
    "headline": "Gjithkush mund të shtojë vende për aksesimin e karrigeve me rrota!",
    "start": "Fillo",
    "step1": "Kliko mbi një vend që ju njehni",
    "step2": "Shënoje dhe kliko ruaj",
    "step3": "Kjo ishte! Nuk është i nevojshëm regjistimi",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistikat",
  "support": {
    "array": {
      "last_word_connector": "dhe",
      "sentence_connector": "dhe",
      "two_words_connector": "dhe",
      "words_connector": ","
    },
    "select": {
      "prompt": "Ju lutem selektoni"
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
        "notice": "Llogaria juaj u aktivizua tani!"
      },
      "error": {
        "notice": "Email dhe password nuk përputhen."
      },
      "notice": "Jeni futur!"
    },
    "destroy": {
      "notice": "Pafshim, kthehuni së shpejti!"
    },
    "new": {
      "email": "Email address",
      "login": "Identifikohu",
      "login_with_twitter": "Identifikohu me Twitter",
      "password": "Fjalëkalim",
      "remember_me": "Qendro i identifikuar"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Si mundemi ne të mbajmë lidhje me ju? Ju mund të ndryshoni këtë informacion më vonë në profilin tuaj."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Imazhet tuaja të ngarkuara"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Fletushkë"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Foto"
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
          "settings": "Rregullime"
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
    "no": "E pa aksesueshme në karrige me rrota",
    "unknown": "Unknown status",
    "yes": "E aksesueshme në karrige me rrota"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Një projekt nga",
      "based_on": "Mbështetur në",
      "become_a_supporter": "Bëhu një mbështetës",
      "main_supporter": "Mbështetës kryesor"
    },
    "itunes": {
      "alt": "Logo e AppStore",
      "title": "Shkarkoni App-ën e iPhone tani!"
    },
    "logo": {
      "alt": "Logo e Wheelmap - gjej vendet e aksesueshme në karrige me rrota",
      "title": "Wheelmap - gjej vendet e aksesueshme në karrige me rrota"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Tjetri &#8594;",
    "page_entries_info": {
      "multi_page": "Shfaq %{model} %{form} - %{to} të %{count} në total",
      "multi_page_html": "Shfaq %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> e <b>%{count}</b> në total",
      "single_page": {
        "one": "Shfaq 1 %{model}",
        "other": "Shfaq të gjithë %{count} %{model}",
        "zero": "Nuk u gjet %{model}"
      },
      "single_page_html": {
        "one": "Shfaq <b>1</b> %{model}",
        "other": "Shfaq <b>të gjithë&nbsp;%{count}</b> %{model}",
        "zero": "Nuk u gjet %{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Previous"
  }
});
