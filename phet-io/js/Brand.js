// Copyright 2002-2016, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( require => {
  'use strict';

  // modules
  const brand = require( 'BRAND/../../js/brand' );
  const getLinks = require( 'BRAND/../../js/getLinks' );

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
    getLinks: getLinks,
  };

  return Brand;
} );
