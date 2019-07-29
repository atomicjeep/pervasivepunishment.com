/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. This javascript will grab settings from customizer controls, and 
 * then make any necessary changes to the page using jQuery.
 */
 
( function( $ ) {
	//LIVE HTML
	wp.customize( 'blogname', function( value ) {
		value.bind( function( newval ) {
			$( '.logo_text' ).html( newval );
		} );
	} );
		
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( newval ) {
			$( '.site-description' ).html( newval );
		} );
	} );
	
	wp.customize( 'footer_copyright', function( value ) {
		value.bind( function( newval ) {
			$( '.copyright' ).html( newval );
		} );
	} );
	
	wp.customize( 'header_tagline', function( value ) {
		value.bind( function( newval ) {
			$( '#header-container .theme-tagline' ).html( newval );
		} );
	} );
	
	wp.customize( 'footer_tagline', function( value ) {
		value.bind( function( newval ) {
			$( '#footer-container .theme-tagline' ).html( newval );
		} );
	} );
	
	wp.customize( 'custom_more_tag', function( value ) {
		value.bind( function( newval ) {
			$( '.more-link a' ).html( newval );
		} );
	} );
	
} )( jQuery );