// Copyright 2002-2016, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( require => {
  'use strict';

  // modules
  const brand = require( 'BRAND/../../js/brand' );

  // strings
  // eslint-disable-next-line no-unused-vars
  const termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  const privacyPolicyString = require( 'string!JOIST/privacyPolicy' );
  const translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  const thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );
  const donateToPhetString = require( 'string!JOIST/donateToPhet' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  const Brand = {
    id: 'phet-io',
    name: 'PhET\u2122 Interactive Simulations, University of Colorado Boulder', // no i18n
    copyright: 'Copyright © 2002-{{year}} Regents of the University of Colorado',
    license: 'Use of this PhET-iO interoperable simulation file requires a license from the University of Colorado Boulder.<br>' +
             '<b>USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
             'For information on PhET-iO simulation and/or brand licensing, see <a href="https://phet.colorado.edu/en/licensing"><u>Licensing</u></a>.',
    licenseWithoutLinks: 'Use of this PhET-iO interoperable simulation file requires a license from the University of Colorado Boulder.<br>' +
                         '<b>USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED.</b><br>' +
                         'For information on PhET-iO simulation and/or brand licensing, see Licensing. https://phet.colorado.edu/en/licensing',
    getLinks: function( simName, locale ) {
      return [
        {
          text: privacyPolicyString,
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
          text: donateToPhetString,
          url: 'https://giveto.colorado.edu/phet-interactive-simulations/?a=12323626'
        } ];
    }
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
