function limpar(){
			var algo=document.getElementById("algo");
			var limpo=document.getElementById("limpo");
			penis=new String(algo.value);
			limpado="";
			let cont=0;
			do{
				
				if(
					penis.substr(cont,1)=="1" ||
					penis.substr(cont,1)=="2" ||
					penis.substr(cont,1)=="3" ||
					penis.substr(cont,1)=="4" ||
					penis.substr(cont,1)=="5" ||
					penis.substr(cont,1)=="6" ||
					penis.substr(cont,1)=="7" ||
					penis.substr(cont,1)=="8" ||
					penis.substr(cont,1)=="9" ||
					penis.substr(cont,1)=="0"
					){
					limpado = limpado+penis.substr(cont,1);
					}
			cont++
			}while (cont <= algo.value.length);		
			algo.value=limpado;
			limpo.innerHTML=limpado;
}

function formatacep(){
	var cep=document.getElementById("cep");

			penis2=new String(cep.value);
			limpado="";
			let cont=0;
			do{
				
				if(
					penis2.substr(cont,1)=="1" ||
					penis2.substr(cont,1)=="2" ||
					penis2.substr(cont,1)=="3" ||
					penis2.substr(cont,1)=="4" ||
					penis2.substr(cont,1)=="5" ||
					penis2.substr(cont,1)=="6" ||
					penis2.substr(cont,1)=="7" ||
					penis2.substr(cont,1)=="8" ||
					penis2.substr(cont,1)=="9" ||
					penis2.substr(cont,1)=="0"
					){
					limpado = limpado+penis2.substr(cont,1);
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

