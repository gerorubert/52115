# 52115
Tarea analizador SSL 2K01 2025
Analizador Sintáctico - Legajo 52115 

Este proyecto es un analizador sintáctico implementado con ANTLR4 y Node.js. Analiza funciones escritas con una gramática definida, reconoce tokens, genera un árbol de derivación e interpreta el código. 

 Requisitos 

Node.js versión 18 o superior 

ANTLR4 (se incluye el comando generado) 

 Instrucciones para ejecutar 

1. Clonar el repositorio: 

git clone https://github.com/gerorubert/52115 

 
2. Instalar dependencias: 

Desde la terminal de VS Code se debe ejecutar:  npm install 


3. Generar los archivos con ANTLR (si aún no están generados): 

npx antlr4-js gramatica.g4 -o generated –visitor 

 
4. Ejecutar con un archivo de entrada: 

- Por ejemplo, para `input-correcto-1.txt`; se debe ejecutar desde la terminal: 

node index.mjs 
o
npm start  

 
Archivos de prueba: 

Modificar la linea 10 del archivo index.mjs para cambiar entre los distintos ejemplos. 


-  `input-correcto-1.txt` y `input-correcto-2.txt`: contienen ejemplos válidos. 

-  `input-incorrecto-1.txt` y `input-incorrecto-2.txt`: contienen errores de sintaxis que el analizador detecta. 


Que realiza el analizador? 


- Detecta y clasifica los tokens (palabras clave, identificadores, operadores, cadenas, etc.).Genera una tabla de tokens con sus lexemas. 

- Verifica si el código fuente sigue la estructura gramatical definida.Si hay errores de sintaxis, los reporta con línea y columna. Si no es asi construye el árbol de derivación sintáctico. 

- Interpreta el código si la entrada es válida, ejecutando instrucciones `leer`, `escribir` y asignaciones. Ejecuta funciones definidas en el código fuente. 

-Genera un equivalente en JavaScript del código fuente interpretado. 
