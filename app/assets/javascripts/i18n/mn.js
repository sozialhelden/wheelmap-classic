I18n.translations || (I18n.translations = {});
I18n.translations["mn"] = I18n.extend((I18n.translations["mn"] || {}), {
  "actions": {
    "cancel": "Цуцлах",
    "next": "Дараагийнх ",
    "save": "Хадгалах",
    "send": "Илгээх"
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
        "address": "Хаяг",
        "address_city": "Хот",
        "address_housenumber": "Гэрийн хаяг",
        "address_postcode": "Шуудангийн хаяг",
        "address_street": "Гудамж",
        "name": "Нэр",
        "note": "Тэмдэглэл",
        "phone": "Утасны дугаар",
        "type": "Төрөл",
        "website": "Вэбсайт"
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
      "notice": "Та нэвтэрсэн байна..."
    },
    "require_user": {
      "notice": "Та энэ хуудсыг харахын тулд заавал нэвтэрсэн байх ёстой."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Шинэ газар нэмэх ",
      "edit": "Газрыг засварлах"
    },
    "root": "Тэргэнцэртэй иргэд зорчих газрын зураглал"
  },
  "common": {
    "close": "Ойрхон",
    "skip": "Алгасах"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Англи эсвэл Герман хэлээр бичнэ үү.",
        "flash_after_submit": "Бидэнтэй холбогдсонд баярлалаа. Бид таньтай удахгүй эргэн холбогдох болно. ",
        "header_text_html": "Эхлээд та асуултынхаа хариултыг <a href=\"https://news.wheelmap.org/en/faq/\">Түгээмэл Асуулт Хариулт</a> хэсгээс хайна уу. Хэрвээ таны асуудлыг шийдэх шийдэл олдоогүй бол, та дараах асуултанд хариулна уу. ",
        "note": "Wheelmap бол ашгийн бус байгууллагын нээлттэй эх үүсвэртэй төсөл бөгөөд аппликэйшн хөгжүүлэгчдэд хязгаарлагдмал нөөцтэй болно. ",
        "questions": {
          "a": "Та юу хийсэн бэ?",
          "b": "Та юу болно хэмээн хүлээж байсан бэ?",
          "c": "Үүний оронд юу болсон бэ?"
        },
        "submit_button": "Хүргүүлэх ",
        "title": "Асуудлыг мэдэгдэх "
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
      "confirmed": "Таны цахим хаяг амжилттай баталгаажлаа. ",
      "link": "Та баталгаажуулах зааварчилгааг хүлээж аваагүй юу?",
      "send_instructions": "Таны цахим хаягийг баталгуужуулах холбоос бүхий имэйл -ийг та хэдэн хормын дотор хүлээж авах болно.",
      "send_paranoid_instructions": "Хэрвээ танд хэрэглэгчийн бүртгэл байгаа бол, таны хэрэглэгчийн бүртгэлийг хэрхэн баталгаажуулах зааварчилгаа бүхий имэйл -ийг хэдэн хормын дотор хүлээж авах болно. "
    },
    "destroy": {
      "confirm": "Та итгэлтэй байн уу?",
      "headline": "Хэрэглэгчийн бүртгэлийг устгах ",
      "link": "Яг одоо устгах"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Одоо ашиглагдаж буй нууц үг <i>(Энэ нь таны өөрчлөлтийг баталгаажуулахад бидэнд хэрэгтэй)</i>",
          "email": "Цахим шуудан",
          "password": "Нууц үг <i>(Хэрвээ та үүнийг өөрчлөхийг хүсэхгүй байгаа бол хоосон орхино уу)</i>",
          "password_confirmation": "Нууц үгийг давтах "
        },
        "submit": "Өөрчлөлтийг хадгалах "
      },
      "headline": "Хэрэглэгчийн бүртгэлийг засварлах "
    },
    "failure": {
      "already_authenticated": "Та нэвтэрсэн байна.",
      "inactive": "Таны хэрэглэгчийн бүртгэл хараахан идэвхжээгүй байна.",
      "invalid": "Цахим хаяг эсвэл нууц үг хүчин төгөлдөр биш байна. ",
      "invalid_token": "Хүчин төгөлдөр бус нэвтрэлт бүртгэгдсэн байна ",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Таны хэрэглэгчийн бүртгэл түгжигдсэн байна",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Таны оролдлого хэтэрсэн байна, үргэлжлүүлэхийн тулд нэвтрэн орно уу. ",
      "unauthenticated": "Та үргэлжлүүлхийн өмнө нэвтрэх эсвэл бүртгүүлэх хэрэгтэй",
      "unconfirmed": "Үргэлжлүүлэхийн өмнө та өөрийн хэрэглэгчийн бүртгэлээ баталгаажуулах шаардлагатай:."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Таны цахим хаяг руу явуулсан холбоос дээр дарна уу. Хэрвээ та биднээс ямар нэгэн имэйл хүлээж аваагүй бол, та өөрийн spam хавтасыг эхлэн шалгана уу. Хэрвээ тэнд байхгүй бол нэвтрэх хуудас руу буцаж дахин нэвтрэх оролдлого хийнэ үү. ",
        "subject": "Та хэрэглэгчийн бүртгэлээ идэвхжүүлэхийн тулд дахин нэг алхам хийнэ үү"
      },
      "reset_password_instructions": {
        "subject": "Нууц үгийг дахин шинэчилэх заавар "
      },
      "unlock_instructions": {
        "subject": "Заавруудыг чөлөөлөх "
      }
    },
    "mandatory": "*Шаардлагатай ",
    "omniauth_callbacks": {
      "failure": "Эрх үүсгэх үйл явц дараах төрлөөр %{kind} бүтэлгүйтлээ. Алдаа: %{reason}",
      "permission_missing": "Та шаардлагатай зөвшөөрлүүдийг аваагүй байна.",
      "success": "Та амжилттай нэвтэрлээ. %{kind}"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Цахим шуудан"
        },
        "submit": "Нууц үгийг шинэчилэх "
      },
      "headline": "Та нууц үгээ мартсан уу?"
    },
    "password_reset": {
      "email": {
        "comment": "Хэрвээ та нууц үгээ шинэчилэх хүсэлт илгээгээгүй бол, энэ имэйл -ийг хэрэгсэхгүй байж болно. <br/>Дээрх холбоосоор нэвтрэн нууц үгээ шинэчилэх хүртэл таны одоогийн хэрэглэж байгаа нууц үг өөрчлөгдөхгүй.",
        "headline": "Тавтай морил %{email}",
        "link": "Миний нууц үгийг өөрчил ",
        "text": "Бид таны нууц үгийг өөрчлөх хүсэлт хүлээж авсан. Хэрвээ та хүсэлт илгээсэн бол, холбоосоор нэвтэрнэ үү - үгүй бол үүнийг үл хэрэгсэнэ үү!"
      },
      "form": {
        "labels": {
          "password": "Шинэ нууц үг",
          "password_confirmation": "Нууц үгийг давтах "
        },
        "submit": "Нууц үгийг шинэчилэх   "
      },
      "headline": "Нууц үгийг шинэчилэх  "
    },
    "passwords": {
      "link": "Та нууц үгээ мартсан уу? ",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Та хэдхэн хормын дотор нууц үгээ шинэчилэх зааварчилгаа бүхий имэйл -ийг хүлээж авах болно. ",
      "send_paranoid_instructions": "Хэрвээ та хэрэглэгчийн бүртгэлтэй бол, хэдхэн хормын дотор нууц үгээ шинэчилэх зааварчилгаа бүхий имэйл -ийг хүлээж авах болно. ",
      "updated": "Таны нууц үг амжилттай өөрчлөгдлөө, одоо та нэвтэрч болно",
      "updated_not_active": "Таны нууц үг амжилттай өөрчлөгдлөө"
    },
    "registrations": {
      "destroyed": "Баяртай, таны хэрэглэгчийн бүртгэл амжилттай цуцлагдлаа. Бид таньтай дахин уулзана гэдэгт найдаж байна. ",
      "inactive_signed_up": "Таны бүртгэл амжилттай хийгдлээ, гэвч бид таныг нэвтрүүлж чадахгүй. Шалтгаан нь: %{reason}",
      "link": "Бүртгүүлэх ",
      "reasons": {
        "inactive": "Идэвхгүй ",
        "locked": "Түгжигдсэн ",
        "unconfirmed": "Баталгаажуулаагүй"
      },
      "signed_up": "Та амжилттай нэвтэрлээ. Баталгаажуулах имэйл илгээгдсэн байна.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Та хэрэглэгчийн бүртгэлээ амжилттай шинэчлэлээ. "
    },
    "sessions": {
      "inactive": "Таны хэрэглэгчийн бүртгэл хараахан идэвжээгүй байна",
      "invalid": "Цахим шуудангийн хаяг эсвэл нууц үг хүчин төгөлдөр биш байна.  ",
      "invalid_token": "Хүчин төгөлдөр бус нэвтрэлт бүртгэгдсэн байна ",
      "link": "Нэвтрэх ",
      "locked": "Таны хэрэглэгчийн бүртгэл түгжигдсэн байна",
      "new": {
        "no_osm_account": "OpenStreetMap хэрэглэгчийн бүртгэл биш байна. ",
        "osm_promo_text": "Wheelmap нь OpenStreetMap (OSM) -ийн geodata дээр суурилсан. OpenStreetMap' нь үнэгүй дэлхийн газарзүйн зураглал бөгөөд хүмүүсийн сайн дурын оролцоогоор бүтээгдсэн юм. Энэ нь Википедиа шиг ажилладаг гэсэн үг. Та OpenStreetMap -д хэрэглэгчийн бүртгэл үүсгэж нэвтрэн орсноор шинээр газар тэмдэглэх болон засварлах боломжтой болох юм. ",
        "promo_text_thank_you": "Таны дэмжлэгт маш их баярлалаа!",
        "sign_in_with": "Нэвтрэх %{kind}",
        "sign_up_with_osm": "Бүртгүүлэх ",
        "wheelmap_promo_text": "Та тэргэнцэрт хүртээмжтэй газруудын тухай мэдээлэлтэй болсноор тулгуур эрхтний хөгжлийн бэрхшээлтэй хүмүүст өдөр тутмын амьдралаа илүү сайнаар төлөвлөхөд нь туслах болно. Цаашлаад, энэ нь OpenStreetMap сайтыг илүү дэлгэрэнгүй мэдээллээр хангахад тус болох юм. "
      },
      "signed_in": "Амжилттай нэвтэрлээ. ",
      "signed_out": "Амжилттай гарлаа",
      "timeout": "Таны оролдлого хэтэрсэн байна, үргэлжлүүлэхийн тулд нэвтрэн орно уу. ",
      "unauthenticated": "Та үргэлжлүүлхийн өмнө нэвтрэх эсвэл бүртгүүлэх шаардлагатай",
      "unconfirmed": "Та үргэлжлүүлхийн өмнө өөрийн хэрэглэгчийн бүртгэлийг баталгаажуулах хэрэгтэй"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Цахим шуудан",
          "password": "Нууц үг",
          "remember_me": "Нэвтэрсэн хэвээр үлдэх үү? "
        },
        "submit": "Нэвтрэх"
      },
      "headline": "Нэвтрэх"
    },
    "sign_out": {
      "headline": "Гарах"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Миний хэрэглэгчийн бүртгэлийг баталгаажуул ",
        "please_confirm": "Та доорх холбоосоор нэвтэрч хэрэглэгчийн бүртгэлээ баталгаажуулна: ",
        "welcome": "Тавтай морил %{email} !"
      },
      "form": {
        "labels": {
          "email": "Цахим хаяг ",
          "password": "Нууц үг",
          "password_confirmation": "Нууц үгийг давтах ",
          "wants_newsletter": "Тийм, Wheelmap дээр хийгдэж байгаа хөгжүүлэлтүүдийг хадгал - гэхдээ сард ганц удаа ба түүнээс ихгүй байна."
        },
        "submit": "Бүртгүүлэх "
      },
      "headline": "Бүртгүүлэх "
    },
    "unlocks": {
      "link": "Та түгжээг тайлах зааварчилгааг хүлээж аваагүй юу?",
      "send_instructions": "Та өөрийн хэрэглэгчийн бүртгэлийн түгжээг тайлах зааварчилгаа бүхий и-мэйлийг хэдэн хормын дотор хүлээж авах болно.",
      "send_paranoid_instructions": "Хэрвээ та хэрэглэгчийн бүртгэлтэй бол, та өөрийн хэрэглэгчийн бүртгэлийн түгжээг тайлах зааварчилгаа бүхий и-мэйлийг хэдэн хормын дотор хүлээж авах болно. ",
      "unlocked": "Таны хэрэглэгчийн бүртгэлийн түгжээ амжилттай гарлаа. Та одоо нэвтэрсэн байна ."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "Хүлээн зөвшөөрсөн байх ёстой",
      "already_confirmed": "Баталгаажсан байна",
      "blank": "  Бөглөсөн байх ёстой ",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "Өгөгдөл тохирсонгүй ",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "  Бөглөсөн байх ёстой ",
      "equal_to": "Таарч байх ёстой %{count}",
      "even": "Тоо байх ёстой ",
      "exclusion": "Нөөцлөгдсөн ",
      "expired": "Хугацаа дууссан байна, шинээр хүсэлтээ илгээнэ үү ",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "Их байх ёстой %{count}",
      "greater_than_or_equal_to": "Тэнцүү эсвэл их байх ёстой %{count}",
      "inclusion": "Хүчин төгөлдөр бус үнэлэмж байна",
      "invalid": "Хүчин төгөлдөр бус байна",
      "less_than": "Бага байх ёстой %{count}",
      "less_than_or_equal_to": "Тэнцүү эсвэл бага байх ёстой %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "Тоон утга биш байна",
      "not_an_integer": "Бүхэл тоо байх ёстой ",
      "not_found": "Илэрцгүй байна",
      "not_locked": "Түгжигдээгүй байна",
      "not_saved": {
        "one": "хадгалахыг хориглоно %{resource}:",
        "other": "%{count} хадгалахыг хориглоно %{resource}:"
      },
      "odd": "Сондгой тоо байх ёстой ",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "Өгөгдсөн байна ",
      "too_long": "Энэ хэтэрхий урт байна (%{count} үүнээс хэтрүүлэхгүй байх)",
      "too_short": "Энэ хэтэрхий богино байна (%{count} үүнээс багадуулахгүй байх)",
      "wrong_length": "Уртын хэмжээ буруу байна (%{count} өгөгдөл байх хэрэгтэй)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Вэбсайт хаяг хүчин төгөлдөр биш байна "
        }
      }
    },
    "template": {
      "body": "Дараах талбаруудад асуудал гарсан байна",
      "header": {
        "one": "1 адлаа нь %{model} хадгалахад саад болж байна",
        "other": "%{count} алдаанууд нь %{model} үүнийг хадгалахад  саад болж байна "
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Та өөрийн тэмдэглэсэн газраа өөрөө өөрчилөх боломжтой. Зөвхөн сонголтоо зөв хийж хадгална уу !",
      "1": "Та хэрэглэгчийн эрхээр нэвтрэн орж өөрийн тэмтэглэсэн газар болон түүнтэй холбоотой бүх нарийвчилсан өөрчлөлтүүдийг хийх боломжтой. \"Засварлах\" гэсэн цэсийг сонгон нэмэлт мэдээлэл болон засварлах мэдээллээ оруулна уу.",
      "2": "Та санал сэтгэгдлийн хэсэгт нэмэлт мэдээлэл  (жишээ нь: \"Энэ газар зөөврийн налуу замтай\") оруулж болно. \"Засварлах\" болон \"Сэтгэгдэл нэмэх\" хэсгийг сонгоно уу. "
    },
    "headline": "Энэ газартай холбоотой ямар нэгэн асуудал байна уу?",
    "questions": {
      "0": "Тэмдэгэгээ буруу байна. ",
      "1": "Энэ газрын талаарх дэлгэрэнгүй мэдээлэл буруу эсвэл дутуу байна.",
      "2": "Надад энэ газрын талаар дэлгэрэнгүй мэдээлэл байна. "
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} амжилттай үүсгэлээ"
      },
      "destroy": {
        "alert": "%{resource_name} арилгаж чадахгүй байна",
        "notice": "%{resource_name} амжилттай устгагдлаа"
      },
      "update": {
        "notice": "%{resource_name} амжилттай шинэчлэгдлээ"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Зураг амжилттай устгагдсан байна"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Тэргэнцэрт хүртээмжтэй",
    "show_limited_accessible_places": "Хэсэгчилсэн газрууд тэргэнцэрт хүртээмжтэй",
    "show_places_without_status": "Таниулаагүй өгөгдөл байна ",
    "show_unaccessible_places": "Тэргэнцэрт хүртээмжтэй бус "
  },
  "formtastic": {
    "hints": {
      "email": "Бид таны хаягийг итгэлтэйгээр байршуулах хэрэгтэй байна. Бид тань руу ямар нэгэн вирус илгээхгүй гэдгийг амлаж байна  ",
      "lat": "Газарзүйн зураглал дээр байрлах тэмдэглэгчийг зөв байршил руу шилжүүлэх ",
      "osm_username": "Та хараахан гишүүнээр элсээгүй байна уу? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Та яг одоо OpenStreetMap бүртгэл үүсгэнэ үү</a>",
      "password": "(Хэрвээ та өөрчлөхийг хүсэхгүй байгаа бол энэхүү зайг хоосон үлдээнэ үү)",
      "phone": "Жишээ нь: +49 30 12345678",
      "website": "Жишээ нь: http://www.example.com"
    },
    "labels": {
      "category": "Ангилал:",
      "centralkey": "Гол утга:",
      "city": "Хот:",
      "create": "Газар шинээр нээх ",
      "email": "Цахим хаяг ",
      "finish": "Дуусгах",
      "housenumber": "Үгүй:",
      "lat": "Өндөрийн хэмжээ",
      "lon": "Уртын хэмжээ",
      "name": "Нэр:",
      "osm_password": "OpenStreetMap нууц үг",
      "osm_username": "OpenStreetMap хэрэглэгчийн нэр ",
      "password": "Нууц үг",
      "password_confirmation": "Нууц үгийг давтах ",
      "phone": "Харилцах утасны дугаар:",
      "postcode": "Шуудангийн хайрцаг:",
      "privacy_policy": "Би гэрээний хувийн мэдээлэл нууцлах 1 болон 2-р зүйлийг зөвшөөрч байна ",
      "reset": "Дахин шинэчилэх ",
      "save": "Хадгалах",
      "street": "Гудамж: ",
      "terms": "Би хэрэглэгчийн мөрдөх гэрээний нөхцлийг хүлээн зөвшөөрч байна",
      "type": "Төрөл:",
      "website": "Цахим хуудас:",
      "wheelchair": "Тэргэнцэрт хүртээмжтэй юу?",
      "wheelchair_description": "Хүртээмжийн талаарх сэтгэгдэл:",
      "wheelchair_toilet": "Тэргэнцэрт хүртээмжтэй ариун цэврийн өрөө:"
    },
    "titles": {
      "basic": "Үндсэн мэдээлэл",
      "optional": "Илүү их мэдээлэл <span class=\"addition\">(бүх газар сонголтоор)</span>"
    }
  },
  "global": {
    "form_validation_error": "Дараах алдаануудыг анхаарна уу"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org бол тэргэнцэрт хүртээмжтэй газруудыг хайх, олох болон тэмдэглэх цахим газарзүйн зураглал юм. Бидэнтэй нэгдэж уушийн газар, зоогийн газар, кино театр болон худалдааны төв гэх мэт өөрийн үйлчлүүлж буй олон нийтийн газруудыг тэмдэглээрэй!",
      "homepage": "Нүүр хуудас ",
      "keywords": "Тэргэнцэрт хүртээмжтэй газруудыг олох хайлтын тэмдэглэгээ",
      "search": "Хайлт",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Мэдээ",
      "choose_language": "Хэлээ сонгоно уу.",
      "contact": "Холбоо барих ",
      "faq": "Түгээмэл Асуулт Хариулт",
      "feedback": "Хариу ",
      "home": "Эхлэх ",
      "how_to_add_a_place": "Би хэрхэн газар нэмэх вэ?",
      "imprint": "Тэмдэглэх ",
      "logged_in_as": "Дараах байдлаар нэвтэрсэн байна:",
      "login": "Нэвтрэх",
      "logout": "Гарах",
      "map": "Газарзүйн зураглал",
      "newsletter": "Мэдээллийн самбар ",
      "press": "Хэвлэл",
      "privacy": "Privacy Policy",
      "profile": "Хувийн хэрэг",
      "projects": "Элслээ ",
      "report_problem": "Асуудлыг мэдэгдэх ",
      "suggestions": "Санал хүсэлтүүд ",
      "travelguide": "Аялалын хөтөч ",
      "what_is_barrier_free": "\"Тэргэнцэрт хүртээмжтэй\" гэдэг нь юу гэсэн утгатай вэ?",
      "what_is_wheelmap": "Wheelmap гэж юу вэ?"
    },
    "searchbar": {
      "add_place": "Өөр газар нэмэх",
      "find": "Хайх",
      "placeholder": "Тухайн газрыг хайх",
      "title_add_place": "Яг одоо энэ байршилд шинэ газар нэмэх!"
    },
    "tagline": "Wheelmap лого ",
    "title": "Тэргэнцэр хүртээмжтэй газруудыг олох ",
    "toolbar": {
      "categories": "Ангилал"
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
      "prompt": "Сонголтоо хийнэ үү"
    },
    "submit": {
      "create": "үүсгэх %{model}",
      "submit": "хадгалах %{model}",
      "update": "шинэчилэх %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Wheelmap.org дээр харуул",
      "filter": {
        "category": "Ангилалаа сонгоно уу",
        "deselect_all": "Бүгдийг дахин сонго",
        "select_all": "Бүгдийг сонго",
        "wheelchair": "Тэргэнцэрт хүртээмжтэй юу?"
      },
      "ie": {
        "action": {
          "ignore": "Хэрэгсэхгүй болгох ",
          "upgrade": "Хөтөч шинэчлэл"
        },
        "warning": {
          "headline": "Биднийг өршөөнө үү!",
          "message": "Та интернэт хөтчийг ашиглаж байна. Wheelmap нь стандартад нийцсэн хөтчүүдийг ашиглахыг шаарддаг. Firefox, Chrome, Safari эсвэл Opera зэрэг хөтчүүдийг ашиглана уу. "
        }
      },
      "link": {
        "node": {
          "create": "Шинэ газар нэмэх "
        }
      },
      "overlay": {
        "button": "Эхэлцгээе!",
        "categories": "Ангилалаар газруудыг шүүж харуулах",
        "filter": "Тэргэнцэрт хүртээмжтэй газруудыг шүүж харуулах",
        "headline": "Дэлхий даяар хүн бүр чөлөөтэй ашиглаж болох Wheelmap.org сайт дээр тэргэнцэрт хүртээмжтэй газруудыг хайж ол бас тэмдэглэ. Энэ үнэхээр амархан. ",
        "lookup": "Тусгай газруудыг хайх",
        "secondary_headline": "Олон нийтийн тэргэнцэрт хүртээмжтэй газруудыг тэмдэглэхэд бид замын хөдөлгөөний гэрлэн дохионы системийг ашигладаг. "
      },
      "popup": {
        "form": {
          "limited": "Тэргэнцэрт хэсэгчилсэн хүртээмжтэй ",
          "no": "Тэргэнцэрт хүртээмжтэй бус",
          "save": "Шинэчилэх ",
          "unknown": "Таниулаагүй өгөгдөл байна",
          "yes": "Тэргэнцэрт хүртээмжтэй "
        },
        "help": "Тэргэнцэрт хүртээмжтэй юу? (Тусламж)",
        "more": "цааш ... "
      },
      "zoom_alert": "Илүү олон газрыг харахын тулд томруулж хар "
    }
  },
  "how?": "Хэрхэн?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Тэргэнцэрт хэсэгчилсэн хүртээмжтэй бүх %{type} %{city} -д (%{count})    "
        },
        "no": {
          "headline": "Тэргэнцэрт хүртээмжгүй бүх %{type} %{city} -д (%{count}) "
        },
        "unknown": {
          "headline": "Бүх %{type}дараах %{city}хотуудад тэргэнцэрт хүртээмжтэй эсэх нь тодорхой бус (%{count}) "
        },
        "yes": {
          "headline": "Тэргэнцэрт хүртээмжтэй бүх %{type} нь %{city} -д (%{count}) "
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.de төсөл нь"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Ангилалыг сонгох "
    },
    "node": {
      "info_edit_position": "Энэ байршил нь Wheelmap -д дээрх байдлаар харагдах болно. Хэрвээ буруу тэмдэглэгээ хийгдсэн бол <a href=\"%{url}\">та OpenStreetMap дээр өөрчлөлт хийж болно</a>",
      "mail": {
        "body": "(Зөвхөн Англи эсвэл Герман хэлээр бичнэ.)\n\nСайн байна уу Sozialhelden,\nбайршил алдаатай байна: %{url}\n\nАсуудал нь: ",
        "subject": "[Wheelmap] Асуудал нь %{headline}"
      }
    },
    "node_type": {
      "prompt": "Төрлийг сонгох "
    }
  },
  "node": {
    "address": {
      "city": "%{city}%{postcode}",
      "street": "%{housenumber}%{street}"
    },
    "tags": {
      "phone": "Утасны дугаар:",
      "website": "Цахим хуудас: "
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Уучлаарай, таны өгөгдөл буруу эсвэл бүрэн биш байна",
        "successfull": "Баярлалаа, таны хүсэлт амжилттай хадгалагдаж онлайн хэлбэрээр байршилаа."
      }
    },
    "edit": {
      "header": {
        "title": "Газарт засвар хийх: %{node} wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Цуцлах"
      }
    },
    "errors": {
      "default": "Уучлаарай, ямар нэгэн зүйл буруу байна. Бид энэ асуудлын талаар мэдэгдсэн болно.",
      "not_authorized": "Уучлаарай, нэвтрэлт амжилтгүй боллоо",
      "not_available": "Уучлаарай, энэ хуудас түр хугацаагаар идэвхгүй байна.",
      "not_existent": "Уучлаарай, энэ газар ашиглалтнаас гарсан байна.",
      "not_found": "Уучлаарай, хуудас олдсонгүй.",
      "param_missing": "Хайлтын нөхцлийг сайжруулна уу "
    },
    "flash": {
      "authorize_wheelmap": " Мэдээлэлдээ өөрчлөлт оруулахад тань OpenStreetMap хэрэглэгчийн бүртгэл хэрэгтэй "
    },
    "new": {
      "form": {
        "legend": "Газрын байршил ",
        "location": "Газрын байршилийг газарзүйн зураглал дээр харуул!",
        "section": {
          "accessibility": {
            "name": "Тэргэнцэрт хүртээмжтэй",
            "title": "Тэргэнцэрт хүртээмжтэй гэсэн мэдээлэл"
          },
          "address": {
            "help": "Та газарзүйн зураглал дээр тэмдэглэсэн газрынхаа тэмдэглэгчийг зөв байршилд шилжүүлэх боломжтой. ",
            "name": "Хаяг",
            "title": "Газар хаана байрладаг вэ?"
          },
          "contact": {
            "name": "Холбоо барих ",
            "title": "Бусад холбоо барих мэдээлэл"
          },
          "name_category": {
            "name": "Газрын төрөл болон нэр ",
            "title": "Тэмдэглэсэн газрынхаа анхдагч мэдээллийг бидэнд өгнө үү: "
          },
          "overview": {
            "title": "Эдгээр мэдээллүүд нь зөв үү?"
          },
          "similar_nodes": {
            "empty": "Ижил газрууд олдсонгүй.",
            "go_edit": "Энэ газрыг үргэлжлүүл",
            "go_new": "Энэ дээрх газруудын нэг биш байна ...",
            "name": "Адилхан газар",
            "title": "Бид ойролцоо ижил төстэй газар оллоо. Энэ тэргээрийн нэг хэсэг нь үү?"
          }
        },
        "title": "Газар нэмэх "
      },
      "header": {
        "title": "Шинэ газар | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Цуцлах "
      }
    },
    "node": {
      "link": {
        "claim": "Та энд ажилладаг уу?",
        "edit_node": "Газрыг засварлах",
        "report_bug": "Асуудлыг мэдэгдэх "
      }
    },
    "node_data": {
      "address": "Хаяг:",
      "contact_details": "Холбоо барих мэдээлэл:"
    },
    "node_edit": {
      "details": "Нарийвчилсан мэдээлэл",
      "edit": "Засварлах"
    },
    "node_map": {
      "map": "Газарзүйн зураглал:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Сэтгэгдэл:"
    },
    "node_photos": {
      "add": "Нэмэх",
      "alert": "Мэдэгдэл: Орох гарах гарцын зураг нь дараах зүйлсийг маш тод харуулсан байх ёстой. Орох гарах гарц шаттай эсэх? Хаалга хэр өргөн эсэх? Босгоны өндөр ойролцоогоор? Зураг нь JPG эсвэл PNG хувилбартай байх ёстой. Мөн 10 MB хэмжээнээс хэтрэхгүй байх хэрэгтэй. ",
      "photos_of_this_place": "Энэ газрын зурагнууд:",
      "upload": "Хуулах "
    },
    "node_similar": {
      "similar": "Адилхан газрууд %{name}"
    },
    "node_status": {
      "accessible_toilet": "Тэргэнцэрт хүртээмжтэй ариун цэврийн өрөө:",
      "premium": "%{name} Өгүүлэмж: Энэ газар бол ",
      "wheelchair_accessibility": "Тэргэнцэрт хүртээмжтэй: "
    },
    "node_streetview": {
      "streetview": "Гудамжны харагдах байдал:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Хэрвээ энэ газар нь тэргэнцэрт хүртээмжтэй бол Wheelmap.org сайт дээрээс олдох болно. Эсвэл дэлгэрэнгүй мэдээлэл болон зурагнуудыг нэмнэ үү. ",
          "title": "Энэ газар нь Wheelmap.org сайт дээр байна: %{name}"
        },
        "title": "Газар: %{node}Wheelmap.org "
      },
      "link": {
        "back": "Буцах",
        "large_map": "Томруулах",
        "listing": "Бүх газар дараах төрлөөр '%{type}' %{city}-д",
        "upload": "Зураг хуулах "
      },
      "more_data_from": "Энд тухайн газрын талаар илүү мэдээлэл байгаа ба дараах байдлаар баталгаажсан болно:",
      "share": {
        "email": "Цахим хаяг ",
        "facebook": "Facebook",
        "text": "Энэ газар нь Wheelmap.org сайт дээр олдлоо: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Уучлаарай, таны өгөгдөл буруу эсвэл бүрэн биш байна ",
        "successfull": "Баярлалаа, таны хүсэлт амжилттай хадгалагдаж онлайн хэлбэрээр байршилаа. "
      }
    },
    "update_wheelchair": {
      "successfull": "Төрөл нь \"%{name}\" байсан бөгөөд \"%{status}\" болж өөрчлөгдөж онлайн хэлбэрт шилжлээ. "
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ", ",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ", ",
      "precision": 3,
      "separator": ". ",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n%u",
        "units": {
          "billion": "Тэрбум ",
          "million": "Сая",
          "quadrillion": "Квадрилион",
          "thousand": "Мянга",
          "trillion": "Их наяд",
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
        "format": "%n%u ",
        "units": {
          "byte": {
            "one": "Byte ",
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
        "headline": "Wheelmap.org хуудсанд шинээр газар нэмэх болон тохируулга хийхээсээ өмнө та OpenStreetMap хэрэглэгчийн эрхээрээ нэвтрэн орох хэрэгтэй. "
      }
    },
    "callback": {
      "notice": "Таны Wheelmap хэрэглэгчийн эрх OpenStreetMap - тай холбогдсон байна %{user}."
    }
  },
  "or": "эсвэл ",
  "place": {
    "one": "%{count} газрууд",
    "other": "%{count} газрууд  "
  },
  "poi": {
    "category": {
      "accommodation": "Байр, сууц",
      "education": "Боловсрол",
      "food": "Хоол, хүнс",
      "government": "Засгийн газар ",
      "health": "Эрүүл мэнд",
      "leisure": "Чөлөөт цаг",
      "misc": "Нэмэлт зүйлс",
      "money_post": "Банк / Шуудан",
      "public_transfer": "Нийтийн тээвэр",
      "shopping": "Дэлгүүр",
      "sport": "Спорт",
      "tourism": "Аялал жуулчлал",
      "unknown": "Танигдаагүй "
    },
    "name": {
      "accommodation": {
        "beach_resort": "Далайн эргийн зочид буудал",
        "bed_and_breakfast": "Ор ба өглөөний цай",
        "camp_site": "Майхан",
        "caravan_site": "Чиргүүл ",
        "chalet": "Дүнзэн байшин",
        "dormitory": "Олон ортой унтлагын өрөө",
        "guest_house": "Зочид буудаллах байшин ",
        "hostel": "Дэн буудал",
        "hotel": "Зочид буудал",
        "motel": "Гэр буудал"
      },
      "education": {
        "college": "Коллеж",
        "driving_school": "Жолооны курс",
        "kindergarten": "Цэцэрлэг",
        "library": "Номын сан",
        "museum": "Музей",
        "school": "Сургууль",
        "university": "Их сургууль"
      },
      "food": {
        "bar": "Баар",
        "biergarten": "Цэцэрлэгт хүрээлэн",
        "cafe": "Кафе",
        "drinking_water": "Уух ус ",
        "fast_food": "Түргэн хоол",
        "ice_cream": "Зайрмаг худалдаалах газар",
        "pub": "Уушийн газар",
        "restaurant": "Зоогийн газар"
      },
      "government": {
        "courthouse": "Шүүхийн байр",
        "embassy": "Элчин ",
        "employment_agency": "Хөдөлмөр зуучлалын газар",
        "government": "Засгийн газрын агентлаг ",
        "police": "Цагдаа",
        "public_building": "Олон нийтийн байгууламж ",
        "townhall": "Хотын захиргаа"
      },
      "health": {
        "alternative": "Уламжлалт эмчилгээ",
        "dentist": "Шүдний эмч",
        "doctors": "Эмч ",
        "hearing_aids": "Сонсголын туслах хэрэглэгдэхүүн худалдаалагч ",
        "hospital": "Эмнэлэг",
        "medical_supply": "Эм ханган нийлүүлэгч ",
        "occupational_therapist": "Хөдөлгөөн засалч ",
        "pharmacy": "Эмийн сан",
        "physiotherapist": "Физик эмчилгээний эмч ",
        "psychotherapist": "Сэтгэлзүйч ",
        "social_facility": "Нийгмийн үйлчилгээний газар",
        "speech_therapist": "Яриа засалч ",
        "veterinary": "Амьтдын эмч "
      },
      "leisure": {
        "arena": "Төв цэнгэлдэх ",
        "brothel": "Эмсийн хүрээлэн ",
        "casino": "Казино",
        "cinema": "Кино театр ",
        "community_centre": "Олон нийтийн төв ",
        "gallery": "Үзэсгэлэн ",
        "massage": "Алжаал тайлах газар",
        "nightclub": "Шөнийн цэнгээний газар",
        "playground": "Тоглоомын талбай",
        "sauna": "Саун",
        "stripclub": "Тайчигч клуб",
        "tattoo": "Шивээсний дэлгүүр",
        "theatre": "Театр",
        "zoo": "Амьтны хүрээлэн"
      },
      "misc": {
        "association": "Холбоо",
        "company": "Хувийн хэвшил (Office)",
        "estate_agent": "Үл хөдлөх хөрөнгө зуучын газар",
        "insurance": "Даатгал",
        "lawyer": "Хуульч",
        "ngo": "Төрийн Бус Байгууллага",
        "place_of_worship": "Мөргөлийн газар",
        "political_party": "Улс төрийн намын байр",
        "toilets": "Аруин цэврийн өрөө"
      },
      "money_post": {
        "atm": "АТМ",
        "bank": "Банк",
        "bureau_de_change": "Валют арилжааны газар ",
        "post_box": "Шуудангийн хайрцаг",
        "post_office": "Шуудан "
      },
      "public_transfer": {
        "aerodrome": "Нисэх онгоцны буудал",
        "bicycle_parking": "Дугуйн зогсоол",
        "bicycle_rental": "Дугуй түрээсийн газар",
        "boatyard": "Усан онгоцны зогсоол",
        "bus_station": "Автобусны буудал",
        "bus_stop": "Автобусны зогсоол",
        "cable_car": "Тралейбус",
        "car_rental": "Машин түрээсийн газар",
        "car_sharing": "Албан бус такси үйлчилгээ",
        "chair_lift": "Өргөгч сандал ",
        "ferry": "Сүйх тэрэг",
        "ferry_terminal": "Сүйх тэрэгний зогсоол",
        "fuel": "Түлш түгээгүүрийн газар",
        "halt": "Зогсоол",
        "light_rail": "Гэрэлт зам ",
        "parking": "Машины зогсоол",
        "parking_aisle": "Онгоцны буудлын зогсоол",
        "platform": "Платформ",
        "station": "Галт тэрэгний буудал",
        "subway_entrance": "Метроны нэвтрэх гарц ",
        "terminal": "Нисэх онгоцны тавцан ",
        "tram_stop": "Трамвайн зогсоол"
      },
      "shopping": {
        "alcohol": "Архи худалдаалах цэг ",
        "antiques": "Эртний эдлэлийн дэлгүүр ",
        "art": "Галлирей дэлгүүр",
        "bakery": "Бэйкери ",
        "beauty": "Гоо сайхны салон ",
        "beverages": "Ундаа ",
        "bicycle": "Моторт дугуйн дэлгүүр",
        "books": "Номын худалдаа",
        "butcher": "Мах худалдаалах цэг",
        "car_repair": "Машин засварын газар",
        "car_shop": "Машин худалдааны газар",
        "chemist": "Эмийн сан ",
        "clothes": "Хувцас",
        "computer": "Компьютер ",
        "confectionery": "Чихрийн дэлгүүр",
        "convenience": "Түргэн үйлчилгээний цэг",
        "copyshop": "Канон, принтэр ",
        "deli": "Мухлаг ",
        "department_store": "Их дэлгүүр ",
        "doityourself": "Өөрөө өөртөө үйлчилэх цэг",
        "dry_cleaning": "Хуурай хими цэвэрлэгээ",
        "electronics": "Электрон бараа ",
        "erotic": "Секс хэрэгсэлийн дэлгүүр",
        "fabric": "Бөс даавууны дэлгүүр ",
        "farm_shop": "Хөдөө аж ахуйн тоног төхөөрөмж худалдааны газар",
        "florist": "Цэцгийн худалдаа ",
        "funeral_directors": "Оршуулгын газар ",
        "furniture": "Тавилгын худалдаа ",
        "garden_centre": "Цэцэрлэгт хүрээлэн ",
        "gift": "Бэлэг дурсгалын дэлгүүр ",
        "greengrocer": "Жимс ногооны худалдаа ",
        "hairdresser": "Үсчин ",
        "hardware": "Компьютерийн сэлбэг худалдаа ",
        "interior_decoration": "Дотоод засал чимэглэлийн дэлгүүр ",
        "jewelry": "Үнэт эдлэлийн дэлгүүр ",
        "kiosk": "Нийтийн хоолны газар",
        "laundry": "Хувцас цэвэрлэгээний үйлчилгээ ",
        "mall": "Худалдааны төв ",
        "mobile_phone": "Гар утасны дэлгүүр ",
        "music": "Дуу бичлэг худалдаалах дэлгүүр",
        "musical_instrument": "Хөгжмийн зэмсгийн дэлгүүр ",
        "newsagent": "Мэдээний агентлаг ",
        "optician": "Хараазүйн эмч ",
        "organic": "Органик бүтээгдэхүүний дэлгүүр ",
        "outdoor": "Аялал зугаалгын хэрэгсэл нийлүүлэгч ",
        "pet": "Амьтны дэлгүүр ",
        "photo": "Зураг ",
        "second_hand": "Гар дамжсан худалдаа",
        "shoes": "Гутал ",
        "sports": "Спорт",
        "stationery": "Бичиг хэргийн дэлгүүр ",
        "supermarket": "Супермаркет",
        "tailor": "Оёдолчин ",
        "tea": "Цай нийлүүлэгч",
        "tobacco": "Тамхины дэлгүүр",
        "toys": "Тоглоом",
        "travel_agency": "Аялалын агентлаг",
        "variety_store": "Хямдралтай худалдааны дэлгүүр",
        "video": "Видео түрээсийн газар"
      },
      "sport": {
        "pitch": "Спортын талбай ",
        "sports_centre": "Спортын төв",
        "stadium": "Стадион ",
        "swimming": "Усан спорт ",
        "swimming_pool": "Усан сан "
      },
      "tourism": {
        "archaeological_site": "Археологийн бүс ",
        "arts_centre": "Урлагын төв ",
        "artwork": "Урлагын бүтээл",
        "attraction": "Хүмүүсийн очих дуртай газар",
        "battlefield": "Дайны талбар ",
        "beach": "Далайн эрэг",
        "beacon": "Гэрэлт цамхаг",
        "castle": "Ордон ",
        "cave_entrance": "Агуйн ам ",
        "information": "Жуулчдын мэдээлэл",
        "memorial": "Дурсгалт газар",
        "theme_park": "Соёл амралтын цэцэрлэгт хүрээлэн",
        "tower": "Цамхаг",
        "viewpoint": "Алсыг харах цэг"
      },
      "unknown": {
        "unknown": "Тодорхойгүй газар"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Төлөв: холбогдсон",
          "grant": "Холбогдоно уу ",
          "not_connected": "Төлөв: Холбогдоогүй ",
          "revoke": "Салгах "
        }
      },
      "headline": "Профайл тохиргоо хийх "
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
        "headline": "Уучлаарай, энэ нэршлээр ямар нэгэн газар олдсонгүй \"%{query}\"",
        "hint": {
          "example": "<strong>Жишээ нь:</strong> Лондон, Нэгдсэн Улс ",
          "info": "Манай хайлтын систем нь нэр эсвэл хаягын мэдээлэл оруулсан нөхцөлд ажиллах болно. Мөн нэр болон хаягаар зэрэг хайлт хийж болно. жишээ нь: хот болон гудамжны нэр. Харин дараах байдлаар хайлт хийвэл ажиллахгүй болохыг анхаарна уу! Газрын төрлөөр, жишээ нь: зоогийн газар, кино театр гэх мэт ",
          "work_in_progress": "Бид хайлтын системээ илүү хялбар ирээдүйн шаардлагад нийцсэн болгох тал дээр шаргуу ажиллаж байна. "
        },
        "try_this": {
          "address": "Нарийвчилсан <strong>хаягжилтийн мэдээллийг</strong> дэлгэрэнгүй өгнө үү.",
          "intro": "Үүнийг туршаад үзнэ үү: ",
          "spell_check": "Та <strong>үсгийн алдаагаа</strong> шалгана уу. "
        }
      },
      "results": {
        "ticker": {
          "one": "%{count}үр дүн:",
          "other": "%{count}үр дүнгүүд: "
        }
      },
      "search": {
        "for": "Хайлт хийж байна \"%{q}\"",
        "not_found": "Хайсан газар олдсонгүй!"
      }
    },
    "timeout": {
      "headline": "Уучлаарай, зарим нэгэн зүйлс буруу байна ",
      "info": "Манай хайлтын үйлчилгээ түр хугацаагаар ажиллахгүй болохыг анхаарна уу. ",
      "repeat_search": "Дахин хайлт хийнэ үү"
    }
  },
  "splash": {
    "countline": "%{count} газрууд  тэмдэглэгдсэн байна. ",
    "headline": "Хүн бүр тэргэнцэрт хүртээмжтэй газруудыг нэмэх боломжтой!",
    "start": "Эхлэх",
    "step1": "Өөрийн мэдэх газраа сонгоно уу",
    "step2": "Тэмдэглээд дараа нь хадгалах гэсэн товчлуурыг дарна уу",
    "step3": "Энэ хангалттай! Бүртгүүлэх шаардлагагүй ",
    "what_is_wheelmap": "Wheelmap гэж юу вэ? "
  },
  "statistics": "Үзүүлэлтүүд",
  "support": {
    "array": {
      "last_word_connector": "мөн",
      "sentence_connector": "бас",
      "two_words_connector": "түүнчлэн ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Сонголтоо хийнэ үү"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a,%d%b %Y %H:%M:%S %z ",
      "long": "%B %d, %Y %H:%M ",
      "short": "%d%b %H:%M "
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Тэргэнцэрт хүртээмжгүй ариун цэврийн өрөө",
    "unknown": "Ариун цэврийн өрөөний төлөв мэдэгдэхгүй байна",
    "what_is": {
      "no": "Хаалганы дотор өргөн хамгийн багадаа 90см (35инч), шалны цэвэр хэмжээ хамгийн багадаа 150 x 150 см (59 x 59инч), суултуур болон тэргэнцэрийн өндрийн хэмжээ адил түвшинд байх, эвхэгддэг хашлагууд болон гар бариултай буюу хүртээмжтэй ванн ",
      "unknown": "Ариун цэврийн өрөөний төлөвийг тогтооход туслана уу!",
      "yes": "Хаалганы дотор өргөн хамгийн багадаа 90см (35инч), шалны цэвэр хэмжээ хамгийн багадаа 150 x 150 см (59 x 59инч), суултуур болон тэргэнцэрийн өндрийн хэмжээ адил түвшинд байх, эвхэгддэг хашлагууд болон гар бариултай буюу хүртээмжтэй ванн"
    },
    "yes": "Тэргэнцэрт хүртээмжтэй ариун цэврийн өрөө "
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Таны бүртгэл идэвхижлээ!"
      },
      "error": {
        "notice": "Имэйл хаяг болон нууц үг таарахгүй байна."
      },
      "notice": "Та нэвтэрсэн байна!"
    },
    "destroy": {
      "notice": "Баяртай, удахгүй эргэн уулзъя! "
    },
    "new": {
      "email": "Имэйл хаяг",
      "login": "Нэвтрэх ",
      "login_with_twitter": "Twitter хаягаар нэвтрэх ",
      "password": "Нууц үг ",
      "remember_me": "Нэвтэрсэн хэвээр байна"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Та бараг хүрлээ! Одоо та Wheelmap хэрэглэгчийн бүртгэлээ дуусгана уу:",
        "set_password_for_mobile": "Та OpenStreetMap -д амжилттай бүртгэгдлээ. Та  Wheelmap-д өөрийн мэйл хаягийг бүртггүүлснээр бид таны үйл ажиллагааг цаг алдалгүй мэдэгдэж байх болно. (жишээ нь: таны тэмдэглэсэн газрын тоо). Мөн та энэ мэдээллийг өөрийн \"Профайл\" дээрээ хүлээн авах боломжой. ",
        "text": "Бид таньтай хэрхэн холбоотой байх вэ? Та энэ мэдээллийг дараа нь өөрийн Профайл дээрээ өөрчлөх боломжтой."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Таны байршуулсан зурагнууд"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Таны бүртгэлийн тухай мэдээлэл"
        },
        "title": "Хувийн хэрэг"
      },
      "newsletter": {
        "label": "Тийм, wheelmap - ийн тухайд намайг шинэчилнэ үү.",
        "text": "Wheelmap мэдээ мэдээлэлтэй хамт байгаарай. Санаа зоволтгүй, бид танд ямар нэгэн хохирол учруулахгүй. Хамгийн ихдээ сардаа ганц удаа биднээс мэдээ мэдээлэл хүлээж авах болно. ",
        "title": "Мэдээллийн самбар "
      },
      "photos": {
        "empty": "Та одоогоор ямар нэгэн зураг оруулаагүй байна.",
        "title": "Зураг"
      },
      "show": {
        "greeting": {
          "anonymously": "Сайн байна уу ",
          "personalized": "Сайн байна уу %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "татаж оруулсан %{count} зурагнууд ",
            "other": "татаж оруулсан %{count} зурагнууд "
          },
          "pois_added": {
            "one": "нэмэгдсэн %{count}газрууд ",
            "other": "нэмэгдсэн %{count} газрууд "
          },
          "pois_edited": {
            "one": "засварлагдсан %{count}газрууд ",
            "other": "засварлагдсан %{count}газрууд "
          },
          "pois_marked": {
            "one": "тэмдэглэгдсэн %{count}газрууд ",
            "other": "тэмдэглэгдсэн %{count}газрууд "
          },
          "text": "Танд бий "
        },
        "text_html": "Сайн байна уу,<br>\n Wheelmap.org! –т (эргэн) тавтай морил! Бид таньтай хамтран ажиллах болсондоо баяртай байна! Та бидний <a href=\"http://news.wheelmap.org/en/\">Блог</a> эсвэл <a href=\"http://news.wheelmap.org/en/FAQ/\">Тогтмол асуулт хариулт</a> хэсгээр нэвтэрч болно. Хэрвээ та Wheelmap.org сайтын талаарү ихийг мэдэхийг, эсвэл <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">төслийн</a> талаар илүү ихийг сурахыг хүсвэл бид тань руу Wheelmap.org! сайтад хэрхэн ажиллах талаар зааварчилгаа илгээх болно. <br>\n Та бидэнтэй холбоотой байж биднийг олон нийтийн сүлжээ болох <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> болон <a href=\"https://twitter.com/wheelmap\">Twitter</a> -т дагаснаар бидний гаргадаг сар тутмын мэдээ мэдээллүүдийг хүлээж авах болно. Бид таньтай холбоо тогтоон, таны санаа бодлыг сонсохдоо таатай байх болно. <br>\n Та одоо зураглалаа тааваараа хийж болно!<br>\n Газарзүйн зураглалын баг ",
        "title": "Ерөнхий байдлаар харах "
      },
      "widget": {
        "categories": "Ангилалаар шүүж харах",
        "center": "Газрын зургийн талбар ",
        "empty_center": "Газрын зургийн төвөөс эхлэн хайлт хийх ...",
        "empty_provider": "Нийлүүлэгчийг сонгох ",
        "height": "Өндрийн хэмжээ",
        "legends": {
          "embed": "Суулгасан код",
          "embed_explanation": "Та өөрийн харахыг хүссэн газрыг байршлийн дагуу буюу уртраг (<code>lat</code>), өргөрөг (<code>lon</code>) болон томруулж, жижигрүүлэх (<code>zoom</code>) байдлаар газарзүйн нарийвчилсан (виджет) тохиргоо хийж харах боломжтой. ",
          "general": "Та өөрийн Wheelmap виджетийг бий болгон түүнийгээ өөрийн вэбсайт болон блогтоо оруулж болно. ",
          "preview": "Урьдчилан харах",
          "settings": "Тохиргоо"
        },
        "providers": "Нийлүүлэгч ",
        "title": "Виджет ",
        "width": "Өргөний хэмжээ "
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
    "limited": "Хэсэгчилсэн газрууд тэргэнцэрт хүртээмжтэй",
    "no": "Тэргэнцэрт хүртээмжтэй бус ",
    "unknown": "Таниулаагүй өгөгдөл байна ",
    "yes": "Тэргэнцэрт хүртээмжтэй"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Төслөөр ",
      "based_on": "Суурилсан ",
      "become_a_supporter": "Дэмжигч болох ",
      "main_supporter": "Үндсэн дэмжигч "
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "IPhone App яг одоо татаж авах  "
    },
    "logo": {
      "alt": "Wheelmap Logo - тэргэнцэрт хүртээмжтэй газруудыг хайх ",
      "title": "Wheelmap - тэргэнцэрт хүртээмжтэй газруудыг хайх"
    },
    "what_is": {
      "fully_accessible": "Нэвтрэх орц, гарц гишгүүргүй; бүх өрөө гишгүүргүй",
      "limited_accessible": "Нэвтрэх орц, гарц хамгийн ихдээ ганц шаттай. Өндөр нь 7см (3инч), ихэнх өрөөнүүд гишгүүргүй ",
      "not_accessible": "Нэвтрэх орц, гарц гишгүүртэй ба цөөн хэдэн гишгүүртэй, өрөөнүүд хүртээмжтэй бус.",
      "unknown_accessible": "Газар тэмдэглэхэд туслах! "
    }
  },
  "will_paginate": {
    "next_label": "Дараа &#8594 ",
    "page_entries_info": {
      "multi_page": "Дэлгэцэнд %{count}-н %{model}-г %{from} - %{to}хоорондох байдлаар харуулж байна",
      "multi_page_html": "Дэлгэцэнд %{model}-г  <b>%{count}</b>-н байдлаар<b>%{from}&nbsp;-&nbsp;%{to}</b> хооронд харуулж байна ",
      "single_page": {
        "one": "Дэлгэцэнд 1 %{model} харуулж байна ",
        "other": "Бүх %{count} %{model} дэлгэцэнд харуулж байна",
        "zero": "%{model} олдсонгүй "
      },
      "single_page_html": {
        "one": "Дэлгэцэнд <b>1</b> %{model} харуулж байна ",
        "other": "Дэлгэцэнд харуулж байна <b>all&nbsp; %{count}</b>%{model}",
        "zero": "%{model} олдсонгүй"
      }
    },
    "page_gap": "&hellip; ",
    "previous_label": "&#8592; Previous "
  }
});
