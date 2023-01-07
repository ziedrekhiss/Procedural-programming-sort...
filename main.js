// TASK_1

function dot_product(v1, v2) {

    let ps = 0
    
    for (let i = 0; i < 3; i++) {
        ps= ps + v1[i] * v2[i] 
    }

    return ps;

}

const N =2 ; 
var vectors = [] ;

for(var i =1 ; i<=N*2 ;i++){
    var x1 = Number(prompt(`donner x de v ${i}`));
    var y1 = Number(prompt(`donner y de v ${i}`));
    var z1 = Number(prompt(`donner z de v ${i}`));
    var vector = {
    x:x1 ,
    y:y1 , 
    z:z1 , 
    }
    vectors.push(vector) ;
}

for(var j=0 ; j<vectors.length-1 ; j++){
    for(var k=j+1 ; k<vectors.length ; k++){
        if(dot_product(vectors[j],vectors[k])===0){
        console.log(vectors[j],vectors[k] ," are orthogonal" )
    }
}
}


// TASK 2

function insertionSort(tab) {

    for (let i = 1; i < tab.length; i++) {
        
        for (let j = i; j >0; j--) {
            if (tab[j]<tab[j-1]) {
                const aux = tab[j];
                tab[j] = tab[j-1];
                tab[j-1] = aux;
            }
            
        }
        console.log(tab)
    }
    return tab;
}
