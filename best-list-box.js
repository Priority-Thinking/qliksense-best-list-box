define( ["jquery", "text!./style.css","qlik"], function ( $, cssContent, qlik) {
	'use strict';
	$( "<style>" ).html( cssContent ).appendTo( "head" );
	return {
		initialProperties: {
			version: 2.0,
			qListObjectDef: {
				qShowAlternatives: true,
				qFrequencyMode : "V",
				qSortCriterias : {
					qSortByState : -1
				},	
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
			SingleSelection: false,
			SingleSelectionValue: "",
			SingleSelectionColor: true,
			LimitReduction: false,
			LimitReductionFunction: "Count",
			LimitReductionField: "",
			LimitReductionValue: "",
			DisableCharts: false,
			//StyleOverride: "listbox",
			selectionMode: "CONFIRM"
			//ListType: "vertical"
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
						label: {
							type: "string",
							ref: "qListObjectDef.qDef.qFieldLabels.0",
							label: "Label"
						},
						libraryId: {
							type: "string",
							component: "library-item",
							libraryItemType: "dimension",
							ref: "qListObjectDef.qLibraryId",
							label: "Dimension",
							show: function ( data ) {
								return data.qListObjectDef && data.qListObjectDef.qLibraryId;
							}
						},
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
						frequency: {
							type: "string",
							component: "dropdown",
							label: "Frequency mode",
							ref: "qListObjectDef.qFrequencyMode",
							options: [{
								value: "N",
								label: "No frequency"
							}, {
								value: "V",
								label: "Absolute value"
							}, {
								value: "P",
								label: "Percent"
							}, {
								value: "R",
								label: "Relative"
							}],
							defaultValue: "V"
						}
					}
				},				
				settings: {
					uses : "settings",
					items: {
						Listbox: {
							type: "items",
							label: "Listbox Settings",
							items: {
								//FixedNumberofColumn:{
								//	ref: "FixedNumberofColumn",
								//	expression:"optional",
								//	translation: "No of Visible Values (1 to 20)",
								//	type: "integer",
								//	defaultValue: 1,
								//	component: "slider",
								//	min: 1,
								//	max: 20,
								//	step: 1,
								//	show : function(data) {
								//		return data.ListType;
								//	}
								//},
								//ListType:{
								//	ref: "ListType",
								//	expression:"optional",
								//	translation: "List Type",
								//	type: "string",
								//	defaultValue: "vertical",
								//	component: "dropdown",
								//	options: [{
								//			value: "horizontal",
								//			label: "horizontal"
								//		}, {
								//			value: "vertical",
								//			label: "vertical"
								//		}]
								//},
								//StyleOverride:{
								//	ref: "StyleOverride",
								//	expression:"optional",
								//	translation: "Style Override",
								//	type: "string",
								//	defaultValue: "radio",
								//	component: "dropdown",
								//	options: [{
								//			value: "radio",
								//			label: "radio"
								//		}, {
								//			value: "checkbox",
								//			label: "checkbox"
								//		}, {
								//			value: "listbox",
								//			label: "listbox"
								//		}]
								//},					
								Fontsize:{
									ref: "Fontsize",
									translation: "Label Font Size (px)",
									type: "number",
									defaultValue: "13"
								},
								DimTextColor:{
									ref: "DimTextColor",
									translation: "Label Text Color",
									type: "string",
									defaultValue: "Black"
								},
								LabelAlign:{
									ref: "LabelAlign",
									expression:"optional",
									translation: "List Item Align",
									type: "string",
									defaultValue: "left",
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
										}]
								},
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
							grouped: true,
							items: {
								//Defaulthighlightvalue: {
								//	ref: "Defaulthighlightvalue",
								//	label: "Highlight Color Value",
								//	type: "string",
								//	defaultValue: " "
								//},
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
								LimitReduction: {
									ref: "props.LimitReduction",
									type: "boolean",
									label: "Conditionally Limit Reduction",
									defaultValue: false
								},
								LimitReductionFunction: {
									ref: "props.LimitReductionFunction",
									label: "Aggregation for Limitation *",
									type: "string",
									expression: "always",
									defaultValue: "Count",
									component: "dropdown",
									options: [{
											value: "Sum",
											label: "Sum"
										}, {
											value: "Count",
											label: "Count"
										}, {
											value: "Avg",
											label: "Average"
										}, {
											value: "Min",
											label: "Minimum"
										}, {
											value: "Max",
											label: "Maximum"
										}],
									show: function(data) {
										return data.props.LimitReduction;
									}
								},
								LimitReductionField: {
									ref: "props.LimitReductionField",
									label: "Field for Limitation *",
									type: "string",
									expression: "always",
									defaultValue: "",
									show: function(data) {
										return data.props.LimitReduction;
									}
								},
								LimitReductionValue: {
									ref: "props.LimitReductionValue",
									label: "Minimum Value *",
									type: "number",
									defaultValue: "1",
									show: function(data) {
										return data.props.LimitReduction;
									}
								},
								DisableCharts: {
									ref: "props.DisableCharts",
									type: "string",
									label: "Comma Separated List of Charts to Disable",
									defaultValue: ""
								},
							}
						}
					}
				}
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},
		//paint / rendering logic
		paint: function ( $element , layout) {
			var html = '';
			var app = qlik.currApp();
			//var Obj_Id = layout.qInfo.qId;
			//var styletype = layout.StyleOverride;
			var Fontsize = layout.Fontsize;
			var LabelTextColor = layout.DimTextColor;
			var LabelAlign = layout.LabelAlign;
			//var ListType = layout.ListType;
			var width = $element.width();
			//var Defaulthighlightvalue = layout.Defaulthighlightvalue;
			var SingleSelection = layout.props.SingleSelection;
			var SingleSelectionValue = layout.props.SingleSelectionValue;
			var LimitReductionField = layout.props.LimitReductionField.replace(/['"=]+/g,'');
			var LimitReductionFunction = layout.props.LimitReductionFunction;
			var LimitReductionValue = layout.props.LimitReductionValue;
			var CSLDisableCharts = layout.props.DisableCharts;
			// Chart object height
			var height = $element.height();
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
			
			//var css = 'div[tid="SingleSelection"] { border-bottom: 1px solid #9D9D9D } ';
			//css += 'div[tid="SingleSelection"] { border-bottom: 1px solid #9D9D9D } ';
			//alert(css);
  			//$("<style>").html(css).appendTo("head");  
			
			//var fieldEval;
			
			//$.each(this.backendApi.getDimensionInfos(), function(key, value) {
			//	fieldEval = String(value.qFallbackTitle);
			//});
			
			if (SingleSelection)
			{
				alert('true');
				//alert(fieldEval);
				//var resultEval = app.Evaluate(fieldEval);
				//alert(resultEval);
				//alert(parseInt(this.getAttribute("data-value"));
			}
			
			//Check if the user specified any charts to disable
			//if (CSLDisableCharts === "")
			//{
			if (CSLDisableCharts)
			{
				//alert("Stuff detected!");
				//check if app is NOT in edit mode
				if(!$('div.qv-mode-edit').length)
				{
					//if it is NOT, we need to parse the CSL and loop over each option and disable the chart if found
					var tid = "BxPTM";
					//alert(CSLDisableCharts);
					
					//var chartArray = CSLDisableCharts.Split(',');
					//for (var i=0; i < chartArray.Length; i++)
					//{
					//	alert(i);
					//	i.trim();
					//	i.replace(/['"]+/g,'');
						//use the tid to add the "pointer-events:none" style to the chart so the user cannot click on it
						$('div[tid="' + tid + '"]').each(function() {
					//		alert(i);
							$(this).css("pointer-events","none");
						});
					//}
				}
			//}
			}
			
			//if(layout.FixedNumberofColumn > Dim.length)
			//{
			//	var Noofval = Dim.length;
			//}
			//else
			//{
			//	var Noofval = layout.FixedNumberofColumn;
			//}
			
			//var Split = 100 / Noofval;
			var px2em = Fontsize / 13;
			//if(ListType == 'horizontal')
			//{
				//var style ='style="width:'+(Split - 1)+'% !important;float:left !important;font-size: '+Fontsize+'px;color:'+LabelTextColor+';text-align:'+LabelAlign+';max-height:20px"';
				var style ='style="width: 90%;float:left !important;font-size: '+px2em+'em;color:'+LabelTextColor+';text-align:'+LabelAlign+';max-height:20px"';
			//	var overallwidth = '100';
			//}
			//else
			//{
				//var style ='style="width:100% !important;font-size: '+Fontsize+'px;color:'+LabelTextColor+';text-align:'+LabelAlign+';overflow:hidden;';
				//if(styletype == 'listbox')
				//{
				//	style += 'border-bottom:#CCCCCC 1px solid"';
				//}
				//else
				//{
				//	style +='min-height:25px !important;"';
				//}
			
				//var overallwidth = '100';
			//}
			
			//var style1 = 'style="width:'+10+'% !important'+';"';
			//var style2 = 'style="width:'+(70)+'% !important'+';font-size: '+Fontsize+'px;color:'+LabelTextColor+';text-align:'+LabelAlign+';height:20px;"';
			
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
						var defaultstate = 'stateA';
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

				//if(styletype=='listbox')
				//{
					html += '<p for="'+row[0].qText+'"' + style + ' class="'+defaultstate+' data state' + row[0].qState + '" data-value="' + row[0].qElemNumber + '">' + row[0].qText + '</p>';
				//}
				//else
				//{
				//	html +='<div ' + style + ' class="data state' + row[0].qState + '" >'
				//	html += '<input id="'+row[0].qText+'" '+checkedstatus+' type="'+styletype+'" name="'+layout.qInfo.qId+'" value="'+row[0].qText+'"' + style1 + ' class="'+defaultstate+' data state' + row[0].qState + '" data-value="' + row[0].qElemNumber + '">';

				//	html += '<label for="'+row[0].qText+'"' + style2 + ' class="'+defaultstate+' data state' + row[0].qState + '" data-value="' + row[0].qElemNumber + '">' + row[0].qText + '</label>';
				//	html += '</div>'; 	 	
				//}
			}); //end eachDataRow function
			
			html += "</div>";
			
			//$element.css({overflow-y: auto;overflow-x: hidden});
			$element.html(html);
			var parElement = document.getElementById(lstID).parentNode;
			$(parElement).css("overflow-x","hidden");
			$(parElement).css("overflow-y","auto");
			
			//alert($(parElement).innerWidth());
			
			//listElement.parentElement.css({overflow-y: auto;overflow-x: hidden});
			
			//var condition = 0;			
		
			//send selections straight to the Engine using ".backendApi" so changes are immediately reflected in the objects
			//normal list boxes do not include ".backendApi" before ".selectValues" which will show the user the toolbar and wrapper
			if(this.selectionsEnabled && layout.selectionMode !== "NO") 
			{
				//$element.find('label').on('qv-activate', function() {
				//	if(this.hasAttribute("data-value")) 
				//	{
				//		var value = parseInt(this.getAttribute("data-value"), 10);
				//		var dim = 0;
				//		if(SingleSelection == false)
				//		{
				//			self.backendApi.selectValues(dim, [value], true); //will preserve previously selected items
				//		} 
				//		else 
				//		{							
				//			self.backendApi.selectValues(dim, [value], false); //will deselect all other items													
				//		}
				//	}
				//});
				
				$element.find('p').on('qv-activate', function() {
					if(this.hasAttribute("data-value")) 
					{
						var value = parseInt(this.getAttribute("data-value"), 10);
						var dim = 0;
						if(SingleSelection == false)
						{
							//alert(row[0].qText);
							//alert(this.getAttribute("for") + layout.qLibraryId);
							if (layout.props.LimitReduction)
							{
								alert(LimitReductionFunction + "("+ LimitReductionField + ")");
							}
							
							self.backendApi.selectValues(dim, [value], true); //will preserve previously selected items
						}
						else
						{
							//var result = evaluate("COUNT(DISTINCT [Respondent ID])");
							//if (var == 100)
							//{
							//	alert("false");
							//}
							self.backendApi.selectValues(dim, [value], false); //will deselect all other items
						}
					}
				});
			}
		}
	};
});
