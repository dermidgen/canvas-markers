function CanvasMarker () {
	var canvas = document.createElement("canvas");

	var width = 22;
	var height = 40;
	//Todo: add retina display support

	canvas.width = width;// * 2;
	canvas.height = height;// * 2;

	// Retina related
	// canvas.style.width = width+'px';
	// canvas.style.height = height+'px';

	var context = canvas.getContext("2d");
	// context.scale(2,2);

	context.save();
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(22,0);
	context.lineTo(22,40);
	context.lineTo(0,40);
	context.closePath();
	context.clip();
	context.strokeStyle = 'rgba(0,0,0,0)';
	context.lineCap = 'butt';
	context.lineJoin = 'miter';
	context.miterLimit = 4;
	context.save();
	context.restore();
	context.save();
	g=context.createLinearGradient(5.335045708871999,4.108093404389001,17.03354417296,19.315644895250003);
	g.addColorStop(0,"#06dc06");
	g.addColorStop(1,"#29a129");
	context.fillStyle = g;
	context.strokeStyle = "#0a640a";
	context.lineWidth = 0.9859549403190613;
	context.lineCap = "butt";
	context.lineJoin = "miter";
	context.beginPath();
	context.moveTo(10.993,39.994);
	context.bezierCurveTo(8.6544,20.552,0.4930000000000003,19.964,0.4930000000000003,11.338999999999999);
	context.bezierCurveTo(0.4930000000000003,8.794099999999998,1.5708000000000004,5.586799999999998,3.422,3.7872999999999983);
	context.bezierCurveTo(5.2732,1.9877999999999982,7.0192,0.4315999999999982,10.9931,0.4315999999999982);
	context.bezierCurveTo(14.628,0.4315999999999982,16.8825,2.141799999999998,18.7337,3.9412999999999982);
	context.bezierCurveTo(20.584899999999998,5.740799999999998,21.5906,8.818099999999998,21.5906,11.363);
	context.bezierCurveTo(21.5906,19.4787,13.6711,20.5514,10.993599999999999,39.992999999999995);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
	context.save();
	context.fillStyle = "#003c00";
	context.beginPath();
	context.moveTo(14.728,11.222);
	context.bezierCurveTo(14.728,13.200899999999999,13.0777,14.8051,11.0419,14.8051);
	context.bezierCurveTo(9.0061,14.8051,7.3558,13.200899999999999,7.3558,11.222);
	context.bezierCurveTo(7.3558,9.2431,9.0061,7.6389,11.0419,7.6389);
	context.bezierCurveTo(13.0777,7.6389,14.728,9.2431,14.728,11.222);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
	context.restore();

	return canvas;
};
