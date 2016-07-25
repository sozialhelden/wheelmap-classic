I18n.translations || (I18n.translations = {});
I18n.translations["zh_TW"] = I18n.extend((I18n.translations["zh_TW"] || {}), {
  "actions": {
    "cancel": "取消",
    "next": "",
    "save": "存檔",
    "send": "送出"
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
        "address": "地址",
        "address_city": "城市",
        "address_housenumber": "",
        "address_postcode": "郵遞區號",
        "address_street": "街道",
        "name": "名字",
        "note": "筆記",
        "phone": "電話",
        "type": "種類",
        "website": "網站"
      },
      "user": {
        "first_name": "名",
        "last_name": "姓氏",
        "privacy_policy": "隱私政策",
        "terms": "使用條款"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "必須被接受",
        "blank": "不能留白",
        "confirmation": "與確認值不符合",
        "empty": "不能留空",
        "equal_to": "必須等於 %{count}",
        "even": "必須是偶數",
        "exclusion": "已被預定",
        "greater_than": "必須大於 %{count}",
        "greater_than_or_equal_to": "必須大於等於 %{count}",
        "inclusion": "不在清單中",
        "invalid": "無效",
        "less_than": "必須少於 %{count}",
        "less_than_or_equal_to": "必須小於或等於 %{count}",
        "not_a_number": "不是數字",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "必須是奇數",
        "record_invalid": "驗證失敗: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "已被使用",
        "too_long": "太長 (最長 %{count} 個字元)",
        "too_short": "太短 (最短為 %{count} 個字元)",
        "wrong_length": "長度不符 (必須為 %{count} 個字元) "
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "若有密碼必須填寫"
            },
            "privacy_policy": {
              "accepted": "必須被接受"
            },
            "terms": {
              "accepted": "必須被接受"
            }
          }
        },
        "user_session": {
          "email": "電子郵件",
          "password": "密碼",
          "remember_me": "保持登入"
        }
      },
      "template": {
        "body": "以下欄位出現問題：",
        "header": {
          "one": "因為一個錯誤導致 %{model} 無法存檔",
          "other": "%{count} 個錯誤導致此 %{model} 存檔失敗。"
        }
      }
    },
    "models": {
      "user": "使用者"
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
      "notice": "您已經登入..."
    },
    "require_user": {
      "notice": "您必須登入才能瀏覽這個頁面。"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "編輯地點"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "關閉",
    "skip": "跳過"
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
      "confirmed": "您的 email 成功地確認了。",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "幾分鐘之後，您的將會收到電子郵件以供驗證。",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "你確定嗎？",
      "headline": "Delete account",
      "link": "現在刪除"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "目前密碼<i>(我們需要它以確認你的修改)</i>",
          "email": "電子郵件",
          "password": "密碼 <i>如果不想更動，請留空</i>",
          "password_confirmation": "確認密碼"
        },
        "submit": "儲存變更"
      },
      "headline": "編輯帳號"
    },
    "failure": {
      "already_authenticated": "您已經登入",
      "inactive": "Your account has not been activated yet.",
      "invalid": "無效的電子信箱或密碼",
      "invalid_token": "認證失敗",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "您的帳號被鎖定了",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "您必須登入或註冊帳號才能繼續",
      "unconfirmed": "您必須確認您的帳號以繼續操作。"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "再一個步驟就能啟動您的帳號。"
      },
      "reset_password_instructions": {
        "subject": "重設密碼"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* 必須的",
    "omniauth_callbacks": {
      "failure": "因為 %{reason}，所以您無法透過 %{kind} 登入。",
      "permission_missing": "You did not grant the required permission.",
      "success": "成功的透過 %{kind} 登入。"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "電子郵件"
        },
        "submit": "重設密碼"
      },
      "headline": "忘記密碼？"
    },
    "password_reset": {
      "email": {
        "comment": "如果您沒有申請重設密碼，請忽略此郵件<br/>除非點選以上連結並設定心密碼，您的密碼不會被更改。",
        "headline": "歡迎 %{email}",
        "link": "更改我的密碼",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "新密碼",
          "password_confirmation": "重複密碼"
        },
        "submit": "重設密碼"
      },
      "headline": "重設密碼"
    },
    "passwords": {
      "link": "忘記密碼？",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "您的密碼修改成功，您現在已經登入了。",
      "updated_not_active": "您已成功修改密碼。"
    },
    "registrations": {
      "destroyed": "再見！您的帳號已經成功刪除。我們希望可以很快再見到您。",
      "inactive_signed_up": "您已經註冊成功，但因為 %{reason} ，您現在尚不能登入。",
      "link": "註冊帳號",
      "reasons": {
        "inactive": "未啟動",
        "locked": "已鎖定",
        "unconfirmed": "未確認"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "您已經成功更新您的帳號。"
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "無效的 email 或密碼。",
      "invalid_token": "認證失敗",
      "link": "登入",
      "locked": "您的帳號已被凍結",
      "new": {
        "no_osm_account": "還沒有 OpenStreetMap 的帳號嗎？",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "非常感謝您的貢獻！",
        "sign_in_with": "透過 %{kind} 方式登入",
        "sign_up_with_osm": "現在就註冊。",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "成功登入",
      "signed_out": "您已經成功登出了。",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "您必須登入或註冊以繼續操作。",
      "unconfirmed": "您必須確認您的帳號以繼續操作"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "密碼",
          "remember_me": "維持登入狀態？"
        },
        "submit": "登入"
      },
      "headline": "登入"
    },
    "sign_out": {
      "headline": "登出"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "確認我的帳號",
        "please_confirm": "您可以點選下列連結以確認您的帳號：",
        "welcome": "歡迎 %{email}!"
      },
      "form": {
        "labels": {
          "email": "電子郵件",
          "password": "密碼",
          "password_confirmation": "確認密碼",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "註冊帳號"
      },
      "headline": "註冊"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "您的帳號已經成功解鎖。您現在已經登入。"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "已確認",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "與確認值不符合",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "必須確實為%{count}",
      "even": "must be an even number",
      "exclusion": "被保留",
      "expired": "已經過期，請重新申請",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "必須大於 %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "無效數值",
      "invalid": "無效",
      "less_than": "必須小於 %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "不是數字",
      "not_an_integer": "必須是整數",
      "not_found": "没有找到",
      "not_locked": "沒有被鎖定",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} 個錯誤讓儲存 %{resource} 失敗: "
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "已被使用",
      "too_long": "太長 (不能長於 %{count} 字元)",
      "too_short": "太短 (不能短於 %{count} 字元)",
      "wrong_length": "長度不符 (必須為 %{count} 個字元) "
    },
    "models": {
      "node": {
        "website": {
          "invalid": "網址無效"
        }
      }
    },
    "template": {
      "body": "以下欄位出現問題：",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} 個錯誤讓 %{model} 儲存失敗"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "",
      "1": "登入後，你可以新增/修改所有地點的細節。請點選 \"編輯\" 並在空格修改或新增資訊。",
      "2": ""
    },
    "headline": "這個地點有什麼不對嗎?",
    "questions": {
      "0": "這個標示是錯的。",
      "1": "關於這個地點的敘述不正確或有缺漏。",
      "2": "我有關於這個地點的更多資訊。"
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} 已經新增"
      },
      "destroy": {
        "alert": "%{resource_name} 不能被刪除",
        "notice": "%{resource_name} 已經成功地被刪除了"
      },
      "update": {
        "notice": "%{resource_name} 已成功更新"
      }
    },
    "photos": {
      "destroy": {
        "notice": "成功刪除圖片"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "輪椅無障礙",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "非輪椅無障礙"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "將圖示移動到地圖上正確位置",
      "osm_username": "還不是會員嗎？ <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">現在就申請 OpenStreetMap 的會員 </a>",
      "password": "(如果你不想更動，請保持空白)",
      "phone": "例如：+49 30 12345678",
      "website": "例如：http://www.example.com"
    },
    "labels": {
      "category": "分類：",
      "centralkey": "Central key:",
      "city": "城市：",
      "create": "Create a place",
      "email": "電子郵件",
      "finish": "完成",
      "housenumber": "門牌號碼：",
      "lat": "緯度",
      "lon": "經度",
      "name": "名字：",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "密碼 ",
      "password_confirmation": "重複密碼",
      "phone": "電話：",
      "postcode": "郵遞區號：",
      "privacy_policy": "我接受數據隱私協議的第1及第2段",
      "reset": "重設",
      "save": "存檔",
      "street": "街道：",
      "terms": "我接受此使用條款",
      "type": "種類：",
      "website": "網站：",
      "wheelchair": "輪椅無障礙？",
      "wheelchair_description": "無障礙說明：",
      "wheelchair_toilet": "無障礙廁所: "
    },
    "titles": {
      "basic": "基本資料",
      "optional": "更多資訊 <span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "請注意下列錯誤"
  },
  "header": {
    "meta": {
      "description": "",
      "homepage": "首頁",
      "keywords": "尋找輪椅無障礙空間的標誌",
      "search": "搜尋",
      "title": ""
    },
    "navigation": {
      "about_wheelmap": "關於 Wheelmap",
      "blog": "部落格",
      "choose_language": "選擇語言",
      "contact": "聯繫我們",
      "feedback": "回饋",
      "home": "開始",
      "how_to_add_a_place": "如何新增地點？",
      "imprint": "聯繫我們",
      "logged_in_as": "登入以",
      "login": "登入",
      "logout": "登出",
      "map": "地圖",
      "newsletter": "電子報",
      "press": "文宣",
      "profile": "檔案",
      "projects": "參與這個專案",
      "suggestions": "建議",
      "what_is_barrier_free": "「輪椅無障礙」是什麼意思？",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "新增下一個地點",
      "find": "搜尋",
      "placeholder": "例如：洛杉磯的日落大道或是柏林的布蘭登堡門",
      "title_add_place": "在這個位置新增地點"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "分類"
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
      "prompt": "請選擇"
    },
    "submit": {
      "create": "新增 %{model}",
      "submit": "儲存 %{model}",
      "update": "更新 %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "",
      "filter": {
        "category": "選擇分類",
        "deselect_all": "全部取消選擇",
        "select_all": "全部選擇",
        "wheelchair": "輪椅無障礙？"
      },
      "ie": {
        "action": {
          "ignore": "忽略",
          "upgrade": "更新瀏覽器"
        },
        "warning": {
          "headline": "我們很抱歉！",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "OK，走吧",
        "categories": "篩選地點的種類",
        "filter": "篩選地點的輪椅無障礙程度",
        "headline": "透過 Wheelmap.org 標示和尋找輪椅無障礙空間 - 全球化而免費。這並不困難：",
        "lookup": "搜尋特定地點",
        "secondary_headline": "我們以類似「紅綠燈」的方式標示公共空間的輪椅無障礙程度："
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "非輪椅無障礙",
          "save": "更新",
          "unknown": "Unknown status",
          "yes": "輪椅無障礙"
        },
        "help": "輪椅無障礙？(說明)",
        "more": "更多..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "如何？",
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
          "headline": "%{city} 的所有輪椅無障礙環境不確定的 %{type} (%{count})"
        },
        "yes": {
          "headline": "%{city} 中所有輪椅無障礙的 %{type} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "一個 Sozialhelden.de 的專案"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "選擇分類"
    },
    "node": {
      "info_edit_position": "如上述所說它的位置有出現在 Wheelmap 上，看到它的位置標記不對，你可以點 <a href=\"%{url}\"> 到開放街圖網站改變它的位置。",
      "mail": {
        "body": "(請你用英文或德文)\n\nHi Soziaheiden.\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] %{headline} 的問題"
      }
    },
    "node_type": {
      "prompt": "選擇種類"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "電話：",
      "website": "網站："
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "唉呀！您輸入的資訊不正確或不完整",
        "successfull": "謝謝，您提供的資訊已成功存檔並很快會在線上顯示。"
      }
    },
    "edit": {
      "header": {
        "title": "編輯地點：%{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; 取消"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "抱歉，認證失敗",
      "not_available": "抱歉，這個頁面暫時不能使用。",
      "not_existent": "抱歉，這個地點已經失效了",
      "not_found": "抱歉，没有找到頁面",
      "param_missing": "請輸入搜尋關鍵字"
    },
    "flash": {
      "authorize_wheelmap": "您需要一個 OpenStreetMap 帳號以修改資料"
    },
    "new": {
      "form": {
        "legend": "地點的位置",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "地址",
            "title": ""
          },
          "contact": {
            "name": "聯繫我們",
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
        "title": "新地點| wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; 取消"
      }
    },
    "node": {
      "link": {
        "claim": "您在這裡工作嗎？",
        "edit_node": "編輯地點",
        "report_bug": "回報一個問題"
      }
    },
    "node_data": {
      "address": "地址:",
      "contact_details": "聯絡方式: "
    },
    "node_edit": {
      "details": "細節",
      "edit": "編輯"
    },
    "node_map": {
      "map": "地圖:"
    },
    "node_note": {
      "comment": "註解:"
    },
    "node_photos": {
      "add": "新增",
      "photos_of_this_place": "這個地點的照片: ",
      "upload": "上傳"
    },
    "node_similar": {
      "similar": "類似的地點: %{name}"
    },
    "node_status": {
      "accessible_toilet": "無障礙廁所: ",
      "premium": "%{name} 說: 這個地點",
      "wheelchair_accessibility": "輪椅無障礙: "
    },
    "node_streetview": {
      "streetview": "街景:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "透過 Wheelmap.org 尋找輪椅無障礙的地點，或是為這些地點添加資訊和照片。",
          "title": "這個場所有登錄在 Wheelmap.org: %{name}"
        },
        "title": "地點： %{node} | wheelmap.org"
      },
      "link": {
        "back": "回上一頁",
        "large_map": "放大",
        "listing": "在 %{city} 的所有 '%{type}' ",
        "upload": "上傳圖片"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "電子郵件",
        "facebook": "Facebook",
        "text": "",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "唉呀！您輸入的資訊不正確或不完整",
        "successfull": "謝謝，您提供的資訊已成功存檔並很快會在線上顯示。"
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\"的狀態已更改為\"%{status}\"，並很快在線上顯示。"
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
          "billion": "十億",
          "million": "百萬",
          "quadrillion": "千兆",
          "thousand": "千",
          "trillion": "兆",
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
  "or": "或",
  "place": {
    "one": "%{count} place",
    "other": "%{count} 個地點"
  },
  "poi": {
    "category": {
      "accommodation": "住宿",
      "education": "教育",
      "food": "食物",
      "government": "政府",
      "health": "醫療",
      "leisure": "休閒",
      "misc": "",
      "money_post": "",
      "public_transfer": "",
      "shopping": "購物",
      "sport": "運動",
      "tourism": "觀光",
      "unknown": "未知"
    },
    "name": {
      "accommodation": {
        "beach_resort": "海灘飯店",
        "bed_and_breakfast": "住宿和早餐",
        "camp_site": "露營區",
        "caravan_site": "篷車露營地",
        "chalet": "農舍",
        "dormitory": "宿舍",
        "guest_house": "民宿",
        "hostel": "青年旅館",
        "hotel": "旅館",
        "motel": "汽車旅館"
      },
      "education": {
        "college": "學院",
        "driving_school": "駕駛訓練班",
        "kindergarten": "幼稚園",
        "library": "圖書館",
        "museum": "博物館",
        "school": "學校",
        "university": "大學"
      },
      "food": {
        "bar": "酒吧",
        "biergarten": "啤酒花園",
        "cafe": "咖啡",
        "drinking_water": "飲用水",
        "fast_food": "速食",
        "ice_cream": "冰淇淋店",
        "pub": "Pub",
        "restaurant": "餐廳"
      },
      "government": {
        "courthouse": "法院",
        "embassy": "大使館",
        "government": "政府部門",
        "police": "警察局",
        "public_building": "公共建築",
        "townhall": ""
      },
      "health": {
        "dentist": "牙醫",
        "doctors": "",
        "hearing_aids": "助聽器",
        "hospital": "醫院",
        "medical_supply": "醫療用品",
        "pharmacy": "藥局",
        "social_facility": "社會機構",
        "veterinary": "獸醫"
      },
      "leisure": {
        "arena": "巨蛋",
        "brothel": "妓院",
        "casino": "賭場",
        "cinema": "電影院",
        "community_centre": "",
        "gallery": "畫廊",
        "nightclub": "夜總會",
        "playground": "遊樂器材",
        "sauna": "桑拿",
        "stripclub": "脫衣舞店",
        "theatre": "戲院",
        "zoo": "動物園"
      },
      "misc": {
        "company": "公司行號 (辦公室)",
        "estate_agent": "房地產仲介",
        "insurance": "保險",
        "lawyer": "律師",
        "place_of_worship": "宗教場所",
        "toilets": "廁所"
      },
      "money_post": {
        "atm": "自動櫃員機",
        "bank": "銀行",
        "bureau_de_change": "換匯處",
        "post_box": "郵筒",
        "post_office": "郵局"
      },
      "public_transfer": {
        "aerodrome": "機場",
        "bicycle_parking": "自行車停車場",
        "bicycle_rental": "自行車出租",
        "boatyard": "",
        "bus_station": "公車站",
        "bus_stop": "公車站",
        "cable_car": "纜車",
        "car_rental": "租車",
        "car_sharing": "共乘",
        "chair_lift": "升降椅",
        "ferry": "渡船頭",
        "ferry_terminal": "渡船碼頭",
        "fuel": "加油站",
        "halt": "停靠站",
        "light_rail": "輕軌",
        "parking": "停車場",
        "parking_aisle": "停車場車道",
        "platform": "月台",
        "station": "火車站",
        "subway_entrance": "捷運出口",
        "terminal": "機場航廈",
        "tram_stop": "電車站"
      },
      "shopping": {
        "alcohol": "酒",
        "bakery": "烘焙坊",
        "beauty": "美容店",
        "beverages": "飲料",
        "bicycle": "自行車店",
        "books": "書店",
        "butcher": "肉店",
        "car_repair": "汽車維修",
        "car_shop": "車行",
        "chemist": "",
        "clothes": "服飾",
        "computer": "電腦店",
        "confectionery": "點心店",
        "convenience": "便利商店",
        "deli": "熟食店",
        "department_store": "百貨公司",
        "doityourself": "DIY",
        "dry_cleaning": "乾洗",
        "electronics": "電子產品",
        "fabric": "布店",
        "farm_shop": "農產品",
        "florist": "花店",
        "furniture": "家具",
        "garden_centre": "",
        "gift": "禮品店",
        "hairdresser": "髮型師",
        "hardware": "五金行",
        "jewelry": "珠寶銀樓",
        "kiosk": "書報亭",
        "laundry": "洗衣店",
        "mall": "購物中心",
        "optician": "驗光師/眼鏡行",
        "organic": "有機商店",
        "outdoor": "戶外用品",
        "pet": "寵物店",
        "photo": "相館",
        "second_hand": "二手店",
        "shoes": "鞋店",
        "sports": "運動",
        "stationery": "文具店",
        "supermarket": "超級市場",
        "toys": "玩具店",
        "travel_agency": "旅行社",
        "video": "影片出租店"
      },
      "sport": {
        "pitch": "操場",
        "sports_centre": "體育中心",
        "stadium": "體育場",
        "swimming": "游泳",
        "swimming_pool": "游泳池"
      },
      "tourism": {
        "archaeological_site": "考古遺跡",
        "arts_centre": "藝術中心",
        "artwork": "藝術品",
        "attraction": "景點",
        "battlefield": "古戰場",
        "beach": "海灘",
        "beacon": "燈塔",
        "castle": "城堡/城池",
        "cave_entrance": "洞口",
        "information": "旅客資訊站",
        "memorial": "紀念館",
        "theme_park": "主題公園",
        "tower": "塔",
        "viewpoint": "觀景台"
      },
      "unknown": {
        "unknown": "未知"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "狀態：已連結",
          "grant": "現在就連結",
          "not_connected": "狀態：未連結",
          "revoke": "中斷連結"
        }
      },
      "headline": "編輯你的個人檔案"
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
        "headline": "抱歉，我們找不到名叫 \"%{query}\" 的地點。",
        "hint": {
          "example": "<strong>範例:</strong> 英國倫敦",
          "info": "",
          "work_in_progress": ""
        },
        "try_this": {
          "address": "請提供更 <strong>詳細的地址</strong>.",
          "intro": "試試這個:",
          "spell_check": "請確認你輸入的 <strong>拼字</strong>。"
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} 個結果："
        }
      },
      "search": {
        "for": "搜尋 \"%{q}\"",
        "not_found": "没有找到地點!"
      }
    },
    "timeout": {
      "headline": "",
      "info": "我們的搜尋服務目前暫停。",
      "repeat_search": "重試搜尋"
    }
  },
  "splash": {
    "countline": "%{count} 個地點已被標記",
    "headline": "每個人都可以新增輪椅無障礙空間！",
    "start": "開始",
    "step1": "點選一個您知道的地點",
    "step2": "標示然後點選存檔",
    "step3": "就這樣！免註冊",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "統計",
  "support": {
    "array": {
      "last_word_connector": "和",
      "sentence_connector": "和",
      "two_words_connector": "和",
      "words_connector": ", "
    },
    "select": {
      "prompt": "請選擇"
    }
  },
  "time": {
    "am": "早上",
    "formats": {
      "default": "%Y - %b -%d %a %H:%M:%S %z",
      "long": "%Y - %B -%d %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "下午"
  },
  "toiletstatus": {
    "no": "沒有輪椅無障礙廁所",
    "unknown": "廁所狀態不明",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "輪椅無障礙廁所"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "您的帳號已被啟動"
      },
      "error": {
        "notice": "電子信箱和密碼不相符"
      },
      "notice": "您已登入！"
    },
    "destroy": {
      "notice": "再見，歡迎再度光臨！"
    },
    "new": {
      "email": "Email address",
      "login": "登入",
      "login_with_twitter": "透過 Twitter 登入",
      "password": "密碼",
      "remember_me": "保持登入狀態"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "我們要如何和您聯繫？您可以在之後修改您的個人檔案。"
      }
    },
    "edit": {
      "headline": {
        "your_images": "你上傳的影像"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "您的帳號資訊"
        },
        "title": "檔案"
      },
      "newsletter": {
        "label": "是，我想收到 Wheelmap 的最新訊息。",
        "text": "",
        "title": "電子報"
      },
      "photos": {
        "empty": "",
        "title": "相館"
      },
      "show": {
        "greeting": {
          "anonymously": "嗨各位",
          "personalized": "哈囉 %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "上傳 %{count} 張照片"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "新增 %{count} 個地點"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": ""
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "標記 %{count} 個地點"
          },
          "text": "你有"
        },
        "text_html": "",
        "title": "總覽"
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
          "settings": "設定"
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
      "next": "Next &rsaquo;",
      "previous": "&lsaquo; Prev",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "非輪椅無障礙",
    "unknown": "Unknown status",
    "yes": "輪椅無障礙"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "一個專案 by ",
      "based_on": "基於",
      "become_a_supporter": "成為支持者",
      "main_supporter": "主要支持者"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "現在就下載 iPhone App！"
    },
    "logo": {
      "alt": "Wheelmap logo－尋找輪椅無障礙空間",
      "title": "Wheelmap－尋找輪椅無障礙空間"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "往後 &#8594;",
    "page_entries_info": {
      "multi_page": "顯示 %{model} %{from} - %{to} ，一共有 %{count}",
      "multi_page_html": "顯示 %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>，一共有 <b>%{count}</b> ",
      "single_page": {
        "one": "顯示1 %{model}",
        "other": "顯示全部%{count} %{model}",
        "zero": "没找到%{model}"
      },
      "single_page_html": {
        "one": "顯示 <b>1</b> 個 %{model}",
        "other": "展示 <b>全部的&nbsp;%{count}</b> %{model}",
        "zero": "没找到%{model}"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; 往前"
  }
});
