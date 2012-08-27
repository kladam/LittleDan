var LittleDan = (function()
{
    LittleDan.prototype = Object.create(GameLoop.prototype);
    LittleDan.constructor = LittleDan;

    function LittleDan()
    {
        GameLoop.apply(this, arguments);

        LittleDan.prototype.displayList = [];
    //    LittleDan.prototype.displayMap = {};

        LittleDan.prototype.dan = new Dan();
    }

    LittleDan.prototype.init = function(canvas, w, h)
    {
        GameLoop.prototype.init.apply(this, arguments);

        this.dan.init();
    //    this.addToDisplayList(this.dan);
    };

    LittleDan.prototype.tick = function()
    {
        this.dan.tick();
    };

    LittleDan.prototype.draw = function()
    {
        this.context.clearRect(0,0, this.width, this.height);
        for (var i = 0; i < this.displayList.length; i++)
        {
            this.displayList[i].draw(this.context);
        }
    };

    LittleDan.prototype.destroy = function()
    {

    };

    LittleDan.prototype.addToDisplayList = function(obj)
    {
        this.displayList.push(obj);
    //    this.displayMap[obj.name] = displayList.length - 1;
    };

    // LittleDan.prototype.swapDepths = function(obj1, obj2)
    // {
    //     var ia = this.displayMap[obj1.name];
    //     var ib = this.displayMap[obj2.name];
    //     var oa = this.displayList[ia];
    //     var ob = this.displayList[ib];

    //     this.displayList[ia] = ob;
    //     this.displayList[ib] = oa;
    // };

    return LittleDan;
}());