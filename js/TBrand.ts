// Copyright 2022-2026, University of Colorado Boulder

// @author Michael Kauzmann (PhET Interactive Simulations)

import getLinks from './getLinks.js';

type TBrand = {
  id: string;
  name: string | null;
  copyright: string | null;
  license?: string;
  licenseWithoutLinks?: string;
  accessibleLicense?: string;
  getLinks: typeof getLinks;
  logoOnBlackBackground: HTMLImageElement;
  logoOnWhiteBackground: HTMLImageElement;
};

export default TBrand;