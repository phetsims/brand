// Copyright 2022, University of Colorado Boulder

import getLinks from './getLinks.js';

type IBrand = {
  id: string;
  name: string;
  copyright: string;
  getLinks: typeof getLinks;
  additionalLicenseStatement?: string;
  logoOnBlackBackground: HTMLImageElement;
  logoOnWhiteBackground: HTMLImageElement;
};

export default IBrand;