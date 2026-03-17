// Copyright 2019-2021, University of Colorado Boulder

/**
 * Links for the AboutDialog, used in phet brand and phet-io brand since they are the same for both.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import joistStrings from '../../joist/js/joistStrings.js';
import brand from './brand.js';

const termsPrivacyAndLicensingString = joistStrings.termsPrivacyAndLicensing;
const privacyPolicyStringProperty = joistStrings.privacyPolicyStringProperty;
const translationCreditsLinkString = joistStrings.translation.credits.link;
const thirdPartyCreditsLinkString = joistStrings.thirdParty.credits.link;
const donateToPhetStringProperty = joistStrings.donateToPhetStringProperty;

/**
 * @param {string} simName
 * @param {string} locale
 * @returns {Object[]}
 * @public
 */
const getLinks = ( simName, locale ) => {
  return [
    {
      textStringProperty: privacyPolicyStringProperty,
      url: 'https://phet.colorado.edu/en/privacy-policy',
      tandemName: 'privacyPolicyLinkText'
    },
    {
      text: translationCreditsLinkString,
      url: `https://phet.colorado.edu/translation-credits?simName=${encodeURIComponent( simName )}&locale=${encodeURIComponent( locale )}`,
      tandemName: 'translationCreditsLinkText'
    },
    {
      text: thirdPartyCreditsLinkString,
      url: `https://phet.colorado.edu/third-party-credits?simName=${encodeURIComponent( simName )
      }&locale=${encodeURIComponent( locale )}#${simName}`,
      tandemName: 'thirdPartyCreditsLinkText'
    },
    {
      textStringProperty: donateToPhetStringProperty,
      url: 'https://giveto.colorado.edu/phet-interactive-simulations/?a=12323626',
      tandemName: 'donateToPhetLinkText'
    }
  ];
};

brand.register( 'getLinks', getLinks );
export default getLinks;