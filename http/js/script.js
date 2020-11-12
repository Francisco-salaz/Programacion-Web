let img = document.getElementById('imagen');
let parra = ['primera','segunda','tercera','cuarta','quinta','sexta','septima','octava','novena'];
let lecturas = ['1','2','3','4','5','6','7','8','9','10'];
let btnBack = document.getElementById('btn-back');
let btnNext = document.getElementById('btn-next');
let btnMute = document.getElementById('btn-mute');
let btnRepeat = document.getElementById('btn-repeat');
let btnPause = document.getElementById('btn-pause');
btnBack.style.display = 'none';
let i=null;
let pagina = null;
var lectura = document.getElementById(lecturas[0]);


function repro(){
 	lectura.play();
 	btnPause.innerHTML = 'Pause';

}

img.addEventListener('mouseup',repro);

function siguiente(){
	if(i==null){
		i=0;
		btnBack.style.display = 'block';
		btnNext.style.display = 'block';
		img.style.display = 'none';	
		pagina = document.getElementById(parra[i]);
		pagina.style.display = 'block';
		btnPause.innerHTML = 'Pause';
		lectura.pause();
		lectura = document.getElementById(lecturas[i+1]);
		lectura.currentTime=0;		
		lectura.play();
		/*i=i+1*/;
	}
	else{
		i=i+1;
		if(i===8){
		btnNext.style.display = 'none';}

		pagina.style.display = 'none';
		pagina = document.getElementById(parra[i]);
		pagina.style.display = 'block'; 
		btnPause.innerHTML = 'Pause';
		lectura.pause();
		lectura = document.getElementById(lecturas[i+1]);
		lectura.currentTime=0;
		lectura.play();
		   }
	
} 
btnNext.addEventListener('click',siguiente);

function atras(){
	if(i===0){
		i=null;
		btnBack.style.display = 'none';
		pagina.style.display = 'none';
		img.style.display = 'block';
		btnPause.innerHTML = 'Pause';		
		lectura.pause();
		lectura = document.getElementById(lecturas[0]);
		lectura.currentTime=0;
		lectura.play();
	}else{	
		i=i-1;	
		if(i===7){
			btnNext.style.display = 'block';
		}
		pagina.style.display = 'none';
		pagina = document.getElementById(parra[i]);
		pagina.style.display = 'block';
		btnPause.innerHTML = 'Pause';		
		lectura.pause();
		lectura = document.getElementById(lecturas[i+1]);
		lectura.currentTime=0;
		lectura.play();
		
	}
	
}
btnBack.addEventListener('click',atras);

function mute(){
  if(lectura.muted===false){
   lectura.muted = true;}
   else{
   	lectura.muted = false;  	
   }
}
btnMute.addEventListener('click',mute);

function repetir(){
	lectura.currentTime = 0;}

	btnRepeat.addEventListener('click',repetir)

function pause(){
	if(lectura.paused===false){
   lectura.pause();
   btnPause.innerHTML = 'Play';
}
   else{
   lectura.play();  
   btnPause.innerHTML = 'Pause'; 
   }
}
	btnPause.addEventListener('click',pause);








