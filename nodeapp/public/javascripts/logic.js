H = this.H || {};

H.init = function() {
    H.startGame();
};

H.startGame = function() {
    FB.api("/me/movikwiz:start",
        'post',
        {game: "http://samples.ogp.me/258720674248098"},
        function(response) {
            console.log(response);
        }
    );
};

H.publishScore = function(score) {

};

