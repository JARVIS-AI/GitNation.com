/* eslint-disable jquery/no-attr */
/* eslint-disable jquery/no-class */
/* eslint-disable jquery/no-parents */
/* eslint-disable jquery/no-data */

/*---------------------------------------------------*/
// Video expand


import { CLASSES } from './_classes';

export default function header() {

  const videoWrap = $('.js-video-wrap');

  videoWrap.on('click', function() {
    if (videoWrap.hasClass(CLASSES.active)) {
      $(this).removeClass(CLASSES.active);
    } else {
      $(this).addClass(CLASSES.active);
    }
  });

  console.log('videoWrap Loaded');
};
