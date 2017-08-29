I18n.translations || (I18n.translations = {});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), {
  "actions": {
    "cancel": "Abbrechen",
    "next": "Weiter",
    "save": "Speichern",
    "send": "Absenden"
  },
  "active_admin": {
    "access_denied": {
      "message": "Sie haben nicht die Berechtigung um diese Aktion auszuführen."
    },
    "any": "Alle",
    "batch_actions": {
      "action_label": "%{title} ausgewählte",
      "button_label": "Stapelverarbeitung",
      "default_confirmation": "Bist du sicher, dass Sie dies tun wollen?",
      "delete_confirmation": "Sind Sie sicher dass sie diese %{plural_model} löschen wollen? Dies kann nicht rückgängig gemacht werden",
      "labels": {
        "destroy": "Lösche"
      },
      "link": "erstellen",
      "selection_toggle_explanation": "(Auswahl umschalten)",
      "succesfully_destroyed": {
        "one": "Erfolgreich 1 %{model} gelöscht",
        "other": "Erfolgreich %{count} %{plural_model} gelöscht"
      }
    },
    "blank_slate": {
      "content": "Es gibt noch keine %{resource_name}.",
      "link": "Erstellen"
    },
    "cancel": "Abbrechen",
    "clear_filters": "Filter entfernen",
    "comments": {
      "add": "Kommentar hinzufügen",
      "author": "Autor",
      "author_missing": "Unbekannt",
      "author_type": "Autor-Typ",
      "body": "Inhalt",
      "created_at": "Created",
      "delete": "Löschen",
      "delete_confirmation": "Sind Sie sicher dass sie diesen Kommentar löschen wollen?",
      "errors": {
        "empty_text": "Der Kommentar wurde nicht gespeichert, da der Text fehlt."
      },
      "no_comments_yet": "Es gibt noch keine Kommentare.",
      "resource": "Resource",
      "resource_type": "Res­sour­cen-Typ",
      "title": "Kommentar",
      "title_content": "Kommentare (%{count})"
    },
    "create_model": "%{model} erstellen",
    "dashboard": "Übersicht",
    "dashboard_welcome": {
      "call_to_action": "Siehe 'app/admin/dashboards.rb', um Übersichts-Bereiche hinzuzufügen.",
      "welcome": "Willkommen in Active Admin. Dies ist die Standard-Übersichtsseite."
    },
    "delete": "Löschen",
    "delete_confirmation": "Wollen Sie dieses Element wirklich löschen?",
    "delete_model": "%{model} löschen",
    "details": "%{model} Details",
    "devise": {
      "change_password": {
        "submit": "Mein Passwort ändern",
        "title": "Ändern Sie Ihr Passwort"
      },
      "email": {
        "title": "E-Mail-Adresse"
      },
      "links": {
        "forgot_your_password": "Passwort vergessen?",
        "resend_confirmation_instructions": "Bestätigungsanweisung erneut senden",
        "resend_unlock_instructions": "Entsperrungsanweisung erneut senden",
        "sign_in": "Anmeldung",
        "sign_in_with_omniauth_provider": "Anmeldung mit %{provider}",
        "sign_up": "Registrieren"
      },
      "login": {
        "remember_me": "erinnere dich an mich",
        "submit": "Login",
        "title": "Login"
      },
      "password": {
        "title": "Passwort"
      },
      "resend_confirmation_instructions": {
        "submit": "Anleitung zur Bestätigung noch mal schicken",
        "title": "Anleitung zur Bestätigung noch mal schicken"
      },
      "reset_password": {
        "submit": "Mein Passwort zurücksetzen",
        "title": "Passwort vergessen?"
      },
      "sign_up": {
        "submit": "Registrieren",
        "title": "Registrieren"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Entsperrungsanweisung erneut senden",
        "title": "Entsperrungsanweisung erneut senden"
      },
      "username": {
        "title": "Benutzername"
      }
    },
    "download": "Herunterladen:",
    "dropdown_actions": {
      "button_label": "Aktionen"
    },
    "edit": "Bearbeiten",
    "edit_model": "%{model} bearbeiten",
    "empty": "Leer",
    "equal_to": "Gleich",
    "filter": "Filtern",
    "filters": {
      "buttons": {
        "clear": "Filter entfernen",
        "filter": "Filtern"
      },
      "predicates": {
        "contains": "Enthält",
        "ends_with": "Endet mit",
        "equals": "Gleich",
        "greater_than": "Größer als",
        "less_than": "Kleiner als",
        "starts_with": "Beginnt mit"
      }
    },
    "greater_than": "Größer als",
    "has_many_delete": "Löschen",
    "has_many_new": "%{model} hinzufügen",
    "has_many_remove": "Entfernen",
    "index_list": {
      "block": "Liste",
      "blog": "Blog",
      "grid": "Gitter",
      "table": "Tabelle"
    },
    "less_than": "Kleiner als",
    "logout": "Abmelden",
    "main_content": "Bitte implementieren Sie %{model}#main_content, um Inhalte anzuzeigen.",
    "new_model": "%{model} erstellen",
    "next": "Weiter",
    "pagination": {
      "empty": "Keine %{model} gefunden",
      "entry": {
        "one": "Eintrag",
        "other": "Einträge"
      },
      "multiple": "Zeige %{model} <b>%{from}&nbsp;–&nbsp;%{to}</b> von <b>%{total}</b>",
      "multiple_without_total": "Zeige %{model} <b>%{from}&nbsp;–&nbsp;%{to}</b>",
      "one": "Zeige <b>1</b> %{model}",
      "one_page": "Zeige <b>alle %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Zurück",
    "search_field": "Durchsuche %{field}",
    "search_status": {
      "current_filters": "Aktuelle Filter:",
      "headline": "Anwendungsbereich:",
      "no_current_filters": "Keine"
    },
    "sidebars": {
      "filters": "Filter",
      "search_status": "Suchstatus"
    },
    "status_tag": {
      "no": "Nein",
      "yes": "Ja"
    },
    "unsupported_browser": {
      "headline": "ActiveAdmin unterstützt nicht länger den Internet Explorer in Version 8 oder niedriger.",
      "recommendation": "Wir empfehlen die Nutzung von <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, oder <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "Wenn sie IE 9 oder neuer benutzen, stellen sie sicher das sie den <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">\"Kompatibilitätsansicht\" ausgeschaltet</a> haben."
    },
    "update_model": "%{model} bearbeiten",
    "view": "Anzeigen"
  },
  "activerecord": {
    "attributes": {
      "admin_user": {
        "created_at": "Erstellt am",
        "current_sign_in_at": "Aktuell angemeldet seit",
        "current_sign_in_ip": "Aktuelle IP-Adresse",
        "email": "E-Mail",
        "encrypted_Password": "Verschlüsseltes Passwort",
        "id": "ID",
        "last_sign_in_at": "Letzter Login am",
        "last_sign_in_ip": "Letzte IP-Adresse",
        "remember_created_at": "Passwort merken seit",
        "reset_password_sent_at": "Passwort Reset Anweisungen gesendet am",
        "reset_password_token": "Passwort Reset Token",
        "sign_in_count": "Anzahl Logins",
        "updated_at": "Aktualisiert am"
      },
      "poi": {
        "address": "Adresse",
        "address_city": "Stadt",
        "address_housenumber": "Nummer",
        "address_postcode": "Postleitzahl",
        "address_street": "Straße",
        "name": "Name",
        "note": "Anmerkung",
        "phone": "Telefon",
        "type": "Typ",
        "website": "Website"
      },
      "user": {
        "first_name": "Vorname",
        "last_name": "Nachname",
        "privacy_policy": "Datenschutzbestimmungen",
        "terms": "Nutzungsbedingungen"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "muss akzeptiert werden",
        "blank": "muss ausgefüllt werden",
        "confirmation": "stimmt nicht mit der Bestätigung überein",
        "empty": "muss ausgefüllt werden",
        "equal_to": "muss genau %{count} sein",
        "even": "muss gerade sein",
        "exclusion": "ist nicht verfügbar",
        "greater_than": "muss größer als %{count} sein",
        "greater_than_or_equal_to": "muss größer oder gleich %{count} sein",
        "inclusion": "ist nicht in der Liste aufgeführt",
        "invalid": "ist nicht gültig",
        "less_than": "muss kleiner als %{count} sein",
        "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
        "not_a_number": "ist keine Zahl",
        "not_equal_to": "darf nicht genau %{count} sein",
        "odd": "muss ungerade sein",
        "record_invalid": "Gültigkeitsprüfung ist fehlgeschlagen: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "ist bereits vergeben",
        "too_long": "ist zu lang (maximal %{count} Zeichen)",
        "too_short": "ist zu kurz (mindestens %{count} Zeichen)",
        "wrong_length": "hat die falsche Länge (muss genau %{count} Zeichen haben)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "muss ausgefüllt werden, wenn ein Passwort gesetzt wird"
            },
            "privacy_policy": {
              "accepted": "müssen akzeptiert werden"
            },
            "terms": {
              "accepted": "müssen akzeptiert werden"
            }
          }
        },
        "user_session": {
          "email": "E-Mail-Adresse",
          "password": "Passwort",
          "remember_me": "Angemeldet bleiben"
        }
      },
      "template": {
        "body": "Bitte überprüfen Sie die folgenden Felder:",
        "header": {
          "one": "Konnte dieses %{model}-Objekt nicht speichern, da Fehler auftrat.",
          "other": "Konnte dieses %{model}-Objekt nicht speichern, da %{count} Fehler auftraten."
        }
      }
    },
    "models": {
      "admin_user": {
        "one": "Administrator",
        "other": "Administratoren"
      },
      "user": "Benutzer"
    }
  },
  "apipie": {
    "api_documentation": "API-Dokumentation",
    "comments_powered_by_disqus": "Kommentarfunktion bereitgestellt durch %{disqus}",
    "description": "Beschreibung",
    "enable_javascript_html": "Aktiviere JavaScript für den Aufruf von %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Fehler",
    "examples": "Beispiele",
    "follow_instructions_href": "weitere Anweisungen",
    "follow_instructions_html": "Folge %{href} für eine Anleitung zur Beschreibung der Controller.",
    "goto_homepage_href": "%{app_name} API-Dokumentation",
    "goto_homepage_html": "Öffne %{href}",
    "header_name": "Name der Kopfzeile",
    "headers": "Kopfzeilen",
    "metadata": "Metadaten",
    "method_not_found_html": "Methode %{method} für %{resource} nicht gefunden.",
    "nil_allowed": "nil erlaubt",
    "no_docs_found": "Keine Dokumentation gefunden",
    "no_docs_found_descr": "Es wurde keine Dokumentation für die API gefunden.",
    "oops": "Upps!!",
    "optional": "optional",
    "param_name": "Parametername",
    "params": "Parameter",
    "required": "verpflichtend",
    "resource": "Ressource",
    "resource_not_found_html": "Ressource %{resource} nicht gefunden.",
    "resources": "Ressourcen",
    "supported_formats": "Unterstützte Formate"
  },
  "application": {
    "require_no_user": {
      "notice": "Du bist bereits eingeloggt…"
    },
    "require_user": {
      "notice": "Du musst dich anmelden, um diese Seite zu sehen."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Neuen Ort hinzufügen",
      "edit": "Ort bearbeiten"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "schließen",
    "skip": "Überspringen"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Bitte schreibe uns in Deutsch oder Englisch.",
        "flash_after_submit": "Vielen Dank, dass du uns kontaktiert hast! Unser Support-Team meldet sich so bald wie möglich bei dir zurück.",
        "header_text_html": "Manchmal läuft etwas nicht rund. Bitte schaue dir unsere <a href=\"https://news.wheelmap.org/faq/\">häufig gestellten Fragen und Antworten (FAQs)</a> an, bevor du uns schreibst. Wenn du dort keine Hilfe für dein Problem findest, beantworte bitte die folgenden drei Fragen, damit wir das Problem lösen können.",
        "note": "Bitte beachte: Die Wheelmap ist ein Projekt eines gemeinnützigen Vereins und wir haben nur begrenzte Ressourcen, um die App weiterzuentwickeln.",
        "questions": {
          "a": "Was genau hast du gemacht?",
          "b": "Welches Ergebnis hättest du erwartet?",
          "c": "Was ist stattdessen passiert?"
        },
        "submit_button": "Abschicken",
        "title": "Problem melden"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "So",
      "Mo",
      "Di",
      "Mi",
      "Do",
      "Fr",
      "Sa"
    ],
    "abbr_month_names": [
      "",
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez"
    ],
    "day_names": [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%e. %B %Y",
      "short": "%e. %b"
    },
    "month_names": [
      "",
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
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
        "one": "etwa 1 Stunde",
        "other": "etwa %{count} Stunden"
      },
      "about_x_months": {
        "one": "etwa 1 Monat",
        "other": "etwa %{count} Monate"
      },
      "about_x_years": {
        "one": "etwa 1 Jahr",
        "other": "etwa %{count} Jahre"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "eine halbe Minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "mehr als 1 Jahr",
        "other": "mehr als %{count} Jahre"
      },
      "x_days": {
        "one": "1 Tag",
        "other": "%{count} Tage"
      },
      "x_minutes": {
        "one": "1 Minute",
        "other": "%{count} Minuten"
      },
      "x_months": {
        "one": "1 Monat",
        "other": "%{count} Monate"
      },
      "x_seconds": {
        "one": "1 Sekunde",
        "other": "%{count} Sekunden"
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
      "confirmed": "Dein E-Mail-Adresse wurde erfolgreich bestätigt.",
      "link": "Du hast keine Bestätigung mit Instruktionen erhalten?",
      "send_instructions": "Du bekommst in wenigen Minuten eine E-Mail mit einem Link, um deine E-Mail-Adresse zu bestätigen.",
      "send_paranoid_instructions": "Wenn dein Account existiert, erhältst du in einigen Minuten eine E-Mail mit einer Anleitung zur Bestätigung deines Accounts."
    },
    "destroy": {
      "confirm": "Bist du dir sicher?",
      "headline": "Account löschen",
      "link": "Jetzt löschen"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Aktuelles Passwort <i>(wir brauchen es, um deine Änderungen zu bestätigen)</i>",
          "email": "E-Mail",
          "password": "Passwort <i>(leer lassen, wenn du es nicht ändern möchtest)</i>",
          "password_confirmation": "Passwort wiederholen"
        },
        "submit": "Änderungen speichern"
      },
      "headline": "Benutzerkonto verwalten"
    },
    "failure": {
      "admin_user": {
        "invalid": "Benutzername oder Kennwort nicht korrekt.",
        "not_found_in_database": "Benutzername existiert nicht, bitte versuchen Sie eine andere E-Mail-Adresse.",
        "unauthenticated": "Bitte melden Sie sich als Administrator an."
      },
      "already_authenticated": "Du bist bereits angemeldet.",
      "inactive": "Dein Account wurde bisher nicht aktiviert.",
      "invalid": "Ungültige Email oder ungültiges Kennwort.",
      "invalid_token": "Ungültiger Authentifizierungstoken.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Dein Konto ist gesperrt.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Deine Sitzung ist abgelaufen, bitte melde dich erneut an.",
      "unauthenticated": "Du musst dich anmelden oder registrieren um fortzufahren.",
      "unconfirmed": "NEU: Bitte bestätige einmalig dein Konto um fortzufahren. Dazu haben wir Dir eine E-Mail mit einem Link geschickt. Falls du diese nicht vorliegen hast hast, klicke bitte am Ende der Seite auf 'Keine Bestätigungsmail bekommen'."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Bitte klicke auf den Link, den wir dir gerade an deine E-Mail Adresse gesendet haben. Falls du keine E-Mail erhalten hast, schaue bitte in deinem Spam-Ordner nach. Wenn sie dort nicht ist, wiederhole bitte den Anmeldevorgang.",
        "subject": "Noch einen Schritt zur Aktivierung deines Benutzerkontos"
      },
      "reset_password_instructions": {
        "subject": "Anleitung zum Neu setzen deines Passworts"
      },
      "unlock_instructions": {
        "subject": "Anleitung zum Entsperren deines Benutzerkontos"
      }
    },
    "mandatory": "* Pflichtfeld",
    "omniauth_callbacks": {
      "failure": "Authorisierung mit %{kind} fehlgeschlagen. Fehler: \"%{reason}\". ",
      "permission_missing": "Du hast nicht die erforderlichen Berechtigungen erteilt.",
      "success": "Erfolgreich authorisiert mit %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-Mail"
        },
        "submit": "Passwort neu setzen"
      },
      "headline": "Passwort vergessen?"
    },
    "password_reset": {
      "email": {
        "comment": "Solltest du diese Anfrage nicht gestellt haben, ignoriere diese E-Mail einfach.<br/>Dein Passwort wird nicht geändert, bis du auf den oben angegebenen Link klickst und ein neues Passwort setzt.",
        "headline": "Willkommen %{email}",
        "link": "Mein Passwort ändern",
        "text": "Wir erhielten eine Anfrage zum Ändern deines Passworts. Wenn du das warst, bestätige dies bitte per Klick auf folgenden Link - andernfalls ignoriere dies bitte."
      },
      "form": {
        "labels": {
          "password": "Neues Passwort",
          "password_confirmation": "Passwort wiederholen"
        },
        "submit": "Passwort neu setzen"
      },
      "headline": "Passwort zurücksetzen"
    },
    "passwords": {
      "link": "Passwort vergessen?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Benutzerkonto entsperren kannst.",
      "send_paranoid_instructions": "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Passwort neu setzen kannst.",
      "updated": "Dein Passwort wurde erfolgreich geändert. Du bist nun angemeldet.",
      "updated_not_active": "Dein Passwort wurde erfolgreich geändert."
    },
    "registrations": {
      "destroyed": "Dein Benutzerkonto wurde efolgreich gelöscht.",
      "inactive_signed_up": "Anmeldung erfolgreich. Aber wir konnten dich nicht einloggen. Grund: \"%{reason}\"",
      "link": "Registrieren",
      "reasons": {
        "inactive": "inaktiv",
        "locked": "gesperrt",
        "unconfirmed": "unbestätigt"
      },
      "signed_up": "Deine Anmeldung war erfolgreich. Eine Bestätigungsmail erhältst du in Kürze.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Dein Benutzerkonto wurde aktualisiert."
    },
    "sessions": {
      "admin_user": {
        "signed_in": "Erfolgreich als Administrator angemeldet."
      },
      "inactive": "Dein Benutzerkonto wurde noch nicht aktiviert.",
      "invalid": "Ungültige E-Mail oder Passwort.",
      "invalid_token": "Ungültiger Authentizitätstoken. Bitte lösche die Cookies in deinem Browser und versuche es noch einmal.",
      "link": "Login",
      "locked": "Dein Benutzerkonto ist gesperrt.",
      "new": {
        "no_osm_account": "Nicht bei OpenStreetMap?",
        "osm_promo_text": "Wheelmap basiert auf den Geodaten von OpenStreetMap (OSM). OpenStreetMap ist eine freie und weltweite Karte. Sie ist wie die Wikipedia für Karte. Um Orte ändern oder neue anlegen zu können, benötigst du einen OpenStreetMap Account, mit dem du eingeloggt sein musst.",
        "promo_text_thank_you": "Vielen Dank für deine Unterstützung!",
        "sign_in_with": "Einloggen mit %{kind}",
        "sign_up_with_osm": "Registriere dich hier.",
        "wheelmap_promo_text": "Mit deinem Wissen über rollstuhlgerechte Orte kannst du helfen, dass mobilitätseingeschränkte Menschen ihren Tag planbarer gestalten können. Außerdem werden so die Daten der OpenStreetMap detailreicher."
      },
      "signed_in": "Login erfolgreich.",
      "signed_out": "Logout erfolgreich.",
      "timeout": "Deine Sitzung ist abgelaufen, bitte melde dich erneut an.",
      "unauthenticated": "Bitte logge dich ein oder registriere dich neu, um fortzufahren.",
      "unconfirmed": "Bitte bestätige zuerst dein Benutzerkonto, um fortzufahren. Um es zu Bestätigen klicke bitte auf den Link, den wir dir per E-Mail geschickt haben."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-Mail",
          "password": "Passwort",
          "remember_me": "Eingeloggt bleiben?"
        },
        "submit": "Login"
      },
      "headline": "Login"
    },
    "sign_out": {
      "headline": "Logout"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Mein Benutzerkonto bestätigen.",
        "please_confirm": "Du kannst deine E-Mail Adresse bestätigen indem du folgenden Link klickst:",
        "welcome": "Willkommen %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-Mail",
          "password": "Passwort",
          "password_confirmation": "Passwort wiederholen",
          "wants_newsletter": "Ja, haltet mich über Wheelmap auf dem Laufenden."
        },
        "submit": "Registrieren"
      },
      "headline": "Registrieren"
    },
    "unlocks": {
      "link": "Du hast keine Bestätigung mit Instruktionen erhalten?",
      "send_instructions": "Du bekommst in wenigen Minuten eine E-Mail mit Informationen wie du dein Benutzerkonto entsperren kannst.",
      "send_paranoid_instructions": "Wenn dein Account existiert, erhältst du in einigen Minuten eine E-Mail mit einer Anleitung zum Entsperren deines Accounts.",
      "unlocked": "Dein Benutzerkonto wirde erfolgreich entsperrt. Du bist jetzt eingeloggt."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "muss akzeptiert werden",
      "already_confirmed": "wurde bereits bestätigt",
      "blank": "muss ausgefüllt sein",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "stimmt nicht mit der Bestätigung überein",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "muss ausgefüllt sein",
      "equal_to": "muss genau %{count} sein",
      "even": "muss gerade sein",
      "exclusion": "ist nicht verfügbar",
      "expired": "ist abgelaufen, bitte neu anfordern",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "muss größer als %{count} sein",
      "greater_than_or_equal_to": "muss größer oder gleich %{count} sein",
      "inclusion": "ist kein gültiger Wert",
      "invalid": "ist nicht gültig",
      "less_than": "muss kleiner als %{count} sein",
      "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "ist keine Zahl",
      "not_an_integer": "muss eine Zahl sein",
      "not_found": "nicht gefunden",
      "not_locked": "war nicht gesperrt",
      "not_saved": {
        "one": "Ein Fehler hat das Speichern von %{resource} verweigert:",
        "other": "%{count} Fehler: %{resource} verweigerte das Speichern:"
      },
      "odd": "muss ungerade sein",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "ist bereits vergeben",
      "too_long": "ist zu lang (nicht mehr als %{count} Zeichen)",
      "too_short": "ist zu kurz (nicht weniger als %{count} Zeichen)",
      "wrong_length": "hat die falsche Länge (muss genau %{count} Zeichen haben)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Webseiten-URL ist nicht korrekt."
        }
      }
    },
    "template": {
      "body": "Bitte überprüfen Sie die folgenden Felder:",
      "header": {
        "one": "Konnte dieses %{model}-Objekt nicht speichern, da Fehler auftrat.",
        "other": "Konnte dieses %{model}-Objekt nicht speichern, da %{count} Fehler auftraten."
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Du kannst die Markierung jederzeit selbst ändern. Einfach die richtige Markierung wählen und \"Speichern\" - fertig!",
      "1": "Als angemeldeter Nutzer kannst du alle Angaben zu einem Ort selbst ändern. Klicke auf \"Bearbeiten\" und korrigiere oder ergänze die Angaben.",
      "2": "Du kannst zusätzliche Informationen (z.B. \"Dieser Ort hat eine Rampe\") als Hinweis hinterlassen. Klicke auf \"Bearbeiten\" und \"Kommentar verfassen\"."
    },
    "headline": "Gibt es ein Problem mit diesem Ort?",
    "questions": {
      "0": "Die Markierung ist falsch.",
      "1": "Angaben zum Ort sind falsch bzw. fehlen.",
      "2": "Ich habe mehr Informationen zum Ort."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} wurde erfolgreich angelegt."
      },
      "destroy": {
        "alert": "%{resource_name} konnte nicht entfernt werden.",
        "notice": "%{resource_name} wurde erfolgreich entfernt."
      },
      "update": {
        "notice": "%{resource_name} wurde erfolgreich aktualisiert."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Bild wurde erfolgreich entfernt."
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Ja",
    "show_limited_accessible_places": "Teilweise rollstuhlgerecht",
    "show_places_without_status": "Status unbekannt",
    "show_unaccessible_places": "Nicht Rollstuhlgerecht"
  },
  "formtastic": {
    "cancel": "Abbrechen",
    "create": "%{model} anlegen",
    "hints": {
      "email": "Wir behandeln Deine Adresse vertraulich.",
      "lat": "Bewegen Sie den Marker auf der Karte",
      "osm_username": "Noch nicht Mitglied? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Openstreetmap Benutzerkonto anlegen</a>",
      "password": "(leer lassen, wenn du es nicht ändern möchtest)",
      "phone": "Beispiel: +49 30 12345678",
      "website": "Beispiel: http://www.example.com"
    },
    "labels": {
      "category": "Kategorie:",
      "centralkey": "Zentralschlüssel:",
      "city": "Ort:",
      "create": "Einen Ort anlegen",
      "email": "E-Mail",
      "finish": "Fertigstellen",
      "housenumber": "Nr:",
      "lat": "Breitengrad",
      "lon": "Längengrad",
      "name": "Name:",
      "osm_password": "OpenStreetMap Passwort",
      "osm_username": "OpenStreetMap Account Name",
      "password": "Passwort",
      "password_confirmation": "Passwort wiederholen",
      "phone": "Telefon:",
      "postcode": "PLZ:",
      "privacy_policy": "Ich stimme Ziffer 1 und 2 der Datenschutzbestimmungen zu.",
      "reset": "Reset",
      "save": "Speichern",
      "street": "Straße:",
      "terms": "Ich stimme den Nutzungsbedingungen zu.",
      "type": "Typ:",
      "website": "Webseite:",
      "wheelchair": "Rollstuhlgerecht?",
      "wheelchair_description": "Info zu Barrierefreiheit:",
      "wheelchair_toilet": "Rollstuhlgerechtes WC:"
    },
    "no": "Nein",
    "required": "Pflichtfeld",
    "reset": "%{model} zurücksetzen",
    "submit": "Abschicken",
    "titles": {
      "basic": "Basisdaten",
      "optional": "Mehr Infos <span class=\"addition\">(alle Felder sind optional)</span>"
    },
    "update": "%{model} aktualisieren",
    "yes": "Ja"
  },
  "global": {
    "form_validation_error": "Bitte beachte die unten angezeigten Fehlermeldungen."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org ist eine Onlinekarte zum Finden, Suchen und Markieren von rollstuhlgerechten Orten. Mach mit, indem du z.B. Bars, Restaurants, Kinos und Supermärkte markierst!",
      "homepage": "Startseite",
      "keywords": "rollstuhl gerechte Orte finden suchen markieren",
      "search": "Suche",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "News",
      "choose_language": "Sprache wählen",
      "contact": "Kontakt",
      "faq": "FAQ",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "Wie trage ich Orte ein?",
      "imprint": "Impressum",
      "logged_in_as": "Eingeloggt als:",
      "login": "Login",
      "logout": "Logout",
      "map": "Karte",
      "newsletter": "Newsletter",
      "press": "Presse",
      "profile": "Profil",
      "projects": "Mitmachen",
      "report_problem": "Problem melden",
      "suggestions": "Anregungen",
      "travelguide": "Reiseführer",
      "what_is_barrier_free": "Was bedeutet „rollstuhlgerecht“?",
      "what_is_wheelmap": "Was ist Wheelmap?"
    },
    "searchbar": {
      "add_place": "Ort hinzufügen",
      "find": "Finden",
      "placeholder": "Nach Ort suchen",
      "title_add_place": "Jetzt einen neuen Ort an dieser Stelle hinzufügen"
    },
    "tagline": "Wheelmap logo",
    "title": "Rollstuhlgerechte Orte finden",
    "toolbar": {
      "categories": "Kategorien"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Zeige %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> von insgesamt <b>%{total}</b>"
      },
      "one_page": {
        "display_entries": {
          "one": "Zeige <b>%{count}</b> %{entry_name}",
          "other": "Zeige <b>alle %{count}</b> %{entry_name}",
          "zero": "Kein %{entry_name} gefunden"
        }
      }
    },
    "select": {
      "prompt": "Bitte auswählen"
    },
    "submit": {
      "create": "%{model} anlegen",
      "submit": "%{model} speichern",
      "update": "%{model} aktualisieren"
    }
  },
  "home": {
    "index": {
      "embed_link": "Auf Wheelmap.org anzeigen",
      "filter": {
        "category": "Kategorie wählen",
        "deselect_all": "Alle deaktivieren",
        "select_all": "Alle auswählen",
        "wheelchair": "Rollstuhlgerecht?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorieren",
          "upgrade": "Browser aktualisieren"
        },
        "warning": {
          "headline": "Entschuldigung!",
          "message": "Offenbar verwendest Du Internet Explorer. Wheelmap benötigt einen standard-konformen Browser, um korrekt zu funktionieren. Bitte verwende Firefox, Chrome, Safari oder Opera."
        }
      },
      "link": {
        "node": {
          "create": "Neuen Ort hinzufügen"
        }
      },
      "overlay": {
        "button": "Okay, los geht's!",
        "categories": "Kategorien filtern",
        "filter": "Ergebnisse auf der Karte nach Rollstuhlgerechtigkeit filtern",
        "headline": "Mit Wheelmap.org kannst Du rollstuhlgerechte Orte finden und markieren - weltweit und kostenlos. So einfach gehts:",
        "lookup": "Direkt Orte finden",
        "secondary_headline": "Das Ampelsystem zum Markieren der Rollstuhlgerechtigkeit:"
      },
      "popup": {
        "form": {
          "limited": "Teilweise rollstuhlgerecht",
          "no": "Nicht Rollstuhlgerecht",
          "save": "Speichern",
          "unknown": "Status unbekannt",
          "yes": "Voll Rollstuhlgerecht"
        },
        "help": "Rollstuhlgerecht? (Hilfe)",
        "more": "mehr ..."
      },
      "zoom_alert": "Zoome näher heran, um mehr Orte zu sehen"
    }
  },
  "how?": "Wie?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Alle teilweise rollstuhlgerechten Orte %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "Alle nicht rollstuhlgerechten %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "Alle %{type} in %{city} mit unbekanntem Rollstuhlstatus (%{count})"
        },
        "yes": {
          "headline": "Alle rollstuhlgerechten %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Ein Projekt der Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Wähle eine Kategorie"
    },
    "node": {
      "info_edit_position": "So wie auf der Karte oben würde der Ort auf der Wheelmap aussehen. Sollte der Marker nicht an der richtigen Stelle sitzen, kannst du ihn <a href=\"%{url}\">auf der OpenStreetMap neu positionieren.</a>",
      "mail": {
        "body": "(Bitte schreibe nur in Englisch oder Deutsch.)\n\nHi Sozialhelden,\netwas ist falsch mit dem Ort: %{url}\n\nDas Problem ist:",
        "subject": "[Wheelmap] Problem mit %{headline}"
      }
    },
    "node_type": {
      "prompt": "Wähle einen Typ"
    }
  },
  "node": {
    "address": {
      "city": "%{postcode} %{city}",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Website:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, die Angaben sind noch unvollständig oder inkorrekt.",
        "successfull": "Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert."
      }
    },
    "edit": {
      "header": {
        "title": "Ort bearbeiten: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Abbrechen"
      }
    },
    "errors": {
      "default": "Oops, das ist was schief gegangen. Wir wurden aber darüber informiert!",
      "not_authorized": "Authentifizierung fehlgeschlagen",
      "not_available": "Leider steht diese Seite zur Zeit nicht zur Verfügung",
      "not_existent": "Leider ist dieser Ort nicht mehr da",
      "not_found": "Leider konnte die Seite nicht gefunden werden",
      "param_missing": "Bitte einen Suchbegriff eingeben."
    },
    "flash": {
      "authorize_wheelmap": "Um Daten zu ändern benötigst Du einen OpenStreetMap Account."
    },
    "new": {
      "form": {
        "legend": "Lage des Ortes",
        "location": "Bitte klicke in der Karte auf die Stelle, wo sich der Ort befindet!",
        "section": {
          "accessibility": {
            "name": "Rollstuhlgerechtigkeit",
            "title": "Informationen zur Rollstuhlgerechtigkeit"
          },
          "address": {
            "help": "Du kannst den Marker auf der Karte auf die korrekte Position verschieben.",
            "name": "Adresse",
            "title": "Wo liegt der Ort?"
          },
          "contact": {
            "name": "Kontakt",
            "title": "Weitere Kontaktmöglichkeiten"
          },
          "name_category": {
            "name": "Name und Ortstyp",
            "title": "Gib uns erste Informationen zu deinem neuen Ort:"
          },
          "overview": {
            "title": "Sind alle Eingaben korrekt?"
          },
          "similar_nodes": {
            "empty": "Es wurden keine ähnlichen Orte gefunden.",
            "go_edit": "Mit diesem Ort fortfahren",
            "go_new": "Es ist keiner der oben genannten Orte…",
            "name": "Ähnliche Orte",
            "title": "Wir haben ähnliche Orte in der Nähe gefunden. Ist es einer der folgenden Orte?"
          }
        },
        "title": "Ort hinzufügen"
      },
      "header": {
        "title": "Neuer Ort | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Abbrechen"
      }
    },
    "node": {
      "link": {
        "claim": "Du arbeitest hier?",
        "edit_node": "Ort bearbeiten",
        "report_bug": "Problem melden"
      }
    },
    "node_data": {
      "address": "Adresse:",
      "contact_details": "Kontaktdaten:"
    },
    "node_edit": {
      "details": "Details",
      "edit": "Bearbeiten"
    },
    "node_map": {
      "map": "Karte:"
    },
    "node_nearby": {
      "places_nearby": "Orte in der Nähe:"
    },
    "node_note": {
      "comment": "Nutzerkommentar:"
    },
    "node_photos": {
      "add": "Hinzufügen",
      "alert": "Bitte beachte: Auf dem Foto sollte der Eingangsbereich des Ortes gut zu erkennen sein. Soll heißen: Gibt es Stufen am Eingang? Wie hoch ist die Stufe ungefähr? Wie breit ist die Tür? Das Foto muss das Format JPG oder PNG haben. Die maximale Größe eines Fotos darf 10 MB nicht überschreiten.",
      "photos_of_this_place": "Fotos von diesem Ort:",
      "upload": "Hochladen"
    },
    "node_similar": {
      "similar": "Ähnliche Orte: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Rollstuhlgerechtes WC:",
      "premium": "%{name} sagt: dieser Ort ist",
      "wheelchair_accessibility": "Rollstuhlgerechtigkeit:"
    },
    "node_streetview": {
      "streetview": "Straßenansicht:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Finde auf Wheelmap.org heraus, ob der Ort rollstuhlgerecht ist. Oder füge Informationen und Bilder zu dem Ort hinzu.",
          "title": "Dieser Ort ist auf Wheelmap.org: %{name}"
        },
        "title": "Ort: %{node} | wheelmap.org"
      },
      "link": {
        "back": "zurück",
        "large_map": "Ansicht vergrößern",
        "listing": "Alle Orte vom Typ '%{type}' in %{city}",
        "upload": "Bild hochladen"
      },
      "more_data_from": "Zu diesem Ort gibt es weitere Daten, qualifiziert von:",
      "share": {
        "email": "E-Mail",
        "facebook": "Facebook",
        "text": "Ich habe diesen Ort auf Wheelmap gefunden: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "in Openstreetmap anzeigen"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, die Angaben sind noch unvollständig oder inkorrekt.",
        "successfull": "Vielen Dank, der Eintrag wurde gespeichert und wird demnächst aktualisiert."
      }
    },
    "update_wheelchair": {
      "successfull": "Der Status des Ortes \"%{name}\" wurde in \"%{status}\" geändert und wird demnächst aktualisiert."
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
        "unit": "€"
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
          "billion": "Milliarde",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Tausend",
          "trillion": "Trillion",
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
        "headline": "Bevor du auf wheelmap.org Orte bearbeiten bzw. anlegen kannst, musst du dein Benutzerkonto mit OpenStreetMap verbinden."
      }
    },
    "callback": {
      "notice": "Dein Benutzerkonto wurde erfoglreich mit dem OpenStreetMap-Benutzerkonto von '%{user}' verbunden."
    }
  },
  "or": "oder",
  "place": {
    "one": "%{count} Ort",
    "other": "%{count} Orte"
  },
  "poi": {
    "category": {
      "accommodation": "Unterkunft",
      "education": "Bildung",
      "food": "Essen & Trinken",
      "government": "Behörden & Botschaften",
      "health": "Gesundheit",
      "leisure": "Freizeit",
      "misc": "Sonstiges",
      "money_post": "Bank / Post",
      "public_transfer": "Verkehr",
      "shopping": "Einkaufen",
      "sport": "Sport",
      "tourism": "Tourismus",
      "unknown": "Unbekannt"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandhotel",
        "bed_and_breakfast": "Zimmer mit Frühstück",
        "camp_site": "Zeltplatz",
        "caravan_site": "Campingplatz",
        "chalet": "Ferienhaus",
        "dormitory": "Wohnheim",
        "guest_house": "Pension",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Hochschule",
        "driving_school": "Fahrschule",
        "kindergarten": "Kindertagesstätte",
        "library": "Bibliothek",
        "museum": "Museum",
        "school": "Schule",
        "university": "Universität"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Biergarten",
        "cafe": "Café",
        "drinking_water": "Trinkwasser",
        "fast_food": "Fast Food",
        "ice_cream": "Eisdiele",
        "pub": "Pub",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Gericht",
        "embassy": "Botschaft",
        "employment_agency": "Agentur für Arbeit, Arbeitsvermittlung",
        "government": "Amt/Behörde",
        "police": "Polizei",
        "public_building": "Öffentliches Gebäude",
        "townhall": "Rathaus"
      },
      "health": {
        "alternative": "Alternativmediziner",
        "dentist": "Zahnarzt",
        "doctors": "Arzt",
        "hearing_aids": "Hörgeräteakustiker",
        "hospital": "Krankenhaus",
        "medical_supply": "Sanitätshaus",
        "occupational_therapist": "Ergotherapeut",
        "pharmacy": "Apotheke",
        "physiotherapist": "Physiotherapeut",
        "psychotherapist": "Psychotherapeut",
        "social_facility": "Soziale Einrichtung",
        "speech_therapist": "Logopäde",
        "veterinary": "Tierarzt"
      },
      "leisure": {
        "arena": "Stadion",
        "brothel": "Bordell",
        "casino": "Spielcasino",
        "cinema": "Kino",
        "community_centre": "Stadthalle / Gemeindezentrum",
        "gallery": "Galerie",
        "massage": "Massage-Studio",
        "nightclub": "Nachtclub",
        "playground": "Spielplatz",
        "sauna": "Sauna",
        "stripclub": "Stripclub",
        "tattoo": "Tattoostudio",
        "theatre": "Theater",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Verein/Verband",
        "company": "Unternehmen (Büro)",
        "estate_agent": "Immobilienmakler",
        "insurance": "Versicherung",
        "lawyer": "Anwalt",
        "ngo": "Nichtregierungsorganisation",
        "place_of_worship": "Gotteshaus",
        "political_party": "Partei-Büro",
        "toilets": "Öffentliche Toilette"
      },
      "money_post": {
        "atm": "Geldautomat",
        "bank": "Bank",
        "bureau_de_change": "Geldwechselbüro",
        "post_box": "Briefkasten",
        "post_office": "Postfiliale"
      },
      "public_transfer": {
        "aerodrome": "Flughafen",
        "bicycle_parking": "Fahrradparkplatz",
        "bicycle_rental": "Fahrradvermietung",
        "boatyard": "Hafen",
        "bus_station": "Busbahnhof",
        "bus_stop": "Bushaltestelle",
        "cable_car": "Seilbahnstation",
        "car_rental": "Autovermietung",
        "car_sharing": "Carsharing",
        "chair_lift": "Sessellift",
        "ferry": "Fähre",
        "ferry_terminal": "Fähranlegestelle",
        "fuel": "Tankstelle",
        "halt": "Haltestelle",
        "light_rail": "S-Bahn",
        "parking": "Parkplatz/Parkhaus",
        "parking_aisle": "Fahrweg auf Parkplätzen",
        "platform": "Bahnsteig",
        "station": "Bahnhof",
        "subway_entrance": "U-Bahn Eingang",
        "terminal": "Flughafenterminal",
        "tram_stop": "Straßenbahnhaltestelle"
      },
      "shopping": {
        "alcohol": "Spirituosen",
        "antiques": "Antiquitätenladen",
        "art": "Kunsthandel",
        "bakery": "Bäckerei",
        "beauty": "Schönheitssalon",
        "beverages": "Getränkemarkt",
        "bicycle": "Fahrradladen",
        "books": "Buchhandlung",
        "butcher": "Fleischer",
        "car_repair": "Autowerkstatt",
        "car_shop": "Autohandel",
        "chemist": "Drogerie",
        "clothes": "Bekleidung",
        "computer": "Computer",
        "confectionery": "Süßwarengeschäft",
        "convenience": "Spätkauf",
        "copyshop": "Copyshop",
        "deli": "Feinkostladen",
        "department_store": "Warenhaus",
        "doityourself": "Baumarkt",
        "dry_cleaning": "Chemische Reinigung",
        "electronics": "Elektronik",
        "erotic": "Sexshop",
        "fabric": "Stoffladen",
        "farm_shop": "Hofladen",
        "florist": "Blumengeschäft",
        "funeral_directors": "Bestattungsinstitut",
        "furniture": "Möbelhaus",
        "garden_centre": "Garden Center",
        "gift": "Souvenir-/Geschenkartikelladen",
        "greengrocer": "Obst-/Gemüsehändler",
        "hairdresser": "Friseur",
        "hardware": "Eisenwarenladen",
        "interior_decoration": "Wohnaccessoires",
        "jewelry": "Juwelier",
        "kiosk": "Kiosk",
        "laundry": "Wäscherei",
        "mall": "Shoppingcenter",
        "mobile_phone": "Handy-Shop",
        "music": "Musik-/Plattenladen",
        "musical_instrument": "Musikinstrumente",
        "newsagent": "Zeitschriftenhändler",
        "optician": "Optiker",
        "organic": "Bio-Laden",
        "outdoor": "Outdoorbedarf",
        "pet": "Zoohandlung",
        "photo": "Foto",
        "second_hand": "Second-Hand",
        "shoes": "Schuhe",
        "sports": "Sportlerbedarf",
        "stationery": "Schreibwaren",
        "supermarket": "Supermarkt",
        "tailor": "Schneiderei",
        "tea": "Teeladen",
        "tobacco": "Tabakladen",
        "toys": "Spielwarenladen",
        "travel_agency": "Reisebüro",
        "variety_store": "Rest-/Sonderpostenmarkt",
        "video": "Videothek"
      },
      "sport": {
        "pitch": "Spielfeld/Sportplatz",
        "sports_centre": "Sportzentrum/-halle",
        "stadium": "Stadion",
        "swimming": "Freibad",
        "swimming_pool": "Schwimmbad"
      },
      "tourism": {
        "archaeological_site": "Archäologische Ausgrabungstätte",
        "arts_centre": "Kulturzentrum",
        "artwork": "Kunstwerk",
        "attraction": "Attraktion",
        "battlefield": "Kampfschauplatz",
        "beach": "Strand",
        "beacon": "Leuchtturm",
        "castle": "Schloss",
        "cave_entrance": "Höhleneingang",
        "information": "Touristeninformation",
        "memorial": "Denkmal",
        "theme_park": "Vergnügungspark",
        "tower": "Turm",
        "viewpoint": "Aussichtspunkt"
      },
      "unknown": {
        "unknown": "Unbekannt"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: verbunden",
          "grant": "Jetzt verbinden",
          "not_connected": "Status: nicht verbunden",
          "revoke": "Verbindung aufheben"
        }
      },
      "headline": "Dein Profil bearbeiten"
    }
  },
  "ransack": {
    "all": "alle",
    "and": "und",
    "any": "beliebige",
    "asc": "aufsteigend",
    "attribute": "Attribut",
    "combinator": "Kombinator",
    "condition": "Bedingung",
    "desc": "absteigend",
    "or": "oder",
    "predicate": "Eigenschaft",
    "predicates": {
      "blank": "ist leer",
      "cont": "enthält",
      "cont_all": "enthält alle",
      "cont_any": "enthält beliebige",
      "does_not_match": "stimmt nicht überein",
      "does_not_match_all": "stimmt nicht mit allen überein",
      "does_not_match_any": "erfüllt ein beliebiger/s nicht",
      "end": "endet mit",
      "end_all": "endet mit allen",
      "end_any": "endet mit beliebigen",
      "eq": "gleicht",
      "eq_all": "gleicht allen",
      "eq_any": "gleicht beliebigen",
      "false": "ist falsch",
      "gt": "größer als",
      "gt_all": "größer als alle",
      "gt_any": "größer als ein beliebiger/s",
      "gteq": "größer oder gleich",
      "gteq_all": "größer oder gleich alle",
      "gteq_any": "größer oder gleich als ein beliebiger/s",
      "in": "in",
      "in_all": "in allen",
      "in_any": "ist nicht in einem beliebigen",
      "lt": "kleiner als",
      "lt_all": "kleiner als alle als alle",
      "lt_any": "kleiner als ein beliebiger/s",
      "lteq": "kleiner oder gleich",
      "lteq_all": "kleiner oder gleich allen",
      "lteq_any": "kleiner oder gleich beliebige",
      "matches": "entspricht",
      "matches_all": "stimmt mit allen überein",
      "matches_any": "stimmt überein mit einem beliebigen",
      "not_cont": "enthält nicht",
      "not_cont_all": "enthält keine/s",
      "not_cont_any": "enthält ein beliebiger/s nicht",
      "not_end": "endet nicht mit",
      "not_end_all": "endet nicht mit allen",
      "not_end_any": "endet nicht mit beliebigen",
      "not_eq": "ungleich",
      "not_eq_all": "ungleich allen",
      "not_eq_any": "ungleich beliebigen",
      "not_in": "nicht in",
      "not_in_all": "nicht in allen",
      "not_in_any": "nicht in beliebige",
      "not_null": "ist nicht null",
      "not_start": "beginnt nicht mit",
      "not_start_all": "beginnt nicht mit allen",
      "not_start_any": "beginnt nicht mit beliebigen",
      "null": "ist null",
      "present": "ist vorhanden",
      "start": "beginnt mit",
      "start_all": "beginnt mit allen",
      "start_any": "beginnt mit beliebigen",
      "true": "ist wahr"
    },
    "search": "suchen",
    "sort": "sortieren",
    "value": "Wert"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Sorry, wir konnten keinen Ort namens \"%{query}\" finden.",
        "hint": {
          "example": "<strong>Beispiel:</strong> Berlin, Deutschland",
          "info": "Unser Suchdienst kann nur nach Adressen und Namen suchen. Ortstypen wie z.B. \"Restaurant\" oder \"Kino\" können über die Suche nicht gefunden werden. Gib deswegen bitte entweder den Namen des Ortes ein oder die Adresse (z.B. Straße oder Stadt).",
          "work_in_progress": "Wir arbeiten daran, dass du bald noch einfacher und intuitiver Orte finden kannst."
        },
        "try_this": {
          "address": "Gib bitte eine <strong>genauere Adresse</strong> ein.",
          "intro": "Versuch doch mal Folgendes:",
          "spell_check": "Überprüfe die <strong>Schreibweise</strong> deiner Eingabe."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} Ergebnis:",
          "other": "%{count} Ergebnisse:"
        }
      },
      "search": {
        "for": "Suche nach \"%{q}\"",
        "not_found": "Es wurden keine Orte gefunden!"
      }
    },
    "timeout": {
      "headline": "Entschuldigung, da lief etwas schief",
      "info": "Unser Suchdienst war kurzzeitig nicht verfügbar.",
      "repeat_search": "Suche wiederholen"
    }
  },
  "splash": {
    "countline": "%{count} Orte wurden schon markiert.",
    "headline": "Jeder kann rollstuhlgerechte Orte eintragen!",
    "start": "Start",
    "step1": "Klicke auf einen Ort, den du kennst.",
    "step2": "Markiere ihn und klicke auf \"speichern\".",
    "step3": "Fertig! Keine Registrierung nötig!",
    "what_is_wheelmap": "Was ist Wheelmap?"
  },
  "statistics": "Statistik",
  "support": {
    "array": {
      "last_word_connector": ", und",
      "sentence_connector": "und",
      "two_words_connector": " und ",
      "words_connector": ","
    },
    "select": {
      "prompt": "Bitte auswählen"
    }
  },
  "time": {
    "am": "vormittags",
    "formats": {
      "default": "%A, %e. %B %Y, %H:%M Uhr",
      "long": "%A, %e. %B %Y, %H:%M Uhr",
      "short": "%e. %B, %H:%M Uhr"
    },
    "pm": "nachmittags"
  },
  "toiletstatus": {
    "no": "Kein Rollstuhlgerechtes WC",
    "unknown": "Status WC unbekannt",
    "what_is": {
      "no": "Durchgangsbreite Tür mind. 90 cm (35 in), Bewegungsflächen mind. 150 cm × 150 cm (59 x59 in), WC-Becken mit größerer Sitzhöhe, Stützklappgriffe o.ä., unterfahrbares Waschbecken.",
      "unknown": "Hilf mit und markiere den Toiletten-Status!",
      "yes": "Durchgangsbreite Tür mind. 90 cm (35 in), Bewegungsflächen mind. 150 cm × 150 cm (59 x59 in), WC-Becken mit größerer Sitzhöhe, Stützklappgriffe o.ä., unterfahrbares Waschbecken."
    },
    "yes": "Rollstuhlgerechtes WC"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Dein Benutzerkonto ist nun freigeschaltet!"
      },
      "error": {
        "notice": "E-Mail-Adresse und Passwort passen nicht zueinander."
      },
      "notice": "Du bist jetzt drin!"
    },
    "destroy": {
      "notice": "Tschüss, bis bald!"
    },
    "new": {
      "email": "E-mail Adresse",
      "login": "Log in",
      "login_with_twitter": "Mit Twitter einloggen",
      "password": "Passwort",
      "remember_me": "Eingeloggt bleiben"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Fast geschafft! Jetzt noch den Wheelmap-Account fertigstellen:",
        "set_password_for_mobile": "Du hast Dich erfolgreich bei OpenStreetMap angemeldet. Gebe jetzt eine Email-Adresse an, die Wheelmap verwenden soll, um Dich auf den laufenden zu halten über Deine Aktivitäten (z.B. die Anzahl der von Dir markierten Orte). Du kannst diese Information auf Deinem \"Profil\" abrufen.  ",
        "text": "Du bist nun erfolgreich registriert. Wie können wir dich in Zukunft über wichtige Neuigkeiten rund um die Wheelmap informieren?"
      }
    },
    "edit": {
      "headline": {
        "your_images": "Deine hochgeladenen Bilder"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Deine Benutzerdaten"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Ja, haltet mich über Wheelmap auf dem Laufenden.",
        "text": "Bleib auf dem Laufenden mit dem Wheelmap Newsletter.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "Du hast bisher keine Fotos hochgeladen.",
        "title": "Fotoalbum"
      },
      "show": {
        "greeting": {
          "anonymously": "Hallo Du",
          "personalized": "Hallo %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "%{count} Bild hochgelanden",
            "other": "%{count} Bilder hochgelanden"
          },
          "pois_added": {
            "one": "%{count} Ort hinzugefügt",
            "other": "%{count} Orte hinzugefügt"
          },
          "pois_edited": {
            "one": "%{count} Ort editiert",
            "other": "%{count} Orte editiert"
          },
          "pois_marked": {
            "one": "%{count} Ort markiert",
            "other": "%{count} Orte markiert"
          },
          "text": "Du hast"
        },
        "text_html": "Hallo,<br>\nherzlich Willkommen (zurück) bei Wheelmap.org! Wenn du dich mit Wheelmap.org noch vertrauter machen möchtest, kannst du z.B. im <a href=\\\"http://news.wheelmap.org/\\\">Blog</a> stöbern oder die Antworten zu den <a href=\\\"http://news.wheelmap.org/FAQ/\\\">häufig gestellten Fragen</a> durchlesen. Unter dem Menüpunkt <a href=\\\"http://news.wheelmap.org/en/wheelmap-ambassador/\\\">Mitmachen</a> findest du Anregungen, wie du dich lokal noch mehr einbringen kannst.<br>\nUm weiter mit uns in Kontakt zu bleiben, kannst du den Newsletter bestellen oder uns auf <a href=\\\"https://www.facebook.com/wheelmap\\\">Facebook</a> und <a href=\\\"https://twitter.com/wheelmap\\\">Twitter</a> folgen. Wir freuen uns darauf, mit dir ins Gespräch zu kommen und deine Meinung zu hören!<br>\nUnd jetzt viel Spaß beim Mappen!<br>\nDein Wheelmap-Team",
        "title": "Übersicht"
      },
      "widget": {
        "categories": "Kategoriefilter anzeigen",
        "center": "Kartenausschnitt",
        "empty_center": "Kartenmitte suchen",
        "empty_provider": "Anbieter wählen",
        "height": "Höhe",
        "legends": {
          "embed": "Embed Code",
          "embed_explanation": "Du kannst Breitengrad (<code>lat</code>), Längengrad (<code>lon</code>) und Zoomlevel (<code>zoom</code>) manuell im Code ändern und damit den Kartenausschnitt (Widget) deinem Wunsch nach anpassen.",
          "general": "Erzeuge dein eigenes Wheelmap Widget und integriere es auf einer Webseite oder einem Blog.",
          "preview": "Vorschau",
          "settings": "Einstellungen"
        },
        "providers": "Anbieter",
        "title": "Widget",
        "width": "Breite"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "« Start",
      "last": "Ende »",
      "next": "Weiter &rsaquo;",
      "previous": "&lsaquo; Zurück",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Teilweise rollstuhlgerecht",
    "no": "Nicht Rollstuhlgerecht",
    "unknown": "Status unbekannt",
    "yes": "Voll Rollstuhlgerecht"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Ein Projekt der",
      "based_on": "Basiert auf",
      "become_a_supporter": "Förderer werden",
      "main_supporter": "Hauptförderer"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Jetzt iPhone App herunterladen!"
    },
    "logo": {
      "alt": "Wheelmap Logo - Rollstuhlgerechte Orte finden",
      "title": "Wheelmap - Rollstuhlgerechte Orte finden"
    },
    "what_is": {
      "fully_accessible": "Eingang stufenlos, alle Räume sind stufenlos erreichbar.",
      "limited_accessible": "Eingang hat eine Stufe mit max. 7 cm Höhe (3 inches), die wichtigsten Räume sind stufenlos erreichbar.",
      "not_accessible": "Eingang hat höhere oder mehrere Stufen, Räume sind nicht zugänglich",
      "unknown_accessible": "Hilf mit und markiere den Toiletten-Status!"
    }
  },
  "will_paginate": {
    "next_label": "Vor &#8594;",
    "page_entries_info": {
      "multi_page": "Zeige %{model} %{from} - %{to} von %{count} insgesamt ",
      "multi_page_html": "Zeige %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> von <b>%{count}</b> insgesamt",
      "single_page": {
        "one": "Zeige 1 %{model}",
        "other": "Zeige alle %{count} %{model} ",
        "zero": "Nicht %{model} gefunden"
      },
      "single_page_html": {
        "one": "Zeige <b>1</b> %{model} ",
        "other": "Zeige <b>all&nbsp;%{count}</b> %{model} ",
        "zero": "Nicht %{model} gefunden "
      }
    },
    "page_gap": " &hellip; ",
    "previous_label": "&#8592; Zurück"
  }
});
