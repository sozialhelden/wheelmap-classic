import { Record, List } from 'immutable';

const Widget = new Record({
  id: null,
  apiKey: null,
  height: 500,
  width: 400,
  lat: 52.50521,
  lon: 13.4231,
  userId: null,
  categories: false,
  boundingBox: null,
  src: null,
  providers: new List()
});

export default Widget;
