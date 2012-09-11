H = this.H || {};

H.init = function() {
    H.startGame();
};

H.startGame = function() {
    FB.api("movikwiz:start",
        'post',
        {game: "http://somewhere"},
        function(response) {
            console.log(response);
        }
    );
};

