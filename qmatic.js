col_normal = new Array;
encolar = 0;
col_preferencial = new Array
preferencial = 0;
function glue(){
	encolar ++ ;
	col_normal.push(encolar);
	if (encolar > 1) {
		confirm("Bienvenido a mi Banck usted es el numero " + encolar + " debe esperar " + (col_normal.length-1) * 3 + " minutos para ser atendido");
		
	}
	else {confirm("Bienvenido a mi Banck dirijase a la taquilla mas cercana para ser atendido");}
	console.log(col_normal);
}

function meet(){
	confirm("Numero para atender " + col_normal[0] + " diraje a la taquilla 1");
	col_normal.shift();
	console.log("Cola normal " + col_normal);
}

function c_preferencial(){
	preferencial ++ ;
	col_preferencial.push(preferencial);
	if (preferencial > 1) {
		confirm("Bienvenido a mi Banck usted es el numero " + preferencial + " debe esperar " + (col_preferencial.length-1) * 3 + " minutos para ser atendido");
}
	else {confirm("Bienvenido a mi Banck dirijase a la taquilla mas cercana para ser atendido");}
	console.log(col_preferencial)
}
function meet_pref(){
	if (col_preferencial.length > 0){
	confirm("Numero preferencial para atender " + col_preferencial[0] + " Dirijac a la taquilla 2");
	col_preferencial.shift();
	console.log("Cola preferencial")
	console.log(col_preferencial)
	}
	else{
		confirm("Numero para atender " + col_normal[0] + "Dirijac a la taquilla 2");
	col_normal.shift(); 
	console.log("Cola normal")
	console.log(col_normal)
	}
}
