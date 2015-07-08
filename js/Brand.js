// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function() {
  'use strict';

  //TODO: Add your brand's information here and it will appear in the About Dialog
  return {
    id: 'phet',
    name: null, // {string} For example: 'My Company'
    copyright: null, // {string} For example: 'Copyright © 2014, My Company'
    links: null, // {Object[]} For example: { text: 'My Company Support', url: 'https://www.mycompany.com/support' }
    adaptedFromPhET: false // {boolean} is this brand adapted from PhET?
  };
} );
