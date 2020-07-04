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
ctrl.setVersion( "2.0 20200711" );

// *** Afueras de Venecia ------------------------------------------------------

const locOutsideVenecia = ctrl.lugares.creaLoc(
    "Afueras de Venecia",
    [ "venecia" ],
    "Un día soleado, de aire fresco. \
    ${Venecia, ex ciudad} se adivina en lontananza, \
    mientras la serpenteante ${caravana, ex caravana} se acerca, \
    poco a poco, a la ciudad. Notas el roce de tu cuerpo \
    contra el áspero contorno de un ${sobre, ex carta}. \
    Sabes que contiene la importante misión encargada por el Khan."
);
locOutsideVenecia.pic = "res/caravan.jpg";

const objCaravan = ctrl.creaObj(
    "caravana",
    [],
    "La serpenteante fila de ${monturas, ex monturas} avanza por el camino, \
     en ruta a la ${urbe, ex ciudad}.",
    locOutsideVenecia,
    Ent.Scenery );

const objHorsers = ctrl.creaObj(
    "monturas",
    [ "caballos" ],
    "Abandonados los camellos unas cuantas etapas atrás, \
    los caballos son ahora vuestras fieles monturas.",
    locOutsideVenecia,
    Ent.Scenery );

const objCity = ctrl.creaObj(
    "Venecia",
    [ "ciudad" ],
    "La ciudad se adivina directamente delante de vosotros, \
     sus tejados relucen en la mañana.",
    locOutsideVenecia,
    Ent.Scenery );


// *** Piazza San Marcos ------------------------------------------------------

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
        toret = "La caravana termina su recorrido, \
                 entrando en la ciudad. \
                 Aún con el ritmo tranquilo de la caravana \
                 gobernando tu cuerpo, diriges tu montura \
                 hacia el <i>palazzo</i> del Duce \
                 en la plaza de San Marcos...</p><p>"
            + toret;
    }
    
    return toret;
};


// *** Channels ----------------------------------------------------------------

const locChannels = ctrl.lugares.creaLoc(
    "Canales",
    [ "canales" ],
    "Abandonas la cárcel del palacio del Duce \
     por la mismísima puerta principal, \
     mientras los guardias venecianos huyen aterrados. \
     Sabiendo que la confusión no durará eternamente, \
     te apresuras a pensar en un próximo viaje a oriente. \
     ¿Sería demasiado precipitado salir ahora mismo?"
);
locChannels.pic = "res/canal.jpg";


// *** Celda -------------------------------------------------------------------

const locPrison = ctrl.lugares.creaLoc(
    "Celda",
    [ "celda" ],
    "Las ${paredes, ex paredes}, ${suelo, ex suelo} y ${techo, ex techo} \
    están compuestos de desnuda roca, \
    con ${pedazos de musgo, ex musgo} esparcidos aquí y allá. \
    Una ${ventana, ex ventana} de gruesos barrotes \
    proporciona ventilación y ${luz solar, ex luz}"
);
locPrison.pic = "res/prison.jpg";

locPrison.postGo = function() {
    ctrl.print( "Con cuidado, pasaste al lado de \
                 los humeantes despojos de la puerta." );
};

locPrison.preExamine = function() {
    var toret = this.desc;
    
    if ( !objDoor.destroyed ) {
        toret = "Un limitado espacio de húmeda piedra es \
                 tu morada ahora, cuando otrora \
                 parecían esperarte sólo las más altas prebendas. "
                 + toret
                 + ", a la vez que una ${puerta, ex puerta} \
                    que nadie abrirá proporciona \
                    la única salida de la estancia."
    } else {
        toret = "La celda que llegaste a pensar que sería tu morada \
                 se revela ahora como lo que es: un húmedo y \
                 reducido rectángulo apenas iluminado. "
                 + toret
                 + ". La ${puerta, ex puerta} cuelga de sus goznes, \
                 destruida por la explosión.";
    }
    
    if ( this.getTimesExamined() == 0 ) {
        toret = "Los guardias te empujan al interior de la celda. \
                  Tras de ti, la puerta se cierra. \
                  Recuerdas cómo has llegado hasta aquí... \
                  desde las salas del palacio del Duce, aquí, en Venecia... \
                  y desde más allá, en oriente, en el Imperio Mongol... \
                  tú, Marco Polo, como embajador del Gran Khan. \
                  Y, diablos, no deja de ser propio \
                  de una mala comedia callejera...</p><p>"
                + toret;
        
        ctrl.personas.getPlayer().movingToPrison = false;
    }
    
    return toret;
};

const objMoss = ctrl.creaObj(
    "musgo",
    [],
    "El musgo verde y parcialmente seco se esparce en \
    las junturas de las rocas cercanas a las ventanas, \
    aquellas donde la luz solar incide en algún momento del día. \
    Un musgo pardo y húmedo se acumula en \
    los rincones más oscuros de la celda.",
    locPrison,
    Ent.Scenery );

const objWalls = ctrl.creaObj(
    "pared",
    [ "paredes", "techo", "suelo", "muro", "muros", "roca", "piedra" ],
    "De dura roca, ni una sola fisura podría proporcionar \
    la más mínima posibilidad de escape.",
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

const objBars = ctrl.creaObj(
    "barrotes",
    [ "reja" ],
    "Anormalmente gruesos, rascarlos con tus uñas desnudas \
     no hace mella siquiera en la pintura. \
     Parecen además clavados en la dura roca profundamente...",
    locPrison,
    Ent.Scenery );

const objLight = ctrl.creaObj(
    "sol",
    [ "haz", "luz" ],
    "El sol entra con fuerza por la ventana, \
     calentándote incluso desagradablemente \
     cuando te interpones en el haz de luz.",
    locPrison,
    Ent.Scenery );

objLight.preExamine = function() {
    var toret = this.desc;
    
    if ( ctrl.isPresent( objGunpowder ) ) {
        if ( !objGunpowder.discovered ) {
            toret += "</p><p>Te das cuenta de que, ante el haz de luz, \
                    el polvo negro empieza a humear, \
                    aumentando su temperatura... ¿se tratará de aquel \
                    polvo explosivo de la China?</p><p>\
                    Sin duda se trata de pólvora. Recuerdas ahora la \
                    divertida reacción del Khan ante \
                    tu interés desusado sobre el extraño polvo \
                    que permitía lanzar proyectiles festivos al aire.";
            
            objGunpowder.discovered = true;
        } else {
            toret += "</p><p>Sospechas que este polvo negro \
                      es explosivo... quizás deberías colocarlo \
                      en la ${puerta, deja polvo en puerta}.";
        }
    }
    
    return toret;
};

const objDoor = ctrl.creaObj(
    "puerta",
    [ "remaches", "remache" ],
    "Es recia y firme, a pesar de la humedad. \
     Los remaches de acero (eso sí, algo herrumbosos) \
     y un probable mantenimiento bien hecho deben ser la explicación.",
    locPrison,
    Ent.Scenery );

objDoor.setContainer();
objDoor.destroyed = false;
objDoor.preExamine = function() {
    var toret = this.desc;
    
    if ( this.destroyed ) {
        toret = "La puerta está derruida y destrozada hacia un lado, \
                 ${permitiendo ahora el paso, n}.";
    }
    else
    if ( objGunpowder.discovered ) {
        toret += "</p><p>Quizás este polvo negro sea capaz de acabar con \
                  la ${puerta, deja polvo en puerta}....";
    }
    
    return toret;
};


// *** Escaleras --------------------------------------------------------------

const locStairs = ctrl.lugares.creaLoc(
    "Escaleras",
    [ "escaleras" ],
    "Gruesos y húmedos ${muros de fuerte roca, ex muros} \
    delimitan este pasillo, con unas escaleras \
    que permiten ${subir, sal}, además de \
    la ${puerta, s} de una celda."
);
locStairs.pic = "res/stairs.jpg";
locStairs.setExitBi( "sur", locPrison );

locStairs.preExit = function() {
    const player = ctrl.personas.getPlayer();
    let toret = "No parece el momento más adecuado.";
    
    if ( objDoor.destroyed ) {
        toret = "";
        
        if ( npcGuard.awoken ) {
            ctrl.achievements.achieved( "runner" );
            endGame( "Abandonas la cárcel del palacio del Duce \
                    por la mismísima puerta principal, \
                    mientras los guardias venecianos huyen aterrados. \
                    Entre tanto y sabiendo que \
                    la confusión no durará eternamente, \
                    empiezas a pensar en un próximo viaje a oriente. \
                    ¿Sería demasiado precipitado salir ahora mismo?",
                    "res/san_marcos.jpg" );
        } else {
            endGame( "Tratas de abandonar el <i>palazzo</i> \
                      sin ser visto, pero tu intento \
                      resulta infructuoso. Los guardias te rodean \
                      y te devuelven a los sótanos.</p><p>\
                      Aunque aún tratan de comprender cómo pudiste \
                      escapar, sin duda simplemente buscarán para ti \
                      una celda con una puerta más gruesa.",
                    "res/prison.jpg" );
        }
    }
    else
    if ( player.movingToPrison ) {
        toret = "Los guardias forcejean contigo hasta que consiguen \
                 enfilarte de nuevo hacia la celda.";
    }
    
    return toret;
};

locStairs.preExamine = function() {
    var toret = this.desc;
    
    if ( !locStairs.has( objWalls ) ) {
        this.objs.push( objWalls );
    }
    
    if ( objDoor.destroyed ) {
        if ( ctrl.places.limbo.has( npcGuard )
          && !npcGuard.awoken )
        {
            npcGuard.moveTo( this );
            
            toret += " Un ${guardia, ex guardia} yace \
                   tendido en el suelo, inmóvil, \
                   presumiblemente debido a la explosión.";
        }
        
        if ( locPrison.has( npcGuido ) ) {
            ctrl.print( "</p><p>Guido también sale de la celda, \
                      y se despide de ti, deseándote buena suerte." );
            
            npcGuido.moveTo( ctrl.places.limbo );
        }
    } else {
        toret += " Los guardias te empujan hacia ${la celda, s}.";
    }
    
    return toret;
};


// *** Palazzo ----------------------------------------------------------------

const locPalazzo = ctrl.lugares.creaLoc(
    "Palazzo del Duce",
    [ "palazzo" ],
    "Tras solicitar audiencia, como embajador del Gran Khan, \
    eres conducido a la sala del trono...\
    </p><p>La sala del trono está ricamente decorada, \
    aunque no tanto como la de Kublai Khan. \
    Acostumbrado ya al regusto recargado y exótico de oriente, \
    occidente parece mucho más sobrio."
);
locPalazzo.pic = "res/palazzo.jpg";
locPalazzo.setExitBi( "oeste", locSanMarcos );
locPalazzo.setExitBi( "abajo", locStairs );

locPalazzo.preExamine = function() {
    var toret = this.desc;
    
    if ( ctrl.personas.getPlayer().movingToPrison ) {
        if ( npcDuce.owner == this ) {
            npcDuce.moveTo( ctrl.places.limbo );
            npcBishop.moveTo( ctrl.places.limbo );
        }
        
        toret = "Los guardias venecianos te rodean y \
                 te conducen hacia los ${sótanos de palacio, abajo}.";
    }
    
    return toret;
};


// ** NPC's/Pnj's -------------------------------------------------------------------

const npcBishop = ctrl.personas.creaPersona(
    "obispo",
    [ "franciscano" ],
    "Enjuto, pequeño y con cara de ratón ruín, \
     o es que lo encuentras tan odioso que así te parece.",
    ctrl.places.limbo
);

npcBishop.preTalk = function() {
    return "Ni siquiera se digna en mirarte, \
            centrando su atención en el Duce. \
            Te resulta tan odioso que ardes \
            en deseos de ${matarlo, ataca obispo}.";
};

npcBishop.preAttack = function() {
    const marcoPolo = ctrl.personas.getPlayer();
    
    ctrl.print( "Harto de su intrusismo tendencioso, \
                 te lanzas contra el obispo con un grito de rabia." );

    marcoPolo.say( "¡Muere, maldito!" );

    ctrl.print( "Colocas tus manos alrededor de su cuello, \
                 y aprietas con todas tus fuerzas, las de tus brazos, \
                 y las de tu alma, con todo el odio \
                 que sientes contra este personaje." );

    if ( npcDuce.owner == this.owner ) {
        this.say( "ggghhaaaa..." );
        this.say( "¿Lo véis, Duce? No, nonnnngghh... \
                   ¡No es más que un espía de los bárbaros de oriente!" );

        ctrl.print( "El Duce, visíblemente contrariado, hace un gesto..." );
        marcoPolo.movingToPrison = true;
        ctrl.places.doDesc();
    }
};

const npcDuce = ctrl.personas.creaPersona(
    "duce",
    [ "duce" ],
    "El Duce, rey de Venecia, envuelto en ricos topajes, \
     escucha pacientemente en su trono. \
     En ocasiones, te parece mira a hurtadillas a derecha e izquierda.",
    locPalazzo
);
npcDuce.status = 0;

npcDuce.preTalk = function() {
    const marcoPolo = ctrl.personas.getPlayer();
    
    ctrl.clearAnswers();
    
    if ( this.status == 0 ) {
        this.status = 1;
        marcoPolo.say(  "Duce, su majestad, \
                         traigo una carta del gran Khan de Mongolia..." );

        ctrl.print( "El Duce ladea la cabeza, \
                    su curiosidad picada por lo exótico..." );

        this.say( "¿Qué me requiere ese gobernante de tierras tan lejanas?" );

        ctrl.print ( "Un personajillo pequeño emerge \
                      de las penumbras del trono..." );
        ctrl.print( "Sus ropajes le denuncian como franciscano; \
                     ¿Un miembro del Santo Oficio?" );
        
        npcBishop.moveTo( this.owner );
        
        npcBishop.say( "Nada bueno, Duce; \
                          ¿Qué podría desear ese hereje del este, \
                          ese habitante de las antiguas tierras \
                          de Sodoma y Gomorra?" );
        ctrl.places.doDesc();
    }
    else
    if ( this.status == 1 ) {
        this.status = 2;

        ctrl.print( "La respuesta escapa de tus labios \
                     antes siquiera de poder pensar \
                     en su oportunidad o conveniencia." );

        ctrl.print( "Te diriges al Duce, pero tu comentario \
                     está claramente orientado hacia el obispo..." );

        marcoPolo.say(  "En realidad, mi señor, \
                         Mongolia se encuentra más al este. Y más al norte." );

        ctrl.print( "..." );
        ctrl.print( "Es fácil identificar este punto de la conversación \
                     como aquel en el que todo se torció, definitivamente. \
                     Apenas tuviste tiempo siquiera de esbozar al Duce \
                     lo que el Khan deseaba de él, \
                     pero tal y como comprendes perfectamente, \
                     la guerra de poder entre el Papado \
                     y el Duce te ha convertido en víctima propiciatoria." );

        ctrl.print( "Desde la subida al Trono Papal de Clemente IV, \
                     Venecia y Vaticano se habían enzarzado \
                     en una especie de guerra fría, en la que ambos \
                     trataban de demostrar cuál de ellos... \"mandaba\". \
                     Se trata de una situación parecida a las antiguas luchas \
                     de los reinos cristianos de Hispania, \
                     Castilla y León, en el 925." );
    }
    else
    if ( this.status == 2 ) {
        this.status = 3;
        
        ctrl.print( "Probablemente, una de las mejores intervenciones \
                     fuera la del obispo..." );

        npcBishop.say(  "Duce, debemos considerar, además del \
                             desagravio que pueda suponer para \
                             nuestros freires enseñar a esos herejes, \
                             adoradores del diablo, el camino de la verdad, \
                             que quizás sólo deseen conseguir información \
                             para una futura invasión." );

        ctrl.print( "...las ansias expansionistas de los Mongoles \
                     no dejan de ser suficientemente fuertes \
                     como para que lo dicho por el franciscano, \
                     con el tiempo, no pudiera ser verdad... \
                     claro que para eso tendría que saber algo de geografía." );
        
        ctrl.print( "Las balbuceantes respuestas \
                     del antaño poderoso Duce \
                     no dejaron de tener tampoco su interés:" );

        npcDuce.say( "Eminencia, no creo que debamos..." );
        npcDuce.say( "... pero eminencia..." );
        npcDuce.say( "... por favor, eminencia..." );

        ctrl.print( "Casi ajeno a la escena, pese a ser el protagonista, \
                     no puedes dejar de pensar en el cansancio \
                     que te produce todo esto." );
        
        ctrl.print( "Al fin y al cabo, sobrevivir a la Ruta de la Seda, \
                     en viaje de ida a y vuelta, \
                     para ser quemado en la hoguera como hereje... \
                     no deja de ser irónico." );
        
        marcoPolo.movingToPrison = true;
        ctrl.places.doDesc();
    }
};

const npcGuido = ctrl.personas.creaPersona(
    "prisionero",
    [ "prisionero", "preso", "persona", "hombre" ],
    "Delgado y vistiendo andrajos, sin duda ha visto mejores días.",
    locPrison );

npcGuido.status = 0;

npcGuido.preTalk = function() {
    const player = ctrl.personas.getPlayer();
    
    ctrl.clearAnswers();
    
    if ( objDoor.destroyed ) {
        this.say( "¡${Vía libre, n}! ¡No puedo creerlo!" );
    } else {
        if ( this.status == 0 ) {
            ctrl.print( "El prisionero echa una larga ojeada \
                         a tus ropajes." );
            this.say( "Hola, me llamo Guido. \
                    ¿Cómo es que has venido a parar aquí?" );
            this.id = "Guido";
            
            this.status = 1;
        }
        else
        if ( this.status == 1 ) {
            player.say( "Yo soy Marco." );
            player.say( "Creo que he disgustado al obispo." );
            this.say( "Ufff... mala cosa, amigo..." );
            this.say( "Lo mismo que yo, por cierto." );
            
            this.status = 2;
        }
        else {
            if ( objStatuette.brokenStatus >= 1 ) {
                if ( objStatuette.brokenStatus == 1 ) {
                    this.say( "Siento lo de tu regalo, Marco." );
                }
                else
                if ( objStatuette.brokenStatus == 2 ) {
                    this.say( "Pensaba que apreciabas la estatuilla..." );
                    player.say( "Ahora me parece más valioso el polvo \
                                 en su interior..." );
                    player.say( "Sospecho su utilidad, \
                                 pero déjame que lo examine \
                                 detenidamente a la luz..." );
                }
            } else {
                this.say( "Es mejor que nos pongamos cómodos... \
                           ¡Vamos a pasar mucho tiempo aquí!" );
            }
        }
    }
    
    return;
};

const npcGuard = ctrl.personas.creaPersona(
    "guardia",
    [ "guardia" ],
    "Está chamuscado, y su pica ha desaparecido, \
     seguramente rota en mil pedazos. \
     Parece estar inconsciente, aunque bien, en conjunto. \
     Deberías ${comprobar, empuja guardia} que se encuentra bien.",
    ctrl.places.limbo,
);
npcGuard.awoken = false;
npcGuard.prePush = npcGuard.prePull = function() {
    this.moveTo( ctrl.places.limbo );
    this.awoken = true;
    
    ctrl.places.doDesc();
    ctrl.achievements.achieved( "riotist" );
    
    return "...su respiración se agita...</p><p>\
            ...sus ojos parpadean...</p><p>\
            Repentinamente, sus ojos se abren de par en par. \
            Su mirada se preña de pánico al verte \
            inclinado sobre él, y empieza a vociferar, \
            mientras se aparta de ti compulsivamente. \
            El guardia, sin dar tiempo a explicaciones, \
            sale corriendo hacia el norte \
            lanzando unos guturales bramidos, \
            sin duda provocados por el miedo cerval \
            provocado por tu persona, \
            capaz de derribar una puerta \
            mediante una aterradora explosión. \
            Ahora no serías ya capaz de repetirlo, \
            pero él eso no lo sabe.</p><p>\
            Mientras sube las escaleras, \
            puedes oir como grita algo de que eres un hechicero, \
            que practicas magia negra, o algo por el estilo.</p><p>\
            Quizás ahora quieran quemarte por brujo... \
            Quizás el guardia haya creado la confusión necesaria \
            para poder salir sin que nadie te detenga.";
};

npcGuard.preTalk = function() {
    return "El ${guardia, ex guardia} está inconsciente.";
};


// *** Ending -----------------------------------------------------------------

function amusing()
{
    return "<p>Esta ficción interactiva se reescribió en 2020\
            mediante <a href='http://baltasarq.github.io/fi-js/' \
            target='_blank'>fi.js</a>.</p><p>\
            Marco Polo, efectivamente, viajó a la China \
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
            Felicidades por haber terminado este relato. \
            Espero que te hayas divertido tanto jugándolo \
            como yo escribiéndolo.</p><p>\
            Mándame tus comentarios a: baltasarq@gmail.com.</p>";
}

const htmlRestartAmusingEnding = "<div id='dvEnding'><p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.<br/>\
                         <i><a href='#' onClick=\"javascript: \
                         document.getElementById('pAmenity').\
                         style.display='block'; return false\">\
                         Ver curiosidades</a>.</i></p>\
                         <div id='pAmenity' align='right' style='display: none'>"
                         + amusing() + "</div>";
                         
const htmlRestartEnding = "<p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.</div>";
                         
function endGame(msg, pic)
{
    const dvCmds = document.getElementById( "dvCmds" );
    
    if ( dvCmds != null ) {
        dvCmds.style.display = "none";
    }
    
    if ( arguments.length < 2 ) {
        pic = "res/canal.jpg";
    }

    if ( arguments.length < 1 ) {
        msg = "Tu viaje ha llegado a su fin...";
    }
    
    msg += "<p>Logros:<br/>" + ctrl.logros.completadosComoTexto() + "</p>";
    
    if ( ctrl.achievements.get( "runner" ).complet ) {
        msg += "<br/>" + htmlRestartAmusingEnding;
    } else {
        msg += "<br/>" + htmlRestartEnding;
    }
    
    ctrl.endGame( msg, pic );
}


// *** Achievements =========================================================

ctrl.achievements.add( "unthankful",
                       "Desagradecido \
                       (descubriste el regalo secreto del Khan)." );

ctrl.achievements.add( "escapist",
                       "Escapista (saliste de la celda)." );

ctrl.achievements.add( "riotist",
                       "Pánico (los guardias huyeron en desbandada)." );

ctrl.achievements.add( "runner",
                       "Huidizo (escapaste del <i>palazzo</i>)." );


// ** Player -------------------------------------------------------------------

const player = ctrl.personas.creaPersona(
    "Marco",
    [ "polo" ],
    "Marco Polo, emisario del Gran Khan.",
    locOutsideVenecia );
player.movingToPrison = false;

const objStatuette = ctrl.creaObj(
    "estatuilla",
    [ "estatuilla", "regalo", "yeso",
      "trozo", "trozos", "restos",
      "pedazo", "pedazos" ],
    "La figura representa a Diana, la cazadora. \
    El mismísimo Khan te la regaló con una enigmática sonrisa. \
    Su admiración por la antigua Grecia era bien conocida, \
    y siempre pensaste que aquella sonrisa solo se trataba \
    de algún tipo de complicidad de un habitante de la estepa \
    con un habitante del Mediterráneo.",
    player,
    Ent.Portable
);
objStatuette.brokenStatus = 0;

objStatuette.preExamine = function() {
    const player = ctrl.personas.getPlayer();
    var toret = this.desc;
    
    ctrl.clearAnswers();
    
    if ( player.movingToPrison ) {
        toret = "¡Los guardias te lo impiden!";
    }
    else
    if ( locPrison.has( player ) ) {
        if ( this.brokenStatus == 0 ) {
            toret = "";
            ctrl.print( this.desc );
            npcGuido.say( "Oh, vaya, qué bonita, ¿puedo verla?" );
            player.say( "De acuerdo, pero por favor ten cuidado;\
                         es un regalo del emperador de Mongolia." );
            npcGuido.say( "De acuerdo, de acuerdo..." );
            
            ctrl.print( "</p><p>¡La estatuilla se le cae al suelo! \
                    </p><p>Puedes ver como un trozo se ha desprendido, \
                    demostrando que no está hecha de ningún material \
                    noble. De hecho, se puede apreciar unas gruesas \
                    paredes como de yeso, y algún tipo de polvo negro \
                    dentro." );
            
            npcGuido.say( "Oh, lo siento, amigo. Lo siento mucho..." );
            this.brokenStatus = 1;
        }
        else
        if ( this.brokenStatus == 1 ) {
            toret = "";
            ctrl.print( "</p><p>Está rota en una esquina... \
                       Un polvo negro se adivina en su interior, \
                       pues un poco se escapa cada vez que la mueves. \
                       Se te ocurre que podrías acabar \
                       de ${romperla, rompe estatuilla}..." );
            npcGuido.say( "De verdad que lo siento, amigo..." );
        } else {
            toret = "Rota la estatuilla en una docena de pedazos, \
                     en realidad ya no sirve para nada.";
        }
    }
    
    return toret;
};

objStatuette.preAttack = function() {
    const player = ctrl.personas.getPlayer();
    var toret = "No tiene sentido romperla más.";
    
    if ( this.brokenStatus < 2 ) {
        this.id = "restos"
        this.brokenStatus = 2;
        
        ctrl.achievements.achieved( "unthankful" );
        ctrl.clearAnswers();
        
        objGunpowder.moveTo( player );
        ctrl.places.doDesc();
        
        player.say( "Qué lástima..." );
        npcGuido.say( "¡Dios santo! \
                       ¿Qué vas a hacer? \
                       ¿No era algo apreciado para ti?" );
        
        toret = "La tiras con gran energía al suelo, \
                 rompiéndose en mil pedazos y revelando \
                 un ${polvo negro, ex polvo} en su interior. \
                 Lo tomas en tus manos, examinándolo detenidamente...";
    } else {
        player.say( "¡Pero si ya está rota! ...el regalo del Khan..." );
    }
    
    return toret;
}

const objGlasses = ctrl.creaObj(
    "lentes",
    [ "gafas" ],
    "Son unos cristales que, perfectamente graduados, \
     permiten corregir tu cansada vista.",
    player,
    Ent.Portable
);

objGlasses.preExamine = function() {
    const player = ctrl.personas.getPlayer();
    var toret = this.desc;
    
    if ( player.movingToPrison ) {
        toret = "¡Los guardias te empujan constantemente!";
    }
    
    return toret;
};

const objGunpowder = ctrl.creaObj(
    "polvo",
    [ "polvora" ],
    "Un polvo negro de peculiar olor. \
     Lo cierto es que te recuerda a lo que los habitantes \
     de la aún más lejana Cipango conocen como Umami, \
     un sabor intermedio encontrado en \
     un famoso caldo de su cocina tradicional.",
    ctrl.places.limbo,
    Ent.Portable
);
objGunpowder.discovered = false;

objGunpowder.postDrop = function() {
    var toret = "Al contacto con la luz, \
                 del polvo negro comienzó a salir \
                 un humillo de olor desagradable...\
                 </p><p>Con mucho cuidado, \
                 acumulaste el polvo humeante \
                 lo más cerca posible de la puerta, \
                 y en un momento de lucidez, decidiste \
                 acelerar el proceso \
                 con las lentes, enfocando la luz hacia ella.\
                 </p><p>Una potente deflagración te empujó \
                 contra el muro de la ventana, al sur.\
                 </p><p>Al reincorporarte, \
                 pudiste observar que la puerta \
                 casi ha desaparecido de donde estaba, \
                 colgando los escasos restos de los goznes.";
    
    objGunpowder.moveTo( ctrl.places.limbo );
    objDoor.destroyed = true;
    
    ctrl.places.doDesc();
    ctrl.achievements.achieved( "escapist" );
    ctrl.print( toret );
};

const objLetter = ctrl.creaObj(
    "carta",
    [ "sobre" ],
    "Es una misiva en la que Kublai Khan te nombra su emisario \
    con el objetivo de ser puente entre oriente y occidente.",
    player,
    Ent.Portable
);

objLetter.preExamine = function() {
    const player = ctrl.personas.getPlayer();
    var toret = this.desc;
    
    if ( player.movingToPrison ) {
        toret = "¡Los guardias no te dan un respiro!";
    }
    else
    if ( this.getTimesExamined() == 1 ) {
        toret = "Es una misiva del rey de toda Mongolia, \
                incluyendo China: Kublai Khan, el Khan \
                o así conocido en nuestra tierra, el emperador. \
                En esta carta, el Khan pide hombres ilustrados \
                al Duce de Venecia, hombres que viajen a la China \
                para enseñar a los mongoles \
                el modo de vida occidental. \
                El Khan, Kublai Khan, te nombró su emisario, \
                una gran responsabilidad que aceptaste con orgullo, \
                pensando en ser el puente de oriente con occidente."
    }
    
    return toret;
};

objLetter.postExamine = function() {
    if ( ctrl.places.getCurrentLoc() == locOutsideVenecia ) {
        ctrl.goto( locSanMarcos );
    }
};


// ** Boot ---------------------------------------------------------------------

ctrl.personas.changePlayer( player );
ctrl.lugares.ponInicio( locOutsideVenecia );
