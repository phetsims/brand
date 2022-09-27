// Copyright 2019-2022, University of Colorado Boulder

/**
 * Links for the AboutDialog, used in phet brand and phet-io brand since they are the same for both.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import JoistStrings from '../../joist/js/JoistStrings.js';
import brand from './brand.js';

const termsPrivacyAndLicensingStringProperty = JoistStrings.termsPrivacyAndLicensingStringProperty;
const translationCreditsLinkStringProperty = JoistStrings.translation.credits.linkStringProperty;
const thirdPartyCreditsLinkStringProperty = JoistStrings.thirdParty.credits.linkStringProperty;

export type LinkObject = {
  text: TReadOnlyProperty<string>;
  url: string;
  tandemName: string;
};

const getLinks = ( simName: string, locale: string ): LinkObject[] => {
  return [
    {
      text: termsPrivacyAndLicensingStringProperty,
      url: 'https://phet.colorado.edu/en/licensing/html',
      tandemName: 'termsPrivacyAndLicensingLinkText'
    },
    {
      text: translationCreditsLinkStringProperty,
      url: `https://phet.colorado.edu/translation-credits?simName=${encodeURIComponent( simName )}&locale=${encodeURIComponent( locale )}`,
      tandemName: 'translationCreditsLinkText'
    },
    {
      text: thirdPartyCreditsLinkStringProperty,
      url: `https://phet.colorado.edu/third-party-credits?simName=${encodeURIComponent( simName )}&locale=${encodeURIComponent( locale )}#${simName}`,
      tandemName: 'thirdPartyCreditsLinkText'
    }
  ];
};

brand.register( 'getLinks', getLinks );
export default getLinks;