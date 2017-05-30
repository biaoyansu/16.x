// var a = $('.a')
//   // .css({
//   //   // color: 'red',
//   //   // 'background-color': 'black',
//   //   // border: '15px solid gray'
//   // })
//   // .addClass('black')
//   // .removeClass('b')
//   // ;
// // console.log(a.hasClass('black'));
// // console.log(a.hasClass('b'));
// // console.log(a.hasClass('asdfasdf'));
// a.hide();
// a.show();
// a.fadeOut();
// a.fadeIn(1000);
// a.slideUp(1000);
// a.slideDown(1000);

var board = $('#board');

function toggle() {
  if(board.hasClass('active')) {
    board.removeClass('active');
  } else {
    board.addClass('active');
  }
}

setInterval(toggle, 200);
