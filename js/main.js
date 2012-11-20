// the main file yo!!!
// mostly stolen from http://www.melonjs.org/tutorial/index.html

// game resources
var g_resources = [
// tiles n map
{
    name: "dumb-tiles",
    type: "image",
    src:  "imgz/dumb-tiles.png"
}, {
    name: "collision",
    type: "image",
    src:  "imgz/collision.png"
}, {
    name: "map01",
    type: "tmx",
    src:  "maps/map01.tmx"
},
// adding character
{
    name: "you",
    type: "image",
    src:  "imgz/you.png"
},
// adding ned
{
    name: "ned",
    type: "image",
    src:  "imgz/ned.png"
}
];

var jsApp = {
    /* ---

     Initialize the jsApp

     --- */
    onload: function() {

        // init the video
        if (!me.video.init('jsapp', 640, 480, false, 1.0)) {
            alert("Sorry but your browser does not support html 5 canvas.");
            return;
        }

        // initialize the "audio"
        me.audio.init("mp3,ogg");

        // set all resources to be loaded
        me.loader.onload = this.loaded.bind(this);

        // set all resources to be loaded
        me.loader.preload(g_resources);

        // kill the gravity!!
        me.sys.gravity = 0

        // load everything & display a loading screen
        me.state.change(me.state.LOADING);
    },

    /* ---

     callback when everything is loaded

     --- */
    loaded: function() {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new PlayScreen());

        // add player
        me.entityPool.add("scientist", PlayerEntity);
        me.entityPool.add("ned", NedEntity)

        // enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP,    "up");
        me.input.bindKey(me.input.KEY.DOWN,  "down");

        // start the game
        me.state.change(me.state.PLAY);
    }

};
// jsApp
/* the in game stuff*/
var PlayScreen = me.ScreenObject.extend({

    onResetEvent: function() {
        // stuff to reset on state change
        // load the level
        me.levelDirector.loadLevel("map01")
    },

    /* ---

     action to perform when game is finished (state change)

     --- */
    onDestroyEvent: function() {
    }

});

//bootstrap :)
window.onReady(function() {
    jsApp.onload();
});
