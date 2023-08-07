define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"selectedRows": "$AddressList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "AddressList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CareerList",
				"values": {
					"selectedRows": "$CareerList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "CareerList_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_70ofqm5",
					"labelPosition": "auto",
					"control": "$NumberAttribute_70ofqm5"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"NumberAttribute_70ofqm5": {
					"modelConfig": {
						"path": "PDS.UsrWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});