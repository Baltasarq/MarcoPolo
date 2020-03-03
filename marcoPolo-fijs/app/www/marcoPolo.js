/*
	generado por FI.JS@txtMap, v0.1/ v0.6 20140612
	Tue Mar  3 17:30:54 2020

*/

ctrl.ponTitulo( "MarcoPolo" );
ctrl.ponIntro( "<p>Empieza la aventura...</p>" );
// ctrl.ponImg( "res/portada.jpg" );
ctrl.ponAutor( "txtmap@caad.es" );
ctrl.ponVersion( "20200303" );

// *** Locs --

var locAfuerasDeVenecia = ctrl.lugares.creaLoc(
	"Afueras de Venecia",
	[ "afueras de venecia" ],
	"\nUn día soleado, de aire fresco. Venecia se adivina en lontananza, mientras la serpenteante caravana se acerca, poco a poco, a la ciudad.\nNotas el roce de tu cuerpo contra el áspero contorno de un sobre. Sabes que ese sobre contiene la importante misión encargada por el Khan."
);

var locCanales = ctrl.lugares.creaLoc(
	"Canales",
	[ "canales" ],
	"\nAbandonas la cárcel del palacio del Duce por la mismísima puerta principal, mientras los guardias venecianos huyen aterrados.\nMientras tanto, sabes que la confusión no durará eternamente, pero empiezas a pensar en un próximo viaje a oriente.\n¿Será demasiado precipitado salir ahora mismo?"
);

var locCelda = ctrl.lugares.creaLoc(
	"Celda",
	[ "celda" ],
	"\nUn limitado espacio de húmeda piedra es tu morada ahora,\ncuando otrora parecían esperarte sólo las más altas prebendas. Las paredes, suelos y techos están compuestos de desnuda roca, con pedazos de musgo esparcidos aquí y allá. Una ventana de gruesos barrotes proporciona ventilación y luz solar, a la vez que una puerta que nadie abrirá proporciona la única salida de la estancia.\nLos guardias te tiran al interior de la celda. Tras de ti, la puerta se cierra.\nRecuerdas como has llegado hasta aquí ...\ndesde las salas del palacio del Duce, aquí, en Venecia ...\ny desde más allá, en oriente, en el Imperio Mongol ...\ntú, Marco Polo, como embajador del Gran Khan.\nY, diablos, no deja de ser propio de una comedia callejera ..."
);

var locEscaleras = ctrl.lugares.creaLoc(
	"Escaleras",
	[ "escaleras" ],
	"\n.. las ansias expansionistas de los Mongoles no dejan de ser suficientemente fuertes como para que lo dicho por el franciscano, con el tiempo, no pudiera ser verdad ... claro que para eso tendría que saber algo de geografía.\nLas balbuceantes respuestas del antaño poderoso Duce no dejaron de tener tampoco su interés (por decir algo):\nDuce: \"Eminencia, no creo que debamos ...\"\nDuce: \"... pero eminencia ...\"\nDuce: \"... por favor, eminencia ...\"\nCasi ajeno a la escena, pese a ser el protagonista, no puedes dejar de pensar en el cansancio que te produce todo ésto.\nAl fin y al cabo, sobrevivir a la Ruta de la Seda, en viaje de ida a y vuelta, para ser quemado en la hoguera como hereje ... no deja de ser irónico.\nLos guardias venecianos te rodean y te conducen hacia los sótanos de palacio... Bajando escaleras...\nGruesos y húmedos muros de fuerte roca delimitan este pasillo, con unas escaleras que permiten subir hacia el norte, y la puerta de una celda hacia el sur.\nUn guardia yace tendido en el suelo, inmóvil, presumiblemente debido a la explosión."
);

var locPalazzoDelDuce = ctrl.lugares.creaLoc(
	"Palazzo del Duce",
	[ "palazzo del duce" ],
	"\nLa caravana termina su recorrido, entrando en la ciudad. Aún con el ritmo tranquilo de la caravana gobernando tu cuerpo, diriges tu montura hacia el palazzo del Duce...\nTras solicitar audiencia, como embajador del Gran Khan, eres conducido a la sala del trono...\nLa sala del trono está ricamente decorada, aunque no tanto como la de Kublai Khan. Acostumbrado ya al regusto exótico de oriente, occidente parece mucho más sobrio.\nPuedes ver al Duce."
);

// *** Compas --


// -- locAfuerasDeVenecia
locAfuerasDeVenecia.ponSalida( "este", locPalazzoDelDuce );

// -- locCanales

// -- locCelda
locCelda.ponSalida( "norte", locEscaleras );

// -- locEscaleras
locEscaleras.ponSalida( "norte", locCanales );

// -- locPalazzoDelDuce
locPalazzoDelDuce.ponSalida( "oeste", locAfuerasDeVenecia );


// *** Objs --

var objDuce = ctrl.creaObj(
	"duce",
	[ "duce" ],
	"El Duce, rey de Venecia, envuelto en ricos topajes, escucha pacientemente en su trono. En ocasiones, te parece mira a hurtadillas a derecha e izquierda.",
	locPalazzoDelDuce,
	Ent.Escenario
);

var objEstatuilla = ctrl.creaObj(
	"estatuilla",
	[ "estatuilla" ],
	"La figura representa a Diana, la cazadora. El mismísimo Khan te la regaló con una enigmática sonrisa. Su admiración por la antigua Grecia era bien conocida, y siempre pensaste que su sonrisa se trataba de algún tipo de complicidad de un habitante de la estepa con un habitante del Mediterráneo.",
	locCelda,
	Ent.Portable
);

var objGuardia = ctrl.creaObj(
	"guardia",
	[ "guardia" ],
	"Está chamuscado, y su pica ha desaparecido, seguramente rota en mil pedazos. Parece estar inconsciente, aunque bien, en conjunto.  Estaría bien comprobar que se encuentra perfectamente.El guardia gime brevemente ... ¡finalmente, no le ha pasado nada!",
	locEscaleras,
	Ent.Escenario
);

var objLentes = ctrl.creaObj(
	"lentes",
	[ "lentes" ],
	"Son unos cristales que, perfectamente graduados, permiten corregir tu cansada vista.",
	locCelda,
	Ent.Portable
);

var objParedes = ctrl.creaObj(
	"paredes",
	[ "paredes" ],
	"Las paredes son de dura roca, ni una sola fisura podría proporcionar la más mínima posibilidad de escape.",
	locCelda,
	Ent.Escenario
);

var objPolvora = ctrl.creaObj(
	"polvora",
	[ "polvora" ],
	"Un polvo negro de peculiar olor. Lo cierto es que te recuerda a lo que los habitantes de la aún más lejana Cipango conocen como Umami, un sabor intermedio encontrado en un famoso caldo de su cocina tradicional.",
	locCelda,
	Ent.Portable
);

var objPuerta = ctrl.creaObj(
	"puerta",
	[ "puerta" ],
	"Es recia y firme, a pesar de la humedad. Los remaches de acero (eso sí, algo herrumbosos) y el mantenimiento deben ser la explicación.",
	locCelda,
	Ent.Escenario
);

var objSobre = ctrl.creaObj(
	"sobre",
	[ "sobre" ],
	"Es una misiva del rey de toda Mongolia, incluyendo China: Kublai Khan, el Khan o así conocido en nuestra tierra, el emperador. En esta carta, el Khan pide hombres ilustrados al Duce de Venecia, hombres que viajen a la China para enseñar a los mongoles el modo de vida occidental. El Khan, Kublai Khan, te nombró su emisario, una gran responsabilidad que aceptaste con orgullo, pensando en ser el puente de oriente con occidente.",
	locAfuerasDeVenecia,
	Ent.Portable
);

var objVentana = ctrl.creaObj(
	"ventana",
	[ "ventana" ],
	"Un estrecho agujero en la piedra, atravesado por gruesos barrotes, es la única salida abierta al mundo. Desde allí llega la luz que entra en la estancia. El sol calienta con fuerza.",
	locCelda,
	Ent.Escenario
);


ctrl.lugares.ponInicio( locAfuerasDeVenecia );

