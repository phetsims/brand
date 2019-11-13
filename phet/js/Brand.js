// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( require => {
  'use strict';

  // modules
  const brand = require( 'BRAND/../../js/brand' );
  const getLinks = require( 'BRAND/../../js/getLinks' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  const Brand = {
    id: 'phet',
    name: 'PhET\u2122 Interactive Simulations', // no i18n
    copyright: 'Copyright © 2002-{{year}} University of Colorado Boulder', // no i18n
    isPhetApp: phet.chipper.queryParameters[ 'phet-app' ] || phet.chipper.queryParameters[ 'phet-android-app' ],
    getLinks: getLinks
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
