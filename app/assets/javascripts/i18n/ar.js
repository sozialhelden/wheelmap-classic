I18n.translations || (I18n.translations = {});
I18n.translations["ar"] = I18n.extend((I18n.translations["ar"] || {}), {
  "actions": {
    "cancel": "إلغاء",
    "next": "التالي",
    "save": "حفظ",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "غير مصرح لك"
    },
    "any": "أي",
    "batch_actions": {
      "action_label": "%{title} مختار",
      "button_label": "Batch Actions",
      "default_confirmation": "هل انت متأكد من هذا",
      "delete_confirmation": " هل انت متأكد من حذف هذا%{plural_model}?",
      "labels": {
        "destroy": "حذف"
      },
      "link": "إنشاء",
      "selection_toggle_explanation": "(تتبيث الخيار)",
      "succesfully_destroyed": {
        "one": "دمرت بنجاح 1 %{model}",
        "other": "دمرت بنجاح %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "لايوجد  %{resource_name} بعد.",
      "link": "أنشاء"
    },
    "cancel": "إلغاء",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "إضافة تعليق",
      "author": "مؤلف",
      "author_missing": "مجهول",
      "author_type": "نوع الؤلف",
      "body": "هيكل",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "لم يتم إضافة تعليق، النص فارغ"
      },
      "no_comments_yet": "لا يوجد تعليقات بعد",
      "resource": "مصادر",
      "resource_type": "نوع المصادر",
      "title": "تعليق",
      "title_content": "تعليقات (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "لوحة تحكم",
    "dashboard_welcome": {
      "call_to_action": "'app/admin/dashboard.rb' لاضافة وحدة الي لوحة التحكم, اتبع ",
      "welcome": ".مرحبا بك في الادارة. لوحة التحكم الرئيسية "
    },
    "delete": "حذف",
    "delete_confirmation": "هل تريد تأكيد الحذف؟",
    "delete_model": "حذف %{model}",
    "details": "%{model} التفاصيل",
    "devise": {
      "change_password": {
        "submit": "تغير كلمة المرور",
        "title": "تغير كلمة المرور"
      },
      "email": {
        "title": "البريد الإلكترونيّ"
      },
      "links": {
        "forgot_your_password": "هل نسيت كلمة المرور؟",
        "resend_confirmation_instructions": "إعادة إرسال تعليمات تأكيد الحساب",
        "resend_unlock_instructions": "إعادة إرسال تعليمات تنشيط الحساب",
        "sign_in": "دخول",
        "sign_in_with_omniauth_provider": "تسجيل الدخول ب %{provider}",
        "sign_up": "التسجيل"
      },
      "login": {
        "remember_me": "تذكرني",
        "submit": "تسحيل",
        "title": "دخول"
      },
      "password": {
        "title": "كلمة المرور"
      },
      "resend_confirmation_instructions": {
        "submit": "إعادة ارسال تعليمات التأكيد",
        "title": ""
      },
      "reset_password": {
        "submit": "استرجاع كلمة المرور",
        "title": "هل نسيت كلمة المرور؟"
      },
      "sign_up": {
        "submit": "تسجيل الدخول",
        "title": "تسجيل الدخول"
      },
      "subdomain": {
        "title": "فرعي"
      },
      "unlock": {
        "submit": "إعادة ارسال التعليمات المحررة",
        "title": "إعادة ارسال التعليمات المحررة"
      },
      "username": {
        "title": "اسم المستخدم"
      }
    },
    "download": "تحميل",
    "dropdown_actions": {
      "button_label": "عمليات"
    },
    "edit": "تعديل",
    "edit_model": "تعديل %{model}",
    "empty": "فارغ",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "تفريغ",
        "filter": "تصنيف"
      },
      "predicates": {
        "contains": "يحتوي",
        "ends_with": "ينتهي ب",
        "equals": "متساوي",
        "greater_than": "اكثر من",
        "less_than": "اقل من",
        "starts_with": "يبدأ ب"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "حذف",
    "has_many_new": "اضافة جديد %{model}",
    "has_many_remove": "ازالة",
    "index_list": {
      "block": "قائمة",
      "blog": "مدونة",
      "grid": "شبكة",
      "table": "جدول"
    },
    "less_than": "Less Than",
    "logout": "تسجيل الخروج",
    "main_content": "الرجاء التنفيذ %{model}#main_content لعرض المحتويات.",
    "new_model": "جديد %{model}",
    "next": "التالي",
    "pagination": {
      "empty": "لا يوجد %{model} ",
      "entry": {
        "one": "مدخل",
        "other": "مدخلات"
      },
      "multiple": "عرض %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total",
      "multiple_without_total": "عرض %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "عرض <b>1</b> %{model}",
      "one_page": "عرض <b>all %{n}</b> %{model}"
    },
    "powered_by": "تنفيذ %{active_admin} %{version}",
    "previous": "السابق",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "المُرشحات الحاليّة:",
      "headline": "المجال:",
      "no_current_filters": "بدون"
    },
    "sidebars": {
      "filters": "المُرشحات",
      "search_status": "حالات البحث"
    },
    "status_tag": {
      "no": "لا",
      "yes": "نعم"
    },
    "unsupported_browser": {
      "headline": "يُرجى مُلاحظة أن أكتف أدمن لم تعد تدعم المُتصفّح إنترنت اكسبلورر الإصدار الثامن وما قبله",
      "recommendation": "ننصح بالتحديث إلى الإصدار الأخير <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, أو <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "إن كنت تستخدم الإصدار التاسع من إنترنت إكسبلورر فتأكّد من أن <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "عرض"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "العنوان",
        "address_city": "المدينة",
        "address_housenumber": "رقم المنزل",
        "address_postcode": "الرمز البريدي",
        "address_street": "شارع",
        "name": "الإسم",
        "note": "ملاحظة",
        "phone": "الهاتف",
        "type": "النوع",
        "website": "موقع الكتروني"
      },
      "user": {
        "first_name": "الإسم الأول",
        "last_name": "الإسم الأخير",
        "privacy_policy": "سياسة الخصوصية",
        "terms": "الشروط"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "يجب أن تقبل",
        "blank": " يرجى ملء الحقل",
        "confirmation": "غير متوافق مع التأكيد",
        "empty": " يرجى ملء الحقل",
        "equal_to": "%{count} يجب أن يساوي ",
        "even": "يجب أن يكون العدد زوجي",
        "exclusion": "محجوز",
        "greater_than": "%{count} يجب أن يكون أكبر من",
        "greater_than_or_equal_to": "%{count} يجب أن يكون أكبر من أو يساوي ",
        "inclusion": "ليس خيارا مقبولا",
        "invalid": "خطأ",
        "less_than": "%{count} يجب أن يكون أصغر من",
        "less_than_or_equal_to": "%{count} يجب أن يكون أصغر من أو يساوي ",
        "not_a_number": "ليس رقما",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "يجب أن يكون فردي",
        "record_invalid": " %{errors} فشل التحقق من صحة الرسالة",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "غير متوفر (مستخدم)",
        "too_long": "%{count}أطول من اللازم (الحد الأقصى هو)",
        "too_short": "%{count} أقصر من اللازم (الحد الأدنى هو)",
        "wrong_length": "%{count} الطول غير مناسب (يجب أن يكون )"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "أدخل كلمة المرور"
            },
            "privacy_policy": {
              "accepted": "لابد من القبول"
            },
            "terms": {
              "accepted": "لابد من القبول"
            }
          }
        },
        "user_session": {
          "email": "عنوان البريد الالكتروني",
          "password": "كلمة المرور",
          "remember_me": "البقاء مسجلا"
        }
      },
      "template": {
        "body": "يرجى التحقق من الحقول التالية:",
        "header": {
          "one": "%{model} ليس بالامكان الحفظ خطأ واحد.",
          "other": "%{count}  يوجد خطأ %{model} لايمكن الحفظ"
        }
      }
    },
    "models": {
      "user": "مستخدم"
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
      "notice": "تم الدخول"
    },
    "require_user": {
      "notice": "لابد أن تكون مسجلا لتشاهد هذه الصفحة"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "إضافة مكان جديد ",
      "edit": "تعديل مكان"
    },
    "root": "ويل ماب"
  },
  "common": {
    "close": "مغلق",
    "skip": "تخطي"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "يُرجى الكتابة إلينا باللغة English أو Deutsch.",
        "flash_after_submit": "شكراً لاتصالك بنا. سيتصل بك فريق الدعم الخاص بنا بأسرع ما يمكن.",
        "header_text_html": "يُرجى تفقد <a href=\"https://news.wheelmap.org/en/faq/\"> الأسئلة المتكررة </a> للمساعدة أولاً. إذا لم تجد حلاً لمشكلتك هناك، يُرجى الإجابة عن الأسئلة التالية حتى يمكننا إصلاح الأمر.",
        "note": "لاحظ أن Wheelmap مشروع مفتوح المصدر تديره منظمة لا تهدف إلى الربح وأننا لدينا مصادر محدودة لتطوير التطبيق.",
        "questions": {
          "a": "ماذا فعلت؟",
          "b": "ماذا توقعت أن يحدث؟",
          "c": "ماذا حدث بدلاً من ذلك؟"
        },
        "submit_button": "تقديم",
        "title": "بلغ عن مشكلة"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت"
    ],
    "abbr_month_names": [
      null,
      "يناير",
      "فبراير",
      "مارس",
      "ابريل",
      "مايو",
      "يونيو",
      "يوليو",
      "اغسطس",
      "سبتمبر",
      "اكتوبر",
      "نوفمبر",
      "ديسمبر"
    ],
    "day_names": [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %e, %Y",
      "short": "%e %b"
    },
    "month_names": [
      null,
      "يناير",
      "فبراير",
      "مارس",
      "ابريل",
      "مايو",
      "يونيو",
      "يوليو",
      "اغسطس",
      "سبتمبر",
      "اكتوبر",
      "نوفمبر",
      "ديسمبر"
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
        "one": "حوالي ساعة واحدة",
        "other": "%{count} ساعات"
      },
      "about_x_months": {
        "one": "حوالي شهر واحد",
        "other": "%{count} أشهر"
      },
      "about_x_years": {
        "one": "حوالي سنة",
        "other": "%{count} سنوات"
      },
      "almost_x_years": {
        "one": "تقريبا سنة واحدة",
        "other": "ما يقرب من %{count} سنة"
      },
      "half_a_minute": "نصف دقيقة",
      "less_than_x_minutes": {
        "one": "أقل من دقيقة",
        "other": "%{count} دقائق"
      },
      "less_than_x_seconds": {
        "one": "أقل من ثانية",
        "other": "%{count} ثوان"
      },
      "over_x_years": {
        "one": "أكثر من سنة",
        "other": "%{count} سنوات"
      },
      "x_days": {
        "one": "يوم واحد",
        "other": "%{count} أيام"
      },
      "x_minutes": {
        "one": "دقيقة واحدة",
        "other": "%{count} دقائق"
      },
      "x_months": {
        "one": "شهر واحد",
        "other": "%{count} أشهر"
      },
      "x_seconds": {
        "one": "ثانية واحدة",
        "other": "%{count} ثوان"
      }
    },
    "prompts": {
      "day": "اليوم",
      "hour": "ساعة",
      "minute": "دقيقة",
      "month": "الشهر",
      "second": "ثانية",
      "year": "السنة"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "تم تأكيد الحساب بنجاح",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "سوف تتلقى رسالة على بريدك الالكتروني مع تعليمات حول كيفية تأكيد حسابك في بضع دقائق.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "هل أنت متأكد ؟",
      "headline": "Delete account",
      "link": "إحذف الآن"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Current password <i>(we need it to confirm your changes)</i>",
          "email": "بريد الكتروني",
          "password": " كلمة المرور  <i>(أبقه فارغا اذا كنت لاتريد التعديل)<i/>",
          "password_confirmation": "إعادة كلمة المرور"
        },
        "submit": "حفظ التعديلات"
      },
      "headline": "تحرير الحساب"
    },
    "failure": {
      "already_authenticated": ".انت بالفعل مسجل",
      "inactive": "Your account has not been activated yet.",
      "invalid": "البريد إلكتروني أو كلمة المرور غير صالحة.",
      "invalid_token": "رمز التوثيق غير صالح.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "حسابك مغلق مؤقتا.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "تحتاج لتسجيل الدخول أو الاشتراك قبل المتابعة.",
      "unconfirmed": "لا بد من تأكيد حسابك قبل المتابعة."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "خطوة أخرى لتنشيط حسابك"
      },
      "reset_password_instructions": {
        "subject": "تعليمات إعادة تعيين كلمة المرور"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": " * مطلوب",
    "omniauth_callbacks": {
      "failure": "تعذر توثيقك من %{kind} بسبب \"%{reason}\"",
      "permission_missing": "You did not grant the required permission.",
      "success": "%{kind} تم التوثيق بنجاح من حساب"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "البريد الإكتروني"
        },
        "submit": "إعادة تعيين كلمة المرور "
      },
      "headline": "نسيت كلمة المرور؟"
    },
    "password_reset": {
      "email": {
        "comment": "<br/> اذا لم تتقدم بطلب تغيير كلمة المرور تجاهل هذه الرسالة، كلمة المرور الخاصة بك لن تتغير إلا بالذهاب إلى الرابط التالي لإعادة التعيين.",
        "headline": "%{email} مرحبا",
        "link": "تغيير كلمة المرور",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "كلمة المرور الجديدة",
          "password_confirmation": "إعادة كلمة المرور"
        },
        "submit": "إعادة تعيين كلمة المرور"
      },
      "headline": "إعادة تعيين كلمة المرور"
    },
    "passwords": {
      "link": "نسيت كلمة المرور ؟",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "تم تغيير كلمة السر الخاصة بك بنجاح، أنت الأن مسجل الدخول.",
      "updated_not_active": "تم تغيير كلمة السر الخاصة بك بنجاح."
    },
    "registrations": {
      "destroyed": " تم إلغاء الحساب. نأمل رؤيتك في وقت قريب.",
      "inactive_signed_up": "\"%{reason}\" لقد تم اشتراكك بنجاح،لكن لايمكن تسجيل الدخول بسبب :",
      "link": "التسجيل ",
      "reasons": {
        "inactive": "غير نشط",
        "locked": "مقفل",
        "unconfirmed": "غير مؤكد"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "تم تحديث حسابك بنجاح."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "البريد الالكتروني أوكلمة المرور غير صالحة",
      "invalid_token": "خطأ،المصادقة لم تتم",
      "link": "التسجيل",
      "locked": "حسابك مغلق",
      "new": {
        "no_osm_account": "لايوجد حساب على \"أوبن ستريت ماب\"؟",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "شكراً جزيلاً لدعمكم",
        "sign_in_with": "%{kind} تسجيل الدخول بـ",
        "sign_up_with_osm": "بادر بالتسجيل الآن",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "تم تسجيل الدخول بنجاح.",
      "signed_out": "تم تسجيل الخروج بنجاح.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "لابد من تسجيل الاشتراك أو الدخول للمتابعة",
      "unconfirmed": "للإستمرار، قم بتأكيد الحساب"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "بريد الكتروني",
          "password": "كلمة المرور",
          "remember_me": "هل تريد البقاء متصلا؟"
        },
        "submit": "تسجيل الدخول"
      },
      "headline": "تسجيل الدخول"
    },
    "sign_out": {
      "headline": "تسجيل الخروج"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "تأكيد الحساب",
        "please_confirm": "يمكنك تأكيد حسابك عبر الرابط أدناه:",
        "welcome": "%{email}! مرحبا"
      },
      "form": {
        "labels": {
          "email": "بريد الكتروني",
          "password": "كلمة المرور",
          "password_confirmation": "إعادة كلمة المرور",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "التسجيل"
      },
      "headline": "التسجيل"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "تم إعادة فتح حسابك بنجاح. الرجاء تسجيل الدخول للمتابعة."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute}% {message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "تم التأكيد بالفعل",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "غير متوافق مع التأكيد",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": " %{count} يجب أن يساوي ",
      "even": "must be an even number",
      "exclusion": "محجوز",
      "expired": "انتهت الصلاحية، يرجى إعادة الطلب",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "%{count} يجب أن يكون أكبر من ",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "ليس خيارا مقبولا",
      "invalid": "غير صالح ",
      "less_than": "%{count} يجب أن يكون أصغر من ",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "ليس رقما",
      "not_an_integer": "يجب أن يكون صحيحا",
      "not_found": "لا يوجد",
      "not_locked": "لم يكن مغلق",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "غير متوفر (مستخدم)",
      "too_long": "%{count} characters) أطول من اللازم (الحد الأقصى هو)",
      "too_short": "%{count} أقصر من اللازم (الحد الأدنى هو )",
      "wrong_length": "%{count} الطول غير مناسب (يجب أن يكون)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "يرجى التحقق من الحقول التالية:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "يمكنك دائماً تغيير وسم مكان ما بنفسك. فقط اختر الوسم الصحيح و\"حفظ\" - انتهى الأمر!",
      "1": "كمستخدم سجل دخوله، يمكنك أن تضيف / تصحح كل التفاصيل الخاصة بالمكان. انقر على \"تحرير\" وصحح أو أضف المعلومات في القناع.",
      "2": "يمكنك إضافة المزيد من المعلومات (مثال، \"هذا المكان به تعلية نقالة\") في القسم الخاص بالتعليق. انقر على \"تحرير\" و\"إضافة تعليق\"."
    },
    "headline": "هل هناك مشكلة تخص هذا المكان؟",
    "questions": {
      "0": "وضع الوسم خطأ.",
      "1": "تفاصيل المكان خاطئة أو مفقودة.",
      "2": "لدي مزيد من المعلومات عن هذا المكان."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} تم الإنشاء بنجاح  "
      },
      "destroy": {
        "alert": "%{resource_name} لا يمكن ازالته ",
        "notice": "%{resource_name} تم الحذف بنجاح "
      },
      "update": {
        "notice": "%{resource_name} تم التحديث بنجاح "
      }
    },
    "photos": {
      "destroy": {
        "notice": "تم حذف الصورة بنجاح"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "سهولة الوصول بالكرسي المتحرك",
    "show_limited_accessible_places": "كرسي متحرك في المتناول جزئيا ",
    "show_places_without_status": "حالة الكرسي غير معروفة",
    "show_unaccessible_places": "لايمكن وصول الكرسي المتحرك"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "حرك المؤشر على الخريطة لتصحيح موقع",
      "osm_username": "<a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a> غير مشترك في \"أوبن ستريت ماب\" بادر بالتسجيل الآن  ؟",
      "password": "في حال لم ترغب بالتغيير، أبقه فارغاً",
      "phone": "For example: +49 30 12345678",
      "website": "على سبيل المثال : http://www.example.com"
    },
    "labels": {
      "category": "الصنف :",
      "centralkey": "المفتاح المركزي",
      "city": "المدينة :",
      "create": "Create a place",
      "email": "بريد الكتروني",
      "finish": "انتهى",
      "housenumber": "الرقم :",
      "lat": "خط العرض",
      "lon": "خط الطول",
      "name": "الإسم :",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "كلمة المرور",
      "password_confirmation": "إعادة كلمة السر",
      "phone": "رقم الهاتف :",
      "postcode": "الرمز البريدي :",
      "privacy_policy": "أقبل المقطع الأول والثاني من إتفاقية خصوصية المعلومات",
      "reset": "إعادة تعيين",
      "save": "حفظ",
      "street": "شارع",
      "terms": "أقبل بشروط الإستخدام",
      "type": "النوع :",
      "website": "موقع :",
      "wheelchair": "امكانية الوصول بالكرسي المتحرك ؟",
      "wheelchair_description": "تعليق حول سهولة الوصول :",
      "wheelchair_toilet": "كرسي متحرك في المتناول للمرحاض:"
    },
    "titles": {
      "basic": "معلومات أساسية",
      "optional": "<span class=\"addition\">(all fields are optional)</span> لمزيد من المعلومات "
    }
  },
  "global": {
    "form_validation_error": "يرجى ملاحظة الأخطاء المذكورة"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org خريطة على الإنترنت تتيح البحث عن الأماكن التي يمكن الوصول إليها بالمقاعد المتحركة والعثور عليها وتحديدها. شارك بتحديد مواقع الأماكن العامة، مثل الحانات أو المطاعم أو دور العرض أو الأسواق مركزية!",
      "homepage": "الصفحة الرئيسية",
      "keywords": "أماكن يسهل الوصول اليها بالكرسي المتحرك، أضف علامة بحث",
      "search": "بحث",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "مدونة",
      "choose_language": "إختر اللغة",
      "contact": "للإتصال",
      "faq": "الأسئلة الأكثر تكرارا",
      "feedback": "الآراء",
      "home": "ابدأ",
      "how_to_add_a_place": "كيف يمكنني اضافة مكان ؟",
      "imprint": "مشاركة",
      "logged_in_as": "الدخول كـ :",
      "login": "تسجيل الدخول",
      "logout": "تسجيل خروج",
      "map": "خريطة",
      "newsletter": "أخبار الموقع",
      "press": "صحافة",
      "profile": "الحساب",
      "projects": "قم بالاشتراك",
      "report_problem": "بلغ عن مشكلة",
      "suggestions": "الإقتراحات",
      "travelguide": "Travel guide",
      "what_is_barrier_free": "ماذا تعني هذة الجملة \"إمكانية الوصول بالكرسي المتحرك\"؟",
      "what_is_wheelmap": "تعرف على ويل ماب ؟"
    },
    "searchbar": {
      "add_place": "أضف مكاناً آخر",
      "find": "بحث",
      "placeholder": "سن سيت بوليڨارد، لوس أنجلوس  أو  براندن بيرڠ ،برلين",
      "title_add_place": "أضف مكاناً جديداً في هذا الموقع الآن!"
    },
    "tagline": "شعار ويل ماب",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "التصنيفات"
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
      "prompt": "اختر رجاء"
    },
    "submit": {
      "create": " %{model} إنشاء",
      "submit": " %{model} حفظ",
      "update": "%{model} نموذج"
    }
  },
  "home": {
    "index": {
      "embed_link": "عرض على Wheelmap.org",
      "filter": {
        "category": "إختر التصنيف",
        "deselect_all": "عدم الإختيار",
        "select_all": "اختيار الكل",
        "wheelchair": "هل يمكن الوصول بالكرسي المتحرك؟"
      },
      "ie": {
        "action": {
          "ignore": "تخطي",
          "upgrade": "تحديث المتصفح"
        },
        "warning": {
          "headline": "نعتذر !",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "إضافة مكان جديد "
        }
      },
      "overlay": {
        "button": "حسنا ، للنطلق!",
        "categories": "تصنيف الأماكن",
        "filter": "تحديد الأماكن بحسب إمكانية وصول الكرسي المتحرك",
        "headline": "ضع العلامات و ابحث عن الأماكن التي يمكن الوصول إليها بالكرسي المتحرك مع  Wheelmap.org\nمجانا - و في أي مكان حول العالم :",
        "lookup": "ابحث عن مكان محدد",
        "secondary_headline": "نظام الإشارات الخاص بنا للكراسي المتحركة في الأماكن العامة:"
      },
      "popup": {
        "form": {
          "limited": "كرسي متحرك في المتناول جزئيا ",
          "no": "لايمكن وصول الكرسي المتحرك",
          "save": "تحديث",
          "unknown": "حالة الكرسي غير معروفة",
          "yes": "يمكن الوصول بالكرسي المتحرك"
        },
        "help": "هل وصول الكرسي المتحرك سهل؟ (بادر بتقديم المساعدة)",
        "more": "المزيد..."
      },
      "zoom_alert": "التقريب لرؤية المزيد من الأماكن."
    }
  },
  "how?": "كيف ؟",
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
          "headline": "(%{count})إمكانية الوصول بالكرسي المتحرك غير معلومة"
        },
        "yes": {
          "headline": "%{type} in %{city} (%{count}) يسهل الوصول بالكرسي المتحرك "
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "قام بتنفيذ المشروع Sozialhelden.de"
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
      "phone": "رقم الهاتف:",
      "website": "موقع"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "مدخلاتك إما خاطئة أو غير مكتملة",
        "successfull": "شكرا لك ، لقد تم حفظ التعليق وسينشر قريبا"
      }
    },
    "edit": {
      "header": {
        "title": "%{%{node} تحرير مكان"
      },
      "link": {
        "large_map": "&laquo;  إلغاء"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "عذرا، خطأ في المصادقة",
      "not_available": "عفواً، هذه الصفحة غير متوفرة حالياً",
      "not_existent": "عذرا،هذا المكان لم يعد موجودا",
      "not_found": "عذراً، الصفحة غير موجودة",
      "param_missing": "فضلا اكتب عبارة البحث"
    },
    "flash": {
      "authorize_wheelmap": " بادر بإنشاء حساب في \"أوبن ستريت ماب\" لتتمكن من التعديل"
    },
    "new": {
      "form": {
        "legend": "موقع المكان",
        "location": "يُرجى النقر على الخريطة حيث توجد الأماكن!",
        "section": {
          "accessibility": {
            "name": "امكانية الوصول بالكرسي المتحرك",
            "title": "معلومات عن إمكانية الوصول بمقعد متحرك"
          },
          "address": {
            "help": "يمكنك نقل الوسم إلى الموقع الصحيح على الخريطة.",
            "name": "العنوان",
            "title": "أين المكان؟"
          },
          "contact": {
            "name": "للإتصال",
            "title": "معلومات أخرى للاتصال"
          },
          "name_category": {
            "name": "اسم المكان ونوعه",
            "title": "أعطنا بعض المعلومات الأولية عن مكانك:"
          },
          "overview": {
            "title": "هل كل المعلومات صحيحة؟"
          },
          "similar_nodes": {
            "empty": "لم يتم العثور على أماكن مماثلة.",
            "go_edit": "المتابعة مع هذا المكان",
            "go_new": "ليس أي من الأماكن المذكورة أعلاه...",
            "name": "أماكن مماثلة",
            "title": "وجدنا أماكن مماثلة قريبة. هل هو أحدها؟"
          }
        },
        "title": "إضافة مكان"
      },
      "header": {
        "title": "مكان جديد | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo;  الغاء"
      }
    },
    "node": {
      "link": {
        "claim": "هل تعمل هنا؟",
        "edit_node": "تعديل مكان",
        "report_bug": "بلغ عن مشكلة"
      }
    },
    "node_data": {
      "address": "العنوان:",
      "contact_details": "تفاصيل الاتصال:"
    },
    "node_edit": {
      "details": "تفاصيل",
      "edit": "تحرير"
    },
    "node_map": {
      "map": "الخريطة:"
    },
    "node_note": {
      "comment": "تعليق:"
    },
    "node_photos": {
      "add": "إضافة",
      "photos_of_this_place": "صور هذا المكان:",
      "upload": "تحميل"
    },
    "node_similar": {
      "similar": "أماكن مماثلة: %{name}"
    },
    "node_status": {
      "accessible_toilet": "كرسي متحرك في المتناول للمرحاض:",
      "premium": "يقول %{name}: هذا المكان",
      "wheelchair_accessibility": "امكانية الوصول بالكرسي المتحرك:"
    },
    "node_streetview": {
      "streetview": "منظر للشارع:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "تبين في Wheelmap. org إن كان هذا المكان يمكن الوصول إليه بمقعد متحرك. أو أضف المزيد من المعلومات والصور إلى المكان.",
          "title": "هذا المكان على Wheelmap.org: % {اسم}"
        },
        "title": " %{node} مكان : "
      },
      "link": {
        "back": "العودة",
        "large_map": "تكبير",
        "listing": "'%{type}' in %{city} جميع الأماكن ",
        "upload": "تحميل الصورة"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "بريد الكتروني",
        "facebook": "فيس بوك",
        "text": "وجدت هذا المكان على موقع Wheelmap.org : %{name}",
        "twitter": "تويتر"
      },
      "show-in-osm": "\"أوبن ستريت ماب\""
    },
    "update": {
      "flash": {
        "not_successfull": "المدخلات إما غيرصحيحة أو غير كاملة",
        "successfull": "تم التسليم بنجاح وسيعرض قريباً،شكرا لك."
      }
    },
    "update_wheelchair": {
      "successfull": "تم تغيير الحالة من \"%{name} إلى \"%{status}\"  وسيتم النشرقريبا."
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
          "billion": "مليار",
          "million": "مليون",
          "quadrillion": "الكدريليون رقم",
          "thousand": "ألف",
          "trillion": "تريليون",
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
  "or": "أو",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "التوافق",
      "education": "تعليم",
      "food": "طعام",
      "government": "حكومة",
      "health": "صحة",
      "leisure": "استراحة",
      "misc": "متفرقات",
      "money_post": "بنك / مكتب بريد",
      "public_transfer": "وسائل النقل العام",
      "shopping": "تسوق",
      "sport": "رياضة",
      "tourism": "سياحة",
      "unknown": "غير معروف"
    },
    "name": {
      "accommodation": {
        "beach_resort": "فندق على الشاطئ",
        "bed_and_breakfast": "فندق للمبيت والإفطار",
        "camp_site": "موقع للتخييم",
        "caravan_site": "موقع العربة\"كاراڨان\"",
        "chalet": "شاليه",
        "dormitory": "المهجع",
        "guest_house": "بيت الضيافة",
        "hostel": "فندق",
        "hotel": "فندق",
        "motel": "نُزل"
      },
      "education": {
        "college": "كلية",
        "driving_school": "مدرسة تعليم القيادة",
        "kindergarten": "روضة أطفال",
        "library": "مكتبة",
        "museum": "متحف",
        "school": "مدرسة",
        "university": "جامعة"
      },
      "food": {
        "bar": "بار، مشرب",
        "biergarten": "مكان عام للجلوس",
        "cafe": "مقهى",
        "drinking_water": "ماء للشرب",
        "fast_food": "وجبات سريعة",
        "ice_cream": "محل الآيسكريم",
        "pub": "حانة",
        "restaurant": "مطعم"
      },
      "government": {
        "courthouse": "المحكمة",
        "embassy": "سفارة",
        "employment_agency": "مكتب توظيف",
        "government": "مصلحة حكومية",
        "police": "الشرطة",
        "public_building": "مبنى عام",
        "townhall": "مبنى البلدية"
      },
      "health": {
        "alternative": "عيادة ممارس للطب البديل",
        "dentist": "طبيب أسنان",
        "doctors": "عيادة طبيب",
        "hearing_aids": "تاجر أدوات سمعية",
        "hospital": "مستشفى",
        "medical_supply": "مستلزمات طبية",
        "occupational_therapist": "مُعالِجٌ مِهْنِيّ",
        "pharmacy": "صيدلية",
        "physiotherapist": "عيادة أخصائي علاج طبيعي",
        "psychotherapist": "عيادة طبيب نفسي",
        "social_facility": "مرافق اجتماعية",
        "speech_therapist": "مُعالِجٌ النُّطُق",
        "veterinary": "طبيب بيطري"
      },
      "leisure": {
        "arena": "ميدان",
        "brothel": "ماخور\"بيت دعارة\"",
        "casino": "ملهى",
        "cinema": "سينما",
        "community_centre": "مركز اجتماعي",
        "gallery": "المعرض",
        "massage": "منتجع صحي للتدليك",
        "nightclub": "ملهى ليلي",
        "playground": "ساحة لعب",
        "sauna": "حمام البخار",
        "stripclub": "نادي تعري",
        "tattoo": "متجر الوشم",
        "theatre": "مسرح",
        "zoo": "حديقة الحيوانات"
      },
      "misc": {
        "association": "جمعية",
        "company": "شركة(مكتب)",
        "estate_agent": "وكيل عقاري",
        "insurance": "تأمين",
        "lawyer": "محامي",
        "ngo": "منظمة غير حكومية",
        "place_of_worship": "مكان للعبادة",
        "political_party": "مكتب حزب سياسي",
        "toilets": "دورات المياه"
      },
      "money_post": {
        "atm": "مكينة الصرف الآلي",
        "bank": "بنك",
        "bureau_de_change": "صرافة نقود",
        "post_box": "صندوق البريد",
        "post_office": "مكتب البريد"
      },
      "public_transfer": {
        "aerodrome": "مطار",
        "bicycle_parking": "موقف للدراجات الهوائية",
        "bicycle_rental": "لتأجير الدراجات الهوائية",
        "boatyard": "حوض بناء المراكب",
        "bus_station": "محطة الأوتوبيس",
        "bus_stop": "موقف أوتوبيس",
        "cable_car": "عربة كهربائية",
        "car_rental": "تأجير السيارات",
        "car_sharing": "سيارة للمشاركة",
        "chair_lift": "الكرسي لليسار",
        "ferry": "معبر مائي",
        "ferry_terminal": "محطة عبور مائي",
        "fuel": "محطة للغاز",
        "halt": "موقف",
        "light_rail": "القطارات الخفيفة",
        "parking": "مواقف السيارات",
        "parking_aisle": "رصيف إيقاف السيارات",
        "platform": "رصيف",
        "station": "قطارات الأنفاق",
        "subway_entrance": "مدخل المترو",
        "terminal": "المطار",
        "tram_stop": "موقف عربات الترام"
      },
      "shopping": {
        "alcohol": "مشروبات كحولية",
        "antiques": "محل لبيع التحف",
        "art": "محل لبيع المجوهرات",
        "bakery": "مخبز",
        "beauty": "صالون تجميل",
        "beverages": "مشروبات",
        "bicycle": "متجر الدراجات",
        "books": "كتب",
        "butcher": "الجزار",
        "car_repair": "لإصلاح السيارات",
        "car_shop": "متجر السيارات",
        "chemist": "الكيميائي / الصَيْدَلِيّة",
        "clothes": "ملابس",
        "computer": "كمبيوتر",
        "confectionery": "محل حلويات",
        "convenience": "راحة",
        "copyshop": "متجر النسخ",
        "deli": "متجر بيع الأغذية المعلبة",
        "department_store": "متجر شامل",
        "doityourself": "متجر الخردوات",
        "dry_cleaning": "التنظيف الجاف",
        "electronics": "أجهزة كهربائية",
        "erotic": "متجر الجنس",
        "fabric": "محل الأقمشة",
        "farm_shop": "متجر تابع لمزرعة",
        "florist": "بائع الزهور",
        "funeral_directors": "مكان الدفن",
        "furniture": "أثاث",
        "garden_centre": "مركز الحديقة",
        "gift": "محل هدايا",
        "greengrocer": "بائع خضراوات",
        "hairdresser": "صالون تصفيف الشعر",
        "hardware": "أجهزة",
        "interior_decoration": "متجر الديكور الداخلي",
        "jewelry": "مجوهرات",
        "kiosk": "كشك",
        "laundry": "مغسلة  ملابس",
        "mall": "مركز تسوق",
        "mobile_phone": "محل لبيع الهواتف المحمولة",
        "music": "محل لبيع التسجيلات",
        "musical_instrument": "محل لبيع الآلات الموسيقية",
        "newsagent": "صاحب محل لبيع الصحف والمجلات",
        "optician": "محل النظارات",
        "organic": "محل للمنتجات العضوية",
        "outdoor": "متجر لوازم الرحلات",
        "pet": "متجر الحيوانات الأليفة",
        "photo": "صورة",
        "second_hand": "متجر البضائع المستعملة",
        "shoes": "أحذية",
        "sports": "رياضة",
        "stationery": "قرطاسية",
        "supermarket": "سوبرماركت",
        "tailor": "خَيّاط",
        "tea": "مخزون الشاي",
        "tobacco": "متجر التبغ",
        "toys": "محل ألعاب",
        "travel_agency": "وكالة سفر",
        "variety_store": "معرض للسلع المخفضة",
        "video": "متجرتأجيرالڤيديو"
      },
      "sport": {
        "pitch": "ساحة رياضية",
        "sports_centre": "نادي",
        "stadium": "ملعب",
        "swimming": "سباحة",
        "swimming_pool": "بركة سباحة"
      },
      "tourism": {
        "archaeological_site": "موقع أثري",
        "arts_centre": "مركز الفنون",
        "artwork": "عمل فني",
        "attraction": "موقع جاذب للسياح",
        "battlefield": "ساحة معركة",
        "beach": "الشاطئ",
        "beacon": "منارة",
        "castle": "قصر",
        "cave_entrance": "مدخل الكهف",
        "information": "معلومات للسائح",
        "memorial": "نصب تذكاري",
        "theme_park": "حديقة الألعاب المائية",
        "tower": "برج",
        "viewpoint": "نقطة عرض"
      },
      "unknown": {
        "unknown": "غير معروف"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "الحالة : متصل",
          "grant": "الآن متصل",
          "not_connected": "الوضع:غير متصل",
          "revoke": "غير متصل"
        }
      },
      "headline": "تحرير الحساب"
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
        "headline": "عفواً، لم يمكننا العثور على مكان يسمى \"%{query}\".",
        "hint": {
          "example": "<strong>مثال:</strong> لندن، المملكة المتحدة",
          "info": "تعمل خدمتنا للبحث بالمعلومات الخاصة بالاسم و/ أو العنوان فقط. لذلك، يُرجى البحث عن اسم مكان أو عن عنوان، مثال، اسم الشارع و/ أو المدينة. البحث عن نوع المكان، مثال، مطعم أو سينما، لا يفيد!",
          "work_in_progress": "عملنا بجد لجعل البحث عن أماكن أسهل وبديهياً أكثر في المستقبل."
        },
        "try_this": {
          "address": "يُرجى إعطاء المزيد من <strong> تفاصيل العنوان</strong>.",
          "intro": "جرب هذا:",
          "spell_check": "دقق <strong> هجاء</strong> مساهمتك."
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} نتيجة:",
          "many": "%{count} نتيجة:",
          "one": "%{count} نتيجة:",
          "other": "%{count} نتيجة:",
          "two": "%{count} نتيجة:",
          "zero": "%{count} نتيجة:"
        }
      },
      "search": {
        "for": "\"%{q}\" البحث عن ",
        "not_found": "لايمكن إيجاد المكان"
      }
    },
    "timeout": {
      "headline": "عفواً، حدث خطأ ما",
      "info": "خدمة البحث الخاصة بنا غير متوفرة مؤقتاً.",
      "repeat_search": "إعادة البحث"
    }
  },
  "splash": {
    "countline": "%{count} أماكن تم تحديدها ",
    "headline": "الجميع يمكنه إضافة أماكن يسهل الوصول لها بالكرسي المتحرك!",
    "start": "ابدأ",
    "step1": "قم بالنقر على المكان المطلوب",
    "step2": "قم بالتحديد ثم انقر اختيار حفظ",
    "step3": "لايتطلب التسجيل",
    "what_is_wheelmap": "تعرف على ويل ماب ؟"
  },
  "statistics": "إحصاءات",
  "support": {
    "array": {
      "last_word_connector": ", و ",
      "sentence_connector": "و",
      "two_words_connector": " و ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "إختر من فضلك"
    }
  },
  "time": {
    "am": "صباحا",
    "formats": {
      "default": "%a %b %d %H:%M:%S %Z %Y",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "مساء"
  },
  "toiletstatus": {
    "no": "لا يوجد كرسي متحرك للمرحاض في المتناول",
    "unknown": "وضع المرحاض غير معروف",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "كرسي متحرك في المتناول للمرحاض"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "تم تفعيل الحساب"
      },
      "error": {
        "notice": "البريد الالكتروني وكلمة المرور غير مطابقة"
      },
      "notice": "تم الدخول!"
    },
    "destroy": {
      "notice": " إلى اللقاء"
    },
    "new": {
      "email": "Email address",
      "login": "تسجيل الدخول",
      "login_with_twitter": "الدخول عن طريق حساب تويتر",
      "password": "كلمة المرور",
      "remember_me": "البقاء متصلا"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "كيف يمكننا التواصل معك؟ يمكنك تغيير هذه المعلومات لاحقا في ملفك."
      }
    },
    "edit": {
      "headline": {
        "your_images": "الصور التي قمت بتحميلها"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "معلومات حسابك"
        },
        "title": "الحساب"
      },
      "newsletter": {
        "label": "نعم، أبقني على علم بأحدث ما يخص Wheelmap.",
        "text": "تتبع أحدث الأخبار مع نشرة أخبار Wheelmap. لا تقلق، لن نغرقك بالرسائل. ستسمع منا مرة كل شهر على الأغلب.",
        "title": "أخبار الموقع"
      },
      "photos": {
        "empty": "لم تقم بتحميل أي صور بعد.",
        "title": "صور"
      },
      "show": {
        "greeting": {
          "anonymously": "مرحباً",
          "personalized": "مرحباً يا %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "few": "حُمِلت %{count} صورة",
            "many": "حُمِلت %{count} صورة",
            "one": "حُمِلت %{count} صور",
            "other": "حُمِلت %{count} صورة",
            "two": "حُمِلت %{count} صورة",
            "zero": "حُمِلت %{count} صورة"
          },
          "pois_added": {
            "few": "أضيف %{count} مكاناً",
            "many": "أضيف %{count} مكاناً",
            "one": "أضيف %{count} مكاناً",
            "other": "أضيف %{count} مكاناً",
            "two": "أضيف %{count} مكاناً",
            "zero": "أضيف %{count} مكاناً"
          },
          "pois_edited": {
            "few": "حُررت %{count} أماكن",
            "many": "حُررت %{count} أماكن",
            "one": "حُررت %{count} مكاناً",
            "other": "حُررت %{count} أماكن",
            "two": "حُررت %{count} أماكن",
            "zero": "حُررت %{count} أماكن"
          },
          "pois_marked": {
            "few": "تم وسم %{count} أماكن",
            "many": "تم وسم %{count} أماكن",
            "one": "تم وسم %{count} مكان",
            "other": "تم وسم %{count} أماكن",
            "two": "تم وسم %{count} أماكن",
            "zero": "تم وسم %{count} أماكن"
          },
          "text": "لديك"
        },
        "text_html": "مرحباً،<br>\nمرحباً بك مرة أخرى في Wheelmap.org! يسعدنا وجودك معنا! يمكنك تصفح <a href=\"http://news.wheelmap.org/en/\">مدونتنا</a> أو <a href=\"http://news.wheelmap.org/en/FAQ/\">الأسئلة المتكررة</a> الخاصة بنا إن أردت التعريف على Wheelmap.org بشكل أفضل. أو يمكنك معرفة المزيد عن <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">المشاريع</a> التي نقدمها في Wheelmap.org وكيف يمكنك المشاركة معنا.<br>\nللبقاء على اتصال، يمكنك الاشتراك في نشرة أخبارنا الشهرية وتتبعنا عبر <a href=\"https://www.facebook.com/wheelmap\">فيس بوك</a> و<a href=\"https://twitter.com/wheelmap\">تويتر</a>. نحن نتطلع لسماع رأيك وبدء حوار معك !<br> \nوالآن، بحث سعيد في الخريطة!<br> \nفريق Wheelmap ",
        "title": "نظرة عامة"
      },
      "widget": {
        "categories": "إظهار مرشح الفئة",
        "center": "مساحة الخريطة",
        "empty_center": "ابحث عن مركز الخريطة...",
        "empty_provider": "اختيار مقدم",
        "height": "الارتفاع",
        "legends": {
          "embed": "تضمين رمز",
          "embed_explanation": "يمكن تغيير مواصفات خط العرض (<code> خط العرض</code>، خط طول <code> خط الطول</code> ومستوى التكبير <code>التكبير</code> في الكود أعلاه وبذلك تعديل الجزء من الخريطة (القطعة) طبقاً للموقع الذي تريد إظهاره.",
          "general": "أنشئ ودجة Wheelmap الخاصة بك وضمنها في موقعك أو مدونتك.",
          "preview": "نظرة عامة",
          "settings": "الإعدادات"
        },
        "providers": "المقدم",
        "title": "ودجة",
        "width": "العرض"
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
    "limited": "كرسي متحرك في المتناول جزئيا ",
    "no": "لايمكن وصول الكرسي المتحرك",
    "unknown": "حالة الكرسي غير معروفة",
    "yes": "يمكن الوصول بالكرسي المتحرك"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "نفذ المشروع بواسطة",
      "based_on": "مستند على",
      "become_a_supporter": "تريد تقديم الدعم",
      "main_supporter": "الراعي الرسمي"
    },
    "itunes": {
      "alt": "شعارنا في متجر التطبيقات",
      "title": "قم بتحميل التطبيق على الآيفون الآن!"
    },
    "logo": {
      "alt": "شعار ويل ماب -جد أماكن يسهل الوصول إليها بالكرسي المتحرك",
      "title": "ويل ماب - ابحث عن أماكن يسهل الوصول اليها بالكرسي المتحرك"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "قم بالمساعدة بتحديد الأمكنة!"
    }
  },
  "will_paginate": {
    "next_label": "&#8594; بعد",
    "page_entries_info": {
      "multi_page": "%{model} %{from} - %{to} of %{count} عرض المجموع",
      "multi_page_html": "%{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> عرض",
      "single_page": {
        "one": "%{model} عرض ",
        "other": "%{count} %{model} عرض الكل",
        "zero": "%{model} غير  موجود"
      },
      "single_page_html": {
        "one": "<b>1</b> %{model} العرض ",
        "other": "<b>all&nbsp;%{count}</b> %{model} العرض ",
        "zero": "%{model} غير موجود"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592;السابق"
  }
});
