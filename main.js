alert("Bienvenido a nuestra página de películas y recomendaciones!");

function preguntaInicial(){
    let preguntaGenero = parseInt(prompt("Qué género desea ver hoy?\n1- Terror\n2- Ciencia ficción\n3- Romance\n4- Comedia\n5- Fantasía."))
    return preguntaGenero;
}

let seguirEligiendo; 

do {
    let peliculasElegidas = preguntaInicial();
    switch (peliculasElegidas) {
        case 1: let peliculasTerror = parseInt(prompt("El género que querés ver hoy es 'Terror'.\nQué película te gustaría conocer?\n1- Smile\n2- La huerfana\n3- Psicosis"));
            if (peliculasTerror == 1){
                alert("Elegiste 'Smile'.\nResumen:\n\nTras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado.\n\nDirector: Parker Finn.\nAño de estreno: 2022.");
            } else if (peliculasTerror == 2){
                alert("Elegiste 'La huerfana'.\nResumen:\n\nDevastados por la pérdida de su bebé nonato, Kate y John deciden adoptar una niña. En el orfanato, ambos se enamoran de una pequeña llamada Esther, y muy pronto la pareja lleva a su nueva hija a casa. Pero cuando se desarrollan una serie de eventos misteriosos, Kate empieza a sospechar que algo endemoniado se oculta detrás del rostro angelical de la niña.\n\nDirector: Jaume Collet-Serra.\nAño de estreno: 2009.");
            } else if (peliculasTerror == 3){
                alert("Elegiste 'Psicosis'.\nResumen:\n\n¿Qué podríamos esperar de alguien catalogado como el 'maestro del suspense' si no una obra maestra como 'Psicosis'? En ella, el bueno de 'Hitch', ademas de sentar —discutiblemente— las bases del slasher, destrozó los nervios del público de principios de los sesenta con uno de los giros de guión más celebrados de la historia, ejecutado en una escena que continúa marcada a fuego en el imaginario colectivo por culpa de un cuchillo, una ducha y una malograda mujer.\n\nDirector: Alfred Hitchcock.\nAño de estreno: 1961.");
            }

            seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");
            break;

        case 2: let peliculasCienciaFiccion = parseInt(prompt("El género que querés ver hoy es 'Ciencia ficción'.\nQué película te gustaría conocer?\n1- Moonfall\n2- Duna\n3- Venom"));
            if (peliculasCienciaFiccion == 1){
                alert("Elegiste 'Moonfall'.\nResumen:\n\nEl mundo se enfrenta a la posibilidad de la extinción porque una fuerza desconocida empuja a la luna de su órbita rumbo a la Tierra. Un equipo de astronautas asume la misión de evitar el apocalipsis.\n\nDirector: Roland Emmerich.\nAño de estreno: 2022.");
            } else if (peliculasCienciaFiccion == 2){
                alert("Elegiste 'Duna'.\nResumen:\n\nArrakis, también denominado 'Dune', se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.\n\nDirector: Denis Villeneuve.\nAño de estreno: 2021.");
            } else if (peliculasCienciaFiccion == 3){
                alert("Elegiste 'Venom'.\nResumen:\n\nEl periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.\n\nDirector: Ruben Fleischer.\nAño de estreno: 2018.");
            }
            seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");

            break;
        case 3: let peliculasRomance = parseInt(prompt("El género que querés ver hoy es 'Romance'.\nQué película te gustaría conocer?\n1- A dos metros de ti\n2- Llamame por tu nombre\n3- Secreto en la montaña"));
            if (peliculasRomance == 1){
                alert("Elegiste 'A dos metros de ti'.\nResumen:\n\nStella, de 17 años, está ingresada en un hospital porque padece fibrosis quística. Su monótona existencia cambia cuando llega Will, un adolescente con la misma dolencia. Sin embargo, las normas del hospital prohíben el contacto entre ellos.\n\nDirector: Justin Baldoni.\nAño de estreno: 2019.");
            } else if (peliculasRomance == 2){
                alert("Elegiste 'Llamame por tu nombre'.\nResumen:\n\nEn Italia, en la década de 1980, en medio del esplendor del verano, Elio y Oliver descubren la embriagadora belleza de un deseo naciente que va a alterar sus vidas para siempre.\n\nDirector: Luca Guadagnino.\nAño de estreno: 2017.");
            } else if (peliculasRomance == 3){
                alert("Elegiste 'Secreto en la montaña'.\nResumen:\n\nDos vaqueros se conocen mientras esperan ser contratados por el ranchero Joe Aguirre. Cuando su jefe los envía a cuidar ganado a la montaña Brokeback, entre ambos surge un sentimiento especial que deriva en una relación íntima.\n\nDirector: Ang Lee.\nAño de estreno: 2006.");
            }

            seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");
            
            break;
            
            case 4: let peliculasComedia = parseInt(prompt("El género que querés ver hoy es 'Comedia'.\n¿Qué película te gustaría conocer?\n\n1- Super cool\n2- Una noche en el museo\n3- Paul"));
                if(peliculasComedia == 1){
                    alert("Elegiste 'Super cool'.\nResumen:\n\nSeth (Jonah Hill) y Evan (Michael Cera), dos estudiantes co-dependientes de preparatoria, tienen grandes esperanzas en su fiesta de graduación: los jóvenes se sienten retados por la sociedad y planean divertirse en grande y conseguir chicas hermosas para finalmente poder integrarse con sus compañeros.\n\nDirector: Greg Mottola.\nAño de estreno: 2007.");
                } else if (peliculasComedia == 2){
                    alert("Elegiste 'Una noche en el museo'.\nResumen:\n\nLarry Daley acepta un trabajo de guardia de seguridad en un museo en el que ocurren cosas extraordinarias: gladiadores, guerreros y toda clase de personajes épicos empiezan a cobrar vida después del cierre del edificio. Para resolver el caos, Larry le pide consejo a la figura de cera del Presidente Teddy Roosevelt, que intentará ayudarlo.\n\nDirector: Shawn Levy.\nAño de estreno: 2006.");
                } else if (peliculasComedia == 3){
                    alert("Elegiste 'Paul'.\nResumen:\n\nDurante los últimos 60 años, un gracioso extraterrestre llamado Paul ha vivido en una base militar ultrasecreta en la tierra de los ovnis en Estados Unidos. Cuando Paul decide que ha tenido suficiente de la Tierra, escapa y se sube a una casa rodante manejada por dos nerds británicos amantes de la ciencia ficción llamados Graeme y Clive. Graeme y Clive idean un plan alocado para ayudarle a Paul a regresar a su nave espacial.\n\nDirector: Greg Mottola.\nAño de estreno: 2011.");
                }
                seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");
            
                break;
            
            case 5: let peliculasFantasia = parseInt(prompt("El género que querés ver hoy es 'Fantasia'.\n¿Qué película te gustaría conocer?\n\n1- Coraline y la puerta secreta\n2- Frankenweenie\n3- Alicia en el país de las maravillas"));
                if(peliculasFantasia == 1){
                    alert("Elegiste 'Coraline y la puerta secreta'.\nResumen:\n\nUna niña descubre una puerta secreta en su nueva casa y entra a una realidad alterna que la refleja fielmente de muchas formas.\n\nDirector: Henry Selick.\nAño de estreno: 2009.");
                } else if (peliculasFantasia == 2){
                    alert("Elegiste 'Frankenweenie'.\nResumen:\n\nEl experimento científico que lleva a cabo el pequeño Víctor Frankenstein para hacer resucitar su adorado Sparky le obligará a afrontar terribles situaciones con imprevisibles consecuencias.\n\nDirector: Tim Burton.\nAño de estreno: 2012.");
                } else if (peliculasFantasia == 3){
                    alert("Elegiste 'Alicia en el país de las maravillas'.\nResumen:\n\nAlicia, ahora una joven de 19 años de edad, regresa al País de las Maravillas para encontrar su verdadero destino y terminar con el gobierno de terror de la malvada reina Roja.\n\nDirector: Tim Burton.\nAño de estreno: 1951.");
                }
                seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");
            
                break;

        default: alert("Asegúrese de ingresar el número correspondiente al género.");
            seguirEligiendo = prompt("Desea volver al inicio de 'géneros' y seguir eligiendo? Aceptar / Cancelar");
            break;
    }

} while (seguirEligiendo == 'Aceptar' || seguirEligiendo == 'aceptar' || seguirEligiendo == 'ACEPTAR');
    alert("Gracias por elegirnos.");

