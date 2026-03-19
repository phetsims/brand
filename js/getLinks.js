// Copyright 2019-2020, University of Colorado Boulder

/**
 * Links for the AboutDialog, used in phet brand and phet-io brand since they are the same for both.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import joistStrings from '../../joist/js/joistStrings.js';
import brand from './brand.js';

// eslint-disable-next-line no-unused-vars
const termsPrivacyAndLicensingString = joistStrings.termsPrivacyAndLicensing;
const privacyPolicyString = joistStrings.privacyPolicy;
const translationCreditsLinkString = joistStrings.translation.credits.link;
const thirdPartyCreditsLinkString = joistStrings.thirdParty.credits.link;
const donateToPhetString = joistStrings.donateToPhet;

/**
 * @param {string} simName
 * @param {string} locale
 * @returns {Object[]}
 * @public
 */
const getLinks = ( simName, locale ) => {
  return [
    {
      text: privacyPolicyString,
      url: 'https://phet.colorado.edu/en/privacy-policy',
      tandemName: 'privacyPolicyLinkText'
    },
    {
      text: translationCreditsLinkString,
      url: `http://phet.colorado.edu/translation-credits?simName=${encodeURIComponent( simName )}&locale=${encodeURIComponent( locale )}`,
      tandemName: 'translationCreditsLinkText'
    },
    {
      text: thirdPartyCreditsLinkString,
      url: `http://phet.colorado.edu/third-party-credits?simName=${encodeURIComponent( simName )
      }&locale=${encodeURIComponent( locale )}#${simName}`,
      tandemName: 'thirdPartyCreditsLinkText'
    },
    {
      text: donateToPhetString,
      url: 'https://giveto.colorado.edu/phet-interactive-simulations/?a=12323626',
      tandemName: 'donateToPhetLinkText'
    }
  ];
};

brand.register( 'getLinks', getLinks );
export default getLinks;