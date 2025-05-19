// Generated from c:/Users/Usuario/OneDrive/Escritorio/UTN/2°do/SINTAXIS/final analizador/gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
import gramaticaVisitor from './gramaticaVisitor.js';

const serializedATN = [4,1,18,101,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,
12,0,25,1,0,1,0,1,1,1,1,1,1,1,1,3,1,34,8,1,1,1,1,1,1,1,5,1,39,8,1,10,1,12,
1,42,9,1,1,1,1,1,1,2,1,2,1,2,5,2,49,8,2,10,2,12,2,52,9,2,1,3,1,3,1,3,3,3,
57,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,84,8,7,1,7,1,7,1,7,1,7,5,7,90,8,7,
10,7,12,7,93,9,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,0,1,14,11,0,2,4,6,8,10,12,
14,16,18,20,0,1,1,0,11,14,99,0,23,1,0,0,0,2,29,1,0,0,0,4,45,1,0,0,0,6,56,
1,0,0,0,8,58,1,0,0,0,10,64,1,0,0,0,12,70,1,0,0,0,14,83,1,0,0,0,16,94,1,0,
0,0,18,96,1,0,0,0,20,98,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,
0,25,23,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,
30,5,1,0,0,30,31,5,15,0,0,31,33,5,2,0,0,32,34,3,4,2,0,33,32,1,0,0,0,33,34,
1,0,0,0,34,35,1,0,0,0,35,36,5,3,0,0,36,40,5,4,0,0,37,39,3,6,3,0,38,37,1,
0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,0,
0,0,43,44,5,5,0,0,44,3,1,0,0,0,45,50,5,15,0,0,46,47,5,6,0,0,47,49,5,15,0,
0,48,46,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,5,1,0,0,0,52,
50,1,0,0,0,53,57,3,8,4,0,54,57,3,10,5,0,55,57,3,12,6,0,56,53,1,0,0,0,56,
54,1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,0,58,59,5,7,0,0,59,60,5,2,0,0,60,61,
5,15,0,0,61,62,5,3,0,0,62,63,5,8,0,0,63,9,1,0,0,0,64,65,5,9,0,0,65,66,5,
2,0,0,66,67,3,14,7,0,67,68,5,3,0,0,68,69,5,8,0,0,69,11,1,0,0,0,70,71,5,15,
0,0,71,72,5,10,0,0,72,73,3,14,7,0,73,74,5,8,0,0,74,13,1,0,0,0,75,76,6,7,
-1,0,76,84,3,18,9,0,77,84,3,20,10,0,78,84,5,15,0,0,79,80,5,2,0,0,80,81,3,
14,7,0,81,82,5,3,0,0,82,84,1,0,0,0,83,75,1,0,0,0,83,77,1,0,0,0,83,78,1,0,
0,0,83,79,1,0,0,0,84,91,1,0,0,0,85,86,10,2,0,0,86,87,3,16,8,0,87,88,3,14,
7,3,88,90,1,0,0,0,89,85,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,
0,92,15,1,0,0,0,93,91,1,0,0,0,94,95,7,0,0,0,95,17,1,0,0,0,96,97,5,16,0,0,
97,19,1,0,0,0,98,99,5,17,0,0,99,21,1,0,0,0,7,25,33,40,50,56,83,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "'leer'", "';'", "'escribir'", "'='", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFICADOR", 
                             "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion", 
                         "operador", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.funcion();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 27;
	        this.match(gramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(gramaticaParser.T__0);
	        this.state = 30;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 31;
	        this.match(gramaticaParser.T__1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 32;
	            this.parametros();
	        }

	        this.state = 35;
	        this.match(gramaticaParser.T__2);
	        this.state = 36;
	        this.match(gramaticaParser.T__3);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33408) !== 0)) {
	            this.state = 37;
	            this.instrucciones();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this.match(gramaticaParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 46;
	            this.match(gramaticaParser.T__5);
	            this.state = 47;
	            this.match(gramaticaParser.IDENTIFICADOR);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_instrucciones);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.leer();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.escribir();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.asignacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(gramaticaParser.T__6);
	        this.state = 59;
	        this.match(gramaticaParser.T__1);
	        this.state = 60;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 61;
	        this.match(gramaticaParser.T__2);
	        this.state = 62;
	        this.match(gramaticaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(gramaticaParser.T__8);
	        this.state = 65;
	        this.match(gramaticaParser.T__1);
	        this.state = 66;
	        this.expresion(0);
	        this.state = 67;
	        this.match(gramaticaParser.T__2);
	        this.state = 68;
	        this.match(gramaticaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(gramaticaParser.IDENTIFICADOR);
	        this.state = 71;
	        this.match(gramaticaParser.T__9);
	        this.state = 72;
	        this.expresion(0);
	        this.state = 73;
	        this.match(gramaticaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, gramaticaParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.state = 76;
	            this.numero();
	            break;
	        case 17:
	            this.state = 77;
	            this.cadena();
	            break;
	        case 15:
	            this.state = 78;
	            this.match(gramaticaParser.IDENTIFICADOR);
	            break;
	        case 2:
	            this.state = 79;
	            this.match(gramaticaParser.T__1);
	            this.state = 80;
	            this.expresion(0);
	            this.state = 81;
	            this.match(gramaticaParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpresionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, gramaticaParser.RULE_expresion);
	                this.state = 85;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 86;
	                this.operador();
	                this.state = 87;
	                this.expresion(3); 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gramaticaParser.RULE_operador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gramaticaParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(gramaticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gramaticaParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(gramaticaParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.T__0 = 1;
gramaticaParser.T__1 = 2;
gramaticaParser.T__2 = 3;
gramaticaParser.T__3 = 4;
gramaticaParser.T__4 = 5;
gramaticaParser.T__5 = 6;
gramaticaParser.T__6 = 7;
gramaticaParser.T__7 = 8;
gramaticaParser.T__8 = 9;
gramaticaParser.T__9 = 10;
gramaticaParser.T__10 = 11;
gramaticaParser.T__11 = 12;
gramaticaParser.T__12 = 13;
gramaticaParser.T__13 = 14;
gramaticaParser.IDENTIFICADOR = 15;
gramaticaParser.NUMERO = 16;
gramaticaParser.CADENA = 17;
gramaticaParser.WS = 18;

gramaticaParser.RULE_programa = 0;
gramaticaParser.RULE_funcion = 1;
gramaticaParser.RULE_parametros = 2;
gramaticaParser.RULE_instrucciones = 3;
gramaticaParser.RULE_leer = 4;
gramaticaParser.RULE_escribir = 5;
gramaticaParser.RULE_asignacion = 6;
gramaticaParser.RULE_expresion = 7;
gramaticaParser.RULE_operador = 8;
gramaticaParser.RULE_numero = 9;
gramaticaParser.RULE_cadena = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(gramaticaParser.EOF, 0);
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_funcion;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_parametros;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(gramaticaParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instrucciones;
    }

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	escribir() {
	    return this.getTypedRuleContext(EscribirContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_leer;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_expresion;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(gramaticaParser.IDENTIFICADOR, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_operador;
    }


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(gramaticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(gramaticaParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




gramaticaParser.ProgramaContext = ProgramaContext; 
gramaticaParser.FuncionContext = FuncionContext; 
gramaticaParser.ParametrosContext = ParametrosContext; 
gramaticaParser.InstruccionesContext = InstruccionesContext; 
gramaticaParser.LeerContext = LeerContext; 
gramaticaParser.EscribirContext = EscribirContext; 
gramaticaParser.AsignacionContext = AsignacionContext; 
gramaticaParser.ExpresionContext = ExpresionContext; 
gramaticaParser.OperadorContext = OperadorContext; 
gramaticaParser.NumeroContext = NumeroContext; 
gramaticaParser.CadenaContext = CadenaContext; 
