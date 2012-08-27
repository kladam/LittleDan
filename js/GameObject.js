var GameObject = (function()
{
	function GameObject()
	{
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.xs = 0;
		this.ys = 0;
	}

	GameObject.prototype.draw = function(){};

	return GameObject;
}());