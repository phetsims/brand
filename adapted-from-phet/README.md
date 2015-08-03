# brand

Assets and metadata for web apps built with phetsims/joist and related libraries.

To add your own branding to your sim, fork the phetsims/brand repo and replace the images in the images/ directory with your own.
* logo.png
* logo-on-white.png
* splash.svg

The created artwork must match the image dimensions of the blank versions.

In js/Brand.js fill in the missing information about your group, which will be displayed in the About dialog.
* name
* copyright
* links

### Adapting a Simulation from PhET
When making only minor modifications, a black and white version of the PhET Interactive Simulations logo can be included
with the text "adapted from PhET" in the navigation bar.  In order to use this branding for your simulation, please check
out the `adapted-from-phet` branch, which includes the black and white logos as well as the metadata in Brand.js that
will trigger displaying the "adapted from" text in Joist.

### Questions, Issues and More

More information about how to access/modify/build the code for PhET Simulations is available at the [PhET Development Overview](http://bit.ly/phet-development-overview).

If you encounter a problem, please create a GitHub issue.