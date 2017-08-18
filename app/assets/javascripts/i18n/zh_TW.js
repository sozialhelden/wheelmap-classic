I18n.translations || (I18n.translations = {});
I18n.translations["zh_TW"] = I18n.extend((I18n.translations["zh_TW"] || {}), {
  "actions": {
    "cancel": "取消",
    "next": "下一個",
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
        "address_housenumber": "門牌號碼",
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
      "create": "新增地點",
      "edit": "編輯地點"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "關閉",
    "skip": "跳過"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "寄訊息請用英文或是德文。",
        "flash_after_submit": "謝謝你聯絡我們，我們的客服團隊會儘快回應。",
        "header_text_html": "請先看<a href=\"https://news.wheelmap.org/en/faq/\">常見詢問</a>，如果你的問題解答沒有在上面，請回答問題讓我們新增。",
        "note": "注意Wheelmap是由非營利組織經營的開源專案，我們放在app開發的資源有限。",
        "questions": {
          "a": "你做了什麼？",
          "b": "你預期會發生什麼事？",
          "c": "結果發生什麼事？"
        },
        "submit_button": "提及",
        "title": "回報一個問題"
      }
    }
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
      "link": "沒有收到解鎖文件？",
      "send_instructions": "幾分鐘之後，您的將會收到電子郵件以供驗證。",
      "send_paranoid_instructions": "如果您的帳號存在，幾分鐘後您將會收到一封驗證信。"
    },
    "destroy": {
      "confirm": "你確定嗎？",
      "headline": "刪除帳號",
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
      "inactive": "您的帳號尚未啓用",
      "invalid": "無效的電子信箱或密碼",
      "invalid_token": "認證失敗",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "您的帳號被鎖定了",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "您的登入已經逾時，請重新登入以繼續操作。",
      "unauthenticated": "您必須登入或註冊帳號才能繼續",
      "unconfirmed": "您必須確認您的帳號以繼續操作。"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "請點擊我們剛發送到您的電子郵件地址的鏈接。如果你沒有收到我們的郵件，請首先檢查，如果它沒有在您的垃圾郵件文件夾藏匿。如果它不存在返回註冊頁面，然後再試一次。",
        "subject": "再一個步驟就能啟動您的帳號。"
      },
      "reset_password_instructions": {
        "subject": "重設密碼"
      },
      "unlock_instructions": {
        "subject": "解鎖指令"
      }
    },
    "mandatory": "* 必須的",
    "omniauth_callbacks": {
      "failure": "因為 %{reason}，所以您無法透過 %{kind} 登入。",
      "permission_missing": "你沒有授予所需的權限。",
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
        "text": "我們收到更改密碼的請求。如果你發送請求，請單擊下面的鏈接 - 否則，忽略此！"
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
      "send_instructions": "您將收到一封如何重新設定你的密碼的電子信件。",
      "send_paranoid_instructions": "如果您的帳戶存在，在幾分鐘之內，您會收到一封重新設定你的密碼的說明電子郵件 ",
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
      "signed_up": "您已經註冊成功。已發送確認電子郵件給你。",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "您已經成功更新您的帳號。"
    },
    "sessions": {
      "inactive": "您的帳號尚未啓用",
      "invalid": "無效的 email 或密碼。",
      "invalid_token": "認證失敗",
      "link": "登入",
      "locked": "您的帳號已被凍結",
      "new": {
        "no_osm_account": "還沒有 OpenStreetMap 的帳號嗎？",
        "osm_promo_text": "Wheelmap是基於來自OpenStreetMap（OSM）的地理數據。 OpenStreetMap是一個免費的全球地圖，由您創造。這就像維基百科的地圖。為了能夠編輯場所或建立新的，你需要一個OpenStreetMap的賬戶，必須用它登錄。",
        "promo_text_thank_you": "非常感謝您的貢獻！",
        "sign_in_with": "透過 %{kind} 方式登入",
        "sign_up_with_osm": "現在就註冊。",
        "wheelmap_promo_text": "用你的輪椅出入的地方知識，你可以幫助身體障礙的人能夠更好地規劃自己的日常生活。此外，這將有助於使OpenStreetMap的更詳細。"
      },
      "signed_in": "成功登入",
      "signed_out": "您已經成功登出了。",
      "timeout": "您的登入已經逾時，請重新登入以繼續操作。",
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
          "wants_newsletter": "是的，讓我收到Wheelmap的最新信息  - 但請不超過每月一次。"
        },
        "submit": "註冊帳號"
      },
      "headline": "註冊"
    },
    "unlocks": {
      "link": "您沒有收到解鎖指令？",
      "send_instructions": "在幾分鐘之內，您會收到一封如何解除帳戶的說明電子郵件",
      "send_paranoid_instructions": "如果您的帳戶存在，在幾分鐘之內，您會收到一封如何解除帳戶的說明電子郵件",
      "unlocked": "您的帳號已經成功解鎖。您現在已經登入。"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "必須接受",
      "already_confirmed": "已確認",
      "blank": "必須填寫",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "與確認值不符合",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "必須填寫",
      "equal_to": "必須確實為%{count}",
      "even": "必須是偶數",
      "exclusion": "被保留",
      "expired": "已經過期，請重新申請",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "必須大於 %{count}",
      "greater_than_or_equal_to": "必須大於或等於 %{count}",
      "inclusion": "無效數值",
      "invalid": "無效",
      "less_than": "必須小於 %{count}",
      "less_than_or_equal_to": "必須小於或等於 %{count}",
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
      "odd": "必須是奇數",
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
      "0": "您可以隨時更改自己的地方的標記。只要選擇合適的標記和“保存” - 完成了！",
      "1": "登入後，你可以新增/修改所有地點的細節。請點選 \"編輯\" 並在空格修改或新增資訊。",
      "2": "您可以在註釋部分中添加更多的信息（例如，“這個地方有一個移動坡道”）。點擊“編輯”和“添加評論”。"
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
    "show_limited_accessible_places": "部分輪椅無障礙",
    "show_places_without_status": "未知狀態",
    "show_unaccessible_places": "非輪椅無障礙"
  },
  "formtastic": {
    "hints": {
      "email": "我們保密您的地址。我們承諾不向您發送垃圾郵件！",
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
      "create": "建議一個地點",
      "email": "電子郵件",
      "finish": "完成",
      "housenumber": "門牌號碼：",
      "lat": "緯度",
      "lon": "經度",
      "name": "名字：",
      "osm_password": "OpenStreetMap密碼",
      "osm_username": " OpenStreetMap 帳號名稱",
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
      "description": "Wheelmap.org是一個在線地圖搜索，找到和標記輪椅容易接近的地方。獲得通過標記公共場所如酒吧，餐館，電影院和超市參與！",
      "homepage": "首頁",
      "keywords": "尋找輪椅無障礙空間的標誌",
      "search": "搜尋",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "部落格",
      "choose_language": "選擇語言",
      "contact": "聯繫我們",
      "faq": "常見問題",
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
      "projects": "參與其中",
      "report_problem": "回報一個問題",
      "suggestions": "建議",
      "travelguide": "旅遊指南",
      "what_is_barrier_free": "「輪椅無障礙」是什麼意思？",
      "what_is_wheelmap": "Wheelmap 是什麼？"
    },
    "searchbar": {
      "add_place": "新增下一個地點",
      "find": "搜尋",
      "placeholder": "例如：洛杉磯的日落大道或是柏林的布蘭登堡門",
      "title_add_place": "在這個位置新增地點"
    },
    "tagline": "Wheelmap logo",
    "title": "尋找輪椅無障礙空間",
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
      "embed_link": "顯示在Wheelmap.org",
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
          "message": "你似乎是使用Internet Explorer。 Wheelmap需要一個符合標準的瀏覽器才能正常工作。請考慮使用火狐，Chrome，Safari或Opera。"
        }
      },
      "link": {
        "node": {
          "create": "新增地點"
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
          "limited": "部分輪椅無障礙 ",
          "no": "非輪椅無障礙",
          "save": "更新",
          "unknown": "未知狀態",
          "yes": "輪椅無障礙"
        },
        "help": "輪椅無障礙？(說明)",
        "more": "更多..."
      },
      "zoom_alert": "進一步放大看更多的地方。"
    }
  },
  "how?": "如何？",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "%{city} 中所有輪椅無障礙的 %{type} (%{count})"
        },
        "no": {
          "headline": "%{city} 的所有非輪椅無障礙 %{type} (%{count})"
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
      "default": "哎呀！出了問題了。我們已經被通知這個問題",
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
        "location": "請點擊所在的地方是位於地圖上！",
        "section": {
          "accessibility": {
            "name": "輪椅無障礙",
            "title": "輪椅無障礙信息"
          },
          "address": {
            "help": "你可以將標記移動到地圖上的正確位置。",
            "name": "地址",
            "title": "哪裡的地方？"
          },
          "contact": {
            "name": "聯繫我們",
            "title": "其他聯繫信息"
          },
          "name_category": {
            "name": "名稱和地點類型",
            "title": "給我們介紹一下你的地方一些的初步信息："
          },
          "overview": {
            "title": "是否所有的信息是否正確？"
          },
          "similar_nodes": {
            "empty": "沒有發現類似的地方。",
            "go_edit": "這個地方繼續",
            "go_new": "這是上面沒有的地方...",
            "name": "類似的地點",
            "title": "我們發現附近類似的地方。是不是其中之一？"
          }
        },
        "title": "新增地點"
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
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "註解:"
    },
    "node_photos": {
      "add": "新增",
      "alert": "請注意：照片應清楚呈現入口的樣貌，以顯示下列細節：入口有無台階？台階大概多高？門大概多寬？照片應為 JPG 或 PNG 格式，且不可超過 10 MB。",
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
      "more_data_from": "關於這個地點有更多訊息，被驗證",
      "share": {
        "email": "電子郵件",
        "facebook": "Facebook",
        "text": "我發現Wheelmap.org這個地方：%{name}",
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
        "headline": "您需要將您的帳戶與您的帳戶OpenStreetMap的連接，然後才能創建或修改Wheelmap.org地方。"
      }
    },
    "callback": {
      "notice": "您Wheelmap帳戶現在連接到OpenStreetMap帳戶{user}。"
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
      "misc": "雜貨店",
      "money_post": "銀行/郵局",
      "public_transfer": "公共交通工具",
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
        "employment_agency": "就業服務中心",
        "government": "政府部門",
        "police": "警察局",
        "public_building": "公共建築",
        "townhall": "市政廳"
      },
      "health": {
        "alternative": "另類醫療執行者",
        "dentist": "牙醫",
        "doctors": "醫生",
        "hearing_aids": "助聽器",
        "hospital": "醫院",
        "medical_supply": "醫療用品",
        "occupational_therapist": "職能治療師",
        "pharmacy": "藥局",
        "physiotherapist": "物理治療師",
        "psychotherapist": "心理治療師",
        "social_facility": "社會機構",
        "speech_therapist": "語言治療師",
        "veterinary": "獸醫"
      },
      "leisure": {
        "arena": "巨蛋",
        "brothel": "妓院",
        "casino": "賭場",
        "cinema": "電影院",
        "community_centre": "社區活動中心",
        "gallery": "畫廊",
        "massage": "按摩",
        "nightclub": "夜總會",
        "playground": "遊樂器材",
        "sauna": "桑拿",
        "stripclub": "脫衣舞店",
        "tattoo": "刺青店",
        "theatre": "戲院",
        "zoo": "動物園"
      },
      "misc": {
        "association": "協會",
        "company": "公司行號 (辦公室)",
        "estate_agent": "房地產仲介",
        "insurance": "保險",
        "lawyer": "律師",
        "ngo": "非政府組織",
        "place_of_worship": "宗教場所",
        "political_party": "政黨辦公室",
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
        "boatyard": "船廠",
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
        "antiques": "古董商",
        "art": "藝廏",
        "bakery": "烘焙坊",
        "beauty": "美容店",
        "beverages": "飲料",
        "bicycle": "自行車店",
        "books": "書店",
        "butcher": "肉店",
        "car_repair": "汽車維修",
        "car_shop": "車行",
        "chemist": "化驗師/藥店",
        "clothes": "服飾",
        "computer": "電腦店",
        "confectionery": "點心店",
        "convenience": "便利商店",
        "copyshop": "影印店",
        "deli": "熟食店",
        "department_store": "百貨公司",
        "doityourself": "DIY",
        "dry_cleaning": "乾洗",
        "electronics": "電子產品",
        "erotic": "情趣用品店",
        "fabric": "布店",
        "farm_shop": "農產品",
        "florist": "花店",
        "funeral_directors": "葬儀社",
        "furniture": "家具",
        "garden_centre": "花園中心",
        "gift": "禮品店",
        "greengrocer": "蔬果店",
        "hairdresser": "髮型師",
        "hardware": "五金行",
        "interior_decoration": "室內設計店",
        "jewelry": "珠寶銀樓",
        "kiosk": "書報亭",
        "laundry": "洗衣店",
        "mall": "購物中心",
        "mobile_phone": "行動電話店",
        "music": "唱片行",
        "musical_instrument": "樂器店",
        "newsagent": "報紙銷售點",
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
        "tailor": "裁縫師",
        "tea": "茶行",
        "tobacco": "菸店",
        "toys": "玩具店",
        "travel_agency": "旅行社",
        "variety_store": "折扣店",
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
          "info": "我們的搜索服務只適用於名稱和/或地址信息。因此，請透過搜索地點或地址，例如名稱街道名稱和/或城市。搜索類型的地方，例如餐館或電影院，不行！",
          "work_in_progress": "我們努力在未來使搜索更簡單，會更直觀。"
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
      "headline": "抱歉，出了一些問題",
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
    "what_is_wheelmap": "Wheelmap 是什麼？"
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
      "no": "門的內徑最小寬度90公分 (35 inc)，淨空最小150 x 150公分(59 x 59)，有輪椅高度的廁所坐位，手把和洗手檯。",
      "unknown": "請幫忙標記廁所狀態",
      "yes": "門的內徑最小寬度90公分 (35 inc)，淨空最小150 x 150公分(59 x 59)，有輪椅高度的廁所坐位，手把和洗手檯。"
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
      "email": "電子郵件地址",
      "login": "登入",
      "login_with_twitter": "透過 Twitter 登入",
      "password": "密碼",
      "remember_me": "保持登入狀態"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "你是幾乎快完成了！現在到完成您的Wheelmap帳戶：",
        "set_password_for_mobile": "您已成功使用OpenStreetMap的註冊。請選擇您想Wheelmap使用，因此我們可以讓您隨時了解你的活動（例如名額已標記）的電子郵件地址。您可以訪問你的“個人資料”這一信息。",
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
        "text": "保持取得最新的Wheelmap訊息。別擔心，我們不會寄給你垃圾郵件。你每月一次最多一次會從我們這裡寄出的最新消息。",
        "title": "電子報"
      },
      "photos": {
        "empty": "您還沒有上傳任何照片。",
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
            "other": "編輯%{count}地方"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "標記 %{count} 個地點"
          },
          "text": "你有"
        },
        "text_html": "您好，<br>\n歡迎（回）來到 Wheelmap.org！很高興您能加入！若想更加了解 Wheelmap.org，可以瀏覽我們的<a href=\"http://news.wheelmap.org/en/\">部落格</a>或<a href=\"http://news.wheelmap.org/en/FAQ/\">常見問題</a>。您也可以深入了解我們在 Wheelmap.org 所提供的<a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">計畫</a>，以及如何參與。<br>\n想保持聯繫，可以訂閱我們的每月新聞報，並在 <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> 和 <a href=\"https://twitter.com/wheelmap\">Twitter</a> 上追蹤我們。期待能聽到您的意見並與您對話！<br>\n而現在，祝您製圖愉快！<br>\n您的 Wheelmap 團隊",
        "title": "總覽"
      },
      "widget": {
        "categories": "展現類別過濾器",
        "center": "地圖區域",
        "empty_center": "搜索地圖的中心...",
        "empty_provider": "選擇一個供應者",
        "height": "高",
        "legends": {
          "embed": "遷入碼",
          "embed_explanation": "你可以更改規格為緯度（<code>緯度</code>），經度（<code> LON </code>），並在上面的代碼手動，從而調整縮放級別（<code>縮放</code>）根據你想顯示的位置在地圖段（widget）。",
          "general": "創建您自己的Wheelmap小部件，並在您的網站或博客中嵌入它。",
          "preview": "預覽",
          "settings": "設定"
        },
        "providers": "供應者",
        "title": "小部件",
        "width": "寬"
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
    "limited": "部分輪椅無障礙",
    "no": "非輪椅無障礙",
    "unknown": "未知狀態",
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
      "fully_accessible": "入口沒有台階，所有的房間沒有台階。",
      "limited_accessible": "門口有一個最大台階。高度7厘米(3 in)，大部分房間都沒有台階。",
      "not_accessible": "門口有一個台階或幾個台階，房間都不可訪問。",
      "unknown_accessible": "請幫忙標記地點"
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
