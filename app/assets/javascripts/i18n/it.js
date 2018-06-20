I18n.translations || (I18n.translations = {});
I18n.translations["it"] = I18n.extend((I18n.translations["it"] || {}), {
  "actions": {
    "cancel": "Cancella",
    "next": "Avanti",
    "save": "Salva",
    "send": "Invia"
  },
  "active_admin": {
    "access_denied": {
      "message": "Non hai le autorizzazioni necessarie per eseguire questa azione."
    },
    "any": "Qualsiasi",
    "batch_actions": {
      "action_label": "%{title} Selezionati",
      "button_label": "Azioni multiple",
      "default_confirmation": "Sei sicuro di che voler fare questo?",
      "delete_confirmation": "Sei sicuro di volere cancellare %{plural_model}?",
      "labels": {
        "destroy": "Elimina"
      },
      "link": "Crea uno",
      "selection_toggle_explanation": "(Toggle Selection)",
      "succesfully_destroyed": {
        "one": "Eliminato con successo 1 %{model}",
        "other": "Eliminati con successo %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Non sono presenti %{resource_name}",
      "link": "Crea nuovo/a"
    },
    "cancel": "Annulla",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Aggiungi Commento",
      "author": "Autore",
      "author_missing": "Anonimo",
      "author_type": "Tipo di Autore",
      "body": "Corpo",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Il commento non può essere salvato, il testo è vuoto."
      },
      "no_comments_yet": "Nessun commento.",
      "resource": "Risorsa",
      "resource_type": "Tipo di risorsa",
      "title": "Commento",
      "title_content": "Commenti (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Dashboard",
    "dashboard_welcome": {
      "call_to_action": "Per aggiungere sezioni alla dashboard controlla il file 'app/admin/dashboard.rb'",
      "welcome": "Benvenuti in Active Admin. Questa è la pagina dashboard di default."
    },
    "delete": "Rimuovi",
    "delete_confirmation": "Sei sicuro di volerlo rimuovere?",
    "delete_model": "Rimuovi %{model}",
    "details": "Dettagli %{model}",
    "devise": {
      "change_password": {
        "submit": "Cambia la mia password",
        "title": "Cambia la tua password"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Dimenticato la password?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Entra",
        "sign_in_with_omniauth_provider": "Collegati a %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Ricordami",
        "submit": "Entra",
        "title": "Entra"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Invia di nuovo le istruzioni per la conferma",
        "title": "Invia di nuovo le istruzioni per la conferma"
      },
      "reset_password": {
        "submit": "Reimposta la tua password",
        "title": "Dimenticato la password?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Sottodominio"
      },
      "unlock": {
        "submit": "Invia di nuovo le istruzioni per sbloccare",
        "title": "Invia di nuovo le istruzioni per sbloccare"
      },
      "username": {
        "title": "Nome Utente"
      }
    },
    "download": "Scarica:",
    "dropdown_actions": {
      "button_label": "Azioni"
    },
    "edit": "Modifica",
    "edit_model": "Modifica %{model}",
    "empty": "Vuoto",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Rimuovi filtri",
        "filter": "Filtra"
      },
      "predicates": {
        "contains": "Contiene",
        "ends_with": "Finisce con",
        "equals": "Uguale a",
        "greater_than": "Maggiore di",
        "less_than": "Minore di",
        "starts_with": "Inizia con"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Rimuovi",
    "has_many_new": "Aggiungi nuovo/a %{model}",
    "has_many_remove": "Rimuovi",
    "index_list": {
      "block": "Lista",
      "blog": "Blog",
      "grid": "Griglia",
      "table": "Tabella"
    },
    "less_than": "Less Than",
    "logout": "Esci",
    "main_content": "Devi implemetare %{model}#main_content per mostrarne il contenuto.",
    "new_model": "Aggiungi %{model}",
    "next": "Prossimo",
    "pagination": {
      "empty": "Nessun %{model} trovato",
      "entry": {
        "one": "voce",
        "other": "voci"
      },
      "multiple": "Sto mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> di <b>%{total}</b> in totale",
      "multiple_without_total": "Sto mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Sto mostrando <b>1</b> %{model}",
      "one_page": "Sto mostrando <b>%{n}</b> %{model}. Lista completa."
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Precedente",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtri",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "No",
      "yes": "Sì"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Mostra"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Indirizzo",
        "address_city": "Città",
        "address_housenumber": "Numero civico",
        "address_postcode": "Cap",
        "address_street": "Via",
        "name": "Nome",
        "note": "Nota",
        "phone": "Telefono",
        "type": "Tipo",
        "website": "Sito web"
      },
      "user": {
        "first_name": "Nome",
        "last_name": "Cognome",
        "privacy_policy": "Regole sulla privacy",
        "terms": "Condizioni"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute}%{message}"
      },
      "messages": {
        "accepted": "deve essere accettato",
        "blank": "non può essere lasciato in bianco",
        "confirmation": "non coincide con la conferma",
        "empty": "non può essere vuoto",
        "equal_to": "deve essere uguale a %{count}",
        "even": "deve essere pari",
        "exclusion": "è riservato",
        "greater_than": "deve essere superiore a %{count}",
        "greater_than_or_equal_to": "deve essere superiore o uguale a %{count}",
        "inclusion": "non è incluso nella lista",
        "invalid": "non è valido",
        "less_than": "deve essere meno di %{count}",
        "less_than_or_equal_to": "deve essere meno o uguale a %{count}",
        "not_a_number": "non è un numero",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "deve essere dispari",
        "record_invalid": "Validazione fallita: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "è già in uso",
        "too_long": "è troppo lungo (il massimo è %{count} caratteri)",
        "too_short": "è troppo corto (il minimo è %{count} caratteri)",
        "wrong_length": "è della lunghezza sbagliata (deve essere di %{count} caratteri)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "non può essere vuoto qunado una parola è stata inserita"
            },
            "privacy_policy": {
              "accepted": "deve essere accetato"
            },
            "terms": {
              "accepted": "deve essere accetato"
            }
          }
        },
        "user_session": {
          "email": "Indirizzo e-mail",
          "password": "Password",
          "remember_me": "Resta collegato"
        }
      },
      "template": {
        "body": "Sono stati riscontrati dei problemi nei seguenti campi:",
        "header": {
          "one": "Un errore ha impedito il salvataggio di questo %{model}",
          "other": "Non può essere salvato questo %{model}: %{count} errori."
        }
      }
    },
    "models": {
      "user": "Utente"
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
      "notice": "Sei già collegato ..."
    },
    "require_user": {
      "notice": "Devi collegarti per vedere questa pagina."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Aggiungi nuovo luogo",
      "edit": "Modifica luogo"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "chiudi",
    "skip": "salta"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Per favore, scrivici in English o German. ",
        "flash_after_submit": "Grazie per averci contattato. Il nostro team ti risponderà il più presto possibile. ",
        "header_text_html": "Per favore, controlla per prima cosa le <a href=\"https://news.wheelmap.org/en/faq/\">domande frequenti</a> se hai bisogno di aiuto. Se non trovi lì la soluzione al tuo problema, per favore rispondi alle seguenti domandi per aiutarci a risolverlo. ",
        "note": "Nota che Wheelmap è un progetto open-source diretto da una organizzazione no-profit e per questo abbiamo risorse limitate per lo sviluppo dell'applicazione. ",
        "questions": {
          "a": "Che cosa hai fatto?",
          "b": "Che cosa ti aspettavi che accadesse?",
          "c": "Cosa è successo invece?"
        },
        "submit_button": "Invia",
        "title": "Segnala un problema"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Dom",
      "Lun",
      "Mar",
      "Mer",
      "Gio",
      "Ven",
      "Sab"
    ],
    "abbr_month_names": [
      null,
      "Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic"
    ],
    "day_names": [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato"
    ],
    "formats": {
      "default": "%d-%m-%Y",
      "long": "%d %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre"
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
        "one": "circa un'ora",
        "other": "circa %{count} ore"
      },
      "about_x_months": {
        "one": "circa un mese",
        "other": "circa %{count} mesi"
      },
      "about_x_years": {
        "one": "circa un anno",
        "other": "circa %{count} anni"
      },
      "almost_x_years": {
        "one": "circa 1 anno",
        "other": "circa %{count} anni"
      },
      "half_a_minute": "mezzo minuto",
      "less_than_x_minutes": {
        "one": "meno di un minuto",
        "other": "meno di %{count} minuti"
      },
      "less_than_x_seconds": {
        "one": "meno di un secondo",
        "other": "meno di %{count} secondi"
      },
      "over_x_years": {
        "one": "oltre un anno",
        "other": "oltre %{count} anni"
      },
      "x_days": {
        "one": "1 giorno",
        "other": "%{count} giorni"
      },
      "x_minutes": {
        "one": "1 minuto",
        "other": "%{count} minuti"
      },
      "x_months": {
        "one": "1 mese",
        "other": "%{count} mesi"
      },
      "x_seconds": {
        "one": "1 secondo",
        "other": "%{count} secondi"
      }
    },
    "prompts": {
      "day": "Giorno",
      "hour": "Ora",
      "minute": "Minuto",
      "month": "Mese",
      "second": "Secondi",
      "year": "Anno"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Il tuo account è stato confermato con successo. Ora sei collegato.",
      "link": "Non hai ricevuto le istruzioni di conferma?",
      "send_instructions": "Riceverai una e-mail contenente le istruzioni su come confermare in pochi minuti il tuo account.",
      "send_paranoid_instructions": "Se l'utente esiste, riceverai un'email in pochi minuti con le istruzioni su come confermare il tuo utente."
    },
    "destroy": {
      "confirm": "Sei sicuro?",
      "headline": "Cancella utente",
      "link": "Cancella adesso"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Password attuale <i>(è necessaria per confermare le tue modifiche)</i> ",
          "email": "E-mail",
          "password": "Password <i>(lascia vuoto se non vuoi cambiarlo)</i> ",
          "password_confirmation": "Ripeti la password"
        },
        "submit": "Salva modifiche"
      },
      "headline": "Modifica account"
    },
    "failure": {
      "already_authenticated": "Ti sei già registrato.",
      "inactive": "Il tuo utente non è stato ancora attivato.",
      "invalid": "Indirizzo e-mail o password non validi.",
      "invalid_token": "Token di autenticazione non valido.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Il tuo account è bloccato.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "La tua sessione è scaduta, ti preghiamo di effettuare di nuovo l'accesso per continuare.",
      "unauthenticated": "Per continuare devi prima registrarti o collegarti.",
      "unconfirmed": "Per procedere devi prima confermare il tuo account."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Clicca sul link che ti abbiamo appena inviato al tuo indirizzo email. Se non l'hai ricevuto, per prima cosa controlla che non sia presente nella cartella spam. Se non è lì torna alla pagina di iscrizione e riprova.",
        "subject": "Continua a seguire le istruzioni per attivare il tuo account"
      },
      "reset_password_instructions": {
        "subject": "Istruzioni per reimpostare la password"
      },
      "unlock_instructions": {
        "subject": "Sblocca le istruzioni"
      }
    },
    "mandatory": "* campo obbligatorio",
    "omniauth_callbacks": {
      "failure": "Non posso autorizzarti con %{kind} perché \"%{reason}\".",
      "permission_missing": "Non hai i permessi richiesti.",
      "success": "Collegato con successo con %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Reimposta la password"
      },
      "headline": "Dimenticato la password?"
    },
    "password_reset": {
      "email": {
        "comment": "Se non hai chiesto di cambiare la password, ignora questa e-mail.<br/>La tua password non cambierà a meno che non clicchi sul link sopra e non registri una nuova password.",
        "headline": "Benvenuto %{email} ",
        "link": "Cambia la mia password",
        "text": "Abbiamo ricevuto una richiesta per modificare la tua password. Se hai inviato la richiesta, fai clic sul seguente link - altrimenti ignora questo messaggio!"
      },
      "form": {
        "labels": {
          "password": "Nuova password",
          "password_confirmation": "Ripeti la password"
        },
        "submit": "Reimposta la password"
      },
      "headline": "Reimposta la password"
    },
    "passwords": {
      "link": "Dimenticato la password?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Riceverai una email con le istruzioni su come reimpostare la password in pochi minuti",
      "send_paranoid_instructions": "Se esiste l'utente, riceverai una email in pochi minuti con le istruzioni su come reimpostare la password",
      "updated": "La tua password è stata modificata con successo. Ora sei collegato.",
      "updated_not_active": "La tua password è stata modificata con successo"
    },
    "registrations": {
      "destroyed": "Ciao! Il tuo account è stato cancellato. Speriamo di rivederti presto.",
      "inactive_signed_up": "Sei stato registrato con successo, ma non possiamo farti accedere perché il tuo account è %{reason}.",
      "link": "Registrati",
      "reasons": {
        "inactive": "non attivo",
        "locked": "bloccato",
        "unconfirmed": "non confermato"
      },
      "signed_up": "Ti sei registrato con successo. Ti abbiamo inviato una email di conferma.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Il tuo account è stato aggiornato."
    },
    "sessions": {
      "inactive": "Il tuo utente non è stato ancora attivato",
      "invalid": "Indirizzo e-mail o password non validi.",
      "invalid_token": "Token di autenticazione non valido.",
      "link": "Registrati",
      "locked": "Il tuo account è bloccato.",
      "new": {
        "no_osm_account": "Non hai un account su OpenStreetMap?",
        "osm_promo_text": "Wheelmap si basa su geodati presi da OpenStreetMap (OSM). OpenStreetMap è una mappa gratuita di tutto il mondo, creata da persone come te. E 'come Wikipedia per le mappe. Per essere in grado di modificare i luoghi o di crearne di nuovi è necessario avere un utente su OpenStreetMap e accedere con quello.",
        "promo_text_thank_you": "Grazie per il tuo aiuto!",
        "sign_in_with": "Accedi con %{kind}",
        "sign_up_with_osm": "Registrati adesso.",
        "wheelmap_promo_text": "Con i luoghi accessibili in sedia a rotelle che conosci è possibile aiutare le persone con disabilità fisiche a pianificare la loro vita quotidiana in modo migliore. Inoltre, questo contribuirà a rendere OpenStreetMap più dettagliato."
      },
      "signed_in": "Collegato con successo.",
      "signed_out": "Sei stato scollegato con successo.",
      "timeout": "La tua sessione è scaduta, ti preghiamo di effettuare di nuovo l'accesso per continuare.",
      "unauthenticated": "Per continuare devi prima registrarti o collegarti.",
      "unconfirmed": "Per procedere devi prima confermare il tuo account."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Password",
          "remember_me": "Resti collegato?"
        },
        "submit": "Accedi"
      },
      "headline": "Accedi"
    },
    "sign_out": {
      "headline": "Esci"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Conferma il tuo account",
        "please_confirm": "Puoi confermare il tuo account cliccando sul seguente link:",
        "welcome": "Benvenuto %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Password",
          "password_confirmation": "Ripeti la password",
          "wants_newsletter": "Si, tienimi aggiornato su Wheelmap - ma ti prego non più di una volta al mese."
        },
        "submit": "Registrati"
      },
      "headline": "Registrati"
    },
    "unlocks": {
      "link": "Non hai ricevuto le istruzioni di sblocco?",
      "send_instructions": "Riceverai una email tra pochi minuti con le istruzioni su come sbloccare il tuo utente",
      "send_paranoid_instructions": "Se l'utente esiste, riceverai un'email tra pochi minuti con le istruzioni su come sbloccare il tuo utente",
      "unlocked": "Il tuo account è stato sbloccato con successo. Ora sei collegato."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "deve essere accettato",
      "already_confirmed": "è già confermato, prova ad accedere.",
      "blank": "deve essere compilato",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "non coincide con la conferma",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "deve essere compilato",
      "equal_to": "deve essere uguale a %{count}",
      "even": "deve essere un numero pari",
      "exclusion": "è riservato",
      "expired": "scaduto, per favore richiedine un altro",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "deve essere superiore a %{count}",
      "greater_than_or_equal_to": "deve essere maggiore o uguale a %{count}",
      "inclusion": "non è incluso nella lista",
      "invalid": "non è valido",
      "less_than": "deve essere meno di %{count}",
      "less_than_or_equal_to": "deve essere minore o uguale a %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "non è un numero",
      "not_an_integer": "Deve esser un numero intero.",
      "not_found": "non trovato",
      "not_locked": "non era bloccato",
      "not_saved": {
        "one": "Un errore ha impedito il salvataggio di %{resource}:",
        "other": "%{count} errori hanno impedito di salvare: %{resource}"
      },
      "odd": "deve essere un numero dispari",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "è già in uso",
      "too_long": "è troppo lungo (il massimo %{count} caratteri)",
      "too_short": "è troppo corto (il minimo è %{count} caratteri)",
      "wrong_length": "è della lunghezza sbagliata (deve essere di %{count} caratteri)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "L'indirizzo del sito non è valido."
        }
      }
    },
    "template": {
      "body": "Sono stati riscontrati dei problemi nei seguenti campi:",
      "header": {
        "one": "Non può essere salvato questo %{model}: %{count} errori",
        "other": "%{count} errori hanno impedito il salvataggio %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Puoi sempre modificare la \"qualifica\" del posto. Scegli la \"qualifica\" corretta e premi \"Salva\" - fatto!",
      "1": "Come utente registrato puoi aggiungere/modificare tutti i dettagli del posto. Clicca su \"Modifica\" e correggi o aggiungi le informazioni richieste.",
      "2": "Puoi aggiungere ulteriori informazioni (per esempio: \"Questo posto ha una rampa mobile\") nella sezione \"commenti\". Clicca su \"Modifica\" e \"Aggiungi commento\"."
    },
    "headline": "C´é un problema con questo posto?",
    "questions": {
      "0": "La qualifica é sbagliata.",
      "1": "I dettagli del posto sono incorretti o mancanti.",
      "2": "Ho maggiori informazioni su questo posto."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} è stato creato."
      },
      "destroy": {
        "alert": "%{resource_name} non può essere cancellato.",
        "notice": "%{resource_name} è stato cancellato con successo"
      },
      "update": {
        "notice": "%{resource_name} è stato aggiornato."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Immagine cancellata con successo"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Accessibile in sedia a rotelle",
    "show_limited_accessible_places": "Parzialmente accessibile con sedia a rotelle",
    "show_places_without_status": "Stato non conosciuto",
    "show_unaccessible_places": "Non accessibile con sedia a rotelle"
  },
  "formtastic": {
    "cancel": "Annulla",
    "create": "Crea %{model}",
    "hints": {
      "email": "Trattiamo il tuo indirizzo in modo confidenziale. Promettiamo di non inviarti spam!",
      "lat": "Sposta l'indicatore sulla mappa nella posizione corretta",
      "osm_username": "Non sei ancora un membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Crea ora un account su Openstreetmap</a> ",
      "password": "(lascia vuoto se non vuoi cambiarlo)",
      "phone": "Per esempio: +49 30 12345678",
      "website": "Per esempio: http://www.example.com"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Tasto centrale:",
      "city": "Città:",
      "create": "Crea un luogo",
      "email": "E-mail",
      "finish": "Finito",
      "housenumber": "Numero:",
      "lat": "Latitudine",
      "lon": "Longitudine",
      "name": "Nome:",
      "osm_password": "password OpenStreetMap",
      "osm_username": "nome utente OpenStreetMap",
      "password": "Password",
      "password_confirmation": "Ripeti la password",
      "phone": "Telefono:",
      "postcode": "CAP:",
      "privacy_policy": "Accetto numero 1 e 2 delle regole della privacy.",
      "reset": "Azzera",
      "save": "Salva",
      "street": "Via:",
      "terms": "Acetto gli termini del sito.",
      "type": "Tipo:",
      "website": "Sito Web:",
      "wheelchair": "Accessibilità per sedie a rotelle?",
      "wheelchair_description": "Commento sull'accessibilità:",
      "wheelchair_toilet": "Bagno accessibile con sedia a rotelle:"
    },
    "no": "No",
    "required": "obbligatorio",
    "reset": "Ripristina %{model}",
    "submit": "Invia",
    "titles": {
      "basic": "Dati fondamentali:",
      "optional": "Più dati <span class=\"addition\">(tutti campi sono opzionali)</span> "
    },
    "update": "Aggiorna %{model}",
    "yes": "Sì"
  },
  "global": {
    "form_validation_error": "Vedi gli errori sotto"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org è una mappa online per cercare, trovare e segnare luoghi accessibili ai disabili. Fatti coinvolgere segnando luoghi pubblici come bar, ristoranti, cinema o supermercati!",
      "homepage": "Home page",
      "keywords": "Ricerca luoghi accessibili in sedia a rotelle",
      "search": "Ricerca",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Scegli la lingua",
      "contact": "Contatti",
      "faq": "FAQ",
      "feedback": "Feedback",
      "home": "Inizia",
      "how_to_add_a_place": "Come faccio ad aggiungere luoghi?",
      "imprint": "Informazione legale",
      "logged_in_as": "Collegato come:",
      "login": "Accedi",
      "logout": "Esci",
      "map": "Mappa",
      "newsletter": "Newsletter",
      "press": "Articoli di giornale",
      "privacy": "Privacy Policy",
      "profile": "Profilo",
      "projects": "Partecipa",
      "report_problem": "Segnala un problema",
      "suggestions": "Suggerimenti",
      "travelguide": "Guida turistica",
      "what_is_barrier_free": "Cosa significa \"accessibile in sedia a rotelle\"?",
      "what_is_wheelmap": "Cos'è Wheelmap?"
    },
    "searchbar": {
      "add_place": "Aggiungi un altro luogo",
      "find": "ricerca",
      "placeholder": "p.e. Sunset Boulevard L.A. or Brandenburg Gate Berlin",
      "title_add_place": "Aggiungi ora un luogo a questo posizione!"
    },
    "tagline": "Wheelmap logo",
    "title": "Cerca luoghi accessibili con sedia a rotelle",
    "toolbar": {
      "categories": "Categorie"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "%{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> di <b>%{total}</b> totali"
      },
      "one_page": {
        "display_entries": {
          "one": "<b>%{count}</b> %{entry_name}",
          "other": "<b>Tutti %{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Scegli"
    },
    "submit": {
      "create": "Crea %{model}",
      "submit": "Salva %{model}",
      "update": "Aggiorna %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Mostra su Wheelmap.org",
      "filter": {
        "category": "Scegli categoria:",
        "deselect_all": "Deselezionare tutti",
        "select_all": "Seleziona tutto",
        "wheelchair": "Accessibile in sedia a rotelle?"
      },
      "ie": {
        "action": {
          "ignore": "Ignora",
          "upgrade": "Aggiorna Browser"
        },
        "warning": {
          "headline": "Siamo spiacenti!",
          "message": "Sembra che tu stia usando Internet Explorer. Wheelmap richiede un browser con requisiti standard per funzionare correttamente. Si prega di considerare l'utilizzo di Firefox, Chrome, Safari o Opera."
        }
      },
      "link": {
        "node": {
          "create": "Aggiungi nuovo luogo"
        }
      },
      "overlay": {
        "button": "Allora, andiamo!",
        "categories": "Filtrare i luoghi a seconda della categoria",
        "filter": "Filtrare i luoghi a seconda dell'accessibilità",
        "headline": "Evidenzia e trova luoghi accessibili con sedia a rotelle su Wheelmap.org - in tutto il mondo e gratis. È facile:",
        "lookup": "Cerca un luogo specifico",
        "secondary_headline": "Il nostro \"semaforo\" per segnare l'accessibilità dei luoghi pubblici per sedie a rotelle:"
      },
      "popup": {
        "form": {
          "limited": "Parzialmente accessibile con sedia a rotelle",
          "no": "Non accessibile con sedia a rotelle",
          "save": "Aggiorna",
          "unknown": "Stato non conosciuto",
          "yes": "Accessibile con sedia a rotelle "
        },
        "help": "Accessibile in sedia a rotelle? (Aiuto)",
        "more": "più ..."
      },
      "zoom_alert": "Ingrandisci per vedere più attività."
    }
  },
  "how?": "Come?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Tutti quelli parzialmente accessibili in sedia a rotelle %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "Tutti quelli non parzialmente accessibili in sedia a rotelle %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "%{type} in %{city} con stato di accessibilità in sedia a rotelle sconosciuto (%{count})"
        },
        "yes": {
          "headline": "Accessibili in sedia a rotelle %{type} in %{city} (%{count})\n"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Un progetto di Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Scegli una categoria"
    },
    "node": {
      "info_edit_position": "La posizione apparirà sul Wheelmap come indicato sopra. Se l'indicatore non è nel posto giusto puoi <a href=\"%{url}\"> modificare la sua posizione su OpenStreetMap. </a>",
      "mail": {
        "body": "(Si prega di scrivere solo in Inglese o Tedesco.)\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problema con %{headline}"
      }
    },
    "node_type": {
      "prompt": "Scegli un tipo"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode} ",
      "street": "%{street} %{housenumber}"
    },
    "tags": {
      "phone": "Telefono:",
      "website": "Sito Web:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, il tuo input era scorretto o incompleto",
        "successfull": "Grazie, i tuoi dati sono stati salvati con successo e saranno pubblicati fra poco."
      }
    },
    "edit": {
      "header": {
        "title": "Modifica luogo: %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Annulla "
      }
    },
    "errors": {
      "default": "Oops qualcosa è andato storto. Siamo stati informati del problema",
      "not_authorized": "Scusa, autenticazione fallita",
      "not_available": "Scusa, la pagina è momentaneamente non disponibile",
      "not_existent": "Scusa, ma questo luogo non è più disponibile",
      "not_found": "Scusa, pagina non trovata.",
      "param_missing": "Per favore inserisci una parola di ricerca"
    },
    "flash": {
      "authorize_wheelmap": "Ti serve un account su OpenStreetMap per modificare i dati."
    },
    "new": {
      "form": {
        "legend": "Posizione del luogo ",
        "location": "Clicca sulla mappa il punto in cui si trova l'attività!",
        "section": {
          "accessibility": {
            "name": "Accessibilità per sedie a rotelle",
            "title": "Informazioni sulla accessibilità per sedie a rotelle"
          },
          "address": {
            "help": "Puoi spostare il segnaposto nella posizione corretta sulla mappa.",
            "name": "Indirizzo",
            "title": "Dov'è l'attività?"
          },
          "contact": {
            "name": "Contatti",
            "title": "Altri recapiti"
          },
          "name_category": {
            "name": "Nome e tipo di attività",
            "title": "Forniscici delle informazioni iniziali sulla tua attività:"
          },
          "overview": {
            "title": "Le informazioni sono tutte esatte?"
          },
          "similar_nodes": {
            "empty": "Non sono state trovate attività simili.",
            "go_edit": "Continua con questa attività",
            "go_new": "Non è nessuna delle attività suddette...",
            "name": "Posti simili",
            "title": "Abbiamo trovato attività simili nei dintorni. È una di queste?"
          }
        },
        "title": "Aggiungi una attività"
      },
      "header": {
        "title": "Nuovo luogo | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo; Annulla"
      }
    },
    "node": {
      "link": {
        "claim": "Lavori qui?",
        "edit_node": "Modifica luogo",
        "report_bug": "Segnala un problema"
      }
    },
    "node_data": {
      "address": "Indirizzo: ",
      "contact_details": "Dettagli del contatto:"
    },
    "node_edit": {
      "details": "Dettagli",
      "edit": "Modifica"
    },
    "node_map": {
      "map": "Mappa:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Commento:"
    },
    "node_photos": {
      "add": "Aggiungi",
      "alert": "Nota: l'ingresso deve essere chiaramente visibile in foto al fine da mostrare: 1) se ci sono gradini all'ingresso; 2) quanto è alto più o meno un gradino; 3) quanto è larga la porta. La foto deve essere in formato JPG o PNG. Non deve superare i 10 MB.",
      "photos_of_this_place": "Foto del posto:",
      "upload": "Carica"
    },
    "node_similar": {
      "similar": "Posti simili: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Bagno accessibile con sedia a rotelle:",
      "premium": "%{name} dice: Questo posto é",
      "wheelchair_accessibility": "Accessibilità con sedia a rotelle:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Scopri se questo posto é accessibile con la sedia a rotelle su Wheelmap.org. O aggiungi ulteriori informazioni e foto sul posto.",
          "title": "Questo posto é su Wheelmap.org: %{name}"
        },
        "title": "Lougo: %{node} | wheelmap.org "
      },
      "link": {
        "back": "Indietro",
        "large_map": "Allarga",
        "listing": "Tutti i luoghi '%{type}' in %{city} ",
        "upload": "Carica immagine"
      },
      "more_data_from": "Ci sono più informazioni su questo luogo, convalidate da:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "Ho trovato questo luogo su Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, il tuo input era scorretto o incompleto",
        "successfull": "Grazie, i tuoi dati sono stati salvati con successo e saranno pubblicati fra poco."
      }
    },
    "update_wheelchair": {
      "successfull": "Lo stato di \"%{name}\" è stato cambiato in \"%{status} accessibile in sedia a rotelle\" e sarà pubblicato fra poco."
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
      "delimiter": ".",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miliardo",
          "million": "Milione",
          "quadrillion": "Quadrilione",
          "thousand": "Mille",
          "trillion": "Trilione",
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
          "gb": "Gb",
          "kb": "Kb",
          "mb": "Mb",
          "tb": "Tb"
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
        "headline": "È necessario collegare il tuo account con il tuo account su OpenStreetMap prima di poter creare o modificare i luoghi su Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Il tuo account di Wheelmap ora è connesso all'account %{user} di OpenStreetMap."
    }
  },
  "or": "o",
  "place": {
    "one": "%{count} luogo",
    "other": "%{count} luoghi"
  },
  "poi": {
    "category": {
      "accommodation": "Alloggi",
      "education": "Educazione",
      "food": "Alimenti",
      "government": "Governo",
      "health": "Salute",
      "leisure": "Tempo Libero",
      "misc": "Vari",
      "money_post": "Banca / Ufficio postale",
      "public_transfer": "Trasporto pubblico",
      "shopping": "Shopping",
      "sport": "Sport",
      "tourism": "Turismo",
      "unknown": "Sconosciuto"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Albergo sulla spiaggia",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Campeggio",
        "caravan_site": "Area caravan e camper",
        "chalet": "Casetta turistica",
        "dormitory": "Dormitorio",
        "guest_house": "Affittacamere, Pensione",
        "hostel": "Ostello",
        "hotel": "Albergo",
        "motel": "Motel"
      },
      "education": {
        "college": "College",
        "driving_school": "Autoscuola",
        "kindergarten": "Scuola d'infanzia",
        "library": "Biblioteca",
        "museum": "Museo",
        "school": "Scuola",
        "university": "Università"
      },
      "food": {
        "bar": "American bar",
        "biergarten": "Birreria all'aperto",
        "cafe": "Bar",
        "drinking_water": "Acqua potabile",
        "fast_food": "Fast food",
        "ice_cream": "Gelateria",
        "pub": "Pub",
        "restaurant": "Ristorante"
      },
      "government": {
        "courthouse": "Tribunale",
        "embassy": "Ambasciata",
        "employment_agency": "Agenzia di collocamento",
        "government": "Agenzia del Governo",
        "police": "Polizia",
        "public_building": "Edificio pubblico",
        "townhall": "Municipio"
      },
      "health": {
        "alternative": "Professionista di medicina alternativa",
        "dentist": "Dentista",
        "doctors": "Dottore",
        "hearing_aids": "Apparecchio per l'udito",
        "hospital": "Ospedale",
        "medical_supply": "Rifornimento sanitario",
        "occupational_therapist": "Terapista occupazionale",
        "pharmacy": "Farmacia",
        "physiotherapist": "Fisioterapista",
        "psychotherapist": "Psicoterapeuta",
        "social_facility": "Servizi sociali",
        "speech_therapist": "Logopedista",
        "veterinary": "Ambulatorio Veterinario"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Casinò",
        "casino": "Casinò",
        "cinema": "Cinema",
        "community_centre": "Centro comunitario",
        "gallery": "Galleria d'arte",
        "massage": "Massaggi spa",
        "nightclub": "Night club",
        "playground": "Parco giochi",
        "sauna": "Sauna",
        "stripclub": "Strip club",
        "tattoo": "Negozio di tatuaggi",
        "theatre": "Teatro",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Associazione",
        "company": "Compagnia (Officio)\n",
        "estate_agent": "Agente Immobiliare",
        "insurance": "Assicurazione",
        "lawyer": "Avvocato",
        "ngo": "Organizzazione non governativa",
        "place_of_worship": "Luogo di culto",
        "political_party": "Ufficio di partito politico",
        "toilets": "Bagno pubblico"
      },
      "money_post": {
        "atm": "Bancomat",
        "bank": "Banca",
        "bureau_de_change": "Ufficio cambia valute",
        "post_box": "Cassetta postale",
        "post_office": "Ufficio postale"
      },
      "public_transfer": {
        "aerodrome": "Aeroporto",
        "bicycle_parking": "Parcheggio per biciclette",
        "bicycle_rental": "Noleggio biciclette",
        "boatyard": "Cantiere",
        "bus_station": "Stazione degli autobus",
        "bus_stop": "Fermata dell'autobus",
        "cable_car": "Funivia",
        "car_rental": " Autonoleggio ",
        "car_sharing": "Parcheggio auto condivise",
        "chair_lift": "Seggiovia",
        "ferry": "Traghetto",
        "ferry_terminal": "Terminal traghetti",
        "fuel": "Distributore di benzina",
        "halt": "Stazione non presidiata",
        "light_rail": "Ferrovia",
        "parking": "Parcheggio",
        "parking_aisle": "Corsia di sosta",
        "platform": "Binario",
        "station": "Metropolitana",
        "subway_entrance": "Ingresso della Metropolitana",
        "terminal": "Terminal dell'aeroporto",
        "tram_stop": "Fermata del tram"
      },
      "shopping": {
        "alcohol": "Bevande alcoliche",
        "antiques": "Antiquario",
        "art": "Negozio di galleria",
        "bakery": "Panetteria",
        "beauty": "Salone di Belleza",
        "beverages": "Bevande",
        "bicycle": "Negozio di biciclette",
        "books": "Libreria",
        "butcher": "Macelleria",
        "car_repair": "Autofficina",
        "car_shop": "Autoconcessionaria",
        "chemist": "Chimica / Farmacia",
        "clothes": "Abbigliamento",
        "computer": "Negozio di computers",
        "confectionery": "Dolci",
        "convenience": "Minimarket",
        "copyshop": "Fotocopisteria",
        "deli": "Deli",
        "department_store": "Grande magazzino",
        "doityourself": "Fai da te",
        "dry_cleaning": "Lavanderia",
        "electronics": "Negozio d'elettronica",
        "erotic": "Sexy shop",
        "fabric": "Negozio di Tessuti",
        "farm_shop": "Negozio di una Fattoria",
        "florist": "Fiorista",
        "funeral_directors": "Onoranze funebri",
        "furniture": "Arredamento",
        "garden_centre": "Fioraio",
        "gift": "Negozio di Articoli da Regalo ",
        "greengrocer": "Fruttivendolo",
        "hairdresser": "Parrucchiere",
        "hardware": "Ferramenta",
        "interior_decoration": "Negozio di design degli interni",
        "jewelry": "Gioielleria",
        "kiosk": "Chiosco",
        "laundry": "Lavanderia",
        "mall": "Centro commerciale",
        "mobile_phone": "Negozio di telefoni cellulari",
        "music": "Negozio di dischi",
        "musical_instrument": "Negozio di strumenti musicali",
        "newsagent": "Giornalaio",
        "optician": "Ottico",
        "organic": "Negozio di Cibo Organico",
        "outdoor": "Negozio Outdoor",
        "pet": "Negozio di Animali",
        "photo": "Fotografo",
        "second_hand": "Seconda Mano",
        "shoes": "Calzature",
        "sports": "Sports",
        "stationery": "Cartoleria",
        "supermarket": "Supermercato",
        "tailor": "Sarto",
        "tea": "Negozio di the",
        "tobacco": "Tabacchino",
        "toys": "Giocattoli",
        "travel_agency": "Agenzia di Viaggi",
        "variety_store": "Discount",
        "video": "Negozio di video noleggio"
      },
      "sport": {
        "pitch": "Campo Sportivo",
        "sports_centre": "Centro sportivo",
        "stadium": "Stadio",
        "swimming": "Nuoto",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Sito archeologico",
        "arts_centre": "Centro d'arte",
        "artwork": "Opera d'arte",
        "attraction": "Attrazione turistica",
        "battlefield": "Campo di battaglia",
        "beach": "Spiaggia",
        "beacon": "Faro",
        "castle": "Castello",
        "cave_entrance": "Entrata di grotta",
        "information": "Ufficio informazioni turistiche",
        "memorial": "Memoriale",
        "theme_park": "Parco divertimenti",
        "tower": "Torre",
        "viewpoint": "Belvedere"
      },
      "unknown": {
        "unknown": "Sconosciuto"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Stato: Collegato",
          "grant": "Collegati adesso",
          "not_connected": "Stato: Non collegato",
          "revoke": "Scollegati"
        }
      },
      "headline": "Modifica il tuo profilo"
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
        "headline": "Ci dispiace, non possiamo trovare un luogo che si chiama \"%{query}\".",
        "hint": {
          "example": "<strong>Esempio:</strong> Londra, Regno Unito",
          "info": "Il servizio di ricerca funziona solo con informazioni su nome e/o indirizzo. Allora inserire un nome del posto o un indirizzo, per esempio il nome della strada e/o della città. La ricerca per tipo, per esempio ristorante o cinema, non funziona!",
          "work_in_progress": "Stiamo lavorando per rendere la ricerca più facile ed efficiente per il futuro. "
        },
        "try_this": {
          "address": "Per favore inserire maggiori <strong>dettagli sull'indirizzo</strong>.",
          "intro": "Prova questo:",
          "spell_check": "Controlla di aver scritto correttamente."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} risultato:",
          "other": "%{count} risultati:"
        }
      },
      "search": {
        "for": "Cerca \"%{q}\" ",
        "not_found": "Nessun luogo trovato!"
      }
    },
    "timeout": {
      "headline": "Ci dispiace, qualcosa è andato storto",
      "info": "Il servizio di ricerca non è al momento disponibile.",
      "repeat_search": "Riprova la ricerca"
    }
  },
  "splash": {
    "countline": "%{count} dei luoghi sono già stati contrassegnati",
    "headline": "Chiunque può aggiungere luoghi accessibili in sedia a rotelle!",
    "start": "Inizia",
    "step1": "Clicca su un luogo che conosci",
    "step2": "Selezionalo e clicca su salva",
    "step3": "Ed è fatta! Non è necessaria la registrazione",
    "what_is_wheelmap": "Cos'è Wheelmap?"
  },
  "statistics": "Statistiche",
  "support": {
    "array": {
      "last_word_connector": "e ",
      "sentence_connector": "e",
      "two_words_connector": " e ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Per favore, seleziona"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Bagno non accessibile con sedia a rotelle",
    "unknown": "Informazioni sul bagno sconosciute",
    "what_is": {
      "no": "Larghezza porte interne min. 90 cm (35 in), spazio libero nel piano min. 150 x 150 cm (59 x 59 in), altezza seduta del water, maniglie pieghevoli e lavandino accessibile.",
      "unknown": "Aiuta segnando lo stato del bagno!",
      "yes": "Larghezza porte interne min. 90 cm (35 in), spazio libero nel piano min. 150 x 150 cm (59 x 59 in), altezza seduta del water, maniglie pieghevoli e lavandino accessibile."
    },
    "yes": "Bagno accessibile con sedia a rotelle"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Il tuo account è ora attivo!"
      },
      "error": {
        "notice": "E-mail e password non corrispondono"
      },
      "notice": "Sei dentro!"
    },
    "destroy": {
      "notice": "Ciao, ritorna presto!"
    },
    "new": {
      "email": "Indirizzo email",
      "login": "Entra",
      "login_with_twitter": "Collegati con Twitter",
      "password": "Password",
      "remember_me": "Resta collegato"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Ci sei quasi! Ora stai per completare il tuo utente di Wheelmap:",
        "set_password_for_mobile": "Hai completato la registrazione con OpenStreetMap. Scegli un indirizzo email che  Wheelmap possa utilizzare in modo da tenerti informato sulle tue attività (per esempio, il numero di posti che hai segnato). È possibile accedere a queste informazioni dal \"Profilo\".",
        "text": "Come possiamo raggiungerti? Puoi modificare questa informazione anche dopo nell tuo profilo."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Le tue immagini caricate"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Le tue informazioni utente"
        },
        "title": "Profilo"
      },
      "newsletter": {
        "label": "Si, tienimi aggiornato su Wheelmap.",
        "text": "Rimani aggiornato con la newsletter di Wheelmap. Non preoccuparti, non ti invieremo spam. Ci sentiremo una volta al mese al massimo.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "Non hai caricato alcuna foto.",
        "title": "Foto"
      },
      "show": {
        "greeting": {
          "anonymously": "Ciao",
          "personalized": "Ciao %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "caricato %{count} foto",
            "other": "caricato %{count} foto"
          },
          "pois_added": {
            "one": "aggiunto %{count} luogo",
            "other": "aggiunto %{count} luoghi"
          },
          "pois_edited": {
            "one": "modificato %{count} luogo",
            "other": "modificato %{count} luoghi"
          },
          "pois_marked": {
            "one": "segnato %{count} luogo",
            "other": "segnato %{count} luoghi"
          },
          "text": "Hai"
        },
        "text_html": "Ciao,<br>\nBenvenuto (bentornato) su Wheelmap.org! Siamo felici di averti a bordo! È possibile consultare il nostro <a href=\\\"http://news.wheelmap.org/en/\\\">Blog</a> o le nostre <a href=\\\"http://news.wheelmap.org/en/FAQ/\\\">FAQs</a> se vuoi conoscere meglio Wheelmap.org. Oppure puoi scoprire di più sui <a href=\\\"http://news.wheelmap.org/en/wheelmap-ambassador/\\\">progetti</a> che offriamo attorno a Wheelmap.org e come partecipare.<br>\nPer rimanere in contatto è possibile iscriversi alla nostra newsletter mensile e seguirci su <a href=\\\"https://www.facebook.com/wheelmap\\\">Facebook</a> e <a href=\\\"https://twitter.com/wheelmap\\\">Twitter</a>. Non vediamo l'ora di sentire la tua opinione e iniziare una conversazione con te!<br>\nE ora, buona mappatura!<br>\nIl team di Wheelmap",
        "title": "Panoramica"
      },
      "widget": {
        "categories": "Mostra il fltro per categoria",
        "center": "Area della mappa",
        "empty_center": "Cerca il centro della mappa ...",
        "empty_provider": "Scegli un fornitore",
        "height": "Altezza",
        "legends": {
          "embed": "Codice da incorporare",
          "embed_explanation": "Puoi modificare le specifiche per la latitudine (<code>lat</ code>), longitudine (<code>lon</ code>) e il livello di zoom (<code>zoom</ code>) nel codice sopra manualmente e quindi regolare il segmento della mappa (widget) a seconda della posizione che si desidera visualizzare.",
          "general": "Crea il tuo widget di Wheelmap e incorporalo nel tuo sito o blog.",
          "preview": "Anteprima",
          "settings": "Impostazioni"
        },
        "providers": "Fornitore",
        "title": "Widget",
        "width": "Larghezza"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Inizio",
      "last": "Fine &raquo;",
      "next": "Succ. &rsaquo;",
      "previous": "&lsaquo; Prec.",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Parzialmente accessibile con sedia a rotelle",
    "no": "Non accessibile con sedia a rotelle",
    "unknown": "Stato non conosciuto",
    "yes": "Accessibile con sedia a rotelle "
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Un progetto di",
      "based_on": "Basato su",
      "become_a_supporter": "Diventa un supporter",
      "main_supporter": "Il principale supporter"
    },
    "itunes": {
      "alt": "Logo AppStore",
      "title": "Scarica l'app per il tuo iPhone!"
    },
    "logo": {
      "alt": "Logo Wheelmap - trova luoghi accessibili in sedia a rotelle",
      "title": "Wheelmap - trova luoghi accessibili in sedia a rotelle"
    },
    "what_is": {
      "fully_accessible": "Ingresso senza scalini, tutte le stanze senza scalini.",
      "limited_accessible": "L'ingresso ha uno scalino dell'altezza massima di 7cm (3 in), la maggior parte delle stanze sono senza scalini.",
      "not_accessible": "L'ingresso ha uno scalino o diversi scalini, le stanze non sono accessibili.",
      "unknown_accessible": "Aiuta dando un voto ai luoghi! "
    }
  },
  "will_paginate": {
    "next_label": "Successivo &#8594;",
    "page_entries_info": {
      "multi_page": "Visualizzazione %{model} %{from} - %{to} di %{count} in totale",
      "multi_page_html": "Visualizzazione %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> di <b>%{count}</b> in totale",
      "single_page": {
        "one": "Visualizzazione {count} %{model}",
        "other": "Visualizzazone totale %{count} %{model}",
        "zero": "Nessun %{model} trovato\n"
      },
      "single_page_html": {
        "one": "Visualizzazione <b>{count}</b> %{model}",
        "other": "Visualizzazione <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Non %{model} trovato\n"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Precedente\n"
  }
});
