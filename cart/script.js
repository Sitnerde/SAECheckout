$('.panzahl input').change( function() {
  updateQuantity(this);
});

function neuberechnen()
{
  var zwischensumme = 0;

  $('.p').each(function () {
    zwischensumme += parseFloat($(this).children('.plpreis').text());
  });
  
  var steuer = zwischensumme * 0.19;
  var liefer = (zwischensumme > 0 ? 15.00 : 0);
  var gesamt = zwischensumme + steuer + liefer;
  
  $('.alles-data').fadeOut(300, function() {
    $('#end-zwischen').html(zwischensumme.toFixed(2));
    $('#end-steuer').html(steuer.toFixed(2));
    $('#end-liefer').html(liefer.toFixed(2));
    $('#end-gesamt').html(gesamt.toFixed(2));
    if(gesamt == 0){
      $('.end').fadeOut(300);
    }else{
      $('.end').fadeIn(300);
    }
    $('.alles-data').fadeIn(300);
  });
}

function updateQuantity(quantityInput)
{
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.ppreis').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  productRow.children('.plpreis').each(function () {
    $(this).fadeOut(300, function() {
      $(this).text(linePrice.toFixed(2));
      neuberechnen();
      $(this).fadeIn(300);
    });
  });  
}
