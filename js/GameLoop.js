var GameLoop = (function()
{
	function GameLoop()
	{
        GameLoop.prototype.canvas = {};
        GameLoop.prototype.width = {};
        GameLoop.prototype.height = {};
        GameLoop.prototype.context = {};
	}

	GameLoop.prototype.init = function(canvas, w, h)
    {
        this.canvas = canvas;
        this.width = w;
        this.height = h;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
    };
	GameLoop.prototype.destroy = function(){};
	GameLoop.prototype.tick = function(){};
	GameLoop.prototype.draw = function(){};
    GameLoop.prototype.getWidth = function(){
        return this.width;
    };
    GameLoop.prototype.getHeight = function(){
        return this.height;
    };
    GameLoop.prototype.getContext = function(){
        return this.context;
    };

	return GameLoop;
}());