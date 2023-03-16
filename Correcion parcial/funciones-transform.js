
/**
 * Traslation: Crea la matriz de traslacon a partir del vector vt
 * Entradas: vt = Vector de traslacion
 * Salida: matrix= Matriz de traslacion genrada aprtir de vt
 */
function Traslacion(vt) {
    var matriz = new THREE.Matrix4();
    matriz.set(1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
    return matriz;
}

/**
* Escalado: Crea la matriz de traslacon a partir del vector vt
* Entradas: vt = Vector de traslacion
* Salida: matrix= Matriz de traslacion genrada aprtir de vt
*/
function Escalado(vt) {
var matrizS = new THREE.Matrix4();
matrizS.set(vt[0], 0, 0, 0,
        0, vt[1], 0, 0,
        0, 0, vt[2], 0,
        0, 0, 0, 1);
return matrizS;
}

//Escalado Real
function EscaladoReal(fig,posini,vs){
    tr = [-posini[0], -posini[1], -posini[2]]; //vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(Escalado(vs));
    fig.applyMatrix(Traslacion(posini));
}


//Rotación en Y
function RotacionY(vt){
    var matrizR = new THREE.Matrix4();
    let rad = vt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
        matrizR.set(cs, 0, sn, 0,
                    0, 1, 0, 0,
                    -sn, 0, cs, 0,
                    0, 0, 0, 1); 
    return matrizR;
}
function RotacionX(vt){
    var matrizR = new THREE.Matrix4();
    let rad = vt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
        matrizR.set(0, 0, 0, 0,
                    0, cs, -sn, 0,
                    sn, 0, cs, 0,
                    0, 0, 0, 1); 
    return matrizR;
}
function RotacionZ(vt){
    var matrizR = new THREE.Matrix4();
    let rad = vt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
        matrizR.set(cs, -sn, 0, 0,
                    sn, cs, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1); 
    return matrizR;
}


function RotacionReal(fig,posini){
    tr = [0, -posini[1], -posini[2]]; //vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(RotacionY(rt));
    fig.applyMatrix(RotacionX(rt));
    fig.applyMatrix(RotacionZ(rt));
    fig.applyMatrix(Traslacion(posini));
    
}
    