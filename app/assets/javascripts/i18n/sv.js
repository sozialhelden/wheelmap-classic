I18n.translations || (I18n.translations = {});
I18n.translations["sv"] = I18n.extend((I18n.translations["sv"] || {}), {
  "actions": {
    "cancel": "Avbryt",
    "next": "Nästa",
    "save": "Spara",
    "send": "Skicka"
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
        "address": "Adress",
        "address_city": "Ort",
        "address_housenumber": "Husnummer",
        "address_postcode": "Postnummer",
        "address_street": "Gata",
        "name": "Namn",
        "note": "Meddelande",
        "phone": "Telefon",
        "type": "Typ",
        "website": "Webbplats"
      },
      "user": {
        "first_name": "Angivet namn",
        "last_name": "Efternamn",
        "privacy_policy": "Privacy policy",
        "terms": "Benämning"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "måste accepteras",
        "blank": "får inte vara tomt",
        "confirmation": "måste vara samma som det upprepade",
        "empty": "får inte vara tomt",
        "equal_to": "måste vara lika med %{count}",
        "even": "måste vara jämnt",
        "exclusion": "är reserverat",
        "greater_than": "måste vara större än %{count}",
        "greater_than_or_equal_to": "måste vara större eller lika med %{count}",
        "inclusion": "är inte med i listan",
        "invalid": "är ogiltigt",
        "less_than": "måste vara mindre än %{count}",
        "less_than_or_equal_to": "måste vara mindre eller likna med %{count}",
        "not_a_number": "är inte ett nummer",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "måste vara udda",
        "record_invalid": "Valideringen misslyckades: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "är redan upptaget",
        "too_long": "är för långt {max %{count} bokstäver}",
        "too_short": "är för kort (min %{count} bokstäver)",
        "wrong_length": "är inte av korrekt längd ( borde vara %{count} bokstäver)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "kan inte lämnas tomt om lösenord angetts"
            },
            "privacy_policy": {
              "accepted": "måste godkännas"
            },
            "terms": {
              "accepted": "måste godkännas"
            }
          }
        },
        "user_session": {
          "email": "E-postadress",
          "password": "Lösenord",
          "remember_me": "Kom ihåg mig"
        }
      },
      "template": {
        "body": "Det var problem med följande fält:",
        "header": {
          "one": "1 fel förhindrade denna %{model} från att sparas",
          "other": "%{count} fel förhindrade denna %{model} från att sparas"
        }
      }
    },
    "models": {
      "user": "Användare"
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
      "notice": "Du är redan inloggad"
    },
    "require_user": {
      "notice": "Du måste vara inloggad för att se denna sida"
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Lägg till ny plats",
      "edit": "Ändra plats"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "stäng",
    "skip": "hoppa över"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Vänligen skriv till oss på engelska eller tyska.",
        "flash_after_submit": "Tack för att du kontaktar oss. Vårt supportteam kommer att återkomma till dig snarast möjligt.",
        "header_text_html": "Vänligen se först <a href=\"https://news.wheelmap.org/en/faq/\">vanliga frågor</a> för hjälp. Om lösningen på ditt problem inte finns där, så var god besvara följande frågor så att vi kan lösa det.",
        "note": "Notera att Wheelmap är ett projekt med öppen källkod drivet av en ideell organisation och vi har begränsade resurser för utveckling av appen.",
        "questions": {
          "a": "Vad gjorde du?",
          "b": "Vad förväntade du dig skulle hända?",
          "c": "Vad skedde istället?"
        },
        "submit_button": "Skicka in",
        "title": "Rapportera ett problem"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sön",
      "Mån",
      "Tis",
      "Ons",
      "Tor",
      "Fre",
      "Lör"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%d %B, %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
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
        "one": "ca 1 timme",
        "other": "ca %{count} timmar"
      },
      "about_x_months": {
        "one": "ca 1 månad",
        "other": "ca %{count} månader"
      },
      "about_x_years": {
        "one": "ca 1 år",
        "other": "ca %{count} år"
      },
      "almost_x_years": {
        "one": "nästan 1 år",
        "other": "nästan %{count} år"
      },
      "half_a_minute": "en halv minut",
      "less_than_x_minutes": {
        "one": "mindre än en minut",
        "other": "mindre än %{count} minuter"
      },
      "less_than_x_seconds": {
        "one": "mindre än 1 sekund",
        "other": "mindre än %{count} sekunder"
      },
      "over_x_years": {
        "one": "över 1 år",
        "other": "över %{count} år"
      },
      "x_days": {
        "one": "1 dag",
        "other": "%{count} dagar"
      },
      "x_minutes": {
        "one": "1 minut",
        "other": "%{count} minuter"
      },
      "x_months": {
        "one": "1 månad",
        "other": "%{count} månader"
      },
      "x_seconds": {
        "one": "1 sekund",
        "other": "%{count} sekunder"
      }
    },
    "prompts": {
      "day": "Dag",
      "hour": "Timme",
      "minute": "Minut",
      "month": "Månad",
      "second": "Sekund",
      "year": "År"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Din mejladress har bekräftats och ditt konto är godkänt. Du är nu inloggad.",
      "link": "Kom inte mejlet med länken för att bekräfta fram?",
      "send_instructions": "Du kommer att få ett e-post med instruktioner om hur du bekräftar ditt konto om några minuter.",
      "send_paranoid_instructions": "Om ditt konto är upplagt kommer du inom några minuter att få ett mejl med instruktioner om hur du bekräftar din registrering."
    },
    "destroy": {
      "confirm": "Är du säker?",
      "headline": "Radera konto",
      "link": "Radera nu"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Nuvarande lösenord <i>(behövs för att acceptera ändringar)</i>",
          "email": "E-post",
          "password": "Lösenord <i>(lämnas tomt om du inte vill ändra det)</i>",
          "password_confirmation": "Upprepa lösenord"
        },
        "submit": "Spara ändringar"
      },
      "headline": "Ändra konto"
    },
    "failure": {
      "already_authenticated": "Du är redan inloggad.",
      "inactive": "Ditt konto är inte aktiverat ännu.",
      "invalid": "Felaktig e-post eller lösenord.",
      "invalid_token": "Felaktig inloggning",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Ditt konto är låst.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Din session har avslutats, logga in för att fortsätta.",
      "unauthenticated": "Du måste logga in eller registrera dig för att fortsätta.",
      "unconfirmed": "Du måste bekräfta ditt konto innan du kan fortsätta"
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Vänligen klicka på länken som vi just skickat till din mejladresss. Om du inte får något mejl från oss, kontrollera för att det inte har hamnat i Skräpmappen. Finns det inte där heller, kom tillbaka till registreringssidan och gör ett nytt försök.",
        "subject": "Valideringsinstruktioner"
      },
      "reset_password_instructions": {
        "subject": "Instruktioner för att återställa lösenord"
      },
      "unlock_instructions": {
        "subject": "Instruktioner för att låsa upp lösenord"
      }
    },
    "mandatory": "* obligatoriskt",
    "omniauth_callbacks": {
      "failure": "Kunde inte auktorisera dig från %{kind} pga \"%{reason}\"",
      "permission_missing": "Du har inte godkänt den behörighet som krävs.",
      "success": "Auktoriserad från %{kind} konto."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-post"
        },
        "submit": "Återställ lösenord"
      },
      "headline": "Glömt lösenord?"
    },
    "password_reset": {
      "email": {
        "comment": "Om du inte har önskat att få återställa ditt lösenord, så bortse från detta e-postmeddelande.<br/>Ditt lösenord kommer inte att ändras om du inte klickar på länken ovan och väljer ett nytt lösenord.",
        "headline": "Välkommen %{email}",
        "link": "Byta lösnord",
        "text": "Vi har fått en begäran om att ändra ditt lösenord. Om du skickade denna begäran, klicka på länken - annars struntar du i detta mejl!"
      },
      "form": {
        "labels": {
          "password": "Nytt lösenord",
          "password_confirmation": "Upprepa lösenord"
        },
        "submit": "Återställ lösenord"
      },
      "headline": "Återställ lösenord"
    },
    "passwords": {
      "link": "Glömt lösenord?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Inom några minuter kommer du att få ett mejl med instruktioner om hur du sparar ett nytt lösenord.",
      "send_paranoid_instructions": "Om ditt konto är upplagt kommer du inom några minuter att få ett mejl med instruktioner om hur du sparar ett nytt lösenord.",
      "updated": "Ditt lösenord är ändrat. Du är nu inloggad.",
      "updated_not_active": "Ditt lösenord är nu ändrat"
    },
    "registrations": {
      "destroyed": "Hej då! Ditt konto är nu avslutat. Hoppas vi ses igen snart.",
      "inactive_signed_up": "Du har lyckats registrera dig men vi kunde inte logga in dig. Orsak: %{reason}",
      "link": "Registrera",
      "reasons": {
        "inactive": "ej aktiv",
        "locked": "låst",
        "unconfirmed": "ej bekräftad"
      },
      "signed_up": "Din registrering har lyckats. Ett mejl med bekräftelse har skickats till din mejladress.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Din kontoinformation är uppdaterad."
    },
    "sessions": {
      "inactive": "Ditt konto är inte aktiverat ännu.",
      "invalid": "Felaktig e-post eller lösenord.",
      "invalid_token": "Felaktig inloggnings token",
      "link": "Logga in",
      "locked": "Ditt konto är låst.",
      "new": {
        "no_osm_account": "Saknar du OpenStreetMap-konto?",
        "osm_promo_text": "Wheelmap bygger på geodata från OpenStreetMap (OSM). OpenStreetMap är en allmänt tillgänglig världskarta, som skapats av personer som du. Det är som en Wikipedia för kartor. För att kunna ändra platsinformation och skapa ny behöver du ha ett konto hos OpenStreetMap. Du behöver vara inloggad på kontot för att redigera kartan.",
        "promo_text_thank_you": "Tack för din support!",
        "sign_in_with": "Logga in med %{kind}",
        "sign_up_with_osm": "Registrera dig nu",
        "wheelmap_promo_text": "Din kunskap om platser som är tillgängliga för rullstolsburna, kan hjälpa personer med fysiska hinder att lättare planera sin vardag. Dessutom så bidrar det till att göra OpenStreetMap mer detaljerad."
      },
      "signed_in": "Inloggad.",
      "signed_out": "Utloggad.",
      "timeout": "Din session har avslutats, logga in för att fortsätta.",
      "unauthenticated": "Du måste logga på eller registrera dig innan du kan fortsätta.",
      "unconfirmed": "Du måste verifiera ditt konto innan du kan fortsätta."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-post",
          "password": "Lösenord",
          "remember_me": "Kom ihåg mig?"
        },
        "submit": "Logga in"
      },
      "headline": "Logga in"
    },
    "sign_out": {
      "headline": "Logga ut"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Bekräfta mitt konto",
        "please_confirm": "Du kan bekräfta ditt konto med hjälp av följande länk:",
        "welcome": "Välkommen %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-post",
          "password": "Lösenord",
          "password_confirmation": "Upprepa lösenord",
          "wants_newsletter": "Ja tack, låt mig veta vad som händer med Wheelmap - men inte mer än en gång i månaden."
        },
        "submit": "Registrera"
      },
      "headline": "Registrera dig"
    },
    "unlocks": {
      "link": "Fick du inte mejlet med instruktioner för att låsa upp?",
      "send_instructions": "Inom några minuter kommer du att få ett mejl med instruktioner om hur du låser upp ditt konto.",
      "send_paranoid_instructions": "Om ditt konto är upplagt kommer du inom några minuter att få ett mejl med instruktioner om hur du låser upp ditt konto.",
      "unlocked": "Ditt konto är nu upplåst. Du kan nu logga in."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "måste godkännas",
      "already_confirmed": "är redan validerad, prova att logga in",
      "blank": "måste vara ifyllt",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "måste vara samma som det upprepade",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "måste vara ifyllt",
      "equal_to": "måste vara exakt %{count}",
      "even": "måste vara ett jämnt heltal",
      "exclusion": "är reserverat",
      "expired": "utgånget, ansök om ett nytt",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "måste vara större än %{count}",
      "greater_than_or_equal_to": "måste vara större än eller lika med %{count}",
      "inclusion": "inte ett giltigt värde",
      "invalid": "inte giltig",
      "less_than": "måste vara mindre än %{count}",
      "less_than_or_equal_to": "måste vara mindre eller lika med %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "är inte ett nummer",
      "not_an_integer": "måste vara ett heltal",
      "not_found": "hittades inte",
      "not_locked": "var inte låst",
      "not_saved": {
        "one": "Ett fel hindrade denna %{resource} från att sparas:",
        "other": "%{count} fel hindrade denna %{resource} från att sparas:"
      },
      "odd": "måste vara ett udda heltal",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "är redan upptaget",
      "too_long": "är för långt (får inte vara mer än %{count} bokstäver)",
      "too_short": "är för kort (får inte vara mindre än %{count} bokstäver)",
      "wrong_length": "är av fel längd (borde vara %{count} bokstäver)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Webbadressen är inte giltig"
        }
      }
    },
    "template": {
      "body": "Det var problem med följande fält:",
      "header": {
        "one": "Ett fel hindrade denna %{model} från att sparas",
        "other": "%{count} fel hindrade denna %{model} från att sparas"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Du kan alltid ändra betyget på en plats själv. Välj bara rätt betyg och \"Spara\" - klart!",
      "1": "Som en inloggad användare kan du lägga till / korrigera all information om en plats. Klicka på \"Redigera\" och korrigera eller lägg till information i masken.",
      "2": "Du kan lägga till ytterligare information (t.ex. \"Den här platsen har en rörlig ramp\") i sektionen för kommentarer. Klicka på \"Redigera\" och \"Lägg till kommentar\"."
    },
    "headline": "Är det något problem med den här platsen?",
    "questions": {
      "0": "Betyget är fel.",
      "1": "Informationen om platsen är fel eller saknas.",
      "2": "Jag har mer information om den här platsen"
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} har skapats."
      },
      "destroy": {
        "alert": "%{resource_name} kunde inte tas bort.",
        "notice": "%{resource_name} är borttagen."
      },
      "update": {
        "notice": "%{resource_name} har uppdaterats."
      }
    },
    "photos": {
      "destroy": {
        "notice": "Bilden har tagits bort"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Rullstolstillgänglig",
    "show_limited_accessible_places": "Delvis rullstolsanpassat",
    "show_places_without_status": "Okänd status",
    "show_unaccessible_places": "Ej rullstolstillgänglig"
  },
  "formtastic": {
    "hints": {
      "email": "Vi hanterar din adress konfidentiellt. Vi lovar att inte skicka skräppost!",
      "lat": "Flytta markören på kartan till korrekt position",
      "osm_username": "Ännu ej medlem?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Skapa ett Openstreetmap konto nu</a>",
      "password": "(lämnas tomt, om du inte vill ändra det)",
      "phone": "exempel: +46 12345678",
      "website": "Till exempel: http://www.example.se"
    },
    "labels": {
      "category": "Kategori:",
      "centralkey": "Huvudnyckel:",
      "city": "Ort:",
      "create": "Lägg in ny plats",
      "email": "E-post",
      "finish": "Avsluta",
      "housenumber": "Nummer:",
      "lat": "Latitud",
      "lon": "Longitud",
      "name": "Namn:",
      "osm_password": "Lösenord - OpenStreetMap",
      "osm_username": "Användarnamn - OpenStreetMap",
      "password": "Lösenord",
      "password_confirmation": "Upprepa lösenord",
      "phone": "Telefon:",
      "postcode": "Postnummer:",
      "privacy_policy": "Jag accepterar punkterna 1 och 2 i villkoren för \"data privacy\".",
      "reset": "Återställ",
      "save": "Spara",
      "street": "Gata:",
      "terms": "Jag godkänner reglerna för användning",
      "type": "Typ:",
      "website": "Webbplats:",
      "wheelchair": "Rullstolstillgänglighet?",
      "wheelchair_description": "Tillgänglighetskommentar:",
      "wheelchair_toilet": "Rullstolstillgänglig toalett:"
    },
    "titles": {
      "basic": "Grundläggande data",
      "optional": "Mer information <span class=\"addition\">(alla fält är frivilliga)</span>"
    }
  },
  "global": {
    "form_validation_error": "Dessa fel uppstod."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org är en online-karta för att söka, hitta och markera rullstolstillgängliga platser. Bli delaktig genom att markera offentliga platser som t ex barer, restauranger, bio och mataffärer!",
      "homepage": "Hemsida",
      "keywords": "rullstolstillgängliga platser hitta sök lägg till",
      "search": "Sök",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Nyheter",
      "choose_language": "Välj språk",
      "contact": "Kontakt",
      "faq": "Frågor och svar",
      "feedback": "Återkoppling",
      "home": "Start",
      "how_to_add_a_place": "Hur lägger jag till platser?",
      "imprint": "Om",
      "logged_in_as": "Inloggad som:",
      "login": "Logga in",
      "logout": "Logga ut",
      "map": "Karta",
      "newsletter": "Nyhetsbrev",
      "press": "Press",
      "profile": "Profil",
      "projects": "Bli inblandad",
      "report_problem": "Rapportera ett problem",
      "suggestions": "Förslag",
      "travelguide": "Reseguide",
      "what_is_barrier_free": "Vad betyder \"rullstolstillgänglig\"?",
      "what_is_wheelmap": "Lite om Wheelmap"
    },
    "searchbar": {
      "add_place": "Lägg till en plats",
      "find": "Hitta",
      "placeholder": "Sök en plats",
      "title_add_place": "Lägg till en ny plats på denna position!"
    },
    "tagline": "Wheelmap logo",
    "title": "Hitta rullstolstillgängliga platser",
    "toolbar": {
      "categories": "Kategorier"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Visar %{entry_name} <b>%{first} - %{last}</b> av <b>%{total}</b> totalt"
      },
      "one_page": {
        "display_entries": {
          "one": "Visar <b>%{count}<b> %{entry_name}",
          "other": "Visar <b>alla ,%{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Välj"
    },
    "submit": {
      "create": "Skapa %{model}",
      "submit": "spara %{model}",
      "update": "Ändra %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Visa på Wheelmap.org",
      "filter": {
        "category": "Välj kategori:",
        "deselect_all": "Välj ingen",
        "select_all": "Välj alla",
        "wheelchair": "Rullstolstillgänglig?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorera",
          "upgrade": "Uppdatera webbläsaren"
        },
        "warning": {
          "headline": "Tyvärr!",
          "message": "Du verkar använda Internet Explorer. Wheelmap kräver en webbläsare som följer standard för att fungera ordentligt. Fundera på att använda Firefox, Chrome, Safari eller Opera istället."
        }
      },
      "link": {
        "node": {
          "create": "Lägg till ny plats"
        }
      },
      "overlay": {
        "button": "OK, Nu startar vi!",
        "categories": "Filtrera platser utifrån kategorier",
        "filter": "Filtrera platser utifrån rullstolstillgänglighet",
        "headline": "Markera och hitta rullstolstillgängliga platser med hjälp av Wheelmap.org - världsomfattande och gratis. Det är lätt:",
        "lookup": "Sök en speciell plats",
        "secondary_headline": "Vårt \"trafikljussystem\" för att markera rullstolstillgängligheten hos allmänna platser:"
      },
      "popup": {
        "form": {
          "limited": "Delvis rullstolsanpassat",
          "no": "Ej rullstolstillgänglig",
          "save": "Update",
          "unknown": "Okänd status",
          "yes": "Rullstolstillgänglig"
        },
        "help": "Rullstolstillgänglig? (Hjälp)",
        "more": "mera ..."
      },
      "zoom_alert": "Du ser fler platser om du zoomar in."
    }
  },
  "how?": "Hur?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Alla delvis tillgängliga för rullstol %{type} i %{city} (%{count})"
        },
        "no": {
          "headline": "Alla helt otillgängliga för rullstol %{type} i %{city} (%{count})"
        },
        "unknown": {
          "headline": "Alla %{type} i %{city} med okänd rullstolstillgänglighet (%{count})"
        },
        "yes": {
          "headline": "Alla rullstolstillgängliga %{type} i %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Ett projekt av Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Välj kategori:"
    },
    "node": {
      "info_edit_position": "Platsen kommer synas i Wheelmap som den visas ovan. Om markören inte är på korrekt ställe kan du  <a href=\"%{url}\"> ändra dess position på OpenstreetMap. \n</a>",
      "mail": {
        "body": "(Vänligen skriv enbart på engelska eller tyska.)\n\nHi Sozialhelden,\n\nsomething is wrong with location: %{url}\n\n\nThe problem is:",
        "subject": "[Wheelmap] Problem med %{headline}"
      }
    },
    "node_type": {
      "prompt": "Välj en typ"
    }
  },
  "node": {
    "address": {
      "city": "%{postcode} %{city}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Webbsida:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ojdå, formuläret är antingen felaktigt eller ofullständigt ifyllt.",
        "successfull": "Tack, ditt förslag är sparat och kommer snart att synas."
      }
    },
    "edit": {
      "header": {
        "title": "Ändra plats: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Avbryt"
      }
    },
    "errors": {
      "default": "Ojdå, något gick fel. Vi har fått meddelande om problemet.",
      "not_authorized": "Tyvärr, inloggningen misslyckades",
      "not_available": "Tyvärr, denna sida kan just nu inte visas.",
      "not_existent": "Tyvärr, denna plats finns inte längre.",
      "not_found": "Tyvärr, denna sida hittades inte.",
      "param_missing": "Ange ett sökuttryck."
    },
    "flash": {
      "authorize_wheelmap": "Du behöver ett OpenStreetMap-konto för att ändra."
    },
    "new": {
      "form": {
        "legend": "Platsens läge",
        "location": "Klicka på kartan där platsen är lokaliserad!",
        "section": {
          "accessibility": {
            "name": "Rullstolstillgänglighet:",
            "title": "Information om rullstolstillgänglighet"
          },
          "address": {
            "help": "Du kan dra markören till det ställe på kartan där platsen finns.",
            "name": "Adress",
            "title": "Var ligger platsen?"
          },
          "contact": {
            "name": "Kontakt",
            "title": "Annan kontaktinformation"
          },
          "name_category": {
            "name": "Platsens namn och typ",
            "title": "Ge oss lite grundinformation om din plats:"
          },
          "overview": {
            "title": "Är all information korrekt?"
          },
          "similar_nodes": {
            "empty": "Inga liknande platser hittades.",
            "go_edit": "Fortsätt med inmatningen för denna platsen",
            "go_new": "Det är ingen av platserna ovan ...",
            "name": "Platser som liknar denna",
            "title": "Vi hittade platser i närheten som liknar denna. Är det en av dessa?"
          }
        },
        "title": "Lägg till ny plats"
      },
      "header": {
        "title": "Ny plats | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Avbryt"
      }
    },
    "node": {
      "link": {
        "claim": "Arbetar du här?",
        "edit_node": "Ändra plats",
        "report_bug": "Rapportera ett problem"
      }
    },
    "node_data": {
      "address": "Adress:",
      "contact_details": "Kontaktinformation:"
    },
    "node_edit": {
      "details": "Detaljer",
      "edit": "Ändra"
    },
    "node_map": {
      "map": "Karta:"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Kommentar:"
    },
    "node_photos": {
      "add": "Lägg till",
      "alert": "Obs! Ingången ska synas klart och tydligt på fotot för att kunna visa följande: Finns det trappsteg till ingången? Ungefär hur höga är trappstegen? Hur bred är dörren? Fotot måste vara i JPG- eller PNG-format. Filen får inte vara större än 10 MB.",
      "photos_of_this_place": "Fotografier på den här platsen:",
      "upload": "Överföring"
    },
    "node_similar": {
      "similar": "Liknande platser: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Rullstolstillgänglig toalett:",
      "premium": "%{name} säger: den här platsen är",
      "wheelchair_accessibility": "Rullstolstillgänglighet:"
    },
    "node_streetview": {
      "streetview": "Gatuutsikt:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Få reda på om den här platsen är rullstolstillgänglig på Wheelmao.org. Eller lägg till ytterligare information och fotografier till platsen.",
          "title": "Den här platsen finns på Wheelmap.org: %{name}"
        },
        "title": "Plats: %{node} | wheelmap.org"
      },
      "link": {
        "back": "tillbaka",
        "large_map": "Förstora",
        "listing": "Alla platser av typen '%{type} i %{city}",
        "upload": "Ladda upp bild"
      },
      "more_data_from": "Det finns mer information om denna plats, varierad av:",
      "share": {
        "email": "E-post",
        "facebook": "Facebook",
        "text": "Jag hittade denna plats på Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Ojdå, du skrev antingen fel eller har du inte fyllt i allt.",
        "successfull": "Tack! Ditt förslag är sparat och kommer snart att vara tillgängligt."
      }
    },
    "update_wheelchair": {
      "successfull": "Statusen för \"%{name}\" har blivit ändrat till \"%{status}\" och kommer snart att synas."
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
        "unit": "kr"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miljard",
          "million": "Miljon",
          "quadrillion": "Kvadriljon",
          "thousand": "Tusen",
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
        "headline": "Du behöver koppla ditt konto till ditt OpenStreetMap-konto innan du kan skapa eller ändra platsinformation via Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Ditt Wheelmap-konto är nu kopplat till OpenStreetMap konto %{user}."
    }
  },
  "or": "eller",
  "place": {
    "one": "%{count} plats",
    "other": "%{count} platser"
  },
  "poi": {
    "category": {
      "accommodation": "Boende",
      "education": "Utbildning",
      "food": "Mat & Dryck",
      "government": "Myndighet",
      "health": "Hälsa & Sjukvård",
      "leisure": "Fritid & Kultur",
      "misc": "Blandat",
      "money_post": "Bank & Post",
      "public_transfer": "Kollektivtrafik",
      "shopping": "Shopping",
      "sport": "Idrott",
      "tourism": "Turism",
      "unknown": "Okänt"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandhotell",
        "bed_and_breakfast": "Bed & breakfast\n",
        "camp_site": "Campingplats",
        "caravan_site": "Husvagnsplats",
        "chalet": "Stuga",
        "dormitory": "Studenthem",
        "guest_house": "Värdshus",
        "hostel": "Vandrarhem",
        "hotel": "Hotell",
        "motel": "Motell"
      },
      "education": {
        "college": "Högskola",
        "driving_school": "Trafikskola",
        "kindergarten": "Förskola",
        "library": "Bibliotek",
        "museum": "Museum",
        "school": "Skola",
        "university": "Universitet"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Biergarten",
        "cafe": "Café",
        "drinking_water": "Dricksvatten",
        "fast_food": "Snabbmat",
        "ice_cream": "Glassbar",
        "pub": "Pub",
        "restaurant": "Restaurang"
      },
      "government": {
        "courthouse": "Domstol",
        "embassy": "Ambassad",
        "employment_agency": "Arbetsförmedling",
        "government": "Servicekontor",
        "police": "Polis",
        "public_building": "Publik byggnad",
        "townhall": "Stadshus"
      },
      "health": {
        "alternative": "Alternativ hälsovård",
        "dentist": "Tandläkare",
        "doctors": "Läkare",
        "hearing_aids": "Hörcentral",
        "hospital": "Sjukhus",
        "medical_supply": "Medicinsk utr.",
        "occupational_therapist": "Ergonom",
        "pharmacy": "Apotek",
        "physiotherapist": "Sjukgymnast",
        "psychotherapist": "Psykoterapeut",
        "social_facility": "Socialkontor",
        "speech_therapist": "Logoped",
        "veterinary": "Veterinär"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordell",
        "casino": "Casino",
        "cinema": "Bio",
        "community_centre": "Allaktivitetshus",
        "gallery": "Galleri",
        "massage": "Massage",
        "nightclub": "Nattklubb",
        "playground": "Lekplats",
        "sauna": "Bastu",
        "stripclub": "Stripklubb",
        "tattoo": "Tatueringssalong",
        "theatre": "Teater",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Förening",
        "company": "Företagskontor",
        "estate_agent": "Fastighetsmäklare",
        "insurance": "Försäkringar",
        "lawyer": "Advokat",
        "ngo": "Ideell samhällsförening",
        "place_of_worship": "Religiös plats",
        "political_party": "Partikansli",
        "toilets": "Toalett"
      },
      "money_post": {
        "atm": "Bankomat",
        "bank": "Bank",
        "bureau_de_change": "Växelkontor",
        "post_box": "Postlåda",
        "post_office": "Postkontor"
      },
      "public_transfer": {
        "aerodrome": "Flygplats",
        "bicycle_parking": "Cykelparkering",
        "bicycle_rental": "Cykeluthyrning",
        "boatyard": "Båtvarv",
        "bus_station": "Busstation",
        "bus_stop": "Busshållplats",
        "cable_car": "Linbana",
        "car_rental": "Biluthyrning",
        "car_sharing": "Samåkning",
        "chair_lift": "Stolslift",
        "ferry": "Färja",
        "ferry_terminal": "Färjeterminal",
        "fuel": "Bensinstation",
        "halt": "Hållplats",
        "light_rail": "Spårväg",
        "parking": "Parkering",
        "parking_aisle": "Väg på parkeringsplats",
        "platform": "Plattform",
        "station": "Tunnelbana",
        "subway_entrance": "Tunnelbaneingång",
        "terminal": "Flygplats-terminal",
        "tram_stop": "Spårvagnshållplats"
      },
      "shopping": {
        "alcohol": "Alkohol",
        "antiques": "Antikviteter",
        "art": "Galleri",
        "bakery": "Bageri",
        "beauty": "Skönhetssalong",
        "beverages": "Drycker",
        "bicycle": "Cykelaffär",
        "books": "Böcker",
        "butcher": "Köttaffär",
        "car_repair": "Bilverkstad",
        "car_shop": "Bilförsäljning",
        "chemist": "Apotek",
        "clothes": "Kläder",
        "computer": "Datorer",
        "confectionery": "Godisaffär",
        "convenience": "Närbutik",
        "copyshop": "Kopiering",
        "deli": "Delikatesser",
        "department_store": "Varuhus",
        "doityourself": "Gör det själv",
        "dry_cleaning": "Kemtvätt",
        "electronics": "Elektronik",
        "erotic": "Sexshop",
        "fabric": "Bygghandel",
        "farm_shop": "Lantbruksutrustning",
        "florist": "Blomsteraffär",
        "funeral_directors": "Begravningsbyrå",
        "furniture": "Möbler",
        "garden_centre": "Handelsträdgård",
        "gift": "Presentbutik",
        "greengrocer": "Frukt och grönsakshandel",
        "hairdresser": "Frisör",
        "hardware": "Järnhandel",
        "interior_decoration": "Inredningsaffär",
        "jewelry": "Smycken",
        "kiosk": "Kiosk",
        "laundry": "Tvätt",
        "mall": "Köpcentrum",
        "mobile_phone": "Mobiltelefonförsäljare",
        "music": "Skivaffär",
        "musical_instrument": "Musikaffär",
        "newsagent": "Tidningsaffär",
        "optician": "Optiker",
        "organic": "Hälsokost",
        "outdoor": "Friluftsutrustning",
        "pet": "Djurbutik",
        "photo": "Foto",
        "second_hand": "Begagnat",
        "shoes": "Skor",
        "sports": "Sport",
        "stationery": "Kontorsmateriel",
        "supermarket": "Livsmedel",
        "tailor": "Skrädderi",
        "tea": "Teaffär",
        "tobacco": "Tobaksaffär",
        "toys": "Leksaker",
        "travel_agency": "Resebyrå",
        "variety_store": "Lågprisaffär",
        "video": "Videouthyrning"
      },
      "sport": {
        "pitch": "Idrottsplats",
        "sports_centre": "Sportcenter",
        "stadium": "Idrottsarena",
        "swimming": "Bad",
        "swimming_pool": "Simbassäng"
      },
      "tourism": {
        "archaeological_site": "Arkeologisk plats",
        "arts_centre": "Kulturcenter",
        "artwork": "Konstverk",
        "attraction": "Attraktion",
        "battlefield": "Slagfält",
        "beach": "Strand",
        "beacon": "Fyr",
        "castle": "Slott",
        "cave_entrance": "Gruvingång",
        "information": "Turistinformation",
        "memorial": "Minnesplats",
        "theme_park": "Nöjespark",
        "tower": "Torn",
        "viewpoint": "Utsiktsplats"
      },
      "unknown": {
        "unknown": "Okänt"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: kopplad",
          "grant": "Koppla nu",
          "not_connected": "Status: frånkopplad",
          "revoke": "Koppla ifrån"
        }
      },
      "headline": "Ändra din profil"
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
        "headline": "Beklagar, vi kunde inte hitta en plats som kallas \"%{query}\".",
        "hint": {
          "example": "<strong>Exempel:</strong> London, Storbritannien",
          "info": "Vår söktjänst fungerar bara med namn -och/eller adressinformation. Var därför vänlig och sök efter platsens namn eller en adress, t.ex. gatunamn och/eller stad. Det fungerar inte att söka efter en sorts plats, t.ex. restaurang eller bio!",
          "work_in_progress": "Vi arbetar hårt för att göra det lättare och mer intuitivt att söka efter platser i framtiden."
        },
        "try_this": {
          "address": "Vänligen ge mer <strong>information om adressen</strong>.",
          "intro": "Prova det här:",
          "spell_check": "Kolla <strong>stavningen</strong> på ditt bidrag."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultat:",
          "other": "%{count} resultat:"
        }
      },
      "search": {
        "for": "Söker efter \"%{q}\"",
        "not_found": "Inga platser hittades!"
      }
    },
    "timeout": {
      "headline": "Beklagar, något gick fel.",
      "info": "Vår söktjänst var tillfälligt otillgänglig.",
      "repeat_search": "Sök igen"
    }
  },
  "splash": {
    "countline": "%{count} platser har redan markerats.",
    "headline": "Alla kan lägga till rullstolstillgängliga platser!",
    "start": "Starta",
    "step1": "Klicka på en plats som du känner till",
    "step2": "Markera den och klicka därefter på spara",
    "step3": "Klart! Ingen registrering behövs",
    "what_is_wheelmap": "Information om Wheelmap"
  },
  "statistics": "Statistik",
  "support": {
    "array": {
      "last_word_connector": "och",
      "sentence_connector": "och",
      "two_words_connector": "och",
      "words_connector": ","
    },
    "select": {
      "prompt": "Välj"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %e %b %Y %H:%M:%S %z",
      "long": "%e %B %Y %H:%M",
      "short": "%e %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "Saknar rullstolstillgänglig toalett",
    "unknown": "Information om toalett saknas",
    "what_is": {
      "no": "Dörrars innermått är min. 90 cm, fri golvyta min 150 x 150 cm, toalettsits är i rullstolshöjd, med vikbara handtag och åtkomligt tvättfat.",
      "unknown": "Hjälp andra genom att ange status för toalett!",
      "yes": "Dörrars innermått är min. 90 cm, fri golvyta min 150 x 150 cm, toalettsits är i rullstolshöjd, med vikbara handtag och åtkomligt tvättfat."
    },
    "yes": "Rullstolstillgänglig toalett finns"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Ditt konto är nu aktiverat!"
      },
      "error": {
        "notice": "E-post eller lösenord felaktigt."
      },
      "notice": "Du är inne!"
    },
    "destroy": {
      "notice": "Hejdå, kom tillbaka snart!"
    },
    "new": {
      "email": "Mejladress",
      "login": "Logga in",
      "login_with_twitter": "Logga in med hjälp av Twitter",
      "password": "Lösenord",
      "remember_me": "Kom ihåg mig"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Du är nästan klar! Nu återstår bara att färdigställa ditt Wheelmap-konto:",
        "set_password_for_mobile": "Du har utan problem registrerats hos OpenStretMap. Ange en mejladress som du vill att Wheelmap skall använda för att hålla dig informerad om dina aktiviteter (t ex antal platser du har statusmarkerat). Du kan ändra adressen i din \"Profil\".",
        "text": "Hur kan vi kontakta dig? Du kan senare ändra denna information i din profil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Dina uppladdade bilder"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Din kontoinformation"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Ja, håll mig informerad om Wheelmap.",
        "text": "Håll dig informerad via Wheelmaps nyhetsbrev. Oroa dig inte, vi kommer inte mejlbomba dig. Du kommer som mest höra av oss en gång i månaden.",
        "title": "Nyhetsbrev"
      },
      "photos": {
        "empty": "Du har inte laddat upp några foton än.",
        "title": "Fotografier"
      },
      "show": {
        "greeting": {
          "anonymously": "Hej där",
          "personalized": "Hej %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "laddat upp %{count} foton",
            "other": "laddat upp %{count} foton"
          },
          "pois_added": {
            "one": "lagt till %{count} platser",
            "other": "lagt till %{count} platser"
          },
          "pois_edited": {
            "one": "redigerat %{count} platser",
            "other": "redigerat %{count} platser"
          },
          "pois_marked": {
            "one": "markerat %{count} platser",
            "other": "markerat %{count} platser"
          },
          "text": "Du har"
        },
        "text_html": "Hallå där!<br>\nVälkommen (tillbaka) till Wheelmap.org! Vi är glada att du är med oss! Du kan kika runt på vår <a href=\"http://news.wheelmap.org/en/\">Blogg</a> eller <a href=\"http://news.wheelmap.org/en/FAQ/\">Vanliga frågor & svar</a> om du vill lära känna Wheelmap.org lite bättre. Eller så kan du ta reda på mer om <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projekten</a> som vi erbjuder kring Wheelmap.org och hur du kan bli delaktig.<br>\nFör att hålla kontakten kan du prenumerera på vårt månatliga nyhetsbrev och följa oss på <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> och <a href=\"https://twitter.com/wheelmap\">Twitter</a>. Vi ser fram emot att få höra din åsikt och att påbörja en konversation med dig!<br>\nOch ha nu så kul med kartläggningen!<br>\nDitt Wheelmap-team",
        "title": "Översikt"
      },
      "widget": {
        "categories": "Visa kategorifiltret",
        "center": "Kartområde",
        "empty_center": "Centrera kartan ...",
        "empty_provider": "Välj leverantör",
        "height": "Höjd",
        "legends": {
          "embed": "Inbäddad kod",
          "embed_explanation": "Du kan manuellt ändra värdena för latitud (<code>lat</code>), longitude (<code>lon</code>) och zoom nivå (<code>zoom</code>) i koden ovan, och därigenom justera kartavsnitt (widget) utifrån det område som du vill visa.",
          "general": "Skapa din egen Wheelmap-kartlänk och lägg in den på din hemsida eller blog.",
          "preview": "Förhandsvisning",
          "settings": "Inställningar"
        },
        "providers": "Leverantör",
        "title": "Kartlänk",
        "width": "Bredd"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Nästa &rsaquo;",
      "previous": "&lsaquo; Föregående",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Delvis rullstolsanpassat",
    "no": "Ej rullstolstillgänglig",
    "unknown": "Okänd status",
    "yes": "Rullstolstillgänglig"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Ett projekt från",
      "based_on": "Baserad på",
      "become_a_supporter": "Bli en sponsor",
      "main_supporter": "Huvudsponsor"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Hämta för iPhone!"
    },
    "logo": {
      "alt": "Wheelmap Logo - Hitta rullstolstillgängliga platser",
      "title": "Wheelmap - Hitta rullstolstillgängliga platser"
    },
    "what_is": {
      "fully_accessible": "Entrén är utan trappsteg, alla rummen saknar trappsteg.",
      "limited_accessible": "Entrén har ett trappsteg som är max 7cm högt (3 tum), de flesta rummen saknar trappsteg.",
      "not_accessible": "Entrén har ett eller flera trappsteg, rummen är inte tillgängliga.",
      "unknown_accessible": "Hjälp till genom att märka ut olika platser!"
    }
  },
  "will_paginate": {
    "next_label": "Nästa &#8594;",
    "page_entries_info": {
      "multi_page": "Visar %{model} %{from} - %{to] av totalt %{count}",
      "multi_page_html": "Visar %{model} <b>%{from]&nbsp;-&nbsp;%{to}</b> av <b>%{count}</b> totalt",
      "single_page": {
        "one": "Visar 1 %{model}",
        "other": "Visar alla %{count} %{model}",
        "zero": "Ingen %{model} hittad"
      },
      "single_page_html": {
        "one": "Visar <b>1<b> %{model}",
        "other": "Visar <b>alla&nbsp,%{count}</b> %{model}",
        "zero": "Ingen %{model} hittad"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Föregående"
  }
});
