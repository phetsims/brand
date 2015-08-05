# Brand

PhET Interactive Simulations provides a flexible approach to branding.  This includes customization of the following 
features:

1. The splash screen
2. The navbar icons
3. The name which appears in the about dialog
4. The copyright statement which appears in the about dialog
5. Links which appear in the about dialog

PhET provides 3 built-in brands and flexibility to easily create new brands to make it easy for 3rd parties to 
customize their simulations.

1. `adapted-from-phet` (the default brand) indicates that a simulation is adapted from the original PhET simulation.  More details available in the [adapted-from-phet README](adapted-from-phet/README.md)
2. `phet` The brand for simulations published on the PhET website http://phet.colorado.edu More details available in the [phet README](phet/README.md)
3. `interoperable` This brand is for an interoperable PhET simulation that provides powerful input/output/logging/iframe/API features. More details available in the [interoperable README](interoperable/README.md)

To build a simulation with the default brand, use:
`grunt`

To build a simulation with a non-default brand, use a command like the following:
`grunt --brand=mybrandname`

You can also view the different brands in the requirejs (nonminified) mode by using a query parameter, such as
`?brand=mybrandname`

# Creating your own Brand
To put your own company/group/individual name in the logo and about dialog, copy the `adapted-from-phet` directory to a 
new directory with your name.  The name should be lowercase and with hyphens.  Update the entries in the Brand.js as desired
and make sure the `id` field matches the directory name.  Copy your splash screen and images over the existing images.  
You can test the brand by launching or building the sim with the options described above.
