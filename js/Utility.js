var Utility = (function(){

    function Utility()
    {
        this.imgLib = {};
    }

    Utility.prototype.loadImage = function(name, url){
        var img = new Image();
        img.src = url;
        img.setAttribute('name', name);

        img.onload = function(){
            // dispatch event image loaded (name)
        };

        this.imgLib[name] = img;
    };

    Utility.prototype.loadSound = function(){
        // to be implemented
    };

    Utility.prototype.getImage = function(name){
        return this.imgLib[name];
    };

    return Utility;

}());
