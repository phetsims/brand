// Copyright 2022-2024, University of Colorado Boulder

// @author Michael Kauzmann (PhET Interactive Simulations)

import getLinks from './getLinks.js';

type TBrand = {
  id: string;
  name: string | null;
  copyright: string | null;
  getLinks: typeof getLinks;
  additionalLicenseStatement?: string;
  logoOnBlackBackground: HTMLImageElement;
  logoOnWhiteBackground: HTMLImageElement;
};

export default TBrand;