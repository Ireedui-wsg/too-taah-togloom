// for loop -> davtalt -> neg codiig olon dahin ashiglahad
// for(hedess_ehleh; hed_hurtel, nemegdeh/hasagdah ){}
for(var i=1; i<=10;i++){
	console.log(i+" bat");
}
// i=1 -> i<=10 -> true => 1bat -> i++
// ...
// i=11 -> 11<=10 -> false
for(var i=10; i>=1;i--){
	console.log(i);
}
for(var i=1; i<=20;i++){
	if(i%2==0){
		console.log("tegsh "+i);
	}
}
for(var i=1; i<=100;i++){
	if(i%3==0 && i%5==0){
		console.log("huvaagdana "+i)
	}
}
var too=8;
for(var i=1; i<=10;i++){
	//console.log("5 X "+i+" = "+5*i);
	console.log(too+' X '+i+' = '+too*i)
}
var niilber = 0;
for(var i=1; i<=10;i++){
	niilber = niilber+i;
}
console.log(niilber);
var nilber = 1;
for(var i=1; i<=10;i++){
	nilber = nilber*i
}
console.log(nilber)
var random = Math.floor(Math.random()*10)+1;
console.log(random);
// prompt garaas oruulna
for(var i=1; i<=3; i++){
	var too= +prompt("1-10 hoorond toog taana uu");
	if(random==too){
		alert("Ta "+ i + " dahi udaagaar hojloo")
		alert("zov");
		break;
	}else if(too>10 || too>0){
		alert("Buruu utga oruullaa")
	}else if(too>random){
		alert("ih bna");
	}else if(too<random){
		alert("bga bna")
	}else{
		alert("buruu");
	}
	if(i==3){
		alert("Tanii ami duuslaa");
	}		
	
}

// 1
// 2
// 3
// *
// 5
// 6
// !
// 8
// &
// 10