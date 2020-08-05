/* eslint-disable */

import { CLASSES } from './_classes';

export default function header() {
  const burger = $(CLASSES.burger);
  const header = $(CLASSES.header);
  const overlay = $(CLASSES.overlay);
  const menuLink = $(CLASSES.menuLink);

  function open() {
    $(burger).addClass(CLASSES.active);
    header.addClass(CLASSES.active);
    overlay.addClass(CLASSES.active);
  }

  function close() {
    $(burger).removeClass(CLASSES.active);
    header.removeClass(CLASSES.active);
    overlay.removeClass(CLASSES.active);
  }

  burger.on('click', function() {
    if (header.hasClass(CLASSES.active)) {
      close();
    } else {
      open();
    }
  });

  menuLink.on('click', function() {
    if (header.hasClass(CLASSES.active)) {
      close();
    } else {
      open();
    }
  });

  // $(window).on('scroll', () => {
  //   if (window.pageYOffset > 53) {
  //     header.addClass(CLASSES.sticked);
  //   } else {
  //     header.removeClass(CLASSES.sticked);
  //   }
  // });
}
