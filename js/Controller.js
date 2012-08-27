var Controller = (function(){

    function Controller()
    {
        this.obj = {};
    }

    Controller.prototype.dispatchEvent = function(name, data)
    {
        for(var i = 0; i < this.obj[name].length; i++)
        {
            this.obj[name][i]['func'].call(this.obj[name][i]['scope'], data);
        }
    };

    Controller.prototype.addListener = function(scope, name, func)
    {
        if(this.obj[name] == null)
        {
            this.obj[name] = [];
        }

        this.obj[name].push({scope:scope, func:func});
    };

    Controller.prototype.removeListener = function(name, func)
    {
        for(var i = 0; i < this.obj[name].length; i++)
        {
            if(this.obj[name][i]['func'] === func)
            {
                this.obj[name][i].splice(i, 1);
                return;
            }
        }
    }

    return Controller;
}());