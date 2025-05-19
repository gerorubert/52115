grammar gramatica;

programa: funcion+ EOF;

funcion: 'function' IDENTIFICADOR '(' parametros? ')' '{' instrucciones* '}';

parametros: IDENTIFICADOR (',' IDENTIFICADOR)*;

instrucciones: leer | escribir | asignacion;

leer: 'leer' '(' IDENTIFICADOR ')' ';';

escribir: 'escribir' '(' expresion ')' ';';

asignacion: IDENTIFICADOR '=' expresion ';';

expresion: numero
         | cadena
         | IDENTIFICADOR
         | expresion operador expresion
         | '(' expresion ')'
         ;

operador: '+' | '-' | '*' | '/';

numero: NUMERO;

cadena: CADENA;

IDENTIFICADOR: [a-zA-Z_][a-zA-Z_0-9]*;

NUMERO: [0-9]+;

CADENA: '"' (~["\r\n])* '"';

WS: [ \t\r\n]+ -> skip;
