I18n.translations || (I18n.translations = {});
I18n.translations["ko"] = I18n.extend((I18n.translations["ko"] || {}), {
  "actions": {
    "cancel": "취소",
    "next": "Next",
    "save": "저장",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "어떤",
    "batch_actions": {
      "action_label": "%{title} 선택됨",
      "button_label": "배치 작업",
      "default_confirmation": "확실하십니까?",
      "delete_confirmation": "%{plural_model}을/를 삭제하시겠습니까?",
      "labels": {
        "destroy": "삭제"
      },
      "link": "만들기",
      "selection_toggle_explanation": "(선택 항목 바꾸기)",
      "succesfully_destroyed": {
        "one": "성공적으로 1개 %{model}을/를 삭제하였습니다",
        "other": "성공적으로 %{count}개의 %{plural_model}을/를 삭제하였습니다"
      }
    },
    "blank_slate": {
      "content": "아직 %{resource_name} 이/가 없습니다.",
      "link": "추가하기"
    },
    "cancel": "취소",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "댓글 추가",
      "author": "글쓴이",
      "author_missing": "Anonymous",
      "author_type": "글쓴이 종류",
      "body": "내용",
      "created_at": "작성시간",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "댓글이 저장되지 않았습니다. 내용을 입력해주세요."
      },
      "no_comments_yet": "아직 댓글이 없습니다.",
      "resource": "첨부파일",
      "resource_type": "첨부파일 형태",
      "title": "제목",
      "title_content": "댓글 (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "대시보드",
    "dashboard_welcome": {
      "call_to_action": "대시보드에 섹션을 추가하시려면 'app/admin/dashboard.rb' 파일을 수정하십시오.",
      "welcome": "ActiveAdmin에 오신 것을 환영합니다. 기본 대시보드 페이지 입니다."
    },
    "delete": "삭제",
    "delete_confirmation": "정말로 삭제 하시겠습니까?",
    "delete_model": "%{model} 삭제",
    "details": "%{model} 상세보기",
    "devise": {
      "change_password": {
        "submit": "내 비밀번호 변경",
        "title": "비밀번호 변경"
      },
      "email": {
        "title": "이메일"
      },
      "links": {
        "forgot_your_password": "비밀번호를 잊으셨나요?",
        "resend_confirmation_instructions": "계정 승인 요청하기",
        "resend_unlock_instructions": "계정 잠금 해제하기",
        "sign_in": "로그인",
        "sign_in_with_omniauth_provider": "%{provider} 으로 로그인",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "내 계정 정보 기억",
        "submit": "로그인",
        "title": "로그인"
      },
      "password": {
        "title": "비밀번호"
      },
      "resend_confirmation_instructions": {
        "submit": "계정 승인 요청하기",
        "title": "계정 승인 요청하기"
      },
      "reset_password": {
        "submit": "비밀번호 재설정",
        "title": "비밀번호를 잊으셨나요?"
      },
      "sign_up": {
        "submit": "가입하기",
        "title": "가입하기"
      },
      "subdomain": {
        "title": "서브도메인"
      },
      "unlock": {
        "submit": "계정 잠금 해제하기",
        "title": "계정 잠금 해제하기"
      },
      "username": {
        "title": "아이디"
      }
    },
    "download": "다운로드:",
    "dropdown_actions": {
      "button_label": "작업"
    },
    "edit": "수정",
    "edit_model": "%{model} 수정",
    "empty": "내용이 없습니다",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "필터 초기화",
        "filter": "필터"
      },
      "predicates": {
        "contains": "포함하는 문구",
        "ends_with": "종료하는 문구",
        "equals": "일치하는 문구",
        "greater_than": "초과",
        "less_than": "미만",
        "starts_with": "시작하는 문구"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "삭제",
    "has_many_new": "%{model} 추가",
    "has_many_remove": "삭제",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "로그아웃",
    "main_content": "내용을 보시려면 %{model}#main_content의 코드를 먼저 구현해 주시기 바랍니다.",
    "new_model": "%{model} 추가",
    "next": "다음",
    "pagination": {
      "empty": "%{model} 이/가 없습니다.",
      "entry": {
        "one": "항목",
        "other": "항목들"
      },
      "multiple": "<b>%{total}</b>개 중 <b>%{from}&nbsp;-&nbsp;%{to}</b> %{model} 표시중",
      "multiple_without_total": "<b>%{from}&nbsp;-&nbsp;%{to}</b> %{model} 표시중",
      "one": "<b>1</b>개 %{model} 표시중",
      "one_page": "<b>%{n}</b>개 %{model} 표시중"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "이전",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "적용된 필터:",
      "headline": "검색 범위:",
      "no_current_filters": "현재 적용된 필터가 없습니다"
    },
    "sidebars": {
      "filters": "필터 목록",
      "search_status": "검색 상태"
    },
    "status_tag": {
      "no": "없음",
      "yes": "있음"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "보기"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "주소",
        "address_city": "시/도",
        "address_housenumber": "House number",
        "address_postcode": "Postcode",
        "address_street": "도로명",
        "name": "장소명",
        "note": "Note",
        "phone": "전화번호",
        "type": "유형",
        "website": "홈페이지"
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
        "format": "%{attribute} %{message} "
      },
      "messages": {
        "accepted": "승인해주세요",
        "blank": "빈칸을 채워주세요",
        "confirmation": "입력한 내용이 일치하지 않습니다.",
        "empty": "빈칸을 채워주세요",
        "equal_to": "%{count}과 같아야 합니다.",
        "even": "짝수여야 합니다.",
        "exclusion": "은(는) 예약되어 있습니다",
        "greater_than": "%{count} 보다 커야 합니다.",
        "greater_than_or_equal_to": "%{count} 과 같거나 그 이상이어야 합니다.",
        "inclusion": "은(는) 목록에 없습니다",
        "invalid": "은(는) 유효하지 않습니다",
        "less_than": "%{count} 보다 작아야 합니다.",
        "less_than_or_equal_to": "%{count} 과 같거나 그 이하여야 합니다.",
        "not_a_number": "은(는) 숫자가 아닙니다",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "홀수여야 합니다",
        "record_invalid": "인증에 실패했습니다. %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "은(는) 이미 사용되고 있습니다.",
        "too_long": "은(는) 너무 깁니다 (최대 %{count} 글자)",
        "too_short": "은(는) 너무 짧습니다 (최대 %{count} 글자)",
        "wrong_length": "은(는) 길이가 맞지 않습니다 (%{count} 글자여야 합니다)"
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
          "email": "메일주소",
          "password": "비밀번호",
          "remember_me": "로그인 상태유지"
        }
      },
      "template": {
        "body": "다음 항목에 문제가 있습니다 :",
        "header": {
          "one": "%{model} 저장 중 1개의 에러가 발생했습니다",
          "other": "%{model} 저장 중 %{count}개의 에러가 발생했습니다"
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
      "notice": "당신은 이미 로그인 되어 있습니다..."
    },
    "require_user": {
      "notice": "이 페이지를 보려면 로그인을 해야 합니다"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "장소 수정"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "닫기",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "일",
      "월",
      "화",
      "수",
      "목",
      "금",
      "토"
    ],
    "abbr_month_names": [
      null,
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    "day_names": [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ],
    "formats": {
      "default": "%Y-%m-%d ",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
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
        "one": "약 1시간",
        "other": "약 %{count} 시간"
      },
      "about_x_months": {
        "one": "약 1개월",
        "other": "약 %{count} 개월"
      },
      "about_x_years": {
        "one": "약 1년",
        "other": "약 %{count}년"
      },
      "almost_x_years": {
        "one": "거의 1년",
        "other": "거의 %{count}년"
      },
      "half_a_minute": "30초",
      "less_than_x_minutes": {
        "one": "1분 미만",
        "other": "%{count}초 미만"
      },
      "less_than_x_seconds": {
        "one": "1초 미만",
        "other": "%{count}분 미만"
      },
      "over_x_years": {
        "one": "1년 이상",
        "other": "%{count}년 이상"
      },
      "x_days": {
        "one": "1일",
        "other": "%{count}일"
      },
      "x_minutes": {
        "one": "1분",
        "other": "%{count}분"
      },
      "x_months": {
        "one": "1월",
        "other": "%{count}월"
      },
      "x_seconds": {
        "one": "1초",
        "other": "%{count}초"
      }
    },
    "prompts": {
      "day": "일",
      "hour": "시",
      "minute": "분",
      "month": "월",
      "second": "초",
      "year": "년"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "당신의 계정이 성공적으로 확인되었습니다. 이제 로그인 되었습니다",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "당신은 몇 분 내에 계정확인에 관한 인증메일을 받게 될 것입니다",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "계속 진행하시겠습니까?",
      "headline": "Delete account",
      "link": "지금 삭제"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "현재 비밀번호 <i>(비밀번호 변경을 확인하기 위해 필요합니다)</i> ",
          "email": "이메일",
          "password": "비밀번호 <i>(만약 비밀번호 변경을 원하지 않는다면 비워두세요)</i> ",
          "password_confirmation": "비밀번호 재입력"
        },
        "submit": "변경내용 저장"
      },
      "headline": "계정정보 편집"
    },
    "failure": {
      "already_authenticated": "당신은 이미 가입되어 있습니다.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "잘못된 이메일 또는 비밀번호 입니다",
      "invalid_token": "잘못된 인증코드 입니다",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "귀하의 계정이 잠겨 있습니다",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "진행하려면 로그인 또는 회원가입이 필요합니다",
      "unconfirmed": "진행하기 전에 당신의 계정을 확인해주시기 바랍니다"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "확인단계"
      },
      "reset_password_instructions": {
        "subject": "비밀번호 재설정 단계"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* 필수사항",
    "omniauth_callbacks": {
      "failure": "%{kind}에서 \"%{reason}\"(으)로 인해 인증할 수 없습니다",
      "permission_missing": "You did not grant the required permission.",
      "success": "%{kind} 계정인증에 성공했습니다"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "이메일"
        },
        "submit": "비밀번호 변경"
      },
      "headline": "Forgot password?"
    },
    "password_reset": {
      "email": {
        "comment": "비밀번호 변경을 요청한 적이 없다면, 이 메일은 무시하셔도 좋습니다<br/>당신의 비밀번호는 당신이 이 링크를 클릭해도 새로운 비밀번호로 변경되지 않습니다.",
        "headline": "%{email} 님 환영합니다",
        "link": "내 비밀번호 변경",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "새 비밀번호",
          "password_confirmation": "비밀번호 재입력"
        },
        "submit": "비밀번호 재설정"
      },
      "headline": "비밀번호 재설정"
    },
    "passwords": {
      "link": "비밀번호를 잊으셨나요?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "당신의 비밀번호가 성공적으로 변경되었습니다. 이제 로그인 하실 수 있습니다",
      "updated_not_active": "당신의 비밀번호가 변경되었습니다."
    },
    "registrations": {
      "destroyed": "안녕히 가세요! 당신의 계정이 성공적으로 취소되었습니다. 또 다시 뵐 수 있길 바랍니다",
      "inactive_signed_up": "당신은 성공적으로 가입되었습니다. 하지만 %{reason} 때문에 당신은 로그인 할 수 없습니다",
      "link": "회원가입",
      "reasons": {
        "inactive": "휴면상태",
        "locked": "잠김",
        "unconfirmed": "확인되지 않음"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "당신의 계정정보가 업데이트 되었습니다"
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "잘못된 이메일 또는 비밀번호 입니다",
      "invalid_token": "잘못된 인증코드 입니다",
      "link": "로그인",
      "locked": "당신의 계정이 잠겨 있습니다",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "로그인에 성공했습니다",
      "signed_out": "로그아웃에 성공했습니다",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "진행하기 전에 회원가입을 하거나 로그인을 해야 합니다",
      "unconfirmed": "진행하기 전에 당신의 계정을 확인해주시기 바랍니다"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "이메일",
          "password": "비밀번호",
          "remember_me": "로그인 상태유지"
        },
        "submit": "로그인"
      },
      "headline": "로그인"
    },
    "sign_out": {
      "headline": "로그아웃"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "내 계정 확인하기",
        "please_confirm": "다음 링크를 통해 당신의 계정을 확인할 수 있습니다 :",
        "welcome": "%{email}님 환영합니다!"
      },
      "form": {
        "labels": {
          "email": "이메일",
          "password": "비밀번호",
          "password_confirmation": "비밀번호 재입력",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "회원가입"
      },
      "headline": "회원가입"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "당신의 계정이 정상적으로 잠금해제 되었습니다. 이제 로그인 하실 수 있습니다"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message} ",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "이미 확인되었습니다. 로그인을 시도해보세요",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "내용이 일치하지 않습니다",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "반드시 %{count}이어야 합니다",
      "even": "must be an even number",
      "exclusion": "은(는) 예약되었습니다",
      "expired": "만료되었습니다. 새로운 것을 요청하세요.",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "반드시 %{count} 보다 커야 합니다",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "올바른 값이 아닙니다",
      "invalid": "확실하지 않습니다",
      "less_than": "반드시 %{count} 보다 작아야 합니다",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "숫자가 아닙니다",
      "not_an_integer": "반드시 정수여야 합니다",
      "not_found": "찾을 수 없습니다",
      "not_locked": "잠겨 있지 않습니다",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "이미 사용되고 있습니다",
      "too_long": "은(는) 너무 깁니다 (%{count} 글자 초과 안됨)",
      "too_short": "은(는) 너무 짧습니다 (%{count} 글자 미만 안됨)",
      "wrong_length": "은(는) 잘못된 길이 입니다 (%{count} 글자여야 합니다)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "다음 필드에 문제가 발생했습니다 :",
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
        "notice": "%{resource_name}이(가) 성공적으로 생성되었습니다"
      },
      "destroy": {
        "alert": "%{resource_name}이(가) 제거되지 않았습니다",
        "notice": "%{resource_name}이(가) 성공적으로 제거되었습니다"
      },
      "update": {
        "notice": "%{resource_name}이(가) 성공적으로 업데이트 되었습니다"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "네",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "휠체어 접근불가"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "지도 위의 정확한 위치로 표시 이동",
      "osm_username": "아직 회원이 아니십니까? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">지금 Openstreetmap 계정을 만드세요</a>",
      "password": "(내용변경을 원하지 않으시면, 입력창을 비워두세요)",
      "phone": "For example: +49 30 12345678",
      "website": "예제 : http://www.example.com"
    },
    "labels": {
      "category": "카테고리 :",
      "centralkey": "Central key:",
      "city": "도시 :",
      "create": "Create a place",
      "email": "이메일",
      "finish": "Finish",
      "housenumber": "No :",
      "lat": "위도",
      "lon": "경도",
      "name": "이름 :",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "비밀번호",
      "password_confirmation": "비밀번호 재입력",
      "phone": "전화번호 :",
      "postcode": "우편번호 :",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "재설정",
      "save": "저장",
      "street": "도로명 :",
      "terms": "I accept the terms of use.",
      "type": "유형 :",
      "website": "웹사이트 :",
      "wheelchair": "휠체어 접근여부?",
      "wheelchair_description": "접근성에 대한 의견 :",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "기본 데이터",
      "optional": "자세한 정보 <span class=\"addition\">(모든 필드가 선택사항 입니다)</span> "
    }
  },
  "global": {
    "form_validation_error": "아래 오류 내용들을 참조하시기 바랍니다"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "홈페이지",
      "keywords": "휠체어 접근가능 장소 표시",
      "search": "검색",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "블로그",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "피드백",
      "home": "시작",
      "how_to_add_a_place": "새로운 장소를 어떻게 추가하나요?",
      "imprint": "문의사항",
      "logged_in_as": "다음 계정으로 로그인 :",
      "login": "로그인",
      "logout": "로그아웃",
      "map": "지도",
      "newsletter": "뉴스레터",
      "press": "언론사",
      "profile": "프로필",
      "projects": "Projects",
      "suggestions": "제안",
      "what_is_barrier_free": "\"휠체어 접근가능\"은 무슨 뜻인가요?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "다른 장소 등록",
      "find": "찾기",
      "placeholder": "즉 샌프란시스코 선셋 대로 또는 베를린의 브란덴부르크문",
      "title_add_place": "지금 이 위치에 새로운 장소를 추가하세요!"
    },
    "tagline": "Wheelmap 로고",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "<b>%{total}</b>중의 %{entry_name}를(을) 표시하고 있습니다 <b>%{first} - %{last}</b>"
      },
      "one_page": {
        "display_entries": "<b>%{count}</b> 레코드 표시 중입니다 %{entry_name}"
      }
    },
    "select": {
      "prompt": "선택해주세요"
    },
    "submit": {
      "create": "%{model} 생성",
      "submit": "%{model} 저장",
      "update": "%{model} 업데이트"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "카테고리 :",
        "deselect_all": "모두 해제",
        "select_all": "모두 선택",
        "wheelchair": "휠체어 접근성? (그것이 무슨 뜻인가요?)"
      },
      "ie": {
        "action": {
          "ignore": "무시하기",
          "upgrade": "브라우저 업데이트"
        },
        "warning": {
          "headline": "죄송합니다!",
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
          "no": "휠체어 접근불가",
          "save": "업데이트",
          "unknown": "Unknown status",
          "yes": "휠체어 접근가능"
        },
        "help": "휠체어 접근성? (도움말)",
        "more": "자세히 ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "접근정보 등록은 어떻게?",
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
          "headline": "%{city}에 휠체어 접근가능성을 알 수 없는 모든 %{type} (%{count})"
        },
        "yes": {
          "headline": "%{city}에서 휠체어 접근이 가능한 %{type}은 %{count}개"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Sozialhelden.de에 의한 프로젝트"
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
      "phone": "전화 :",
      "website": "웹사이트 :"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "입력한 내용이 잘못되었거나 완전하지 않습니다.",
        "successfull": "감사합니다. 등록하신 내용이 성공적으로 저장되어 곧 온라인에 반영될 예정입니다"
      }
    },
    "edit": {
      "header": {
        "title": "장소 편집 : %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; 취소"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "죄송합니다, 인증에 실패했습니다",
      "not_available": "죄송합니다, 이 페이지는 일시적으로 이용할 수 없습니다",
      "not_existent": "죄송합니다, 이 장소는 더 이상 사용할 수 없습니다",
      "not_found": "죄송합니다, 페이지를 찾을 수 없습니다",
      "param_missing": "검색어를 입력해주세요"
    },
    "flash": {
      "authorize_wheelmap": "데이터 수정을 위해서 OpenStreetMap 계정이 필요합니다"
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
            "name": "주소",
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
        "title": "새로운 장소 | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; 취소"
      }
    },
    "node": {
      "link": {
        "claim": "당신이 이곳에서 근무합니까?",
        "edit_node": "장소 수정",
        "report_bug": "오류신고"
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "자세히",
      "edit": "편집"
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
        "title": "장소 : %{node} | wheelmap.org"
      },
      "link": {
        "back": "뒤로",
        "large_map": "확대",
        "listing": "%{city}의 모든 '%{type}'",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "이메일",
        "facebook": "페이스북",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "트위터"
      },
      "show-in-osm": "OpenStreetMap 보기 "
    },
    "update": {
      "flash": {
        "not_successfull": "입력한 내용이 잘못되었거나 완전하지 않습니다.",
        "successfull": "감사합니다. 등록하신 내용이 성공적으로 저장되어 곧 온라인에 반영될 예정입니다"
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\"은(는) \"%{status} 휠체어 접근가능\"으로 변경되었습니다. 곧 온라인에 반영될 예정입니다"
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n ",
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
          "billion": "0억",
          "million": "00만",
          "quadrillion": "천조",
          "thousand": "천",
          "trillion": "조",
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
  "or": "또는",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "숙박시설",
      "education": "교육기관",
      "food": "음식점",
      "government": "정부기관",
      "health": "약국",
      "leisure": "레저",
      "misc": "기타 시설",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "쇼핑",
      "sport": "스포츠",
      "tourism": "관광",
      "unknown": "알 수 없음"
    },
    "name": {
      "accommodation": {
        "beach_resort": "비치호텔",
        "bed_and_breakfast": "숙박시설(B&B)",
        "camp_site": "캠핑장",
        "caravan_site": "캠핑카 야영지",
        "chalet": "별장",
        "dormitory": "기숙사",
        "guest_house": "게스트하우스",
        "hostel": "유스호스텔",
        "hotel": "호텔",
        "motel": "모텔"
      },
      "education": {
        "college": "단과대학",
        "driving_school": "자동차 운전 학원",
        "kindergarten": "유치원",
        "library": "도서관",
        "museum": "박물관",
        "school": "학교",
        "university": "대학교"
      },
      "food": {
        "bar": "바",
        "biergarten": "비어가든",
        "cafe": "카페",
        "drinking_water": "식수대",
        "fast_food": "패스트푸드",
        "ice_cream": "아이스크림 상점",
        "pub": "선술집",
        "restaurant": "식당"
      },
      "government": {
        "courthouse": "법원",
        "embassy": "대사관",
        "government": "정부 기관",
        "police": "경찰서",
        "public_building": "공공기관",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "치과 의원",
        "doctors": "Doctor",
        "hearing_aids": "보청기판매점",
        "hospital": "병원",
        "medical_supply": "의료",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "약국",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "복지시설",
        "speech_therapist": "Speech therapist",
        "veterinary": "동물병원"
      },
      "leisure": {
        "arena": "경기장",
        "brothel": "성매매업소",
        "casino": "카지노",
        "cinema": "영화관",
        "community_centre": "Community centre",
        "gallery": "갤러리",
        "massage": "Massage spa",
        "nightclub": "나이트클럽",
        "playground": "놀이터",
        "sauna": "사우나",
        "stripclub": "스트립클럽",
        "tattoo": "Tattoo shop",
        "theatre": "극장",
        "zoo": "동물원"
      },
      "misc": {
        "company": "회사(사무실)",
        "estate_agent": "부동산 중개인",
        "insurance": "보험 대리점",
        "lawyer": "변호사",
        "place_of_worship": "기도원",
        "toilets": "화장실"
      },
      "money_post": {
        "atm": "ATM기기",
        "bank": "은행",
        "bureau_de_change": "환전소",
        "post_box": "우체통",
        "post_office": "우체국"
      },
      "public_transfer": {
        "aerodrome": "공항",
        "bicycle_parking": "자전거 주차장",
        "bicycle_rental": "자전거 임대",
        "boatyard": "Boat yard",
        "bus_station": "버스터미널",
        "bus_stop": "버스정류소",
        "cable_car": "케이블카",
        "car_rental": "렌트카",
        "car_sharing": "카 쉐어링",
        "chair_lift": "스키장 리프트",
        "ferry": "여객선",
        "ferry_terminal": "여객선 터미널",
        "fuel": "주유소",
        "halt": "정류소",
        "light_rail": "경전철",
        "parking": "주차장",
        "parking_aisle": "주차장 통로",
        "platform": "플랫폼",
        "station": "지하철",
        "subway_entrance": "지하철 입구",
        "terminal": "공항 터미널",
        "tram_stop": "전차 정류소"
      },
      "shopping": {
        "alcohol": "술집",
        "bakery": "빵집",
        "beauty": "미용실",
        "beverages": "음료가게",
        "bicycle": "자전거가게",
        "books": "서점",
        "butcher": "정육점",
        "car_repair": "카센터",
        "car_shop": "자동차매장",
        "chemist": "Chemist / Drugstore",
        "clothes": "옷가게",
        "computer": "컴퓨터상점",
        "confectionery": "과자점",
        "convenience": "편의시설",
        "deli": "조제 식품점",
        "department_store": "백화점",
        "doityourself": "스스로 할 수 있음",
        "dry_cleaning": "세탁소",
        "electronics": "전자제품",
        "fabric": "직물 상점",
        "farm_shop": "농장 상점",
        "florist": "꽃집",
        "furniture": "가구점",
        "garden_centre": "Garden centre",
        "gift": "선물 가게",
        "hairdresser": "미용실",
        "hardware": "하드웨어",
        "jewelry": "보석점",
        "kiosk": "간이매점",
        "laundry": "세탁소",
        "mall": "쇼핑센터",
        "optician": "안경점",
        "organic": "유기농 식품점",
        "outdoor": "야외활동 용품점",
        "pet": "애완동물 가게",
        "photo": "사진관",
        "second_hand": "중고품가게",
        "shoes": "신발가게",
        "sports": "스포츠",
        "stationery": "문구점",
        "supermarket": "슈퍼마켓",
        "toys": "장난감 상점",
        "travel_agency": "여행사",
        "video": "비디오대여점"
      },
      "sport": {
        "pitch": "운동장",
        "sports_centre": "스포츠 센터",
        "stadium": "경기장",
        "swimming": "수영",
        "swimming_pool": "수영장"
      },
      "tourism": {
        "archaeological_site": "고적지",
        "arts_centre": "문화센터",
        "artwork": "예술품",
        "attraction": "명소",
        "battlefield": "옛 전쟁터",
        "beach": "해변",
        "beacon": "등대",
        "castle": "성채",
        "cave_entrance": "터널입구",
        "information": "관광안내소",
        "memorial": "기념물",
        "theme_park": "테마파크",
        "tower": "타워",
        "viewpoint": "뷰 포인트"
      },
      "unknown": {
        "unknown": "알 수 없음"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "상태 : 연결되었습니다",
          "grant": "지금 연결",
          "not_connected": "상태 : 연결되지 않았습니다",
          "revoke": "연결끊기"
        }
      },
      "headline": "프로필 수정"
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
        "for": "\"%{q}\"을(를) 찾고 있습니다.",
        "not_found": "위치를 찾을 수 없습니다!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count}개의 장소가 이미 지정되어 있습니다.",
    "headline": "누구나 휠체어 접근가능 장소에 관한 정보를 등록할 수 있습니다!",
    "start": "시작",
    "step1": "당신이 알고 있는 장소를 클릭하세요",
    "step2": "표시하고 클릭해 내용을 저장하세요.",
    "step3": "내용이 맞습니다. 새로 등록할 필요가 없습니다.",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "통계",
  "support": {
    "array": {
      "last_word_connector": "그리고",
      "sentence_connector": "그리고",
      "two_words_connector": "그리고",
      "words_connector": ",\n"
    },
    "select": {
      "prompt": "선택해주세요"
    }
  },
  "time": {
    "am": "오전",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "오후"
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
        "notice": "당신의 계정이 활성화 되었습니다!"
      },
      "error": {
        "notice": "이메일과 비밀번호가 맞지 않습니다"
      },
      "notice": "접속되어 있는 중입니다"
    },
    "destroy": {
      "notice": "안녕히 가세요, 또 방문해주세요!"
    },
    "new": {
      "email": "Email address",
      "login": "로그인",
      "login_with_twitter": "트위터 로그인",
      "password": "비밀번호",
      "remember_me": "로그인 상태유지"
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
        "title": "프로필"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "뉴스레터"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "사진첩"
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
          "settings": "설정"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; 처음",
      "last": "마지막 &raquo;",
      "next": "다음 &rsaquo;",
      "previous": "&lsaquo; 이전",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "휠체어 접근불가",
    "unknown": "Unknown status",
    "yes": "휠체어 접근가능"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "프로젝트",
      "based_on": "위치정보지원 :",
      "become_a_supporter": "후원자가 되어주세요",
      "main_supporter": "후원"
    },
    "itunes": {
      "alt": "AppStore 로고",
      "title": "지금 아이폰 어플리케이션을 다운로드 받으세요!"
    },
    "logo": {
      "alt": "Wheelmap 로고 - 휠체어 접근가능 장소찾기",
      "title": "Wheelmap - 휠체어 접근가능 장소찾기"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "다음 &#8594;",
    "page_entries_info": {
      "multi_page": "%{model}에 관해 모두 보기 : %{from}&nbsp;-&nbsp;%{to}, 총 %{count}개",
      "multi_page_html": "%{model}에 관해 모두 보기 : <b>%{from}&nbsp;-&nbsp;%{to}</b>, 총 <b>%{count}</b>개",
      "single_page": {
        "one": "%{model}에 관해 1개 보기",
        "other": "%{count}개 %{model}에 관해 모두 보기",
        "zero": "%{model}을 찾을 수 없습니다"
      },
      "single_page_html": {
        "one": "%{model}에 관해 <b>1</b>개 보기",
        "other": "%{model}에 관해 모두 보기 ; <b>%{count}</b>",
        "zero": "%{model}에 관해 찾을 수 없습니다."
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; 이전"
  }
});
