hora_inic = Number(prompt("¿A que hora tomo su medicamento? (24 horas)"));
hora_frec = Number(prompt("¿Con que frecuencia toma su medicamento?"));
toma = hora_inic 

for (i = 1; i<=12;) {
    if ( toma>= 24) {
        hora= -1*(24-toma) 
        toma= hora
        if (toma = 0){
            toma= 0
        }
        console.log("toma ", i, ": ", toma, " horas");
        i= i+1
        toma=toma+hora_frec
    }
    else {
        console.log("toma ", i, ": ", toma, " horas");
        i= i+1
        toma=toma+hora_frec
    }
}

