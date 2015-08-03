// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function() {
  'use strict';

  return {
    id: 'adapted-from-phet',
    name: null, // {string} For example: "My Company"
    copyright: null, // {string} For example: "Copyright © 2014, My Company"
    getLinks: function( simName, locale ) {
      return [];
    } // {Object[]} For example: { text: "My Company Support", url: "https://www.mycompany.com/support" }
  };
} );
