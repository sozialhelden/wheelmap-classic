class AddNewNodeTypes < SeedMigration::Migration
  def up
    #cycling

    # Health
    NodeType.create({category_id: 12, icon: 'hearing_aids.png', identifier: 'hearing_aids', osm_key: 'shop', osm_value: 'hearing_aids'})
    NodeType.create({category_id: 12, icon: 'dentist.png', identifier: 'dentist', osm_key: 'amenity', osm_value: 'dentist'})
    NodeType.create({category_id: 12, icon: 'social_facility.png', identifier: 'social_facility', osm_key: 'amenity', osm_value: 'social_facility'})
    NodeType.create({category_id: 12, icon: 'therapy.png', identifier: 'psychotherapist', osm_key: 'healthcare', osm_value: 'psychotherapist'})
    NodeType.create({category_id: 12, icon: 'conversation.png', identifier: 'speech_therapist', osm_key: 'healthcare', osm_value: 'speech_therapist'})
    NodeType.create({category_id: 12, icon: 'theft.png', identifier: 'occupational_therapist', osm_key: 'healthcare', osm_value: 'occupational_therapist'})
    NodeType.create({category_id: 12, icon: 'yin_yang.png', identifier: 'alternative', osm_key: 'healthcare', osm_value: 'alternative'})
    NodeType.create({category_id: 12, icon: 'massage.png', identifier: 'physiotherapist', osm_key: 'healthcare', osm_value: 'physiotherapist'})

    # Leisure
    NodeType.create({category_id: 3, icon: 'spa.png', identifier: 'sauna', osm_key: 'leisure', osm_value: 'sauna'})
    NodeType.create({category_id: 3, icon: 'naval_museum.png', identifier: 'tattoo', osm_key: 'shop', osm_value: 'tattoo'})
    NodeType.create({category_id: 3, icon: 'massage.png', identifier: 'massage', osm_key: 'shop', osm_value: 'massage'})

    # Miscellaneous
    NodeType.create({category_id: 10, icon: 'group.png', identifier: 'association', osm_key: 'office', osm_value: 'association'})
    NodeType.create({category_id: 10, icon: 'group.png', identifier: 'ngo', osm_key: 'office', osm_value: 'ngo'})
    NodeType.create({category_id: 10, icon: 'reception.png', identifier: 'political_party', osm_key: 'office', osm_value: 'political_party'})

    # Government
    NodeType.create({category_id: 11, icon: 'employment_agency.png', identifier: 'employment_agency', osm_key: 'office', osm_value: 'employment_agency'})

    # Shopping
    NodeType.create({category_id: 6, icon: 'tea_house.png', identifier: 'tea', osm_key: 'shop', osm_value: 'tea'})
    NodeType.create({category_id: 6, icon: 'crematorium.png', identifier: 'funeral_directors', osm_key: 'shop', osm_value: 'funeral_directors'})
    NodeType.create({category_id: 6, icon: 'smoking.png', identifier: 'tobacco', osm_key: 'shop', osm_value: 'tobacco'})
    NodeType.create({category_id: 6, icon: 'printer.png', identifier: 'copyshop', osm_key: 'shop', osm_value: 'copyshop'})
    NodeType.create({category_id: 6, icon: 'art_museum.png', identifier: 'art', osm_key: 'shop', osm_value: 'art'})
    NodeType.create({category_id: 6, icon: 'crafts_museum.png', identifier: 'interior_decoration', osm_key: 'shop', osm_value: 'interior_decoration'})
    NodeType.create({category_id: 6, icon: 'tailor.png',  identifier: 'tailor', osm_key: 'shop', osm_value: 'tailor'})
    NodeType.create({category_id: 6, icon: 'love_interest.png', identifier: 'erotic', osm_key: 'shop', osm_value: 'erotic'})
    NodeType.create({category_id: 6, icon: 'art_museum_2.png', identifier: 'antiques', osm_key: 'shop', osm_value: 'antiques'})
    NodeType.create({category_id: 6, icon: 'jazz_club.png', identifier: 'musical_instrument', osm_key: 'shop', osm_value: 'musical_instrument'})
    NodeType.create({category_id: 6, icon: 'classical_music.png', identifier: 'music', osm_key: 'shop', osm_value: 'music'})
    NodeType.create({category_id: 6, icon: 'newsagent.png', identifier: 'newsagent', osm_key: 'shop', osm_value: 'newsagent'})
    NodeType.create({category_id: 6, icon: 'tag_label.png', identifier: 'variety_store', osm_key: 'shop', osm_value: 'variety_store'})
    NodeType.create({category_id: 6, icon: 'apple.png', identifier: 'greengrocer', osm_key: 'shop', osm_value: 'greengrocer'})
    NodeType.create({category_id: 6, icon: 'phones.png', identifier: 'mobile_phone', osm_key: 'shop', osm_value: 'mobile_phone'})
  end

  def down
    
  end
end
