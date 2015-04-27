I18n.translations || (I18n.translations = {});
I18n.translations["it"] = {"date":{"formats":{"default":"%d-%m-%Y","short":"%d %b","long":"%d %B %Y"},"day_names":["Domenica","Luned\u00ec","Marted\u00ec","Mercoled\u00ec","Gioved\u00ec","Venerd\u00ec","Sabato"],"abbr_day_names":["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],"month_names":[null,"Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],"abbr_month_names":[null,"Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],"order":["day","month","year"]},"time":{"formats":{"default":"%a %d %b %Y, %H:%M:%S %z","short":"%d %b %H:%M","long":"%d %B %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" e ","last_word_connector":"e ","sentence_connector":"e","skip_last_comma":"vero"},"select":{"prompt":"Per favore, seleziona"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"non \u00e8 incluso nella lista","exclusion":"\u00e8 riservato","invalid":"non \u00e8 valido","confirmation":"non coincide con la conferma","accepted":"devi essere accettato","empty":"non pu\u00f2 essere lasciato in bianco","blank":"non pu\u00f2 essere lasciato in bianco","too_long":"\u00e8 troppo lungo (il massimo %{count} caratteri)","too_short":"\u00e8 troppo corto (il minimo \u00e8 %{count} caratteri)","wrong_length":"\u00e8 della lunghezza sbagliata (deve essere di %{count} caratteri)","not_a_number":"non \u00e8 un numero","not_an_integer":"Deve esser un numero intero.","greater_than":"deve essere superiore a %{count}","greater_than_or_equal_to":"deve essere superiore o uguale a %{count}","equal_to":"deve essere uguale a %{count}","less_than":"deve essere meno di %{count}","less_than_or_equal_to":"deve essere meno o uguale a %{count}","odd":"deve essere dispari","even":"deve essere pari","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"\u00e8 gi\u00e0 confermato, prova ad accedere.","expired":"scaduto, per favore richiedine un altro","not_found":"non trovato","not_locked":"non era bloccato","not_saved":{"one":"Un errore ha impedito il salvataggio di %{resource}:","other":"%{count} errori hanno impedito di salvare: %{resource}"},"taken":"\u00e8 gi\u00e0 in uso","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Phone number is not valid. It must have the following format: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Sono stati riscontrati dei problemi nei seguenti campi:","header":{"one":"Non pu\u00f2 essere salvato questo %{model}: %{count} errori","other":"%{count} errori hanno impedito il salvataggio %{model}"}}},"activerecord":{"errors":{"messages":{"taken":"\u00e8 gi\u00e0 in uso","record_invalid":"Validazione fallita: %{errors}","accepted":"deve essere accettato","blank":"non pu\u00f2 essere lasciato in bianco","confirmation":"non coincide con la conferma","empty":"non pu\u00f2 essere vuoto","equal_to":"deve essere uguale a %{count}","even":"deve essere pari","exclusion":"\u00e8 riservato","greater_than":"deve essere superiore a %{count}","greater_than_or_equal_to":"deve essere superiore o uguale a %{count}","inclusion":"non \u00e8 incluso nella lista","invalid":"non \u00e8 valido","less_than":"deve essere meno di %{count}","less_than_or_equal_to":"deve essere meno o uguale a %{count}","not_a_number":"non \u00e8 un numero","not_equal_to":"must not be equal to %{count}","odd":"deve essere dispari","too_long":"\u00e8 troppo lungo (il massimo \u00e8 %{count} caratteri)","too_short":"\u00e8 troppo corto (il minimo \u00e8 %{count} caratteri)","wrong_length":"\u00e8 della lunghezza sbagliata (deve essere di %{count} caratteri)"},"full_messages":{"format":"%{attribute}%{message}"},"models":{"user":{"attributes":{"email":{"blank":"non pu\u00f2 essere vuoto qunado una parola \u00e8 stata inserita"},"privacy_policy":{"accepted":"deve essere accetato"},"terms":{"accepted":"deve essere accetato"}}},"user_session":{"email":"Indirizzo e-mail","password":"Password","remember_me":"Resta collegato"}},"template":{"body":"Sono stati riscontrati dei problemi nei seguenti campi:","header":{"one":"Un errore ha impedito il salvataggio di questo %{model}","other":"Non pu\u00f2 essere salvato questo %{model}: %{count} errori."}}},"attributes":{"user":{"first_name":"Nome","last_name":"Cognome","privacy_policy":"Regole sulla privacy","terms":"Condizioni"},"poi":{"name":"Nome","type":"Tipo","address":"Indirizzo","website":"Sito web","phone":"Telefono","note":"Note","address_street":"Via","address_housenumber":"Housenumber","address_postcode":"Postcode","address_city":"Citt\u00e0"}},"models":{"user":"Utente"}},"number":{"format":{"separator":".","delimiter":".","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%n %u","unit":"\u20ac","separator":".","delimiter":",","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":3,"significant":"vero","strip_insignificant_zeros":"vero"},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"Kb","mb":"Mb","gb":"Gb","tb":"Tb"}},"decimal_units":{"format":"%n %u","units":{"unit":null,"thousand":"Mille","million":"Milione","billion":"Miliardo","trillion":"Trilione","quadrillion":"Quadrilione"}}}},"datetime":{"distance_in_words":{"half_a_minute":"mezzo minuto","less_than_x_seconds":{"one":"meno di un secondo","other":"meno di %{count} secondi"},"x_seconds":{"one":"1 secondo","other":"%{count} secondi"},"less_than_x_minutes":{"one":"meno di un minuto","other":"meno di %{count} minuti"},"x_minutes":{"one":"1 minuto","other":"%{count} minuti"},"about_x_hours":{"one":"circa un'ora","other":"circa %{count} ore"},"x_days":{"one":"1 giorno","other":"%{count} giorni"},"about_x_months":{"one":"circa un mese","other":"circa %{count} mesi"},"x_months":{"one":"1 mese","other":"%{count} mesi"},"about_x_years":{"one":"circa un anno","other":"circa %{count} anni"},"over_x_years":{"one":"oltre un anno","other":"oltre %{count} anni"},"almost_x_years":{"one":"circa 1 anno","other":"circa %{count} anni"}},"prompts":{"year":"Anno","month":"Mese","day":"Giorno","hour":"Ora","minute":"Minuto","second":"Secondi"}},"helpers":{"select":{"prompt":"Scegli"},"submit":{"create":"Crea %{model}","update":"Aggiorna %{model}","submit":"Salva %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} \u00e8 stato creato."},"update":{"notice":"%{resource_name} \u00e8 stato aggiornato."},"destroy":{"notice":"%{resource_name} \u00e8 stato cancellato con successo","alert":"%{resource_name} non pu\u00f2 essere cancellato."}},"photos":{"destroy":{"notice":"Imagine cancellato con successo"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Benvenuti in Active Admin. Questa \u00e8 la pagina dashboard di default.","call_to_action":"Per aggiungere sezioni alla dashboard controlla il file 'app/admin/dashboard.rb'"},"view":"Mostra","edit":"Modifica","delete":"Rimuovi","delete_confirmation":"Sei sicuro di volerlo rimuovere?","new_model":"Aggiungi %{model}","create_model":"Aggiungi %{model}","edit_model":"Modifica %{model}","update_model":"Modifica %{model}","delete_model":"Rimuovi %{model}","details":"Dettagli %{model}","cancel":"Annulla","empty":"Vuoto","previous":"Precedente","next":"Prossimo","download":"Scarica:","has_many_new":"Aggiungi nuovo/a %{model}","has_many_delete":"Rimuovi","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Devi implemetare %{model}#main_content per mostrarne il contenuto.","logout":"Esci","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filtri"},"pagination":{"empty":"Nessun %{model} trovato","one":"Sto mostrando <b>1</b> %{model}","one_page":"Sto mostrando <b>%{n}</b> %{model}. Lista completa.","multiple":"Sto mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> di <b>%{total}</b> in totale","entry":{"one":"voce","other":"voci"},"multiple_without_total":"Sto mostrando %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Qualsiasi","blank_slate":{"content":"Non sono presenti %{resource_name}","link":"Crea nuovo/a"},"batch_actions":{"button_label":"Azioni multiple","delete_confirmation":"Sei sicuro di volere cancellare %{plural_model}? Non sar\u00e0 possibile annulare questa modifica.","succesfully_destroyed":{"one":"Eliminato con successo 1 %{model}","other":"Eliminati con successo %{count} %{plural_model}"},"selection_toggle_explanation":"(Toggle Selection)","link":"Crea uno","action_label":"%{title} Selezionati","labels":{"destroy":"Elimina"}},"comments":{"body":"Corpo","author":"Autore","title":"Commento","add":"Aggiungi Commento","resource":"Risorsa","no_comments_yet":"Nessun commento.","title_content":"Commenti (%{count})","errors":{"empty_text":"Il commento non pu\u00f2 essere salvato, il testo \u00e8 vuoto."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"Entra","remember_me":"Ricordami","submit":"Entra"},"reset_password":{"title":"Dimenticato la password?","submit":"Reimposta la tua password"},"change_password":{"title":"Cambia la tua password","submit":"Cambia la mia password"},"links":{"sign_in":"Entra","forgot_your_password":"Dimenticato la password?","sign_in_with_omniauth_provider":"Collegati a %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Rimuovi","filters":{"buttons":{"filter":"Filtra","clear":"Rimuovi filtri"},"predicates":{"contains":"Contiene","equals":"Uguale a","starts_with":"Inizia con","ends_with":"Finisce con","greater_than":"Maggiore di","less_than":"Minore di"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Il tuo account \u00e8 stato confermato con successo. Ora sei collegato.","link":"Non hai ricevuto le istruzioni per confermare il tuo account?","send_instructions":"Riceverai una e-mail contenente le istruzioni su come confermare in pochi minuti il tuo account.","send_paranoid_instructions":"Se il tuo account esiste, riceverai una e-mail contenente le istruzioni per confermare in pochi minuti il tuo account."},"destroy":{"confirm":"Sei sicuro?","headline":"Cancella account","link":"Cancella adesso"},"edit":{"form":{"labels":{"current_password":"Password attuale <i>(\u00e8 necessaria per confermare le tue modifiche)</i> ","email":"E-mail","password":"Password <i>(lascia vuoto se non vuoi cambiarlo)</i> ","password_confirmation":"Ripeti la password"},"submit":"Salva modifiche"},"headline":"Modifica account"},"failure":{"already_authenticated":"Ti sei gi\u00e0 registrato.","inactive":"Il tuo account non \u00e8 ancora attivo.","invalid":"Indirizzo e-mail o password non validi.","invalid_token":"Token di autenticazione non valido.","locked":"Il tuo account \u00e8 bloccato.","timeout":"La tua sessione \u00e8 scaduta, per favore collegati nuovamente per continuare.","unauthenticated":"Per continuare devi prima registrarti o collegarti.","unconfirmed":"Per procedere devi prima confermare il tuo account.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Clicca per favore sul link che ti abbiamo appena inviato per e-mail al tuo indirizzo. Se non dovessi ricevere la nostra e-mail, controlla prima di tutto che non sia archiviata nella cartella dello spam. Se non \u00e8 presente neanche qui, ritorna alla pagina di iscrizione e riprova.","subject":"Continua a seguire le istruzioni per attivare il tuo account"},"reset_password_instructions":{"subject":"Istruzioni per reimpostare la password"},"unlock_instructions":{"subject":"Istruzioni per sbloccare"}},"mandatory":"* campo obbligatorio","omniauth_callbacks":{"failure":"Non posso autorizzarti con %{kind} perch\u00e9 \"%{reason}\".","permission_missing":"No hai dato la autorizzazione.","success":"Collegato con successo con %{kind}."},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"Reimposta la password"},"headline":"Dimenticato la password?"},"password_reset":{"email":{"comment":"Se non hai chiesto di cambiare la password, ignora questa e-mail.<br/>La tua password non cambier\u00e0 a meno che non clicchi sul link sopra e non registri una nuova password.","headline":"Benvenuto %{email} ","link":"Cambia la mia password","text":"Qualcuno ha richiesto di cambiare la tua password. Se sei stato tu, clicca su questo link - oppure ignoralo!"},"form":{"labels":{"password":"Nuova password","password_confirmation":"Ripeti la password"},"submit":"Reimposta la password"},"headline":"Reimposta la password"},"passwords":{"link":"Dimenticato la password?","send_instructions":"Riceverai una e-mail contente le istruzioni su come reimpostare in pochi minuti la tua password.","send_paranoid_instructions":"Se il tuo account esiste, riceverai una e-mail contenente le istruzioni su come modificare in pochi minuti la tua password","updated":"La tua password \u00e8 stata modificata con successo. Ora sei collegato.","updated_not_active":"La tua password \u00e8 stata modificata con successo","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Ciao! Il tuo account \u00e8 stato cancellato. Speriamo di rivederti presto.","inactive_signed_up":"Sei stato registrato con successo, ma non possiamo farti accedere perch\u00e9 il tuo account \u00e8 %{reason}.","link":"Registrati","reasons":{"inactive":"non attivo","locked":"bloccato","unconfirmed":"non confermato"},"signed_up":"Sei stato registrato con successo. Verr\u00e0 inviata al tuo indirizzo e-mail una e-mail di conferma.","updated":"Il tuo account \u00e8 stato aggiornato.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"Il tuo account non \u00e8 ancora attivo.","invalid":"Indirizzo e-mail o password non validi.","invalid_token":"Token di autenticazione non valido.","link":"Registrati","locked":"Il tuo account \u00e8 bloccato.","new":{"no_osm_account":"Non hai un account su OpenStreetMap?","osm_promo_text":"Wheemap e basato su dati di OpenStreetMap (OSM). OSM \u00e8 una mappa libera del mondo, creato da gente come te. \u00c8 come una Wikipedia per mappe. Per modificare o aggiungere luoghi hai bisogno di un account su OpenStreetMap, e devi aver fatto il login con questo.","promo_text_thank_you":"Grazie per il tuo aiuto!","sign_in_with":"Log in with %{kind}","sign_up_with_osm":"Regstrarti adesso.","wheelmap_promo_text":"Con la tua conoscenza dei luoghi raggiungibile in sedia a rotelle, gli handicappati possono meglio organizzare la loro vita. Inoltre, la OpenStreetMap diventa pi\u00f9 dettagliato."},"signed_in":"Collegato con successo.","signed_out":"Sei stato scollegato con successo.","timeout":"La tua sessione \u00e8 scaduta, per favore collegati di nuovo per continuare.","unauthenticated":"Per continuare devi prima registrarti o collegarti.","unconfirmed":"Per procedere devi prima confermare il tuo account."},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Password","remember_me":"Resti collegato?"},"submit":"Accedi"},"headline":"Accedi"},"sign_out":{"headline":"Esci"},"sign_up":{"email":{"confirm_my_account":"Conferma il tuo account","please_confirm":"Puoi confermare il tuo account cliccando sul seguente link:","welcome":"Benvenuto %{email}!"},"form":{"labels":{"email":"E-mail","password":"Password","password_confirmation":"Ripeti la password","wants_newsletter":"S\u00ec, tenetemi aggiornato su wheelmap - ma non pi\u00f9 di una volta al mese. "},"submit":"Registrati"},"headline":"Registrati"},"unlocks":{"link":"No hai ricevuto le istruzioni per sbloccare?","send_instructions":"Riceverai una e-mail contente le istruzioni su come sbloccare in pochi minuti il tuo account.","send_paranoid_instructions":"Se il tuo account esiste, riceverai una e-mail contenente le istruzioni su come sbloccare in pochi minuti il tuo account","unlocked":"Il tuo account \u00e8 stato sbloccato con successo. Ora sei collegato."}},"poi":{"category":{"accommodation":"Alloggi","education":"Educazione","food":"Alimenti","government":"Governo","health":"Salute","leisure":"Tempo Libero","misc":"Altro","money_post":"Bancoposta","public_transfer":"Mezzi pubblici","shopping":"Shopping","sport":"Sport","tourism":"Turismo","unknown":"Sconosciuto"},"name":{"accommodation":{"beach_resort":"Albergo sulla spiaggia","bed_and_breakfast":"Bed and breakfast","camp_site":"Campeggio","caravan_site":"Area caravan e camper","chalet":"Casetta turistica","dormitory":"Dormitorio","guest_house":"Affittacamere, Pensione","hostel":"Ostello","hotel":"Albergo","motel":"Motel"},"education":{"college":"College","driving_school":"Autoscuola","kindergarten":"Scuola d'infanzia","library":"Biblioteca","museum":"Museo","school":"Scuola","university":"Universit\u00e0"},"food":{"bar":"American bar","biergarten":"Birreria all'aperto","cafe":"Bar","drinking_water":"Acqua potabile","fast_food":"Fast food","ice_cream":"Gelateria","pub":"Pub","restaurant":"Ristorante"},"government":{"courthouse":"Tribunale","embassy":"Ambasciata","government":"Agenzia del Governo","police":"Polizia","public_building":"Edificio pubblico","townhall":"Municipio"},"health":{"dentist":"Dentista","doctors":"Medici","hearing_aids":"Apparecchio per l'udito","hospital":"Ospedale","medical_supply":"Rifornimento sanitario","pharmacy":"Farmacia","social_facility":"Servizi sociali","veterinary":"Ambulatorio Veterinario"},"leisure":{"arena":"Arena","brothel":"Casin\u00f2","casino":"Casin\u00f2","cinema":"Cinema","community_center":"Centro Comunitario","gallery":"Galleria d'arte","nightclub":"Night club","playground":"Parco giochi","sauna":"Sauna","stripclub":"Strip club","theatre":"Teatro","zoo":"Zoo"},"misc":{"company":"Compagnia (Officio)\n","estate_agent":"Agente Immobiliare","insurance":"Assicurazione","lawyer":"Avvocato","place_of_worship":"Luogo di culto","toilets":"Bagno pubblico"},"money_post":{"atm":"Bancomat","bank":"Banca","bureau_de_change":"Ufficio cambia valute","post_box":"Cassetta postale","post_office":"Ufficio postale"},"public_transfer":{"aerodrome":"Aeroporto","bicycle_parking":"Parcheggio per biciclette","bicycle_rental":"Noleggio biciclette","boatyard":"Cantiere navale","bus_station":"Stazione degli autobus","bus_stop":"Fermata dell'autobus","cable_car":"Funivia","car_rental":" Autonoleggio ","car_sharing":"Parcheggio auto condivise","chair_lift":"Seggiovia","ferry":"Traghetto","ferry_terminal":"Terminal traghetti","fuel":"Distributore di benzina","halt":"Stazione non presidiata","light_rail":"Ferrovia","parking":"Parcheggio","parking_aisle":"Corsia di sosta","platform":"Binario","station":"Metropolitana","subway_entrance":"Ingresso della Metropolitana","terminal":"Terminal dell'aeroporto","tram_stop":"Fermata del tram"},"shopping":{"alcohol":"Bevande alcoliche","bakery":"Panetteria","beauty":"Salone di Belleza","beverages":"Bevande","bicycle":"Negozio di biciclette","books":"Libreria","butcher":"Macelleria","car_repair":"Autofficina","car_shop":"Autoconcessionaria","chemist":"Farmacia","clothes":"Abbigliamento","computer":"Negozio di computers","confectionery":"Dolci","convenience":"Minimarket","deli":"Deli","department_store":"Grande magazzino","doityourself":"Fai da te","dry_cleaning":"Lavanderia","electronics":"Negozio d'elettronica","fabric":"Negozio di Tessuti","farm_shop":"Negozio di una Fattoria","florist":"Fiorista","furniture":"Arredamento","garden_centre":"Centro per il giardinaggio","gift":"Negozio di Articoli da Regalo ","hairdresser":"Parrucchiere","hardware":"Ferramenta","jewelry":"Gioielleria","kiosk":"Chiosco","laundry":"Lavanderia","mall":"Centro commerciale","optician":"Ottico","organic":"Negozio di Cibo Organico","outdoor":"Negozio Outdoor","pet":"Negozio di Animali","photo":"Fotografo","second_hand":"Seconda Mano","shoes":"Calzature","sports":"Sports","stationery":"Cartoleria","supermarket":"Supermercato","toys":"Giocattoli","travel_agency":"Agenzia di Viaggi","video":"Negozio di video noleggio"},"sport":{"pitch":"Campo Sportivo","sports_centre":"Centro sportivo","stadium":"Stadio","swimming":"Nuoto","swimming_pool":"Piscina"},"tourism":{"archaeological_site":"Sito archeologico","arts_centre":"Centro d'arte","artwork":"Opera d'arte","attraction":"Attrazione turistica","battlefield":"Campo di battaglia","beach":"Spiaggia","beacon":"Faro","castle":"Castello","cave_entrance":"Entrata di grotta","information":"Ufficio informazioni turistiche","memorial":"Memoriale","theme_park":"Parco divertimenti","tower":"Torre","viewpoint":"Belvedere"},"unknown":{"unknown":"Sconosciuto"}}},"models":{"category":{"prompt":"Choose a category"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Send","save":"Save","cancel":"Cancel"},"faq":{"answers":{"0":"Puoi sempre modificare la \"qualifica\" del posto. Scegli la \"qualifica\" corretta e premi \"Salva\" - fatto!","1":"Come utente registrato puoi aggiungere/modificare tutti i dettagli del posto. Clicca su \"Modifica\" e correggi o aggiungi le informazioni richieste.","2":"Puoi aggiungere ulteriori informazioni (per esempio: \"Questo posto ha una rampa mobile\") nella sezione \"commenti\". Clicca su \"Modifica\" e \"Aggiungi commento\"."},"headline":"C\u00b4\u00e9 un problema con questo posto?","questions":{"0":"La \"qualfica\" \u00e9 sbagliata.","1":"I dettagli del posto sono incorretti o mancanti.","2":"Ho maggiori informazioni su questo posto."}},"header":{"navigation":{"about_wheelmap":"Cos'\u00e8 Wheelmap?","choose_language":"Scegli la lingua","contact":"Contatti","map":"Mappa","projects":"Progetti","blog":"Blog","feedback":"Feedback","home":"Inizia","how_to_add_a_place":"Come faccio ad aggiungere luoghi?","imprint":"Informazione legale","logged_in_as":"Collegato come:","login":"Accedi","logout":"Esci","newsletter":"Newsletter","press":"Articoli di giornale","profile":"Profilo","suggestions":"Suggerimenti","what_is_barrier_free":"Cosa significa \"accessibile in sedia a rotelle\"?","what_is_wheelmap":"Che cos'\u00e8 wheelmap?"},"toolbar":{"categories":"Categorie"},"meta":{"description":"Trova luoghi accessibili in sedia a rotelle - wheelmap.org","homepage":"Home page","keywords":"Ricerca luoghi accessibili in sedia a rotelle","search":"Ricerca"},"searchbar":{"add_place":"Aggiungi un altro luogo","find":"ricerca","label":null,"placeholder":"p.e. Sunset Boulevard L.A. or Brandenburg Gate Berlin","title_add_place":"Aggiungi ora un luogo a questo posizione!"},"tagline":"Wheelmap logo","title":"Trova luoghi accessibili in sedia a rotelle"},"home":{"index":{"overlay":{"button":"Allora, andiamo!","categories":"Filtrare i luoghi a seconda della categoria","filter":"Filtrare i luoghi a seconda dell'accessibilit\u00e0","headline":"Evidenzia e trova luoghi accessibili con sedia a rotelle su Wheelmap.org - in tutto il mondo e gratis. \u00c8 facile:","lookup":"Cerca un luogo specifico","secondary_headline":"Il nostro \"semaforo\" per segnare l'accessibilit\u00e0 dei luoghi pubblici per sedie a rotelle:"},"filter":{"category":"Scegli categoria:","deselect_all":"Deselezionare tutti","select_all":"Seleziona tutto","wheelchair":"Accessibile in sedia a rotelle?"},"ie":{"action":{"ignore":"Ignora","upgrade":"Aggiorna Browser"},"warning":{"headline":"Siamo spiacenti!","message":"Sembra che stai usando una vecchia versione di Internet Explorer con cui Wheelmap funziona male. Ti consigliamo di usare Firefox, Chrome, Opera, Safari o un altro browser pi\u00f9 recente."}},"link":{"node":{"create":"Aggiungi nuovo luogo"}},"popup":{"form":{"limited":"parzialmente accessibile in sedia a rotelle","no":"non accessibile in sedia a rotelle","save":"Aggiorna","unknown":"stato sconosciuto","yes":"accessibile in sedia a rotelle"},"help":"Accessibile in sedia a rotelle? (Aiuto)","more":"pi\u00f9 ..."}}},"nodes":{"new":{"form":{"legend":"Posizione del luogo ","location":"Clicca sulla mappa e metti il marker sulla posizione esatta."},"header":{"title":"Nuovo luogo | wheelmap.org "},"link":{"large_map":"&laquo; Annulla"}},"node_data":{"address":"Indirizzo: ","contact_details":"Dettagli del contatto:"},"node_edit":{"details":"Dettagli","edit":"Modifica"},"node_map":{"map":"Mappa:"},"node_note":{"comment":"Commento:"},"node_photos":{"add":"Aggiungi","photos_of_this_place":"Foto del posto:","upload":"Carica"},"node_similar":{"similar":"Posti simili: %{name}"},"node_status":{"accessible_toilet":"Bagno accessibile con sedia a rotelle:","premium":"%{name} dice: Questo posto \u00e9","wheelchair_accessibility":"Accessibilit\u00e0 con sedia a rotelle:"},"node_streetview":{"streetview":"Streetview:"},"show":{"header":{"meta":{"description":"Scopri se questo posto \u00e9 accessibile con la sedia a rotelle su Wheelmap.org. O aggiungi ulteriori informazioni e foto sul posto.","title":"Questo posto \u00e9 su Wheelmap.org: %{name}"},"title":"Lougo: %{node} | wheelmap.org "},"share":{"email":"E-mail","facebook":"Facebook","text":"Ho trovato questo posto su Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"Indietro","large_map":"Allarga","listing":"Tutti i luoghi '%{type}' in %{city} ","upload":"Carica imagine"},"more_data_from":"Ci sono pi\u00f9 informazioni su quest'luogho, controllato da:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Oops, il tuo input era scorretto o incompleto","successfull":"Grazie, i tuoi dati sono stati salvati con successo e saranno pubblicati fra poco."}},"edit":{"header":{"title":"Modifica luogo: %{node} | wheelmap.org "},"link":{"large_map":"&laquo; Annulla "}},"errors":{"default":"Oops, qualcosa \u00e8 andato storto.. Ma ne siamo al corrente.","not_authorized":"Scusa, autenticazione fallita","not_available":"Scusa, la pagina \u00e8 momentaneamente non disponibile","not_existent":"Scusa, ma questo luogo non \u00e8 pi\u00f9 disponibile","not_found":"Scusa, pagina non trovata.","param_missing":"Per favore inserisci una parola di ricerca"},"flash":{"authorize_wheelmap":"Ti serve un account su OpenStreetMap per modificare i dati."},"node":{"link":{"claim":"Lavori qui?","edit_node":"Modifica luogo","report_bug":"Segnala un problema"}},"update":{"flash":{"not_successfull":"Oops, il tuo input era scorretto o incompleto","successfull":"Grazie, i tuoi dati sono stati salvati con successo e saranno pubblicati fra poco."}},"update_wheelchair":{"successfull":"Lo stato di \"%{name}\" \u00e8 stato cambiato in \"%{status} accessibile in sedia a rotelle\" e sar\u00e0 pubblicato fra poco."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Esempio:</strong> Londra, Regno Unito","info":"Il servizio di ricerca funziona solo con infarmazioni su nome e/o indirizzo. Allora inserire un nome del posto o un indirizzo, per esempio il nome della strada e/o della citt\u00e0. La ricerca per tipo, per esempio ristorante o cinema, non funziona!","work_in_progress":"Stiamo lavorando per rendere la ricerca pi\u00f9 facile ed efficiente per il futuro. "},"try_this":{"address":"Per favore inserire maggiori <strong>dettagli sull'indirizzo</strong>.","intro":"Prova questo:","spell_check":"Controlla di aver scritto correttamente."}},"results":{"ticker":{"one":"%{count} risultato:","other":"%{count} risultati:"}},"search":{"for":"Cerca \"%{q}\" ","not_found":"Nessun luogo trovato!"}},"timeout":{"headline":"Oh, errore nostro","info":"Il servizio di ricerca non \u00e8 al momento disponibile.","repeat_search":"Riprova la ricerca"}},"application":{"require_no_user":{"notice":"Sei gi\u00e0 collegato ..."},"require_user":{"notice":"Devi collegarti per vedere questa pagina."}},"breadcrumbs":{"node":{"create":"Aggiungi un nuovo luogo","edit":"Modifica luogo"},"root":"wheelmap"},"common":{"close":"chiudi","skip":"salta"},"form":{"show_fully_accessible_places":"Accessibile in sedia a rotelle","show_limited_accessible_places":"parzialmente accessibile in sedia a rotelle","show_places_without_status":"stato sconosciuto","show_unaccessible_places":"non accessibile in sedia a rotelle"},"formtastic":{"hints":{"email":"Wheelmap.org tratta i tuoi dati in modo confidenziale; nessuno spam. Promesso!","lat":"Sposta l'indicatore sulla mappa nella posizione coretta","osm_username":"Non sei ancora un membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Crea ora un account su Openstreetmap</a> ","password":"(lascia vuoto se non vuoi cambiarlo)","phone":"Per esempio: +39 050 12345-78","website":"Per esempio: http://www.example.com"},"labels":{"category":"Categoria:","centralkey":"Tasto centrale:","city":"Citt\u00e0:","create":"Crea luogo","email":"E-mail","finish":"Finito","housenumber":"Numero:","lat":"Latitudine","lon":"Longitudine","name":"Nome:","osm_password":"Password OSM","osm_username":"Nome del account OSM","password":"Password","password_confirmation":"Ripeti la password","phone":"Telefono:","postcode":"CAP:","privacy_policy":"Accetto numero 1 e 2 delle regole della privacy.","reset":"Azzera","save":"Salva","street":"Via:","terms":"Acetto gli termini del sito.","type":"Tipo:","website":"Sito Web:","wheelchair":"Accessibilit\u00e0 per sedie a rotelle?","wheelchair_description":"Commento sull'accessibilit\u00e0:","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Dati fondamentali:","optional":"Pi\u00f9 dati <span class=\"addition\">(tutti campi sono opzionali)</span> "}},"global":{"form_validation_error":"Vedi gli errori sotto"},"how?":"Come?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Luoghi parzialmente accessibili in sedia a rotelle %{type} in %{city} (%{count})"},"no":{"headline":"Non accessibili in sedia a rotelle %{type} in %{city} (%{count})"},"unknown":{"headline":"%{type} in %{city} con stato di accessibilit\u00e0 in sedia a rotelle sconosciuto (%{count})"},"yes":{"headline":"Accessibili in sedia a rotelle %{type} in %{city} (%{count})\n"}}}},"layouts":{"application":{"banner":{"alt":"Un progetto di Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode} ","street":"%{street} %{housenumber}"},"tags":{"phone":"Telefono:","website":"Sito Web:"}},"oauth":{"application":{"connect":{"headline":"Per creare o modificare luoghi su wheelmap.org, devi prima collegare il tuo account con quello di \"open street map\"."}},"callback":{"notice":"Il tuo account di wheelmap \u00e8 stato collegato all'account %{user} di OpenStreetMap."}},"or":"o","place":{"one":"%{count} luogo","other":"%{count} loughi"},"profile":{"edit":{"application":{"oauth":{"connected":"Stato: Collegato","grant":"Collegati adesso","not_connected":"Stato: Non collegato","revoke":"Scollegati"}},"headline":"Modifica il tuo profilo"}},"splash":{"countline":"%{count} dei luoghi sono gi\u00e0 stati contrassegnati","headline":"Chiunque pu\u00f2 aggiungere luoghi accessibili in sedia a rotelle!","start":"Inizia","step1":"Clicca su un luogo che conosci","step2":"Selezionalo e clicca su salva","step3":"Ed \u00e8 fatta! Non \u00e8 necessaria la registrazione","what_is_wheelmap":"Che cos'\u00e8 wheelmap?"},"statistics":"Statistiche","toiletstatus":{"no":"no wheelchair accessible bathroom","unknown":"unknown status","yes":"wheelchair accessible bathroom"},"user_sessions":{"create":{"activation":{"notice":"Il tuo account \u00e8 ora attivo!"},"error":{"notice":"E-mail e password non corrispondono"},"notice":"Sei dentro!"},"destroy":{"notice":"Ciao, ritorna presto!"},"new":{"email":"Indirizzo e-mail","login":"Entra","login_with_twitter":"Collegati con Twitter","password":"Password","remember_me":"Resta collegato"}},"users":{"after_signup_edit":{"welcome":{"headline":"Sei quasi finito! Finisci la iscrizione per il tuo account qui:","set_password_for_mobile":"Hai completato la tua registrazione con OpenStreetMap. Adesso scegli una email e una parola per il tuo account su Wheelmap, e poi sarai a posto! Hai bisogno della email e della parola per accedere ai app per iPhone o Android.","text":"Come possiamo raggiungerti? Puoi modificare questa informazione anche dopo nell tuo profilo."}},"edit":{"headline":{"your_images":"I tuoi imagini caricati"}}},"wheelchairstatus":{"limited":"parzialmente accessibile in sedia a rotelle","no":"non accessibile in sedia a rotelle","unknown":"Accessibilit\u00e0 in sedia a rotelle sconosciuta ","yes":"completamente accessibile in sedia a rotelle"},"wheelmap":{"footer":{"a_project_of":"Un progetto di","based_on":"Basato su","become_a_supporter":"Diventa un supporter","main_supporter":"Il principale supporter"},"itunes":{"alt":"Logo AppStore","title":"Scarica l'app per il tuo iPhone!"},"logo":{"alt":"Logo Wheelmap - trova luoghi accessibili in sedia a rotelle","title":"Wheelmap - trova luoghi accessibili in sedia a rotelle"},"what_is":{"fully_accessible":"L'ingresso non ha gradini; tutte le sale (senza eccezione) sono raggiungibili in sedia a rotelle; un bagno per disabili \u00e8 disponibile","limited_accessible":"L'ingresso non ha un gradino pi\u00f9 alto di 7 cm; le sale prinicipali non hanno scalini, il bagno non \u00e8 accessibile in sedia a rotelle","not_accessible":"L'ingresso ha diversi scalini o uno scalino pi\u00f9 alto di 7 cm e le sale non sono raggiungibili in sedia a rotelle","unknown_accessible":"Aiutaci contrassegnando i luoghi!"}},"will_paginate":{"next_label":"Successivo &#8594;","page_entries_info":{"multi_page":"Visualizzazione %{model} %{from} - %{to} di %{count} in totale","multi_page_html":"Visualizzazione %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> di <b>%{count}</b> in totale","single_page":{"one":"Visualizzazione {count} %{model}","other":"Visualizzazone totale %{count} %{model}","zero":"Nessun %{model} trovato\n"},"single_page_html":{"one":"Visualizzazione <b>{count}</b> %{model}","other":"Visualizzazione <b>all&nbsp;%{count}</b> %{model}","zero":"Non %{model} trovato\n"}},"page_gap":"&hellip;","previous_label":"&#8592; Precedente\n"},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","previous":"&lsaquo; Prev","next":"Next &rsaquo;","truncate":"&hellip;"}},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
