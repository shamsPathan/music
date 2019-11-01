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

SoundCloud.refresh = function() {
    var searchResult = document.querySelector(".js-search-results");
    searchResult.innerHTML = '';
}

function makeTrackList(tracks) {

    tracks.forEach(function(track) {
        SoundCloud.randerTracks(track);
    });

}





//  Show cards  ####################


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

    //button
    var button = document.createElement("div");
    button.classList.add("ui", "button", "attached", "button", "js-button");

    // i and span
    var i = document.createElement("i");
    i.classList.add("add", "icon");
    var span = document.createElement("span");
    span.innerHTML = "Add to playlist";

    // adding to button
    button.appendChild(i);
    button.appendChild(span);
    button.addEventListener('click', function() {
        SoundCloud.getEmbed(track.permalink_url);
    })

    // adding button to card
    card.appendChild(button);

    card.classList.add("card");

    search.appendChild(card);

}


// add to playlist and play

SoundCloud.getEmbed = function(trackURL) {

    SC.oEmbed(trackURL, {
        auto_play: true
    }).then(function(embed) {
        console.log('oEmbed response: ', embed);
        var playlist = document.querySelector(".js-playlist");
        var box = document.createElement("div");
        box.classList.add("playlistBox");
        box.innerHTML = embed.html;

        playlist.insertBefore(box, playlist.firstChild);
        localStorage.setItem("key", playlist.innerHTML);
    });
}










var playList = document.querySelector(".js-playlist");
playList.innerHTML = localStorage.getItem("key");







// Search button


var UI = {};
UI.onEnter = function(e) {
    UI.seacrhSong();
};

UI.onClick = function() {
    UI.seacrhSong();
};

UI.seacrhSong = function() {
    var input = document.querySelector(".js-search");
    console.log(input.value);
    SoundCloud.init();
    SoundCloud.refresh();
    SoundCloud.get(input.value);
}


// Searching for music
var searchButton = document.querySelector(".js-submit");

searchButton.addEventListener('click', function() {
    UI.onClick();
});

var input = document.querySelector(".js-search");

input.addEventListener("keyup", event => {

    if (event.which === 13) {
        console.log("hello");
        UI.onEnter();
    }
});


// Clear Playlist
var clearPlaylistButton = document.querySelector('.js-clear-playlist');
clearPlaylistButton.addEventListener('click', function() {
    document.querySelector('.js-playlist').innerHTML = ''
})