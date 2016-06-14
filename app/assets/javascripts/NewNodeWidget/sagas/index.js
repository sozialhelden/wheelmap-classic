import initNode from './initNode';
import activateSection from './activateSection';
import changeNodeAddress from './changeNodeAddress';
import navigateToSection from './navigateToSection';
import navigateToNextSection from './navigateToNextSection';
import fetchCategories from './fetchCategories';
import updateMap from './updateMap';
import updateAddress from './updateAddress';
import fetchSimilar from './fetchSimilar';
import resetErrors from './resetErrors';
import watchMarkerMoved from './watchMarkerMoved';
import useGeolocation from './useGeolocation';
import saveNode from './saveNode';

export default [
  initNode,
  activateSection,
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  fetchCategories,
  fetchSimilar,
  updateMap,
  updateAddress,
  resetErrors,
  watchMarkerMoved,
  useGeolocation,
  saveNode
];