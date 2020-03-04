// MarcoPolo (c) 2020 Baltasarq MIT License <baltasarq@gmail.com>

/*
    generado por FI.JS@txtMap, v0.1/ v0.6 20140612
    Tue Mar  3 17:30:54 2020

*/

ctrl.setTitle( "Marco Polo" );
ctrl.setIntro( "<p>Marco Polo vuelve de su viaje a oriente \
                con un encargo del gran Khan. \
                Desgraciadamente, el recibimiento \
                no será tan grato como esperaba...</p>" );
ctrl.setPic( "res/canal.jpg" );
ctrl.setAuthor( "Baltasar &lt;baltasarq@gmail.com&gt;" );
ctrl.setVersion( "2.0 20200303" );

// *** Afueras de Venecia ------------------------------------------------------

const locAfuerasDeVenecia = ctrl.lugares.creaLoc(
    "Afueras de Venecia",
    [ "venecia" ],
    "Un día soleado, de aire fresco. Venecia se adivina en lontananza, \
    mientras la serpenteante caravana se acerca, poco a poco, a la ciudad. \
    Notas el roce de tu cuerpo contra el áspero contorno \
    de un ${sobre, ex carta}. \
    Sabes que contiene la importante misión encargada por el Khan."
);
locAfuerasDeVenecia.pic = "res/caravan.jpg";


// *** Piazza San Marcos -------------------------------------------------------

const locSanMarcos = ctrl.lugares.creaLoc(
    "Plaza de San Marcos",
    [ "plaza" ],
    "La principal plaza de Venecia. Concurrida, como siempre. \
     Cientos de venecianos la cruzan a diario para acceder a negocios \
     o resolver asuntos oficiales en el ${<i>palazzo<i> ducal, e}."
);
locSanMarcos.pic = "res/san_marcos.jpg";

locSanMarcos.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        toret = "La caravana termina su recorrido, entrando en la ciudad. \
                 Aún con el ritmo tranquilo de la caravana \
                 gobernando tu cuerpo, diriges tu montura \
                 hacia el <i>palazzo</i> del Duce \
                 en la plaza de San Marcos...</p><p>"
            + toret;
    }
    
    return toret;
};


// *** Canales -----------------------------------------------------------------

const locCanales = ctrl.lugares.creaLoc(
    "Canales",
    [ "canales" ],
    "Abandonas la cárcel del palacio del Duce \
     por la mismísima puerta principal, \
     mientras los guardias venecianos huyen aterrados. \
     Sabiendo que la confusión no durará eternamente, \
     te apresuras a pensar en un próximo viaje a oriente. \
     ¿Sería demasiado precipitado salir ahora mismo?"
);
locCanales.pic = "res/canal.jpg";


// *** Celda -------------------------------------------------------------------

const locPrison = ctrl.lugares.creaLoc(
    "Celda",
    [ "celda" ],
    "Un limitado espacio de húmeda piedra es tu morada ahora, \
    cuando otrora parecían esperarte sólo las más altas prebendas. \
    Las ${paredes, ex paredes}, ${suelo, ex suelo} y ${techo, ex techo} \
    están compuestos de desnuda roca, \
    con pedazos de musgo esparcidos aquí y allá. \
    Una ${ventana, ex ventana} de gruesos barrotes proporciona ventilación \
    y ${luz solar}, a la vez que una puerta que nadie abrirá \
    proporciona la única salida de la estancia."
);
locPrison.pic = "prison.jpg";

locPrison.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        toret += "</p><p>Los guardias te empujan al interior de la celda. \
                  Tras de ti, la puerta se cierra. \
                  Recuerdas cómo has llegado hasta aquí... \
                  desde las salas del palacio del Duce, aquí, en Venecia... \
                  y desde más allá, en oriente, en el Imperio Mongol... \
                  tú, Marco Polo, como embajador del Gran Khan. \
                  Y, diablos, no deja de ser propio \
                  de una mala comedia callejera...";
    }
    
    return toret;
};

const objWalls = ctrl.creaObj(
    "pared",
    [ "paredes", "techo", "suelo" ],
    "De dura roca, ni una sola fisura podría proporcionar \
    la más mínima posibilidad de escape.",
    locPrison,
    Ent.Scenery
);

const objDoor = ctrl.creaObj(
    "puerta",
    [],
    "Es recia y firme, a pesar de la humedad. \
    Los remaches de acero (eso sí, algo herrumbosos) \
    y el mantenimiento deben ser la explicación.",
    locPrison,
    Ent.Scenery
);

const objWindow = ctrl.creaObj(
    "ventana",
    [ "ventanuco" ],
    "Un estrecho agujero en la piedra, \
    atravesado por ${gruesos barrotes, ex barrotes}, \
    es la única salida abierta al mundo. \
    Desde allí llega ${la luz, ex luz} que entra en la estancia. \
    El sol calienta con fuerza.",
    locPrison,
    Ent.Scenery
);

const objLigth = ctrl.creaObj(
    "luz",
    [ "haz" ],
    "",
    locPrison,
    Ent.Scenery );


// *** Escaleras ---------------------------------------------------------------

const locStairs = ctrl.lugares.creaLoc(
    "Escaleras",
    [ "escaleras" ],
    "Gruesos y húmedos muros de fuerte roca delimitan este pasillo, \
    con unas escaleras que permiten subir, y la puerta de una celda. \
    Un guardia yace tendido en el suelo, inmóvil, \
    presumiblemente debido a la explosión."
);


// *** Palazzo -----------------------------------------------------------------

const locPalazzoDelDuce = ctrl.lugares.creaLoc(
    "Palazzo del Duce",
    [ "palazzo del duce" ],
    "Tras solicitar audiencia, como embajador del Gran Khan, \
    eres conducido a la sala del trono...\
    </p><p>La sala del trono está ricamente decorada, \
    aunque no tanto como la de Kublai Khan. \
    Acostumbrado ya al regusto recargado y exótico de oriente, \
    occidente parece mucho más sobrio."
);
locPalazzoDelDuce.pic = "res/palazzo.jpg";
locPalazzoDelDuce.setExitBi( "oeste", locSanMarcos );


// ** Pnj's --------------------------------------------------------------------

const pnjDuce = ctrl.personas.creaPersona(
    "duce",
    [ "duce" ],
    "El Duce, rey de Venecia, envuelto en ricos topajes, \
     escucha pacientemente en su trono. \
     En ocasiones, te parece mira a hurtadillas a derecha e izquierda.",
    locPalazzoDelDuce
);

pnjDuce.preTalk = function() {
    return "Las ansias expansionistas de los Mongoles no dejan de ser suficientemente fuertes como para que lo dicho por el franciscano, con el tiempo, no pudiera ser verdad ... claro que para eso tendría que saber algo de geografía.Las balbuceantes respuestas del antaño poderoso Duce no dejaron de tener tampoco su interés (por decir algo):Duce: \"Eminencia, no creo que debamos ...\"Duce: \"... pero eminencia ...\"Duce: \"... por favor, eminencia ...\"Casi ajeno a la escena, pese a ser el protagonista, no puedes dejar de pensar en el cansancio que te produce todo ésto.Al fin y al cabo, sobrevivir a la Ruta de la Seda, en viaje de ida a y vuelta, para ser quemado en la hoguera como hereje ... no deja de ser irónico.Los guardias venecianos te rodean y te conducen hacia los sótanos de palacio... Bajando escaleras...";
};

const pnjGuardia = ctrl.personas.creaPersona(
    "guardia",
    [ "guardia" ],
    "Está chamuscado, y su pica ha desaparecido, \
     seguramente rota en mil pedazos. \
     Parece estar inconsciente, aunque bien, en conjunto. \
     Estaría bien comprobar que se encuentra perfectamente.",
    ctrl.places.limbo,
);


// *** Ending ------------------------------------------------------------------

function amusing()
{
    return "Marco Polo, efectivamente, viajó a la China \
            y, aún no siendo el primero en hacerlo, \
            sí fue el primero en darle difusión a sus viajes, \
            curiosidades y exotismos en Oriente \
            (algunos dirían que demasiada y exagerada publicidad). \
            De hecho, el libro en el que relata sus viajes a oriente \
            se conocía popularmente como <i>el libro del millón</i>, \
            pues según Marco Polo, cada vez que encontraba algo nuevo \
            o exótico, había millones de ejemplares.</p><p>\
            También la carta que le llevó al Duce de Venecia es verídica \
            (aunque dirigida al Papa, que no al Duce), \
            si bien nunca fue encarcelado por tal motivo. \
            Sí sería encarcelado posteriormente al ser capturado \
            en una batalla naval entre su  primer y segundo viajes, \
            y durante su encierro, dictaría el libro ya comentado \
            que le daría la fama mundial que aún hoy en día posee.</p><p>\
            También se sospecha que fue el primero en \
            traerse pólvora de la China (aunque la introducción de la \
            pólvora en Europa es uno de esos eventos nebulosos).</p><p>\
            El Umami fue descubierto (o, mejor, nominado) \
            a comienzos del siglo XX, y probablemente la pólvora \
            no tenga el sabor que se le otorga en este relato.</p><p>\
            Todo el resto es invención mía, y aunque a lo mejor \
            no sea demasiado original (me parece que se cumplen \
            demasiados tópicos, como el de 'una aventura en una celda'), \
            creo que cumple con los requisitos de participación \
            en la RapidoComp de los Premios Hispanos 2006.</p><p>\
            Felicidades por haber terminado la aventura. \
            Espero que te hayas divertido tanto jugándola \
            como yo haciéndola.</p><p>\
            Mándame tus comentarios a: baltasarq@gmail.com.";
}

const htmlRestartAmusingEnding = "<p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.<br/>\
                         <i><a href='#' onClick=\"javascript: \
                         document.getElementById('pAmenity').\
                         style.display='block'; return false\">\
                         Ver curiosidades</a>.</i></p>\
                         <p id='pAmenity' align='right' style='display: none'>"
                         + amusing() + "</p>";
                         
const htmlRestartEnding = "<p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.";
                         
function endGame(msg, pic)
{
    const dvCmds = document.getElementById( "dvCmds" );
    
    if ( dvCmds != null ) {
        dvCmds.style.display = "none";
    }
    
    if ( arguments.length < 2 ) {
        pic = "res/elevator.jpg";
    }

    if ( arguments.length < 1 ) {
        msg = "Tu viaje ha llegado a su fin...";
    }
    
    msg += "<p>Logros:<br/>" + ctrl.logros.completadosComoTexto() + "</p>";
    
    if ( playerAsHuman.travelled ) {
        msg += "<br/>" + htmlRestartAmusingEnding;
    } else {
        msg += "<br/>" + htmlRestartEnding;
    }
    
    ctrl.endGame( msg, pic );
}


// *** Achievements =========================================================

ctrl.achievements.add( "unthankful",
                       "Desagradecido (descubriste el regalo secreto del Khan)." );

ctrl.achievements.add( "scapist",
                       "Escapista (saliste de la celda)." );

ctrl.achievements.add( "riotist",
                       "Pánico (los guardias huyeron en desbandada)." );

ctrl.achievements.add( "runner",
                       "Huidizo (escapaste del <i>palazzo</i>." );


// ** Player -------------------------------------------------------------------

const player = ctrl.personas.creaPersona(
    "Marco",
    [ "marco", "polo" ],
    "Marco Polo, emisario del Gran Khan.",
    locAfuerasDeVenecia );

const objEstatuilla = ctrl.creaObj(
    "estatuilla",
    [ "estatuilla" ],
    "La figura representa a Diana, la cazadora. \
    El mismísimo Khan te la regaló con una enigmática sonrisa. \
    Su admiración por la antigua Grecia era bien conocida, \
    y siempre pensaste que aquella sonrisa solo se trataba \
    de algún tipo de complicidad de un habitante de la estepa \
    con un habitante del Mediterráneo.",
    player,
    Ent.Portable
);

const objLentes = ctrl.creaObj(
    "lentes",
    [ "lentes" ],
    "Son unos cristales que, perfectamente graduados, \
     permiten corregir tu cansada vista.",
    player,
    Ent.Portable
);

const objPolvora = ctrl.creaObj(
    "polvora",
    [ "polvora" ],
    "Un polvo negro de peculiar olor. \
     Lo cierto es que te recuerda a lo que los habitantes \
     de la aún más lejana Cipango conocen como Umami, \
     un sabor intermedio encontrado en \
     un famoso caldo de su cocina tradicional.",
    ctrl.places.limbo,
    Ent.Portable
);

const objLetter = ctrl.creaObj(
    "carta",
    [ "sobre" ],
    "Es una misiva en la que Kublai Khan te nombra su emisario \
    con el objetivo de ser puente entre oriente y occidente.",
    player,
    Ent.Portable
);

objLetter.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 1 ) {
        toret = "Es una misiva del rey de toda Mongolia, \
                incluyendo China: Kublai Khan, \
                el Khan o así conocido en nuestra tierra, el emperador. \
                En esta carta, el Khan pide hombres ilustrados al Duce de Venecia, \
                hombres que viajen a la China para enseñar a los mongoles \
                el modo de vida occidental. \
                El Khan, Kublai Khan, te nombró su emisario, \
                una gran responsabilidad que aceptaste con orgullo, \
                pensando en ser el puente de oriente con occidente."
    }
    
    return toret;
};

objLetter.postExamine = function() {
    ctrl.goto( locSanMarcos );
};


// ** Boot ---------------------------------------------------------------------

ctrl.personas.changePlayer( player );
ctrl.lugares.ponInicio( locAfuerasDeVenecia );
