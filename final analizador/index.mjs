import antlr4 from 'antlr4';
import fs from 'fs';

// Importar los módulos generados por ANTLR
import gramaticaLexer from './generated/gramaticaLexer.js';
import gramaticaParser from './generated/gramaticaParser.js';
import gramaticaVisitor from './generated/gramaticaVisitor.js';

// Leer el archivo input.txt
const input = fs.readFileSync('input_correcto_1.txt', 'utf8');
console.log("Código fuente:");
console.log(input);

// ===========================
// ANÁLISIS LÉXICO
// ===========================
const chars = new antlr4.InputStream(input);
const lexer = new gramaticaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

console.log("\nTabla de Tokens y Lexemas:");
console.log("----------------------------------------------");
console.log("| Lexema           | Token                    |");
console.log("----------------------------------------------");
for (const token of tokens.tokens) {
  if (token.type === antlr4.Token.EOF) continue;
  const lexema = token.text;
  const tipo = gramaticaLexer.symbolicNames[token.type] || gramaticaLexer.literalNames[token.type] || token.type;
  console.log(`| ${lexema.padEnd(17)}| ${tipo.padEnd(24)}|`);
}
console.log("----------------------------------------------");

// ===========================
// ANÁLISIS SINTÁCTICO
// ===========================
const parser = new gramaticaParser(tokens);
parser.buildParseTrees = true;

class MyErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = 0;
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    this.errors++;
  }
}

const errorListener = new MyErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

const tree = parser.programa();

if (errorListener.errors > 0) {
  console.error("\nSe encontraron errores de sintaxis.");
  process.exit(1);
} else {
  console.log("\nEntrada válida.\n");
  console.log("Arbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));
}

// ===========================
// INTERPRETACIÓN + TRADUCCIÓN
// ===========================
class MyVisitor extends gramaticaVisitor {
  constructor() {
    super();
    this.variables = {};
    this.translatedJS = "";
  }

  visitPrograma(ctx) {
    for (let func of ctx.funcion()) {
      this.visit(func);
    }
    console.log("\nTraducción a JavaScript:");
    console.log(this.translatedJS);
  }

  visitFuncion(ctx) {
    const name = ctx.IDENTIFICADOR(0).getText();
    console.log(`\nEjecutando función: ${name}`);
    this.translatedJS += `function ${name}() {\n`;
    for (let instr of ctx.instrucciones()) {
      this.visit(instr);
    }
    this.translatedJS += `}\n`;
  }

  visitLeer(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const valor = prompt(`Ingrese valor para '${id}': `);
    this.variables[id] = isNaN(valor) ? valor : parseInt(valor);
    this.translatedJS += `  let ${id} = prompt("Ingrese valor:");\n`;
  }

  visitEscribir(ctx) {
    const { value, js } = this.visit(ctx.expresion());
    console.log(value);
    this.translatedJS += `  console.log(${js});\n`;
  }

  visitAsignacion(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const { value, js } = this.visit(ctx.expresion());
    this.variables[id] = value;
    this.translatedJS += `  let ${id} = ${js};\n`;
  }

  visitExpresion(ctx) {
    if (ctx.getChildCount() === 1) {
      const token = ctx.getText();
      if (token.startsWith('"') && token.endsWith('"')) {
        return { value: token.slice(1, -1), js: token }; // conservar comillas
      } else {
        return { value: this.variables[token] ?? 0, js: token };
      }
    }

    if (ctx.getChildCount() === 3) {
      const left = this.visit(ctx.getChild(0));
      const op = ctx.getChild(1).getText();
      const right = this.visit(ctx.getChild(2));

      let result;
      if (op === '+') {
        result = String(left.value) + String(right.value);
      } else {
        result = eval(`${left.value} ${op} ${right.value}`);
      }

      return {
        value: result,
        js: `${left.js} ${op} ${right.js}`
      };
    }

    return { value: "", js: "undefined" };
  }
}

// Simular prompt para Node.js
import readlineSync from 'readline-sync';
global.prompt = (msg) => readlineSync.question(msg);

// Ejecutar
const visitor = new MyVisitor();
visitor.visit(tree);
