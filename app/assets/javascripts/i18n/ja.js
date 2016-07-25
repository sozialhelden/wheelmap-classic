I18n.translations || (I18n.translations = {});
I18n.translations["ja"] = I18n.extend((I18n.translations["ja"] || {}), {
  "actions": {
    "cancel": "キャンセル",
    "next": "次",
    "save": "保存",
    "send": "送信する"
  },
  "active_admin": {
    "access_denied": {
      "message": "アクションを実行する権限がありません"
    },
    "any": "任意",
    "batch_actions": {
      "action_label": "選択した行を%{title}",
      "button_label": "一括操作",
      "default_confirmation": "本当によろしいですか？",
      "delete_confirmation": "%{plural_model} を削除してもよろしいですか？",
      "labels": {
        "destroy": "削除する"
      },
      "link": "作成する",
      "selection_toggle_explanation": "(選択)",
      "succesfully_destroyed": {
        "one": "1件の %{model} を削除しました",
        "other": "%{count}件の %{plural_model} を削除しました"
      }
    },
    "blank_slate": {
      "content": "%{resource_name} はまだありません。",
      "link": "作成する"
    },
    "cancel": "取り消す",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "コメントを追加",
      "author": "作成者",
      "author_missing": "匿名ユーザ",
      "author_type": "作成者種別",
      "body": "本文",
      "created_at": "作成日",
      "delete": "コメントを削除",
      "delete_confirmation": "本当にコメントを削除しますか？",
      "errors": {
        "empty_text": "テキストが空のため、コメントは保存されませんでした。"
      },
      "no_comments_yet": "コメントはまだありません。",
      "resource": "リソース",
      "resource_type": "リソース種別",
      "title": "コメント",
      "title_content": "コメント (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "ダッシュボード",
    "dashboard_welcome": {
      "call_to_action": "ダッシュボードに項目を追加するために 'app/admin/dashboard.rb' を編集してください。",
      "welcome": "Active Admin へようこそ。ダッシュボードの初期ページを表示しています。"
    },
    "delete": "削除",
    "delete_confirmation": "本当に削除しますか？",
    "delete_model": "%{model} を削除する",
    "details": "%{model} の詳細",
    "devise": {
      "change_password": {
        "submit": "パスワードを変更する",
        "title": "パスワードを変更する"
      },
      "email": {
        "title": "メールアドレス"
      },
      "links": {
        "forgot_your_password": "パスワードをお忘れですか？",
        "resend_confirmation_instructions": "ユーザ確認手順を再送する",
        "resend_unlock_instructions": "ロックの解除方法を再送する",
        "sign_in": "サインイン",
        "sign_in_with_omniauth_provider": "%{provider}のアカウントを使ってログイン",
        "sign_up": "ユーザ登録"
      },
      "login": {
        "remember_me": "次回から自動的にログイン",
        "submit": "ログイン",
        "title": "ログイン"
      },
      "password": {
        "title": "パスワード"
      },
      "resend_confirmation_instructions": {
        "submit": "確認方法を再送信する",
        "title": "確認方法を再送信する"
      },
      "reset_password": {
        "submit": "パスワードをリセットする",
        "title": "パスワードをお忘れですか？"
      },
      "sign_up": {
        "submit": "登録",
        "title": "登録"
      },
      "subdomain": {
        "title": "サブドメイン"
      },
      "unlock": {
        "submit": "ロックの解除方法を送る",
        "title": "ロックの解除方法を送る"
      },
      "username": {
        "title": "ユーザ名"
      }
    },
    "download": "ダウンロード:",
    "dropdown_actions": {
      "button_label": "操作"
    },
    "edit": "編集",
    "edit_model": "%{model} を編集する",
    "empty": "空",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "条件を削除する",
        "filter": "絞り込む"
      },
      "predicates": {
        "contains": "含まれています",
        "ends_with": "で終わる",
        "equals": "等しい",
        "greater_than": "より大きい",
        "less_than": "より小さい",
        "starts_with": "で始まる"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "削除する",
    "has_many_new": "新規に %{model} を追加する",
    "has_many_remove": "削除する",
    "index_list": {
      "block": "リスト",
      "blog": "ブログ",
      "grid": "グリッド",
      "table": "テーブル"
    },
    "less_than": "Less Than",
    "logout": "ログアウト",
    "main_content": "内容を表示するために %{model}#main_content を実装してください。",
    "new_model": "%{model} を作成する",
    "next": "次",
    "pagination": {
      "empty": "%{model} は見つかりませんでした",
      "entry": {
        "one": "レコード",
        "other": "レコード"
      },
      "multiple": "全 <b>%{total}</b> 件中 <b>%{from}&nbsp;-&nbsp;%{to}</b> 件の %{model} を表示しています",
      "multiple_without_total": "<b>%{from}&nbsp;-&nbsp;%{to}</b> 件の %{model} を表示しています",
      "one": "<b>1</b> 件の %{model} を表示しています",
      "one_page": "<b>全 %{n}</b> 件の %{model} を表示しています"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "前",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "現在の絞り込み:",
      "headline": "範囲:",
      "no_current_filters": "なし"
    },
    "sidebars": {
      "filters": "検索条件",
      "search_status": "検索状態"
    },
    "status_tag": {
      "no": "いいえ",
      "yes": "はい"
    },
    "unsupported_browser": {
      "headline": "ActiveAdminは、Internet Explorer 8以下はサポートはしていません。",
      "recommendation": "最新版の<a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>、<a href=\"https://chrome.google.com/\">Google Chrome</a>、もしくは<a href=\"https://mozilla.org/firefox/\">Firefox</a>を使うことを推奨します。",
      "turn_off_compatibility_view": "Internet Explorer 9以降を使っている場合、<a href=\"http://windows.microsoft.com/ja-JP/windows7/webpages-look-incorrect-in-Internet-Explorer\">互換表示をオフ</a>にしてください。"
    },
    "update_model": "Edit %{model}",
    "view": "閲覧"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "住所",
        "address_city": "都道府県",
        "address_housenumber": "家の番号",
        "address_postcode": "郵便番号",
        "address_street": "住所(Street)",
        "name": "名前",
        "note": "ノート",
        "phone": "電話番号",
        "type": "種別",
        "website": "ウェブサイト"
      },
      "user": {
        "first_name": "名",
        "last_name": "姓",
        "privacy_policy": "プライバシーポリシー",
        "terms": "条件"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "承認してください",
        "blank": "入力必須です",
        "confirmation": "確認入力が一致しません",
        "empty": "空白は許されていません",
        "equal_to": "%{count} と等しくなければなりません",
        "even": "偶数でなければなりません",
        "exclusion": "は予約済みです",
        "greater_than": "%{count} より大きくなければなりません",
        "greater_than_or_equal_to": "%{count} 以上でなければなりません",
        "inclusion": "はリストにありません",
        "invalid": "正しくありません",
        "less_than": "%{count} より小さくなければなりません",
        "less_than_or_equal_to": "%{count} 以下でなければなりません",
        "not_a_number": "は数字ではありません",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "奇数でなければなりません",
        "record_invalid": "バリデーションに失敗しました。 %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "既に取得されています",
        "too_long": "が長すぎます (最大 %{count}文字)",
        "too_short": "が短かすぎます (最小 %{count}文字)",
        "wrong_length": "の文字数が誤っています (%{count}文字でなければなりません)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "パスワードがあれば空白にはできません"
            },
            "privacy_policy": {
              "accepted": "承諾必須"
            },
            "terms": {
              "accepted": "承諾必須"
            }
          }
        },
        "user_session": {
          "email": "メールアドレス",
          "password": "パスワード",
          "remember_me": "ログインを続ける"
        }
      },
      "template": {
        "body": "次の項目に問題がありました：",
        "header": {
          "one": "エラーがひとつありこの %{model} は保存できませんでした",
          "other": "%{count} 件のエラーがあり、この %{model} は保存できませんでした"
        }
      }
    },
    "models": {
      "user": "ユーザ"
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
      "notice": "あなたはログイン済です ..."
    },
    "require_user": {
      "notice": "このページはログインしてから閲覧してください"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "新しい場所を追加",
      "edit": "場所を編集"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "閉じる",
    "skip": "スキップ"
  },
  "date": {
    "abbr_day_names": [
      "日",
      null,
      "月",
      "火",
      null,
      null,
      "木",
      "水",
      null,
      "土",
      null,
      "金"
    ],
    "abbr_month_names": [
      "",
      "1月",
      null,
      null,
      "3月",
      "2月",
      null,
      "5月",
      null,
      "4月",
      "7月",
      null,
      null,
      "9月",
      "11月",
      "6月",
      null,
      null,
      "8月",
      "10月",
      null,
      null,
      null,
      "12月"
    ],
    "day_names": [
      "日曜",
      "月曜",
      null,
      null,
      "水曜",
      "火曜",
      null,
      "金曜",
      null,
      "木曜",
      null,
      null,
      "土曜"
    ],
    "formats": {
      "default": "%Y-%m-%d ",
      "long": "%B %d, %Y",
      "short": "%b %d "
    },
    "month_names": [
      "",
      null,
      "1月",
      "2月",
      null,
      null,
      "4月",
      "3月",
      null,
      "6月",
      null,
      "5月",
      "12月",
      "8月",
      null,
      null,
      "7月",
      "11月",
      null,
      null,
      "9月"
    ],
    "order": [
      "!ruby/symbol year",
      null,
      "!ruby/symbol month",
      "!ruby/symbol day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "約1時間",
        "other": "約 %{count} 時間"
      },
      "about_x_months": {
        "one": "約1か月",
        "other": "約 %{count}か月"
      },
      "about_x_years": {
        "one": "約1年",
        "other": "約 %{count} 年"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "0.5分",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "1年以上",
        "other": "%{count}年以上"
      },
      "x_days": {
        "one": "1日",
        "other": "%{count}日"
      },
      "x_minutes": {
        "one": "1分",
        "other": "%{count}分"
      },
      "x_months": {
        "one": "1か月",
        "other": "%{count} か月"
      },
      "x_seconds": {
        "one": "1秒",
        "other": "%{count}秒"
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
      "confirmed": "あなたのアカウントは確認できました。現在サイインしています。",
      "link": "確認手順を受け取っていませんか？",
      "send_instructions": "数分であなたのアカウントを確認する手順がメールで届きます。",
      "send_paranoid_instructions": "もしあなたのアカウントが存在していれば、数分後にあなたのアカウントを確認するメールが届くでしょう"
    },
    "destroy": {
      "confirm": "本当によろしいですか？",
      "headline": "アカウントを削除",
      "link": "今すぐ削除"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "現在のパスワード <i>(変更確認のために必要です)</i>  ",
          "email": "Eメール",
          "password": "パスワード <i>(変更しない場合は空白)</i> ",
          "password_confirmation": "パスワードをもう一度入力"
        },
        "submit": "変更を保存"
      },
      "headline": "アカウント管理"
    },
    "failure": {
      "already_authenticated": "あなたはサインイン済です。",
      "inactive": "あなたのアカウントはまだ有効化されていません。",
      "invalid": "メールアドレスかパスワードが違います。",
      "invalid_token": "認証トークンが違います。",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "あなたのアカウントはロックされました。",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "セッションの有効期限が切れています、サイインして続けてください。",
      "unauthenticated": "続けるにはログインか登録が必要です。",
      "unconfirmed": "続ける前にアカウントを確認してください。"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "確認手順"
      },
      "reset_password_instructions": {
        "subject": "パスワードリセット手順"
      },
      "unlock_instructions": {
        "subject": "ロック解除手順"
      }
    },
    "mandatory": "* 必須項目",
    "omniauth_callbacks": {
      "failure": "%{kind} での認証に失敗。エラー: \"%{reason}\"。",
      "permission_missing": "あなたは必要な許可を承認していません",
      "success": "%{kind} でログインしました"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Eメール"
        },
        "submit": "パスワードをリセット"
      },
      "headline": "パスワードを忘れた？"
    },
    "password_reset": {
      "email": {
        "comment": "あなたがパスワード変更を要求した記憶が無い場合は、このメールは無視してください<br/>あなたのパスワードはこのリンクをクリックしなければ変更されません。",
        "headline": "ようこそ %{email} さん",
        "link": "パスワードを変更",
        "text": "誰かがあなたのパスワード変更を要求しました。次のリンクをクリックして変更できます。"
      },
      "form": {
        "labels": {
          "password": "新しいパスワード",
          "password_confirmation": "パスワード再入力"
        },
        "submit": "パスワードをリセット"
      },
      "headline": "パスワードをリセット"
    },
    "passwords": {
      "link": "パスワードを忘れた？",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "数分でパスワードのリセット手順が書かれたメールが届きます。",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "あなたのパスワードは変更されました。現在サイインしています。",
      "updated_not_active": "パスワードが変更されました"
    },
    "registrations": {
      "destroyed": "さようなら！あなたのアカウントはキャンセルされました。またお会いできる日を楽しみにしています。",
      "inactive_signed_up": "登録に成功しましたが、%{reason} のためにログインできません。",
      "link": "サインアップ",
      "reasons": {
        "inactive": "無効",
        "locked": "ロック済",
        "unconfirmed": "未確認"
      },
      "signed_up": "サインアップが完了しました。有効化されればあなたのメールアドレス宛てに確認メールが送信されます。",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "あなたのアカウントは更新されました。"
    },
    "sessions": {
      "inactive": "あなたのアカウントはまだ有効化されていません。",
      "invalid": "Eメールまたはパスワードが違います。",
      "invalid_token": "不正な認証トークン。",
      "link": "サインイン",
      "locked": "あなたのアカウントはロックされました。",
      "new": {
        "no_osm_account": "OpenStreetMap のアカウントを持っていませんか？",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "あなたのサポートに感謝します！",
        "sign_in_with": " %{kind} でログイン",
        "sign_up_with_osm": "今すぐ登録。",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "サイインインしました。",
      "signed_out": "サインアウトしました。",
      "timeout": "セッション有効期限切れです。もう一度サイインしてから続けてください。",
      "unauthenticated": "サイインインまたはサインアップして続けてください。",
      "unconfirmed": "アカウントを確認してから続けてください。"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Eメール",
          "password": "パスワード",
          "remember_me": "ログインを続けますか？"
        },
        "submit": "ログイン"
      },
      "headline": "ログイン"
    },
    "sign_out": {
      "headline": "ログアウト"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "自分のアカウントを確認",
        "please_confirm": "下記リンクからあなたのアカウントを確認できます：",
        "welcome": "ようこそ %{email} さん！"
      },
      "form": {
        "labels": {
          "email": "Eメール",
          "password": "パスワード",
          "password_confirmation": "パスワード再入力",
          "wants_newsletter": "はい、wheelmapの最新情報を送ってください。（ただし月１回）"
        },
        "submit": "登録"
      },
      "headline": "登録"
    },
    "unlocks": {
      "link": "アンロック手順が届きませんでしたか？",
      "send_instructions": "数分でアンロック手順を書いたメールが届きます。",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "アカウントはアンロックされました。あなたは現在サイインしています。"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "承認をしてください",
      "already_confirmed": "は既に確認済みです",
      "blank": "値を入力してください",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "確認が一致しません",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "値を入力してください",
      "equal_to": "正確に%{count} でなければなりません",
      "even": "数値を入力してください",
      "exclusion": "使用されていません",
      "expired": "有効期限が切れています、新しくリクエストしてください",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "%{count}より大きくなければなりません",
      "greater_than_or_equal_to": "%{count}以上でなければなりません",
      "inclusion": "値が正しくありません",
      "invalid": "正しくありません",
      "less_than": "%{count} より小さくなければなりません",
      "less_than_or_equal_to": "%{count}以下でなければなりません",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "は数字ではありません",
      "not_an_integer": "整数でなければなりません",
      "not_found": "は見つかりませんでした",
      "not_locked": "ロックされませんでした",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{resource} の保存時に %{count} 個のエラーが発生しました:"
      },
      "odd": "奇数を入力してください",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "既に取得されています",
      "too_long": "が長すぎます(%{count} 文字より多すぎてはいけません)",
      "too_short": "が短かすぎます(%{count} 文字より少なすぎてはいけません)",
      "wrong_length": "長さが間違っています（正確に%{count}文字にしてください）"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "このURLは無効です"
        }
      }
    },
    "template": {
      "body": "次の項目で問題がありました：",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} 個のエラーが発生したため %{model} を保存できません"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "あなたが設定したマーキングはいつでも変更できます。正しいマーキングを選んで\"Save\"を押せば完了です！",
      "1": "ユーザとしてログインを行うと、場所についてのすべての情報に対して追加や編集ができるようになります。\"Edit\"を押して、欄の中に表示されている情報の追加や修正を行ってください。",
      "2": "コメント部分には、より詳細な情報を書くことができます(例: \"持ち運び型ランプあり\") \"Edit\"を押した後、\"Add comment\"を押してください。"
    },
    "headline": "事実と異なる情報がありますか？",
    "questions": {
      "0": "マーキングが間違っています。",
      "1": "詳細情報に間違いが含まれています。",
      "2": "この場所をより詳しく知っています。"
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} が作成されました"
      },
      "destroy": {
        "alert": "%{resource_name} は削除できませんでした",
        "notice": "%{resource_name} は削除されました"
      },
      "update": {
        "notice": "%{resource_name} は更新されました"
      }
    },
    "photos": {
      "destroy": {
        "notice": "画像は削除されました。"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "車椅子可",
    "show_limited_accessible_places": "部分的に車椅子でのアクセス可能です",
    "show_places_without_status": "不明なステータス",
    "show_unaccessible_places": "車椅子利用不可"
  },
  "formtastic": {
    "cancel": "中止",
    "create": "%{model}を作成",
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "地図上のマーカーを正しい位置に移動",
      "osm_username": "まだメンバーではありませんか？<a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">今すぐOpenstreetmap のアカウントを作成</a> ",
      "password": "(変更しない場合は空白のまま)",
      "phone": "例：+49 30 12345678",
      "website": "例: http://www.example.com"
    },
    "labels": {
      "category": "カテゴリ:",
      "centralkey": "中央キー：",
      "city": "都市:",
      "create": "場所を作成する",
      "email": "Eメール",
      "finish": "終了",
      "housenumber": "番地:",
      "lat": "緯度",
      "lon": "経度",
      "name": "名前:",
      "osm_password": "OpenStreetMapのパスワード",
      "osm_username": "OpenStreetMapのユーザー名",
      "password": "パスワード",
      "password_confirmation": "パスワード再入力",
      "phone": "電話:",
      "postcode": "郵便番号:",
      "privacy_policy": "データプライバシー同意書の1節と2節に同意します。",
      "reset": "リセット",
      "save": "保存",
      "street": "住所",
      "terms": "利用条件に同意します。",
      "type": "タイプ:",
      "website": "ウェブサイト",
      "wheelchair": "車椅子のアクセシビリティは？",
      "wheelchair_description": "アクセシビリティについてのコメント:",
      "wheelchair_toilet": "トイレへの車椅子アクセシビリティ:"
    },
    "no": "いいえ",
    "required": "必須",
    "reset": "リセット",
    "submit": "送信",
    "titles": {
      "basic": "基本データ",
      "optional": "詳細情報 <span class=\"addition\">(全ての項目はオプションです)</span> "
    },
    "update": "%{model}を更新",
    "yes": "はい"
  },
  "global": {
    "form_validation_error": "下記に挙げられたエラーに注意してください。"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.orgは車椅子でアクセス可能な場所を探したり入力したりできるオンラインマップです。公共施設、バー、レストランや映画館、スーパーマーケットについて利用可否をマークしてぜひご参加ください",
      "homepage": "ホームページ",
      "keywords": "車椅子で行ける場所を見つけよう検索マーク",
      "search": "検索",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Wheelmap について",
      "blog": "ブログ",
      "choose_language": "言語を選択",
      "contact": "連絡先",
      "feedback": "ご意見",
      "home": "開始",
      "how_to_add_a_place": "場所の追加方法は？",
      "imprint": "クレジット",
      "logged_in_as": "次のアカウントでログイン:",
      "login": "ログイン",
      "logout": "ログアウト",
      "map": "地図",
      "newsletter": "ニュースレター",
      "press": "プレス",
      "profile": "プロフィール",
      "projects": "プロジェクト",
      "suggestions": "提案",
      "tolk": "翻訳",
      "what_is_barrier_free": "\"車椅子で行ける(アクセシブル)\"とは？",
      "what_is_wheelmap": "Wheelmap とは？"
    },
    "searchbar": {
      "add_place": "別の場所を追加",
      "find": "探す",
      "placeholder": "場所を探す",
      "title_add_place": "今すぐこの位置に新しい場所を追加！"
    },
    "tagline": "Wheelmap ロゴ",
    "title": "車椅子で行ける場所を見つけよう",
    "toolbar": {
      "categories": "カテゴリ"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "<b>%{total}</b>中の%{entry_name}を表示しています <b>%{first} - %{last}</b>"
      },
      "one_page": {
        "display_entries": {
          "one": "<b>%{count}</b>レコード表示中です %{entry_name}",
          "other": "<b>%{count}</b>レコード表示中です %{entry_name}",
          "zero": "レコードが見つかりませんでした %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "選んでください"
    },
    "submit": {
      "create": "%{model} を作成",
      "submit": "%{model} を保存",
      "update": "%{model} を更新"
    }
  },
  "home": {
    "index": {
      "embed_link": "Wheelmap.orgで見る",
      "filter": {
        "category": "カテゴリ:",
        "deselect_all": "すべての選択を解除",
        "select_all": "すべてを選択",
        "wheelchair": "車椅子で行けますか？"
      },
      "ie": {
        "action": {
          "ignore": "無視",
          "upgrade": "ブラウザを更新"
        },
        "warning": {
          "headline": "ごめんなさい！",
          "message": "Internet Explorerをお使いのようですね。Wheelmapを正しく使うには標準的な動作をするブラウザが必要です。Firefox, Chrome, Safari または Opera をお使いください。"
        }
      },
      "link": {
        "node": {
          "create": "新しい場所を追加"
        }
      },
      "overlay": {
        "button": "OK、さあ始めよう！",
        "categories": "場所をカテゴリでフィルター",
        "filter": "車椅子のアクセシビリティで場所をフィルター",
        "headline": "Wheelmao.org で車椅子で行ける場所を探してマークしよう - 世界のどこでも無料。とても簡単です。",
        "lookup": "指定した場所を探す",
        "secondary_headline": "公共の場所での車椅子のアクセシビリティをマークする自分たちの交通信号システム"
      },
      "popup": {
        "form": {
          "limited": "部分的に車椅子でのアクセス可能です",
          "no": "車椅子利用不可",
          "save": "保存",
          "unknown": "不明なステータス",
          "yes": "車椅子通行可"
        },
        "help": "車椅子で行けますか？ (ヘルプ)",
        "more": "詳細 ..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "やり方は？",
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
          "headline": "%{city} 内の全 %{type} の不明な車椅子の状態 (%{count}件)"
        },
        "yes": {
          "headline": "%{city} 内の通行可能な %{type}  (%{count}件)"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.deによるプロジェクト"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "カテゴリーを選択してください"
    },
    "node": {
      "info_edit_position": "上記のように、Wheekmap上で位置が表示されるでしょう。もし、マーカーが違った場所にあれば、OpenStreetMap上で <a href=\"%{url}\">を変更することができます</a>",
      "mail": {
        "body": "(英語かドイツ語でお知らせください)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap]  %{headline} で問題が生じています"
      }
    },
    "node_type": {
      "prompt": "タイプを選択してください"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "電話:",
      "website": "ウェブサイト"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "おっと、入力内容が正しくないか不完全です。",
        "successfull": "ありがとうございます、送信内容は保存されました。しばらく経ってからオンラインに反映されます。"
      }
    },
    "edit": {
      "header": {
        "title": "場所を編集: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; キャンセル"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "申し訳ありません、認証に失敗しました",
      "not_available": "申し訳ありません、このページは一時的に利用できません。",
      "not_existent": "申し訳ありません、この場所は既に利用できなくなっています。",
      "not_found": "申し訳ありません、ページが見つかりません。",
      "param_missing": "検索する言葉を入れてください。"
    },
    "flash": {
      "authorize_wheelmap": "データを変更するにはOpenStreetMapのアカウントが必要です。"
    },
    "new": {
      "form": {
        "legend": "場所の位置座標",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "住所",
            "title": ""
          },
          "contact": {
            "name": "連絡先",
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
        "title": "新しい場所 | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; キャンセル"
      }
    },
    "node": {
      "link": {
        "claim": "あなたはここで働いていますか？",
        "edit_node": "場所を編集",
        "report_bug": "問題を報告"
      }
    },
    "node_data": {
      "address": "住所:",
      "contact_details": "詳しい連絡先:"
    },
    "node_edit": {
      "details": "詳細",
      "edit": "編集"
    },
    "node_map": {
      "map": "地図:"
    },
    "node_note": {
      "comment": "コメント:"
    },
    "node_photos": {
      "add": "追加",
      "photos_of_this_place": "この場所の写真:",
      "upload": "アップロード"
    },
    "node_similar": {
      "similar": "ここに似た場所: %{name}"
    },
    "node_status": {
      "accessible_toilet": "トイレへの車椅子アクセシビリティ:",
      "premium": "%{name} によればこの場所は",
      "wheelchair_accessibility": "車椅子のアクセシビリティ:"
    },
    "node_streetview": {
      "streetview": "ストリートビュー:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Wheelmap.orgのなかで車椅子のアクセシビリティ情報が登録されているかどうかを確認してみてください。もしまだ情報が少ない場合、より詳しい情報や写真を追加してみましょう。",
          "title": "Wheelmap.orgでの登録名称: %{name}"
        },
        "title": "場所: %{node} | wheelmap.org "
      },
      "link": {
        "back": "戻る",
        "edit_node": "場所を編集",
        "large_map": "拡大",
        "listing": "%{city} 内のtyp '%{type}' の全ての場所",
        "report_bug": "Report a problem",
        "upload": "画像をアップロード"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Eメール",
        "facebook": "Facebook",
        "text": "この場所をWheelmap.orgで見つけました！ %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "おっと、入力内容が正しくないか不完全です。",
        "successfull": "ありがとうございます、送信内容は保存されました。しばらく経ってからオンラインに反映されます。"
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\" のステータスは \"%{status} \" に変更されました。しばらくたったらオンラインで表示されます。"
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
      "delimiter": ", ",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "10億",
          "million": "百万",
          "quadrillion": "千兆",
          "thousand": "千",
          "trillion": "1 兆",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 1,
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
        "headline": "あなたのアカウントをOpenStreetMapアカウントと連携させるとwheelmap.orgで場所を作成したり変更したりすることができます。"
      }
    },
    "callback": {
      "notice": "あなたのwheelmapアカウントは現在OpenStreetMapアカウント%{user}と連携しています。"
    }
  },
  "or": "or",
  "place": {
    "one": "%{count} 件の場所",
    "other": "%{count} 個の場所"
  },
  "poi": {
    "category": {
      "accommodation": "宿泊施設",
      "education": "教育施設",
      "food": "食事",
      "government": "公共施設",
      "health": "健康",
      "leisure": "娯楽",
      "misc": "その他",
      "money_post": "銀行 & 郵便局",
      "public_transfer": "公共輸送",
      "shopping": "買い物",
      "sport": "スポーツ",
      "tourism": "観光",
      "unknown": "不明"
    },
    "name": {
      "accommodation": {
        "beach_resort": "ビーチホテル",
        "bed_and_breakfast": "簡易宿泊所",
        "camp_site": "キャンプ場",
        "caravan_site": "カーキャンプ場",
        "chalet": "山小屋",
        "dormitory": "寄宿舎",
        "guest_house": "ゲストハウス",
        "hostel": "ホステル",
        "hotel": "ホテル",
        "motel": "モーテル"
      },
      "education": {
        "college": "短大",
        "driving_school": "自動車学校",
        "kindergarten": "幼稚園",
        "library": "図書館",
        "museum": "博物館",
        "school": "学校",
        "university": "大学"
      },
      "food": {
        "bar": "バー",
        "biergarten": "ビアガーデン",
        "cafe": "カフェ",
        "drinking_water": "水道",
        "fast_food": "ファストフード",
        "ice_cream": "アイスクリームパーラー",
        "pub": "パブ",
        "restaurant": "レストラン"
      },
      "government": {
        "courthouse": "裁判所",
        "embassy": "大使館",
        "government": "政府機関",
        "police": "警察",
        "public_building": "公共施設",
        "townhall": "役場"
      },
      "health": {
        "dentist": "歯科医院",
        "doctors": "診療所",
        "hearing_aids": "補聴器取扱店",
        "hospital": "病院",
        "medical_supply": "医療用品",
        "pharmacy": "薬局",
        "social_facility": "社会福祉施設",
        "veterinary": "動物病院"
      },
      "leisure": {
        "arena": "アリーナ",
        "brothel": "風俗店",
        "casino": "カジノ",
        "cinema": "映画館",
        "community_centre": "コミュニティセンター",
        "gallery": "ギャラリー",
        "nightclub": "ナイトクラブ",
        "playground": "子どもの遊び場",
        "sauna": "サウナ",
        "stripclub": "ストリップクラブ",
        "theatre": "劇場",
        "zoo": "動物園"
      },
      "misc": {
        "company": "会社(オフィス)",
        "doctors": "医者",
        "estate_agent": "不動産屋",
        "hospital": "病院",
        "insurance": "保険代理店",
        "lawyer": "法律家",
        "pharmacy": "薬局",
        "place_of_worship": "寺社礼拝所",
        "toilets": "トイレ",
        "veterinary": "獣医"
      },
      "money_post": {
        "atm": "ATM",
        "bank": "銀行",
        "bureau_de_change": "両替所",
        "post_box": "郵便ポスト",
        "post_office": "郵便局"
      },
      "public_transfer": {
        "aerodrome": "空港",
        "bicycle_parking": "駐輪場",
        "bicycle_rental": "レンタサイクル",
        "boatyard": "ボート場",
        "bus_station": "バスターミナル",
        "bus_stop": "バス停",
        "cable_car": "ケーブルカー",
        "car_rental": "レンタカー",
        "car_sharing": "カーシェアリング",
        "chair_lift": "チェアリフト",
        "ferry": "フェリー",
        "ferry_terminal": "フェリーターミナル",
        "fuel": "ガソリンスタンド",
        "halt": "臨時駅",
        "light_rail": "ライトレール",
        "parking": "駐車場",
        "parking_aisle": "駐車場通路",
        "platform": "プラットフォーム",
        "station": "地下鉄",
        "subway_entrance": "地下鉄入口",
        "terminal": "空港ターミナル",
        "tram_stop": "電停"
      },
      "shopping": {
        "alcohol": "酒屋",
        "bakery": "パン屋",
        "beauty": "ビューティサロン",
        "beverages": "飲み物屋",
        "bicycle": "自転車屋",
        "books": "書店",
        "butcher": "肉屋",
        "car_repair": "自動車修理店",
        "car_shop": "自動車販売店",
        "chemist": "薬局",
        "clothes": "衣料品店",
        "computer": "パソコン店",
        "confectionery": "キャンディショップ",
        "convenience": "コンビニ",
        "deli": "惣菜店",
        "department_store": "デパート",
        "doityourself": "ＤＩＹ店",
        "dry_cleaning": "クリーニング店",
        "electronics": "電器店",
        "fabric": "布地店",
        "farm_shop": "野菜直売所",
        "florist": "花屋",
        "furniture": "家具屋",
        "garden_centre": "ガーデニング店",
        "gift": "ギフトショップ",
        "hairdresser": "美容院",
        "hardware": "金物屋",
        "jewelry": "宝石店",
        "kiosk": "キオスク",
        "laundry": "コインランドリー",
        "mall": "ショッピングセンター",
        "optician": "めがね屋",
        "organic": "有機食品店",
        "outdoor": "アウトドアショップ",
        "pet": "ペットショップ",
        "photo": "写真",
        "second_hand": "リサイクル店",
        "shoes": "靴屋",
        "sports": "スポーツ",
        "stationery": "文房具店",
        "supermarket": "スーパーマーケット",
        "toys": "玩具店",
        "travel_agency": "旅行代理店",
        "video": "ビデオレンタル店"
      },
      "sport": {
        "pitch": "運動場",
        "sports_centre": "スポーツセンター",
        "stadium": "スタジアム",
        "swimming": "水泳",
        "swimming_pool": "スイミングプール"
      },
      "tourism": {
        "archaeological_site": "遺跡",
        "arts_centre": "アートセンター",
        "artwork": "美術品",
        "attraction": "アトラクション",
        "battlefield": "古戦場",
        "beach": "海岸",
        "beacon": "灯台",
        "castle": "城",
        "cave_entrance": "洞窟",
        "information": "観光案内所",
        "memorial": "記念碑",
        "theme_park": "テーマパーク",
        "tower": "塔",
        "viewpoint": "展望所"
      },
      "unknown": {
        "unknown": "不明"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "状態: 接続済",
          "grant": "今すぐ接続",
          "not_connected": "状態: 未接続",
          "revoke": "切断"
        }
      },
      "headline": "プロフィールを編集"
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
        "headline": "\"%{query}\" という名前の場所はありませんでした。",
        "hint": {
          "example": "<strong>例:</strong> 英国, ロンドン",
          "info": "このサイトの検索機能は、場所の名称や住所情報を元に行っています。そのため、検索の際には対象の場所の名称、あるいは住所(例: ストリートの名前や市町村の名前)を入力して検索をしてください。レストランや映画館、といった場所の種類を元にした検索は行なうことができませんのでご注意ください。",
          "work_in_progress": "より簡単に、より直感的に場所を検索できるよう、私たちはがんばります。"
        },
        "try_this": {
          "address": "より詳細な<strong>住所情報</strong> を登録してみましょう。",
          "intro": "もしかして:",
          "spell_check": "<strong>誤字脱字</strong>が無いか、確認してください。"
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} 結果:"
        }
      },
      "search": {
        "for": "\"%{q}\" を検索中",
        "not_found": "場所が見つかりません！"
      }
    },
    "timeout": {
      "headline": "こちらの間違いです。すみません。",
      "info": "検索機能が一時的に利用できない状態です。",
      "repeat_search": "検索を再実行"
    }
  },
  "splash": {
    "countline": "%{count} 件の場所が既にマークされています",
    "headline": "誰でも車椅子で行ける場所を追加できます！",
    "start": "開始",
    "step1": "知っている場所をクリック",
    "step2": "マークして保存をクリック",
    "step3": "そうです！登録不要です。",
    "what_is_wheelmap": "Wheelmap とは？"
  },
  "statistics": "統計",
  "support": {
    "array": {
      "last_word_connector": ", and",
      "sentence_connector": "かつ",
      "skip_last_comma": "true",
      "two_words_connector": "and ",
      "words_connector": ","
    },
    "select": {
      "prompt": "選んでください"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z ",
      "long": "%B %d, %Y %H:%M ",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "車椅子で利用不可のトイレ",
    "unknown": "車椅子での利用可能か不明のトイレ",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "車椅子で利用可能のトイレ"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "あなたのアカウントは有効化されました！"
      },
      "error": {
        "notice": "Eメールとパスワードが一致しません。"
      },
      "notice": "入っています！"
    },
    "destroy": {
      "notice": "さよなら、またお越しください！"
    },
    "new": {
      "email": "Eメールアドレス",
      "login": "ログイン",
      "login_with_twitter": "Twitterでログイン",
      "password": "パスワード",
      "remember_me": "ログインを保持する"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "あなたと連絡を取るにはどうしたら良いですか？この情報はあとからあなたのプロファイル欄で変更できます。"
      }
    },
    "edit": {
      "headline": {
        "your_images": "あなたのアップロード画像"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "あなたのアカウント情報"
        },
        "title": "プロフィール"
      },
      "newsletter": {
        "label": "はい、Wheelmapに関する更新を維持します。",
        "text": "Wheelmapからの最新ニュースレターをチェックしてください。多くても月に一号程度の発行をしますので、心配しなくても大丈夫です。",
        "title": "ニュースレター"
      },
      "photos": {
        "empty": "まだ写真をアップロードしていません",
        "title": "写真"
      },
      "show": {
        "greeting": {
          "anonymously": "こんにちは",
          "personalized": "こんにちわ！ %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "%{count} 枚の写真をアップロードしました"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "%{count} 個の場所を追加しました"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "%{count} 個の場所を編集しました"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "%{count} 個の場所"
          },
          "text": "持っている"
        },
        "text_html": "",
        "title": "概要"
      },
      "widget": {
        "categories": "カテゴリ分類をする",
        "center": "地図領域",
        "empty_center": "地図の中心を探す",
        "empty_provider": "提供者を選択してください",
        "height": "高さ",
        "legends": {
          "embed": "埋め込みコード",
          "embed_explanation": "",
          "general": "あなたのウェブサイトやブログ用のWheelmapウイジェットを作成する",
          "preview": "プレビュー",
          "settings": "設定"
        },
        "providers": "提供者",
        "title": "ウイジェット",
        "width": "幅"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; 最初",
      "last": "最後 &raquo;",
      "next": "次 &rsaquo;",
      "previous": "&lsaquo; 前",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "部分的に車椅子でのアクセス可能です",
    "no": "車椅子利用不可",
    "unknown": "不明なステータス",
    "yes": "車椅子通行可"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "プロジェクト運営：",
      "based_on": "ベース地図：",
      "become_a_supporter": "サポーターになる",
      "main_supporter": "主なサポーター"
    },
    "itunes": {
      "alt": "AppStoreロゴ",
      "title": "今すぐiPhone Appをダウンロード！"
    },
    "logo": {
      "alt": "Wheelmap ロゴ - 車椅子で行ける場所を見つけよう",
      "title": "Wheelmap - 車椅子で行ける場所を見つけよう"
    },
    "what_is": {
      "fully_accessible": "入口には段差が無い、全ての部屋に段差が無い、車椅子でトイレに行ける",
      "limited_accessible": "入口に段差がある(最大でも高さ7cmまで)、たいていの部屋には段差が無い、車椅子でトイレに行けない",
      "not_accessible": "入口の段差が高いか複数あり、部屋に入れません",
      "unknown_accessible": "場所に印をつけることで助けてください。"
    }
  },
  "will_paginate": {
    "next_label": "次へ &#8594",
    "page_entries_info": {
      "multi_page": "合計 %{count} 件中、%{from} - %{to} の%{model} を表示中",
      "multi_page_html": "%{model} 表示中<b> 全<b>%{count}</b> 件中 %{from}&nbsp;-&nbsp;%{to}</b> ",
      "single_page": {
        "one": "1 %{model} を表示中",
        "other": "全ての %{count} %{model} を表示中",
        "zero": "%{model} がありません"
      },
      "single_page_html": {
        "one": "<b>1</b> %{model} を表示中",
        "other": "表示中 <b>全&nbsp;%{count}</b> %{model}",
        "zero": "%{model} はありません"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; 前へ"
  }
});
