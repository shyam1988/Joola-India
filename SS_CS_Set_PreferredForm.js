/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/record', 'N/search', 'N/currency', 'N/runtime', 'N/url'],
/**
 * @param {record} record
 * @param {search} search
 */
function(currentRecord, record, search, currency, runtime, url) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
				

		var soPrefFormId = 201;//CANADA
		var invPrefFormId = 201;
		var purPrefFormId = 202;
		var cusPrefFormId = 352;
		var venPrefFormId = 000;
		var empPrefFormId = 353;
		var conPrefFormId = 351;
		var invItemPrefFormId = 354;
		
		
		var soPrefFormIdA = 207;//AUSTRALIA
		var invPrefFormIdA = 205;
		var purPrefFormIdA = 206;
		var cusPrefFormIdA = 390;
		var venPrefFormIdA = 000;
		var empPrefFormIdA = 391;
		var conPrefFormIdA = 389;
		var invItemPrefFormIdA = 392;
		
		
		var currentRecord = scriptContext.currentRecord;
		
		var recordType = currentRecord.type;
		
		var userObj = runtime.getCurrentUser();
		var subsidiaryId = userObj.subsidiary;
		
		
		console.log('recordType = '+recordType+' | '+'subsidiaryId = '+subsidiaryId);
		
		
		if(subsidiaryId==35)//JOOLA CANADA
		{
			if(recordType=='salesorder')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: soPrefFormId,
					ignoreFieldChange: true
				});
			}	
			if(recordType=='invoice')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invPrefFormId,
					ignoreFieldChange: true
				});
			}
			if(recordType=='purchaseorder')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: purPrefFormId,
					ignoreFieldChange: true
				});
			}
			
			if(recordType=='customer')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: cusPrefFormId,
					ignoreFieldChange: true
				});
			}
			if(recordType=='contact')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: conPrefFormId,
					ignoreFieldChange: true
				});
			}
			if(recordType=='employee')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: empPrefFormId,
					ignoreFieldChange: true
				});
			}
			
			
			if(recordType=='lotnumberedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invItemPrefFormId,
					ignoreFieldChange: true
				});
			}
			if(recordType=='serializedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invItemPrefFormId,
					ignoreFieldChange: true
				});
			}
			
			console.log('Done = ');
		}
		else if(subsidiaryId==37)//JOOLA AUSTRALIA
		{
			if(recordType=='salesorder')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: soPrefFormIdA,
					ignoreFieldChange: true
				});
			}	
			if(recordType=='invoice')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			if(recordType=='purchaseorder')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: purPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			
			if(recordType=='customer')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: cusPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			if(recordType=='contact')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: conPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			if(recordType=='employee')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: empPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			
			
			if(recordType=='lotnumberedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invItemPrefFormIdA,
					ignoreFieldChange: true
				});
			}
			if(recordType=='serializedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: invItemPrefFormIdA,
					ignoreFieldChange: true
				});
			}
		}
		else
		{
			if(recordType=='lotnumberedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: 6,
					ignoreFieldChange: true
				});
			}
			if(recordType=='serializedinventoryitem')
			{
				currentRecord.setValue({
					fieldId: 'customform',
					value: 6,
					ignoreFieldChange: true
				});
			}
		}
    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {
		
		var defTaxCode = 43100;
		
		var currRec = scriptContext.currentRecord;
        

        if(scriptContext.sublistId=='item' && scriptContext.fieldId=='item')
        {
        	
			var itemId = currRec.getCurrentSublistValue({
        		sublistId: 'item',
        		fieldId: 'item'
        	});
        	if(itemId)
			{
				currRec.setCurrentSublistValue({
            		sublistId: 'item',
            		fieldId: 'item',
            		value: itemId,
					ignoreFieldChange: true
            	}); 
				currRec.setCurrentSublistValue({
            		sublistId: 'item',
            		fieldId: 'taxcode',
            		value: defTaxCode,
					ignoreFieldChange: true
            	}); 
			}	
        }
    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    	
    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {

    	
    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {

    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {

		
    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {

		
    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {
		
		
    }

	
	
	function proforrma()
	{
		//alert('Performa button clicked.');
	}
	
	function reject()
	{
		/* var currentRec = currentRecord.get();
		var recordId = currentRec.id;
	
		var redirectURL = url.resolveScript({
			scriptId: 'customscript_sl_calculate_selling_price',
			deploymentId: 'customdeploy_sl_calculate_selling_price',
			returnExternalUrl: false
		});
		redirectURL+='&recordId='+recordId;
		redirectURL+='&action=Reject';
		
		window.open (redirectURL,"_self");*/
	}	
	
	function approve()
	{
		/* var currentRec = currentRecord.get();
		var recordId = currentRec.id;
	
		var redirectURL = url.resolveScript({
			scriptId: 'customscript_sl_calculate_selling_price',
			deploymentId: 'customdeploy_sl_calculate_selling_price',
			returnExternalUrl: false
		});
		redirectURL+='&recordId='+recordId;
		redirectURL+='&action=Approve';
		
		window.open(r edirectURL,"_self");*/
	}
	
	function printQuotation()
	{
		
		/* var currentRec = currentRecord.get();
		var recordId = currentRec.id;
	
		var printOutTemplate = currentRec.getValue({fieldId: 'custbody_printout_template'});
		if(!printOutTemplate)
		{
			alert('Please select any Printout Template.');
			return;
		}	
	
		var redirectURL = url.resolveScript({
			scriptId: 'customscript_cap_sl_print_quotation',
			deploymentId: 'customdeploy_cap_sl_print_quotation',
			returnExternalUrl: false
		});
		redirectURL+='&recordId='+recordId;
		redirectURL+='&printOutTemplate='+printOutTemplate;
		redirectURL+='&ac tion=printQuotation';*/
		
		//alert('redirectURL = '+redirectURL);
		//return;
		
		//window.open(redirectURL);
	}
	
    return {
        pageInit: pageInit,
        //fieldChanged: fieldChanged,
        //postSourcing: postSourcing,
        //sublistChanged: sublistChanged,
        //lineInit: lineInit,
        //validateField: validateField,
        //validateLine: validateLine,
        //validateInsert: validateInsert,
        //validateDelete: validateDelete,
        //saveRecord: saveRecord,
		
		//proforrma:proforrma,
		//reject: reject,
		//approve: approve,
		
		//printQuotation: printQuotation
    };
    
});
