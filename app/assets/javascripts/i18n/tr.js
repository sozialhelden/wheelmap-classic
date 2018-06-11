I18n.translations || (I18n.translations = {});
I18n.translations["tr"] = I18n.extend((I18n.translations["tr"] || {}), {
  "actions": {
    "cancel": "İptal",
    "next": "Sonraki adım",
    "save": "Kaydet",
    "send": "Gönder"
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
        "address_housenumber": "Kapı No",
        "address_postcode": "Posta Kodu",
        "address_street": "Sokak",
        "name": "İsim",
        "note": "Not",
        "phone": "Telefon",
        "type": "Tür",
        "website": "Web sitesi"
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
      "notice": "Zaten oturum açtınız..."
    },
    "require_user": {
      "notice": "Bu sayfayı görmek için oturum açmalısınız."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Yeni bir mekan ekle",
      "edit": "Mekanı düzenle"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "kapat",
    "skip": "atla"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Lütfen bize İngilizce veye Almanca yazın.",
        "flash_after_submit": "Bizimle iletişime geçtiğiniz için teşekkürler. Destek ekibimiz en kısa sürede size geri dönecektir.",
        "header_text_html": "Lütfen yardım için öncelikle <a href=\"https://news.wheelmap.org/en/faq/\">Sıkça Sorulan Sorular</a>'a göz atın. Eğer çözüm bulamadıysanız, lütfen aşağıdaki soruları cevaplayarak sorunu çözmemize yardımcı olun.",
        "note": "Wheelmap, kar amacı gütmeyen bir kuruluş tarafından yürütülen açık kaynaklı bir projedir ve uygulama geliştirme için sınırlı kaynağımız olduğunu unutmayın.",
        "questions": {
          "a": "Ne yaptınız?",
          "b": "Ne olacağını bekliyordunuz?",
          "c": "Bunun yerine ne oldu?"
        },
        "submit_button": "Gönder",
        "title": "Sorun bildir"
      }
    }
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
      "confirmed": "E-posta adresiniz başarılı bir şekilde onaylandı.",
      "link": "Onay talimatları size ulaşmadı mı?",
      "send_instructions": "Birkaç dakika içinde hesabınızı onaylamak için bir e-posta alacaksınız.",
      "send_paranoid_instructions": "Eğer hesabınız varsa, birkaç dakika içinde hesabınızı nasıl onaylayacağınızı anlatan bir e-posta alacaksınız."
    },
    "destroy": {
      "confirm": "Emin misiniz?",
      "headline": "Hesabı sil",
      "link": "Şimdi sil"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Güncel şifre <i> (Yapmak istediğiniz değişikleri onaylamak için gereklidir) </i>",
          "email": "E-Posta",
          "password": "Şifre <i> (Şifrenizi değiştirmek istemiyorsanız boş bırakın) </i>",
          "password_confirmation": "Şifreyi tekrar girin"
        },
        "submit": "Değişiklikeri kaydet"
      },
      "headline": "Hesabı yönet"
    },
    "failure": {
      "already_authenticated": "Zaten oturum açtınız.",
      "inactive": "Hesabınız henüz etkinleştirilmedi.",
      "invalid": "Geçersiz e-posta adresi veya şifre.",
      "invalid_token": "Geçersiz kimlik doğrulama belirteci",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Hesabınız kilitli",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Oturumunuz zaman aşımına uğradı, devam etmek için tekrar giriş yapın.",
      "unauthenticated": "Devam etmek için giriş yapın veya kaydolun.",
      "unconfirmed": "Devam etmek için hesabınızı onaylamanız gerekiyor."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Lütfen e-posta adresinize gönderilen linki tıklayın. Eğer bizden herhangi bir e-posta almadıysanız, lütfen öncelikle spam kutusunu kontrol edin, yoksa kayıt sayfasına geri dönün ve tekrar deneyin.",
        "subject": "Hesabınızı etkinleştirmeye bir adım daha kaldı."
      },
      "reset_password_instructions": {
        "subject": "Şifre talimatlarını sıfırla"
      },
      "unlock_instructions": {
        "subject": "Kilit kaldırma talimatları"
      }
    },
    "mandatory": "* Doldurulması zorunlu alan",
    "omniauth_callbacks": {
      "failure": "%{kind} yetkilendirmesi başarısız oldu. Hata: \"%{reason}\".",
      "permission_missing": "Gerekli izni vermediniz.",
      "success": "%{kind} oturumu başarıyla açıldı."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-Posta"
        },
        "submit": "Şifreyi sıfırla"
      },
      "headline": "Parolanızı mı unuttunuz?"
    },
    "password_reset": {
      "email": {
        "comment": "Şifrenizi değiştirmek istemiyorsanız lütfen bu mesajı dikkate almayın. <br/> Bu linke tıklayıp yeni şifre girmediğiniz sürece şifreniz değiştirilmeyecektir.",
        "headline": "Hoşgeldiniz %{email}",
        "link": "Şifremi değistir",
        "text": "Şifrenizi değiştirmek için bir istek aldık. İsteği siz gönderdiyseniz, aşağıdaki linke tıklayın - yoksa bu mesajı dikkate almayın!"
      },
      "form": {
        "labels": {
          "password": "Yeni şifre",
          "password_confirmation": "Şifreyi tekrar gir"
        },
        "submit": "Şifreyi sıfırla"
      },
      "headline": "Şifreyi sıfırla"
    },
    "passwords": {
      "link": "Parolanızı mı unuttunuz?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Birkaç dakika içinde şifrenizi nasıl sıfırlayacağınızı anlatan bir e-posta alacaksınız.",
      "send_paranoid_instructions": "Eğer hesabınız varsa, birkaç dakika içinde şifrenizi nasıl sıfırlayacağınızı anlatan bir e-posta alacaksınız.",
      "updated": "Şifreniz başarıyla değiştirildi, şu anda oturum açtınız",
      "updated_not_active": "Şifreniz başarıyla değiştirildi"
    },
    "registrations": {
      "destroyed": "Hoşçakalın! Hesabınız başarıyla iptal edildi.  Yakında sizi tekrar görmeyi umuyoruz.",
      "inactive_signed_up": "Başarılı bir şekilde kaydoldunuz, fakat oturum açılamadı. Engelleme sebebi: %{reason}.  ",
      "link": "Kaydol",
      "reasons": {
        "inactive": "aktif değil",
        "locked": "kilitli",
        "unconfirmed": "onaylanmadı"
      },
      "signed_up": "Başarılı bir şekilde kaydoldunuz. Size bir onay e-postası gönderildi.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Hesabınızı başarılı bir şekilde güncelleştirdiniz."
    },
    "sessions": {
      "inactive": "Hesabınız henüz etkinleştirilmedi",
      "invalid": "Geçersiz e-posta veya şifre.",
      "invalid_token": "Geçersiz resmi tasdik belirtisi. ",
      "link": "Oturumu aç",
      "locked": "Hesabınız kilitli",
      "new": {
        "no_osm_account": "OpenStreetMap hesabınız yok mu?",
        "osm_promo_text": "Wheelmap, OpenStreetMap (OSM) coğrafi verilerini kullanmaktadır. OpenStreetMap, sizin gibi insanlar tarafından oluşturulmuş ücretsiz bir dünya haritasıdır, işleyişi Wikipedia gibidir. Haritadaki yerleri düzenleyebilmek veya yenilerini oluşturmak için bir OpenStreetMap hesabı oluşturmanız ve oturum açmanız gerekir.",
        "promo_text_thank_you": "Desteğiniz için çok teşekkür ederiz!",
        "sign_in_with": "%{kind} ile oturum aç",
        "sign_up_with_osm": "Şimdi kaydol.",
        "wheelmap_promo_text": "Tekerlekli sandalye ile ulaşılabilen yerler hakkındaki bilgilerinizle, fiziksel engelli kişilerin günlük yaşantılarını daha iyi planlamasına yardımcı olabilirsiniz. Bu ayrıca OpenStreetMap içeriğinin daha ayrıntılı hale gelmesine yardımcı olacaktır."
      },
      "signed_in": "Oturum açıldı",
      "signed_out": "Başarıyla çıkış yaptınız.",
      "timeout": "Oturumunuz zaman aşımına uğradı, devam etmek için tekrar giriş yapın.",
      "unauthenticated": "Devam etmek için giriş yapın veya kaydolun.",
      "unconfirmed": "Devam etmek için hesabınızı onaylamanız gerekiyor."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-Posta",
          "password": "Şifre",
          "remember_me": "Oturum açık kalsın mı?"
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
        "confirm_my_account": "Hesabımı onayla",
        "please_confirm": "Aşağıdaki linke tıklayarak hesabınızı onaylayabilirsiniz.",
        "welcome": "Hoşgeldin %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-Posta",
          "password": "Şifre",
          "password_confirmation": "Şifreyi tekrar gir",
          "wants_newsletter": "Evet, Wheelmap ile ilgili yeniliklerden beni haberdar edin, fakat bu ayda bir defadan fazla olmasın."
        },
        "submit": "Kaydol"
      },
      "headline": "Kaydol"
    },
    "unlocks": {
      "link": "Kilit kaldırma talimatlarını almadınız mı?",
      "send_instructions": "Birkaç dakika içinde hesabınızın klidini nasıl kaldıracağınızı anlatan bir e-posta alacaksınız.",
      "send_paranoid_instructions": "Eğer hesabınız varsa, birkaç dakika içinde hesabınızın kilidini nasıl kaldıracağınızı anlatan bir e-posta alacaksınız.",
      "unlocked": "Hesabınızın kilidi başarılı bir şekilde kaldırılmıştır. Şu an oturum açtınız."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "kabul edilmelidir",
      "already_confirmed": "zaten onaylandı.",
      "blank": "doldurulmalıdır",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "onaylamaya uymuyor",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "doldurulmalıdır",
      "equal_to": "tam olarak %{count} olmalı",
      "even": "çift sayı olmalıdır",
      "exclusion": "rezerve edilmiş",
      "expired": "zamanaşımına uğramış, lütfen tekrar deneyin",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "%{count} dan yüksek olmalı",
      "greater_than_or_equal_to": "%{count} değerine eşit veya büyük olmalıdır",
      "inclusion": "geçersiz bir değer",
      "invalid": "geçersiz",
      "less_than": "%{count} dan daha eksik olmalı",
      "less_than_or_equal_to": "%{count} değerine eşit veya küçük olmalıdır",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "bu bir numara değildir",
      "not_an_integer": "tamsayı olması gerekir",
      "not_found": "bulunamadı",
      "not_locked": "kilitli değildi",
      "not_saved": {
        "one": "%{resource}:içinde bir hata kaydedilmedi.",
        "other": "%{resource}içinde%{count}hata kayıt edilmedi."
      },
      "odd": "tek sayı olmalıdır",
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
          "invalid": "Web sitesi adresi geçerli değildir."
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
      "0": "Bir mekanın işaretini her zaman değiştirebilirsiniz. Sadece doğru işaretleyin \"Kaydet\"i tıklayın - Hepsi bu!",
      "1": "Giriş yaptıktan sonra bir mekanın tüm bilgilerini ekleyebilir veya düzeltebilirsiniz. \"Düzenle\" tuşuna basarak bilgi ekleyin veya düzeltin.",
      "2": "Yorum bölümüne daha fazla bilgi ekleyebilirsiniz (ör. \"Bu mekanda mobil bir rampa vardır\"). \"Düzenle\"'yi ve \"Yorum ekle\"'yi tıklayın."
    },
    "headline": "Bu mekanla ilgili bir sorun mu var?",
    "questions": {
      "0": "İşaret yanlış.",
      "1": "Mekan bilgileri yanlış veya eksik.",
      "2": "Bu mekanl hakkında daha fazla bilgiye sahibim"
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
    "show_places_without_status": "Durumu bilinmiyor",
    "show_unaccessible_places": "Tekerlekli sandalye erişimine uygun değil"
  },
  "formtastic": {
    "cancel": "İptal",
    "create": "%{model} oluştur",
    "hints": {
      "email": "Adresinizi gizli tutuyoruz. Size spam göndermemeye söz veriyoruz!",
      "lat": "Işareti haritanın üzerinde doğru yere ulaşana kadar oynatın.",
      "osm_username": "Henüz üye değilmisiniz? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an Openstreetmap account now</a>",
      "password": "(değistirmek istemiyorsanız, boş bırakın)",
      "phone": "Ör. +49 30 12345678",
      "website": "Örnegin: http://www.örnek.com"
    },
    "labels": {
      "category": "Tabaka:",
      "centralkey": "Merkez anahtarı:",
      "city": "Şehir",
      "create": "Bir mekan ekleyin",
      "email": "E-posta",
      "finish": "Bitir",
      "housenumber": "No:",
      "lat": "Enlem",
      "lon": "Boylam",
      "name": "Isim",
      "osm_password": "OpenStreetMap şifresi",
      "osm_username": "OpenStreetMap kullanıcı adı",
      "password": "Şifre",
      "password_confirmation": "Şifreyi tekrar girin",
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
      "wheelchair_toilet": "Tekerlekli sandalye erişimine uygun tuvalet:"
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
      "description": "Wheelmap.org, tekerlekli sandalye erişimine uygun mekanları aramak, bulmak ve işaretlemek için kullanılan çevrimiçi bir haritadır. Barlar, restoranlar, sinemalar veya süpermarketler gibi herkese açık mekanları işaretleyerek sen de katıl!",
      "homepage": "Ana Sayfa",
      "keywords": "Tekerlekli Sandalye ile erişilir alanlar ve mekanlar bul ara işaretle",
      "search": "Ara",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Dil seçin",
      "contact": "İletişim",
      "faq": "SSS",
      "feedback": "Geribildirim",
      "home": "Başlat",
      "how_to_add_a_place": "Yeni mekan/alan nasıl eklenir?",
      "imprint": "Künye",
      "logged_in_as": "Giriş yaptınız:",
      "login": "Oturum aç",
      "logout": "Oturumu kapat",
      "map": "Harita",
      "newsletter": "Bülten",
      "press": "Basın",
      "privacy": "Privacy Policy",
      "profile": "Profil",
      "projects": "Sen de katıl",
      "report_problem": "Sorun bildir",
      "suggestions": "Öneriler",
      "travelguide": "Gezi rehberi",
      "what_is_barrier_free": "\"Tekerleki sandalye ile ulasilir\" ne demek?",
      "what_is_wheelmap": "Wheelmap nedir?"
    },
    "searchbar": {
      "add_place": "Başka bir mekan/alan ekle",
      "find": "Bul",
      "placeholder": "mesela Sunset Boulevard L.A. veya Brandenburger Tor Berlin",
      "title_add_place": "Şimdi bu pozisyona yeni bir alan veya mekan ekle!"
    },
    "tagline": "Wheelmap logo",
    "title": "Tekerlekli sandalye erişimine uygun mekanları bul",
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
      "embed_link": "Wheelmap.org üzerinde göster",
      "filter": {
        "category": "Tabaka:",
        "deselect_all": "Tüm işaretleri kaldır",
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
          "message": "Internet Explorer kullanıyor görünüyorsunuz. Wheelmap'in düzgün çalışması için standartlara uygun bir tarayıcı kullanmanız gerekmektedir. Lütfen Firefox, Chrome, Safari veya Opera kullanmayı deneyin."
        }
      },
      "link": {
        "node": {
          "create": "Yeni bir mekan ekle"
        }
      },
      "overlay": {
        "button": "Pekala, hadi başlayalım!",
        "categories": "Mekanları kategorilere göre filtrele",
        "filter": "Mekanları tekerlekli sandalye erişilebilirliğine göre filtrele",
        "headline": "Dünyanın her yerinde tekerlekli sandalye erişimine uygun mekanları Wheelmap.org ile ücretsiz olarak işaretleyin ve bulun. Çok kolay:",
        "lookup": "Belirli bir mekan ara",
        "secondary_headline": "Halka açık mekanlarda tekerlekli sandalye erişilebilirliğini işaretlemek için trafik ışığı sistemimiz:"
      },
      "popup": {
        "form": {
          "limited": "Tekerlekli sandalye erişimine kısmen uygun",
          "no": "Tekerlekli sandalye erişimine uygun değil",
          "save": "Değişiklikeri kaydedin",
          "unknown": "Durumu bilinmiyor",
          "yes": "tekerlekli sandalye erişimine uygun"
        },
        "help": "Tekerlekli sandalye için ulaşılırmı? (Yardım)",
        "more": "daha fazla..."
      },
      "zoom_alert": "Daha fazla yer görmek için yakınlaştırın"
    }
  },
  "how?": "Nasıl?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "%{city} (% {count}) içinde %{type} tekerlekli sandalye erişimine kısmen uygundur."
        },
        "no": {
          "headline": "%{city} (% {count}) içinde %{type} tekerlekli sandalye erişimine uygun değil"
        },
        "unknown": {
          "headline": "%{type} içinde %{city} tekerlekli sandalye erişimine uygun olup olmadığı bilinmiyor (%{count})"
        },
        "yes": {
          "headline": "%{type} içinde %{city} (%{count}) tekerlekli sandalye erişimine uygun"
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
      "prompt": "Kategori seçin"
    },
    "node": {
      "info_edit_position": "Konum Wheelmap üzerinde yukarıdaki gibi görünecektir. Eğer yer işareti doğru noktada değilse, <a href=\"%{url}\">OpenSteetMap üzerinde konumu değiştirebilirsiniz.</a>",
      "mail": {
        "body": "(Lütfen sadece İngilizce veya Almanca yazınız.)\n\nMerhaba Sozialhelden,\nMekanla ilgili yanlış bir şeyler var: %{url}\n\nSorun:",
        "subject": "[Wheelmap]  %{headline} ile ilgili sorun"
      }
    },
    "node_type": {
      "prompt": "Tür seçin"
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
        "successfull": "Teşekkür ederiz, bildirileriniz başarılı bir şekilde kaydedildi ve en kısa zamanda web sitesinde yayınlanacaktır."
      }
    },
    "edit": {
      "header": {
        "title": "Alan veya mekan düzenle: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; İptal"
      }
    },
    "errors": {
      "default": "Hoop! Birşeyler yanlış gitti. Bu sorunla ilgileniyoruz.",
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
        "legend": "Mekanın konumu",
        "location": "Lütfen haritada mekanın bulunduğu konuma tıklayın!",
        "section": {
          "accessibility": {
            "name": "Tekerlekli sandalye erişilebilirliği",
            "title": "Tekerlekli sandalye erişilebilirliği hakkında bilgi"
          },
          "address": {
            "help": "İmleci haritada doğru konuma taşıyabilirsiniz.",
            "name": "Adres",
            "title": "Mekan nerede?"
          },
          "contact": {
            "name": "İletişim",
            "title": "Diğer iletişim bilgisi"
          },
          "name_category": {
            "name": "Mekanın adı ve türü",
            "title": "Mekan hakkında bazı temel bilgileri girin"
          },
          "overview": {
            "title": "Tüm bilgiler doğru mu?"
          },
          "similar_nodes": {
            "empty": "Benzer bir mekan bulunamadı.",
            "go_edit": "Bu mekanı seç",
            "go_new": "Bunlardan hiçbiri değil..",
            "name": "Benzer mekanlar",
            "title": "Yakınlarda benzer mekanlar bulduk. Bunlardan biri mi?"
          }
        },
        "title": "Bir mekan ekle"
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
      "address": "Adres:",
      "contact_details": "İletişim detayları:"
    },
    "node_edit": {
      "details": "Ayrıntılar",
      "edit": "Düzenle"
    },
    "node_map": {
      "map": "Harita:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Yorum:"
    },
    "node_photos": {
      "add": "Ekle",
      "alert": "Lütfen dikkat! Mekanın girişi fotoğrafta açıkça görünmelidir: Girişte basamak var mı? Basamak yüksekliği yaklaşık olarak ne kadar? Kapı ne kadar geniş? Fotoğraf JPG veya PNG formatında olmalıdır. 10 MB'tan büyük olmamalıdır.",
      "photos_of_this_place": "Mekan ait fotoğraflar:",
      "upload": "Karşıya yükle"
    },
    "node_similar": {
      "similar": "Benzer mekanlar: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Tekerlekli sandalye erişimine uygun tuvalet:",
      "premium": "%{name} diyor ki: bu mekan ",
      "wheelchair_accessibility": "Tekerlekli sandalye erişilebilirliği:"
    },
    "node_streetview": {
      "streetview": "Cadde görünümü:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Bu mekanın tekerlekli sandalye erişimine uygun olup olmadığını Wheelmap.org'dan öğrenebilirsiniz veya mekana ait fotoğraf ve daha fazla bilgi ekleyebilirsiniz.",
          "title": "Bu mekan Wheelmap.org'da mevcut: %{name}"
        },
        "title": "Alan/Mekan: %{node} | wheelmap.org"
      },
      "link": {
        "back": "geri",
        "large_map": "Genişlet",
        "listing": "%{city} şehrinde mekanların türü '%{type}' ",
        "upload": "Görsel yükleyin"
      },
      "more_data_from": "Burası hakkında daha fazla bilgi var, bilgi girişini yapan: ",
      "share": {
        "email": "E-posta",
        "facebook": "Facebook",
        "text": "Bu mekanı Wheelmap.org'da buldum: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, verileriniz yanlış veya eksik.",
        "successfull": "Teşekkür ederiz, kaydınız yapıldı ve hesabınız kısa bir süre sonra aktif hale gelecektir."
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
        "headline": "Wheelmap.org'a mekan eklemek ve değişiklik yapabilmeniz için hesabınızı OpenStreetMap hesabınıza bağlamanız gerekmektedir."
      }
    },
    "callback": {
      "notice": "Wheelmap hesabınız artık OpenStreetMap'deki %{user} hesabınıza bağlandı."
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
      "money_post": "Banka / Postane",
      "public_transfer": "Toplu taşıma",
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
        "employment_agency": "İstihdam bürosu",
        "government": "Devlet dairesi",
        "police": "Polis",
        "public_building": "Resmi Bina",
        "townhall": "Belediye binası"
      },
      "health": {
        "alternative": "Alternatif tıp doktoru",
        "dentist": "Dişçi",
        "doctors": "Doktor",
        "hearing_aids": "İşitme cihazı satıcısı",
        "hospital": "Hastane",
        "medical_supply": "Tıbbi malzemeler",
        "occupational_therapist": "Meslek hastalıkları terapisti",
        "pharmacy": "Eczane",
        "physiotherapist": "Fizyoterapist",
        "psychotherapist": "Psikoterapist",
        "social_facility": "Sosyal tesis",
        "speech_therapist": "Konuşma terapisti",
        "veterinary": "Veteriner"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Genelev",
        "casino": "Kumarhane",
        "cinema": "Sinema",
        "community_centre": "Toplum merkezi",
        "gallery": "Galeri",
        "massage": "Masaj spa",
        "nightclub": "Gece Kulübü",
        "playground": "Çocuk Parkı",
        "sauna": "Sauna",
        "stripclub": "Striptiz Kulübü",
        "tattoo": "Dövme dükkanı",
        "theatre": "Tiyatro",
        "zoo": "Hayvanat Bahçesi"
      },
      "misc": {
        "association": "Dernek",
        "company": "Şirket (Ofis)",
        "estate_agent": "Emlakçı",
        "insurance": "Sigorta",
        "lawyer": "Avukat",
        "ngo": "Sivil toplum örgütü",
        "place_of_worship": "Ibadet Yeri",
        "political_party": "Siyasi parti ofisi",
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
        "boatyard": "Tersane",
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
        "antiques": "Antikalar",
        "art": "Galeri",
        "bakery": "Fırın",
        "beauty": "Güzellik salonu",
        "beverages": "Içecekler",
        "bicycle": "Bisiklet dükkanı",
        "books": "Kitapcı",
        "butcher": "Kasap",
        "car_repair": "Araba tamircisi",
        "car_shop": "Araba galerisi",
        "chemist": "Kimyacı / Eczane",
        "clothes": "Giyisi",
        "computer": "Bilgisayar",
        "confectionery": "Şekerlemeci",
        "convenience": "Kolaylık",
        "copyshop": "Baskı dükkanı",
        "deli": "Mezeci",
        "department_store": "Büyük mağaza",
        "doityourself": "Kendi işini kendin yap",
        "dry_cleaning": "Kuru temizleme",
        "electronics": "Elektronik",
        "erotic": "Sex market",
        "fabric": "Kumaş dükkanı",
        "farm_shop": "Tarım dükkanı",
        "florist": "Çiçekçi",
        "funeral_directors": "Cenaze evi",
        "furniture": "Mobilya dükkanı",
        "garden_centre": "Bahçe merkezi",
        "gift": "Hediyelikçi",
        "greengrocer": "Manav",
        "hairdresser": "Kuaför",
        "hardware": "Hırdavat",
        "interior_decoration": "İç dizayn marketi",
        "jewelry": "Kuyumcu",
        "kiosk": "Satış Kulübesi",
        "laundry": "Çamaşirhane",
        "mall": "Alışveriş merkezi",
        "mobile_phone": "Mobil telefon dükkanı",
        "music": "Müzik mağazası",
        "musical_instrument": "Müzik enstrüman dükkanı",
        "newsagent": "Gazeteci",
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
        "tailor": "Terzi",
        "tea": "Çay stoğu",
        "tobacco": "Tütün dükkanı",
        "toys": "Oyuncak",
        "travel_agency": "Seyahat acentası",
        "variety_store": "İndirim mağazası",
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
          "connected": "Durum: Bağlantı var",
          "grant": "Şimdi bağlan",
          "not_connected": "Durum: Bağlantı yok",
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
        "headline": "Üzgünüz, \"%{query}\" adıyla herhangi bir mekan bulamadık.",
        "hint": {
          "example": "<strong>Örnek:</strong>  Londra, Birleşik Krallık",
          "info": "Arama servisimiz sadece isim ve/veya adres bilgileri ile çalışır. Bu nedenle lütfen mekanın adını veya adresini -ör. sokak adı ve/veya şehir- girerek arama yapınız.. Restoran veya sinema gibi mekan türünü girerek arama yapamazsınız!",
          "work_in_progress": "Gelecekte mekan aramayı daha kolay ve sezgisel hale getirmek için çok çalışıyoruz."
        },
        "try_this": {
          "address": "Lütfen <strong>adresi detaylandırın</strong>.",
          "intro": "Bunu deneyin:",
          "spell_check": "Aradığınız kelimeyi <strong>doğru yazıp yazmadığınızı</strong> kontrol edin."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} sonuç:",
          "other": "Sonuç %{count}:"
        }
      },
      "search": {
        "for": "\"%{q}\" araniyor",
        "not_found": "Yer bulunamadi!"
      }
    },
    "timeout": {
      "headline": "Üzgünüz, bir şeyler ters gitti",
      "info": "Arama hizmetimiz geçici olarak servis dışı.",
      "repeat_search": "Tekrar ara"
    }
  },
  "splash": {
    "countline": "%{count} yer zaten işaretlendi.",
    "headline": "Herkes tekerlekli sandalye erişimine uygun yerleri işaretleyebilir!",
    "start": "Başlat",
    "step1": "Bildiğiniz bir mekana tıklayın",
    "step2": "Mekanı işaretleyin ve kaydete tıklayın",
    "step3": "İşte bu! Kaydolmak gerekmiyor",
    "what_is_wheelmap": "Wheelmap nedir?"
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
    "no": "Tuvalet, tekerlekli sandalye erişimine uygun değil",
    "unknown": "Tuvalet durumu bilinmiyor",
    "what_is": {
      "no": "Kapıların iç genişliği en az 90 cm (35 inç), açık alan en az 150 x 150 cm (59 x 59 inç), tekerlekli sandalye yüksekliğinde klozet, çift taraflı tutma yerleri ve ulaşılabilir lavabo.",
      "unknown": "Tuvalet durumunu işaretleyerek yardım edebilirsiniz!",
      "yes": "Kapıların iç genişliği en az 90 cm (35 inç), açık alan en az 150 x 150 cm (59 x 59 inç), tekerlekli sandalye yüksekliğinde klozet, çift taraflı tutma yerleri ve ulaşılabilir lavabo."
    },
    "yes": "Tekerlekli sandalye erişimine uygun tuvalet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Hesabınız şimdi aktive edildi!"
      },
      "error": {
        "notice": "E-posta ve şifre uyuşmuyor."
      },
      "notice": "Oturum açtınız!"
    },
    "destroy": {
      "notice": "Hoşçakalın,yine gelin!"
    },
    "new": {
      "email": "E-posta adresi",
      "login": "Oturum aç",
      "login_with_twitter": "Twitter ile oturum aç",
      "password": "Şifre",
      "remember_me": "Kayıtlı kal"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Neredeyse bitti! Şimdi Wheelmap hesabınızı tamamlamak için:",
        "set_password_for_mobile": "OpenStreetMap'e başarıyla kaydoldunuz. Wheelmap'ın kullanmasını istediğiniz bir e-posta adresi seçin, böylece faaliyetleriniz hakkında sizi bilgilendirebiliriz (örneğin işaretlediğiniz mekanların sayısı). Bu bilgiye \"Profil\" üzerinden ulaşabilirsiniz.",
        "text": "Sizinle nasıl iletişime geçebiliriz? Bu bilgiyi daha sonra profilinizinden değiştirebilirsiniz."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Yüklediğiniz görseller."
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Hesap bilgileriniz"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Evet, Wheelmap hakkında beni bilgilendirin.",
        "text": "Wheelmap bülteni ile yeniliklerden haberdar olun. Merak etmeyin, ayda bir defa bilgilendirileceksiniz.",
        "title": "Bülten"
      },
      "photos": {
        "empty": "Henüz hiç fotoğraf yüklemediniz.",
        "title": "Fotoğraflar"
      },
      "show": {
        "greeting": {
          "anonymously": "Merhaba",
          "personalized": "Merhaba %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "%{count} fotoğraf yüklendi",
            "other": "%{count} fotoğraf yüklendi"
          },
          "pois_added": {
            "one": "%{count} mekan eklendi",
            "other": "%{count} mekan eklendi"
          },
          "pois_edited": {
            "one": "%{count} mekan düzenlendi",
            "other": "%{count} mekan düzenlendi"
          },
          "pois_marked": {
            "one": "%{count} mekan işaretlendi",
            "other": "%{count} mekan işaretlendi"
          },
          "text": "Sen"
        },
        "text_html": "Merhaba,<br>\nWheelmap.org'a (tekrar) hoşgeldiniz! Sizi gördüğümüze sevindik! Wheelmap.org hakkında daha fazla bilgi almak isterseniz <a href=\"http://news.wheelmap.org/en/\">Blog</a> veya <a href=\"http://news.wheelmap.org/en/FAQ/\">SSS</a> sayfalarına göz atabilirsiniz. Ayrıca Wheelmap.org <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projelerini</a> inceleyebilir ve nasıl katılbileceğinizi öğrenebilirsiniz.<br>\nHaberdar olmak için aylık bültenimize kaydolabilir, bizi <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> ve <a href=\"https://twitter.com/wheelmap\">Twitter</a> üzerinden takip edebilirsiniz. Görüşlerinizi almak ve değerlendirmek için sizi bekliyoruz.!<br>\nVe şimdi mekanları işaretleme zamanı!<br>\nWheelmap Ekibi",
        "title": "Genel bakış"
      },
      "widget": {
        "categories": "Kategori filtresini göster",
        "center": "Harita alanı",
        "empty_center": "Harita merkezini ara...",
        "empty_provider": "Bir sağlayıcı seçiniz",
        "height": "Yükseklik",
        "legends": {
          "embed": "Ekleme kodu",
          "embed_explanation": "Yukarıdaki kodda enlem (<code>lat</code>), boylam (<code>lon</code>) ve yakınlaştırma düzeyi (<code>zoom</code>) özelliklerini elle değiştirebilir ve böylece göstermek istediğiniz yere göre harita segmentini (widget'ı) ayarlayabilirsiniz.",
          "general": "Kendi Wheelmap widget'inizi oluşturun ve web sitenize veya blogunuza ekleyin.",
          "preview": "Önizleme",
          "settings": "Ayarlar"
        },
        "providers": "Sağlayıcı",
        "title": "Widget",
        "width": "Genişlik"
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
    "limited": "Tekerlekli sandalye erişimine kısmen uygun",
    "no": "Tekerlekli sandalye erişimine uygun değil",
    "unknown": "Durumu bilinmiyor",
    "yes": "Tekerlekli sandalye erişimine uygun"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Proje",
      "based_on": "Altyapı",
      "become_a_supporter": "Sponsor olun",
      "main_supporter": "Ana sponsor"
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
      "unknown_accessible": "Mekanları işaretleyerek yardımda bulunun!"
    }
  },
  "will_paginate": {
    "next_label": "Sonraki &#8594;",
    "page_entries_info": {
      "multi_page": "Toplamda %{count}  içinde %{model} %{from} - %{to} arası gösteriliyor.",
      "multi_page_html": "Toplamda <b>%{count}</b>  içinde %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> arası gösteriliyor.",
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
