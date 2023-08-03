define("UsrLoanPayments_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrLoanPayments"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "5f3b3908-85e3-4a46-a750-aa3e711a2a74",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_8a8jh9c",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_8a8jh9c_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_byb0b1r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_byb0b1r_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAvgLoanPaymentProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "LoanPaymentIdParameter"
						}
					}
				},
				"parentName": "Button_8a8jh9c",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_9c5708n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9c5708n_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLoanPaymentAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_89j441b",
					"labelPosition": "auto",
					"control": "$NumberAttribute_89j441b",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_a72i2mf_placeholder)#",
					"tooltip": "#ResourceString(NumberInput_a72i2mf_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrNumberOfPayments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_m25d7ex",
					"labelPosition": "auto",
					"control": "$NumberAttribute_m25d7ex"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrMonthlyPayment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_s2s0z5n",
					"labelPosition": "auto",
					"control": "$NumberAttribute_s2s0z5n",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_wwd2bnj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_glqob67",
					"labelPosition": "auto",
					"control": "$LookupAttribute_glqob67",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ymz6shv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ymz6shv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wwd2bnj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_pjrbo6a",
					"labelPosition": "auto",
					"control": "$StringAttribute_pjrbo6a",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCustomer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wkfr2mr",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wkfr2mr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_1vf373l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1vf373l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCustomer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MobilePhone",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.UsrCustomerMobilePhone",
					"control": "$UsrCustomerMobilePhone",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(PhoneInput_d7zzbuq_caption)#",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Address",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrCustomerAddress",
					"control": "$UsrCustomerAddress",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrCustomerCity",
					"ariaLabel": "#ResourceString(ComboBox_pehvzhw_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$UsrCustomerCity"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_ps4dwsr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ps4dwsr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_513gm50",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_513gm50_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_u55n02v",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_513gm50",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_g9lakce",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_u55n02v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_gpvoo1p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_gpvoo1p_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLoanPaymentSignature",
							"defaultValues": [
								{
									"attributeName": "UsrParentLoanPayment",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_g9lakce",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_jgf222e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_jgf222e_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_4xat3xmDS"
						}
					}
				},
				"parentName": "FlexContainer_g9lakce",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1fv3jgm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1fv3jgm_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_g9lakce",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_n23y49t",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_n23y49t_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_4xat3xm"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1fv3jgm",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_vymoiv0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_vymoiv0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrLoanPaymentSignature"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1fv3jgm",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_oglcxan",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_oglcxan_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_4xat3xm"
					]
				},
				"parentName": "FlexContainer_g9lakce",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_jvautt3",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_513gm50",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4xat3xm",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_4xat3xm_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_4xat3xm_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_4xat3xm",
					"primaryColumnName": "GridDetail_4xat3xmDS_Id",
					"columns": [
						{
							"id": "61f764fe-6d84-5adf-1e24-edd986132239",
							"code": "GridDetail_4xat3xmDS_UsrContact",
							"path": "UsrContact",
							"caption": "#ResourceString(GridDetail_4xat3xmDS_UsrContact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "664248c4-f26a-69ca-e17e-9f7a4cb707de",
							"code": "GridDetail_4xat3xmDS_UsrSignatureSet",
							"path": "UsrSignatureSet",
							"caption": "#ResourceString(GridDetail_4xat3xmDS_UsrSignatureSet)#",
							"dataValueType": 12
						},
						{
							"id": "40fd93fb-5606-825e-c3bc-60f389fb4574",
							"code": "GridDetail_4xat3xmDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_4xat3xmDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_jvautt3",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_89j441b": {
					"modelConfig": {
						"path": "PDS.UsrLoanPaymentAmount"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 100,
								"message": "Amount can not be less than 100.0"
							}
						}
					}
				},
				"LookupAttribute_glqob67": {
					"modelConfig": {
						"path": "PDS.UsrPaymentStatus"
					}
				},
				"StringAttribute_pjrbo6a": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"NumberAttribute_m25d7ex": {
					"modelConfig": {
						"path": "PDS.UsrNumberOfPayments"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 1,
								"message": "Number of payments can not be less than 1"
							}
						}
					}
				},
				"NumberAttribute_s2s0z5n": {
					"modelConfig": {
						"path": "PDS.UsrMonthlyPayment"
					}
				},
				"GridDetail_4xat3xm": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_4xat3xmDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_4xat3xmDS_UsrContact": {
								"modelConfig": {
									"path": "GridDetail_4xat3xmDS.UsrContact"
								}
							},
							"GridDetail_4xat3xmDS_UsrSignatureSet": {
								"modelConfig": {
									"path": "GridDetail_4xat3xmDS.UsrSignatureSet"
								}
							},
							"GridDetail_4xat3xmDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_4xat3xmDS.CreatedOn"
								}
							},
							"GridDetail_4xat3xmDS_Id": {
								"modelConfig": {
									"path": "GridDetail_4xat3xmDS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_wkfr2mr": {
					"modelConfig": {
						"path": "PDS.UsrCustomer"
					}
				},
				"UsrCustomerMobilePhone": {
					"modelConfig": {
						"path": "PDS.UsrCustomerMobilePhone"
					}
				},
				"UsrCustomerAddress": {
					"modelConfig": {
						"path": "PDS.UsrCustomerAddress"
					}
				},
				"UsrCustomerCity": {
					"modelConfig": {
						"path": "PDS.UsrCustomerCity"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrLoanPayments",
						"attributes": {
							"UsrCustomerMobilePhone": {
								"path": "UsrCustomer.MobilePhone",
								"type": "ForwardReference"
							},
							"UsrCustomerAddress": {
								"path": "UsrCustomer.Address",
								"type": "ForwardReference"
							},
							"UsrCustomerCity": {
								"path": "UsrCustomer.City",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_4xat3xmDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrLoanPaymentSignature",
						"attributes": {
							"UsrContact": {
								"path": "UsrContact"
							},
							"UsrSignatureSet": {
								"path": "UsrSignatureSet"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_4xat3xmDS": [
					{
						"attributePath": "UsrParentLoanPayment",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrLoanPaymentAmount field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_89j441b' ||
						request.attributeName === 'NumberAttribute_m25d7ex') {
						var loanPaymentAmount = await request.$context.NumberAttribute_89j441b;
						var numberOfPayments = await request.$context.NumberAttribute_m25d7ex;
						var monthlyPayment = 0;
						if (numberOfPayments > 0) {
							monthlyPayment = loanPaymentAmount / numberOfPayments;
						}
						request.$context.NumberAttribute_s2s0z5n = monthlyPayment;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var amount = await request.$context.NumberAttribute_89j441b;
					this.console.log("Amount = " + amount);
					// Example how to read lookup column value
					var paymentStatusObject = await request.$context.LookupAttribute_glqob67;
					if (paymentStatusObject) {
						var paymentStatusId = paymentStatusObject.value;
						var paymentStatusName = paymentStatusObject.displayValue;
						this.console.log("Status id: " + paymentStatusId);
						this.console.log("Status name: " + paymentStatusName);
					}
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});