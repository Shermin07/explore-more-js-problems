// if the number division by 3 then it shows foo//
for(i=0; i<=20; i++){
    if (i % 3 === 0){
        console.log("foo")
    }
    else{
        console.log(i);
    }
}
//division by 5 then it shows bar
for(i=0; i<=30; i++){
    if (i % 5 === 0){
        console.log("bar")
    }
    else{
        console.log(i);
    }
}
// is division by both 3 or 5 then shows foobar//

for(i=0; i<=60; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("foobar")
    }
    else if (i % 3 === 0){
        console.log("foo")
    }
    else if(i % 5 === 0){
        console.log("bar")
    }
    else{
        console.log(i);
    }
}