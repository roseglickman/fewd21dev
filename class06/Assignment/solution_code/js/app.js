//creating cities array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function() {
  //for each element in the cities array append an option
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  //when user selects city change background
  $('form').on('change', '#city-type',function(){
    //get value from form for variable city
    var city = $('#city-type').val();
    //figures out which city was selected and applies appropriate background
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});