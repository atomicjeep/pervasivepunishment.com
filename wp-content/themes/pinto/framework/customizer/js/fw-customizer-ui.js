jQuery(document).ready(function($) {
/*===================================================================*/                						
/*  CUSTOM CSS AREA		                							
/*===================================================================*/	
	var previewDiv = $('#customize-preview');
	$('.wp-full-overlay-header').append('<div id="bean-tools"></div>');
	//$('.wp-full-overlay-footer').append('<div id="bean-doc"></div>');
	var beantools = $('#bean-tools');
	//var beandoc_link = $('#bean-doc');
	
	
/*===================================================================*/                						
/*  CUSTOM CSS			                							
/*===================================================================*/
	function toolsCSS() 
	{
		beantools.append('<a id="tools_css" class="button bean-ui-button" href="#">Custom CSS</a>');
		//beandoc_link.append('<a id="help_guide" class="button bean-ui-button" href="#">Help Guide</a>');
		previewDiv.prepend('<div id="bean-customcss"><form><textarea id="csstextarea"></textarea></form></div>');

		var cssWindow = $('#customize-preview #bean-customcss');
		var ogText = $("li#customize-control-bean_tools_css").children('textarea');

		var cssTextCodeMirror;

		$('#tools_css').click(function(e)
		{
			e.preventDefault();
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				cssWindow.removeClass('active');
				cssWindow.fadeToggle('fast');
				ogText.val(cssTextCodeMirror.getValue()).keyup();

			} else {

				$(this).addClass('active');
				cssWindow.addClass('active');
				cssWindow.fadeToggle('fast');
				
				if (!cssTextCodeMirror) {
					cssTextCodeMirror = CodeMirror.fromTextArea( document.getElementById("csstextarea"), {
						lineNumbers: true,
					});
					cssTextCodeMirror.setValue(ogText.val());
				}

				cssTextCodeMirror.focus();
			}
		});
	}
	toolsCSS();
	

/*===================================================================*/                						
/*  HELLOBAR EXPIRATION (FOR SELECT THEMES)			                							
/*===================================================================*/
	var helloexpiration = $('li#customize-control-hello_bar_expiration label span');

	function helloexpirationAPPD() 
	{
		helloexpiration.append(' <a id="expiration_help" class="info-link" href="http://help.themebeans.com/customer/portal/articles/1507733" target="_blank" >( ? )</a>');

	}	helloexpirationAPPD();	


/*===================================================================*/                						
/*  MAP SHORTCODE HELP (FOR SELECT THEMES)			                							
/*===================================================================*/
	var mapsHelp = $('li#customize-control-google_maps_code label .customize-control-title');

	function mapsHelpAPPD() 
	{
		mapsHelp.append(' <a id="maps_help" class="info-link" href="http://docs.themebeans.com/harbor/#GoogleMap" target="_blank" ><span class="dashicons dashicons-info"></span></a>');

	}	mapsHelpAPPD();	


/*===================================================================*/                						
/*  LOADING		                							
/*===================================================================*/
	previewDiv.prepend('<div id="bean-loading"></div>');
	loadingDiv = $('#customize-preview #bean-loading');
	setInterval(function()
	{
		if( previewDiv.children('iframe').length > 1 ) 
		{
			loadingDiv.fadeIn('fast');
		} else 
		{
			loadingDiv.fadeOut('fast');
		}
	}, 1000);


/*===================================================================*/                						
/*  EDITOR TEXT		                							
/*===================================================================*/
HTMLTextAreaElement.prototype.getCaretPosition = function () { 
	    return this.selectionStart;
	};
	HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
	    this.selectionStart = position;
	    this.selectionEnd = position;
	    this.focus();
	};
	HTMLTextAreaElement.prototype.hasSelection = function () {
	    if (this.selectionStart == this.selectionEnd) {
	        return false;
	    } else {
	        return true;
	    }
	};
	HTMLTextAreaElement.prototype.getSelectedText = function () {
	    return this.value.substring(this.selectionStart, this.selectionEnd);
	};
	HTMLTextAreaElement.prototype.setSelection = function (start, end) {
	    this.selectionStart = start;
	    this.selectionEnd = end;
	    this.focus();
	};
	var textarea = document.getElementById('csstextarea');

	textarea.onkeydown = function(event) {
	    
	    if (event.keyCode == 9) {
	        var newCaretPosition;
	        newCaretPosition = textarea.getCaretPosition() + "    ".length;
	        textarea.value = textarea.value.substring(0, textarea.getCaretPosition()) + "    " + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
	        textarea.setCaretPosition(newCaretPosition);
	        return false;
	    }
	    if(event.keyCode == 8){
	        if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == "    ") {
	            var newCaretPosition;
	            newCaretPosition = textarea.getCaretPosition() - 3;
	            textarea.value = textarea.value.substring(0, textarea.getCaretPosition() - 3) + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
	            textarea.setCaretPosition(newCaretPosition);
	        }
	    }
	    if(event.keyCode == 37){
	        var newCaretPosition;
	        if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == "    ") {
	            newCaretPosition = textarea.getCaretPosition() - 3;
	            textarea.setCaretPosition(newCaretPosition);
	        }    
	    }
	    if(event.keyCode == 39){
	        var newCaretPosition;
	        if (textarea.value.substring(textarea.getCaretPosition() + 4, textarea.getCaretPosition()) == "    ") { //it's a tab space
	            newCaretPosition = textarea.getCaretPosition() + 3;
	            textarea.setCaretPosition(newCaretPosition);
	        }
	    } 
	}
	
	
});