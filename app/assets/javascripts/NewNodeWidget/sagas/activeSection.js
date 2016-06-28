import { ACTIVATE_SECTION } from '../actions';

export default function activeSection(section) {
  return ({ type, payload }) => (
    type === ACTIVATE_SECTION && payload === section
  );
}
