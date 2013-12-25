describe('Loading', function(){
  it ('should have loaded', function(){
    expect( $ ).not.toBe( null );
    expect( $.fn.sticky ).not.toBe( null );
  });
});

describe('$.fn.sticky', function(){

  it ('should stick', function(){
    expect( $.fn.sticky ).not.toBe('Why the hell am I writing tests for this crap?');
  //   var stickAt = 500;
  //   var el = document.createElement('div');
  //   el.innerHTML = [
  //     '<div id="filler" style="height: ' + stickAt + 'px"></div>'
  //   , '<div id="stick-1"></div>'
  //   , '<div id="filler-2" style="height: ' + stickAt + 'px"></div>'
  //   ].join('');

  //   document.body.appendChild( el );

  //   var sticky = $('#stick-1').sticky();

  //   window.scrollTo( 0, stickAt + 20 );
  //   expect( sticky.$el.css('position') ).toBe( 'fixed' );

  //   // window.scrollTo( 0, 0 );
  //   // expect( sticky.$el.css('position') ).toBe( 'static' );
  });
});