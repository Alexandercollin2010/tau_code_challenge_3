// Objectives
//
// Initialize and spin up a server side node/express application.
// Send requests to the server from both the browser and using ajax in
// the client side script.
// Display response on the DOM.
// Demonstrate the separation of logic between the client and the server.
// The Joke Book
//
// Your client has asked you to create a Joke Book application.
// The server will contain all the current joke data and you have been
// provided with the initial server file (server/app.js).
//
// Your job will be to build up the server around the data in the
// server/app.js file, display the current jokes to the DOM, and add the
// ability for users to add their own jokes and display these too.
//
// How the joke data is structured
//
// You can view the full object in server/app.js. The data structure is
// an array of objects. These objects have three properties:
// whoseJoke, jokeQuestion, and punchLine.



console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    getJokes();
    clearInputs();
    $('#outputDiv').append('');
  }); // end addJokeButton on click



  // send user input to the server
  var getJokes = function(){
    objectToSend = {
      whoseJoke: $('#whoseJokeIn').val(),
      jokeQuestion: $('#questionIn').val(),
      punchLine: $('#punchlineIn').val()
    };// end objectToSend
    $('#outputDiv').append('');
    $.ajax({
      type: 'POST',
      url: '/getJokes',
      data: objectToSend,
      success: function(response){
        console.log('Received from POST: ', response);
        for (var i = 0; i < response.length; i++) {
          $('#outputDiv').html('<p><strong> Joke Author: </strong>' + response[i].whoseJoke + ''
           + '<strong> Question: </strong>' + response[i].jokeQuestion + '' + '<strong> Punch Line: </strong>' +
           response[i].punchLine + '</p>');
        }
      }// end success

    });// end ajax call

  }; // end getJokes to the server

var clearInputs = function(){
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');


}; //end clearInputs

}); // end doc ready
