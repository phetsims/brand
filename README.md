# Brand

PhET Interactive Simulations provides a flexible approach to branding.  This includes customization of the following 
features:

1. The splash screen that appears while the simulation is starting
2. The navigation bar icons
3. The organization name that appears in the About dialog
4. The copyright statement that appears in the About dialog
5. Links that appear in the About dialog

PhET provides 3 built-in brands and flexibility to easily create new brands, making it easy for 3rd parties to
customize their simulations.  The built-in brands are:

1. `adapted-from-phet` (the default brand) indicates that a simulation is adapted from the original PhET simulation.  More details available in the [adapted-from-phet brand README](adapted-from-phet/README.md)
2. `phet` The brand for simulations published on the PhET website http://phet.colorado.edu More details available in the [phet brand README](phet/README.md)
3. `phet-io` The brand for "interoperable" PhET simulations. Interoperable simulations provide powerful input/output/logging/iframe/API features. More details available in the [phet-io brand README](phet-io/README.md)

To build a simulation with the default brand, use:
```
grunt
```

To build a simulation with a non-default brand, use the `--brands` option. For example:
```
grunt --brands=my-brand-name
```

You can also run with a specific brand in the requirejs (nonminified) mode by using the `brand` query parameter. For example:
```
http://simulationURL.html?brand=my-brand-name
```

### Which brand should I use?
* The "phet" and "phet-io" brands are reserved for use by PhET Interactive Simulations only.  The PhET logo is a registered trademark and is only permitted for use by the PhET team at the University of Colorado.
* The "adapted-from-phet" brand is encouraged for usage in simulations with minor modifications. It provides a black-and-white "Adapted from PhET" logo. This brand can also be used for new simulations based on the PhET libraries, but another option is to create your own brand, which will allow you to easily integrate your own splash screen, company logo and other features.

### Creating your own brand
To put your own organization's name in the logo and About dialog, follow these steps.  For the sake of discussion, let's assume that your organization's name is named "Simulations 4 Knowledge"

* copy the `adapted-from-phet` directory to a new directory `simulations-4-knowledge'.  Note that this directory name is lower-cased with hyphens and no spaces.
* Update the entries in `simulations-4-knowledge/js/Brand.js` with your organization's information. For instance, it may look like this:
```js
  return {

    // Nickname for the brand, which should match the brand subdirectory name, grunt option for --brand as well as the
    // query parameter for ?brand.  This is used in Joist to provide brand-specific logic, such as what to show in the 
    // About dialog, decorative text around the PhET button, and whether to check for updates.
    id: 'simulations-4-knowledge',

    // Optional string for the name of the brand.  If non-null, the brand name will appear in the top of the About dialog
    // {string} For example: "My Company"
    name: 'Simulations 4 Knowledge',

    // Optional string for the copyright statement.  If non-null, it will appear in the About dialog
    // {string} For example: "Copyright © 2014, My Company"
    copyright: 'Copyright 2015, Simulations 4 Knowledge',

    /**
     * Return any links to appear in the About dialog.  The sim name and locale can be used for customization if desired.
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
* Copy your images over the existing images in `brand/simulations-4-knowledge/images`
* Test the simulation by launching it in the browser with the query parameter
```
?brand=simulations-4-knowledge
```
* Build the simulation with
```
grunt --brands=simulations-4-knowledge
```
* Test by launching the built simulation in the browser.

### Get Involved

Contact us at our Google Group: <a href="http://groups.google.com/forum/#!forum/developing-interactive-simulations-in-html5" target="_blank">Developing Interactive Simulations in HTML5</a>

Help us improve by creating a <a href="http://github.com/phetsims/acid-base-solutions/issues/new" target="_blank">New GitHub Issue</a>

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
