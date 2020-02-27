// Copyright 2019-2020, University of Colorado Boulder

/**
 * Links for the AboutDialog, used in phet brand and phet-io brand since they are the same for both.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import joistStrings from '../../joist/js/joist-strings.js';
import brand from './brand.js';

const termsPrivacyAndLicensingString = joistStrings.termsPrivacyAndLicensing;
const translationCreditsLinkString = joistStrings.translation.credits.link;
const thirdPartyCreditsLinkString = joistStrings.thirdParty.credits.link;

/**
 * @param {string} simName
 * @param {string} locale
 * @returns {Object[]}
 * @public
 */
const getLinks = ( simName, locale ) => {
  return [
    {
      text: termsPrivacyAndLicensingString,
      url: 'http://phet.colorado.edu/en/licensing/html',
      tandemName: 'termsPrivacyAndLicensingLinkText'
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
    }
  ];
};

brand.register( 'getLinks', getLinks );
export default getLinks;