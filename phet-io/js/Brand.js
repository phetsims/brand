// Copyright 2002-2016, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // modules
  var brand = require( 'BRAND/../../js/brand' );

  // strings
  var termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  var privacyPolicyLinkString = require( 'string!JOIST/privacyPolicy' );
  var translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );
  var donateToPhetLinkString = require( 'string!JOIST/donateToPhet' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  var Brand = {
    id: 'phet-io',
    name: 'PhET\u2122 Interactive Simulations, University of Colorado Boulder', // no i18n
    copyright: 'Copyright © 2002-{{year}} Regents of the University of Colorado',
    license: 'Use of this PhET-iO interoperable simulation file requires a license from the University of Colorado Boulder.<br>' +
             '<b>USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
             'For information on PhET-iO simulation and/or brand licensing, see <a href="https://phet.colorado.edu/en/licensing"><u>Licensing</u></a>.',
    licenseWithoutLinks: 'Use of this PhET-iO interoperable simulation file requires a license from the University of Colorado Boulder.<br>' +
                         '<b>USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
                         'For information on PhET-iO simulation and/or brand licensing, see Licensing. https://phet.colorado.edu/en/licensing',
    phetioEnabled: true,
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
