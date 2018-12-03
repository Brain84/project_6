//hide and show elements
$(document).on('scroll', function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $art1 = $('.article-1');
  const $art2 = $('.article-2');
  const $wrap2 = $('.wrapper-2');
  const $sectionArt = $('.section-articles');
  const $sectionAbo = $('.section-about')
  const sectionArtFromTop = $sectionArt.offset().top;
  const sectionArtHeight = $sectionArt.outerHeight();
  const sectionAboFromTop = $sectionAbo.offset().top;
  const sectionAboHeight = $sectionAbo.outerHeight();

  if (scrollValue > sectionArtFromTop + sectionArtHeight / 1.6 - windowHeight) {
    $art1.addClass('active');
    $art2.addClass('active');
  }
  if (scrollValue > sectionAboFromTop + sectionAboHeight / 1.6 - windowHeight) {
    $wrap2.addClass('active');
  }
  if (scrollValue < 100) {
    $('article').removeClass('active');
    $('.wrapper-2').removeClass('active');
  }
});