function recogeDatos(evento) {
    evento.preventDefault();
    //obteniendo datos desde formulario
    let nombreProyecto = document.querySelector("#respuesta-nombre-proyecto").value;
    let propuestaValor = document.querySelector("#respuesta-propuesta1").value;

    let segmentacion1 = document.querySelector("#respuesta-segmentacion1").value;
    let segmentacion2 = document.querySelector("#respuesta-segmentacion2").value;

    let canales1 = document.querySelector("#respuesta-canes1").value;
    let canales2 = document.querySelector("#respuesta-canes2").value;
    let canales3 = document.querySelector("#respuesta-canes3").value;
    let canales4 = document.querySelector("#respuesta-canes4").value;
    let canales5 = document.querySelector("#respuesta-canes5").value;

    let relacion1 = document.querySelector("#respuesta-relacion-clientes1").value;
    let relacion2 = document.querySelector("#respuesta-relacion-clientes2").value;
    let relacion3 = document.querySelector("#respuesta-relacion-clientes3").value;
    let relacion4 = document.querySelector("#respuesta-relacion-clientes4").value;
    let relacion5 = document.querySelector("#respuesta-relacion-clientes5").value;



    let ingresos1 = document.querySelector("#respuesta-ingresos1").value;
    let ingresos2 = document.querySelector("#respuesta-ingresos2").value;
    let ingresos3 = document.querySelector("#respuesta-ingresos3").value;
    let ingresos4 = document.querySelector("#respuesta-ingresos4").value;
    let ingresos5 = document.querySelector("#respuesta-ingresos5").value;

    let recursos1 = document.querySelector("#respuesta-recursos1").value;
    let recursos2 = document.querySelector("#respuesta-recursos2").value;
    let recursos3 = document.querySelector("#respuesta-recursos3").value;
    let recursos4 = document.querySelector("#respuesta-recursos4").value;
    let recursos5 = document.querySelector("#respuesta-recursos5").value;

    let actividades1 = document.querySelector("#respuesta-actividades1").value;
    let actividades2 = document.querySelector("#respuesta-actividades2").value;
    let actividades3 = document.querySelector("#respuesta-actividades3").value;
    let actividades4 = document.querySelector("#respuesta-actividades4").value;
    let actividades5 = document.querySelector("#respuesta-actividades5").value;



    let colaboradores1 = document.querySelector("#respuesta-colaboradores1").value;
    let colaboradores2 = document.querySelector("#respuesta-colaboradores2").value;
    let colaboradores3 = document.querySelector("#respuesta-colaboradores3").value;
    let colaboradores4 = document.querySelector("#respuesta-colaboradores4").value;
    let colaboradores5 = document.querySelector("#respuesta-colaboradores5").value;

    let costes1 = document.querySelector("#respuesta-costes1").value;
    let costes2 = document.querySelector("#respuesta-costes2").value;
    let costes3 = document.querySelector("#respuesta-costes3").value;
    let costes4 = document.querySelector("#respuesta-costes4").value;
    let costes5 = document.querySelector("#respuesta-costes5").value;










    // //obteneidno lugar en canvas dato de formulario
    let canvasNombreproyecto = document.querySelector('#nombre-del-proyecto');
    let canvaPropuesta = document.querySelector("#propuesta-de-valor1");

    let canvasSegmentacion1 = document.querySelector("#segmentacion1");
    let canvasSegmentacion2 = document.querySelector("#segmentacion2");

    let canvasCanales1 = document.querySelector("#canales1");
    let canvasCanales2 = document.querySelector("#canales2");
    let canvasCanales3 = document.querySelector("#canales3");
    let canvasCanales4 = document.querySelector("#canales4");
    let canvasCanales5 = document.querySelector("#canales5");

    let canvasRelacion1 = document.querySelector("#relacion-clientes1");
    let canvasRelacion2 = document.querySelector("#relacion-clientes2");
    let canvasRelacion3 = document.querySelector("#relacion-clientes3");
    let canvasRelacion4 = document.querySelector("#relacion-clientes4");
    let canvasRelacion5 = document.querySelector("#relacion-clientes5");


    let canvasIngresos1 = document.querySelector("#fuente-ingresos1");
    let canvasIngresos2 = document.querySelector("#fuente-ingresos2");
    let canvasIngresos3 = document.querySelector("#fuente-ingresos3");
    let canvasIngresos4 = document.querySelector("#fuente-ingresos4");
    let canvasIngresos5 = document.querySelector("#fuente-ingresos5");



    let canvasRecursos1 = document.querySelector("#recursos1");
    let canvasRecursos2 = document.querySelector("#recursos2");
    let canvasRecursos3 = document.querySelector("#recursos3");
    let canvasRecursos4 = document.querySelector("#recursos4");
    let canvasRecursos5 = document.querySelector("#recursos5");




    let canvasActividades1 = document.querySelector("#actividades1");
    let canvasActividades2 = document.querySelector("#actividades2");
    let canvasActividades3 = document.querySelector("#actividades3");
    let canvasActividades4 = document.querySelector("#actividades4");
    let canvasActividades5 = document.querySelector("#actividades5");

    let canvasColaboradores1 = document.querySelector("#colaboradores1");
    let canvasColaboradores2 = document.querySelector("#colaboradores2");
    let canvasColaboradores3 = document.querySelector("#colaboradores3");
    let canvasColaboradores4 = document.querySelector("#colaboradores4");
    let canvasColaboradores5 = document.querySelector("#colaboradores5");

    let canvasCostes1 = document.querySelector("#costes1");
    let canvasCostes2 = document.querySelector("#costes2");
    let canvasCostes3 = document.querySelector("#costes3");
    let canvasCostes4 = document.querySelector("#costes4");
    let canvasCostes5 = document.querySelector("#costes5");



    //inyectando el dato en el lugar de canvas
    canvasNombreproyecto.innerHTML =nombreProyecto;
    
    canvaPropuesta.innerHTML = propuestaValor;

    canvasSegmentacion1.innerHTML = segmentacion1;
    canvasSegmentacion2.innerHTML = segmentacion2;

    canvasCanales1.innerHTML = canales1;
    canvasCanales2.innerHTML = canales2;
    canvasCanales3.innerHTML = canales3;
    canvasCanales4.innerHTML = canales4;
    canvasCanales5.innerHTML = canales5;

    canvasRelacion1.innerHTML = relacion1;
    canvasRelacion2.innerHTML = relacion2;
    canvasRelacion3.innerHTML = relacion3;
    canvasRelacion4.innerHTML = relacion4;
    canvasRelacion5.innerHTML = relacion5;


    canvasIngresos1.innerHTML = ingresos1;
    canvasIngresos2.innerHTML = ingresos2;
    canvasIngresos3.innerHTML = ingresos3;
    canvasIngresos4.innerHTML = ingresos4;
    canvasIngresos5.innerHTML = ingresos5;

    canvasRecursos1.innerHTML = recursos1;
    canvasRecursos2.innerHTML = recursos2;
    canvasRecursos3.innerHTML = recursos3;
    canvasRecursos4.innerHTML = recursos4;
    canvasRecursos5.innerHTML = recursos5;


    canvasActividades1.innerHTML = actividades1;
    canvasActividades2.innerHTML = actividades2;
    canvasActividades3.innerHTML = actividades3;
    canvasActividades4.innerHTML = actividades4;
    canvasActividades5.innerHTML = actividades5;

    canvasColaboradores1.innerHTML = colaboradores1;
    canvasColaboradores2.innerHTML = colaboradores2;
    canvasColaboradores3.innerHTML = colaboradores3;
    canvasColaboradores4.innerHTML = colaboradores4;
    canvasColaboradores5.innerHTML = colaboradores5;

    canvasCostes1.innerHTML = costes1;
    canvasCostes2.innerHTML = costes2;
    canvasCostes3.innerHTML = costes3;
    canvasCostes4.innerHTML = costes4;
    canvasCostes5.innerHTML = costes5;

}



let miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);