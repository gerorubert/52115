import gramaticaVisitor from './generated/gramaticaVisitor.js';

export default class MyVisitor extends gramaticaVisitor {
    constructor() {
        super();
        this.variables = {};
        this.jsCode = "";
    }

    visitProgram(ctx) {
        this.jsCode += "function saludar() {\n";
        for (let func of ctx.function_()) {
            this.visit(func);
        }
        this.jsCode += "}\n\nsaludar();\n";
        console.log("\nTraducción a JavaScript:\n");
        console.log(this.jsCode);
    }

    visitFunction_(ctx) {
        this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const result = this.visit(ctx.getChild(i));
            if (result) this.jsCode += "  " + result + "\n";
        }
    }

    visitLeer(ctx) {
        const id = ctx.ID().getText();
        this.jsCode += `  let ${id} = prompt("Ingrese valor:");`;
        const valor = prompt(`Ingrese valor para '${id}': `);
        this.variables[id] = isNaN(valor) ? valor : parseInt(valor);
        return null;
    }

    visitEscribir(ctx) {
        const expr = this.visit(ctx.expresion());
        this.jsCode += `  console.log(${expr});`;
        console.log(eval(expr)); // Muestra el resultado de la expresión
        return null;
    }

    visitAsignacion(ctx) {
        const id = ctx.ID().getText();
        const valor = this.visit(ctx.expresion());
        this.variables[id] = valor;
        return `let ${id} = ${valor};`;
    }

    visitExpresion(ctx) {
        if (ctx.NUMERO()) return ctx.NUMERO().getText();
        if (ctx.CADENA()) return ctx.CADENA().getText(); // ya tiene comillas
        if (ctx.ID()) return this.variables[ctx.ID().getText()] ?? `"undefined"`;

        if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.getChild(0));
            const op = ctx.getChild(1).getText();
            const right = this.visit(ctx.getChild(2));
            return `${left} ${op} ${right}`;
        }
    }
}
