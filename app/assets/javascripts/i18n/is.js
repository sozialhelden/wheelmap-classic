I18n.translations || (I18n.translations = {});
I18n.translations["is"] = I18n.extend((I18n.translations["is"] || {}), {
  "actions": {
    "cancel": "Cancel",
    "next": "Next",
    "save": "Vista",
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
        "address": "Address",
        "address_city": "City",
        "address_housenumber": "House number",
        "address_postcode": "Postcode",
        "address_street": "Street",
        "name": "Name",
        "note": "Note",
        "phone": "Phone",
        "type": "Type",
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
        "accepted": "þarf að vera tekið gilt",
        "blank": "má ekki vera autt",
        "confirmation": "passar ekki við staðfestingu",
        "empty": "má ekki vera tómt",
        "equal_to": "þarf að vera jafngilt %{count}",
        "even": "þarf að vera slétt tala",
        "exclusion": "er frátekið",
        "greater_than": "þarf að vera stærri en %{count}",
        "greater_than_or_equal_to": "þarf að vera stærri en eða jafngilt %{count}",
        "inclusion": "er ekki í listanum",
        "invalid": "er ógilt",
        "less_than": "þarf að vera minna en %{count}",
        "less_than_or_equal_to": "þarf að vera minna en eða jafngilt %{count}",
        "not_a_number": "er ekki tala",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "þarf að vera oddatala",
        "record_invalid": "Validation mistókst: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "er þegar í notkun",
        "too_long": "er of langt (má aðeins vera %{count} stafir)",
        "too_short": "er of stutt (má aðeins vera %{count} stafir)",
        "wrong_length": "er af rangri lengd (má aðeins vera %{count} stafir)"
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
          "email": "Tölvupóstur",
          "password": "Lykilorð",
          "remember_me": "Haldast innskráður"
        }
      },
      "template": {
        "body": "Upp kom vandamál í eftirfarandi dálkum:",
        "header": {
          "one": "Ekki var hægt að vista %{model} vegna villu.",
          "other": "Ekki var hægt að vista %{model} vegna %{count} villna."
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
      "notice": "Þú ert nú þegar innskráður ..."
    },
    "require_user": {
      "notice": "Þú verður að vera innskráður til að sjá þessa síðu"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Breyta stað"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "loka",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "sun",
      "mán",
      "þri",
      "mið",
      "fim",
      "fös",
      "lau"
    ],
    "abbr_month_names": [
      null,
      "jan",
      "feb",
      "mar",
      "apr",
      "maí",
      "jún",
      "júl",
      "ágú",
      "sep",
      "okt",
      "nóv",
      "des"
    ],
    "day_names": [
      "sunnudagur",
      "mánudagur",
      "þriðjudagur",
      "miðvikudagur",
      "fimmtudagur",
      "föstudagur",
      "laugardagur"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%e. %B %Y",
      "short": "%e. %b"
    },
    "month_names": [
      null,
      "janúar",
      "febrúar",
      "mars",
      "apríl",
      "maí",
      "júní",
      "júlí",
      "ágúst",
      "september",
      "október",
      "nóvember",
      "desember"
    ],
    "order": [
      "dagur",
      ":mánuður",
      ":ár"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "u.þ.b. 1 klukkustund",
        "other": "u.þ.b. %{count} klukkustundir"
      },
      "about_x_months": {
        "one": "u.þ.b. 1 mánuður",
        "other": "u.þ.b. %{count} mánuðir"
      },
      "about_x_years": {
        "one": "u.þ.b. 1 ár",
        "other": "u.þ.b. %{count} ár"
      },
      "almost_x_years": {
        "one": "næstum 1 ár",
        "other": "næstum %{count} ár"
      },
      "half_a_minute": "hálf mínúta",
      "less_than_x_minutes": {
        "one": "minna en 1 mínúta",
        "other": "minna en %{count} mínútur"
      },
      "less_than_x_seconds": {
        "one": "minna en 1 sekúnda",
        "other": "minna en %{count} sekúndur"
      },
      "over_x_years": {
        "one": "meira en 1 ár",
        "other": "meira en %{count} ár"
      },
      "x_days": {
        "one": "1 dagur",
        "other": "%{count} dagar"
      },
      "x_minutes": {
        "one": "1 mínúta",
        "other": "%{count} mínútur"
      },
      "x_months": {
        "one": "1 mánuður",
        "other": "%{count} mánuðir"
      },
      "x_seconds": {
        "one": "1 sekúnda",
        "other": "%{count} sekúndur"
      }
    },
    "prompts": {
      "day": "Dagur",
      "hour": "Klukkustund",
      "minute": "Mínúta",
      "month": "Mánuður",
      "second": "Sekúnda",
      "year": "Ár"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Aðgangurinn hefur verið staðfestur. Þú ert núna skráður inn",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Þú munt fá tölvupóst með upplýsingar hvernig þú staðfestir aðganginn þinn eftir nokkrar mínútur",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Ertu viss?",
      "headline": "Delete account",
      "link": "Eyða núna"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Núverandi lykilorð <i>(við þurfum þessar upplýsingar til að staðfesta breytingarnar)</i> ",
          "email": "Tölvupóstur",
          "password": "Lykilorð <i>(skildu eftir autt ef þú vilt ekki breyta því)</i> ",
          "password_confirmation": "Lykilorð aftur"
        },
        "submit": "Vista breytingar"
      },
      "headline": "Stjórna aðgangi"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Rangt tölvupóstfang eða lykilorð.",
      "invalid_token": "Rangur kóði til að virkja.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Aðgangurinn þinn er læstur.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Þú þarft að skrá þig inn til að geta haldið áfram.",
      "unconfirmed": "Þú þarft að staðfesta aðganginn þinn til að halda áfram."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Staðfestinga upplýsingar"
      },
      "reset_password_instructions": {
        "subject": "Leiðbeiningar um endursetningu lykilorðs"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* verður að velja",
    "omniauth_callbacks": {
      "failure": "Gat ekki gefið þér aðgang frá %{kind} af því að \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Gat gefið aðgang frá %{kind} aðgangi."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Tölvupóstur"
        },
        "submit": "Endursetja lykilorð"
      },
      "headline": "Gleymdirðu lykilorði?"
    },
    "password_reset": {
      "email": {
        "comment": "Ef þú baðst ekki um að breyta lykilorðinu þínu þá vinsamlegast hunsið þennan póst<br/>Lykilorðið þitt mun ekki breytast nema þú smellir á þennan tengil.",
        "headline": "Velkominn %{email} ",
        "link": "Breyta lykilorði",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nýtt lykilorð",
          "password_confirmation": "Lykilorð aftur"
        },
        "submit": "Endursetja lykilorð"
      },
      "headline": "Endursetja lykilorð"
    },
    "passwords": {
      "link": "Gleymdirðu lykilorði?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Lykilorðinu þínu var breytt. Þú ert núna skráður inn",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "Bless! Aðganginum þínum hefur verið lokað. Vonandi sjáumst við aftur.",
      "inactive_signed_up": "Þú hefur verið skráður. Hinsvegar gátum við ekki skráð þig inn því aðgangurinn þinn er %{reason}.",
      "link": "Innskráning",
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
      "updated": "Þú hefur uppfært aðganginn þinn"
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Rangt tölvupóstfang eða lykilorð.",
      "invalid_token": "Ógilt auðkenningartákn",
      "link": "Innskráning",
      "locked": "Aðgangurinn þinn er læstur.",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Innskráning tókst.",
      "signed_out": "Útskráning tókst.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Þú þarft að innskrá eða nýskrá þig til að halda áfram.",
      "unconfirmed": "Þú verður að staðfesta aðganginn þinn áður en þú heldur áfram."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Tölvupóstur",
          "password": "Lykilorð",
          "remember_me": "haldast innskráður?"
        },
        "submit": "Innskráning"
      },
      "headline": "Innskráning"
    },
    "sign_out": {
      "headline": "Útskrá"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "Tölvupóstfang",
          "password": "Lykilorð",
          "password_confirmation": "Lykilorð aftur",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Skrá sig"
      },
      "headline": "Skrá sig"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Aðganginum þínum hefur verið ólæst. Þú ert núna innskráður."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "nú þegar staðfestur, reyndu að skrá þig inn",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "passar ekki við staðfestingu",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "verður að vera nákvæmlega %{count} ",
      "even": "must be an even number",
      "exclusion": "er tekið frá",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "verður að vera stærri en %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "er ekki tekið gilt",
      "invalid": "ekki gilt",
      "less_than": "verður að vera minna en %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "er ekki tala",
      "not_an_integer": "verður að vera meira",
      "not_found": "fannst ekki",
      "not_locked": "var ekki læst",
      "not_saved": {
        "one": "%{resource} er ekki vistað vegna einnar villu.",
        "other": "%{resource} ekki vistað vegna %{count} villna."
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "hefur verið tekið",
      "too_long": "er of langt (ekki fleiri en %{count} stafir)",
      "too_short": "er of stutt (ekki minna en %{count} stafir)",
      "wrong_length": "er vitlaus lengd (ætti að vera %{count} stafir)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "að voru vandamál með eftirfarandi dálka:",
      "header": {
        "one": "%{model} er ekki vistað vegna einnar villu.",
        "other": "%{model} ekki vistað vegna %{count} villna."
      }
    }
  },
  "faq": {
    "answers": {
      "0": "You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."
    },
    "headline": "Is there a problem with this place?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "I have more information about this place."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} var skráð án vandræða."
      },
      "destroy": {
        "alert": "%{resource_name} er ekki hægt að eyða.",
        "notice": "%{resource_name} var eytt án vandræða."
      },
      "update": {
        "notice": "%{resource_name} var uppfært án vandræða."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Hjólastólaaðgengi",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Not wheelchair accessible"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Færðu merkið á réttan stað á kortinu",
      "osm_username": "Ekki meðlimur? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Fáðu þér Openstreetmap aðgang núna</a> ",
      "password": "(skildu eftir autt ef þú vilt ekki breyta)",
      "phone": "For example: +49 30 12345678",
      "website": "Dæmi: http://www.vefsida.is"
    },
    "labels": {
      "category": "Flokkur:",
      "centralkey": "Central key:",
      "city": "Borg:",
      "create": "Create a place",
      "email": "Tölvupóstfang",
      "finish": "Finish",
      "housenumber": "Nei:",
      "lat": "Breiddargráða",
      "lon": "Lengdargráða",
      "name": "Nafn:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Lykilorð",
      "password_confirmation": "Lykilorð endurtekið",
      "phone": "Sími:",
      "postcode": "Póstfang:",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "Endursetja",
      "save": "Vista",
      "street": "Gata: ",
      "terms": "I accept the terms of use.",
      "type": "Týpa:",
      "website": "Vefsíða:",
      "wheelchair": "Hjólastólaaðgengilegt?",
      "wheelchair_description": "Athugasemd um aðgengi:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "Helstu gögn",
      "optional": "Meiri upplýsingar <span class=\"addition\">(allir fletirnir eru valfrjálsir)</span> "
    }
  },
  "global": {
    "form_validation_error": "Vinsamlegast skrifaðu villurnar sem eru hér fyrir neðan"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Heim",
      "keywords": "hjólastóll aðgengi staðir finna leita merkja",
      "search": "Leita",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "Blogg",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "Athugasemdir",
      "home": "Byrja",
      "how_to_add_a_place": "Hvernig bæti ég við stöðum?",
      "imprint": "Upplýsingar",
      "logged_in_as": "Innskráður sem:",
      "login": "Innskráning",
      "logout": "Útskráning",
      "map": "Map",
      "newsletter": "Newsletter",
      "press": "Press",
      "profile": "Prófílnum",
      "projects": "Projects",
      "suggestions": "Uppástungur",
      "what_is_barrier_free": "Hvað þýðir \"hjólastólaaðgengilegt\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Bæta við öðrum stað",
      "find": "finna",
      "placeholder": "t.d. Árbæjarsafn eða Ráðhús Reykjavíkur",
      "title_add_place": "Bæta við nýju stað á þessari staðsetningu strax!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
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
      "prompt": "Vinsamlega veldu"
    },
    "submit": {
      "create": "Búa til %{model}",
      "submit": "Vista %{model}",
      "update": "Uppfæra %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Flokkur:",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Hjólastólaaðgengilegt?"
      },
      "ie": {
        "action": {
          "ignore": "Hunsa",
          "upgrade": "Uppfæra vafra"
        },
        "warning": {
          "headline": "Afsakið!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "Okay, let’s go!",
        "categories": "Filter places by categories",
        "filter": "Filter places by wheelchair accessibility",
        "headline": "Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It’s easy:",
        "lookup": "Search for a specific place",
        "secondary_headline": "Our traffic light system to mark the wheelchair accessibility of public places:"
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Not wheelchair accessible",
          "save": "vista",
          "unknown": "Unknown status",
          "yes": "Hjólastólaaðgengi"
        },
        "help": "Hjólastólaaðgengilegt? (Hjálp)",
        "more": "meiri ..."
      }
    }
  },
  "how?": "How?",
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
          "headline": "All %{type} in %{city} with unknown wheelchair status (%{count})"
        },
        "yes": {
          "headline": "All wheelchair accessible %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Verkefni unnið af Sozialhelden.de"
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
      "city": "%{city} %{postcode} ",
      "street": "%{housenumber} %{street} "
    },
    "tags": {
      "phone": "Sími:",
      "website": "Vefsíða:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Úps, innleggið þitt var annaðhvort rangt eða ekki klárað",
        "successfull": "Takk fyrir, innleggið þitt er vistað og mun birtast innan skamms"
      }
    },
    "edit": {
      "header": {
        "title": "Breyta stað: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Hætta við"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Afsakið, auðkenning mistókst",
      "not_available": "Afsakið, þessu síða er tímabundið niðri.",
      "not_existent": "Afsakið, þessi staður er ekki til lengur.",
      "not_found": "Afsakið, síða ekki fundin.",
      "param_missing": "Skrifaðu niður leitarorð"
    },
    "flash": {
      "authorize_wheelmap": "Þú þarft OpenStreetMap aðgang til að breyta gögnum"
    },
    "new": {
      "form": {
        "legend": "Location of the place",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Address",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contact",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and category",
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
        "title": "Nýr staður | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Hætta við"
      }
    },
    "node": {
      "link": {
        "claim": "Do you work here?",
        "edit_node": "Breyta stað",
        "report_bug": "Tilkynntu villu"
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Details",
      "edit": "Edit"
    },
    "node_map": {
      "map": "Map:"
    },
    "node_note": {
      "comment": "Comment:"
    },
    "node_photos": {
      "add": "Add",
      "photos_of_this_place": "Photos of this place:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Wheelchair accessible toilet:",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Wheelchair accessibility:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Staður: %{node} | wheelmap.org"
      },
      "link": {
        "back": "back",
        "large_map": "Stækka",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Tölvupóstfang",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Úps, innleggið þitt var rangt eða ekki klárað.",
        "successfull": "Takk fyrir, innleggið þitt hefur verið vistað og verður birt innan skamms"
      }
    },
    "update_wheelchair": {
      "successfull": "Staðan fyrir \"%{name}\" hefur verið breytt í \"%{status} hjólastólaaðgengilegt\" og verður virkt innan skamms"
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u %n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "kr."
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
          "billion": "Billjón",
          "million": "Milljón",
          "quadrillion": "Skrilljón",
          "thousand": "Þúsund",
          "trillion": "Trilljón",
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
            "one": "bæti",
            "other": "bæti"
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
  "or": "eða",
  "place": {
    "one": "%{count} staður",
    "other": "%{count} staðir"
  },
  "poi": {
    "category": {
      "accommodation": "Gisting",
      "education": "Menntun",
      "food": "Matur",
      "government": "Opinberar stofnanir",
      "health": "Health",
      "leisure": "Frístundir",
      "misc": "Miscellaneous",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Verslun",
      "sport": "Íþróttir",
      "tourism": "Ferðamennska",
      "unknown": "Ekki vitað"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandarhótel",
        "bed_and_breakfast": "Hótel með morgunmat",
        "camp_site": "Tjaldsvæði",
        "caravan_site": "Tjaldsvæði fyrir hjólhýsi",
        "chalet": "Kofar",
        "dormitory": "Dormitory",
        "guest_house": "Gistihús",
        "hostel": "Hostel",
        "hotel": "Hótel",
        "motel": "Mótel"
      },
      "education": {
        "college": "Menntaskóli",
        "driving_school": "Driving school",
        "kindergarten": "Leikskóli",
        "library": "Bókasafn",
        "museum": "Safn",
        "school": "Skóli",
        "university": "Háskóli"
      },
      "food": {
        "bar": "Skemmtistaður",
        "biergarten": "Bjórgarður",
        "cafe": "Kaffihús",
        "drinking_water": "Drykkjarvatn",
        "fast_food": "Skyndibiti",
        "ice_cream": "Ice cream parlour",
        "pub": "Pöbb",
        "restaurant": "Veitingahús"
      },
      "government": {
        "courthouse": "Réttarhús",
        "embassy": "Sendiráð",
        "government": "Government agency",
        "police": "Police",
        "public_building": "Opinber bygging",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Hearing aid dealer",
        "hospital": "Spítali",
        "medical_supply": "Medical supplies",
        "pharmacy": "Apótek",
        "social_facility": "Social facility",
        "veterinary": "Dýralæknir"
      },
      "leisure": {
        "arena": "Svæði",
        "brothel": "Brothel",
        "casino": "Casino",
        "cinema": "Bíóhús",
        "community_centre": "Community centre",
        "gallery": "Listasöfn",
        "nightclub": "Næturklúbbur",
        "playground": "Playground",
        "sauna": "Gufubað",
        "stripclub": "Stripclub",
        "theatre": "Leikhús",
        "zoo": "Dýragarður"
      },
      "misc": {
        "company": "Company (Office)",
        "estate_agent": "Real estate agent",
        "insurance": "Insurance",
        "lawyer": "Lawyer",
        "place_of_worship": "Bænahús",
        "toilets": "Klósett"
      },
      "money_post": {
        "atm": "Hraðbanki",
        "bank": "Banki",
        "bureau_de_change": "Skiptimynt",
        "post_box": "Pósthólf",
        "post_office": "Póstur"
      },
      "public_transfer": {
        "aerodrome": "Flugvöllur",
        "bicycle_parking": "Reiðhjólastæði",
        "bicycle_rental": "Reiðhjólaleiga",
        "boatyard": "Boat yard",
        "bus_station": "Rútustöð",
        "bus_stop": "Strætó",
        "cable_car": "Dráttarbílar",
        "car_rental": "Bílaleiga",
        "car_sharing": "Deila bíl",
        "chair_lift": "Skíðalyfta",
        "ferry": "Ferja",
        "ferry_terminal": "Biðstöð fyrir ferju",
        "fuel": "Bensínstöð",
        "halt": "Biðstöð",
        "light_rail": "Innanbæjarlest",
        "parking": "Bílastæði",
        "parking_aisle": "Bílastæðaröð",
        "platform": "Stæði",
        "station": "Neðanjarðarlest",
        "subway_entrance": "Inngangur að neðanjarðarlest",
        "terminal": "Biðstöð á flugvelli",
        "tram_stop": "Lestavagnastopp"
      },
      "shopping": {
        "alcohol": "Áfengi",
        "bakery": "Bakarí",
        "beauty": "Beauty salon",
        "beverages": "Drykkir",
        "bicycle": "Hjólreiðaverslun",
        "books": "Bækur",
        "butcher": "Slátrari",
        "car_repair": "Car repair",
        "car_shop": "Car shop",
        "chemist": "Chemist / Drugstore",
        "clothes": "Föt",
        "computer": "Tölvur",
        "confectionery": "Candy store",
        "convenience": "Þægindi",
        "deli": "Delicatessen",
        "department_store": "Sérvöruverslun",
        "doityourself": "Sjálfshjálparverslun",
        "dry_cleaning": "Efnalaug",
        "electronics": "Raftæki",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "Blómabúð",
        "furniture": "Húsgögn",
        "garden_centre": "Garden centre",
        "gift": "Gift shop",
        "hairdresser": "Hársnyrting",
        "hardware": "Byggingavörur",
        "jewelry": "Jewelry",
        "kiosk": "Söluturn",
        "laundry": "Þvottahús",
        "mall": "Verslunarkeðjur",
        "optician": "Gleraugnaverslun",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "Photo",
        "second_hand": "Second hand",
        "shoes": "Skór",
        "sports": "Sports",
        "stationery": "Stationery",
        "supermarket": "Matarverslun",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "video": "Video rental store"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "Íþróttabúð",
        "stadium": "Íþróttavellir",
        "swimming": "Sund",
        "swimming_pool": "Sundlaug"
      },
      "tourism": {
        "archaeological_site": "Fornleifastaður",
        "arts_centre": "Listamiðstöðvar",
        "artwork": "List",
        "attraction": "Merkilegt að sjá",
        "battlefield": "Stríðssvæði",
        "beach": "Strönd",
        "beacon": "Viti",
        "castle": "Kastali",
        "cave_entrance": "Hella inngangur",
        "information": "Upplýsingar fyrir ferðamenn",
        "memorial": "Minnisvarði",
        "theme_park": "Þemagarður",
        "tower": "Turn",
        "viewpoint": "Útsýnispallur"
      },
      "unknown": {
        "unknown": "Ekki vitað"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Staða: tengdur",
          "grant": "Tengjast núna",
          "not_connected": "Staða: ekki tengdur",
          "revoke": "Aftengjast"
        }
      },
      "headline": "Breyttu prófílnum þínum"
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
          "example": "<strong>Example:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Please provide more <strong>address details</strong>.",
          "intro": "Try this:",
          "spell_check": "Check the <strong>spelling</strong> of your input."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "Leita að \"%{q}\" ",
        "not_found": "Engir staðir fundust!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "Byrja",
    "step1": "Click on a place you know",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Tölfræðilegar upplýsingar",
  "support": {
    "array": {
      "last_word_connector": " og ",
      "sentence_connector": "og",
      "two_words_connector": " og ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Vinsamlegast veldu"
    }
  },
  "time": {
    "am": "fyrir hádegi",
    "formats": {
      "default": "%A %e. %B %Y kl. %H:%M",
      "long": "%A %e. %B %Y kl. %H:%M",
      "short": "%e. %B kl. %H:%M"
    },
    "pm": "eftir hádegi"
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
        "notice": "Aðgangurinn þinn er virkur!"
      },
      "error": {
        "notice": "Tölvupóstur og lykilorð stemma ekki."
      },
      "notice": "Þú ert inni!"
    },
    "destroy": {
      "notice": "Bless, komdu aftur fljótlega!"
    },
    "new": {
      "email": "Email address",
      "login": "Innskráning",
      "login_with_twitter": "Innskráning með Twitter",
      "password": "Lykilorð",
      "remember_me": "Vera innskráður"
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
          "user_data": "Your account information"
        },
        "title": "Prófílnum"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Photos"
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
          "settings": "Settings"
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
    "no": "Not wheelchair accessible",
    "unknown": "Unknown status",
    "yes": "Hjólastólaaðgengi"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Main supporter"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Náðu í iPhone forritið núna!"
    },
    "logo": {
      "alt": "Wheelmap Logo - Finndu hjólastólaaðgengilega staði",
      "title": "Wheelmap - Finndu hjólastólaaðgengilega staði"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Next &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
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
    "previous_label": "&#8592; Previous"
  }
});
