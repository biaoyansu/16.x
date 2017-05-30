$('.grandpa')
  .find('.child')
  .css('border', '2px solid #999');

$('#child1')
  .parent()
  .css('border', '2px solid #666');

$('#child1')
  .parents('.grandpa')
  .css('border', '2px solid #333');

$('.child')
  .filter('.not-gay')
  .css('background', 'red');
