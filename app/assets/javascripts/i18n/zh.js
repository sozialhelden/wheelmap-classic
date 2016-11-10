I18n.translations || (I18n.translations = {});
I18n.translations["zh"] = I18n.extend((I18n.translations["zh"] || {}), {
  "actions": {
    "cancel": "Cancel",
    "next": "Next",
    "save": "保存",
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
        "first_name": "名",
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
        "accepted": "必须是可被接受的",
        "blank": "不能为空字符",
        "confirmation": "与确认值不匹配",
        "empty": "不能留空",
        "equal_to": "必须等于 %{count}",
        "even": "必须为双数",
        "exclusion": "已预定",
        "greater_than": "必须大于 %{count}",
        "greater_than_or_equal_to": "必须大于或等于 %{count}",
        "inclusion": "不包含于列表中",
        "invalid": "是无效的",
        "less_than": "必须小于 %{count}",
        "less_than_or_equal_to": "必须小于或等于 %{count}",
        "not_a_number": "不是数字",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "必须为单数",
        "record_invalid": "验证失败: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "已经被使用",
        "too_long": "过长（最长为 %{count} 个字符）",
        "too_short": "过短（最短为 %{count} 个字符）",
        "wrong_length": "长度非法（必须为 %{count} 个字符）"
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
          "email": "电子邮件地址",
          "password": "密码",
          "remember_me": "保持登录状态"
        }
      },
      "template": {
        "body": "如下字段出现错误：",
        "header": {
          "one": "有 1 个错误发生导致「%{model}」无法被保存。",
          "other": "有 %{count} 个错误发生导致「%{model}」无法被保存。"
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
      "notice": "您已经登录..."
    },
    "require_user": {
      "notice": "要浏览此页必须登录"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "编辑地点"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "关闭",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "日",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六"
    ],
    "abbr_month_names": [
      null,
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    "day_names": [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%Y年%b%d日",
      "short": "%b%d日"
    },
    "month_names": [
      null,
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
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
        "one": "大约一小时",
        "other": "大约 %{count} 小时"
      },
      "about_x_months": {
        "one": "大约一个月",
        "other": "大约 %{count} 个月"
      },
      "about_x_years": {
        "one": "大约一年",
        "other": "大约 %{count} 年"
      },
      "almost_x_years": {
        "one": "接近一年",
        "other": "接近 %{count} 年"
      },
      "half_a_minute": "半分钟",
      "less_than_x_minutes": {
        "one": "不到一分钟",
        "other": "不到 %{count} 分钟"
      },
      "less_than_x_seconds": {
        "one": "不到一秒",
        "other": "不到 %{count} 秒"
      },
      "over_x_years": {
        "one": "一年多",
        "other": "%{count} 年多"
      },
      "x_days": {
        "one": "一天",
        "other": "%{count} 天"
      },
      "x_minutes": {
        "one": "一分钟",
        "other": "%{count} 分钟"
      },
      "x_months": {
        "one": "一个月",
        "other": "%{count} 个月"
      },
      "x_seconds": {
        "one": "一秒",
        "other": "%{count} 秒"
      }
    },
    "prompts": {
      "day": "日",
      "hour": "时",
      "minute": "分",
      "month": "月",
      "second": "秒",
      "year": "年"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "您的帐号已经确认，您现在已登录.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "几分钟后，您将收到确认帐号的电子邮件.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "您确定吗？",
      "headline": "Delete account",
      "link": "现在删除"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "当前密码<i>(我们需要它来确认您的更改)</i>",
          "email": "电子邮件",
          "password": "密码<i>(如果您不想改变就留下空白)</i>",
          "password_confirmation": "重复密码"
        },
        "submit": "保留更改"
      },
      "headline": "编辑帐户"
    },
    "failure": {
      "already_authenticated": "您已经登录.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "邮箱或密码错误",
      "invalid_token": "认证码无效.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "您的帐号已被锁定.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "继续操作前请注册或者登录.",
      "unconfirmed": "继续操作前请先确认您的帐号."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "还有一步激活您的帐户"
      },
      "reset_password_instructions": {
        "subject": "重置密码信息"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "*必须的",
    "omniauth_callbacks": {
      "failure": "因为%{reason}，所以您无法从%{kind}获得授权.",
      "permission_missing": "You did not grant the required permission.",
      "success": "成功地从%{kind}获得授权."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "电子邮件"
        },
        "submit": "重置密码"
      },
      "headline": "忘记密码？"
    },
    "password_reset": {
      "email": {
        "comment": "如果您没有申请密码重置，请忽略此邮件<br/>除非点击上述链接并设置新密码，否则您的密码不会更改",
        "headline": "欢迎%{email}",
        "link": "更换我的密码",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "新密码",
          "password_confirmation": "重复密码"
        },
        "submit": "重置密码"
      },
      "headline": "重置密码"
    },
    "passwords": {
      "link": "忘记密码？",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "您的密码已修改成功，您现在已登录.",
      "updated_not_active": "您的密码已修改成功."
    },
    "registrations": {
      "destroyed": "再见！您的帐户已成功注销。我们希望很快可以再见到您.",
      "inactive_signed_up": "虽然您已经注册成功,但因为%{reason},所以您依然无法登录.",
      "link": "注册",
      "reasons": {
        "inactive": "未激活",
        "locked": "已锁定",
        "unconfirmed": "未确认"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "帐号资料更新成功."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "无效的邮箱或密码",
      "invalid_token": "无效的身份证明",
      "link": "登录",
      "locked": "您的帐户已被锁定",
      "new": {
        "no_osm_account": "沒有 OpenStreetMap 的帳號嗎？",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "登录成功.",
      "signed_out": "退出成功.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "在继续操作前您必须登录或注册",
      "unconfirmed": "在继续下一步之前您需要确认您的帐户"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "电子邮件",
          "password": "密码",
          "remember_me": "保留登录状态？"
        },
        "submit": "登录"
      },
      "headline": "登录"
    },
    "sign_out": {
      "headline": "注消"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "确认我的帐户",
        "please_confirm": "您可以通过以下链接确认您的帐户",
        "welcome": "欢迎%{email}!"
      },
      "form": {
        "labels": {
          "email": "电子邮件",
          "password": "密码",
          "password_confirmation": "重复密码",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "注册"
      },
      "headline": "注册"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "您的帐号已成功解锁，您现在已登录."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "已经确认",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "没有进行匹配确认",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "必须准确%{count}",
      "even": "must be an even number",
      "exclusion": "已预定",
      "expired": "您已过期，请重新申请",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "必须大于%{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "无效数值",
      "invalid": "无效",
      "less_than": "必须少于%{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "不是一个数字",
      "not_an_integer": "必须是整数",
      "not_found": "没有找到",
      "not_locked": "未锁定",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "已经被使用",
      "too_long": "太长(不能长于 %{count} 字符)",
      "too_short": "太短(不少于%{count} 字符)",
      "wrong_length": "长度非法（必须为 %{count} 个字符）"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "以下区域出现了问题：",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
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
        "notice": "%{resource_name}已成功创建"
      },
      "destroy": {
        "alert": "%{resource_name}不能被移除",
        "notice": "%{resource_name}已成功删除"
      },
      "update": {
        "notice": "%{resource_name}已成功更新"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "轮椅通道",
    "show_limited_accessible_places": "部分无障碍通行",
    "show_places_without_status": "未知状态",
    "show_unaccessible_places": "不是轮椅专用通道"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "将地图上的标记移动到正确位置",
      "osm_username": "还不是会员？<a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">马上建立OpenStreetMap帐户",
      "password": "（如果您不想改变请保留空白）",
      "phone": "For example: +49 30 12345678",
      "website": "例如：http://www.example.com"
    },
    "labels": {
      "category": "目录：",
      "centralkey": "Central key:",
      "city": "城市：",
      "create": "Create a place",
      "email": "电子邮件",
      "finish": "完成",
      "housenumber": "没有：",
      "lat": "纬度",
      "lon": "经度",
      "name": "姓名：",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "密码",
      "password_confirmation": "重复密码",
      "phone": "电话",
      "postcode": "邮政编码",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "重置",
      "save": "保存",
      "street": "街道：",
      "terms": "I accept the terms of use.",
      "type": "种类：",
      "website": "网页",
      "wheelchair": "轮椅可通过？",
      "wheelchair_description": "无障碍说明：",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "基本数据",
      "optional": "更多信息<span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "请注意下面表单上的错误"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "主页",
      "keywords": "寻找轮椅通道地点的标志",
      "search": "搜索",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "博客",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "反馈",
      "home": "开始",
      "how_to_add_a_place": "我怎样添加位置",
      "imprint": "版本说明",
      "logged_in_as": "以：登录",
      "login": "登录",
      "logout": "注销",
      "map": "Map",
      "newsletter": "简讯",
      "press": "出版物",
      "profile": "Profile",
      "projects": "参与其中",
      "suggestions": "建议",
      "what_is_barrier_free": "“轮椅通道”是什么意思",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "添加另外的地点",
      "find": "找到",
      "placeholder": "诸如洛杉矶大道的日落或者勃兰登堡的大门柏林",
      "title_add_place": "现在在这个位置添加新的地点"
    },
    "tagline": "轮椅地图标志",
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
      "prompt": "请选择"
    },
    "submit": {
      "create": "新增%{model}",
      "submit": "储存%{model}",
      "update": "更新%{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "选择目录",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "轮椅通道？"
      },
      "ie": {
        "action": {
          "ignore": "忽略",
          "upgrade": "更新浏览器"
        },
        "warning": {
          "headline": "我们很抱歉！",
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
          "limited": "部分无障碍通行",
          "no": "不是轮椅专用通道",
          "save": "更新",
          "unknown": "未知状态",
          "yes": "轮椅通道"
        },
        "help": "轮椅可通过？（帮助）",
        "more": "更多..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "怎么样",
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
          "headline": "所有%{type} in %{city} 轮椅的未知状态(%{count})"
        },
        "yes": {
          "headline": "所有轮椅通道%{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.de的方案"
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
      "phone": "电话：",
      "website": "网页"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "出错啦，您的输入不正确或不完整",
        "successfull": "谢谢，您提交的信息已成功保留并很快会在线显示"
      }
    },
    "edit": {
      "header": {
        "title": "编辑地点：%{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo;取消"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "抱歉，验证失败",
      "not_available": "抱歉，此页暂时不可用",
      "not_existent": "抱歉，此地点已无效",
      "not_found": "抱歉，没有找到页面",
      "param_missing": "请提供搜索项目"
    },
    "flash": {
      "authorize_wheelmap": "您需要一个OpenStreetMap帐户来修改数据"
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
            "name": "地址",
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
        "title": "新地点| wheelmap.org"
      },
      "link": {
        "large_map": "&laquo;取消"
      }
    },
    "node": {
      "link": {
        "claim": "您在这儿工作吗？",
        "edit_node": "编辑位置",
        "report_bug": "报告一个问题"
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
        "title": "地点：%{node} | wheelmap.org"
      },
      "link": {
        "back": "退回",
        "large_map": "放大",
        "listing": "所有典型地点 '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "电子邮件",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "出错啦，您的输入不正确或者不完整",
        "successfull": "谢谢，您提交的申请已成功保留并很快会在线显示。"
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\"的状态已更改为\"%{status}轮椅通道\"并即刻在线"
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
        "unit": "CN¥"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": "点",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "十亿",
          "million": "百万",
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
  "or": "或者",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "住宿",
      "education": "教育",
      "food": "食物",
      "government": "政府",
      "health": "健康",
      "leisure": "休闲",
      "misc": "Miscellaneous",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "购物",
      "sport": "体育",
      "tourism": "旅游",
      "unknown": "未知"
    },
    "name": {
      "accommodation": {
        "beach_resort": "海滨旅馆",
        "bed_and_breakfast": "床位和早餐",
        "camp_site": "露营网页",
        "caravan_site": "篷车场所",
        "chalet": "农舍",
        "dormitory": "Dormitory",
        "guest_house": "招待所",
        "hostel": "青年旅社",
        "hotel": "宾馆",
        "motel": "汽车旅馆"
      },
      "education": {
        "college": "学院",
        "driving_school": "Driving school",
        "kindergarten": "幼儿园",
        "library": "图书馆",
        "museum": "博物馆",
        "school": "学校",
        "university": "大学"
      },
      "food": {
        "bar": "酒吧",
        "biergarten": "啤酒花园",
        "cafe": "咖啡店",
        "drinking_water": "饮用水",
        "fast_food": "快餐",
        "ice_cream": "Ice cream parlour",
        "pub": "酒吧",
        "restaurant": "餐馆"
      },
      "government": {
        "courthouse": "法院",
        "embassy": "大使馆",
        "employment_agency": "Employment agency",
        "government": "Government agency",
        "police": "警察",
        "public_building": "公共建筑",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "助听器经销商",
        "hospital": "医院",
        "medical_supply": "医药用品",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "药店",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "公用设施",
        "speech_therapist": "Speech therapist",
        "veterinary": "兽医"
      },
      "leisure": {
        "arena": "竞技场",
        "brothel": "妓院",
        "casino": "Casino",
        "cinema": "影院",
        "community_centre": "Community centre",
        "gallery": "展厅",
        "massage": "Massage spa",
        "nightclub": "夜总会",
        "playground": "活动场所",
        "sauna": "桑拿",
        "stripclub": "脱衣舞夜总会",
        "tattoo": "Tattoo shop",
        "theatre": "剧院",
        "zoo": "动物园"
      },
      "misc": {
        "association": "Association",
        "company": "公司（办公室）",
        "estate_agent": "Real estate agent",
        "insurance": "Insurance",
        "lawyer": "律师",
        "ngo": "Non-government organisation",
        "place_of_worship": "教堂",
        "political_party": "Political party office",
        "toilets": "厕所"
      },
      "money_post": {
        "atm": "自动取款机",
        "bank": "银行",
        "bureau_de_change": "外币兑换",
        "post_box": "邮箱",
        "post_office": "邮局"
      },
      "public_transfer": {
        "aerodrome": "机场",
        "bicycle_parking": "单车停放",
        "bicycle_rental": "单车出租",
        "boatyard": "Boat yard",
        "bus_station": "公共汽车站",
        "bus_stop": "公共汽车站",
        "cable_car": "缆车",
        "car_rental": "汽车出租",
        "car_sharing": "拼车",
        "chair_lift": "升降机",
        "ferry": "轮渡",
        "ferry_terminal": "轮渡码头",
        "fuel": "加油站",
        "halt": "停靠站",
        "light_rail": "轻轨",
        "parking": "停车",
        "parking_aisle": "停车道",
        "platform": "站台",
        "station": "地铁",
        "subway_entrance": "地铁入口",
        "terminal": "机场航站楼",
        "tram_stop": "电车站"
      },
      "shopping": {
        "alcohol": "酒类",
        "antiques": "Antiques",
        "art": "Gallery shop",
        "bakery": "面包店",
        "beauty": "Beauty salon",
        "beverages": "饮料",
        "bicycle": "单车店",
        "books": "书籍",
        "butcher": "肉店",
        "car_repair": "汽车修理",
        "car_shop": "车行",
        "chemist": "Chemist / Drugstore",
        "clothes": "服装",
        "computer": "电脑",
        "confectionery": "Candy store",
        "convenience": "方便",
        "copyshop": "Copy shop",
        "deli": "Delicatessen",
        "department_store": "百货商店",
        "doityourself": "自己动手",
        "dry_cleaning": "干洗",
        "electronics": "电子产品",
        "erotic": "Sex shop",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "花店",
        "funeral_directors": "Funeral home",
        "furniture": "家具",
        "garden_centre": "Garden centre",
        "gift": "Gift shop",
        "greengrocer": "Greengrocer",
        "hairdresser": "理发师",
        "hardware": "硬件",
        "interior_decoration": "Interior design shop",
        "jewelry": "Jewelry",
        "kiosk": "书报亭",
        "laundry": "洗衣店",
        "mall": "购物中心",
        "mobile_phone": "Mobile phone shop",
        "music": "Record store",
        "musical_instrument": "Musical instrument shop",
        "newsagent": "News agent",
        "optician": "验光师",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "照片",
        "second_hand": "二手",
        "shoes": "鞋子",
        "sports": "体育",
        "stationery": "文具店",
        "supermarket": "超市",
        "tailor": "Tailor",
        "tea": "Tea supply",
        "tobacco": "Tobacco shop",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "variety_store": "Discount store",
        "video": "影像出租店"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "体育中心",
        "stadium": "体育场",
        "swimming": "游泳",
        "swimming_pool": "游泳池"
      },
      "tourism": {
        "archaeological_site": "考古网页",
        "arts_centre": "艺术中心",
        "artwork": "工艺品",
        "attraction": "吸引力",
        "battlefield": "战场",
        "beach": "海滩",
        "beacon": "灯塔",
        "castle": "城堡",
        "cave_entrance": "洞穴入口",
        "information": "旅客信息",
        "memorial": "纪念物",
        "theme_park": "主题公园",
        "tower": "塔楼",
        "viewpoint": "观点"
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
          "connected": "状态：已连接",
          "grant": "现在连接",
          "not_connected": "状态：未连接",
          "revoke": "断开连接"
        }
      },
      "headline": "编辑个人资料"
    }
  },
  "ransack": {
    "all": "所有",
    "and": "并且",
    "any": "任意",
    "asc": "升序",
    "attribute": "属性",
    "combinator": "条件组合(combinator)",
    "condition": "条件",
    "desc": "降序",
    "or": "或者",
    "predicate": "基于(predicate)",
    "predicates": {
      "blank": "为空",
      "cont": "包含",
      "cont_all": "包含所有值",
      "cont_any": "包含任意一个值",
      "does_not_match": "不符合",
      "does_not_match_all": "不符合所有条件",
      "does_not_match_any": "符合任意条件",
      "end": "以改值结尾",
      "end_all": "以所有值结尾",
      "end_any": "以任意一个值结尾",
      "eq": "等于",
      "eq_all": "等于所有值",
      "eq_any": "等于任意值",
      "false": "等于false",
      "gt": "大于",
      "gt_all": "大于所有值",
      "gt_any": "大于任意一个值",
      "gteq": "大于等于",
      "gteq_all": "大于等于所有值",
      "gteq_any": "大于等于任意一个值",
      "in": "被包含",
      "in_all": "被所有值包含",
      "in_any": "被任意值包含",
      "lt": "小于",
      "lt_all": "小于所有值",
      "lt_any": "小于任意一个值",
      "lteq": "小于等于",
      "lteq_all": "小于等于所有值",
      "lteq_any": "小于等于任意一个值",
      "matches": "符合",
      "matches_all": "符合所有条件",
      "matches_any": "符合任意条件",
      "not_cont": "不包含",
      "not_cont_all": "不包含所有值",
      "not_cont_any": "不包含任意一个值",
      "not_end": "不以改值结尾",
      "not_end_all": "不以所有值结尾",
      "not_end_any": "不以任意一个值结尾",
      "not_eq": "不等于",
      "not_eq_all": "不等于所有值",
      "not_eq_any": "不等于任意值",
      "not_in": "不被包含",
      "not_in_all": "不被所有值包含",
      "not_in_any": "不被任意值包含",
      "not_null": "不是null",
      "not_start": "不以改值开始",
      "not_start_all": "不以所有值开始",
      "not_start_any": "不以任意一个值开始",
      "null": "是null",
      "present": "有值",
      "start": "以改值开始",
      "start_all": "以所有值开始",
      "start_any": "以任意一个值开始",
      "true": "等于true"
    },
    "search": "搜索",
    "sort": "排序",
    "value": "数值"
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
        "for": "搜索\"%{q}\"",
        "not_found": "没有找到位置"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count}地点已被标记",
    "headline": "任何人都可以添加轮椅通道地点",
    "start": "开始",
    "step1": "请点击您知道的地点",
    "step2": "标记并点击保留",
    "step3": "就是这样！无需注册",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "统计",
  "support": {
    "array": {
      "last_word_connector": "和 ",
      "sentence_connector": "和",
      "two_words_connector": " 和 ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "请选择"
    }
  },
  "time": {
    "am": "上午",
    "formats": {
      "default": "%Y年%b%d日 %A %H:%M:%S %Z",
      "long": "%Y年%b%d日 %H:%M",
      "short": "%b%d日 %H:%M"
    },
    "pm": "下午"
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
        "notice": "您的帐户已被激活"
      },
      "error": {
        "notice": "邮箱地址和密码不符合"
      },
      "notice": "您已登入"
    },
    "destroy": {
      "notice": "再见，快点回来啊！"
    },
    "new": {
      "email": "Email address",
      "login": "登录",
      "login_with_twitter": "使用推特登录",
      "password": "密码",
      "remember_me": "保留登录状态"
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
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "简讯"
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
    "limited": "部分无障碍通行",
    "no": "不是轮椅专用通道",
    "unknown": "未知状态",
    "yes": "轮椅通道"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "...的项目",
      "based_on": "基于",
      "become_a_supporter": "成为赞助者",
      "main_supporter": "主要支持者"
    },
    "itunes": {
      "alt": "应用商店标志",
      "title": "现在下载iPhone应用软件"
    },
    "logo": {
      "alt": "Wheelmap 标志－找到轮椅通道的地点",
      "title": "Wheelmap 标志－找到轮椅通道的地点"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "往后&#8594;",
    "page_entries_info": {
      "multi_page": "完整显示%{model} %{from} - %{to} of %{count}",
      "multi_page_html": "显示 %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> 总计",
      "single_page": {
        "one": "显示1 %{model}",
        "other": "显示全部%{count} %{model}",
        "zero": "%{model}没找到"
      },
      "single_page_html": {
        "one": "显示<b>1</b> %{model}",
        "other": "显示<b>all&nbsp;%{count}</b> %{model}",
        "zero": "没找到%{model}"
      }
    },
    "page_gap": "取hellip变量地址",
    "previous_label": "&#8592;往前"
  }
});
