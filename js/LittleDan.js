var LittleDan = (function()
{
    LittleDan.prototype = Object.create(GameLoop.prototype);
    LittleDan.constructor = LittleDan;

    function LittleDan()
    {
        GameLoop.apply(this, arguments);
        LittleDan.prototype.displayList = [];
    }

    LittleDan.prototype.init = function(canvas, w, h)
    {
        GameLoop.prototype.init.apply(this, arguments);
    };

    LittleDan.prototype.tick = function()
    {


    };

    LittleDan.prototype.draw = function()
    {
        for (var i = 0; i < this.displayList.length; i++)
        {
            this.displayList[i].draw();
        }
    };

    LittleDan.prototype.destroy = function()
    {

    };

    LittleDan.prototype.addToDisplayList = function(obj)
    {
        this.displayList.push(obj);
    };

    return LittleDan;
}());