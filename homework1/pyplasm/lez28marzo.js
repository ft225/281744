
var dominio = DOMAIN([[0,10]])([10]);

var x = function (v){
	return [v[0]];
};
var y = function (v){
	return [v[0]];
};

var z= function (v){
	return [v[0]];
};
var mappings = [x,y,z];


var model2 = MAP(mappings)(dominio);
DRAW(model2)

//cerchio

var domain1= DOMAIN([[0,2*PI]])([32]);
var x= function(v){
	return [COS(v[0])];
};

var y= function(v){
	return [SIN(v[0])];
};

var mappings = [x,y];
var map = MAP(mappings);
var model1 = map(domain1);
DRAW(model1)


//sinusoide
var domain1= DOMAIN([[0,8*PI]])([8]);
var x= function(v){
	return [v[0]];
};
var y= function(v){
	return [SIN(v[0])];
};
var z= function (v){
	return [v[0]];
};
var mappings = [x,y,z];
var map = MAP(mappings);
var model1 = map(domain1);
DRAW(model1);

//cerchi concentrici

var domain1= DOMAIN([[0,2*PI]])([32]);
var circle = function (r){
	return function(v){
		return [r*COS(v[0]),r*SIN(v[0])];
	};
};

var mapping = circle(3);
var mapping1 = circle(2);
var mapping2 = circle(1);
var model = MAP(mapping)(domain1);
var model1 = MAP(mapping1)(domain1);
var model2 = MAP(mapping2)(domain1);
DRAW(model);
DRAW(model1);
DRAW(model2);


//SFERA

var dominio_sfera= DOMAIN([[-PI/2,PI/2],[-PI,PI]])([24,36]);

var x= function(v){
	return [SIN(v[1]) * COS(v[0])];
};
var y= function(v){
	return [SIN(v[1]) * SIN(v[0])];
};
var z= function (v){
	return [COS(v[1])];
};
var mappings = [x,y,z];
var model = MAP(mappings)(dominio_sfera);
DRAW(model);


//TOROS 3d

var dominio_toro= DOMAIN([[0,2*PI],[0,2*PI]])([24,36]);

var x = function (R,r){
	return function(v){
		return [(r*COS(v[0])+R)*COS(v[1])];
	};
};

var y = function (R,r){
	return function(v){
		return [(r*COS(v[0])+R)*SIN(v[1])];
	};
};

var z = function (R,r){
	return function(v){
		return [r*SIN(v[0])];
	};
};
var mapping = x(10,1);
var mapping1 = y(10,1);
var mapping2 = z(10,1);
var model = MAP([mapping,mapping1,mapping2])(dominio_toro);
DRAW(model)



// arco di circonferenza pieno

var dominio= DOMAIN([[0,PI/3],[0,PI/3]])([24,36]);

var x = function (R,r){
	return function(v){
		return [(r*COS(v[0])+R)*COS(v[1])];
	};
};

var y = function (R,r){
	return function(v){
		return [(r*COS(v[0])+R)*SIN(v[1])];
	};
};


var mapping = x(10,6);
var mapping1 = y(10,6);
var model = MAP([mapping,mapping1])(dominio);
DRAW(model)




// scala

