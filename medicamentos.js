hora_inic = Number(prompt("¿A que hora tomo su medicamento? (24 horas)"));
hora_frec = Number(prompt("¿Con que frecuencia toma su medicamento?"));
toma= hora_inic
for (i=1; i<=12; i++) {
   
    if ( toma>= 24) {
        hora= -1*(24-toma) 
        toma= hora
        console.log("toma ", i, ": ", toma, " horas");
    }
    else {
        if (i=1) {
            toma=toma
        }
        else{
            toma=toma+hora_frec 
        
        }
        console.log("toma ", i, ": ", toma, " horas");
    }

}