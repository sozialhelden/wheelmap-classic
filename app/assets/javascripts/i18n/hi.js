I18n.translations || (I18n.translations = {});
I18n.translations["hi"] = I18n.extend((I18n.translations["hi"] || {}), {
  "actions": {
    "cancel": "Cancel",
    "next": "Next",
    "save": "सेव, बचाएं",
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
        "first_name": "दीया हुआ नाम ",
        "last_name": "उपनाम, सरनेम, कुलनाम",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "स्वीकार किया जाना जरूरी",
        "blank": "खाली नहीं रह सकता है",
        "confirmation": "पुष्टिकरण मेल नहीं खाता",
        "empty": "रिक्त नहीं रह सकता है",
        "equal_to": "%{count} के लिए बराबर होना चाहिए",
        "even": "सम होना चाहिए",
        "exclusion": "आरक्षित है",
        "greater_than": "%{count} से अधिक होना चाहिए",
        "greater_than_or_equal_to": "%{count} से बड़ा या बराबर होना आवश्यक है",
        "inclusion": "सूची में शामिल नहीं है",
        "invalid": "अवैध है",
        "less_than": "%{count} से कम होना चाहिए",
        "less_than_or_equal_to": "%{count} से कम या बराबर होना आवश्यक है",
        "not_a_number": "कोई संख्या नहीं है",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "विसम होना चाहिए",
        "record_invalid": "सत्यापन विफल: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "पहले ही ले लिया गया है",
        "too_long": "अत्यधिक लंबा है (अधिकतम %{count} वर्ण हैं)",
        "too_short": "अत्यधिक छोटा है (न्यूनतम %{count} वर्ण हैं)",
        "wrong_length": "गलत लंबाई है (%{count} वर्ण युक्त होना चाहिए)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "अगर पासवर्ड दिया है तो रिक्त नहीं छोड़ सकते"
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
          "email": "ईमेल का पता",
          "password": "पायवर्ड",
          "remember_me": "लॅाग इन रहिए"
        }
      },
      "template": {
        "body": "निम्नलिखित क्षेत्रों के साथ समस्या थी:",
        "header": {
          "one": "इस %{model} को सहेजे जाना एक त्रुटि के कारण नहीं हुआ",
          "other": "इस %{model} को सहेजे जाना %{count} त्रुटि के कारण नहीं हुआ"
        }
      }
    },
    "models": {
      "user": "यूज़र, इस्तेमाल करने वाला"
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
      "notice": "आप पहले से ही लॅाग इन हैं..."
    },
    "require_user": {
      "notice": "इस पेज को देखने के लिए लॅाग इन करें"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "जगह संपादित करें, जगह बदलें"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "बंद",
    "skip": "स्किप"
  },
  "date": {
    "abbr_day_names": [
      "रवि",
      "सोम",
      "मंगल",
      "बुध",
      "गुरु",
      "शुक्र",
      "शनि"
    ],
    "abbr_month_names": [
      null,
      "जन",
      "फर",
      "मार्च",
      "अप्रै",
      "मई",
      "जून",
      "जुला",
      "अग",
      "सितं",
      "अक्टू",
      "नवं",
      "दिस"
    ],
    "day_names": [
      "रविवार",
      "सोमवार",
      "मंगलवार",
      "बुधवार",
      "गुरुवार",
      "शुक्रवार",
      "शनिवार"
    ],
    "formats": {
      "default": "%d-%m-%Y",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "जनवरी",
      "फरवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर"
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
        "one": "लगभग एक घंटा",
        "other": "लगभग %{count} घंटा"
      },
      "about_x_months": {
        "one": "लगभग 1 महीना",
        "other": "लगभग %{count} महीना"
      },
      "about_x_years": {
        "one": "लगभग 1 साल",
        "other": "लगभग %{count} साल"
      },
      "almost_x_years": {
        "one": "लगभग एक साल",
        "other": "लगभग %{count} साल"
      },
      "half_a_minute": "एक आधा मिनट",
      "less_than_x_minutes": {
        "one": "एक मिनट से कम",
        "other": "%{count} मिनट से कम"
      },
      "less_than_x_seconds": {
        "one": "एक सेकेंड से कम",
        "other": "%{count}  सेकेंड से कम"
      },
      "over_x_years": {
        "one": "एक साल के ऊपर",
        "other": "%{count} साल से अधिक"
      },
      "x_days": {
        "one": "एक दिन",
        "other": "%{count} दिन"
      },
      "x_minutes": {
        "one": "एक मिनट",
        "other": "%{count} मिनट"
      },
      "x_months": {
        "one": "एक महीना",
        "other": "%{count} महीना"
      },
      "x_seconds": {
        "one": "एक सेकेंड",
        "other": "%{count} सेकेंड"
      }
    },
    "prompts": {
      "day": "दिन",
      "hour": "घंटा",
      "minute": "मिनट",
      "month": "माह",
      "second": "सेकेंड",
      "year": "वर्ष"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "आपके ईमेल की पुष्टी हुई",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "कुछ ही पलों में आपको आपके ईमेल के पुष्टीकरण की ईमेल लिंक सहित मिलेगी ",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "क्या आप सुनिश्चित हैं?\n",
      "headline": "Delete account",
      "link": "अभी डिलीट करें"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "हाल का पासवर्ड<i>(आपके बदलावों की पुष्टि करनी है)</i>",
          "email": "ईमेल",
          "password": "पासवर्ड<i>(अगर नहीं बदलना तो खाली छोड़ें)</i>",
          "password_confirmation": "पासवर्ड दोहराएं"
        },
        "submit": "बदलाव सेव करें"
      },
      "headline": "खाता संपादित कीजिए"
    },
    "failure": {
      "already_authenticated": "आप पहले से ही साइन इन हैं। ",
      "inactive": "Your account has not been activated yet.",
      "invalid": "ईमेल या पासवर्ड अमान्य",
      "invalid_token": "अमान्य प्रमाणीकरण टोकन",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "आपका खाता बंद है",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "आगे बढ़ने से पहले साइन इन या साइन अप करें",
      "unconfirmed": "आगे बढ़ने से पहले अपने खाते की पुष्टी कीजिए"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "खाता खोलने के लिए एक और कदम"
      },
      "reset_password_instructions": {
        "subject": "निर्देश दोबारा रीसेट कीजिए"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "ज़रूरी",
    "omniauth_callbacks": {
      "failure": " %{kind} के साथ प्राधिकरण असफल रहा। एररः \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "%{kind} के साथ सफलतापुर्वक सॅाग इन।"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "ईमेल"
        },
        "submit": "पासवर्ड बदलें"
      },
      "headline": "पासवर्ड भूल गए?"
    },
    "password_reset": {
      "email": {
        "comment": "अगर आपने पासवर्ड रीसेट की अर्ज़ी नहीं दी है तो इस ईमेल को नज़अंदाज़ करें।<br/>आपका पासवर्ड तब तक नहीं बदलेगा जब तक आप ऊपर दिए लिंक को क्लिक करके नया पासवर्ड नहीं बनाते। ",
        "headline": "स्वागत %{email}",
        "link": "मेरा पासवर्ड बदलें",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "नया पासवर्ड",
          "password_confirmation": "पासवर्ड दोहराइए"
        },
        "submit": "नया पासवर्ड बनाएं"
      },
      "headline": "पासवर्ड बदलें"
    },
    "passwords": {
      "link": "पासवर्ड भूल गए?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "पासवर्ड सफलतापूर्वक बदला गया, अब आप लॅाग इन हैं। ",
      "updated_not_active": "पासवर्ड सफलतापूर्वक बदला गया"
    },
    "registrations": {
      "destroyed": "टाटा! आपका खाता सफलतापूर्वक कैंसिल \nहुआ। फिर मिलेंगे। ",
      "inactive_signed_up": "आपका साइन इन सफल रहा लेकिन हम आपको लॅाग इन नहीं कर पाए। वजह: \"%{reason}\"",
      "link": "साइन अप",
      "reasons": {
        "inactive": "निष्क्रिय\n",
        "locked": "तालाबंद, बंद",
        "unconfirmed": "अपुष्ट"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "आपने अपना खाता सफलतापूर्वक\nअपडेट कर लिया है।"
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "अमान्य ईमेल या पासवर्ड",
      "invalid_token": "अवैध प्रमाणीकरण टोकन",
      "link": "साइन इन",
      "locked": "आपका खाता तालाबंद है",
      "new": {
        "no_osm_account": "ओपनस्ट्रीटमैप खाता नहीं है?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "आपके समर्थन के लिए धन्यवाद!",
        "sign_in_with": " %{kind} के साथ लॅाग इन करें",
        "sign_up_with_osm": "अब रेजिस्टर करें",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "लॅाग इन सफल रहा ",
      "signed_out": "आपका साइन आउट सफल रहा। ",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "आगे बढ़ने से पहले आपको साइन इन या साइन अप करना पड़ेगा",
      "unconfirmed": "आगे बढ़ने से पहले खाते की पुष्टी कीजिए "
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "ईमेल",
          "password": "पासवर्ड",
          "remember_me": "लॅाग इन रहें?"
        },
        "submit": "लॅाग इन"
      },
      "headline": "लॅाग इन"
    },
    "sign_out": {
      "headline": "लॅाग आउट"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "मेरे खाते की पुष्टी करें",
        "please_confirm": "अपने खाता का पुष्टीकरण नीचे दिए लिंक के ज़रिए कीजिए ",
        "welcome": "स्वागत %{email}!"
      },
      "form": {
        "labels": {
          "email": "ईमेल",
          "password": "पासवर्ड",
          "password_confirmation": "पासवर्ड दोहराइए",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "साइन अप "
      },
      "headline": "साइन अप"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "आपका अकाउँट खुल गया है। आप साइंड \nइन हैं।  "
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "पुष्टी पहले ही हो चुकी है ",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "पुष्टिकरण मेल नहीं खाता",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "%{count} के लिए बराबर होना चाहिए",
      "even": "must be an even number",
      "exclusion": "आरक्षित है",
      "expired": "समय सीमा समाप्त, कृपया नए के लिए अनुरोध कीजिए, \nएक्स्पायर्ड, कृपया नए के लिए अर्जी कीजिए। ",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "%{count} से अधिक होना चाहिए",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "सूची में शामिल नहीं है",
      "invalid": "अवैध है",
      "less_than": "%{count} से कम होना चाहिए",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "कोई संख्या नहीं है",
      "not_an_integer": "एक पूर्णांक होना चाहिए",
      "not_found": "नहीं मिला",
      "not_locked": "बंद नहीं था",
      "not_saved": {
        "one": "एक गलती/त्रुटी की वजह से सेव हई हुआ %{resource}:",
        "other": "%{resource} सेव करने के लिए %{count} ग़लतियां मान्य नहीं "
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "पहले ही ले लिया गया है",
      "too_long": "अत्यधिक लंबा है (अधिकतम %{count} वर्ण हैं)",
      "too_short": "अत्यधिक छोटा है (न्यूनतम %{count} वर्ण हैं)",
      "wrong_length": "गलत लंबाई है (%{count} वर्ण युक्त होना चाहिए)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "निम्नलिखित क्षेत्रों के साथ समस्या थी:",
      "header": {
        "one": "इस %{model} को सहेजे जाना एक त्रुटि के कारण नहीं हुआ",
        "other": "इस %{model} को सहेजे जाना %{count} त्रुटि के कारण नहीं हुआ"
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
        "notice": "%{resource_name} सफलतापूर्वक बना"
      },
      "destroy": {
        "alert": "%{resource_name} हटाया नहीं जा सका",
        "notice": "%{resource_name} सफलतापूर्वक हटाया गया"
      },
      "update": {
        "notice": "%{resource_name} सफलतापूर्वक अपडेट हुआ"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "व्हीलचेयर सुलभ ",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Not wheelchair accessible"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "मार्कर को नक्शे पर हिलाकर सही जगह पर लगाएं ",
      "osm_username": "अभी सदस्य नहीं हैं? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a>",
      "password": "(अगर बदलना नहीं है तो खाली छोड़िए)",
      "phone": "For example: +49 30 12345678",
      "website": "जैसे कि: http://www.example.com"
    },
    "labels": {
      "category": "श्रेणी",
      "centralkey": "मुख्य चाबी, सेंट्रल की",
      "city": "शहर:",
      "create": "Create a place",
      "email": "ईमेल",
      "finish": "खत्म, समाप्त, अंत",
      "housenumber": "नहीं:",
      "lat": "अक्षांश",
      "lon": "देशांतर रेखा",
      "name": "नाम:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "पासवर्ड",
      "password_confirmation": "पासवर्ड दोहराएं",
      "phone": "दूरभाष, टेलीफोन",
      "postcode": "पिन कोड",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "रीसेट करें",
      "save": "सेव, बचाएं",
      "street": "गली",
      "terms": "I accept the terms of use.",
      "type": "Type:",
      "website": "वेबसाइट",
      "wheelchair": "व्हीलचेयर के लिए बाधा रहित,\nव्हीलचेयर सुलभ",
      "wheelchair_description": "शारीरिक रूप से विकलांग लोगों के लिए सुविधाओं के बारे में टिप्पणीः ",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "बुनियादी डेटा",
      "optional": "अधिक जानकारी <span class=\"addition\">(सभी क्षेत्र वैकल्पिक हैं)</span>"
    }
  },
  "global": {
    "form_validation_error": "नीचे दीं त्रुटियों को नोट कीजिए"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "होम पेज, मुख्य पृष्ठ\n",
      "keywords": "व्हीलचेयर सुलभ जगहों के लिए खोज का निशान",
      "search": "खोजें, ढूंढें",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "ब्लॅाग",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "राय, प्रतिक्रिया, फीडबैक ",
      "home": "शुरू करें, प्रारंभ",
      "how_to_add_a_place": "और स्थान कैसे जोड़े जाएं?",
      "imprint": "छाप",
      "logged_in_as": "... के तौर पर लॅाग इन हैं। ",
      "login": "लॅाग इन ",
      "logout": "लॅाग आउट ",
      "map": "Map",
      "newsletter": "न्यूज़लैटर, संदेश पत्र, सामाचार पत्र ",
      "press": "दबाएं",
      "profile": "Profile",
      "projects": "Projects",
      "suggestions": "सुझाव\n",
      "what_is_barrier_free": "\"व्हीलचेयर सुलभ\" का मतलब क्या है?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "कोई और जगह शामिल करें",
      "find": "ढूंढो",
      "placeholder": "Search for a place",
      "title_add_place": "इस स्थान पर नई जगह अंकित करें!"
    },
    "tagline": "वहीलमैप का लोगो, वहीलमैप का चिन्ह",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "कुल <b>%{total} में से %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> प्रदर्शित"
      },
      "one_page": {
        "display_entries": {
          "one": "दर्शित <b>%{count}</b> %{entry_name}",
          "other": "प्रदर्शित <b>%{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "कृपया चुनें"
    },
    "submit": {
      "create": "%{model} बनाएँ",
      "submit": "%{model} सौंपें",
      "update": "%{model} अद्यतन"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "श्रेणी चुनिए ",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "व्हीलचेयर सुलभ?"
      },
      "ie": {
        "action": {
          "ignore": "उपेक्षा, ध्यान न दें",
          "upgrade": "ब्राउसर अपडेट करें"
        },
        "warning": {
          "headline": "माफ कीजिए!",
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
          "save": "अपडेट, नया ताजा",
          "unknown": "Unknown status",
          "yes": "व्हीलचेयर सुलभ "
        },
        "help": "व्हीलचेयर सुलभ",
        "more": "और भी..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "कैसे",
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
          "headline": "सभी %{type} इन %{city} में व्हीलचेयर के लिए बाधा रहित रास्ते होने की जानकारी नहीं है।  (%{count})"
        },
        "yes": {
          "headline": " %{city} (%{count}) में %{type} सभी व्हीलचेयर सुलभ स्थान "
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "यह प्रोजेक्ट Sozialhelden.de द्वारा किया गया है। "
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
      "phone": "फोन, दूर्भाष",
      "website": "वेबसाइट:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "अरे! इनपुट ग़लत या अधूरा था",
        "successfull": "धन्यवाद, आपका सबमिशन सफलतापूर्वक सेव हुआ और जल्द ही अॅानलाइन होगा। "
      }
    },
    "edit": {
      "header": {
        "title": "जगह संपादित करें: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "माफ कीजिए, पुष्टीकरण असफल रहा",
      "not_available": "माफ कीजिए, यह पेज अस्थाई रूप से उपलब्ध\nनहीं है",
      "not_existent": "माफ कीजिए, यह जगह अब उपलब्ध नहीं है। ",
      "not_found": "माफ़ कीजिए, पेज नहीं मिला।",
      "param_missing": "खोज के लिए शब्द दें"
    },
    "flash": {
      "authorize_wheelmap": "डेटा बदलने के लिए आपको ओपनस्ट्रीटमैप\nखाता चाहिए"
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
        "title": "नई जगह । wheelmp.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "node": {
      "link": {
        "claim": "आप यहां काम करते हैं?",
        "edit_node": "जगह संपादित कीजिए",
        "report_bug": "समस्या की रिपोर्ट कीजिए"
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
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
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
        "title": "जगह: %{node} | wheelmap.org"
      },
      "link": {
        "back": "वापस, पीछे",
        "large_map": "बड़ा करें",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "ईमेल",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "ओपनस्ट्रीटमैप"
    },
    "update": {
      "flash": {
        "not_successfull": "अरे! आपका इनपुट गलत या अधूरा था",
        "successfull": "धन्यवाद, आपका सबमिशन सफलतापूर्वक सेव हुआ और कुछ ही देर में अॅानलाइन होगा। "
      }
    },
    "update_wheelchair": {
      "successfull": "इस \"%{name}\" कि स्थिति बदलकर \"%{status}\" कर दी गई है और जल्द ही अॅानलाइन होगी।"
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
        "unit": "₹"
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
          "billion": "अरब",
          "million": "दस करोड़",
          "quadrillion": "करोड़ शंख",
          "thousand": "हज़ार",
          "trillion": "खरब",
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
  "or": "या , अथवा",
  "place": {
    "one": "%{count} जगह",
    "other": "%{count} जगह"
  },
  "poi": {
    "category": {
      "accommodation": "रहने की जगह",
      "education": "शिक्षा, विद्या, पढ़ाई",
      "food": "खाना, भोजन",
      "government": "सरकार",
      "health": "स्वास्थ",
      "leisure": "अवकाश, मस्ती",
      "misc": "Miscellaneous",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "शॅापिंग, खरीददारी",
      "sport": "खेल",
      "tourism": "पर्यटन",
      "unknown": "अज्ञात"
    },
    "name": {
      "accommodation": {
        "beach_resort": "समुद्र तट पर होटल, बीच पर होटल",
        "bed_and_breakfast": "बेड एंड ब्रेकफ़ास्ट, रहने की व्यवस्था और नाश्ता भी",
        "camp_site": "कैंप स्थल, शिविर स्थल",
        "caravan_site": "कारवां स्थल",
        "chalet": "Chalet",
        "dormitory": "Dormitory",
        "guest_house": "गेस्ट हाउस, अतिथि आराम ग्रह",
        "hostel": "छात्रावास, हॅास्टल",
        "hotel": "होटल, आराम ग्रह",
        "motel": "मोटेल"
      },
      "education": {
        "college": "कॅालेज",
        "driving_school": "Driving school",
        "kindergarten": "बालवाड़ी",
        "library": "पुस्तकालय",
        "museum": "संग्रहालय",
        "school": "पाठशाला, विद्यालय, स्कूल",
        "university": "विश्वविद्यालय"
      },
      "food": {
        "bar": "मदिरालय, बार, मैखाना",
        "biergarten": "बियर उद्यान",
        "cafe": "कैफे",
        "drinking_water": "पीने का पानी",
        "fast_food": "फास्ट फूड",
        "ice_cream": "Ice cream parlour",
        "pub": "पब",
        "restaurant": "रेस्तरां, रेस्टोरेंट"
      },
      "government": {
        "courthouse": "अदालत",
        "embassy": "दूतावास",
        "employment_agency": "Employment agency",
        "government": "Government agency",
        "police": "पुलिस",
        "public_building": "सार्वजनिक बिल्डिंग",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "हियरिंग एड डीलर,\nसुनने वाली मशीन के डीलर",
        "hospital": "अस्पताल",
        "medical_supply": "चिकित्सा का सामान",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "दवाई की दुकान",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "सार्वजनिक सुविधा",
        "speech_therapist": "Speech therapist",
        "veterinary": "जानवरों का डॅाक्टर"
      },
      "leisure": {
        "arena": "अखाड़ा, मैदान",
        "brothel": "रण्डी खाना, कोठा,",
        "casino": "Casino",
        "cinema": "सिनेमा,",
        "community_centre": "Community centre",
        "gallery": "गैलरी",
        "massage": "Massage spa",
        "nightclub": "नाइटक्लब",
        "playground": "खेल का मैदान",
        "sauna": "सॅाना",
        "stripclub": "स्ट्रिपक्लब",
        "tattoo": "Tattoo shop",
        "theatre": "थिएटर",
        "zoo": "चिड़ियाघर"
      },
      "misc": {
        "association": "Association",
        "company": "कंपनी (दफ्तर)",
        "estate_agent": "Real estate agent",
        "insurance": "Insurance",
        "lawyer": "वकील",
        "ngo": "Non-government organisation",
        "place_of_worship": "प्रार्थना की जगह",
        "political_party": "Political party office",
        "toilets": "शौचालय, संडास"
      },
      "money_post": {
        "atm": "एटीएम",
        "bank": "बैंक",
        "bureau_de_change": "मुद्रा विनिमय, मुद्रा बदलने की जगह",
        "post_box": "पोस्ट बॅाक्स",
        "post_office": "पोस्ट अॅाफिस"
      },
      "public_transfer": {
        "aerodrome": "हवाई अड्डा",
        "bicycle_parking": "साइकिल पार्किंग",
        "bicycle_rental": "साइकल किराए पर",
        "boatyard": "Boat yard",
        "bus_station": "बस अड्डा",
        "bus_stop": "बस स्टॅाप",
        "cable_car": "केबल कार",
        "car_rental": "कार किराए पर",
        "car_sharing": "साझा कार",
        "chair_lift": "चेयर लिफ्ट",
        "ferry": "नौका, नाव",
        "ferry_terminal": "नौका टर्मिनल",
        "fuel": "पेट्रोलपंप",
        "halt": "रुको",
        "light_rail": "Light rail",
        "parking": "पार्किंग",
        "parking_aisle": "पार्किंग आइल",
        "platform": "प्लैटफॅार्म",
        "station": "सबवे",
        "subway_entrance": "सबवे प्रवेश",
        "terminal": "हवाई अड्डा",
        "tram_stop": "ट्राम स्टौप"
      },
      "shopping": {
        "alcohol": "शराब",
        "bakery": "बेकरी",
        "beauty": "Beauty salon",
        "beverages": "पेय",
        "bicycle": " सायकल की दुकान",
        "books": "किताबें, पुस्तकें",
        "butcher": "कसाई",
        "car_repair": "कार की मरम्मत",
        "car_shop": " कार की दुकान",
        "chemist": "Chemist / Drugstore",
        "clothes": "कपड़े, वस्त्र",
        "computer": "कंप्यूटर",
        "confectionery": "Candy store",
        "convenience": "सुविधा",
        "deli": "Delicatessen",
        "department_store": "डिपार्टमेंट स्टोर",
        "doityourself": "खुद कीजिए",
        "dry_cleaning": "ड्राई क्लीनिंग",
        "electronics": "इलेक्ट्रॅानिक्स",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "फूलों की दुकान",
        "furniture": "फर्नीचर",
        "garden_centre": "Garden centre",
        "gift": "Gift shop",
        "hairdresser": "नाई",
        "hardware": "हार्डवेयर",
        "jewelry": "Jewelry",
        "kiosk": "गुमटी, गाडा, खोमचा",
        "laundry": "धोबी",
        "mall": "शॅापिंग सेंटर",
        "optician": "चश्मा बनाने वाला, ऐनक बनाने वाला",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "फोटो, तसवीर",
        "second_hand": "इस्तेमाल किया हुआ",
        "shoes": "जूते",
        "sports": "खेल",
        "stationery": "स्टेश्नरी, लिखने का सामान",
        "supermarket": "सुपरमार्किट",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "video": "वीडियो किराए पर"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "स्पोर्ट सेंटर, क्रीडा केंद्र",
        "stadium": "स्टेडियम",
        "swimming": "तैराकी",
        "swimming_pool": "स्विमिंग पूल"
      },
      "tourism": {
        "archaeological_site": "पुरातत्व स्थल",
        "arts_centre": "कला केंद्र",
        "artwork": "चित्रकला",
        "attraction": "आकर्षण",
        "battlefield": "युद्धक्षेत्र, रणभूमि",
        "beach": "समुद्र तट, बीच",
        "beacon": "लाईट हाउस, प्रकाश स्तम्भ",
        "castle": "महल, किला",
        "cave_entrance": "गुफा प्रवेश ",
        "information": "पर्यटन जानकारी",
        "memorial": "स्मारक",
        "theme_park": "थीम पार्क",
        "tower": "टावर",
        "viewpoint": "दृष्टिकोण"
      },
      "unknown": {
        "unknown": "अज्ञात"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "स्थिति:कनेक्टेड",
          "grant": "अब कनेक्ट करें",
          "not_connected": "स्थिति: कनेक्टेड नहीं",
          "revoke": "डिसकनेक्ट"
        }
      },
      "headline": "अपनी रूपरेखा बदलें, अपना प्रोफाइल बदलें"
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
        "for": " \"%{q}\" की खोज",
        "not_found": "कोई जगह नहीं मिली!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} जगहें पहले ही अंकित की जा चुकी हैं। ",
    "headline": "व्हीलचेयर सुलभ जगह सभी जोड़ सकते हैं।  ",
    "start": "शुरू, शुरुआत, प्रारंभ ",
    "step1": "जानी हुई जगह पर क्लिक करें",
    "step2": "अंकित कर के सेव करें",
    "step3": "बस! रेजिस्ट्रेशन की आवश्यक्ता नहीं",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "आंकड़ें",
  "support": {
    "array": {
      "last_word_connector": "और ",
      "sentence_connector": "और",
      "two_words_connector": " और ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "कृपया चुनें"
    }
  },
  "time": {
    "am": "पूर्वाह्न",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "अपराह्न"
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
        "notice": "आपका खाता अब सक्रिय है!"
      },
      "error": {
        "notice": "ईमेल और पासवर्ड मेल नहीं खाते"
      },
      "notice": "आप अंदर पहुंच गए हैं!"
    },
    "destroy": {
      "notice": "टाटा! जल्द लैटियेगा!"
    },
    "new": {
      "email": "Email address",
      "login": "लॅाग इन ",
      "login_with_twitter": "ट्विटर से लॅाग इन करें ",
      "password": "पासवर्ड",
      "remember_me": "लॅाग इन रहें "
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "आपसे कैसे संपर्क करें? यह जानकारी\nआप बाद में भी बदल सकते हैं। "
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
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "न्यूज़लैटर, संदेश पत्र, सामाचार पत्र "
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
      "next": "अगला &rsaquo;",
      "previous": "&lsaquo; पिछला",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "Not wheelchair accessible",
    "unknown": "Unknown status",
    "yes": "व्हीलचेयर सुलभ "
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "इस प्रोजेकट के जनक ",
      "based_on": "पर आधारित",
      "become_a_supporter": "समर्थक बनिए",
      "main_supporter": "मुख्य समर्थक"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "आईफोन ऐप्लीकेशन आभी डाउनलोड करें!"
    },
    "logo": {
      "alt": "व्हीलमैप लोगो - वहीलचेयर सुलभ स्थान खोजें",
      "title": "व्हीलमैप - व्हीलचेयर सुलभ स्थान ढूंढें"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "अगला &#8594;",
    "page_entries_info": {
      "multi_page": "कुल %{count} में से %{model} %{from} - %{to} प्रदर्शित",
      "multi_page_html": "कुल  <b>%{count} में से %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>  </b> प्रदर्शित ",
      "single_page": {
        "one": "प्रदर्शित १ 1 %{model}",
        "other": "सभी %{count} %{model} दर्शित हैं। ",
        "zero": "कोई %{model} नहीं मिला"
      },
      "single_page_html": {
        "one": "दर्शित <b>1</b> %{model}",
        "other": "प्रदर्शित <b>all&nbsp;%{count}</b> %{model}",
        "zero": "कोई %{model} नहीं मिला"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; पिछला"
  }
});
