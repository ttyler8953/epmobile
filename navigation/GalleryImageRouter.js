import { createRouter } from '@expo/ex-navigation';


import Galleries from '../screens/Galleries';

import RootNavigation from './GalleryImageNavigation';

export default createRouter(() => ({

  gallery: () => Galleries,

}));
