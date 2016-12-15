define( ["jquery", "text!./style.css","qlik"], function ( $, cssContent, qlik) {
	'use strict';
	$( "<style>" ).html( cssContent ).appendTo( "head" );
	return {
		initialProperties: {
			version: 2.0,
			qListObjectDef: {
				qShowAlternatives: true,
				qFrequencyMode : "V",
				qInitialDataFetch: [{
					qWidth: 2,
					qHeight: 1000
				}]
			},
			FixedNumberofColumn: 1,
			InitialNumCols: 1,
			InitialRows: "",
			InitialCols: "",
			Fontsize: "13",
			DimTextColor: "Black",
			LabelAlign: "left",
			CollapseColor: "#4479BA",
			AllowChanges: false,
			Defaulthighlightvalue: "rgb(80,198,80)",
			RecolorSelectionRibbon: true,
			SingleSelection: false,
			SingleSelectionValue: "",
			SingleSelectionColor: true,
			DisableCharts: false,
			selectionMode: "CONFIRM"
			//LimitReduction: false,
			//LimitReductionFunction: "Count",
			//LimitReductionField: "",
			//LimitReductionValue: ""
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimension: {
					type: "items",
					label: "Dimensions",
					ref: "qListObjectDef",
					min: 1,
					max: 1,
					items: {
						//label: {
						//	type: "string",
						//	ref: "qListObjectDef.qDef.qFieldLabels.0",
						//	label: "Label"
						//},
						//libraryId: {
						//	type: "string",
						//	component: "library-item",
						//	libraryItemType: "dimension",
						//	ref: "qListObjectDef.qLibraryId",
						//	label: "Dimension",
						//	show: function ( data ) {
						//		return data.qListObjectDef && data.qListObjectDef.qLibraryId;
						//	}
						//},
						field: {
							type: "string",
							expression: "always",
							expressionType: "dimension",
							ref: "qListObjectDef.qDef.qFieldDefs.0",
							label: "Field",
							show: function ( data ) {
								return data.qListObjectDef && !data.qListObjectDef.qLibraryId;
							}
						},
						evaluateForEach: {
							type: "string",
							label: "Evaluate for each row",
							ref:"qAttributeExpressions.0.qExpression",
							expression:"always",
							defaultValue:""
						}
					}
				},				
				settings: {
					uses : "settings",
					items: {
						Listbox: {
							type:"items",
							label: "Sort Settings",
							items: {
								SortSettings: {
									ref:"SortSettings",
									translation:"Sort Criteria",
									type:"numeric",
									component:"dropdown",
									options:[{
										value: 0,
										label: "Logical State"
									},{
										value: 1,
										label: "Numeric Value"
									},{
										value: 2,
										label: "Alphabetical Order"
									},{
										value: 3,
										label: "Initial Load Order"
									},{
										value: 4,
										label: "Expression"
									}],
									defaultValue:0
								},
								qSortByState:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qSortByState",
									translation:"Sort by State",
									type:"numeric",
									component:"dropdown",
									options:[{
										value:1,
										label:"Ascending"
									},{
										value:0,
										label:"None"
									},{
										value:-1,
										label:"Descending"
									}],
									defaultValue:0,
									show: function(data) {
										return data.SortSettings == 0;
									}
								},
								qSortByNumeric:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qSortByNumeric",
									translation:"Sort Numerically",
									type:"numeric",
									component:"dropdown",
									options:[{
										value:1,
										label:"Ascending"
									},{
										value:0,
										label:"None"
									},{
										value:-1,
										label:"Descending"
									}],
									defaultValue:0,
									show: function(data) {
										return data.SortSettings == 1;
									}
								},
								qSortByAscii:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qSortByAscii",
									translation:"Sort Alphabetically",
									type:"numeric",
									component:"dropdown",
									options:[{
										value:1,
										label:"Ascending"
									},{
										value:0,
										label:"None"
									},{
										value:-1,
										label:"Descending"
									}],
									defaultValue:0,
									show: function(data) {
										return data.SortSettings == 2;
									}
								},
								qSortByLoadOrder:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qSortByLoadOrder",
									translation:"Sort by Load Order",
									type:"numeric",
									component:"dropdown",
									options:[{
										value:1,
										label:"Ascending"
									},{
										value:0,
										label:"None"
									},{
										value:-1,
										label:"Descending"
									}],
									defaultValue:0,
									show: function(data) {
										return data.SortSettings == 3;
									}
								},
								qSortByExpression:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qSortByExpression",
									translation:"Sort by Expression",
									type:"numeric",
									component:"dropdown",
									options:[{
										value:1,
										label:"Ascending"
									},{
										value:0,
										label:"None"
									},{
										value:-1,
										label:"Descending"
									}],
									defaultValue:0,
									show: function(data) {
										return data.SortSettings == 4;
									}
								},
								qExpression:{
									ref:"qListObjectDef.qDef.qSortCriterias.0.qExpression",
									translation:"Expression",
									type:"string",
									expression:"always",
									expressionType: "dimension",
									defaultValue:"",
									show: function(data) {
										return data.SortSettings == 4;
									}
								}
							}
						},
						Settings: {
							type: "items",
							label: "Listbox Settings",
							items: {
								Defaulthighlightvalue:{
									ref: "Defaulthighlightvalue",
									label: "Highlight Color Value",
									type: "string"
								},
								Fontsize:{
									ref: "Fontsize",
									translation: "List Item Font Size (px)",
									type: "number",
									defaultValue: "13"
								},
								DimTextColor:{
									ref: "DimTextColor",
									translation: "List Item Text Color",
									type: "string",
									defaultValue: "Black"
								},
								LabelAlign:{
									ref: "LabelAlign",
									expression:"optional",
									translation: "List Item Align",
									type: "string",
									component: "dropdown",
									options: [{
										value: "left",
										label: "left"
									}, {
										value: "center",
										label: "center"
									}, {
										value: "right",
										label: "right"
									}],
									defaultValue: "left"
								}
								//RecolorSelectionRibbon: {
								//	ref: "props.RecolorSelectionRibbon",
								//	label: "Recolor Selection Ribbon",
								//	type: "boolean"
								//},
							}
						}
					}
				},
				addons: {
					uses: "addons",
					items: {
						Listbox: {
							type: "items",
							label: "Extension Settings",
							items: {
								SingleSelection: {
									ref: "props.SingleSelection",
									type: "boolean",
									label: "Always One Selected value",
									defaultValue: false
								},
								SingleSelectionColor: {
									ref: "props.SingleSelectionColor",
									label: "Grey Out Unselected Values",
									type: "boolean",
									deafaultValue: true,
									show: function(data) {
										return data.props.SingleSelection;
									}
								},
								SingleSelectionValue: {
									ref: "props.SingleSelectionValue",
									label: "Default Selected Value",
									type: "string",
									defaultValue: "",
									show : function(data) {
							 			return data.props.SingleSelection;
									}
								},
								DisableCharts: {
									ref: "props.DisableCharts",
									type: "string",
									label: "Comma Separated List of Charts to Disable",
									defaultValue: ""
								}
								//LimitReduction: {
								//	ref: "props.LimitReduction",
								//	type: "boolean",
								//	label: "Conditionally Limit Reduction",
								//	defaultValue: false
								//},
								//LimitReductionFunction: {
								//	ref: "props.LimitReductionFunction",
								//	label: "Aggregation for Limitation *",
								//	type: "string",
								//	expression: "always",
								//	defaultValue: "Count",
								//	component: "dropdown",
								//	options: [{
								//			value: "Sum",
								//			label: "Sum"
								//		}, {
								//			value: "Count",
								//			label: "Count"
								//		}, {
								//			value: "Avg",
								//			label: "Average"
								//		}, {
								//			value: "Min",
								//			label: "Minimum"
								//		}, {
								//			value: "Max",
								//			label: "Maximum"
								//		}],
								//	show: function(data) {
								//		return data.props.LimitReduction;
								//	}
								//},
								//LimitReductionField: {
								//	ref: "props.LimitReductionField",
								//	label: "Field for Limitation *",
								//	type: "string",
								//	expression: "always",
								//	defaultValue: "",
								//	show: function(data) {
								//		return data.props.LimitReduction;
								//	}
								//},
								//LimitReductionValue: {
								//	ref: "props.LimitReductionValue",
								//	label: "Minimum Value *",
								//	type: "number",
								//	defaultValue: "1",
								//	show: function(data) {
								//		return data.props.LimitReduction;
								//	}
								//},
							}
						}
					}
				}
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},
		//paint and rendering logic
		paint: function ( $element , layout) {
			var html = '';
			var editMode = false;
			var app = qlik.currApp();
			var Obj_Id = layout.qInfo.qId;
			var Fontsize = layout.Fontsize;
			var LabelTextColor = layout.DimTextColor;
			var LabelAlign = layout.LabelAlign;
			var width = $element.width();
			//var Defaulthighlightvalue = layout.Defaulthighlightvalue;
			var SelectionColor = layout.props.SelectionColor;
			var SingleSelection = layout.props.SingleSelection;
			var SingleSelectionValue = layout.props.SingleSelectionValue;
			//var LimitReductionField = layout.props.LimitReductionField.replace(/['"=]+/g,'');
			//var LimitReductionFunction = layout.props.LimitReductionFunction;
			//var LimitReductionValue = layout.props.LimitReductionValue;
			var CSLDisableCharts = layout.props.DisableCharts;
			var height = $element.height();
			//var EvaluateForEach = layout.qAttributeExpressions[0];
			var Dim =[];
			var SelectedCount =[];
			
			this.backendApi.eachDataRow(function(rownum, row) {
				Dim.push(row[0].qText);
			});
			this.backendApi.eachDataRow(function(rownum, row) {
				if(row[0].qState == 'S')
				{
					SelectedCount.push(row[0].qText);
				}
		 	});
			if($('div.qv-mode-edit').length == 1)
			{
				editMode = true;
			}
			
			//var css = 'div[tid="SingleSelection"] { border-bottom: 1px solid #9D9D9D } ';
  			//$("<style>").html(css).appendTo("head");  
			
			//$.each(this.backendApi.getDimensionInfos(), function(key, value) {
			//	fieldEval = String(value.qFallbackTitle);
			//});
			
			//Check if there is any value in the Disable Charts field
			if (CSLDisableCharts)
			{
				//check if app is NOT in edit mode
				if(!$('div.qv-mode-edit').length)
				{
					//if it is NOT, we need to parse the CSL and loop over each option and disable the chart if found
					//first, check if the string contains a comma. Otherwise, it has only one element
					if(CSLDisableCharts.indexOf(',') <= 0)
					{
						//use the tid to add the "pointer-events:none" style to the chart so the user cannot click on it
						$('div[tid="' + CSLDisableCharts.trim() + '"]').each(function() {
							$(this).css("pointer-events","none");
						});
					}
					else
					{	
						//if the field is a comma separated list, convert to an array and disable charts individually
						var chartArray = CSLDisableCharts.split(',');

						for (var i=0; i < chartArray.length; i++)
						{
							$('div[tid="' + chartArray[i].trim() + '"]').each(function() {
								$(this).css("pointer-events","none");
							});
						}
					}
				}
			}
			
			var px2em = Fontsize / 13;

			var style ='style="float:left !important;font-size: '+px2em+'em;text-align:'+LabelAlign+';max-height:20px"';

			var self = this;
			var lstID = 'lst' + layout.qInfo.qId;
			var html = '<div id="'+ lstID +'" class="listbox" height:'+(height)+'px" >';
			//var style = 'style="padding-left:10px"';
			
			this.backendApi.eachDataRow(function(rownum, row) {					 							 
				if(SingleSelectionValue==row[0].qText && SelectedCount.length==0 && SingleSelection==true)
				{
					var defaultstate = 'stateS';
					
					self.backendApi.selectValues(0, [row[0].qElemNumber], true);
				}
				else
				{
					if(SelectedCount.length==0 && SingleSelectionValue==true)
					{
						var defaultstate = 'stateO';
					}
					else
					{
						var defaultstate = '';
					}
				}

				if(row[0].qState=='S')
				{
					var checkedstatus ='checked="checked"';
				}
				else
				{
					var checkedstatus ='';
				}
				
				//alert(row[0].qText + row[0].qValues);

				html += '<p for="'+row[0].qText+'"' + style + ' class="'+defaultstate+'data state' + row[0].qState + '" data-value="' + row[0].qElemNumber + '">' + row[0].qText + '</p>';
					
			}); //end eachDataRow function
			
			html += "</div>";
			
			//$element.css({overflow-y: auto;overflow-x: hidden});
			$element.html(html);
			//var parElement = document.getElementById(lstID).parentNode;
			//$(parElement).css("overflow-x","hidden");
			//$(parElement).css("overflow-y","auto");
			
			//listElement.parentElement.css({overflow-y: auto;overflow-x: hidden});		
		
			//send selections straight to the Engine using ".backendApi" so changes are immediately reflected in the objects
			//normal list boxes do not include ".backendApi" before ".selectValues" which will show the user the toolbar and wrapper
			if(this.selectionsEnabled && layout.selectionMode !== "NO") 
			{
				$element.find('p').on('qv-activate', function() {
					if(this.hasAttribute("data-value")) 
					{
						var value = parseInt(this.getAttribute("data-value"), 10);
						var dim = 0;
						if(SingleSelection == false)
						{
							self.backendApi.selectValues(dim, [value], true); //will preserve previously selected items
						}
						else
						{
							self.backendApi.selectValues(dim, [value], false); //will deselect all other items
						}
					}
				});
			}
		}
	};
});
