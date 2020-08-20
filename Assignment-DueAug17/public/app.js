//JQUERY USED
$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});

$(document).ready(function () {
    $("#cakes").click(function () {
        $('.cakes').show();
        $('.cupcakes, .doughnuts, .macarons, .candies').hide();
    });
    $("#macarons").click(function () {
        $('.macarons').show();
        $('.cupcakes, .doughnuts, .candies, .cakes').hide();
    });
    $("#cupcakes").click(function () {
        $('.cupcakes').show();
        $('.cakes, .doughnuts, .macarons, .candies').hide();
    });
    $("#doughnuts").click(function () {
        $('.doughnuts').show();
        $('.cupcakes, .cakes, .macarons, .candies').hide();
    });
    $("#all").click(function () {
        $('.cakes, .cupcakes , .doughnuts, .macarons, .candies').show();
    });
});


// VANILLA JAVASCRIPT 

function myFunction() {
    var input, value;
    input = document.querySelector('.search');
    filter = input.value.toUpperCase();
    value = document.querySelectorAll('.col-settings');
    for(var i=0; i<value.length; i++){
        a=value[i].querySelectorAll('.card-text')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            value[i].style.display = "";
          } else {
            value[i].style.display = "none";
          }
        }
      }