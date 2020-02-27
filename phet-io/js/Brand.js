// Copyright 2002-2016, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1


import brand from '../../js/brand.js';
import getLinks from '../../js/getLinks.js';
import logoOnWhiteBackground from '../images/logo-on-white_png.js';
import logoOnBlackBackground from '../images/logo_png.js';

// Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
const Brand = {
  id: 'phet-io',
  name: 'PhET\u2122 Interactive Simulations', // no i18n
  copyright: 'Copyright © 2002-{{year}} University of Colorado Boulder',
  additionalLicenseStatement: 'This PhET-iO interoperable simulation file requires a license.<br>' +
                              'USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED.<br>' +
                              'Contact phethelp@colorado.edu regarding licensing.',
  getLinks: getLinks,
  logoOnBlackBackground: logoOnBlackBackground,
  logoOnWhiteBackground: logoOnWhiteBackground
};

brand.register( 'Brand', Brand );

export default Brand;