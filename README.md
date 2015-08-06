# Brand

PhET Interactive Simulations provides a flexible approach to branding.  This includes customization of the following 
features:

1. The splash screen
2. The navigation bar icons
3. The name which appears in the about dialog
4. The copyright statement which appears in the About dialog
5. Links which appear in the About dialog

PhET provides 3 built-in brands and flexibility to easily create new brands to make it easy for 3rd parties to 
customize their simulations.

1. `adapted-from-phet` (the default brand) indicates that a simulation is adapted from the original PhET simulation.  More details available in the [adapted-from-phet brand README](adapted-from-phet/README.md)
2. `phet` The brand for simulations published on the PhET website http://phet.colorado.edu More details available in the [phet brand README](phet/README.md)
3. `interoperable` This brand is for an interoperable PhET simulation that provides powerful input/output/logging/iframe/API features. More details available in the [interoperable brand README](interoperable/README.md)

To build a simulation with the default brand, use:
```
grunt
```

To build a simulation with a non-default brand, use a command like the following:
```
grunt --brand=my-brand-name
```

You can also view the different brands in the requirejs (nonminified) mode by using a query parameter, such as
```
http://simulationURL.html?brand=my-brand-name
```

### Which brand should I use?
* The "phet" brand is reserved for PhET Interactive Simulations usage only.  The colorized PhET logo is trademarked and only permitted for use by the PhET team at the University of Colorado.
* The "interoperable" brand is reserved for PhET Interactive Simulations interoperable versions.
* The "adapted-from-phet" brand, which provides the black-and-white "Adapted from PhET" logo (the default), is encouraged for usage in simulations with minor modifications. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

### Creating your own brand
To put your own company/group/individual name in the logo and about dialog, follow these steps.  For the sake of discussion, let's assume that your company name is named "Simulations 4 Knowledge"

* copy the `adapted-from-phet` directory to a new directory `simulations-4-knowledge'.  Note that this directory name is lower-cased with hyphens and no spaces.
* Update the entries in `simulations-4-knowledge/js/Brand.js` with your company/group/individual information. For instance, it may look like this:
```js
  return {

    // Nickname for the brand, which should match the brand subdirectory name, grunt option for --brand as well as the
    // query parameter for ?brand.  This is used in Joist to provide brand-specific logic, such as what to show in the 
    // about dialog, decorative text around the PhET button, and whether to check for updates.
    id: 'simulations-4-knowledge',

    // Optional string for the name of the brand.  If non-null, the brand name will appear in the top of the about dialog
    // {string} For example: "My Company"
    name: 'Simulations 4 Knowledge',

    // Optional string for the copyright statement.  If non-null, it will appear in the about dialog
    // {string} For example: "Copyright © 2014, My Company"
    copyright: 'Copyright 2015, Simulations 4 Knowledge',

    /**
     * Return any links to appear in the about dialog.  The sim name and locale can be used for customization if desired.
     * For example: { text: "My Company Support", url: "https://www.mycompany.com/support" }
     * @param {string} simName - the name of the simulation, such as 'bending-light'
     * @param {string} locale - the locale, such as 'en'
     * @returns {Array.<string>} -
     */
    getLinks: function( simName, locale ) {
      return [ {
        text: 'Visit my Awesome Website :)',
        url: 'http://simulations4knowledge.com'
      } ];
    }
  };
```
* Copy your splash screen and images over the existing images in `brand/simulations-4-knowledge/images`
* Test the simulation by launching it in the browser with the query parameter `?brand=simulations-4-knowledge`
* Build the simulation with
```
grunt --brand=simulations-4-knowledge
```
* Test by launching the built simulation in the browser.

### Get Involved

Contact us at our Google Group: <a href="http://groups.google.com/forum/#!forum/developing-interactive-simulations-in-html5" target="_blank">Developing Interactive Simulations in HTML5</a>

Help us improve, create a <a href="http://github.com/phetsims/acid-base-solutions/issues/new" target="_blank">New Issue</a>

### License for Code
See the <a href="https://github.com/phetsims/acid-base-solutions/blob/master/LICENSE" target="_blank">LICENSE</a>

### License for Images
The PhET name and PhET logo are registered trademarks of The Regents of the
University of Colorado. Permission is granted to use the PhET name and PhET logo
only for attribution purposes. Use of the PhET name and/or PhET logo for promotional,
marketing, or advertising purposes requires a separate license agreement from the
University of Colorado. Contact phethelp@colorado.edu regarding licensing.

### Licenses for the Interoperable Versions
Interoperable PhET Simulations requires a license
USE WITHOUT A LICENSE AGREEMENT IS STRICTLY PROHIBITED
Contact phethelp@colorado.edu regarding licensing
http://phet.colorado.edu/en/licensing
