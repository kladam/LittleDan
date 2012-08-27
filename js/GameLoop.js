var GameLoop = (function()
{
	function GameLoop()
	{
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.xs = 0;
		this.ys = 0;
	}

	GameLoop.prototype.init = function(){};
	GameLoop.prototype.destroy = function(){};
	GameLoop.prototype.tick = function(){};
	GameLoop.prototype.draw = function(){};

	return GameLoop;
}());