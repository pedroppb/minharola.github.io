function limpar(){
			var algo=document.getElementById("algo");
			var limpo=document.getElementById("limpo");
			paralimpar=new String(algo.value);
			limpado="";
			let cont=0;
			do{
				
				if(
					paralimpar.substr(cont,1)=="1" ||
					paralimpar.substr(cont,1)=="2" ||
					paralimpar.substr(cont,1)=="3" ||
					paralimpar.substr(cont,1)=="4" ||
					paralimpar.substr(cont,1)=="5" ||
					paralimpar.substr(cont,1)=="6" ||
					paralimpar.substr(cont,1)=="7" ||
					paralimpar.substr(cont,1)=="8" ||
					paralimpar.substr(cont,1)=="9" ||
					paralimpar.substr(cont,1)=="0"
					){
					limpado = limpado+paralimpar.substr(cont,1);
					}
			cont++
			}while (cont <= algo.value.length);		
			algo.value=limpado;
			limpo.innerHTML=limpado;
}

function formatacep(){
	var cep=document.getElementById("cep");

			limpacep=new String(cep.value);
			limpado="";
			let cont=0;
			do{
				
				if(
					limpacep.substr(cont,1)=="1" ||
					limpacep.substr(cont,1)=="2" ||
					limpacep.substr(cont,1)=="3" ||
					limpacep.substr(cont,1)=="4" ||
					limpacep.substr(cont,1)=="5" ||
					limpacep.substr(cont,1)=="6" ||
					limpacep.substr(cont,1)=="7" ||
					limpacep.substr(cont,1)=="8" ||
					limpacep.substr(cont,1)=="9" ||
					limpacep.substr(cont,1)=="0"
					){
					limpado = limpado+limpacep.substr(cont,1);
					}
			cont++
			}while (cont <= cep.value.length);		
			cep.value=limpado;
	formatado="";
	cont=0;
	if(cep.value.length <= 2){
	formatado=cep.value.substr(0,2);
	}
	if(cep.value.length > 2 && cep.value.length <= 5  ){
	formatado=cep.value.substr(0,2);
	formatado = formatado+ "."
	formatado=formatado +cep.value.substr(2,3);
	}
	if(cep.value.length > 5 ){
	formatado=cep.value.substr(0,2);
	formatado = formatado+ "."
	formatado=formatado +cep.value.substr(2,3);
	formatado = formatado+ "-"
	formatado=formatado +cep.value.substr(5,3);
	}
	cep.value=formatado;
	
}

