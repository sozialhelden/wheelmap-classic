I18n.translations || (I18n.translations = {});
I18n.translations["fr"] = I18n.extend((I18n.translations["fr"] || {}), {
  "actions": {
    "cancel": "Annuler",
    "next": "Prochain",
    "save": "Enregistrer",
    "send": "Envoyer"
  },
  "active_admin": {
    "access_denied": {
      "message": "Vous n'êtes pas autorisé à exécuter cette action"
    },
    "any": "N'importe lequel",
    "batch_actions": {
      "action_label": "%{title} les éléments sélectionnés",
      "button_label": "Actions groupées",
      "default_confirmation": "Êtes-vous sûr de vouloir faire cela ?",
      "delete_confirmation": "Êtes-vous sûr de vouloir supprimer ces %{plural_model} ?",
      "labels": {
        "destroy": "Supprimer"
      },
      "link": "Créer un",
      "selection_toggle_explanation": "(Inverser la sélection)",
      "succesfully_destroyed": {
        "one": "1 %{model} supprimé",
        "other": "%{count} %{plural_model} supprimés"
      }
    },
    "blank_slate": {
      "content": "Il n'y a pas encore de %{resource_name}.",
      "link": "Créez en un"
    },
    "cancel": "Annuler",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Ajouter un commentaire",
      "author": "Auteur",
      "author_missing": "Anonymous",
      "author_type": "Profil de l'auteur",
      "body": "Corps",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Le commentaire n'a pas été enregistré puisque le texte était vide."
      },
      "no_comments_yet": "Aucun commentaire actuellement",
      "resource": "Ressource",
      "resource_type": "Type de ressource",
      "title": "Commentaire",
      "title_content": "Commentaires (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Tableau de bord",
    "dashboard_welcome": {
      "call_to_action": "Pour ajouter des sections au tableau de bord, consultez 'app/admin/dashboard.rb'",
      "welcome": "Bienvenue dans Active Admin. Ceci est la page par défaut."
    },
    "delete": "Supprimer",
    "delete_confirmation": "Êtes-vous certain de vouloir supprimer ceci ?",
    "delete_model": "Supprimer %{model}",
    "details": "Détails de %{model}",
    "devise": {
      "change_password": {
        "submit": "Changer mon mot de passe",
        "title": "Changez votre mot de passe"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Vous avez oublié votre mot de passe ?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Connectez-vous",
        "sign_in_with_omniauth_provider": "Connectez-vous avec %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Garder ma session ouverte",
        "submit": "Se connecter",
        "title": "Connexion"
      },
      "password": {
        "title": "Mot de passe"
      },
      "resend_confirmation_instructions": {
        "submit": "Renvoyer les instructions de confirmation",
        "title": "Renvoyer les instructions de confirmation"
      },
      "reset_password": {
        "submit": "Réinitialiser mon mot de passe",
        "title": "Vous avez oublié votre mot de passe ?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Sous-domaine"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Nom d'utilisateur"
      }
    },
    "download": "Télécharger :",
    "dropdown_actions": {
      "button_label": "Actions"
    },
    "edit": "Modifier",
    "edit_model": "Modifier %{model}",
    "empty": "Vide",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Supprimer les filtres",
        "filter": "Filtrer"
      },
      "predicates": {
        "contains": "Contient",
        "ends_with": "Se termine par",
        "equals": "Égal à",
        "greater_than": "Plus grand que",
        "less_than": "Plus petit que",
        "starts_with": "Commence par"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Supprimer",
    "has_many_new": "Ajouter un nouveau %{model}",
    "has_many_remove": "Enlever",
    "index_list": {
      "block": "Liste",
      "blog": "Blog",
      "grid": "Grille",
      "table": "Tableau"
    },
    "less_than": "Less Than",
    "logout": "Déconnexion",
    "main_content": "Veuillez implémenter %{model}#main_content pour afficher le contenu.",
    "new_model": "Créer %{model}",
    "next": "Suivant",
    "pagination": {
      "empty": "Aucun %{model} trouvé",
      "entry": {
        "one": "entrée",
        "other": "entrées"
      },
      "multiple": "Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> sur un total de <b>%{total}</b>",
      "multiple_without_total": "Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Affichage de <b>1</b> %{model}",
      "one_page": "Affichage des <b>%{n}</b> %{model}"
    },
    "powered_by": "Propulsé par %{active_admin} %{version}",
    "previous": "Précédent",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Filtres actuels :",
      "headline": "Etendu du filtre :",
      "no_current_filters": "Aucun filtres"
    },
    "sidebars": {
      "filters": "Filtres",
      "search_status": "Statut de la recherche"
    },
    "status_tag": {
      "no": "Non",
      "yes": "Oui"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Voir"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adresse",
        "address_city": "Ville",
        "address_housenumber": "Numéro de maison",
        "address_postcode": "Code postal",
        "address_street": "Rue",
        "name": "Nom",
        "note": "Note",
        "phone": "Téléphone",
        "type": "Type",
        "website": "Site Web"
      },
      "user": {
        "first_name": "Prénom",
        "last_name": "nom de famille",
        "privacy_policy": "règlementation de la protection de données",
        "terms": "conditions d'utilisation"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "doit être accepté",
        "blank": "champ obligatoire",
        "confirmation": "ne correspond pas à la confirmation",
        "empty": "champ obligatoire",
        "equal_to": "doit être égal à %{count}",
        "even": "doit être pair",
        "exclusion": "pas disponible",
        "greater_than": "doit être supérieur à %{count}",
        "greater_than_or_equal_to": "doit être supérieur ou égal à %{count}",
        "inclusion": "n'est pas dans la liste",
        "invalid": "est non valide",
        "less_than": "doit être plus petit que %{count}",
        "less_than_or_equal_to": "doit être inférieur ou égal à %{count}",
        "not_a_number": "n'est pas un nombre",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "doit être impair",
        "record_invalid": "La validation a échoué: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "est déjà donné",
        "too_long": "est trop long (le maximum est %{count} caractères)",
        "too_short": "est trop court ( minimum %{count} caractères)",
        "wrong_length": "n'a pas la bonne longueur (doit comporter %{count} caractères)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "doit être complété en cas de ........ mot de pass"
            },
            "privacy_policy": {
              "accepted": "acceptation obligatoire"
            },
            "terms": {
              "accepted": "acceptation obligatoire"
            }
          }
        },
        "user_session": {
          "email": "Adresse mail",
          "password": "Mot de passe",
          "remember_me": "Rester connecté"
        }
      },
      "template": {
        "body": "Merci de vérifier les champs suivants:",
        "header": {
          "one": "Impossible d'enregistrer ce %{model} :  erreur",
          "other": "Impossible d'enregistrer ce %{model} : %{count} erreurs"
        }
      }
    },
    "models": {
      "user": "utilisateur"
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
      "notice": "Vous êtes déjà connecté..."
    },
    "require_user": {
      "notice": "Vous devez être connecté pour voir cette page."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Ajouter un nouveau lieu",
      "edit": "Modifier un lieu"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "fermer",
    "skip": "passer"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Veuillez nous écrire en anglais ou en allemand.",
        "flash_after_submit": "Merci de nous avoir contactés. Notre équipe d'assistance reviendra vers vous dès que possible.",
        "header_text_html": "Veuillez tout d'abord consulter les <a href=\"https://news.wheelmap.org/en/faq/\">questions fréquemment posées</a> pour obtenir de l'aide. Si la solution à votre problème ne s'y trouve pas, n'hésitez pas à répondre aux questions suivantes afin que nous puissions le résoudre.",
        "note": "Notez que Wheelmap est un projet open source mené par une organisation à but non lucratif et que nous avons des ressources limitées pour le développement de l'application.",
        "questions": {
          "a": "Qu'avez-vous fait ?",
          "b": "Qu'attendiez-vous qu'il se passe ?",
          "c": "Que s'est-t-il passé à la place ?"
        },
        "submit_button": "Soumettre",
        "title": "Signaler un problème"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Dim",
      "Lun",
      "Mar",
      "Mer",
      "Jeu",
      "Ven",
      "Sam"
    ],
    "abbr_month_names": [
      null,
      "Janv",
      "Fév",
      "Mars",
      "Avr",
      "Mai",
      "Juin",
      "Juill",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Déc"
    ],
    "day_names": [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "ventredi",
      "samedi"
    ],
    "formats": {
      "default": "%d-%m-%Y ",
      "long": "%e %B %Y",
      "short": "%e %b"
    },
    "month_names": [
      null,
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
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
        "one": "une heure environ",
        "other": "%{count} heures environ"
      },
      "about_x_months": {
        "one": "un mois environ",
        "other": "%{count} mois environ"
      },
      "about_x_years": {
        "one": "un an environ",
        "other": "%{count} ans environ"
      },
      "almost_x_years": {
        "one": "presque 1 an",
        "other": "presque %{count} ans"
      },
      "half_a_minute": "une demi-minute",
      "less_than_x_minutes": {
        "one": "moins d'une minute",
        "other": "moinds de %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "moins d'une seconde",
        "other": "moins de %{count} secondes"
      },
      "over_x_years": {
        "one": "plus d'un an",
        "other": "plus de %{count} ans"
      },
      "x_days": {
        "one": "un jour",
        "other": "%{count} jours"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "un mois",
        "other": "%{count} mois"
      },
      "x_seconds": {
        "one": "1 seconde",
        "other": "%{count} secondes"
      }
    },
    "prompts": {
      "day": "Jour",
      "hour": "Heure",
      "minute": "Minute",
      "month": "Mois",
      "second": "Secondes",
      "year": "An"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Votre adresse courriel a été confirmée avec succès.",
      "link": "Vous n'avez pas reçu les instructions de confirmation?",
      "send_instructions": "Dans quelques minutes vous recevrez un courriel avec un lien pour confirmer votre adresse courriel.",
      "send_paranoid_instructions": "Si votre compte existe, vous recevrez un e-mail dans quelques minutes avec des instructions pour confirmer votre compte."
    },
    "destroy": {
      "confirm": "Êtes-vous certain ?",
      "headline": "Supprimer le compte",
      "link": "Supprimer maintenant"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Mot de passe actuel <i>(requis pour confirmer vos changements)</i>",
          "email": "Courriel",
          "password": "Mot de passe <i>(laissez vide si vous ne voulez pas le changer)</i> ",
          "password_confirmation": "Répéter le mot de passe"
        },
        "submit": "Enregistrer les changements"
      },
      "headline": "Modifier le compte"
    },
    "failure": {
      "already_authenticated": "Vous êtes déjà connecté.",
      "inactive": "Votre compte n'a pas encore été activé.",
      "invalid": "Courriel ou mot de passe invalide.",
      "invalid_token": "Jeton d'authentification invalide",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Votre compte est verrouillé",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Votre session est expiré, veuillez vous reconnecter pour continuer.",
      "unauthenticated": "Vous devez vous connecter ou vous inscrire avant de continuer",
      "unconfirmed": "Vous devez confirmer votre compte avant de continuer."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Veuillez cliquer sur le lien que nous venons d'envoyer à votre adresse e-mail. Si vous ne recevez pas de courriel de notre part, veuillez d'abord vérifier si elle n'est pas présente dans votre dossier spam. Si il ne s'y trouve pas, revenez à la page d'inscription et essayez à nouveau.",
        "subject": "Encore une étape pour activer votre compte"
      },
      "reset_password_instructions": {
        "subject": "Instructions de réinitialisation du mot de passe"
      },
      "unlock_instructions": {
        "subject": "Débloquez les instructions"
      }
    },
    "mandatory": "* Exigé",
    "omniauth_callbacks": {
      "failure": "Échec lors de l'autorisation avec %{kind} : « %{reason} ».",
      "permission_missing": "Vous ne nous avez pas accordé les droits nécessaires.",
      "success": "Connecté avec succès avec %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Courriel"
        },
        "submit": "Réinitialiser le mot de passe"
      },
      "headline": "Mot de passe oublié ?"
    },
    "password_reset": {
      "email": {
        "comment": "Si vous n'avez pas demandé de réinitialisation de mot de passe, ignorez juste ce courriel.<br/>Votre mot de passe ne sera pas changé, sauf si vous cliquez sur le lien ci-dessus et que vous définissez un nouveau mot de passe.",
        "headline": "Bienvenue %{email}",
        "link": "Changer mon mot de passe",
        "text": "Une demande a été faite pour changer votre mot passe. S'il s'agissait de vous, cliquez sur le lien suivant - autrement ignorez-la."
      },
      "form": {
        "labels": {
          "password": "Nouveau mot de passe",
          "password_confirmation": "Répéter le mot de passe"
        },
        "submit": "Réinitialiser le mot de passe"
      },
      "headline": "Réinitialiser le mot de passe"
    },
    "passwords": {
      "link": "Mot de passe oublié ?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Vous recevrez dans quelques minutes un courriel avec des instructions pour réinitialiser votre mot de passe",
      "send_paranoid_instructions": "Si votre compte existe, vous recevrez dans quelques minutes un courriel avec des instructions pour réinitialiser votre mot de passe",
      "updated": "Votre mot de passe a été changé avec succès. Vous êtes maintenant connecté",
      "updated_not_active": "Votre mot de passe a été changé avec succès"
    },
    "registrations": {
      "destroyed": "Au revoir ! Votre compte a été annulé avec succès. Nous espérons vous revoir bientôt.",
      "inactive_signed_up": "Vous vous êtes inscrit avec succès, mais nous n'avons pas pu vous connecter. Raison : « %{reason} »",
      "link": "Inscription",
      "reasons": {
        "inactive": "inactif",
        "locked": "verrouillé",
        "unconfirmed": "non confirmé"
      },
      "signed_up": "Vous vous êtes inscrit avec succès. Un e-mail de confirmation vous a été envoyé.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Vous avez mis votre compte à jour avec succès."
    },
    "sessions": {
      "inactive": "Votre compte n'a pas encore été activé.",
      "invalid": "Courriel ou mot de passe invalide.",
      "invalid_token": "Jeton d'authentification invalide",
      "link": "Connexion",
      "locked": "Votre compte est verrouillé",
      "new": {
        "no_osm_account": "Vous n'avez pas de compte OpenStreetMap ?",
        "osm_promo_text": "Wheelmap est basée sur des données géographiques d'OpenStreetMap (OSM). OpenStreetMap qui est une mappemonde libre et gratuite créée par des personnes comme vous. Un Wikipédia des cartes. Pour pouvoir modifier des lieux ou en ajouter de nouveaux, vous devez avoir un compte OpenStreetMap et y être connecté.",
        "promo_text_thank_you": "Merci beaucoup pour votre soutien !",
        "sign_in_with": "Connexion avec %{kind}",
        "sign_up_with_osm": "Inscrivez-vous maintenant.",
        "wheelmap_promo_text": "Grâce à votre connaissance des endroits accessibles en fauteuil roulant, vous aidez les personnes à mobilité réduite à mieux organiser leur vie de tous les jours. De plus, OpenStreetMap s'enrichit considérablement en détails."
      },
      "signed_in": "Connecté avec succès",
      "signed_out": "Vous vous êtes déconnecté avec succès",
      "timeout": "Votre session est expirée, veuillez vous reconnecter pour continuer.",
      "unauthenticated": "Vous devez vous connecter ou vous inscrire avant de continuer",
      "unconfirmed": "Vous devez confirmer votre compte avant de continuer"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Courriel",
          "password": "Mot de passe",
          "remember_me": "Rester connecté ?"
        },
        "submit": "Connexion"
      },
      "headline": "Connexion"
    },
    "sign_out": {
      "headline": "Déconnexion"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirmer mon compte",
        "please_confirm": "Vous pouvez confirmer votre compte avec le lien ci-dessous :",
        "welcome": "Bienvenue %{email} !"
      },
      "form": {
        "labels": {
          "email": "Courriel",
          "password": "Mot de passe",
          "password_confirmation": "Répéter le mot de passe",
          "wants_newsletter": "Oui, tenez-moi au courant des nouveautés sur Wheelmap - mais pas plus d'une fois par mois."
        },
        "submit": "Inscription"
      },
      "headline": "Inscription"
    },
    "unlocks": {
      "link": "Vous n'avez pas reçu les instructions de déverrouillage ?",
      "send_instructions": "Vous recevrez un e-mail dans quelques minutes avec des instructions sur la façon de déverrouiller votre compte",
      "send_paranoid_instructions": "Si votre compte existe, vous recevrez dans quelques minutes un courriel avec des instructions pour déverrouiller votre compte.",
      "unlocked": "Votre compte a été déverrouillé avec succès. Vous êtes maintenant connecté."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "doit être accepté",
      "already_confirmed": "a déjà été confirmé",
      "blank": "doit être rempli",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "ne correspond pas à la confirmation",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "doit être rempli",
      "equal_to": "doit être exactement %{count}",
      "even": "doit être un nombre pair",
      "exclusion": "est réservé",
      "expired": "expiré, veuillez en demander un nouveau",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "doit être supérieur à %{count}",
      "greater_than_or_equal_to": "doit être supérieur ou égal à %{count}",
      "inclusion": "n'est pas une valeur valide",
      "invalid": "invalide",
      "less_than": "doit être inférieur à %{count} ",
      "less_than_or_equal_to": "doit être inférieur ou égal à %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "n'est pas un nombre",
      "not_an_integer": "doit être un entier",
      "not_found": "est introuvable",
      "not_locked": "n'était pas verrouillé",
      "not_saved": {
        "one": "Une erreur a empêché l'enregistrement de %{resource} :",
        "other": "%{count} erreurs ont empêché l'enregistrement de %{resource} :"
      },
      "odd": "doit être un nombre impair",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "est déjà utilisé",
      "too_long": "est trop long (pas plus de %{count} caractères)",
      "too_short": "est trop court (pas moins de %{count} caractères)",
      "wrong_length": "n'a pas la bonne longueur (devrait avoir %{count} caractères)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "L'adresse du site Web est invalide."
        }
      }
    },
    "template": {
      "body": "Il y avaient des problèmes avec les champs suivants :",
      "header": {
        "one": "Une erreur a empêché l'enregistrement de %{model}",
        "other": "%{count} erreurs ont empêché l'enregistrement de %{model} "
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Vous pouvez toujours modifier le marquage d'un lieu vous-même. Choisissez juste le bon marquage et enregistrez - voilà !",
      "1": "En tant qu'utilisateur connecté, vous pouvez ajouter/corriger toutes les informations d'un lieu. Cliquez sur « Modifier » pour corriger ou ajouter des informations dans le masque.",
      "2": "Vous pouvez ajouter d'autres informations (p. ex. : « Ce lieu a une rampe mobile ») dans la rubrique commentaire. Cliquez sur « Modifier » et « Ajouter un commentaire »."
    },
    "headline": "Y a-t-il un problème avec ce lieu ?",
    "questions": {
      "0": "Le marquage est erroné.",
      "1": "Les détails de ce lieu sont incorrects ou manquants.",
      "2": "J'ai d'autres informations sur ce lieu."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} a été créé avec succès"
      },
      "destroy": {
        "alert": "%{resource_name} n'a pas pu être enlevé",
        "notice": "%{resource_name} a été détruit avec succès"
      },
      "update": {
        "notice": "%{resource_name} a été mis à jour avec succès"
      }
    },
    "photos": {
      "destroy": {
        "notice": "L'image a été supprimée avec succès"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Accessible en fauteuil roulant",
    "show_limited_accessible_places": "Partiellement accessible en fauteuil roulant",
    "show_places_without_status": "Statut inconnu",
    "show_unaccessible_places": "Pas d'accès pour fauteuil roulant"
  },
  "formtastic": {
    "cancel": "Annuler",
    "create": "Créer un(e) %{model}",
    "hints": {
      "email": "Nous traitons votre adresse de manière confidentielle. Nous promettons de ne pas vous envoyer de spam !",
      "lat": "Déplacez sur la carte le marqueur à la bonne position",
      "osm_username": "Pas encore membre ?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Créez un compte Openstreetmap maintenant</a>",
      "password": "(laissez vide si vous ne voulez pas le modifier)",
      "phone": "Par exemple : +49 30 12345678",
      "website": "Par exemple : http://www.exemple.com "
    },
    "labels": {
      "category": "Catégorie :",
      "centralkey": "Clef centrale :",
      "city": "Ville :",
      "create": "Créer un lieu",
      "email": "Courriel",
      "finish": "Terminer",
      "housenumber": "Numéro :",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Nom :",
      "osm_password": "Mot de passe OpenStreetMap",
      "osm_username": "Nom de compte OpenStreetMap",
      "password": "Mot de passe",
      "password_confirmation": "Répéter le mot de passe",
      "phone": "Téléphone :",
      "postcode": "Code postal :",
      "privacy_policy": "J'accepte les paragraphes 1 et 2 de la convention de confidentialité des données.",
      "reset": "Réinitialiser",
      "save": "Enregistrer",
      "street": "Rue :",
      "terms": "J'accepte les conditions générales d'utilisation.",
      "type": "Type :",
      "website": "Site Web :",
      "wheelchair": "Accessibilité en fauteuil roulant ?",
      "wheelchair_description": "Commentaire sur l'accessibilité :",
      "wheelchair_toilet": "Toilettes accessibles en fauteuil roulant :"
    },
    "no": "Non",
    "required": "requis(e)",
    "reset": "Réinitialiser ce(tte) %{model}",
    "submit": "Enregistrer ce(tte) %{model}",
    "titles": {
      "basic": "Données de base",
      "optional": "Plus d'informations <span class=\"addition\">(tous les champs sont optionnels)</span>"
    },
    "update": "Modifier ce(tte) %{model}",
    "yes": "Oui"
  },
  "global": {
    "form_validation_error": "Veuillez consulter les erreurs indiquées ci-dessous"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org est une carte en ligne pour rechercher, trouver et marquer des lieux accessibles aux fauteuils roulants. Impliquez-vous en indiquant les lieux publics comme les bars, les restaurants, les cinémas ou les supermarchés!",
      "homepage": "Page d'accueil",
      "keywords": "fauteuil roulant accessibles lieux trouver chercher marquer",
      "search": "Recherche",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Nouvelles",
      "choose_language": "Choisir une langue",
      "contact": "Contact",
      "faq": "FAQ",
      "feedback": "Commentaires",
      "home": "Démarrer",
      "how_to_add_a_place": "Comment ajouter des lieux ?",
      "imprint": "Mentions légales",
      "logged_in_as": "Connecté en tant que :",
      "login": "Connexion",
      "logout": "Déconnexion",
      "map": "Carte",
      "newsletter": "Lettre d'information",
      "press": "Presse",
      "profile": "Profil",
      "projects": "Participez",
      "report_problem": "Signaler un problème",
      "suggestions": "Suggestions",
      "travelguide": "Guide de voyage",
      "what_is_barrier_free": "Que veut dire « accessible en fauteuil roulant » ?",
      "what_is_wheelmap": "Qu'est-ce que Wheelmap ?"
    },
    "searchbar": {
      "add_place": "Ajouter un autre lieu",
      "find": "Trouver",
      "placeholder": "Chercher un lieu",
      "title_add_place": "Ajouter un nouveau lieu à cet endroit maintenant !"
    },
    "tagline": "Logo Wheelmap",
    "title": "Trouver des lieux accessibles en fauteuil roulant",
    "toolbar": {
      "categories": "Catégories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "%{entry_name}  <b>%{first} - %{last}</b> sur <b>%{total}</b> au total"
      },
      "one_page": {
        "display_entries": {
          "one": "<b>%{count}</b> %{entry_name}",
          "other": "<b>tous les %{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Veuillez choisir"
    },
    "submit": {
      "create": "créer %{model} ",
      "submit": "enregistrer %{model} ",
      "update": "mettre à jour %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Voir sur Wheelmap.org",
      "filter": {
        "category": "Choisir une catégorie :",
        "deselect_all": "Tout désélectionner",
        "select_all": "Tout sélectionner",
        "wheelchair": "Accessible en fauteuil roulant ?"
      },
      "ie": {
        "action": {
          "ignore": "Ignorer",
          "upgrade": "Mettre le navigateur à jour"
        },
        "warning": {
          "headline": "Nous sommes désolés ! ",
          "message": "Vous semblez utiliser Internet Explorer. Wheelmap exige un navigateur répondant aux standards pour fonctionner correctement. Veuillez prendre en considération l'utilisation de Firefox, de Chrome, de Safari ou d'Opera."
        }
      },
      "link": {
        "node": {
          "create": "Ajouter un nouveau lieu"
        }
      },
      "overlay": {
        "button": "Ok, on y va !",
        "categories": "Filtrer les lieux par catégories",
        "filter": "Filtrer les lieux selon l'accessibilité en fauteuil roulant",
        "headline": "Marquer et trouver des lieux accessibles en fauteuil roulant grâce à Wheelmap.org - à travers le monde et gratuitement. C'est facile :",
        "lookup": "Chercher un lieu spécifique",
        "secondary_headline": "Notre système de feux de circulation pour marquer l'accessibilité en fauteuil roulant des lieux publics :"
      },
      "popup": {
        "form": {
          "limited": "Partiellement accessible en fauteuil roulant",
          "no": "Pas d'accès pour fauteuil roulant",
          "save": "Mettre à jour",
          "unknown": "Statut inconnu",
          "yes": "Accessible en fauteuil roulant"
        },
        "help": "Accessible en fauteuil roulant ? (aide)",
        "more": "davantage.."
      },
      "zoom_alert": "Zoomez plus près afin de voir plus de lieux."
    }
  },
  "how?": "Comment ?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Les %{type} à accès limité en fauteuil roulant à %{city} (%{count})"
        },
        "no": {
          "headline": "Les %{type} non accessibles en fauteuil roulant à %{city} (%{count})"
        },
        "unknown": {
          "headline": "Les %{type} de %{city} dont l'état d'accessibilité est inconnu  (%{count})"
        },
        "yes": {
          "headline": "Les %{type} accessibles en fauteuil roulant à %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Un projet par Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Choisir une catégorie"
    },
    "node": {
      "info_edit_position": "L'emplacement apparaîtra sur Wheelmap tel que montré ci-dessus. Si le marqueur n'est pas au bon endroit, vous pouvez <a href=\"%{url}\">changer sa position sur OpenStreetMap.</a>",
      "mail": {
        "body": "(Veuillez seulement écrire en anglais ou en allemand.)\n\nBonjour Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problème avec %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choisir un type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street} "
    },
    "tags": {
      "phone": "Téléphone : ",
      "website": "Site Web :"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Désolé, votre saisie était erronée ou incomplète.",
        "successfull": "Merci, votre envoi a été enregistré avec succès et sera en ligne sous peu."
      }
    },
    "edit": {
      "header": {
        "title": "Modifier le lieu : %{node} | wheelmap.org "
      },
      "link": {
        "large_map": "&laquo ; Annuler"
      }
    },
    "errors": {
      "default": "Désolé, une erreur est survenue et nous a été signalée",
      "not_authorized": "Échec lors de l'authentification.",
      "not_available": "Désolé, cette page n'est temporairement pas disponible.",
      "not_existent": "Désolé, ce lieu n'est plus disponible.",
      "not_found": "Désolé, page introuvable.",
      "param_missing": "Veuillez fournir un terme d'interrogation"
    },
    "flash": {
      "authorize_wheelmap": "Il vous faut un compte OpenStreetMap pour modifier les données"
    },
    "new": {
      "form": {
        "legend": "Emplacement du lieu",
        "location": "Veuillez cliquer sur la carte à l'endroit où le lieu est situé !",
        "section": {
          "accessibility": {
            "name": "Accessibilité en fauteuil roulant",
            "title": "Informations sur l'accessibilité par fauteuil roulant"
          },
          "address": {
            "help": "Vous pouvez faire glisser le marqueur à la position correcte du lieu.",
            "name": "Adresse",
            "title": "Où est ce lieu?"
          },
          "contact": {
            "name": "Contact",
            "title": "Autres informations de contact"
          },
          "name_category": {
            "name": "Nom et type de lieu",
            "title": "Donnez-nous quelques informations initiales à propos de votre lieu :"
          },
          "overview": {
            "title": "Toutes les informations sont-elles correctes ?"
          },
          "similar_nodes": {
            "empty": "Aucun lieu similaire n'a été trouvé.",
            "go_edit": "Continuer avec ce lieu",
            "go_new": "Aucun des lieux ci-dessus…",
            "name": "Lieux similaires",
            "title": "Nous avons trouvé des lieux similaires à proximité. Est-ce un de ceux-là ?"
          }
        },
        "title": "Ajouter un lieu"
      },
      "header": {
        "title": "Nouveau lieu | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Annuler"
      }
    },
    "node": {
      "link": {
        "claim": "Travaillez-vous ici ?",
        "edit_node": "Modifier le lieu",
        "report_bug": "Signaler un problème"
      }
    },
    "node_data": {
      "address": "Adresse :",
      "contact_details": "Coordonnées :"
    },
    "node_edit": {
      "details": "Détails",
      "edit": "Modifier"
    },
    "node_map": {
      "map": "Carte :"
    },
    "node_nearby": {
      "places_nearby": "Places nearby:"
    },
    "node_note": {
      "comment": "Commentaire :"
    },
    "node_photos": {
      "add": "Ajouter",
      "alert": "Veuillez noter que l'entrée doit être parfaitement visible sur la photo afin de répondre aux questions suivantes : Y a-t-il des marches à l'entrée ? Quelle est la hauteur approximative des marches ? Quelle est la largeur de la porte ? La photo doit être au format JPG ou PNG et ne doit pas dépasser 10 Mo.",
      "photos_of_this_place": "Photos de ce lieu :",
      "upload": "Téléverser"
    },
    "node_similar": {
      "similar": "Lieux similaires : %{name}"
    },
    "node_status": {
      "accessible_toilet": "Toilettes accessibles en fauteuil roulant :",
      "premium": "%{name} dit : cet endroit est",
      "wheelchair_accessibility": "Accessibilité en fauteuil roulant :"
    },
    "node_streetview": {
      "streetview": "Vue de la rue :"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Découvrez si ce lieu est accessible en fauteuil roulant sur Wheelmap.org. Ou ajoutez des informations et des photos à ce lieu.",
          "title": "Ce lieu se trouve sur Wheelmap.org : %{name}"
        },
        "title": "Lieu : %{node} | wheelmap.org "
      },
      "link": {
        "back": "retour",
        "large_map": "Agrandir",
        "listing": "Tous les lieux de type %{type} à %{city}",
        "upload": "Téléverser l'image"
      },
      "more_data_from": "Il y a d'autres données pour ce lieu, vérifié par :",
      "share": {
        "email": "Courriel",
        "facebook": "Facebook",
        "text": "J'ai trouvé ce lieu sur Wheelmap.org : %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Désolé, votre entrée était erronée ou incomplète",
        "successfull": "Merci, votre envoi a été enregistré avec succès et sera en ligne sous peu."
      }
    },
    "update_wheelchair": {
      "successfull": "L'état de « %{name} » a été modifié à « %{status} » et sera en ligne sous peu."
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
        "format": "%n %u ",
        "units": {
          "billion": "milliard",
          "million": "million",
          "quadrillion": "quadrillion",
          "thousand": "Mille",
          "trillion": "trillion",
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
            "one": "octet",
            "other": "octets"
          },
          "gb": "Go",
          "kb": "Ko",
          "mb": "Mo",
          "tb": "To"
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
        "headline": "Vous devez connecter votre compte à votre compte « OpenStreetMap » avant de pouvoir créer ou modifier des lieux sur wheelmap.org."
      }
    },
    "callback": {
      "notice": "Votre compte Wheelmap est maintenant connecté à votre compte %{user} sur OpenStreetMap."
    }
  },
  "or": "ou",
  "place": {
    "one": "%{count} lieu",
    "other": "%{count} lieux"
  },
  "poi": {
    "category": {
      "accommodation": "Hébergement",
      "education": "Éducation",
      "food": "Nourriture",
      "government": "Gouvernement",
      "health": "Santé",
      "leisure": "Loisirs",
      "misc": "Divers",
      "money_post": "Banque et bureau de poste",
      "public_transfer": "Transport public",
      "shopping": "Magasins",
      "sport": "Sport",
      "tourism": "Tourisme",
      "unknown": "Inconnu"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hôtel près de la plage",
        "bed_and_breakfast": "Gîte touristique",
        "camp_site": "Site de camping",
        "caravan_site": "Site caravanier",
        "chalet": "Chalet",
        "dormitory": "Dortoir",
        "guest_house": "Petit hôtel",
        "hostel": "Auberge",
        "hotel": "Hôtel",
        "motel": "Motel"
      },
      "education": {
        "college": "Établissement post-secondaire",
        "driving_school": "Auto-école",
        "kindergarten": "Maternelle",
        "library": "Bibliothèque",
        "museum": "Musée",
        "school": "École",
        "university": "Université"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Brasserie en plein air",
        "cafe": "Café",
        "drinking_water": "Eau potable",
        "fast_food": "Restauration rapide",
        "ice_cream": "Crème/yogourt glacé",
        "pub": "Pub",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Palais de justice",
        "embassy": "Ambassade",
        "employment_agency": "Agence pour l'emploi",
        "government": "Agence gouvernementale",
        "police": "Police",
        "public_building": "Bâtiment ouvert au public",
        "townhall": "Mairie"
      },
      "health": {
        "alternative": "Praticien en médecine alternative",
        "dentist": "Dentiste",
        "doctors": "Médecin",
        "hearing_aids": "Audioprothésiste",
        "hospital": "Hôpital",
        "medical_supply": "Équipement médical",
        "occupational_therapist": "Ergothérapeute",
        "pharmacy": "Pharmacie",
        "physiotherapist": "Physiothérapeute",
        "psychotherapist": "Psychothérapeute",
        "social_facility": "Établissement social",
        "speech_therapist": "Orthophoniste",
        "veterinary": "Vétérinaire"
      },
      "leisure": {
        "arena": "Stade",
        "brothel": "Maison close",
        "casino": "casino",
        "cinema": "Cinéma",
        "community_centre": "Centre communautaire",
        "gallery": "Galerie",
        "massage": "Massage, spa",
        "nightclub": "Boîte de nuit",
        "playground": "Terrain de jeu",
        "sauna": "Sauna",
        "stripclub": "Club de striptease",
        "tattoo": "Tatoueur",
        "theatre": "Théâtre",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Association",
        "company": "Entreprise (bureau)",
        "estate_agent": "Agent immobilier",
        "insurance": "Assurance",
        "lawyer": "Avocat",
        "ngo": "Organisation non gouvernementale",
        "place_of_worship": "Lieu de culte",
        "political_party": "Bureau de parti politique",
        "toilets": "Toilettes"
      },
      "money_post": {
        "atm": "GAB",
        "bank": "Banque",
        "bureau_de_change": "Bureau de change",
        "post_box": "Boîte aux lettres",
        "post_office": "Bureau de poste"
      },
      "public_transfer": {
        "aerodrome": "Aéroport",
        "bicycle_parking": "Stationnement à vélos",
        "bicycle_rental": "Location de vélos",
        "boatyard": "Chantier naval",
        "bus_station": "Gare routière",
        "bus_stop": "Arrêt de bus",
        "cable_car": "Téléphérique",
        "car_rental": "Location de voiture",
        "car_sharing": "Autopartage",
        "chair_lift": "Télésiège",
        "ferry": "Traversier",
        "ferry_terminal": "Gare maritime",
        "fuel": "Station service",
        "halt": "Halte",
        "light_rail": "Système léger sur rail",
        "parking": "Stationnement",
        "parking_aisle": "Voie de stationnement",
        "platform": "Quai de gare",
        "station": "Gare féroviaire",
        "subway_entrance": "Entrée de métro",
        "terminal": "Aérogare",
        "tram_stop": "Arrêt de tramway"
      },
      "shopping": {
        "alcohol": "Alcool",
        "antiques": "Antiquités",
        "art": "Galerie",
        "bakery": "Boulangerie",
        "beauty": "Salon d'esthétique",
        "beverages": "Boissons",
        "bicycle": "Magasin de vélos",
        "books": "Livres",
        "butcher": "Boucherie",
        "car_repair": "Réparation auto",
        "car_shop": "Concessionnaire auto",
        "chemist": "Chimiste / Pharmacie",
        "clothes": "Vêtements",
        "computer": "Ordinateur",
        "confectionery": "Magasin de bonbons",
        "convenience": "Magasin d'appoint",
        "copyshop": "Reprographie",
        "deli": "Épicerie fine",
        "department_store": "Grand magasin",
        "doityourself": "Magasin de bricolage",
        "dry_cleaning": "Nettoyage à sec",
        "electronics": "Électronique",
        "erotic": "Sex shop",
        "fabric": "Magasin de tissus",
        "farm_shop": "Produits fermiers",
        "florist": "Fleuriste",
        "funeral_directors": "Salon funéraire",
        "furniture": "Ameublement",
        "garden_centre": "Jardinerie",
        "gift": "Boutique de cadeaux",
        "greengrocer": "Marchand de fruits et légumes",
        "hairdresser": "Coiffeur",
        "hardware": "Quincaillerie",
        "interior_decoration": "Boutique de design d'intérieur",
        "jewelry": "Bijouterie",
        "kiosk": "Kiosque",
        "laundry": "Laverie",
        "mall": "Centre commercial",
        "mobile_phone": "Magasin de téléphonie mobile",
        "music": "Magasin de disques",
        "musical_instrument": "Magasin d'instruments de musique",
        "newsagent": "Actualités agent",
        "optician": "Opticien",
        "organic": "Magasin de produits biologiques",
        "outdoor": "Équipement de plein air",
        "pet": "Animalerie",
        "photo": "Photo",
        "second_hand": "Friperie",
        "shoes": " Chaussures",
        "sports": " Sports",
        "stationery": "Papeterie",
        "supermarket": "Supermarché",
        "tailor": "Tailleur",
        "tea": "Magasin de thé",
        "tobacco": "Bureau de tabac",
        "toys": "Jouets",
        "travel_agency": "Agence de voyage",
        "variety_store": "Magasin discount",
        "video": "Location vidéo"
      },
      "sport": {
        "pitch": "Terrain de sport",
        "sports_centre": "Centre de sport",
        "stadium": "Stade",
        "swimming": "Piscine",
        "swimming_pool": "Piscine"
      },
      "tourism": {
        "archaeological_site": "Site archéologique",
        "arts_centre": "Centre des arts",
        "artwork": "Oeuvre d'art ",
        "attraction": "Attraction",
        "battlefield": "Champ de bataille",
        "beach": "Plage",
        "beacon": "Phare",
        "castle": "Château",
        "cave_entrance": "Entrée d'une grotte",
        "information": "Informations touristiques",
        "memorial": "Mémorial",
        "theme_park": "Parc d'attractions",
        "tower": "Tour",
        "viewpoint": "Point de vue"
      },
      "unknown": {
        "unknown": "Inconnu"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "État : connecté",
          "grant": "Se connecter maintenant",
          "not_connected": "État : non connecté",
          "revoke": "Se déconnecter"
        }
      },
      "headline": "Modifier votre profil"
    }
  },
  "ransack": {
    "all": "tous",
    "and": "et",
    "any": "au moins un",
    "asc": "ascendant",
    "attribute": "attribut",
    "combinator": "combinateur",
    "condition": "condition",
    "desc": "descendant",
    "or": "ou",
    "predicate": "prédicat",
    "predicates": {
      "blank": "est blanc",
      "cont": "contient",
      "cont_all": "contient tous",
      "cont_any": "contient au moins un",
      "does_not_match": "ne correspond pas à",
      "does_not_match_all": "ne correspond à aucun",
      "does_not_match_any": "ne correspond pas à au moins un",
      "end": "finit par",
      "end_all": "finit par tous",
      "end_any": "finit par au moins un",
      "eq": "égal à",
      "eq_all": "égal à tous",
      "eq_any": "égal à au moins un",
      "false": "est faux",
      "gt": "supérieur à",
      "gt_all": "supérieur à tous",
      "gt_any": "supérieur à au moins un",
      "gteq": "supérieur ou égal à",
      "gteq_all": "supérieur ou égal à tous",
      "gteq_any": "supérieur ou égal à au moins un",
      "in": "inclus dans",
      "in_all": "inclus dans tous",
      "in_any": "inclus dans au moins un",
      "lt": "inférieur à",
      "lt_all": "inférieur à tous",
      "lt_any": "inférieur à au moins un",
      "lteq": "inférieur ou égal à",
      "lteq_all": "inférieur ou égal à tous",
      "lteq_any": "inférieur ou égal à au moins un",
      "matches": "correspond à",
      "matches_all": "correspond à tous",
      "matches_any": "correspond à au moins un",
      "not_cont": "ne contient pas",
      "not_cont_all": "ne contient pas tous",
      "not_cont_any": "ne contient pas au moins un",
      "not_end": "ne finit pas par",
      "not_end_all": "ne finit pas par tous",
      "not_end_any": "ne finit pas par au moins un",
      "not_eq": "différent de",
      "not_eq_all": "différent de tous",
      "not_eq_any": "différent d'au moins un",
      "not_in": "non inclus dans",
      "not_in_all": "non inclus dans tous",
      "not_in_any": "non inclus dans au moins un",
      "not_null": "n'est pas null",
      "not_start": "ne commence pas par",
      "not_start_all": "ne commence pas par tous",
      "not_start_any": "ne commence pas par au moins un",
      "null": "est null",
      "present": "est présent",
      "start": "commence par",
      "start_all": "commence par tous",
      "start_any": "commence par au moins un",
      "true": "est vrai"
    },
    "search": "recherche",
    "sort": "tri",
    "value": "valeur"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Désolé, nous n'avons pas pu trouver d'endroit appelé « %{query} ».",
        "hint": {
          "example": "<strong>Exemple :</strong> Londres, Royaume-Uni",
          "info": "Notre service de recherche ne fonctionne qu'avec un nom et/ou une adresse. Par conséquent, veuillez donc rechercher soit le nom du lieu, soit une adresse, p. ex. nom de la rue et/ou ville. La recherche d'un type de lieu, p. ex. restaurant ou cinéma,  ne fonctionne pas !",
          "work_in_progress": "Nous travaillons fort afin de rendre la recherche de lieux encore plus facile et plus intuitive dans le futur."
        },
        "try_this": {
          "address": "Veuillez fournir plus d'<strong>informations concernant l'adresse</strong>.",
          "intro": "Essayez ceci :",
          "spell_check": "Vérifiez l'<strong>orthographe</strong> de votre saisie."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} résultat :",
          "other": "%{count} résultats :"
        }
      },
      "search": {
        "for": "Rechercher « %{q} » ",
        "not_found": "Aucun lieu n'a été trouvé !"
      }
    },
    "timeout": {
      "headline": "Désolé, quelque chose s'est mal passé",
      "info": "Notre service de recherche était temporairement indisponible.",
      "repeat_search": "Ressayer la recherche"
    }
  },
  "splash": {
    "countline": "%{count} lieux ont déjà été marqués.",
    "headline": "Tout le monde peut ajouter des lieux accessibles en fauteuil roulant !",
    "start": "Démarrer",
    "step1": "Cliquez sur un lieu que vous connaissez",
    "step2": "Marquez le et cliquez sur enregistrer",
    "step3": "C'est tout ! Aucune inscription nécessaire",
    "what_is_wheelmap": "Qu'est-ce que Wheelmap ?"
  },
  "statistics": "Statistiques",
  "support": {
    "array": {
      "last_word_connector": "et",
      "sentence_connector": "et",
      "two_words_connector": "et",
      "words_connector": ","
    },
    "select": {
      "prompt": "Veuillez choisir"
    }
  },
  "time": {
    "am": "avant midi",
    "formats": {
      "default": "%a %d %b %Y %H:%M:%S %z",
      "long": "%d %B %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "après-midi"
  },
  "toiletstatus": {
    "no": "Pas de toilettes accessibles en fauteuil roulant",
    "unknown": "Statut des toilettes inconnu",
    "what_is": {
      "no": "Largeur intérieure de la porte d'entrée min. 90 cm (35 in), aire de plancher dégagée min. 150 cm x 150 cm (59 in x 59 in), siège des toilettes adapté aux fauteuils roulants, poignées de sécurité pliantes, lavabo accessible.",
      "unknown": "Aidez en marquant le statut des toilettes !",
      "yes": "Largeur intérieure de la porte d'entrée min. 90 cm (35 in), aire de plancher dégagée min. 150 cm x 150 cm (59 in x 59 in), siège des toilettes adapté aux fauteuils roulants, poignées de sécurité pliantes, lavabo accessible."
    },
    "yes": "Toilettes accessibles en fauteuil roulant"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Votre compte est maintenant activé !"
      },
      "error": {
        "notice": "L'adresse courriel et le mot de passe ne correspondent pas."
      },
      "notice": "Vous êtes connecté !"
    },
    "destroy": {
      "notice": "Au revoir, revenez bientôt !"
    },
    "new": {
      "email": "Courriel",
      "login": "Connexion",
      "login_with_twitter": "Se connecter avec Twitter",
      "password": "Mot de passe",
      "remember_me": "Rester connecté"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Vous y êtes presque ! Complétez ici votre inscription à votre compte Wheelmap :",
        "set_password_for_mobile": "Vous avez terminé votre inscription à OpenStreetMap. Choisissez maintenant une adresse courriel associée à votre compte Wheelmap ainsi nous pouvons vous informer de vos activités (Par exemple le nombre de places que vous avez marquées). Vous pouvez accéder à ces informations sur votre \"Profil\".",
        "text": "Comment pouvons-nous vous joindre ? Vous pourrez changer cette information ultérieurement dans votre profil."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Vos images téléversées"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Vos informations de compte"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Oui, tenez-moi au courant des nouveautés sur Wheelmap.",
        "text": "Restez à jour avec le bulletin d'information Wheelmap. Ne vous inquiétez pas, nous ne spammons pas. Nous vous informons une fois par mois maximum.",
        "title": "Lettre d'information"
      },
      "photos": {
        "empty": "Vous n'avez pas encore téléchargé de photos.",
        "title": "Album de photos"
      },
      "show": {
        "greeting": {
          "anonymously": "Salut",
          "personalized": "Salut %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "téléchargé %{count} lieu",
            "other": "téléchargé %{count} lieux"
          },
          "pois_added": {
            "one": "ajouté %{count} lieu",
            "other": "ajouté %{count} lieux"
          },
          "pois_edited": {
            "one": "édité %{count} lieu",
            "other": "édité %{count} lieux"
          },
          "pois_marked": {
            "one": "indiqué %{count} lieu",
            "other": "indiqué %{count} lieux"
          },
          "text": "Vous avez"
        },
        "text_html": "Bonjour,<br>\nBienvenue (ou re) sur Wheelmap.org ! Nous sommes heureux de vous avoir à bord ! Vous pouvez parcourir notre <a href=\\\"http://news.wheelmap.org/en/\\\">Blog</a> ou <a href=\\\"http://news.wheelmap.org/en/FAQ/\\\">FAQs</a> si vous voulez apprendre à connaître Wheelmap.org un peu mieux. Vous pouvez en apprendre davantage sur les <a href=\\\"http://news.wheelmap.org/en/wheelmap-ambassador/\\\">projets</a> que nous proposons autour de Wheelmap.org et comment vous pouvez vous impliquer.<br>\nPour rester en contact vous pouvez vous abonner à notre lettre d'information mensuelle et nous suivre sur <a href=\\\"https://www.facebook.com/wheelmap\\\">Facebook</a> et <a href=\\\"https://twitter.com/wheelmap\\\">Twitter</a>. Nous sommes impatients d'entendre votre opinion et discuter avec vous !<br>\nEt maintenant, bonne cartographie !<br>\nVotre équipe Wheelmap",
        "title": "Aperçu"
      },
      "widget": {
        "categories": "Afficher le filtre par catégorie",
        "center": "Zone de la carte",
        "empty_center": "Rechercher le centre de la carte...",
        "empty_provider": "Choisissez un fournisseur",
        "height": "Hauteur",
        "legends": {
          "embed": "Code intégré",
          "embed_explanation": "Vous pouvez modifier les spécifications pour la latitude ( <code> lat </code> ), longitude ( <code> lon </code> ) et le niveau de zoom ( <code> zoom </code> ) dans le code et ainsi ajuster ci-dessus manuellement  le segment carte (Widget) selon l'emplacement que vous voulez montrer.",
          "general": "Créez votre propre widget Wheelmap et intégrez-le dans votre site ou blog.",
          "preview": "Aperçu",
          "settings": "Paramètres"
        },
        "providers": "Fournisseur",
        "title": "Widget",
        "width": "Largeur"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Premier",
      "last": "Dernier &raquo;",
      "next": "Suivant &rsaquo;",
      "previous": "&lsaquo; Précédent",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partiellement accessible en fauteuil roulant",
    "no": "Pas d'accès pour fauteuil roulant",
    "unknown": "Statut inconnu",
    "yes": "Accessible en fauteuil roulant"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Un projet par",
      "based_on": "Basé sur",
      "become_a_supporter": "Soutenez Wheelmap",
      "main_supporter": "Partisans principaux"
    },
    "itunes": {
      "alt": "Logo App Store",
      "title": "Télécharger l'appli pour iPhone maintenant !"
    },
    "logo": {
      "alt": "Logo Wheelmap - trouver des lieux accessibles en fauteuil roulant",
      "title": "Wheelmap - trouver des lieux accessibles en fauteuil roulant"
    },
    "what_is": {
      "fully_accessible": "Entrée sans marches, toutes les pièces sans marches .",
      "limited_accessible": "L'entrée a une marche d'une hauteur max. de 7 cm (3 in), la plupart des pièces sont sans marches.",
      "not_accessible": "L'entrée a une ou plusieurs marches, les pièces ne sont pas accessibles.",
      "unknown_accessible": "Aidez en marquant des lieux !"
    }
  },
  "will_paginate": {
    "next_label": "Suivant &#8594;",
    "page_entries_info": {
      "multi_page": "Affichant %{model} %{from} -%{to} de %{count} au total",
      "multi_page_html": "Affichant %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> au total",
      "single_page": {
        "one": "Affichant 1 %{model}",
        "other": "Affichant tous les %{count} %{model}",
        "zero": "%{model} introuvable"
      },
      "single_page_html": {
        "one": "Affichant <b>1</b> %{model}",
        "other": "Affichant <b>all&nbsp;%{count}</b> %{model}",
        "zero": "%{model} introuvable"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Précédent"
  }
});
