var nomes = new Array();
var passnha = new Array();
var sorteado = new Array();
var excluido = new Array();
var add =1;
function add5(){
	if (add){
	nomes.push("pedro");
	passnha.push("123");
	nomes.push("pedro2");
	passnha.push("1234");
	nomes.push("pedro3");
	passnha.push("12345");
	nomes.push("pedro4");
	passnha.push("123456");
	nomes.push("pedro5");
	passnha.push("1234567");
	add=0;
	}
}

function adiciona(){
	if(document.getElementById("nome").value=="" || document.getElementById("senword").value==""){
		console.log("dfsfs");
		document.getElementById("erro").innerHTML = "o nome e/ou senha nao podem estar em branco";
	}else{
		nomes.push(document.getElementById("nome").value);
		passnha.push(document.getElementById("senword").value);
		document.getElementById("erro").innerHTML = "";
		console.log(passnha);
	}
}

function consultar(){

	if(document.getElementById("connome").value==""){
		document.getElementById("conerro").innerHTML = "digite um nome"
	}else{
		num = nomes.indexOf(document.getElementById("connome").value);
		if (document.getElementById("consenword").value == passnha[num]){
			document.getElementById("conerro").innerHTML = "voce tirou: " + nomes[sorteado[num]] + " no amigo oculto";
		}else{
			document.getElementById("conerro").innerHTML = "senha invalidos";
		}
	
	}
}

function gerarSorteio(){
	for (i=0; i<nomes.length;i-=-1){
		excluido[i] = false;
	}
	for ( var i=0 ; i<nomes.length ; i++){
		var num = sortear();
		console.log(num);
		while(i==num || excluido[num] == true){
			if ( i == nomes.length - 1 && excluido[i]!=true){
				alert("erro, sorteie novamente");
				return;
			}
			num = sortear();
			console.log("tentativa nova "+num);
		}
		sorteado[i]= num;
		console.log(sorteado[i]);
		excluido[num] = true;
		
	}
	for (i=0; i<nomes.length;i-=-1){
		console.log("nome: "+nomes[i]);
		console.log("senha: "+passnha[i]);
		console.log("tirou: "+nomes[sorteado[i]]); 
	}
}


function sortear(){
	return Math.floor(Math.random() * nomes.length);	
}