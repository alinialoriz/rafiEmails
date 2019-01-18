$('.submit-button').click(function(event){
    event.preventDefault();
    eAdd= $('.email-address').val();
    tCharacters= eAdd.length;

    d= tCharacters-7;
    o=tCharacters-6;
    r=tCharacters-5;
    g=tCharacters-4;

    // dotChar= eAdd.charAt(d);
    // oChar= eAdd.charAt(o);
    // rChar= eAdd.charAt(r);
    // gChar= eAdd.charAt(g);

    // org= dotChar+oChar+rChar+gChar;

    // $('#remove-org').append('<p>Remove this part of the email address: ' + org + '<p>');
    
    var i, addArray = [];
    for (i = 0; i < tCharacters; i++) {
        if (i !== d && i !== o && i !==r && i !==g){
            addArray.push(eAdd.charAt(i));
        }
    }
    
    newAddress= addArray[0];
    for (i = 1; i < addArray.length; i++) {
        newAddress = newAddress + addArray[i];
    }
    
    $('#new-add').append('<p>' + newAddress + '<p>');
})