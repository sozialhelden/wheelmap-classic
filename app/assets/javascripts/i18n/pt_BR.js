I18n.translations || (I18n.translations = {});
I18n.translations["pt_BR"] = {"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":["","January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%A, %d de %B de %Y, %H:%M","short":"%d/%m, %H:%M","long":"%A, %d de %B de %Y, %H:%M"},"am":"da manh\u00e3","pm":"de tarde"},"support":{"array":{"words_connector":", ","two_words_connector":" e ","last_word_connector":", e","sentence_connector":"e","skip_last_comma":true},"select":{"prompt":"Por favor selecione"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"n\u00e3o \u00e9 um valor v\u00e1lido","exclusion":"n\u00e3o est\u00e1 dispon\u00edvel","invalid":"\u00e9 inv\u00e1lido","confirmation":"n\u00e3o coincide com a confirma\u00e7\u00e3o","accepted":"tem de ser aceito","empty":"n\u00e3o pode estar vazio","blank":"deve ser preenchido","too_long":"\u00e9 demasiado grande (o m\u00e1ximo \u00e9 de %{count} charateres)","too_short":"\u00e9 demasiado curto. (O m\u00ednimo \u00e9 de %{count} carateres.)","wrong_length":"tem comprimento errado (deve ter exatamente %{count} carateres)","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_an_integer":"tem de ser um n\u00famero integral","greater_than":"tem de ser maior que %{count}","greater_than_or_equal_to":"tem de ser maior ou igual a %{count}","equal_to":"tem de ser igual a %{count}","less_than":"tem de ser menor que %{count}","less_than_or_equal_to":"tem de ser menor ou igual a %{count}","odd":"tem de ser \u00edmpar","even":"tem de ser par","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"j\u00e1 estava confirmado, por favor volte a registrar-se","expired":"expirou, pe\u00e7a novamente","not_found":"n\u00e3o encontrado","not_locked":"n\u00e3o estava bloqueado","not_saved":{"one":"Um erro impdiu que %{resource} fosse salvo:","other":"%{count} erros impediram que %{resource} fosse salvo:"},"taken":"j\u00e1 existe","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Phone number is not valid. It must have the following format: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Houve problemas com os seguintes campos: ","header":{"one":"Um erro impdiu que %{model} fosse salvo:","other":"%{count} erros impediram que %{model} fosse salvo."}}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}","accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match confirmation","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","not_a_number":"is not a number","not_equal_to":"must not be equal to %{count}","odd":"must be odd","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)"},"full_messages":{"format":"%{attribute} %{message}"},"models":{"user":{"attributes":{"email":{"blank":"can't be blank if password is given"},"privacy_policy":{"accepted":"must be accepted"},"terms":{"accepted":"must be accepted"}}},"user_session":{"email":"Email address","password":"Password","remember_me":"Stay logged in"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"attributes":{"user":{"first_name":"Given name","last_name":"Last name","privacy_policy":"Privacy policy","terms":"Terms"},"poi":{"name":"Nome","type":"Tipo","address":"Address","website":"Website","phone":"Telefone","note":"Note","address_street":"Rua","address_housenumber":"N\u00b0","address_postcode":"CEP","address_city":"Cidade"}},"models":{"user":"User"}},"number":{"format":{"separator":",","delimiter":".","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u%n","unit":"\u20ac","separator":",","delimiter":".","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":null,"thousand":"Mil","million":"Milh\u00e3o","billion":"Bilh\u00e3o","trillion":"Trilh\u00e3o","quadrillion":"Quatrilh\u00e3o"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Por favor selecione"},"submit":{"create":"Criar  %{model}","update":"Atualizar  %{model}","submit":"Salvar  %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} foi criado com sucesso."},"update":{"notice":"%{resource_name} foi atualizado com sucesso."},"destroy":{"notice":"%{resource_name} foi excluido com sucesso.","alert":"%{resource_name} n\u00e3o p\u00f4de ser excluido."}},"photos":{"destroy":{"notice":"Imagem removida com sucesso"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Welcome to Active Admin. This is the default dashboard page.","call_to_action":"To add dashboard sections, checkout 'app/admin/dashboard.rb'"},"view":"View","edit":"Edit","delete":"Delete","delete_confirmation":"Are you sure you want to delete this?","new_model":"New %{model}","create_model":"New %{model}","edit_model":"Edit %{model}","update_model":"Edit %{model}","delete_model":"Delete %{model}","details":"%{model} Details","cancel":"Cancel","empty":"Empty","previous":"Previous","next":"Next","download":"Download:","has_many_new":"Add New %{model}","has_many_delete":"Delete","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Please implement %{model}#main_content to display content.","logout":"Logout","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filters"},"pagination":{"empty":"No %{model} found","one":"Displaying <b>1</b> %{model}","one_page":"Displaying <b>all %{n}</b> %{model}","multiple":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total","entry":{"one":"entry","other":"entries"},"multiple_without_total":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Any","blank_slate":{"content":"There are no %{resource_name} yet.","link":"Create one"},"batch_actions":{"button_label":"Batch Actions","delete_confirmation":"Are you sure you want to delete these %{plural_model}? You won't be able to undo this.","succesfully_destroyed":{"one":"Successfully destroyed 1 %{model}","other":"Successfully destroyed %{count} %{plural_model}"},"selection_toggle_explanation":"(Toggle Selection)","link":"Create one","action_label":"%{title} Selected","labels":{"destroy":"Delete"}},"comments":{"body":"Body","author":"Author","title":"Comment","add":"Add Comment","resource":"Resource","no_comments_yet":"No comments yet.","title_content":"Comments (%{count})","errors":{"empty_text":"Comment wasn't saved, text was empty."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"Login","remember_me":"Remember me","submit":"Login"},"reset_password":{"title":"Forgot your password?","submit":"Reset My Password"},"change_password":{"title":"Change your password","submit":"Change my password"},"links":{"sign_in":"Sign in","forgot_your_password":"Forgot your password?","sign_in_with_omniauth_provider":"Sign in with %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Remove","filters":{"buttons":{"filter":"Filter","clear":"Clear Filters"},"predicates":{"contains":"Contains","equals":"Equals","starts_with":"Starts with","ends_with":"Ends with","greater_than":"Greater than","less_than":"Less than"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Seu e-mail foi confirmado com sucesso.","link":"E-mail de confirma\u00e7\u00e3o n\u00e3o recebido?","send_instructions":"Dentro de alguns minutos voc\u00ea receber\u00e1 um e-mail com instru\u00e7\u00f5es como confirmar a sua conta.","send_paranoid_instructions":"Se seu e-mail est\u00e1 no nosso banco de dados, voc\u00ea vai receber um e-mail com instru\u00e7\u00f5es para confirmar sua conta em alguns minutos."},"destroy":{"confirm":"Tem certeza?","headline":"Apagar a conta.","link":"Apagar agora"},"edit":{"form":{"labels":{"current_password":"Palavra passe actual <i> (precisamos do seguinte para confirmar a altera\u00e7\u00e3o) </i>","email":"E-mail","password":"Senha <i>(deixar em branco se n\u00e3o quiser mudar)</i>","password_confirmation":"Repetir senha"},"submit":"Salvar mudan\u00e7as"},"headline":"Configura\u00e7\u00e3o da conta"},"failure":{"already_authenticated":"Voc\u00ea j\u00e1 est\u00e1 conectado.","inactive":"A sua conta ainda n\u00e3o foi ativada.","invalid":"Palavra passe ou Email inv\u00e1lido. ","invalid_token":"d","locked":"A sua conta est\u00e1 bloqueada.","timeout":"A sua sess","unauthenticated":"Vo\u00e7\u00ea precisa se conectar ou registrar parar continuar.  ","unconfirmed":"Por favor, confirme sua conta antes de continuar. Para este fim, mandamo-lhe um e-mail com um link. Se voc\u00ea n\u00e3o tiver o recebido, clique em \"E-mail de confirma\u00e7\u00e3o n\u00e3o recebido?\" no final desta p\u00e1gina. ","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Por favor, clique no link que acabamos de mandar para seu e-mail. Se voc\u00ea n\u00e3o recebeu nenhum e-mail, tamb\u00e9m veja seu lixo eletr\u00f4nico. Se este n\u00e3o estiver l\u00e1, voc\u00ea pode solicitar o e-mail novamente.","subject":"Mais um passo para ativar sua conta"},"reset_password_instructions":{"subject":"Instru\u00e7\u00f5es para redefinir a senha"},"unlock_instructions":{"subject":"Instru\u00e7\u00f5es para desbloquear sua conta"}},"mandatory":"* campo obrigat\u00f3rio","omniauth_callbacks":{"failure":"n\u00e3o p\u00f4de ser confirmado de  %{kind} porque \"%{reason}","permission_missing":"Voc\u00ea n\u00e3o nos deu os direitos necess\u00e1rios.","success":"Autorizado com sucesso com %{kind}"},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"Redefinir senha"},"headline":"Esqueceu sua senha?"},"password_reset":{"email":{"comment":"Se n\u00e3o pediu para alterar a sua senha, por favor ignore este e-mail <br/>. A sua senha n\u00e3o ser\u00e1 alterada a n\u00e3o ser que clique no seguinte link.","headline":"Bem vindo %{email}","link":"Mudar a palavra passe","text":"Algu\u00e9m pediu para alterar a sua palavra passe. Pode fazer essa altera\u00e7\u00e3o carregando no seguinte link: "},"form":{"labels":{"password":"Nova senha","password_confirmation":"Repetir senha"},"submit":"Escolher nova senha"},"headline":"Restabelecer a palavra passe"},"passwords":{"link":"Esquececeu sua senha?","send_instructions":"Dentro de alguns minutos receber\u00e1 um e-mail com instru\u00e7\u00f5es para criar uma nova senha.","send_paranoid_instructions":"Se seu e-mail estiver no nosso banco de dados, voc\u00ea vai receber um e-mail com um link para redefinir sua senha.","updated":"A sua senha foi alterada com sucesso. Est\u00e1 conectado(a) \u00e0 sua conta.","updated_not_active":"A sua senha foi modificada com sucesso.","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"A sua conta foi cancelada com sucesso.","inactive_signed_up":"Registrado com sucesso. Mas n\u00e3o conseguimos te conectar. Motivo: \"%{reason}\"","link":"Criar conta","reasons":{"inactive":"inativo","locked":"bloqueado","unconfirmed":"n\u00e3o confirmado"},"signed_up":"Conta criada com sucesso.","updated":"Sua conta foi atualizada.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"A sua conta ainda n\u00e3o foi confirmada. Para confirm\u00e1-la clique no link que mandamos por e-mail.","invalid":"E-mail ou senha inv\u00e1lida ","invalid_token":"C\u00f3digo de autentifica\u00e7\u00e3o inv\u00e1lido.","link":"Entrar","locked":"A sua conta est\u00e1 bloqueada.","new":{"no_osm_account":"Nenhuma conta em OpenStreetMap?","osm_promo_text":"O Wheelmap \u00e9 baseado em mapas do OpenStreetMap (OSM). OSM \u00e9 um mapa do mundo criado por pessoas como voc\u00ea. Uma Wikipedia de mapas. Para editar lugares existentes ou criar novos lugares voc\u00ea precisa duma conta no OSM.","promo_text_thank_you":"Obrigado por sua ajuda!","sign_in_with":"Conectar com %{kind}","sign_up_with_osm":"Registre-se aqui.","wheelmap_promo_text":"Com seus conhecimentos de lugares acess\u00edveis voc\u00ea contribui para um melhor dia-a-dia de pessoas com defici\u00eancias f\u00edsicas. Ao mesmo tempo aumentam as informa\u00e7\u00f5es no OSM."},"signed_in":"Entrou na conta com sucesso","signed_out":"Desconectado.","timeout":"A sua sess\u00e3o expirou, por favor entre novamente.","unauthenticated":"Por favor conecte-se ou registre-se novamente para continuar.","unconfirmed":"Tem de confirmar a sua conta antes de continuar"},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Palavra passe","remember_me":"Deseja se manter conectado?"},"submit":"Entrar"},"headline":"Entrar"},"sign_out":{"headline":"Sair"},"sign_up":{"email":{"confirm_my_account":"Confirmar minha conta.","please_confirm":"Voc\u00ea pode confirmar seu e-mail clicando no seguinte link:","welcome":"Bem-vindo %{email}!"},"form":{"labels":{"email":"E-mail","password":"Senha","password_confirmation":"Repetir senha","wants_newsletter":"Sim, mantenha-me informado sobre wheelmap. (Mas por favor n\u00e3o mais que uma vez por m\u00eas.)"},"submit":"Registrar-se"},"headline":"Registrar-se"},"unlocks":{"link":"N\u00e3o recebeu instru\u00e7\u00f5es para desbloquear a sua conta?","send_instructions":"Dentro de alguns minutos receber\u00e1 um e-mail com instru\u00e7\u00f5es para desbloquear a sua conta.","send_paranoid_instructions":"Se voc\u00ea j\u00e1 tem uma conta, vai receber um e-mail para desbloque\u00e1-la em alguns minutos.","unlocked":"Sua conta foi ativada com sucesso. Est\u00e1 conectado(a) agora."}},"poi":{"category":{"accommodation":"Acomoda\u00e7\u00e3o ","education":"Educa\u00e7\u00e3o ","food":"Comidas & Bebidas","government":"Governo","health":"Sa\u00fade","leisure":"Lazer","misc":"Outros","money_post":"Bancos & Correios","public_transfer":"Transporte P\u00fablico","shopping":"Compras","sport":"Esporte","tourism":"Turismo","unknown":"Desconhecido"},"name":{"accommodation":{"beach_resort":"Hotel de praia","bed_and_breakfast":"Pens\u00e3o","camp_site":"Acampamento","caravan_site":"Acampamento de treiler","chalet":"Chalet","dormitory":"Moradia","guest_house":"Albergue","hostel":"Hostel","hotel":"Hotel","motel":"Hotel de rodovia"},"education":{"college":"Col\u00e9gio","driving_school":"Autoescola","kindergarten":"Creche","library":"Biblioteca","museum":"Museu","school":"Escola","university":"Universidade"},"food":{"bar":"Bar","biergarten":"Cervejaria ao ar livre","cafe":"Caf\u00e9","drinking_water":"Agua pot\u00e1vel","fast_food":"Lanchonete","ice_cream":"Sorveteria","pub":"Pub","restaurant":"Restaurante"},"government":{"courthouse":"Tribunal","embassy":"Embaixada","government":"Ag\u00eancia governamental","police":"Pol\u00edcia","public_building":"Pr\u00e9dio p\u00fablico","townhall":"Prefeitura"},"health":{"dentist":"Dentista","doctors":"M\u00e9dicos","hearing_aids":"Loja de aparelhos auditivos","hospital":"Hospital","medical_supply":"Equipamentos M\u00e9dicos","pharmacy":"Farm\u00e1cia","social_facility":"Institui\u00e7\u00e3o social","veterinary":"Veterin\u00e1rio"},"leisure":{"arena":"Arena","brothel":"Bordel","casino":"Cassino","cinema":"Cinema","community_center":"Centro comunit\u00e1rio","gallery":"Galeria de arte","nightclub":"Casa noturna","playground":"\u00c1rea recreacional","sauna":"Sauna","stripclub":"clube de strip-tease","theatre":"Teatro","zoo":"Zool\u00f3gico"},"misc":{"company":"Empresa","estate_agent":"Imobili\u00e1ria","insurance":"Seguradora","lawyer":"Advogado","place_of_worship":"Lugar de Adora\u00e7\u00e3o","toilets":"Banheiros p\u00fablicos"},"money_post":{"atm":"Caixa eletr\u00f4nico","bank":"Banco","bureau_de_change":"Loja de C\u00e2mbio","post_box":"Caixa de Correio","post_office":"Ag\u00eancia de Correios"},"public_transfer":{"aerodrome":"Aeroporto","bicycle_parking":"Biciclet\u00e1rio","bicycle_rental":"Aluguel de bicicletas","boatyard":"Estaleiro","bus_station":"Ponto de \u00f4nibus","bus_stop":"Ponto de \u00f4nibus","cable_car":"Telef\u00e9rico de cabine","car_rental":"Aluguel de carros","car_sharing":"Car sharing (compartilhamento)","chair_lift":"Telef\u00e9rico de cadeira","ferry":"Ferry","ferry_terminal":"Terminal de barco","fuel":"Posto de gasolina","halt":"Esta\u00e7\u00e3o","light_rail":"Metr\u00f4 Leve","parking":"Estacionamento","parking_aisle":"Corredor de estacionamento","platform":"Plataforma","station":"Metr\u00f4","subway_entrance":"Entrada do Metr\u00f4","terminal":"Terminal de Aeroporto ","tram_stop":"Parada de bonde"},"shopping":{"alcohol":"Bebidas alco\u00f3licas","bakery":"Padaria","beauty":"Sal\u00e3o de beleza","beverages":"Bebidas","bicycle":"Loja de bicicletas","books":"Livraria","butcher":"A\u00e7ougue","car_repair":"Oficina mec\u00e2nica","car_shop":"Loja de autom\u00f3veis","chemist":"Drogaria","clothes":"Roupa","computer":"Computadores","confectionery":"Confeitaria","convenience":"Loja de Conveni\u00eancia","deli":"Delicatessen","department_store":"Loja de Departamentos","doityourself":"Loja de ferragens","dry_cleaning":"Lavanderia a seco","electronics":"Loja de Eletr\u00f4nicos","fabric":"Lojas de tecidos","farm_shop":"Loja de fazenda","florist":"Florista","furniture":"M\u00f3veis","garden_centre":"Centro de jardinagem","gift":"Loja de presentes","hairdresser":"Cabeleireiro","hardware":"Utens\u00edlios e Ferramentas","jewelry":"Joalharia","kiosk":"Quiosque","laundry":"Lavandaria","mall":"Shopping Center","optician":"\u00d3tica","organic":"Loja org\u00e2nica","outdoor":"Equipamento Outdoor","pet":"Pet shop","photo":"Loja de fotografia","second_hand":"Brech\u00f3","shoes":"Sapataria","sports":"Produtos esportivos","stationery":"Papelaria","supermarket":"Supermercado","toys":"Brinquedos","travel_agency":"Ag\u00eancia de viagens","video":"Locadora"},"sport":{"pitch":"Quadra de esporte","sports_centre":"Centro esportivo","stadium":"Est\u00e1dio","swimming":"Nata\u00e7\u00e3o","swimming_pool":"Piscina"},"tourism":{"archaeological_site":"Local arqueol\u00f3gico","arts_centre":"Centro de artes","artwork":"Obra de arte","attraction":"Atrac\u00e7\u00e3o","battlefield":"Campo de batalha","beach":"Praia","beacon":"Farol","castle":"Castelo","cave_entrance":"Entrada de caverna","information":"Informa\u00e7\u00e3o para turistas","memorial":"Memorial","theme_park":"Parque tem\u00e1tico","tower":"Torre","viewpoint":"Mirante"},"unknown":{"unknown":"Desconhecido"}}},"models":{"category":{"prompt":"Choose a category"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Send","save":"Save","cancel":"Cancel"},"faq":{"answers":{"0":"Voc\u00ea sempre pode mudar a marca\u00e7\u00e3o dum lugar. Simplesmente escolhe a classifica\u00e7\u00e3o certa e \"Salvar\" - pronto!","1":"Como usu\u00e1rio logado voc\u00ea pode acrescentar / corrigir detalhes dum lugar. Clique em \"Editar\" em corrija ou acrescente informa\u00e7\u00f5es.","2":"Voc\u00ea pode acrescentar mais informa\u00e7\u00f5es (por exemplo, \"Este lugar possui uma rampa m\u00f3vel\") na se\u00e7\u00e3o de coment\u00e1rios. Clique em \"Editar\" e \"Adicionar coment\u00e1rio\"."},"headline":"Tem algum problema com este lugar?","questions":{"0":"A marca\u00e7\u00e3o est\u00e1 errada.","1":"Os detalhes do lugar est\u00e3o incorretos ou faltam.","2":"Tenho mais informa\u00e7\u00f5es sobre este lugar."}},"header":{"navigation":{"about_wheelmap":"Sobre Wheelmap","choose_language":"Escolher idioma","contact":"Contato","map":"Mapa","projects":"Projetos:","blog":"Blog","feedback":"Feedback","home":"Iniciar","how_to_add_a_place":"Como adicionar lugares?","imprint":"Contato","logged_in_as":"Conectado como:","login":"Entrar","logout":"Sair","newsletter":"Newsletter","press":"Imprensa","profile":"Perfis","suggestions":"Sugest\u00f5es","what_is_barrier_free":"Qual o significado de \"acess\u00edvel a cadeirantes\"?","what_is_wheelmap":"O que \u00e9 o Wheelmap?"},"toolbar":{"categories":"Categorias"},"meta":{"description":"Degrau aqui, escadas ali ou sem banheiros adaptados - gra\u00e7as a Wheelmap voc\u00ea pode saber antes se um museu, um cinema ou um restaurante s\u00e3o acess\u00edveis a cadeirantes.","homepage":"P\u00e1gina principal","keywords":"lugares acess\u00edveis a cadeirantes cadeira de rodas achar procurar marcar","search":"Procurar"},"searchbar":{"add_place":"Adicionar outro lugar","find":"Encontrar","label":null,"placeholder":"exemplos: 'Bras\u00edlia', 'Av. Paulista, S\u00e3o Paulo'","title_add_place":"Adicionar um novo lugar nesta posi\u00e7\u00e3o agora!"},"tagline":"Logotipo do Wheelmap","title":"Encontre lugares acess\u00edveis a cadeirantes"},"home":{"index":{"overlay":{"button":"Vamos l\u00e1!","categories":"Filtrar lugares por categoria","filter":"Filtrar lugares por acessibilidade","headline":"Marque e encontre lugares acess\u00edveis a cadeirantes com Wheelmap.org - no mundo tudo e de gra\u00e7a. \u00c9 simples:","lookup":"Buscar um lugar espec\u00edfico","secondary_headline":"Nosso sistema de sem\u00e1foro para indicar a acessibilidade de lugares p\u00fablicos:"},"filter":{"category":"Escolher categoria","deselect_all":"Desativar todos","select_all":"Ativar todos","wheelchair":"Acess\u00edvel a cadeirantes?"},"ie":{"action":{"ignore":"Ignorar","upgrade":"Atualizar browser"},"warning":{"headline":"Desculpe!","message":"Aparentemente voc\u00ea est\u00e1 usando Internet Explorer.  Wheelmap precisa dum browser compat\u00edvel com o padr\u00e3o para funcionar. Por favor, use Firefox, Chrome, Safari ou Opera."}},"link":{"node":{"create":"Adicionar novo lugar"}},"popup":{"form":{"limited":"Parcialmente acess\u00edvel","no":"N\u00e3o acess\u00edvel a cadeirantes","save":"Salvar","unknown":"Status desconhecido","yes":"Completamente acess\u00edvel"},"help":"Acess\u00edvel a cadeirantes? (Ajuda)","more":"mais ..."}}},"nodes":{"new":{"form":{"legend":"Localiza\u00e7\u00e3o do lugar","location":"Por favor, clique no mapa e coloque o marcador na posi\u00e7\u00e3o exata."},"header":{"title":"Novo lugar | wheelmap.org"},"link":{"large_map":"&laquo; Cancelar"}},"node_data":{"address":"Endere\u00e7o:","contact_details":"Contato:"},"node_edit":{"details":"Detalhes","edit":"Editar"},"node_map":{"map":"Mapa:"},"node_note":{"comment":"Coment\u00e1rio:"},"node_photos":{"add":"Adicionar","photos_of_this_place":"Fotos deste lugar:","upload":"Transfer\u00eancia"},"node_similar":{"similar":"Lugares parecidos: %{name}"},"node_status":{"accessible_toilet":"Banheiro acess\u00edvel:","premium":"%{name} diz: este lugar \u00e9","wheelchair_accessibility":"Acessibilidade a cadeirantes:"},"node_streetview":{"streetview":"Vista de rua:"},"show":{"header":{"meta":{"description":"Saiba se um lugar \u00e9 acess\u00edvel a cadeirantes pelo Wheelmap.org. Ou acrescente mais informa\u00e7\u00f5es e fotos ao lugar.","title":"Este lugar est\u00e1 em Wheelmap.org: %{name}"},"title":"Lugar: %{node} | wheelmap.org"},"share":{"email":"E-mail","facebook":"Facebook","text":"Encontrei este lugar em Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"Voltar","large_map":"Aumentar","listing":"Todos os lugares do tipo '%{type}' em %{city}","upload":"Transferir imagem"},"more_data_from":"N\u00e3o existem mais dados sobre este lugar, qualificado por:","show-in-osm":"mostrar em Openstreetmap"},"create":{"flash":{"not_successfull":"Oops, os dados ainda est\u00e3o incorretos ou incompletos.","successfull":"Muito obrigado, os dados submetidos foram salvos com sucesso e estar\u00e3o online em breve. "}},"edit":{"header":{"title":"Editar lugar: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Cancelar"}},"errors":{"default":"Oops, algo n\u00e3o correu bem. N\u00f3s j\u00e1 fomos informados sobre a situa\u00e7\u00e3o. ","not_authorized":"Desculpe, a autentifica\u00e7\u00e3o falhou","not_available":"Desculpe, mas no momento esta p\u00e1gina n\u00e3o est\u00e1 dispon\u00edvel","not_existent":"Desculpe, este lugar n\u00e3o existe mais","not_found":"Desculpe, a p\u00e1gina n\u00e3o foi encontrada","param_missing":"Por favor digite sua busca."},"flash":{"authorize_wheelmap":"Para alterar os dados voc\u00ea precisa duma conta OpenStreetMap."},"node":{"link":{"claim":"Voc\u00ea trabalha aqui?","edit_node":"Editar lugar","report_bug":"Relatar um problema"}},"update":{"flash":{"not_successfull":"Oops, os dados ainda s\u00e3o incompletos ou incorretos.","successfull":"Muito obrigado, os dados submetidos foram guardados com sucesso e estar\u00e3o online em breve. "}},"update_wheelchair":{"successfull":"O status  do lugar \"%{name}\" foi mudado para \"%{status}\"."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Exemplo:</strong> S\u00e3o Paulo, Brasil","info":"Nosso servi\u00e7o de busca funciona somente com nome e/ou informa\u00e7\u00f5es de endere\u00e7o. Portanto, ou procure pelo nome do lugar ou por um endere\u00e7o, por exemplo, nome de rua e/ou cidade. Buscar pelo tipo dum lugar, por exemplo restaurante ou cinema, n\u00e3o funciona.","work_in_progress":"Trabalhamos duro para tornar buscar lugares mais f\u00e1cil e mais intuitivo no futuro."},"try_this":{"address":"Por favor, forne\u00e7a mais <strong>detalhes de endere\u00e7o</strong>.","intro":"Tente isso:","spell_check":"Verifique a <strong>ortografia</strong>."}},"results":{"ticker":{"one":"%{count} resultado:","other":"%{count} resultados:"}},"search":{"for":"Procurando \"%{q}\"","not_found":"Nenhum lugar encontrado!"}},"timeout":{"headline":"Oh, nossa culpa","info":"Nosso sistema de busca estava temporariamente indispon\u00edvel.","repeat_search":"Nova busca"}},"application":{"require_no_user":{"notice":"J\u00e1 est\u00e1 conectado \u00e0 sua conta"},"require_user":{"notice":"Tem de se ligar \u00e0 sua conta para ver o conte\u00fado desta p\u00e1gina."}},"breadcrumbs":{"node":{"create":"Adicionar um novo lugar","edit":"Editar lugar"},"root":"wheelmap"},"common":{"close":"fechar","skip":"Pular"},"form":{"show_fully_accessible_places":"Acess\u00edvel a cadeirantes","show_limited_accessible_places":"Parcialmente","show_places_without_status":"Status desconhecido","show_unaccessible_places":"n\u00e3o acess\u00edvel a cadeirantes"},"formtastic":{"hints":{"email":"Mantemos seu endere\u00e7o confidencial. Nenhum lixo eletr\u00f4nico, garantido!","lat":"Coloque o indicador no mapa na posi\u00e7\u00e3o certa","osm_username":"Ainda n\u00e3o \u00e9 membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Criar uma conta Openstreetmap</a>","password":"(deixar em branco se n\u00e3o quiser modificar) ","phone":"p. ex. +351 21 6100453","website":"Exemplo: http://www.example.com"},"labels":{"category":"Categoria:","centralkey":"Chave central:","city":"Cidade:","create":"Criar um lugar","email":"Mail","finish":"Terminar","housenumber":"N\u00b0:","lat":"Latitude","lon":"Longitude","name":"Nome:","osm_password":"Senha OSM","osm_username":"OSM nome da conta","password":"Senha","password_confirmation":"Repetir senha","phone":"Telefone:","postcode":"CEP:","privacy_policy":"Aceito par\u00e1grafos 1 e 2 do acordo de privacidade de dados","reset":"Recome\u00e7ar","save":"Salvar","street":"Rua:","terms":"Aceito os termos de uso.","type":"Tipo:","website":"Website:","wheelchair":"Acess\u00edvel a cadeirantes?","wheelchair_description":"Coment\u00e1rio sobre a acessibilidade: ","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Dados b\u00e1sicos","optional":"Mais informa\u00e7\u00f5es <span class=\"addition\">(todos os campos s\u00e3o opcionais)</span>"}},"global":{"form_validation_error":"Por favor veja os erros abaixo."},"how?":"Como?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Todos os %{type} acess\u00edveis em %{city} (%{count})"},"no":{"headline":"Todos os %{type} n\u00e3o acess\u00edveis em %{city} (%{count})"},"unknown":{"headline":"Todos os %{type} em %{city} com acessibilidade desconhecida (%{count})"},"yes":{"headline":"Todos os %{type} acess\u00edveis a cadeirantes em %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Um projeto de Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{street}, %{housenumber}"},"tags":{"phone":"Telefone:","website":"Website:"}},"oauth":{"application":{"connect":{"headline":"Para editar ou adicionar lugares em wheelmap.org, voc\u00ea tem de conectar sua conta com Openstreetmap."}},"callback":{"notice":"Sua conta foi conectada com sucesso com a conta OpenStreetMap de '%{user}'."}},"or":"ou","place":{"one":"%{count} lugar","other":"%{count} lugares"},"profile":{"edit":{"application":{"oauth":{"connected":"Estatus: Conectado","grant":"Ligar agora","not_connected":"Status: n\u00e3o conectado","revoke":"Desligar"}},"headline":"Editar o seu perfil"}},"splash":{"countline":"%{count} lugares j\u00e1 foram marcados.","headline":"Todo mundo pode adicionar lugares acess\u00edveis!","start":"Come\u00e7ar","step1":"Clique num lugar que voc\u00ea conhece.","step2":"Marque-lo e clique em \"Salvar\"","step3":"Pronto! Nenhum registro necess\u00e1rio!","what_is_wheelmap":"O que \u00e9 Wheelmap?"},"statistics":"Estat\u00edsticas","toiletstatus":{"no":"no wheelchair accessible bathroom","unknown":"unknown status","yes":"wheelchair accessible bathroom"},"user_sessions":{"create":{"activation":{"notice":"A sua conta foi ativada."},"error":{"notice":"E-Mail e senha n\u00e3o conferem."},"notice":"Voc\u00ea est\u00e1 dentro!"},"destroy":{"notice":"At\u00e9 breve!"},"new":{"email":"E-mail","login":"Entrar","login_with_twitter":"Conecte-se pelo Twitter","password":"Senha","remember_me":"Mantenha-se connectado"}},"users":{"after_signup_edit":{"welcome":{"headline":"Quase pronto!","set_password_for_mobile":"Voc\u00ea tem um smartphone? Ent\u00e3o defina uma senha aqui para usar o wheelmap no seu iPhone ou celular Android.","text":"Voc\u00ea se registrou com sucesso. Nos lhe informaremos sobre not\u00edcias importantes acerca do Wheelmap."}},"edit":{"headline":{"your_images":"Suas imagens"}}},"wheelchairstatus":{"limited":"Parcialmente acess\u00edvel a cadeirantes","no":"N\u00e3o acess\u00edvel a cadeirantes","unknown":"Sem informa\u00e7\u00f5es sobre acessibilidade","yes":"Completamente acess\u00edvel a cadeirantes"},"wheelmap":{"footer":{"a_project_of":"Um projeto de","based_on":"Baseado em","become_a_supporter":"Tornar-se patrocinador","main_supporter":"Patrocinador principal"},"itunes":{"alt":"AppStore Logotipo","title":"Fa\u00e7a agora o download do seu iPhone App!"},"logo":{"alt":"Wheelmap Logotipo - Encontre lugares acess\u00edveis a cadeirantes","title":"Wheelmap - Encontre lugares acess\u00edveis a cadeirantes"},"what_is":{"fully_accessible":"Entrada e todos os ambientes sem degraus, com banheiro acess\u00edvel se houver.","limited_accessible":"Desn\u00edvel na entrada inferior a 7 cm; ambientes mais importantes acess\u00edveis.","not_accessible":"Entrada com degraus altos ou ambientes importantes n\u00e3o acess\u00edveis.","unknown_accessible":"Ajude avaliando estes lugares!"}},"will_paginate":{"next_label":"Pr\u00f3ximo &#8594;","page_entries_info":{"multi_page":"Mostre %{model} %{from} - %{to} de %{count} no total","multi_page_html":"Mostre %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> dum total de <b>%{count}</b>","single_page":{"one":"Mostrar 1 %{model}","other":"Mostrar todos os %{count} %{model}","zero":"%{model} n\u00e3o encontrado"},"single_page_html":{"one":"Mostrar <b>1</b> %{model}","other":"Mostre <b>todos os &nbsp;%{count}</b> %{model}","zero":"%{model} n\u00e3o encontrado"}},"page_gap":"&hellip;","previous_label":"&#8592; Voltar"},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","previous":"&lsaquo; Prev","next":"Next &rsaquo;","truncate":"&hellip;"}},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
