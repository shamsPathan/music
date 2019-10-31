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
        q: search
    }).then(function(tracks) {
        console.log(tracks);
        makeTrackList(tracks);
    });
}


function makeTrackList(tracks) {

    tracks.forEach(function(track) {
        SoundCloud.randerTracks(track);
    });

}

SoundCloud.randerTracks = function(track) {
    // card

    var search = document.querySelector(".js-search-results");

    var card = document.createElement("div");

    // image
    var image = document.createElement("div");
    image.classList.add("image");

    var img = document.createElement("img");
    img.classList.add("image_img");
    img.src = track.artwork_url ? track.artwork_url : "http://lorempixel.com/g/200/200/abstract";
    image.appendChild(img);

    card.appendChild(image);

    //content
    var content = document.createElement("div");
    content.classList.add("content");

    //header
    var header = document.createElement("div");
    header.classList.add("header");
    var a = document.createElement("a");
    a.href = track.permalink_url;
    a.target = "_blank";
    a.innerHTML = track.permalink;
    header.appendChild(a);
    content.appendChild(header);

    // appending to card
    card.appendChild(content);

    //bottom
    var bottom = document.createElement("div");
    bottom.classList.add("ui", "bottom", "attached", "button", "js-button");

    // i and span
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

SoundCloud.get("beatles");





//  Show cards





// add to playlist and play