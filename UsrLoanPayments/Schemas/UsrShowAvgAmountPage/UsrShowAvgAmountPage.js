define("UsrShowAvgAmountPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"type": "crt.TabContainer"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab",
				"properties": [
					"rows",
					"columns",
					"gap"
				]
			},
			{
				"operation": "insert",
				"name": "GridContainer_uiwpy5d",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large"
					},
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_azaqzan",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_c0w4l2y",
					"labelPosition": "auto",
					"control": "$NumberAttribute_c0w4l2y",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_uiwpy5d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_es2f38z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 5
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_h1odgty",
					"labelPosition": "auto",
					"control": "$StringAttribute_h1odgty",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"multiline": true,
					"readonly": true
				},
				"parentName": "GridContainer_uiwpy5d",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"NumberAttribute_c0w4l2y": {
					"modelConfig": {
						"path": "PageParameters.AvgAmount"
					}
				},
				"StringAttribute_h1odgty": {
					"modelConfig": {
						"path": "PageParameters.SqlText"
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