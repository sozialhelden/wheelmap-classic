I18n.translations || (I18n.translations = {});
I18n.translations["el"] = I18n.extend((I18n.translations["el"] || {}), {
  "actions": {
    "cancel": "Ακύρωση",
    "next": "Επόμενο",
    "save": "Αποθήκευση",
    "send": "Αποστολή"
  },
  "active_admin": {
    "access_denied": {
      "message": "Δεν έχετε πρόσβαση για αυτή την ενέργεια."
    },
    "any": "Όλες οι εγγραφές",
    "batch_actions": {
      "action_label": "%{title} επιλεγμένων",
      "button_label": "Μαζικές Ενέργειες",
      "default_confirmation": "Είστε σίγουρος πως θέλετε να το κάνετε αυτό;",
      "delete_confirmation": "Είστε σίγουρος πως θέλετε να διαγράψετε αυτά τα %{plural_model}?",
      "labels": {
        "destroy": "Διαγραφή"
      },
      "link": "Δημιουργήστε ένα",
      "selection_toggle_explanation": "(Αντιστροφή επιλογών)",
      "succesfully_destroyed": {
        "one": "Διαγράφηκε επιτυχώς 1 %{model}",
        "other": "Διαγράφηκαν επιτυχώς %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Δεν υπάρχουν %{resource_name} ακόμα.",
      "link": "Δημιουργήστε μία εγγραφή"
    },
    "cancel": "Ακύρωση",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Προσθήκη Σχολίου",
      "author": "Συγγραφέας",
      "author_missing": "Ανώνυμος",
      "author_type": "Τύπος Συγγραφέα",
      "body": "Κείμενο",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Το σχόλιο δε σώθηκε, το κείμενο ήταν κενό."
      },
      "no_comments_yet": "Δεν υπάρχει κανένα σχόλιο.",
      "resource": "Εγγραφή",
      "resource_type": "Τύπος Εγγραφής",
      "title": "Σχόλιο",
      "title_content": "Σχόλια (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Σελίδα διαχείρισης",
    "dashboard_welcome": {
      "call_to_action": "Για να προσθέσετε ενότητες, ανατρέξτε στο αρχείο 'app/admin/dashboard.rb'",
      "welcome": "Καλωσορίσατε στο Active Admin. Αυτή είναι η αρχική σελίδα διαχείρισης."
    },
    "delete": "Διαγραφή",
    "delete_confirmation": "Είστε σίγουρος πως θέλετε να το διαγράψετε;",
    "delete_model": "Διαγραφή %{model}",
    "details": "Λεπτομέρειες %{model}",
    "devise": {
      "change_password": {
        "submit": "Αλλαγή του κωδικού",
        "title": "Αλλάξτε τον κωδικό σας"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Ξεχάσατε τον κωδικό σας;",
        "resend_confirmation_instructions": "Αποστολή οδηγιών επιβεβαίωσης",
        "resend_unlock_instructions": "Αποστολή οδηγιών ξεκλειδώματος",
        "sign_in": "Σύνδεση",
        "sign_in_with_omniauth_provider": "Σύνδεση με %{provider}",
        "sign_up": "Εγγραφή"
      },
      "login": {
        "remember_me": "Να με θυμάσαι",
        "submit": "Σύνδεση",
        "title": "Σύνδεση"
      },
      "password": {
        "title": "Κωδικός"
      },
      "resend_confirmation_instructions": {
        "submit": "Αποστολή οδηγιών επιβεβαίωσης",
        "title": "Αποστολή οδηγιών επιβεβαίωσης"
      },
      "reset_password": {
        "submit": "Επαναφορά κωδικού",
        "title": "Ξεχάσατε τον κωδικό σας;"
      },
      "sign_up": {
        "submit": "Εγγραφή",
        "title": "Εγγραφή"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Αποστολή οδηγιών ξεκλειδώματος",
        "title": "Αποστολή οδηγιών ξεκλειδώματος"
      },
      "username": {
        "title": "Όνομα χρήστη"
      }
    },
    "download": "Κατέβασμα:",
    "dropdown_actions": {
      "button_label": "Ενέργειες"
    },
    "edit": "Επεξεργασία",
    "edit_model": "Επεξεργασία %{model}",
    "empty": "Άδειο",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Καθαρισμός Φίλτρων",
        "filter": "Φίλτρα"
      },
      "predicates": {
        "contains": "Περιέχει",
        "ends_with": "Καταλήγει σε",
        "equals": "Είναι ίσο με",
        "greater_than": "Μεγαλύτερο από",
        "less_than": "Μικρότερο από",
        "starts_with": "Αρχίζει με"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Διαγραφή",
    "has_many_new": "Προσθήκη Νέου %{model}",
    "has_many_remove": "Αφαίρεση",
    "index_list": {
      "block": "Λίστα",
      "blog": "Blog",
      "grid": "Πλέγμα",
      "table": "Πίνακας"
    },
    "less_than": "Less Than",
    "logout": "Αποσύνδεση",
    "main_content": "Παρακαλώ υλοποιήστε την %{model}#main_content για να εμφανίσετε περιεχόμενο.",
    "new_model": "Δημιουργία %{model}",
    "next": "Επόμενη",
    "pagination": {
      "empty": "Δε βρέθηκαν %{model}",
      "entry": {
        "one": "εγγραφή",
        "other": "εγγραφές"
      },
      "multiple": "Εμφανίζονται %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> από <b>%{total}</b> συνολικά",
      "multiple_without_total": "Εμφανίζονται %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Εμφάνιζεται <b>1</b> %{model}",
      "one_page": "Εμφανίζονται <b>όλες οι %{n}</b> εγγραφές %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Προηγούμενη",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Φίλτρα",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Δεν",
      "yes": "Ναι"
    },
    "unsupported_browser": {
      "headline": "Το ActiveAdmin δεν υποστηρίζει πλεον τον Internet Explorer έκδοση 8 η μικρότερη.",
      "recommendation": "Σας προτείνουμε να αναβαθμίσετε στην τελευταία <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "Αν χρησιμοποιείτε IE 9 ή μεγαλύτερη έκδοση, σιγουρευτείτε ότι <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Προβολή"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Διεύθυνση",
        "address_city": "Πόλη",
        "address_housenumber": "Αριθμός σπιτιού",
        "address_postcode": "Ταχυδρομικός τομέας",
        "address_street": "Οδός",
        "name": "Όνομα",
        "note": "Σημείωση",
        "phone": "Τηλέφωνο",
        "type": "Τύπος",
        "website": "Ιστοσελίδα"
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
        "accepted": "Πρέπει να γίνει δεκτό",
        "blank": "Πρέπει να συμπληρωθεί",
        "confirmation": "Δεν αντιστοιχεί με την επιβεβαίωση",
        "empty": "Πρέπει να συμπληρωθεί",
        "equal_to": "Πρέπει να ισούται με %{count} ",
        "even": "Πρέπει να είναι μονό",
        "exclusion": "Είναι δεσμευμένο",
        "greater_than": "Πρέπει να είναι μεγαλύτερο από %{count} ",
        "greater_than_or_equal_to": "Πρέπει να είναι μεγαλύτερο ή ίσο με %{count} ",
        "inclusion": "Δεν περιλαμβάνεται στον κατάλογο",
        "invalid": "Άκυρο",
        "less_than": "Πρέπει να είναι μικρότερο από %{count} ",
        "less_than_or_equal_to": "Πρέπει να είναι κατώτερο ή ίση με %{count} ",
        "not_a_number": "Δεν είναι αριθμός",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "Πρέπει να είναι μονός αριθμός",
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "Έχει ήδη ληφθεί",
        "too_long": "Είναι πολύ μεγάλο (το μέγιστο μήκος είναι %{count} χαρακτήρες)",
        "too_short": "Είναι πολύ μικρό (το μικρότερο μήκος είναι %{count} χαρακτήρες)",
        "wrong_length": "Έχει λανθασμένο μήκος (πρέπει να είναι %{count} χαρακτήρες)"
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
          "email": "Email διεύθυνση",
          "password": "Κωδικός πρόσβασης",
          "remember_me": "Διατήρηση σύνδεσης"
        }
      },
      "template": {
        "body": "Υπήρξαν προβλήματα στα εξής πεδία",
        "header": {
          "one": "1 λάθος παρεμπόδισε αυτό το %{model} να αποθηκευθεί.",
          "other": "%{count} λάθη εμπόδισαν αυτό το %{model} να αποθηκευθεί."
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
      "notice": "Έχετε ήδη συνδεθεί..."
    },
    "require_user": {
      "notice": "Πρέπει να συνδεθείτε, για να δείτε αυτην τη σελίδα."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Προσθήκη μίας νέας τοποθεσίας",
      "edit": "Επεξεργασία τοποθεσίας"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "Κλείσιμο",
    "skip": "παραληψη"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Παρακαλώ μας γράφετε στα Αγγλικά ή στα Γερμανικά.",
        "flash_after_submit": "Thank you for contacting us. Our support team will get back to you as soon as possible.",
        "header_text_html": "Παρακαλώ πρώτα διαβάζετε <a href=\"https://news.wheelmap.org/en/faq/\">frequently asked questions</a> για βοήθεια. Αν δεν υπάρχει εκεί η λύση στο πρόβλημα σας, παρακαλώ απαντήστε τις ακόλουθες ερώτησεις για να μπορούμε να επιδιορθώσουμε αυτό.",
        "note": "Note that Wheelmap is an open-source project run by a non-profit organization and we have limited resources for the app development.",
        "questions": {
          "a": "Τι έχεις κάνει:",
          "b": "Τι ήλπιζες να τύχει:",
          "c": "Τι συνέβη αντ' αυτού;"
        },
        "submit_button": "Υποβολή",
        "title": "Report a problem"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Κυρ",
      "Δευ",
      "Τρι",
      "Τετ",
      "Πεμ",
      "Παρ",
      "Σαβ"
    ],
    "abbr_month_names": [
      null,
      "ΙΑΝ",
      "ΦΕΒ",
      "ΜΑΡ",
      "ΑΠΡ",
      "ΜΑΙ",
      "ΙΟΥΝ",
      "ΙΟΥΛ",
      "ΑΥΓ",
      "ΣΕΠ",
      "ΟΚΤ",
      "ΝΟΕ",
      "ΔΕΚ"
    ],
    "day_names": [
      "Κυριακή",
      "Δευτέρα",
      "Τρίτη",
      "Τετάρτη",
      "Πέμπτη",
      "Παρασκευή",
      "Σάββατο"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "%B %d, %Y",
      "short": "%b %d "
    },
    "month_names": [
      null,
      "Ἰανουάριος",
      "Φεβρουάριος",
      "Μάρτιος",
      "Ἀπρίλιος",
      "Μάϊος",
      "Ἰούνιος",
      "Ἰούλιος",
      "Αὔγουστος",
      "Σεπτέμβριος",
      "Ὀκτώβριος",
      "Νοέμβριος",
      "Δεκέμβριος"
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
        "one": "περίπου 1 ώρα",
        "other": "περίπου %{count} ώρες"
      },
      "about_x_months": {
        "one": "περίπου 1 μήνα",
        "other": "περίπου %{count} μήνες"
      },
      "about_x_years": {
        "one": "περίπου 1 χρόνο",
        "other": "περίπου %{count} χρόνια"
      },
      "almost_x_years": {
        "one": "σχεδόν 1 χρόνος",
        "other": "σχεδόν %{count} χρόνια"
      },
      "half_a_minute": "μισό λεπτό",
      "less_than_x_minutes": {
        "one": "λιγότερο από ένα λεπτό",
        "other": "λιγότερο από %{count} λεπτά"
      },
      "less_than_x_seconds": {
        "one": "λιγότερο από 1 δευτερόλεπτο",
        "other": "λιγότερο από %{count} δευτερόλεπτα"
      },
      "over_x_years": {
        "one": "πάνω από 1 χρόνο",
        "other": "πάνω από %{count} χρόνια"
      },
      "x_days": {
        "one": "1 ημέρα",
        "other": "%{count} ημέρες"
      },
      "x_minutes": {
        "one": "1 λεπτό",
        "other": "%{count} λεπτά"
      },
      "x_months": {
        "one": "1 μήνα",
        "other": "%{count} μήνες"
      },
      "x_seconds": {
        "one": "1 δευτερόλεπτο",
        "other": "%{count} δευτερόλεπτα"
      }
    },
    "prompts": {
      "day": "Ημέρα",
      "hour": "Ώρα",
      "minute": "Λεπτό",
      "month": "Μήνας",
      "second": "Δευτερόλεπτα",
      "year": "Έτος"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Ο λογαριασμός σάς επιβεβαιώθηκε με επιτυχία. Είστε συνδεδεμένος.",
      "link": "Δεν λάβατε οδηνγίες για την επιβεβαίωση;",
      "send_instructions": "Θα λάβετε ένα Email με οδηγίες για το πως επιβεβαιώνετε τον λογαριασμό σας άμεσα.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Είστε σίγουρος/η;",
      "headline": "Delete account",
      "link": "Διαγραφή τώρα"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Current password <i>(we need it to confirm your changes)</i>",
          "email": "Email",
          "password": "Password <i>(leave empty if you don\\'t want to change it)</i>",
          "password_confirmation": "Επαναλάβετε τον κωδικό πρόσβασης"
        },
        "submit": "Αποθήκευση αλλαγών"
      },
      "headline": "Διαχείριση λογαριασμού"
    },
    "failure": {
      "already_authenticated": "Είσαστε ήδη συνδεδεμένοι.",
      "inactive": "Ο λογαριασμός σας δεν έχει ενεργοποιηθεί ακόμη.",
      "invalid": "Μη έγκυρο email ή κωδικός.",
      "invalid_token": "Άκυρη πιστοποίηση αυθεντικότητας.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Ο λογαριασμός σας είναι κλειδωμένος",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Πρέπει να συνδεθείυε ή να εγγραφείτε για να συνεχίσετε.",
      "unconfirmed": "Πρέπει να επιβεβαιώσετε τον λογαριασμό σας για να συνεχίσετε."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Οδηγίες επιβεβαίωσης"
      },
      "reset_password_instructions": {
        "subject": "Οδηγίες γαι επαναφορά κωδικού"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Υποχρεωτικά πεδία",
    "omniauth_callbacks": {
      "failure": "Εξουσιοδότηση με το% {kind} απέτυχε. Σφάλμα:\"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Με επιτυχία είστε συνδεδεμένοι με το %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Eπαναφορά κωδικού."
      },
      "headline": "Ξεχάσατε τον κωδικό?"
    },
    "password_reset": {
      "email": {
        "comment": "Eάν δεν ζητήσατε εσείς την αλλαγή κωδικού,σας παρακαλούμε να αγνοήσετε αυτο το μήνυμα.<br/> Ο κωδικός σας δεν θα αλλάξει παρά μόνο εάν κάνετε κλικ στο σύνδεσμο επαλήθευσης.",
        "headline": "Καλώς ήρθατε %{email} ",
        "link": "Αλλαγή κώδικα πρόσβασης",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Νέος κώδικας πρόσβασης",
          "password_confirmation": "Επανάληψη κωδικού"
        },
        "submit": "Επαναφορά κωδικού"
      },
      "headline": "Επαναφορά κωδικού"
    },
    "passwords": {
      "link": "Ξεχάσατε τον κωδικό?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Ο κωδικός σας άλλαξε επιτυχώς.Είστε συνδεδεμένος τώρα.",
      "updated_not_active": "Ο κωδικός σας άλλαξε επιτυχώς."
    },
    "registrations": {
      "destroyed": "Αντίο! Ο λογαριαμός σας ακυρώθηκε επιτυχώς.Ευχόμαστε να σας ξαναδούμε σύντομα.",
      "inactive_signed_up": "Εγγραφήκατε  επιτυχώς.Εντούτοις,δεν μπορέσαμε να σας συνδέσουμε στον λογαριασμό σας επιδή %{reason}.",
      "link": "Εγγραφή",
      "reasons": {
        "inactive": "Ανενεργός",
        "locked": "κλειδωμένο",
        "unconfirmed": "ανεπιβεβαίωση"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Αναβαθμίσατε τον λογαριασμό με επιτυχία."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Άκυρο Εmail ή κωδικός.",
      "invalid_token": "Άκυρη πιστοποίηση αυθεντικότητας.",
      "link": "Εγγραφή",
      "locked": "Ο λογαριασμός σας είναι κλειδωμένος.",
      "new": {
        "no_osm_account": "Δεν έχετε λογαριασμό στο OpenStreetMap;",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Σας ευχαριστούμε πολύ για την υποστήριξή σας!",
        "sign_in_with": "Σύνδεση με %{kind}",
        "sign_up_with_osm": "Κάνετε εγγραφή τώρα.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Συνδεθήκατε επιτυχώς.",
      "signed_out": "Αποσυνδεθήκατε επιτυχώς.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Πρέπει να συνδεθείυε ή να εγγραφείτε για να συνεχίσετε.",
      "unconfirmed": "Για να συνεχίσετε πρέπει να επιβεβαιώσετε τον λογαριασμό σας."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Κώδικας πρόσβασης",
          "remember_me": "Θέλετε  να παραμείνετε συνδεδεμένη?"
        },
        "submit": "Σύνδεση"
      },
      "headline": "Σύνδεση"
    },
    "sign_out": {
      "headline": "Αποσύνδεση"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Επιβεβαίωση λογαριασμόυ ",
        "please_confirm": "Μπορείτε να επιβεβαιώσετε τον λογαριασμό σας μέσω του παρακάτω σύνδεσμου:",
        "welcome": "Καλώς ήρθατε %{email} "
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Κωδικός πρόσβασης",
          "password_confirmation": "Επαναλάβετε τον κωδικό",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Εγγραφή"
      },
      "headline": "Εγγραφή"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Ο λογαριασμός σας ξεκλειδώθηκε επιτυχώς. Είστε συνδεδεμένος τώρα."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message} ",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "Έχει ήδη επιβεβαιωθεί,παρακαλώ δοκιμάστε εκ νέου να συνδεθείτε",
      "blank": "Πρέπει να συμπληρωθεί",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "Δεν αντιστοιχεί με την επιβεβαίωση",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "Πρέπει να συμπληρωθεί",
      "equal_to": "Πρέπει να είναι ακριβώς %{count}",
      "even": "Πρέπει να είναι ένας ζυγός αριθμός.",
      "exclusion": "Είναι δεσμευμένο",
      "expired": "έληξε, ζητήστε ένα νέο",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "Πρέπει να είναι μεγαλύτερο από %{count} ",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "Mη αποδεκτή τιμή",
      "invalid": "Άκυρο",
      "less_than": "Πρέπει να είναι μικρότερο από %{count} ",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "Δεν είναι αριθμός",
      "not_an_integer": "θα πρέπει να είναι ένας ακέραιος αριθμός",
      "not_found": "Δεν βρέθηκε",
      "not_locked": "δεν ήταν κλειδωμένο",
      "not_saved": {
        "one": "% {count} σφάλμα απαγορεύονται να αποθηκεύσετε έναν %{πόρο}:",
        "other": "% {count} σφάλματα απαγορεύονται να αποθηκεύσετε έναν %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "Τό όνομα χρήστη, υπάρχει ήδη",
      "too_long": "Είναι πολύ μεγάλο (το μέγιστο μήκος είναι %{count} χαρακτήρες)",
      "too_short": "Είναι πολύ μικρό (το μικρότερο μήκος είναι %{count} χαρακτήρες)",
      "wrong_length": "Έχει λανθασμένο μήκος (πρέπει να είναι %{count} χαρακτήρες)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Η διεύθυνση της ιστοσελίδας δεν ισχύει."
        }
      }
    },
    "template": {
      "body": "Υπήρξαν προβλήματα με τα εξής πεδία",
      "header": {
        "one": "%{count} σφάλμα απαγορεύει αυτό %{μοντέλο} να σωθεί",
        "other": "%{count} σφάλματα απαγορεύουν αυτό %{model} να σωθεί"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Μπορείτε πάντα να αλλάξετε την σήμανση της θέσης σας. Απλά επιλέξτε την σωστη σήμανση και \"Αποθήκευση\" - έγινε!",
      "1": "Ως συνδεδεμένος χρήστης μπορείτε να προσθέσετε/διορθώσετε όλες τις λεπτομέρειες μιας θέσης. Κάντε κλικ στο \"Επεξεργασία\" για να διορθώσετε ή να προσθέσετε πληροφορίες στη μάσκα.",
      "2": "Μπορείτε να προσθέσετε επιπλέον πληροφορίες (π.χ. \"Αυτό το μέρος έχει μια κινητή ράμπα\") στο τμήμα σχολίου. Κάντε κλικ στο \"Επεξεργασία\" και \"Προσθήκη σχολίου\"."
    },
    "headline": "Υπάρχει πρόβλημα με αυτήν την περιοχή;",
    "questions": {
      "0": "Η σήμανση είναι λανθασμένη.",
      "1": "Οι λεπτομέρειες του τόπου είναι λανθασμένες ή λείπουν.",
      "2": "Έχω περισσότερες πληροφορίες σχετικά με αυτό το μέρος."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} δημιουργήθηκε επιτυχώς"
      },
      "destroy": {
        "alert": "%{resource_name} δεν μπορεσε να αφαιρεθει",
        "notice": "%{resource_name} έχει διαγραφεί επιτυχώς"
      },
      "update": {
        "notice": "%{resource_name} ενημερώθηκε επιτυχώς"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Εικόνα έχει διαγραφεί επιτυχώς"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Κατάλληλο για αναπηρική καρέκλα",
    "show_limited_accessible_places": "Μερικώς προσβάσιμο με αναπηρική καρέκλα",
    "show_places_without_status": "Άγνωστη κατάσταση λειτουργίας",
    "show_unaccessible_places": "Καμία προσβαση από αναπηρικά αμαξίδια "
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Mετακινήστε στον χάρτη το σημαιάκι επισήμανσης στην σωστή τοποθεσία",
      "osm_username": "Δεν είστε ακόμη μέλος?? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Δημιουργήστε έναν λογαριασμό Openstreetmap τώρα.</a> ",
      "password": "(αφήστε κενό,εάν δεν θέλετε να το αλλάξετε)",
      "phone": "For example: +49 30 12345678",
      "website": "Για παράδειγμα: http://www.example.com "
    },
    "labels": {
      "category": "Κατηγορία:",
      "centralkey": "Κεντρικό κλειδί:",
      "city": "Πόλη:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Τέλος",
      "housenumber": "Αριθμός οικίας:",
      "lat": "Γεωγραφικό πλάτος",
      "lon": "Γεωγραφικό μήκος",
      "name": "Ονομα:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Κωδικός πρόσβασης",
      "password_confirmation": "Επαναλάβετε τον κωδικό πρόσβασης",
      "phone": "Τηλέφωνο:",
      "postcode": "Ταχυδρομικός κώδικας:",
      "privacy_policy": "Δέχομαι τις παραγράφους 1 και 2 της συμφωνίας προστασίας των προσωπικών δεδομένων.",
      "reset": "Επαναφορά",
      "save": "Αποθήκευση",
      "street": "Οδός:",
      "terms": "Αποδέχομαι τους όρους χρήσης.",
      "type": "Τύπος:",
      "website": "Ιστοσελίδα:",
      "wheelchair": "Πρόσβαση με αναπηρική καρέκλα?",
      "wheelchair_description": "Σχόλια σχετικά με την προσβασιμότητα:",
      "wheelchair_toilet": "Πρόσβαση τουαλέτας με αναπηρικά αμαξίδια "
    },
    "titles": {
      "basic": "Βασικά δεδομένα",
      "optional": "Περισσότερες πληροφορίες <span class=\"addition\">(all fields are optional)</span> "
    }
  },
  "global": {
    "form_validation_error": "Παρακαλώ σημειώστε τα παρακάτω λάθη."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Αρχική σελίδα",
      "keywords": "Μέρη προσβάσιμα με αναπηρική καρέκλα - βρείτε σημά αναζήτησης",
      "search": "Αναζήτηση",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Επιλογή γλώσσας",
      "contact": "Επικοινωνία",
      "faq": "Συχνές ερωτήσεις",
      "feedback": "Ανατροφοδότηση",
      "home": "Έναρξη",
      "how_to_add_a_place": "Πώς προσθέτω τοποθεσίες?",
      "imprint": "Στοιχεία Έκδοσης",
      "logged_in_as": "Συνδεδεμένος ώς:",
      "login": "Σύνδεση",
      "logout": "Αποσύνδεση",
      "map": "Χάρτης",
      "newsletter": "Ενημερωτικό Δελτίο",
      "press": "Press",
      "profile": "προφίλ",
      "projects": "Συμμετέχετε",
      "report_problem": "Αναφέρετε πρόβλημα",
      "suggestions": "Προτάσεις",
      "travelguide": "ταξιδιωτικός οδηγός",
      "what_is_barrier_free": "Τι σημαίνει 'προσβάσιμο με αναπηρική καρέκλα'?",
      "what_is_wheelmap": "Τι είναι το Wheelmap?"
    },
    "searchbar": {
      "add_place": "Πρόσθεσε μια άλλη τοποθεσία\n",
      "find": "Aναζήτηση",
      "placeholder": "π.χ. Ακρόπολη, Δελφοί",
      "title_add_place": "Πρόσθεσε μια νέα τοποθεσία, τώρα!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Κατηγορίες"
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
      "prompt": "Παρακαλώ επιλέξτε"
    },
    "submit": {
      "create": "Δημιουργία %{model} ",
      "submit": "Αποθήκευση %{model} ",
      "update": "Ενημέρωση %{model} "
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Κατηγορία:",
        "deselect_all": "Αποεπιλογή όλων",
        "select_all": "Επιλογή όλων",
        "wheelchair": "Δυνατότητα πρόσβασης με αναπηρική καρέκλα (Τί σημαίνει;)"
      },
      "ie": {
        "action": {
          "ignore": "Παράβλεψη",
          "upgrade": "Ενημέρωση προγράμματος περιήγησης"
        },
        "warning": {
          "headline": "Ζητάμε συγνώμη!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Προσθήκη μίας νέας τοποθεσίας"
        }
      },
      "overlay": {
        "button": "Εντάξει, πάμε!",
        "categories": "Φιλτράρισμα τόπων από τις κατηγορίες",
        "filter": "Φιλτράρισμα τόπων με δυνατότητα πρόσβασης αναπηρικό καροτσάκι",
        "headline": "Σημανση και βρείτε προσβάσιμα από αναπηρικά αμαξίδια μέρη με το Wheelmap.org - σε όλο τον κόσμο και δωρεάν. Είναι εύκολο:",
        "lookup": "Αναζήτηση για ένα συγκεκριμένο μέρος",
        "secondary_headline": "Το σύστημα φωτεινού σηματοδότη για να επισημάνετε την προσβασιμότητα δημόσιων χώρων με αναπηρικό καροτσάκι:"
      },
      "popup": {
        "form": {
          "limited": "Μερικώς προσβάσιμο με αναπηρική καρέκλα",
          "no": "Καμία προσβαση από αναπηρικά αμαξίδια ",
          "save": "Ενημέρωση",
          "unknown": "Άγνωστη κατάσταση λειτουργίας",
          "yes": "Κατάλληλο για αναπηρική καρέκλα"
        },
        "help": "Δυνατότητα πρόσβασης με αναπηρική καρέκλα",
        "more": "περισσότερα ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Πώς;",
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
        "alt": "Μια πρωτοβουλία των Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Επιλογή κατηγορίας"
    },
    "node": {
      "info_edit_position": "Η τοποθεσία θα εμφανιστεί στο Wheelmap όπως φαίνεται παραπάνω. Εάν ο δείκτης δεν είναι στο σωστό σημείο, μπορείτε να <a href=\"%{url}\"> αλλάξετε την θέση του στο Το OpenStreetMap.</a>",
      "mail": {
        "body": "(Παρακαλώ γράψτε μόνο στα Αγγλικά ή Γερμανικά).\n\nHi Sozialhelden,\nsomething is wrong with location% {url}\n\nThe problem is:",
        "subject": "[Wheelmap] Πρόβλημα με %{headline}"
      }
    },
    "node_type": {
      "prompt": "Επιλογή τύπου"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street} "
    },
    "tags": {
      "phone": "Τηλέφωνο:",
      "website": "Ιστοσελίδα:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Η εισαγωγή δεδομένων ήταν εσφαλμένη ή μη ολοκληρωμένη.",
        "successfull": "Ευχαριστούμε, η υποβολή του αιτήματος σας αποθηκεύτηκε επιτυχώς και θα είναι oline σύντομα."
      }
    },
    "edit": {
      "header": {
        "title": "Επεξεργαστείτε την τοποθεσία: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Ακύρωση"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Συγνώμη, απέτυχε η πιστοποίηση",
      "not_available": "Συγνώμη, αυτή η σελίδα δεν είναι προσωρινά διαθέσιμη.",
      "not_existent": "Συγνώμη, αυτή η τοποθεσία δεν είναι πλέον διαθέσιμη.",
      "not_found": "Συγνώμη, η σελίδα δεν βρέθηκε.",
      "param_missing": "Παρακαλώ, εισάγετε έναν όρο αναζήτησης.\n"
    },
    "flash": {
      "authorize_wheelmap": "Χρειάζεστε ενα OpenStreetMap λογαριασμό για να τροποποιήσετε πληροφορίες."
    },
    "new": {
      "form": {
        "legend": "Περιοχή του χώρου",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Πρόσβαση με αναπηρική καρέκλα",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Διεύθυνση",
            "title": "Πού είναι το μέρος;"
          },
          "contact": {
            "name": "Επικοινωνία",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Όνομα και τύπος τοποθεσίας",
            "title": "Δώστε μας αρχικές πληροφορίες σχετικά με το μέρος σου:"
          },
          "overview": {
            "title": "Είναι όλες οι πληροφορίες σωστές;"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Παρόμοια μέρη",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Προσθέτετε μέρος"
      },
      "header": {
        "title": "Νέα τοποθεσία | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Ακύρωση"
      }
    },
    "node": {
      "link": {
        "claim": "Έχετε εργαστεί εδώ;",
        "edit_node": "Επεξεργαστείτε τοποθεσία",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "Διεύθυνση:",
      "contact_details": "Πληροφορίες επικοινωνίας:"
    },
    "node_edit": {
      "details": "Λεπτομέρειες",
      "edit": "Επεξεργασία"
    },
    "node_map": {
      "map": "Χάρτης:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Σχόλιο:"
    },
    "node_photos": {
      "add": "Προσθήκη",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Φωτογραφίες της περιοχής:",
      "upload": "Αποστολή"
    },
    "node_similar": {
      "similar": "Παρόμοια μέρη: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Πρόσβαση τουαλέτας με αναπηρικά αμαξίδια:",
      "premium": "%{name} αναφέρει: αυτό το μέρος είναι",
      "wheelchair_accessibility": "Πρόσβαση με αναπηρική καρέκλα?"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Μάθετε αν ο τόπος αυτός είναι προσβάσιμος από αναπηρικά αμαξίδια στο Wheelmap.org. Ή προσθέστε περισσότερες πληροφορίες και φωτογραφίες για τον τόπο.",
          "title": "Αυτός ο τόπος είναι στο Wheelmap.org: %{name}"
        },
        "title": "Τοποθεσία:%{node} | wheelmap.org "
      },
      "link": {
        "back": "πίσω",
        "large_map": "Μεγέθυνση",
        "listing": "Όλα τα σημεία του τύπου '% {type}' σε %{city} ",
        "upload": "Μεταφόρτωση εικόνας"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Η εισαγωγή δεδομένων ήταν εσφαλμένη ή μη ολοκληρωμένη.",
        "successfull": "Ευχαριστούμε, η υποβολή του αιτήματος σας αποθηκεύτηκε επιτυχώς και θα είναι online σύντομα."
      }
    },
    "update_wheelchair": {
      "successfull": "Η κατάσταση για το \"% {name}\" έχει αλλάξει σε \"% {status}\" και θα είναι έτοιμη σύντομα."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%n %u",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "€"
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
          "billion": "Δισεκατομμύρια",
          "million": "Εκατομμύρια",
          "quadrillion": "Τετρακισεκατομμύρια",
          "thousand": "Χιλιάδες",
          "trillion": "Τρισεκατομμύρια",
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
  "or": "ή",
  "place": {
    "one": "%{count} Σημείο",
    "other": "%{count} Σημεία"
  },
  "poi": {
    "category": {
      "accommodation": "Διαμονή",
      "education": "Εκπαίδευση",
      "food": "Τρόφιμα",
      "government": "Κυβέρνηση",
      "health": "Υγεία",
      "leisure": "Ψυχαγωγία",
      "misc": "Διάφορα",
      "money_post": "Τράπεζα / Ταχυδρομείο",
      "public_transfer": "Δημόσια Συγκοινωνία",
      "shopping": "Καταστήματα",
      "sport": "Αθλητισμός",
      "tourism": "Τουρισμός",
      "unknown": "Άγνωστο"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Παραλιακό ξενοδοχείο",
        "bed_and_breakfast": "Πανσιόν με πρωινό",
        "camp_site": "Κάμπινγκ",
        "caravan_site": "Τοποθεσία κατάλληλη για τροχόσπιτα",
        "chalet": "Σαλέ",
        "dormitory": "Κοιτώνας",
        "guest_house": "Ξενώνας",
        "hostel": "Hostel",
        "hotel": "Ξενοδοχείο",
        "motel": "Μοτέλ"
      },
      "education": {
        "college": "Κολέγιο",
        "driving_school": "Σχολή οδήγησης",
        "kindergarten": "Νηπιαγωγείο",
        "library": "Βιβλιοθήκη",
        "museum": "Μουσείο",
        "school": "Σχολείο",
        "university": "Πανεπιστήμιο"
      },
      "food": {
        "bar": "Μπάρ",
        "biergarten": "Υπαίθρια μπυραρία",
        "cafe": "Καφετέρια",
        "drinking_water": "Πόσιμο νερό",
        "fast_food": "Ταχυφαγεία",
        "ice_cream": "Αίθουσα παγωτού",
        "pub": "Πάμπ",
        "restaurant": "Εστιατόριο"
      },
      "government": {
        "courthouse": "Δικαστήριο",
        "embassy": "Πρεσβεία",
        "employment_agency": "Γραφείο ευρέσεως εργασίας",
        "government": "Κυβερνητική υπηρεσία",
        "police": "Αστυνομία",
        "public_building": "Δημόσια κτήρια",
        "townhall": "Δημαρχείο"
      },
      "health": {
        "alternative": "Ιατρός εναλλατικής ιατρικής",
        "dentist": "Οδοντίατρος",
        "doctors": "Ιατρός",
        "hearing_aids": "Αντιπρόσωπος ακουστικών βαρηκοΐας",
        "hospital": "Νοσοκομείο",
        "medical_supply": "Ιατρικές προμύθειες",
        "occupational_therapist": "Εργοθεραπευτής",
        "pharmacy": "Φαρμακείο",
        "physiotherapist": "Φυσιοθεραπευτής",
        "psychotherapist": "Ψυχίατρος",
        "social_facility": "Κοινωνική εγκατάσταση",
        "speech_therapist": "Λογοθεραπευτής",
        "veterinary": "Κτηνίατρος"
      },
      "leisure": {
        "arena": "Αρένα",
        "brothel": "Οίκος ανοχής",
        "casino": "Καζίνο",
        "cinema": "Κινηματογράφος",
        "community_centre": "Κοινοτικό Κέντρο",
        "gallery": "Πινακοθήκη",
        "massage": "σπα μασάζ",
        "nightclub": "Νυχτερινό κέντρο διασκέδασης",
        "playground": "Παιδική χαρά",
        "sauna": "Σάουνα",
        "stripclub": "Στριπ Κλαμπ",
        "tattoo": "Κατάστημα τατουάζ",
        "theatre": "Θέατρο",
        "zoo": "Ζωολογικός κήπος"
      },
      "misc": {
        "association": "Εταιρία",
        "company": "Επιχείρηση",
        "estate_agent": "Κτηματομεσίτης",
        "insurance": "Ασφάλεια",
        "lawyer": "Δικηγόρος",
        "ngo": "Μη κυβερνητική οργάνωση",
        "place_of_worship": "Τόπος λατρείας",
        "political_party": "Γραφείο πολιτικού κόμματος",
        "toilets": "Αποχωρητήριο"
      },
      "money_post": {
        "atm": "ΑΤΜ",
        "bank": "Τράπεζα",
        "bureau_de_change": "Tαμείο συναλλάγματος",
        "post_box": "Γραμματοκιβώτιο",
        "post_office": "Ταχυδρομείο"
      },
      "public_transfer": {
        "aerodrome": "Αεροδρόμιο",
        "bicycle_parking": "Χώρος στάθμευσης για ποδήλατα",
        "bicycle_rental": "Ενοικίαση ποδηλάτων",
        "boatyard": "Ναυπηγείο",
        "bus_station": "Σταθμός λεωφορείων",
        "bus_stop": "Στάση λεωφορείου",
        "cable_car": "Τελεφερίκ",
        "car_rental": "Ενοικίαση αυτοκινήτων",
        "car_sharing": "Car sharing",
        "chair_lift": "Τελεφερίκ",
        "ferry": "Φέριμποτ",
        "ferry_terminal": "Tερματικός σταθμός Φέριμποτ",
        "fuel": "Βενζινάδικο",
        "halt": "Υπαίθρια στάση τοπικού τρένου",
        "light_rail": "Tράμ",
        "parking": "Πάρκινγκ",
        "parking_aisle": "Πάρκινγκ με διάδρομο",
        "platform": "Aποβάθρα-Πλατφόρμα",
        "station": "Μετρό",
        "subway_entrance": "Είσοδος Μετρό",
        "terminal": "Σταθμός αερολιμένα",
        "tram_stop": "Στάση τράμ"
      },
      "shopping": {
        "alcohol": "Οινοπνευματώδη ποτά",
        "antiques": "Αντίκες",
        "art": "Γκαλερί",
        "bakery": "Φούρνος",
        "beauty": "Ινστιτούτο αισθητικής",
        "beverages": "Ποτά",
        "bicycle": "Κατάστημα ποδηλάτων",
        "books": "Βιβλία",
        "butcher": "Κρεοπωλείο",
        "car_repair": "Συνεργείο αυτοκινήτου",
        "car_shop": "Κατάστημα αυτοκινήτων",
        "chemist": "Φαρμακοποιός",
        "clothes": "Ρούχα",
        "computer": "Υπολογιστές",
        "confectionery": "Ψιλικατζίδικο",
        "convenience": "Kατάστημα με προϊόντα ευρύτατης κατανάλωσης",
        "copyshop": "Φωτοτυπείο",
        "deli": "Ντελικατέσεν",
        "department_store": "Πολυκατάστημα",
        "doityourself": "Do it yourself",
        "dry_cleaning": "Στεγνοκαθαριστήρια",
        "electronics": "Καταστήματα Ηλεκτρικών και Ηλεκτρονικών",
        "erotic": "Sex shop",
        "fabric": "Κατάστημα υφασμάτων",
        "farm_shop": "Οπωροπωλείο",
        "florist": "Ανθοπωλείο",
        "funeral_directors": "Γραφείο κηδειών",
        "furniture": "Έπιπλα",
        "garden_centre": "Ανθοκομικό κέντρο",
        "gift": "Κατάστημα δώρων",
        "greengrocer": "Μανάβης",
        "hairdresser": "Κομμωτήρια",
        "hardware": "Kατάστημα σιδηρικών",
        "interior_decoration": "Γραφείο εσωτερικής διακόσμησης",
        "jewelry": "Κοσμήματα",
        "kiosk": "Περίπτερο",
        "laundry": "Kαθαριστήριο, πλυντήριο-σιδερωτήριο",
        "mall": "Eμπορικά κέντρα",
        "mobile_phone": "Κατάστημα κινητής τηλεφωνίας",
        "music": "Δισκοπωλείο",
        "musical_instrument": "Κατάστημα μουσικών οργάνων",
        "newsagent": "Εφημεριδοπώλης",
        "optician": "Οπτικός",
        "organic": "Κατάστημα βιολογικών προϊόντων",
        "outdoor": "Εξωτερική παροχή",
        "pet": "Pet shop",
        "photo": "Φωτογραφία",
        "second_hand": "Μεταχειρισμένα",
        "shoes": "Υποδήματα",
        "sports": "Αθλήματα",
        "stationery": "Γραφική ύλη",
        "supermarket": "Σουπερμάρκετ",
        "tailor": "Ράφτης",
        "tea": "Προμήθεια τσάι",
        "tobacco": "Καπνοπωλείο",
        "toys": "Παιχνίδια",
        "travel_agency": "Ταξιδιωτικό γραφείο",
        "variety_store": "Κατάστημα εκπτώσεων",
        "video": "Κατάστημα ενοικίασης βίντεο"
      },
      "sport": {
        "pitch": "Αθλητικός τομέας",
        "sports_centre": "Αθλητικά κέντρα",
        "stadium": "Στάδιον",
        "swimming": "Κολύμπι",
        "swimming_pool": "Πισίνα"
      },
      "tourism": {
        "archaeological_site": "Αρχαιολογικός χώρος",
        "arts_centre": "Κέντρο Τεχνών",
        "artwork": "Έργα Τέχνης",
        "attraction": "Αξιοθέατα",
        "battlefield": "Πεδίο μάχης",
        "beach": "Παραλία",
        "beacon": "Φάρος",
        "castle": "Κάστρο",
        "cave_entrance": "Είσοδος Σπηλαίου",
        "information": "Τουριστικές πληροφορίες",
        "memorial": "Μνημεία",
        "theme_park": "Θεματικό πάρκο",
        "tower": "Πύργος",
        "viewpoint": "Aξιοθέατα"
      },
      "unknown": {
        "unknown": "Άγνωστο"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Κατάσταση: συνδεδεμένος",
          "grant": "Συνδεθείτε τώρα",
          "not_connected": "Κατάσταση: μη συνδεδεμένος",
          "revoke": "Αποσύνδεση"
        }
      },
      "headline": "Επεξεργαστείτε το προφίλ σας"
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
        "headline": "Δυστυχώς, δεν μπορέσαμε να βρούμε ένα μέρος που ονομάζεται \"%{query}\".",
        "hint": {
          "example": "<strong>Παράδειγμα:</ strong>Λονδίνο, Ηνωμένο Βασίλειο",
          "info": "Η υπηρεσία αναζήτησης λειτουργεί μόνο με το όνομα ή/και την διεύθυνση. Ως εκ τούτου, παρακαλούμε είτε να αναζητήσετε το όνομα του τόπου ή μια διεύθυνση, π.χ. το όνομα ή/και τον δρόμο της πόλης. Ψάχνοντας ένα είδος του τόπου, π.χ. εστιατόριο ή σινεμά, δεν λειτουργεί!",
          "work_in_progress": "Δουλεύουμε σκληρά για να κάνουμε την αναζήτηση τοπων ευκολότερη και πιο εύχρηστη στο μέλλον."
        },
        "try_this": {
          "address": "Παρακαλώ παρέχετε περισσότερα <strong> στοιχεία της διεύθυνσης </ strong>.",
          "intro": "Δοκιμάστε αυτό:",
          "spell_check": "Ελέγξτε τη <strong> ορθογραφία </ strong> της εισόδου σας."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} αποτελέσμα:",
          "other": "%{count} αποτελέσματα:"
        }
      },
      "search": {
        "for": "Αναζήτηση για \"%{q}\"",
        "not_found": "Δεν βρέθηκαν τοποθεσίες!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Η υπηρεσία αναζήτησης δεν ήταν διαθέσιμη προσωρινά.",
      "repeat_search": "Επανάληψη αναζήτησης"
    }
  },
  "splash": {
    "countline": "%{count} θέσεις έχουν ήδη επισημανθεί.",
    "headline": "Ο καθένας μπορεί να προσθέσει μέρη που προσβάσιμα με αναπηρικό καροτσάκι!",
    "start": "Έναρξη",
    "step1": "Κάντε κλικ σε ένα μέρος που γνωρίζετε",
    "step2": "Σημειώστε το και κάντε κλικ στο Αποθήκευση",
    "step3": "Αυτό είναι! Δεν είναι απαραίτητη η εγγραφή",
    "what_is_wheelmap": "Τι είναι το Wheelmap?"
  },
  "statistics": "Στατιστικά",
  "support": {
    "array": {
      "last_word_connector": "και",
      "sentence_connector": "και",
      "two_words_connector": "και",
      "words_connector": ","
    },
    "select": {
      "prompt": "Παρακαλώ επιλέξτε"
    }
  },
  "time": {
    "am": "πρωί",
    "formats": {
      "default": "%d %B %Y %H:%M",
      "long": "%A %d %B %Y %H:%M:%S %Z",
      "short": "%d %b %H:%M"
    },
    "pm": "απόγευμα"
  },
  "toiletstatus": {
    "no": "Καμία προσβάσιμη από αναπηρικά αμαξίδια τουαλέτα",
    "unknown": "Κατάσταση τουαλέτας άγνωστη",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Πρόσβαση για αναπηρικά αμαξίδια τουαλέτα"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Ο λογαριασμός σας έχει ενεργοποιηθεί!"
      },
      "error": {
        "notice": "To Email και ο κωδικός δεν ταιριάζουν."
      },
      "notice": "Είστε συνδεδεμένος!"
    },
    "destroy": {
      "notice": "Αντίο, ευχόμαστε να επιστρέψτε σύντομα!"
    },
    "new": {
      "email": "Διεύθυνση του Email",
      "login": "Σύνδεση",
      "login_with_twitter": "Συνδεθείτε μέσω Τwitter",
      "password": "Κωδικός πρόσβασης",
      "remember_me": "Διατήρηση σύνδεσης"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Πώς μπορούμε να έρθουμε σε επαφή μαζί σας; Μπορείτε να αλλάξετε αυτές τις πληροφορίες αργότερα στο προφίλ σας."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Οι μεταφορτωμενες εικόνες σας"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "προφίλ"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Ενημερωτικό Δελτίο"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Φωτογραφίες"
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
          "text": "Έχετε"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://news.wheelmap.org/en/\">Blog</a> or <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Επισκόπηση"
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
          "settings": "Ρυθμίσεις "
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
    "limited": "Μερικώς προσβάσιμο με αναπηρική καρέκλα",
    "no": "Καμία προσβαση από αναπηρικά αμαξίδια ",
    "unknown": "Άγνωστη κατάσταση λειτουργίας",
    "yes": "Κατάλληλο για αναπηρική καρέκλα"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Μια πρωτοβουλία απο",
      "based_on": "Βασίζεται σε",
      "become_a_supporter": "Γίνετε υποστηρικτής",
      "main_supporter": "Βασικός υποστηρικτής"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Κατεβάστε το iPhone App τώρα!"
    },
    "logo": {
      "alt": "Wheelmap Λογότυπο - Βρείτε μέρη/τοποθεσίες, προσβάσιμα με αναπηρική καρέκλα",
      "title": "Wheelmap - Βρείτε μέρη/τοποθεσίες, προσβάσιμα με αναπηρική καρέκλα"
    },
    "what_is": {
      "fully_accessible": "Είσοδος χωρίς σκαλοπάτια. Όλα τα δωμάτια χωρίς σκαλοπάτια.",
      "limited_accessible": "Η είσοδος έχει ένα σκαλοπάτι με μέγιστο ύψος 7 εκ. (3 in). Τα περισσότερα δωμάτια είναι χωρίς σκαλοπάτια.",
      "not_accessible": "Η είσοδος έχει ένα ή αρκετά σκαλοπάτια. Τα δωμάτια δεν είναι προσβάσιμα.",
      "unknown_accessible": "Βοηθήστε μαρκάροντας μέρη!"
    }
  },
  "will_paginate": {
    "next_label": "Επόμενος &#8594;",
    "page_entries_info": {
      "multi_page": "Εμφάνιση % {model} %{from} - % {to} από %{count} στο σύνολο",
      "multi_page_html": "Εμφάνιση %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> για να <b>%{count}</b> στο σύνολο",
      "single_page": {
        "one": "Εμφάνιση 1% {model}",
        "other": "Εμφάνιση όλων% {count} %{model}",
        "zero": "Κανένα %{model} βρέθηκε"
      },
      "single_page_html": {
        "one": "Εμφάνιση <b>1</ b>%{model}",
        "other": "Εμφάνιση <b> όλων&nbsp;%{count}</b>%{model} ",
        "zero": "Κανένα %{model} βρέθηκε"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Προηγούμενος"
  }
});
