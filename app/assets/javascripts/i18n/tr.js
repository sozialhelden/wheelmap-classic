I18n.translations || (I18n.translations = {});
I18n.translations["tr"] = I18n.extend((I18n.translations["tr"] || {}), {
  "actions": {
    "cancel": "İptal",
    "next": "Next",
    "save": "Kaydet",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Herhangi",
    "batch_actions": {
      "action_label": "%{title} Seçildi",
      "button_label": "Toplu işlemler",
      "default_confirmation": "Bunu yapmak istediğinden emin misin?",
      "delete_confirmation": "%{plural_model} kayıtlarını silmek istediğinize emin misiniz?",
      "labels": {
        "destroy": "Sil"
      },
      "link": "Ekle",
      "selection_toggle_explanation": "Seçimi Değiştir",
      "succesfully_destroyed": {
        "one": "1 %{model} kaydı başarıyla silindi.",
        "other": "Toplam %{count} kayıt %{plural_model} modelinden silindi"
      }
    },
    "blank_slate": {
      "content": "Herhangi bir %{resource_name} kaydı bulunamadı",
      "link": "Bir tane oluşturun"
    },
    "cancel": "İptal",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Yorum Ekle",
      "author": "Yazar",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Ayrıntı",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Yorum boş olarak kaydedilemez."
      },
      "no_comments_yet": "Henüz Yorum Yok",
      "resource": "Kaynak",
      "resource_type": "Resource Type",
      "title": "Yorum",
      "title_content": "Yorumlar (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Kontrol Paneli",
    "dashboard_welcome": {
      "call_to_action": "Kontrol Paneline bölümler eklemek için 'app/admin/dashboard.rb' dosyasına bakabilirsin.",
      "welcome": "Active Admin'e Hoşgeldiniz. Burası öntanımlı Kontrol Paneli sayfasıdır."
    },
    "delete": "Sil",
    "delete_confirmation": "Bu kaydı silmek istediğine emin misin?",
    "delete_model": "%{model} modelini sil",
    "details": "%{model} ayrıntıları",
    "devise": {
      "change_password": {
        "submit": "Şifremi değiştir",
        "title": "Şifrenizi değiştirin"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Şifreni mi unuttun?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Oturum aç",
        "sign_in_with_omniauth_provider": "%{provider} ile giriş yapın",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Beni Hatırla",
        "submit": "Gönder",
        "title": "Oturum aç"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Onaylama talimatlarını tekrar gönder",
        "title": "Onaylama talimatlarını tekrar gönder"
      },
      "reset_password": {
        "submit": "Şifremi sıfırla",
        "title": "Şifreni mi unuttun?"
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
    "download": "İndir:",
    "dropdown_actions": {
      "button_label": "Işlemler"
    },
    "edit": "Değiştir",
    "edit_model": "%{model} modelini düzenle",
    "empty": "Boş",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Filtreleri Temizle",
        "filter": "Filtrele"
      },
      "predicates": {
        "contains": "içerir",
        "ends_with": "ile biter",
        "equals": "Eşittir",
        "greater_than": "Büyükse",
        "less_than": "Küçükse",
        "starts_with": "ile başlar"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Sil",
    "has_many_new": "Yeni %{model} kaydı ekle",
    "has_many_remove": "Çıkarmak",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Oturumu Sonlandır",
    "main_content": "İçeriği görüntülemek için lütfen %{model}#main_content metodunu ekleyin.",
    "new_model": "Yeni %{model}",
    "next": "Sonraki",
    "pagination": {
      "empty": "%{model} boş",
      "entry": {
        "one": "Girdi",
        "other": "Girdiler"
      },
      "multiple": "%{model} toplam %{total} kayıt bulundu. <b>%{from} ile %{to} arası</b> arası görüntüleniyor",
      "multiple_without_total": "%{model}. <b>%{from} ile %{to} arası</b> arası görüntüleniyor",
      "one": "<b>1</b> %{model} kaydı görüntüleniyor",
      "one_page": "<b>%{n}</b> kayıt %{model} modelinde görüntüleniyor"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Önceki",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtreler",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Hayır",
      "yes": "Evet"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Görüntüle"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adres",
        "address_city": "Şehir",
        "address_housenumber": "Ev numarası",
        "address_postcode": "Postcode",
        "address_street": "Sokak",
        "name": "İsim",
        "note": "Note",
        "phone": "Telefon",
        "type": "Tip",
        "website": "Internet Sitesi"
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
        "accepted": "kabul edilmeli",
        "blank": "doldurulmalı",
        "confirmation": "teyidiyle uyuşmamakta",
        "empty": "doldurulmalı",
        "equal_to": "tam olarak %{count} olmalı",
        "even": "çift olmalı",
        "exclusion": "kullanılamaz",
        "greater_than": "%{count} sayısından büyük olmalı",
        "greater_than_or_equal_to": "%{count} sayısına eşit veya büyük olmalı",
        "inclusion": "kabul edilen bir kelime değil",
        "invalid": "geçersiz",
        "less_than": "%{count} sayısından küçük olmalı",
        "less_than_or_equal_to": "%{count} sayısına eşit veya küçük olmalı",
        "not_a_number": "geçerli bir sayı değil",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "tek olmalı",
        "record_invalid": "%{errors}: Onaylama başarılı değildi",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "hali hazırda kullanılmakta",
        "too_long": "çok uzun (en fazla %{count} karakter)",
        "too_short": "çok kısa (en az %{count} karakter)",
        "wrong_length": "yanlış uzunlukta (tam olarak %{count} karakter olmalı)"
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
          "email": "E-Posta-Adres",
          "password": "Parola",
          "remember_me": "Kayıtlı kal"
        }
      },
      "template": {
        "body": "Lütfen aşağıdaki hataları düzeltiniz:",
        "header": {
          "one": "%{model} girişi kaydedilemedi: 1 hata.",
          "other": "%{model} girişi kadedilemedi: %{count} hata."
        }
      }
    },
    "models": {
      "user": "User"
    }
  },
  "apipie": {
    "api_documentation": "API belgeleri",
    "comments_powered_by_disqus": "yorumlar %{disqus} tarafından desteklenmektedir",
    "description": "Açıklama",
    "enable_javascript_html": "%{comments_href} adresini görebilmek için lütfen JavaScript'i etkinleştirin.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Hatalar",
    "examples": "Örnekler",
    "follow_instructions_href": "daha fazla talimatlar",
    "follow_instructions_html": "Controller açıklaması belgeleri için %{href} yolunu izleyin.",
    "goto_homepage_href": "%{app_name} API belgeleri ana sayfası",
    "goto_homepage_html": "%{href} adresini deneyin",
    "header_name": "Üst bilgi adı",
    "headers": "Üst bilgiler",
    "metadata": "Üst veriler",
    "method_not_found_html": "%{resource} kaynağının %{method} yöntemi bulunamadı.",
    "nil_allowed": "nil olabilir",
    "no_docs_found": "Hiçbir belge bulunamadı",
    "no_docs_found_descr": "API'niz için hiçbir belge bulunamadı.",
    "oops": "Üzgünüz!!",
    "optional": "isteğe bağlı",
    "param_name": "Parametre adı",
    "params": "Parametreler",
    "required": "gerekli",
    "resource": "Kaynak",
    "resource_not_found_html": "Kaynak %{resource} bulunamadı.",
    "resources": "Kaynaklar",
    "supported_formats": "Desteklenen Biçimler"
  },
  "application": {
    "require_no_user": {
      "notice": "Sayfaya kayıtlısınız"
    },
    "require_user": {
      "notice": "Bu sayfayı görmek icin yeni bir oturum açın."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Yeni bir yer ekle",
      "edit": "yeri/ alanı şekilendiriniz"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "kapatınız",
    "skip": "atla"
  },
  "date": {
    "abbr_day_names": [
      "Pzr",
      "Pzt",
      "Sal",
      "Çrş",
      "Prş",
      "Cum",
      "Cts"
    ],
    "abbr_month_names": [
      null,
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara"
    ],
    "day_names": [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%e %B %Y, %A",
      "short": "%e %b"
    },
    "month_names": [
      null,
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
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
        "one": "1 saat civarında",
        "other": "%{count} saat civarında"
      },
      "about_x_months": {
        "one": "1 ay civarında",
        "other": "%{count} ay civarında"
      },
      "about_x_years": {
        "one": "1 yıl civarında",
        "other": "%{count} yıl civarında"
      },
      "almost_x_years": {
        "one": "neredeyse 1 yıl",
        "other": "neredeyse %{count} yıl"
      },
      "half_a_minute": "yarım dakika",
      "less_than_x_minutes": {
        "one": "bir dakikadan az",
        "other": "%{count} dakikadan az"
      },
      "less_than_x_seconds": {
        "one": "bir saniyeden daha az",
        "other": "%{count}saniyeden daha az"
      },
      "over_x_years": {
        "one": "1 yıldan fazla",
        "other": "%{count} yıldan fazla"
      },
      "x_days": {
        "one": "1 gün",
        "other": "%{count} gün"
      },
      "x_minutes": {
        "one": "1 dakika",
        "other": "%{count} dakika"
      },
      "x_months": {
        "one": "1 ay",
        "other": "%{count} ay"
      },
      "x_seconds": {
        "one": "1 saniye",
        "other": "%{count} saniye"
      }
    },
    "prompts": {
      "day": "Gün",
      "hour": "Saat",
      "minute": "Dakika",
      "month": "Ay",
      "second": "Saniye",
      "year": "Yıl"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "hesab başarılı bir şekilde onaylandı. ",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Bir kaç dakika içerisinde e-posta ile hesabınızı nasıl onaylanması gerektiğine dair talimat alacaksınız. ",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Emin misiniz?",
      "headline": "Delete account",
      "link": "Şimdi sil"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Güncel parola <i> (yapmak istediğiniz değişikleri onaylamak için gerekir) </i>",
          "email": "E-Posta",
          "password": "Parola <i> (değiştirmek istemiyorsaniz boş bırakın) </i>",
          "password_confirmation": "Parolayı tekrarlayın"
        },
        "submit": "Değişiklikeri kaydedin"
      },
      "headline": "Hesabı yönet"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Geçersiz eposta adresi veya parola",
      "invalid_token": "Geçersiz resmi tasdik belirli.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Hesabınız şu an kilitli.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Devam etmek için tekrar kaydolun.",
      "unconfirmed": "Devam etmeden önce hesabınızı onaylamanız gerekir."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Onay talimatları"
      },
      "reset_password_instructions": {
        "subject": "parola talimatlarını sıfırla"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* zorunlu alan",
    "omniauth_callbacks": {
      "failure": "%{kind} hesabınıza \"%{reason}\" dolayı yetki verilmemiştir.",
      "permission_missing": "You did not grant the required permission.",
      "success": "%{kind} hesab tarafından başarılı bir şekilde yetki verilmiştir. "
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-Posta"
        },
        "submit": "Parolayı sıfırla"
      },
      "headline": "Şifreni mi unuttun?"
    },
    "password_reset": {
      "email": {
        "comment": "Parolanızı değiştirmek istemiyorsanız lütfen bu mesajı dikkate almayın <br> Parolanız bu linke tıklayana kadar değişmiyecektir. ",
        "headline": "Hoşgeldiniz %{email}",
        "link": "Parolayı değistir",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Yeni parola",
          "password_confirmation": "Parolayı tekrar et"
        },
        "submit": "Parolayı sıfırla"
      },
      "headline": "Parolayı sıfırla"
    },
    "passwords": {
      "link": "Parolayı unuttunuzmu?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Parolanız başarılı bir şekilde değişmiştir. Yeni bir oturum açtınız. ",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "Hoşçakalın! Hesabınız başarılı bir şekilde iptal edilmiştir. Umariz sizi daha sonra tekrar görürüz.",
      "inactive_signed_up": "Başarılı bir şekilde kaydoldunuz. Fakat biz sizi kayda alamadık, çünkü hesabınız %{reason}.  ",
      "link": "Kaydol",
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
      "updated": "Hesabınızı başarılı bir şekilde güncelleştirdiniz. "
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Geçersiz e-posta veya parola",
      "invalid_token": "Geçersiz resmi tasdik belirtisi. ",
      "link": "Oturumu aç",
      "locked": "Hesabınız kilitli.",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Oturum başarılı açıldı",
      "signed_out": "Oturum basarılı kapandı ",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Devam etmek için oturum açmanız gerekir.",
      "unconfirmed": "Devam etmek için hesabınızı onaylayınız."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-Posta",
          "password": "Parola",
          "remember_me": "Kayıtlı kal?"
        },
        "submit": "Oturum aç"
      },
      "headline": "Oturum aç"
    },
    "sign_out": {
      "headline": "Oturumu kapat"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-Posta",
          "password": "Parola",
          "password_confirmation": "Parolayı tekrarla",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Kaydol"
      },
      "headline": "Kaydol"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Hesabınızın kilidi başarılı bir şekilde açılmıstır. Şu an kayıtlısınız."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "tasdiklendi, lütfen kayıt olmayı deneyin\n",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "onaylamaya uymuyor",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "tam olarak %{count} olmalı",
      "even": "must be an even number",
      "exclusion": "ayırtılmış",
      "expired": "süresi dolmuş, lütfen yeni bir tane isteyin",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "%{count} dan yüksek olmalı",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "geçersiz bir değer",
      "invalid": "geçersiz",
      "less_than": "%{count} dan daha eksik olmalı",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "bu bir numara değildir",
      "not_an_integer": "Tamsayı olması gerekir",
      "not_found": "bulunamadı",
      "not_locked": "Kilitli değildi",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "başkası tarafından alınmış ",
      "too_long": "çok uzun ( %{count} dan fazla işaret olmamalı}",
      "too_short": "çok kısa ( %{count} dan daha eksik işaret olmamalı)",
      "wrong_length": "yanlış uzunluk ( tam olarak %{count} kadar işaret olmalı)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Aşağıdaki alanlarda problem var:",
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
        "notice": "%{resource_name} başarıyla oluşturuldu."
      },
      "destroy": {
        "alert": "%{resource_name} silinemiyor",
        "notice": "%{resource_name} başarıyla silindi"
      },
      "update": {
        "notice": "%{resource_name} başarıyla güncellendi"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Görsel başarıyla silindi"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "tekerlekli sandalye ile ulaşılır",
    "show_limited_accessible_places": "Tekerlekli sandalyeyle kısmen erişilebilir",
    "show_places_without_status": "Bilinmeyen durum",
    "show_unaccessible_places": "Tekerlekli sandalye erişilebilirliği yok"
  },
  "formtastic": {
    "cancel": "İptal",
    "create": "%{model} oluştur",
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Işareti haritanın üzerinde doğru yere ulaşana kadar oynatın.",
      "osm_username": "Henüz üye değilmisiniz? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an Openstreetmap account now</a>",
      "password": "(değistirmek istemiyorsanız, boş bırakın)",
      "phone": "For example: +49 30 12345678",
      "website": "Örnegin: http://www.örnek.com"
    },
    "labels": {
      "category": "Tabaka:",
      "centralkey": "Central key:",
      "city": "Şehir",
      "create": "Create a place",
      "email": "E-posta",
      "finish": "Bitir",
      "housenumber": "No:",
      "lat": "Enlem",
      "lon": "Boylam",
      "name": "Isim",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Parola",
      "password_confirmation": "Parolayi tekrarlayınız",
      "phone": "Telefon:",
      "postcode": "Posta Kodu",
      "privacy_policy": "Veri güvenliği anlaşmasının 1. ve 2. paragrafını kabul ediyorum.",
      "reset": "Sıfırla",
      "save": "Kaydet",
      "street": "Sokak:",
      "terms": "Kullanım koşullarını kabul ediyorum.",
      "type": "Tip: ",
      "website": "Internet sitesi",
      "wheelchair": "Tekerlekli Sandalye erişilirliği? ",
      "wheelchair_description": "Erişilirlik yorumu:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "no": "Hayır",
    "required": "Zorunlu",
    "reset": "%{model} sıfırla",
    "submit": "Gönder",
    "titles": {
      "basic": "Ana Veri:",
      "optional": "Daha fazla bilgi <karış sınıfı=\"toplama\"> (tüm alanlar isteğe bağli)</karış>"
    },
    "update": "%{model} güncelle",
    "yes": "Evet"
  },
  "global": {
    "form_validation_error": " Lütfen aşağıda kote edilmiş hataları not alın."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Ana Sayfa",
      "keywords": "Tekerlekli Sandalye ile erişilir alanlar ve mekanlar bul ara işaretle",
      "search": "Ara",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Wheelmap Hakkında",
      "blog": "Blog",
      "choose_language": "Dil seçin",
      "contact": "İletişim",
      "feedback": "Geribildirim",
      "home": "Başlat",
      "how_to_add_a_place": "Yeni mekan/alan nasıl eklenir?",
      "imprint": "Künye",
      "logged_in_as": "- olarak kayıtlı kal: ",
      "login": "Oturum aç",
      "logout": "Oturumu kapat",
      "map": "Harita",
      "newsletter": "Haberler",
      "press": "Basın",
      "profile": "Profil",
      "projects": "Projects",
      "suggestions": "Öneriler",
      "what_is_barrier_free": "\"Tekerleki sandalye ile ulasilir\" ne demek?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Başka bir mekan/alan ekle",
      "find": "Bul",
      "placeholder": "mesela Sunset Boulevard L.A. veya Brandenburger Tor Berlin",
      "title_add_place": "Şimdi bu pozisyona yeni bir alan veya mekan ekle!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategoriler"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
      },
      "one_page": {
        "display_entries": "<b>all&nbsp;%{count}</b> %{entry_name} gösteriliyor"
      }
    },
    "select": {
      "prompt": "Lütfen seçiniz"
    },
    "submit": {
      "create": "%{model} geliştir",
      "submit": "%{model} kaydet",
      "update": "%{model} güncelleştir"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Tabaka:",
        "deselect_all": "Tümünün işaretini kaldır",
        "select_all": "Tümünü işaretle",
        "wheelchair": "Tekerlekli sandalye için ulaşılırmı?"
      },
      "ie": {
        "action": {
          "ignore": "Yoksay",
          "upgrade": "Tarayıcıyı Güncelle"
        },
        "warning": {
          "headline": "Özür dileriz!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Yeni bir yer ekle"
        }
      },
      "overlay": {
        "button": "Pekala, gidelim!",
        "categories": "Yerleri kategorilere göre filtrele",
        "filter": "Yerleri tekerlekli sandalye erişilebilirliğine göre filtrele",
        "headline": "Tekerlekli sandalye erişilebilirliği olan yerleri Wheelmap.org ile işaretleyin ve bulun - dünya çapında ve ücretsiz. Oldukça kolay:",
        "lookup": "Özel bir yeri ara",
        "secondary_headline": "Halka açık alanlarda tekerlekli sandalye erişilebilirliğini işaretlemek için trafik ışığı sistemimiz:"
      },
      "popup": {
        "form": {
          "limited": "Tekerlekli sandalyeyle kısmen erişilebilir",
          "no": "Tekerlekli sandalye erişilebilirliği yok",
          "save": "Değişiklikeri kaydedin",
          "unknown": "Bilinmeyen durum",
          "yes": "tekerlekli sandalye ile ulaşılır"
        },
        "help": "Tekerlekli sandalye için ulaşılırmı? (Yardım)",
        "more": "daha fazla..."
      }
    }
  },
  "how?": "Nasıl?",
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
        "alt": "Bir Sozialhelden.de Projesi"
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
      "website": "Internet Sitesi"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ooops, verileriniz yanlış veya yetersizdi",
        "successfull": "Teşekkür ederiz, bildirileriniz basarili bir şekilde kaydedildi ve kısa sürede internet sitesinde sunulacak."
      }
    },
    "edit": {
      "header": {
        "title": "Alan veya mekan düzenle: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; iptal et"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Üzgünüz, resmi tasdik başarılı değildi",
      "not_available": "Üzgünüz, bu sayfa geçici bir süre için mevcut değildir. ",
      "not_existent": "Üzgünüz, bu alan veya mekan artık mevcut değildir.",
      "not_found": "Üzgünüz, sayfa bulunamadı.",
      "param_missing": "Lütfen aradığınız terimi yazın."
    },
    "flash": {
      "authorize_wheelmap": "Verileri değiştirebilmek için OpenStreetMap hesabınız olması gerekir."
    },
    "new": {
      "form": {
        "legend": "Yerin konumu",
        "location": "Lütfen haritaya tıklayın ve işaretçiyi doğru noktaya yerleştirin.",
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
        "title": "Yeni alan veya mekan | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Iptal et"
      }
    },
    "node": {
      "link": {
        "claim": "Burada mı çalışıyorsunuz?",
        "edit_node": "Alan veya Mekanı düzenle",
        "report_bug": "Sorun bildir "
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Ayrıntılar",
      "edit": "Düzenle"
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
        "title": "Alan/Mekan: %{node} | wheelmap.org"
      },
      "link": {
        "back": "geri",
        "large_map": "Genişlet",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Görsel yükleyin"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-posta",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, verileriniz yanlış veya eksik.",
        "successfull": "Teşekkür ederiz, tesciliniz başarılı bir şekilde kayıtlanmıştır ve kısa bir süre sonra online olacak."
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\"statüsü artık \"%{status} tekerlekli sandalya için ulaşılır\" olarak değiştirilmiştir ve kisa süre sonra online olucak. "
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ".",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "TL"
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
          "billion": "Milyar",
          "million": "Milyon",
          "quadrillion": "Katrilyon",
          "thousand": "Bin",
          "trillion": "Trilyon",
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
  "or": "veya",
  "place": {
    "one": "%{count} Yer ve Mekan",
    "other": "%{count} Yer ve Mekanlar"
  },
  "poi": {
    "category": {
      "accommodation": "Konaklama Yeri",
      "education": "Eğitim",
      "food": "Yiyecek",
      "government": "Resmi Daire ve Büyük Elçilikler",
      "health": "Sağlık",
      "leisure": "Boş Vakit",
      "misc": "Çeşitli",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Alışveriş",
      "sport": "Spor",
      "tourism": "Turizm",
      "unknown": "Belirsiz"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Plaj Oteli",
        "bed_and_breakfast": "Kahvaltı veren Pansiyon ",
        "camp_site": "Kamping Meydanı",
        "caravan_site": "Karavan Parkı",
        "chalet": "Bungalov",
        "dormitory": "Yurt",
        "guest_house": "Pansiyon",
        "hostel": "Öğrenci Yurdu",
        "hotel": "Otel",
        "motel": "Motel"
      },
      "education": {
        "college": "Yüksekokul",
        "driving_school": "Sürücü Kursu",
        "kindergarten": "anaokulu/ yuva",
        "library": "Kütüphane",
        "museum": "Müze",
        "school": "Okul",
        "university": "Üniversite"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Bira bahçesi",
        "cafe": "Cafe Bar",
        "drinking_water": "Içme Suyu",
        "fast_food": "Fast Food",
        "ice_cream": "Dondurmacı",
        "pub": "Birahane",
        "restaurant": "Lokanta"
      },
      "government": {
        "courthouse": "Adliye",
        "embassy": "Elçilik",
        "government": "Devlet dairesi",
        "police": "Polis",
        "public_building": "Resmi Bina",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Dişçi",
        "doctors": "Doctor",
        "hearing_aids": "İşitme cihazı satıcısı",
        "hospital": "Hastane",
        "medical_supply": "Tıbbi malzemeler",
        "pharmacy": "Eczane",
        "social_facility": "Sosyal tesis",
        "veterinary": "Veteriner"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Genelev",
        "casino": "Kumarhane",
        "cinema": "Sinema",
        "community_centre": "Community centre",
        "gallery": "Galeri",
        "nightclub": "Gece Kulübü",
        "playground": "Çocuk Parkı",
        "sauna": "Sauna",
        "stripclub": "Striptiz Kulübü",
        "theatre": "Tiyatro",
        "zoo": "Hayvanat Bahçesi"
      },
      "misc": {
        "company": "Şirket (Ofis)",
        "estate_agent": "Emlakçı",
        "insurance": "Sigorta",
        "lawyer": "Avukat",
        "place_of_worship": "Ibadet Yeri",
        "toilets": "Tuvalet"
      },
      "money_post": {
        "atm": "ATM/Paramatik",
        "bank": "Banka",
        "bureau_de_change": "Döviz bürosu",
        "post_box": "Posta Kutusu",
        "post_office": "Postane"
      },
      "public_transfer": {
        "aerodrome": "Havaalanı",
        "bicycle_parking": "Bisiklet park yeri",
        "bicycle_rental": "Bisiklet kirası",
        "boatyard": "Boat yard",
        "bus_station": "Otobüs garajı, Otogar, Terminal",
        "bus_stop": "Otobüs durağı",
        "cable_car": "Teleferik",
        "car_rental": "Araba Kirası",
        "car_sharing": "Otomobil paylaşımı",
        "chair_lift": "Koltuklu teleferik",
        "ferry": "Feribot",
        "ferry_terminal": "Feribot terminalı",
        "fuel": "Benzin Istasyonu",
        "halt": "Durak",
        "light_rail": "Tramvay",
        "parking": "Otopark",
        "parking_aisle": "Otopark geçiti",
        "platform": "Platform",
        "station": "Metro",
        "subway_entrance": "Metro girişi",
        "terminal": "Havalimanı terminalı",
        "tram_stop": "Tramvay durağı"
      },
      "shopping": {
        "alcohol": "Alkollü içki",
        "bakery": "Fırın",
        "beauty": "Güzellik salonu",
        "beverages": "Içecekler",
        "bicycle": "Bisiklet dükkanı",
        "books": "Kitapcı",
        "butcher": "Kasap",
        "car_repair": "Araba tamircisi",
        "car_shop": "Araba galerisi",
        "chemist": "Chemist / Drugstore",
        "clothes": "Giyisi",
        "computer": "Bilgisayar",
        "confectionery": "Şekerlemeci",
        "convenience": "Kolaylık",
        "deli": "Mezeci",
        "department_store": "Büyük mağaza",
        "doityourself": "Kendi işini kendin yap",
        "dry_cleaning": "Kuru temizleme",
        "electronics": "Elektronik",
        "fabric": "Kumaş dükkanı",
        "farm_shop": "Tarım dükkanı",
        "florist": "Çiçekçi",
        "furniture": "Mobilya dükkanı",
        "garden_centre": "Garden centre",
        "gift": "Hediyelikçi",
        "hairdresser": "Kuaför",
        "hardware": "Hırdavat",
        "jewelry": "Kuyumcu",
        "kiosk": "Satış Kulübesi",
        "laundry": "Çamaşirhane",
        "mall": "Alışveriş merkezi",
        "optician": "Gözlükçü",
        "organic": "Organik ürün dükkanı",
        "outdoor": "Açıkhava malzemeleri",
        "pet": "Pet shop",
        "photo": "Fotoğrafçı",
        "second_hand": "İkinci el",
        "shoes": "Ayakkabı",
        "sports": "Spor",
        "stationery": "Kırtasiye",
        "supermarket": "Süpermarket",
        "toys": "Oyuncak",
        "travel_agency": "Seyahat acentası",
        "video": "Video kiralama dükkanı"
      },
      "sport": {
        "pitch": "Spor alanı",
        "sports_centre": "Spor mekezi",
        "stadium": "Stadyum/Stat",
        "swimming": "Yüzme",
        "swimming_pool": "Yüzme Havuzu"
      },
      "tourism": {
        "archaeological_site": "Arkeolojik Yer",
        "arts_centre": "Kültür merkezi",
        "artwork": "Sanat eseri",
        "attraction": "Atraksiyon",
        "battlefield": "Savaş Meydanı",
        "beach": "Kumsal",
        "beacon": "Fener Kulesi",
        "castle": "Hisar/Kale/Şato",
        "cave_entrance": "Mağara Girişi",
        "information": "Turist bilgisi",
        "memorial": "Anıt",
        "theme_park": "Eğlence parkı",
        "tower": "Kale/Kule",
        "viewpoint": "Durulan yer"
      },
      "unknown": {
        "unknown": "Belirsiz"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Statü: bağlantı var",
          "grant": "Şimdi bağlan",
          "not_connected": "Statü: Bağlantı yok",
          "revoke": "Bağlantıyı kesmek"
        }
      },
      "headline": "Profilinizi düzenleyin"
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
          "example": "<strong>Örnek:</strong>  Londra, Birleşik Krallık",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Lütfen <strong>adresi detaylandırın</strong>.",
          "intro": "Bunu deneyin:",
          "spell_check": "Girdinizin <strong>imlasını</strong> kontrol edin."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} sonuç:",
          "other": "%{count} sonuç:"
        }
      },
      "search": {
        "for": "\"%{q}\" araniyor",
        "not_found": "Yer bulunamadi!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Arama hizmetimiz geçici olarak devredışı.",
      "repeat_search": "Yeniden ara"
    }
  },
  "splash": {
    "countline": "%{count} yer zaten işaretlendi.",
    "headline": "Herkes tekerlekli sandalye erişilebilirliği olan yerleri işaretleyebilir!",
    "start": "Başlat",
    "step1": "Bildiğiniz bir yere tıklayın",
    "step2": "İşaretleyin ve kaydete tıklayın",
    "step3": "İşte bu! Kaydolmak gerekmiyor",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Istatistik",
  "support": {
    "array": {
      "last_word_connector": " ve ",
      "sentence_connector": "ve",
      "two_words_connector": " ve ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Lütfen seçiniz"
    }
  },
  "time": {
    "am": "öğleden önce",
    "formats": {
      "default": "%a %d.%b.%y %H:%M",
      "long": "%e %B %Y, %A, %H:%M",
      "short": "%e %B, %H:%M"
    },
    "pm": "öğleden sonra"
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
        "notice": "Hesabınız şimdi aktive edildi!"
      },
      "error": {
        "notice": "E-Posta ve parola birbirine uymuyor"
      },
      "notice": "Oturum açtınız!"
    },
    "destroy": {
      "notice": "Hoşçakalın,yine gelin!"
    },
    "new": {
      "email": "Email address",
      "login": "Oturum aç",
      "login_with_twitter": "Twitter ile oturum aç",
      "password": "Parola",
      "remember_me": "Kayıtlı kal"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Sizinle nasıl iletişime geçebiliriz? Bu bilgiyi daha sonra profilinizinden değiştirebilirsiniz."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Yüklenmiş görselleriniz."
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
        "title": "Haberler"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Fotoğraflar"
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
          "settings": "Ayarlar"
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
      "next": "Sonraki &rsaquo;",
      "previous": "&lsaquo; Önceki",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Tekerlekli sandalyeyle kısmen erişilebilir",
    "no": "Tekerlekli sandalye erişilebilirliği yok",
    "unknown": "Bilinmeyen durum",
    "yes": "tekerlekli sandalye ile ulaşılır"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Bir destekçi olun",
      "main_supporter": "Ana destekçi"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "iPhone App'i şimdi indirin!"
    },
    "logo": {
      "alt": "Wheelmap Logo - tekerlekli sandalye ile ulaşılır yerler bulun",
      "title": "Wheelmap - tekerlekli sandalye ile ulaşılır yerler bulun"
    },
    "what_is": {
      "fully_accessible": "Girişte merdiven yok, tüm odalar merdivensiz.",
      "limited_accessible": "Girişte max. yüksekliği 7cm (3 inç) olan bir merdiven var. Çoğu odalar merdivensiz.",
      "not_accessible": "Girişte bir veya birkaç basamak var, odalar erişilebilir değil.",
      "unknown_accessible": "Yerleri işaretleyerek yardımda bulunun!"
    }
  },
  "will_paginate": {
    "next_label": "Sonraki &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "1 %{model} gösteriliyor",
        "other": "Tüm %{count} %{model} gösteriliyor",
        "zero": "%{model} bulunamadı"
      },
      "single_page_html": {
        "one": "<b>1</b> %{model} gösteriliyor",
        "other": "<b>all&nbsp;%{count}</b> %{model} gösteriliyor",
        "zero": "%{model} bulunamadı"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Önceki"
  }
});
