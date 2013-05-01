var hstore = {
  "meta" : {
    "view" : {
      "id" : "zzzz-zzzz",
      "name" : "Healthy Corner Stores",
      "attribution" : "Mayor's Office of Food Initiatives",
      "attributionLink" : "http://cityofboston.gov/food",
      "averageRating" : 0,
      "category" : "Health",
      "description" : "Corner stores and bodegas participating in the Healthy Corner Stores Initiative sponsored by the Boston Public Health Commission, and other community health center healthy corner store project locations. Accurate as of December 2012: please contact with corrections and updates!",
      "displayType" : "table",
      "licenseId" : "CC0_10",
      "numberOfComments" : 0,
      "oid" : 0,
      "publicationAppendEnabled" : false,
      "publicationStage" : "unpublished",
      "rowsUpdatedAt" : 1354721686,
      "rowsUpdatedBy" : "qyzb-duix",
      "signed" : false,
      "tableId" : 538703,
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
        "id" : 32949584,
        "name" : "Store",
        "dataTypeName" : "text",
        "fieldName" : "store",
        "position" : 2,
        "renderTypeName" : "text",
        "tableColumnId" : 5820616,
        "width" : 160,
        "format" : {
        }
      }, {
        "id" : 32949585,
        "name" : "Address",
        "dataTypeName" : "text",
        "fieldName" : "address",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 5820617,
        "width" : 184,
        "format" : {
        }
      }, {
        "id" : 32949586,
        "name" : "Area",
        "dataTypeName" : "text",
        "fieldName" : "area",
        "position" : 4,
        "renderTypeName" : "text",
        "tableColumnId" : 5820618,
        "width" : 148,
        "format" : {
        }
      }, {
        "id" : 32949587,
        "name" : "State",
        "dataTypeName" : "text",
        "fieldName" : "state",
        "position" : 5,
        "renderTypeName" : "text",
        "tableColumnId" : 5820619,
        "width" : 160,
        "format" : {
        }
      }, {
        "id" : 32949588,
        "name" : "Zip",
        "dataTypeName" : "text",
        "fieldName" : "zip",
        "position" : 6,
        "renderTypeName" : "text",
        "tableColumnId" : 5820620,
        "width" : 136,
        "format" : {
        }
      }, {
        "id" : 32949589,
        "name" : "Coordinates",
        "dataTypeName" : "text",
        "fieldName" : "coordinates",
        "position" : 7,
        "renderTypeName" : "text",
        "tableColumnId" : 5820621,
        "width" : 232,
        "format" : {
        }
      }, {
        "id" : 32949767,
        "name" : "Location",
        "dataTypeName" : "location",
        "fieldName" : "location",
        "position" : 8,
        "renderTypeName" : "location",
        "tableColumnId" : 5820779,
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
            "table" : true
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
                "columnId" : 32949586,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "east boston"
              } ],
              "metadata" : {
                "freeform" : false
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "538703" : 5820618
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
      "tags" : [ "food", "food initiatives", "corner stores", "public health", "food access", "food security", "healthy food" ],
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
              "columnId" : 32949586,
              "type" : "column"
            }, {
              "type" : "literal",
              "value" : "east boston"
            } ],
            "metadata" : {
              "freeform" : false
            }
          } ],
          "metadata" : {
            "tableColumnId" : {
              "538703" : 5820618
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
  "data" : [ [ 5, "480DA865-C2CD-4D6B-91CC-BA9D6B52552B", 5, 1354721518, "699782", 1354721685, "699782", "{\n}", "Tio Supermarket", "9 Meridian St", "East Boston", "MA", "2128", "42.3704915,-71.0389462", [ "{\"address\":\"9 Meridian St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 6, "24631494-3D43-422C-9077-715C92859951", 6, 1354721518, "699782", 1354721685, "699782", "{\n}", "Million Market", "99 Chelsea St", "East Boston", "MA", "2128", "42.3723452,-71.0357756", [ "{\"address\":\"99 Chelsea St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 7, "04CBB187-5A11-4ECD-BB83-54BC8A8EFC87", 7, 1354721518, "699782", 1354721685, "699782", "{\n}", "El Paisa Butchery", "1010 Bennington St", "East Boston", "MA", "2128", "42.3868595,-71.0063494", [ "{\"address\":\"1010 Bennington St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 8, "E552CAB2-8FB8-4195-B936-D9429C0F44FA", 8, 1354721518, "699782", 1354721686, "699782", "{\n}", "Two Brothers Market", "75 Marion St", "East Boston", "MA", "2128", "42.3783247,-71.0376383", [ "{\"address\":\"75 Marion St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 9, "54942916-1025-4716-9358-A54F6368F135", 9, 1354721518, "699782", 1354721685, "699782", "{\n}", "Raymond Market", "351 Meridian St", "East Boston", "MA", "2128", "42.3785572,-71.0389671", [ "{\"address\":\"351 Meridian St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 10, "E3068105-6F58-4DCA-B04D-5637FA0D57D1", 10, 1354721518, "699782", 1354721686, "699782", "{\n}", "Mi Tierra Market", "71 Meridian St", "East Boston", "MA", "2128", "42.3719373,-71.0389997", [ "{\"address\":\"71 Meridian St\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 11, "C4186A20-8314-44CF-A616-CF539FD2A410", 11, 1354721518, "699782", 1354721685, "699782", "{\n}", "Condor Market East Boston", " 655 Saratoga Street", "East Boston", "MA", "2128", "42.382387,-71.020753", [ "{\"address\":\"655 Saratoga Street\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
, [ 12, "BF5A4F41-F365-44CE-BA6D-65C9AC768EE7", 12, 1354721518, "699782", 1354721685, "699782", "{\n}", "Las Costas Market", "184 Bremen Street", "East Boston", "MA", "2128", "42.373082,-71.034229", [ "{\"address\":\"184 Bremen Street\",\"city\":\"East Boston\",\"state\":\"MA\",\"zip\":\"\"}", "42.378460000328914", "-71.02881000038104", null, false ] ]
 ]
}