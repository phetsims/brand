// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // strings
  var licenseString = require( 'string!JOIST/license' );
  var translationCreditString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditString = require( 'string!JOIST/third-party.credits.link' );

  return {
    id: 'interoperable',
    name: 'PhET<sup>\u00ae</sup> Interactive Simulations', // no i18n
    copyright: 'Copyright © 2004-2015 University of Colorado Boulder',

    /**
     * Get the links for the sim using a normalized sim name like "energy-skate-park-basics"
     * @param simName
     * @param locale
     * @returns {*[]}
     */
    getLinks: function( simName, locale ) {
      return [
        {
          text: licenseString,
          url: 'http://phet.colorado.edu/en/licensing/html'
        },
        {
          text: translationCreditString,
          url: 'http://phet.colorado.edu/translation-credits?simName=' + encodeURIComponent( simName ) + '&locale=' + encodeURIComponent( locale )
        },
        {
          text: thirdPartyCreditString,
          url: 'http://phet.colorado.edu/third-party-credits?simName=' + encodeURIComponent( simName ) + '&locale=' + encodeURIComponent( locale )
        }
      ];
    }
  };
} );
