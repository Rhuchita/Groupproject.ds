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
	var k=document.getElementById("key").value;
	var insert=document.getElementById("text").value;
	var str=insert.split("");
	var answer=[];
	var b="";
	var cas;
	var i;
	for (i=0; i<str.length; i++){
		b=str[i];
		if (isAlpha(b)==0 && Number.isInteger(b)==0){
			answer.push(b);
		}
		else if (Number.isInteger(b)==1) {
			var dig;
			dig=b-k%2;
			answer.push(dig);
		} 
		else {
			var temp=b.toString();
			var c=temp.charCodeAt(b);
			var en=c+k*2;
			if (c>64 && c<91 && en>90){
				en=en-26;
				cas=String.fromCharCode(en);
				answer.push(cas);
			}
			else if(c>96 && c<123 && en>122){
				en=en-26;
				cas=String.fromCharCode(en);
				answer.push(cas);
			}
			else{
				cas=String.fromCharCode(en);
				answer.push(cas);
			}
		}
	}
	console.log(answer);
	document.getElementById("output").innerHTML=answer.join("");
}

function decryption(){
	var k=document.getElementById("key").value;
	var insert=document.getElementById("text").value;
	var str=insert.split("");
	var answer=[];
	var b="";
	var cas;
	var i;
	for (i=0; i<str.length; i++){
		b=str[i];
		if (isAlpha(b)==0 && Number.isInteger(b)==0){
			answer.push(b);
		}
		else if (Number.isInteger(b)==1) {
			var dig;
			dig=b+k%2;
			answer.push(dig);
		} 
		else {
			var temp=b.toString();
			var c=temp.charCodeAt(b);
			var en=c-k*2;
			if (c>=65 && c<=90 && en<65){
				en=en+26;
				cas=String.fromCharCode(en);
				answer.push(cas);
			}

			else if(c>96 && c<123 && en<97){
				en=en+26;
				cas=String.fromCharCode(en);
				answer.push(cas);
			}
			else{
				cas=String.fromCharCode(en);
				answer.push(cas);
			}
		}
	}
	console.log(answer);
	document.getElementById("output").innerHTML=answer.join("");
}