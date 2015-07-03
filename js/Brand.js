// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  var phetString = 'PhET<sup>\u00ae</sup> Interactive Simulations'; // as in Java sims, do not internationalize
  var copyrightString = 'Copyright © 2004-2015 University of Colorado Boulder'; // as in Java sims, do not internationalize

  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );

  // constants
  var SOFTWARE_LICENSING_URL = 'http://phet.colorado.edu/en/html-terms-privacy-and-licensing';

  return {
    name: phetString,
    copyright: copyrightString,
    links: [
      { text: termsPrivacyAndLicensingString, url: SOFTWARE_LICENSING_URL }
    ],
    adaptedFromPhET: false
  };
} );
