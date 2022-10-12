hora_inic = Number(prompt("¿A que hora tomo su medicamento? (24 horas)"));
hora_frec = Number(prompt("¿Con que frecuencia toma su medicamento?"));
toma = hora_inic + hora_frec

for (i = 0; i<=12;) {
    if ( toma> 24) {
        hora= -1*(24-toma) 
        toma= hora
        console.log("toma ", i, ": ", toma, " horas");
        i= i+1
    }
    else {
        toma=toma
        console.log("toma ", i, ": ", toma, " horas");
        i= i+1
    }
}