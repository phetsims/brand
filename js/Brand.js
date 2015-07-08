// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // strings
  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );

  return {
    id: 'phet',
    name: 'PhET<sup>\u00ae</sup> Interactive Simulations', // no i18n
    copyright: 'Copyright © 2004-2015 University of Colorado Boulder', // no i18n
    links: [
      {
        text: termsPrivacyAndLicensingString,
        url: 'http://phet.colorado.edu/en/html-terms-privacy-and-licensing'
      }
    ]
  };
} );
