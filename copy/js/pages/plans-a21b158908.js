$(document).ready(function() {
  $('.marketing-block__side-menu__body').scrollNav({
    sections: '.marketing-block-menu__title',
    subSections: false,
    sectionElem: 'section',
    showHeadline: false,
    showTopLink: false,
    scrollToHash: true,
    scrollOffset: 150,
    animated: true,
    speed: 200
  });
});

