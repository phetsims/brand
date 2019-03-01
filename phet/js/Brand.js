// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // modules
  var brand = require( 'BRAND/../../js/brand' );

  // strings
  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  var translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  var Brand = {
    id: 'phet',
    name: 'PhET\u2122 Interactive Simulations', // no i18n
    copyright: 'Copyright © 2002-{{year}} University of Colorado Boulder', // no i18n
    isPhetApp: phet.chipper.queryParameters[ 'phet-app' ] || phet.chipper.queryParameters[ 'phet-android-app' ],
    getLinks: function( simName, locale ) {
      return [
        {
          text: termsPrivacyAndLicensingString,
          url: 'http://phet.colorado.edu/en/licensing/html'
        },
        {
          text: translationCreditsLinkString,
          url: 'http://phet.colorado.edu/translation-credits?simName=' + encodeURIComponent( simName ) +
               '&locale=' + encodeURIComponent( locale )
        },
        {
          text: thirdPartyCreditsLinkString,
          url: 'http://phet.colorado.edu/third-party-credits?simName=' + encodeURIComponent( simName ) +
               '&locale=' + encodeURIComponent( locale ) + '#' + simName
        } ];
    }
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
