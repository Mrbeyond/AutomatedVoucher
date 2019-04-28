var  fold=[], sub=[], bal=0;
// fold.push([]);
// fold.push([]);
// fold[1]+=12345;
// fold.push([12345678]);
function gene() {

for (var i = 0; i <gen.value; i++) {
	var take="", hyp=1;
	for (var j = 1; j<=16; j++) {
		take+=Math.floor(Math.random()*10);
		if (j%4===0){ 
		if(hyp<4){take+="-"; hyp++;} } 	}
		sub=[[take],"Valid",genty.value];
		fold.push(sub);
	console.log(fold);}  }

function aval(){
showval.innerHTML="";	
for (var i=0; i<fold.length; i++) {
showval.innerHTML +=fold[i][0] +" : "+fold[i][1] +" : "+fold[i][2]+"<br>";

} } 

function load(){
for(i=0;i<fold.length;i++){
 if(fold[i][0]==lodput.value && fold[i][1]=="Valid"){
 	fold[i][1]="Used";
 	loadstat.innerHTML= "Your recharge of "+ fold[i][2]+ " was successful!";
 	bal= bal+Number(fold[i][2]);
  console.log("wow!" + i); break;}

  
   else{console.log("zero!");} 
    }