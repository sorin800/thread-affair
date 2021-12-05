import './../scss/index.scss';

import Glide from '@glidejs/glide';

new Glide('.home-banner.glide', {
  type: 'carousel',
}).mount();

new Glide('.product-tile-list > .glide', {
  type: 'carousel',
}).mount();
