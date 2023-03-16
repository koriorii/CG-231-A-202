
/**
 * Geometria: crea un objeto tTHREE.Geometry y lo retorna
 * ENTRADAS: vertices= Arreglo de vertices (Arreglo de arreglo de enteros)
 * SALIDA: geom= objeto THREE.Geometry generado a partir del arreglo vertices
 */


function Geometria(vertices){
    geom = new THREE.Geometry();
    for (let i = 0; i < vertices.length; ++i) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
}


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


    function init() {

        // Escena
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        var size = 700;
        var arrowSize = 40;
        var divisions = 20;
        var origin = new THREE.Vector3( 0, 0, 0 );
        var x = new THREE.Vector3( 1, 0, 0 );
        var y = new THREE.Vector3( 0, 1, 0 );
        var z = new THREE.Vector3( 0, 0, 1 );
        var color2 = new THREE.Color( 0x333333 );  /// 0x333333
        var colorR = new THREE.Color( 0xAA0000 );
        var colorG = new THREE.Color( 0x00AA00 );
        var colorB = new THREE.Color( 0x0000AA );

        //Crear la Grilla
        var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

        //Flechas
        var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
        var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
        var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
            
        //Cámara
        camera.position.x = 000;
        camera.position.y = 100;
        camera.position.z = 400;
        camera.lookAt(scene.position);

        // Colores
        color=[{color:0xff0000},{color:0x00ff00},{color:0x0000ff}];

        //Geometria para las piramides
        lado=40; //lado de la base de la piramide
        h=50;   //base de la piramide
        [v1,v2,v3,v4,v5]= [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
        vertices= [v1,v2,v3,v4,v5,v1,v4,v3,v5,v2]
       //materiales para las primanides
        material=[];
        for(i=0; i<2; i++)
            material.push(new THREE.ParticleBasicMaterial(color[i]));
            geom=Geometria(vertices);
        //Figuras para piramides
        fig=[];
        for (i=0; i<2; i++)
            fig.push(new THREE.Line(geom, material[i]));

        // En el documento HTML
        document.body.appendChild(renderer.domElement);

        var angRota = 45;
        var angRota2 = 60;
        for (let i = 1; i < 2; i++) {
            fig[i].applyMatrix(Traslacion([2*lado, 2*lado, 0]));
            fig[i].applyMatrix(Escalado([1.5, 1.5, 1.5]));
            fig[i].applyMatrix(RotacionY(angRota));
            fig[i].applyMatrix(RotacionX(angRota));
            fig[i].applyMatrix(RotacionZ(angRota2));
            
          }

          
        // Agregar elementos al escenario
        scene.add(gridHelperXZ);
        scene.add(arrowX);  
        scene.add(arrowY);  
        scene.add(arrowZ);
        for(i=0; i<2; i++)
            scene.add(fig[i]);
        renderer.render(scene, camera);
    }

    init();  // otra forma: window.onload = init;