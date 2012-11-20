// ned...

var NedEntity = me.ObjectEntity.extend({

    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(1, 1);

    },

    update: function() {
        this.vel.x += Math.random() - 0.5
        this.vel.y += Math.random() -0.5
        this.updateMovement();
        this.parent(this);
        return true;
    }

});
