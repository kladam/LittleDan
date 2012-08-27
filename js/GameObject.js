var GameObject = (function()
{
	function GameObject()
	{
		GameObject.prototype.x = 0;
		GameObject.prototype.y = 0;
		GameObject.prototype.w = 0;
		GameObject.prototype.h = 0;
		GameObject.prototype.xs = 0;
		GameObject.prototype.ys = 0;
	}

	GameObject.prototype.draw = function(){};

	return GameObject;
}());