// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // modules
  var brand = require( 'BRAND/../../js/brand' );

  // strings
  // eslint-disable-next-line no-unused-vars
  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  var privacyPolicyLinkString = require( 'string!JOIST/privacyPolicy' );
  var translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );
  var donateToPhetLinkString = require( 'string!JOIST/donateToPhet' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  var Brand = {
    id: 'phet',
    name: 'PhET\u2122 Interactive Simulations, University of Colorado Boulder', // no i18n
    copyright: 'Copyright © 2002-{{year}} Regents of the University of Colorado', // no i18n
    license: 'This simulation file is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (<a href="https://creativecommons.org/licenses/by-nc/4.0/"><u>CC BY-NC 4.0</u></a>).<br>' +
             '<b>COMMERCIAL USE WITHOUT A COMMERCIAL LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
             'For information on commercial and/or brand licensing, see <a href="https://phet.colorado.edu/en/licensing"><u>Licensing</u></a>.',
    licenseWithoutLinks: 'This simulation file is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). https://creativecommons.org/licenses/by-nc/4.0/<br>' +
                         '<b>COMMERCIAL USE WITHOUT A COMMERCIAL LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
                         'For information on commercial and/or brand licensing, see Licensing. https://phet.colorado.edu/en/licensing',
    isPhetApp: !!phet.chipper.getQueryParameter( 'phet-app' ) || !!phet.chipper.getQueryParameter( 'phet-android-app' ),
    getLinks: function( simName, locale ) {
      return [
        {
          text: privacyPolicyLinkString,
          url: 'https://phet.colorado.edu/en/privacy-policy'
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
        },
        {
          text: donateToPhetLinkString,
          url: 'https://giveto.colorado.edu/phet-interactive-simulations/?a=12323626'
        } ];
    }
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
