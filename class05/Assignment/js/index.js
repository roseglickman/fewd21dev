// JavaScript is powerful: we're able to take user interaction and information and use it to update the page without requiring a refresh. This week, a new startup in your city, CitiPix, is looking to create a personalized picture app that allows users to store pictures they've taken around the world and quickly access them by typing in keywords or tags associated with each photo; they have asked for your help to start building the front-end prototype. You will begin by building a web-app that will take a user's input and update the background image of the page based on that input. Once again, you have been given the starter code that includes the HTML and the CSS. Use the images in the [images folder](starter_code/images) and write JavaScript to make the background image reflect user input based on the Technical Requirements  below.


//wait for the DOM elements to load before executing
jQuery(document).ready(function(){
    // Create a function that runs whenever the submit button is clicked
        jQuery("#submit-btn").click(function(e){


        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called cityType and get the value of the #city-type input
        var cityType = jQuery("#city-type").val();
        jQuery("#city-type").val('greetings');
        //Correct for capitalization
        cityType = cityType.toLowerCase();
        // cityType = cityType.trim();

        //Eliminate spaces

        // if the user inputs austin / atx CSS class to 'austin'
        if(cityType == "austin" || cityType == "atx") {
            jQuery("body").attr("class","austin");
        // if the user inputs austin / atx CSS class to 'austin'

        } else if(cityType == "los angeles" || cityType == "la" || cityType == "lax") {
            jQuery("body").attr("class","la");
        // if the user inputs austin / atx CSS class to 'austin'

        } else if(cityType == "new york" ||cityType == "new york city" ||cityType == "nyc") {
            jQuery("body").attr("class","nyc");
        // if the user inputs austin / atx CSS class to 'austin'
        } else if(cityType == "san francisco" ||cityType == "sf" ||cityType == "bay area") {
            jQuery("body").attr("class","sf");
        // if the user inputs austin / atx CSS class to 'austin'

        } else if(cityType == "sydney" ||cityType == "syd") {
            jQuery("body").attr("class","sydney");
        }
});
    // Listen for user interaction on the submit button.

});