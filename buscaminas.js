let minas = [];
$(document).ready(function() {
    //FUNCIÓN PARA REINICIAR EL BLOQUE DE TEXTO INFORMATIVO
    function restartInfoblock(){
        $("#infoP").text("");
        $("#infoP").css("color", "black");
    }
    //FUNCIÓN PARA COMPROBAR EL TAMAÑO DE LOS ELEMENTOS DE LA TABLA
    function comprobarTabla(size, name){
            if(size < 2){
                $("#infoP").append("El tamaño introducido de " + name + " es inválido. Por favor, introduzca un valor numérico mayor a 2.</br>");
                $("#infoP").css("color", "#9e2a2a");
                return false;
            }
            return true;        
    }
    //FUNCION PARA INSERTAR APARTADOS DE LA TABLA
    function appendTable(sizeY, sizeX){
        for(let i = 0; i < sizeY; i++){
            let nuevaFila = $("<tr></tr>");
            for(let x = 0; x < sizeX; x++){
                nuevaFila.append("<td></td>")
            }
            $("#divTablero > table").append(nuevaFila);
        }
    }
    //FUNCION PARA INSERTAR LA TABLA
    function createTable(y,x){
        $("#divTablero").append("<table></table>");
        appendTable(y,x);
    }
    //FUNCION PARA OCULTAR MENU DE CREACIÓN DE LA TABLA
    function hideMenu(){
        $("#start").css("display", "none");
    }
    //INSERTAR POSICIONES VACÍAS empty(e)
    function emptyBox(y,x){
        let fila = [];
        for(let i = 0; i < y; i++){
            for(let j = 0; j < x; j++){
                fila.unshift("e")
            }
            minas.unshift(fila);
            fila = [];
        }
    }
    //CALCULAR MINAS
    function mineCalculator(y,x){
       let mineTotal = Math.ceil(y * x * 0.20);
       return mineTotal; 
    }
    //FUNCION PARA INSERTAR LAS MINAS
    function mineBox(y,x){
        let mineTotal = mineCalculator(y,x);
    }
    //FUNCION PARA INICIALIZAR LA MATRIZ
    function inicializarMatriz(y,x){
        emptyBox(y,x);
        mineBox(y,x);
    }
    //FUNCION PARA ACTIVAR LA CASILLA
     $('#divTablero').on('click','table tr td', function activarCasilla(){
        $(this).css("background-color", "#666666");
     });

    //FUNCION PARA CREAR INICIAR EL JUEGO
    $("#crearT").click(function iniciarJuego(){
        restartInfoblock();
        let filas = $("#filas").val();
        let columnas = $("#columnas").val();
        let comprobacionFilas = comprobarTabla(filas, "filas");
        let comprobacionColumnas = comprobarTabla(columnas, "columnas");
        if(comprobacionFilas && comprobacionColumnas){
            hideMenu(filas,columnas);
            inicializarMatriz(filas,columnas);
            createTable(filas, columnas);
        }
    });
});