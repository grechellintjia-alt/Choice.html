document.getElementById('tampilkanBTN').onclick=function(){
    var nama=document.getElementById('nama').value.trim();
	if (nama===""){
		nama="(Nama harus Di isi)";
	}
	 var nama=document.getElementById('kelas').value.trim();
	if (kelas===""){
		kelas="(Kelas harus Di isi)";
	}
	var umur ="";
	var radios=document.getElementsByName('umur');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
		    umur=radios[i].value;
		break;
		}
	}
	if (umur===""){
		umur=" (Mohon Masukkan Umur)";
	}
	var gender ="";
	var radios=document.getElementsByName('gender');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
		    gender=radios[i].value;
		break;
		}
	}
	if (gender===""){
		gender=" (Mohon Masukkan Jenis Kelamin)";
	}
	var Tingkatan="";
	var radios=document.getElementsByName('Tingkatan');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
		    tingkatan=radios[i].value;
		break;
		}
	}
	if (tingkatan===""){
		tingkatan=" (Mohon Masukkan Tingkatan)";
	}
	var ok=document.getElementById('setuju').checked ? "ya":"tidak"
	var show="Nama:" + nama + "\nUmur" + umur +"\nJenis Kelamin" + gender +"\nTingkatan" + tingkatan +"\nSetuju" + ok;
	document.getElementById('hasil').innerText=hasilText;
	
};

