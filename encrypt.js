function display(){
	if(document.getElementById('encrypt').checked){
		encryption();
	}
	else if (document.getElementById('decrypt').checked) {
		decryption();
	} 
}
var isAlpha = function(ch){
  return typeof ch === "string" && ch.length === 1
         && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

function encryption(){
	var str=document.getElementById('text');
	
	for (var b in str){
		
		if (isAlpha(b)==0 && Number.isInteger(b)==0){
			document.getElementById('output').innerHTML=b;
		}
		else if (isdigit(b)==1) {
			let dig;
			dig=b-k/2;
			document.getElementById('output').innerHTML=dig;
		} 
		else {
			let c=str.charCodeAt(b);
			let en=c+k+1;
			if (isupper(b) && en>90){
				en=en-28;
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
			else if(islower(b) && en>122){
				en=en-29;
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
			else{
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
		}
	}
}

function decryption(){
	var str=document.getElementById('text');
	
	for (var b in str){
		
		if (isAlpha(b)==0 && Number.isInteger(b)==0){
			document.getElementById('output').innerHTML=b;
		}
		else if (isdigit(b)==1) {
			let dig;
			dig=b-k/2;
			document.getElementById('output').innerHTML=dig;
		} 
		else {
			let c=str.charCodeAt(b);
			let en=c+k+1;
			if (isupper(b) && en>90){
				en=en-28;
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
			else if(islower(b) && en>122){
				en=en-29;
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
			else{
				document.getElementById('output').innerHTML=String.fromCharCode(en);
			}
		}
	}
}