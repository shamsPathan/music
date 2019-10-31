// Search





// Request to API

SoundCloud = {};

SoundCloud.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
};

SoundCloud.get = function(search) {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: 'search'
    }).then(function(tracks) {
        console.log(tracks);
    });
}

SoundCloud.randerTraks = function() {

    var search = document.querySelector(".js-search-results");
    var card = document.createElement("div");

    // creating image div
    var image = document.createElement("div");
    image.classList.add("image");

    var img = document.createElement("img");
    img.classList.add("image_img");
    img.src = "http://www.placekitten.com/290/290";

    // adding img tag to image div
    image.appendChild(img);

    // adding image div to card div
    card.appendChild(image);

    //creating content div
    var content = document.createElement("div");
    content.classList.add("content");

    // creating card header div tob be added inside content div
    var header = document.createElement("div");
    header.classList.add("header");
    // creating a tag tinside header
    var a = document.createElement("a");
    a.href = "https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance";
    a.target = "_blank";
    a.innerHTML = "Science Vs. Romance";
    //appending to header
    header.appendChild(a);
    // appending to content
    content.appendChild(header);
    // appending to card
    card.appendChild(content);

    //bottom part 
    var bottom = document.createElement("div");
    bottom.classList.add("ui", "bottom", "attached", "button", "js-button");

    // creating i and span(add to playlist)
    var i = document.createElement("i");
    i.classList.add("add", "icon");
    var span = document.createElement("span");
    span.innerHTML = "Add to playlist";

    // adding to bottom
    bottom.appendChild(i);
    bottom.appendChild(span);

    // adding to card
    card.appendChild(bottom);

    card.classList.add("card");
    search.appendChild(card);

}



SoundCloud.init();
SoundCloud.get('chandrabindu');
SoundCloud.randerTraks();





//  Show cards





// add to playlist and play