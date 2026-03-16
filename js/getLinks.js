// Copyright 2019, University of Colorado Boulder

/**
 * Links for the AboutDialog, used in phet brand and phet-io brand since they are the same for both.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const brand = require( 'BRAND/../../js/brand' );

  // strings
  const termsPrivacyAndLicensingString = require( 'string!JOIST/termsPrivacyAndLicensing' );
  const privacyPolicyString = require( 'string!JOIST/privacyPolicy' );
  const translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  const thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );
  const donateToPhetString = require( 'string!JOIST/donateToPhet' );

  /**
   * @param {string} simName
   * @param {string} locale
   * @returns {Object[]}
   * @public
   */
  const getLinks = ( simName, locale ) => {
    return [
      {
        textStringProperty: privacyPolicyString,
        url: 'https://phet.colorado.edu/en/privacy-policy',
        tandemName: 'privacyPolicyLinkText'
      },
      {
        text: translationCreditsLinkString,
        url: 'http://phet.colorado.edu/translation-credits?simName=' + encodeURIComponent( simName ) + '&locale=' + encodeURIComponent( locale ),
        tandemName: 'translationCreditsLinkText'
      },
      {
        text: thirdPartyCreditsLinkString,
        url: 'http://phet.colorado.edu/third-party-credits?simName=' + encodeURIComponent( simName ) +
             '&locale=' + encodeURIComponent( locale ) + '#' + simName,
        tandemName: 'thirdPartyCreditsLinkText'
      },
      {
        textStringProperty: donateToPhetString,
        url: 'https://giveto.colorado.edu/phet-interactive-simulations/?a=12323626',
        tandemName: 'donateToPhetLinkText'
      }
    ];
  };

  return brand.register( 'getLinks', getLinks );
} );
