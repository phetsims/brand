// Copyright 2002-2017, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // modules
  var brand = require( 'BRAND/../../js/brand' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  var Brand = {
    id: 'noBrand',
    name: 'No Brand'
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
