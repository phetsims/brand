// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // strings
  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  var translationCreditString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditString = require( 'string!JOIST/thirdParty.credits.link' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  return {
    id: 'phet',
    name: 'PhET<sup>\u00ae</sup> Interactive Simulations', // no i18n
    copyright: 'Copyright © 2004-2015 University of Colorado Boulder', // no i18n
    isPhetApp: !!phet.chipper.getQueryParameter( 'phet-app' ),
    getLinks: function( simName, locale ) {
      return [ {
        text: termsPrivacyAndLicensingString,
        url: 'http://phet.colorado.edu/en/licensing/html'
      }, {
        text: translationCreditString,
        url: 'http://phet.colorado.edu/translation-credits?simName=' + encodeURIComponent( simName ) +
             '&locale=' + encodeURIComponent( locale )
      }, {
        text: thirdPartyCreditString,
        url: 'http://phet.colorado.edu/third-party-credits?simName=' + encodeURIComponent( simName ) +
             '&locale=' + encodeURIComponent( locale ) + '#' + simName
      } ];
    }
  };
} );
