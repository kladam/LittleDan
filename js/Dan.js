var Dan = (function()
{
    Dan.prototype = Object.create(GameObject.prototype);
    Dan.constructor = Dan;

    function Dan()
    {
        GameObject.apply(this, arguments);
    }

    Dan.prototype.init = function(){
        // load the image

        // dispatch an event to add it to the display list
    };

    Dan.prototype.tick = function(){

    };

    Dan.prototype.draw = function(context){
        context.drawImage(this.img, this.x, this.y);
    };

    return Dan;

}());