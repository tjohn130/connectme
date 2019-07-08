// This file handles all of the javascript for the document

// This function only runs when the document is ready
$(document).ready(function(){
    
    // alert("The Javascript is running");

    // AJAX call to the Cenus API for data
    $.ajax({
        method:'GET',
        url:'https://api.census.gov/data/2013/pep/natstprc?get=STNAME,POP,DENSITY,DEATHS,BIRTHS&for=state:*&DATE_=6&key=4c6cd7ae7b36521467af7b6b01e3ffc0f2fd4af9'
    }).then(function(data){
    // // Testing id
    //     $("#statefill").text("STATES GO HERE");
        
        // This foreach loop displays every item in the callback 'data' array
        data.forEach((item, item_index, arr) => {
            //Grabs the first index of each item
            var titleitem = item.filter((val,index,arr) => (index < 1))
            //Grabs the other index of each item
            var bodyitem =item.filter((val,index,arr) => (index >= 1))

            //Creates Bootstrap Card Template
            var card = $("<div class='card'>")
            var cardhead = $("<div class='card-header'>")
            var cardbody = $("<div class='card-body'>")
            var cardtitle = $("<div class='card-title'>")
            var cardtext = $("<div class='card-text'>")
            //Card Setup
            card.append(cardhead).append(cardbody)
            cardbody.append(cardtitle).append(cardtext)
            console.log("this item is "+item)
            //loops through each titleitem array
            titleitem.forEach(headitem => {
                //Grabs the headitem from titleitem and appends to cardhead
                cardhead.append(headitem)
            })
            //loop through each dataitem in item
            bodyitem.forEach((dataitem,dataindex) => {
                console.log("this dataitem is "+dataitem)
                console.log(data[0][dataindex])
                //appends dataitems in a cardtitle and cardtext
                cardtext.append('<p>'+data[0][dataindex+1]+": "+dataitem+'</p>')
            })
            //appends each newdataitem in array to the 'statefill' id
            $("#statefill").append(card)
        })
    })
})