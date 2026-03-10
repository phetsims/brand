// Copyright 2022, University of Colorado Boulder

import getLinks from './getLinks.js';

type TBrand = {
  id: string;
  name: string | null;
  copyright: string | null;
  license?: string;
  licenseWithoutLinks?: string;
  getLinks: typeof getLinks;
  logoOnBlackBackground: HTMLImageElement;
  logoOnWhiteBackground: HTMLImageElement;
};

export default TBrand;