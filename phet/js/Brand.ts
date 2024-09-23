// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
// @author Michael Kauzmann (PhET Interactive Simulations)


import brand from '../../js/brand.js';
import getLinks from '../../js/getLinks.js';
import TBrand from '../../js/TBrand.js';
import logo_png from '../images/logo_png.js';
import logoOnWhite_png from '../images/logoOnWhite_png.js';

// Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
const Brand: TBrand = {
  id: 'phet',
  name: 'PhET\u2122 Interactive Simulations', // no i18n
  copyright: 'Copyright © 2002-{{year}} University of Colorado Boulder', // no i18n
  getLinks: getLinks,
  logoOnBlackBackground: logo_png,
  logoOnWhiteBackground: logoOnWhite_png
};

brand.register( 'Brand', Brand );

export default Brand;