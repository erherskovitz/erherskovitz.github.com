var cstore = {
  "meta" : {
    "view" : {
      "id" : "zzzz-zzzz",
      "name" : "Corner Stores",
      "attribution" : "Mayor's Office of Food Initiatives",
      "averageRating" : 0,
      "description" : "Corner store locations in Boston",
      "displayType" : "table",
      "licenseId" : "CC0_10",
      "numberOfComments" : 0,
      "oid" : 0,
      "publicationAppendEnabled" : false,
      "publicationStage" : "unpublished",
      "rowsUpdatedAt" : 1359573943,
      "rowsUpdatedBy" : "qyzb-duix",
      "signed" : false,
      "tableId" : 646567,
      "totalTimesRated" : 0,
      "viewType" : "tabular",
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : ":sid",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : ":id",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : ":position",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : {
        }
      }, {
        "id" : 42089806,
        "name" : "Site",
        "dataTypeName" : "text",
        "fieldName" : "site",
        "position" : 1,
        "renderTypeName" : "text",
        "tableColumnId" : 7405436,
        "width" : 148,
        "format" : {
        }
      }, {
        "id" : 42089807,
        "name" : "Address",
        "dataTypeName" : "text",
        "fieldName" : "address",
        "position" : 2,
        "renderTypeName" : "text",
        "tableColumnId" : 7405437,
        "width" : 184,
        "format" : {
        }
      }, {
        "id" : 42089808,
        "name" : "Area",
        "dataTypeName" : "text",
        "fieldName" : "area",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 7405438,
        "width" : 148,
        "format" : {
        }
      }, {
        "id" : 42089809,
        "name" : "State",
        "dataTypeName" : "text",
        "fieldName" : "state",
        "position" : 4,
        "renderTypeName" : "text",
        "tableColumnId" : 7405439,
        "width" : 160,
        "format" : {
        }
      }, {
        "id" : 42089810,
        "name" : "Zip",
        "dataTypeName" : "number",
        "fieldName" : "zip",
        "position" : 5,
        "renderTypeName" : "number",
        "tableColumnId" : 7405440,
        "width" : 136,
        "format" : {
        }
      }, {
        "id" : 42089923,
        "name" : "Map Location",
        "dataTypeName" : "location",
        "description" : "map",
        "fieldName" : "map_location",
        "position" : 6,
        "renderTypeName" : "location",
        "tableColumnId" : 7406836,
        "width" : 100,
        "format" : {
        },
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      } ],
      "grants" : [ {
        "inherited" : true,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "license" : {
        "name" : "Creative Commons 1.0 Universal",
        "logoUrl" : "images/licenses/ccZero.png",
        "termsLink" : "http://creativecommons.org/publicdomain/zero/1.0/legalcode"
      },
      "metadata" : {
        "custom_fields" : {
          "Data Owner" : {
            "Owner" : "Office of the Mayor"
          }
        },
        "renderTypeConfig" : {
          "visible" : {
            "page" : true,
            "table" : true
          },
          "active" : {
            "page" : {
              "id" : "19"
            }
          }
        },
        "availableDisplayTypes" : [ "table", "fatrow", "page" ]
      },
      "query" : {
        "filterCondition" : {
          "type" : "operator",
          "value" : "AND",
          "children" : [ {
            "type" : "operator",
            "value" : "OR",
            "children" : [ {
              "type" : "operator",
              "value" : "EQUALS",
              "children" : [ {
                "columnId" : 42089808,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "east boston"
              } ],
              "metadata" : {
                "freeform" : true
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "646466" : 7405438
              },
              "operator" : "EQUALS"
            }
          } ],
          "metadata" : {
            "unifiedVersion" : 2
          }
        }
      },
      "rights" : [ "read" ],
      "tableAuthor" : {
        "id" : "qyzb-duix",
        "displayName" : "GGoldleaf",
        "emailUnsubscribed" : false,
        "privacyControl" : "login",
        "profileLastModified" : 1352315565,
        "roleName" : "publisher",
        "screenName" : "GGoldleaf",
        "rights" : [ "create_datasets", "edit_others_datasets", "edit_nominations", "approve_nominations", "moderate_comments", "manage_stories", "feature_items", "change_configurations", "view_domain", "view_others_datasets", "edit_pages" ]
      },
      "tags" : [ "corner stores", "retail", "food", "food access", "food initiatives" ],
      "viewFilters" : {
        "type" : "operator",
        "value" : "AND",
        "children" : [ {
          "type" : "operator",
          "value" : "OR",
          "children" : [ {
            "type" : "operator",
            "value" : "EQUALS",
            "children" : [ {
              "columnId" : 42089808,
              "type" : "column"
            }, {
              "type" : "literal",
              "value" : "east boston"
            } ],
            "metadata" : {
              "freeform" : true
            }
          } ],
          "metadata" : {
            "tableColumnId" : {
              "646466" : 7405438
            },
            "operator" : "EQUALS"
          }
        } ],
        "metadata" : {
          "unifiedVersion" : 2
        }
      },
      "flags" : [ "unsaved" ]
    }
  },
  "data" : [  [ 176, "5188B709-9ACE-47DB-BA7C-AFF48077636C", 176, 1359570111, "699782", 1359573928, "699782", "{\n}", "Cumberland Farms", "464 Chelsea St", "East Boston", "MA", "2128", [ "{\"address\":\"464 Chelsea St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.38184885379028", "-71.02498470821692", null, false ] ]
, [ 177, "DC65E570-B6E9-4B17-8F59-04FBA8099537", 177, 1359570111, "699782", 1359573940, "699782", "{\n}", "El Condor Market", "337 Paris St", "East Boston", "MA", "2128", [ "{\"address\":\"337 Paris St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.377576405884895", "-71.0316619227192", null, false ] ]
, [ 178, "18448227-D3E4-452E-8863-E50E079C082E", 178, 1359570111, "699782", 1359573922, "699782", "{\n}", "Franco's Place", "160 Trenton St", "East Boston", "MA", "2128", [ "{\"address\":\"160 Trenton St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.380101188977534", "-71.03338023355548", null, false ] ]
, [ 179, "D0430C7A-36BE-49B0-96A5-40072EE9A6D6", 179, 1359570111, "699782", 1359573939, "699782", "{\n}", "Los Paisanos Market LLC", "11 Meridian St", "East Boston", "MA", "2128", [ "{\"address\":\"11 Meridian St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.37044370761575", "-71.03891945149564", null, false ] ]
, [ 180, "EC03CE1D-68CB-4A10-A178-EC8DC7E338DA", 180, 1359570111, "699782", 1359573941, "699782", "{\n}", "Neptune Convenience & Liquor", "3 Neptune Rd", "East Boston", "MA", "2128", [ "{\"address\":\"3 Neptune Rd\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.37996126014139", "-71.02551589006805", null, false ] ]
, [ 181, "445F7BD9-DAA2-4CDB-A973-C5C95B9905CE", 181, 1359570111, "699782", 1359573927, "699782", "{\n}", "Neptune Launderette", "944 Bennington St", "East Boston", "MA", "2128", [ "{\"address\":\"944 Bennington St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.38624819757985", "-71.00823603306657", null, false ] ]
, [ 182, "A30F3158-13DF-458E-983D-D7BFFC5F8B6A", 182, 1359570111, "699782", 1359573935, "699782", "{\n}", "Store 24", "14 Maverick Sq", "East Boston", "MA", "2128", [ "{\"address\":\"14 Maverick Sq\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.369396327769316", "-71.03962464580405", null, false ] ]
, [ 183, "96C8209E-F67C-444A-81EB-203669C1F4BB", 183, 1359570111, "699782", 1359573934, "699782", "{\n}", "Sumner Market Inc", "345 Sumner St", "East Boston", "MA", "2128", [ "{\"address\":\"345 Sumner St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.366910446617396", "-71.03543907524227", null, false ] ]
, [ 184, "C622AE34-8FB7-4181-9472-F49B35C3EAA9", 184, 1359570111, "699782", 1359573938, "699782", "{\n}", "Tesoro Market", "188 Chelsea St", "East Boston", "MA", "2128", [ "{\"address\":\"188 Chelsea St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.37443893118786", "-71.03358995670017", null, false ] ]
, [ 185, "AEC29E3E-0788-4EB3-BD02-77471E71F96C", 185, 1359570111, "699782", 1359573936, "699782", "{\n}", "Todisco's Mobil", "470 Meridian St", "East Boston", "MA", "2128", [ "{\"address\":\"470 Meridian St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.382718041084324", "-71.03938370816641", null, false ] ]
, [ 186, "451612AA-BCC9-44B7-9EB8-C26D87DB9381", 186, 1359570111, "699782", 1359573927, "699782", "{\n}", "Two Brothers Market", "51 Trenton St", "East Boston", "MA", "2128", [ "{\"address\":\"51 Trenton St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.37839269773639", "-71.03764021354458", null, false ] ]
, [ 187, "BE81DC48-6026-4903-9E82-0E079FC223AA", 187, 1359570111, "699782", 1359573938, "699782", "{\n}", "Varied Dades Amy", "178 Bennington St", "East Boston", "MA", "2128", [ "{\"address\":\"178 Bennington St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.377306609276104", "-71.03261520407028", null, false ] ]
, [ 188, "8A6AD75A-8EBE-4CF6-8071-40B0A67D0C5F", 188, 1359570111, "699782", 1359573933, "699782", "{\n}", "White Hen Pantry", "120 Byron St", "East Boston", "MA", "2128", [ "{\"address\":\"120 Byron St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.38382705192493", "-71.01644849764489", null, false ] ]
, [ 189, "7748C621-DC8D-4906-9613-8F8A6744F3CA", 189, 1359570111, "699782", 1359573931, "699782", "{\n}", "White Hen Pantry", "205 Maverick St", "East Boston", "MA", "2128", [ "{\"address\":\"205 Maverick St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"2128\"}", "42.36881502802967", "-71.03609047137489", null, false ] ]
 ]
}