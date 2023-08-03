define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "ContactsList",
				"values": {
					"selectedRows": "$ContactsList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContactsList_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_sderhe6",
					"labelPosition": "auto",
					"control": "$StringAttribute_sderhe6",
					"multiline": false
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_sderhe6": {
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