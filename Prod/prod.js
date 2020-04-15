/*!
 * jQuery JavaScript Library v3.5.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = Object.create( null );

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

{"version":3,"file":"bootstrap.js","sources":["../../js/src/util.js","../../js/src/alert.js","../../js/src/button.js","../../js/src/carousel.js","../../js/src/collapse.js","../../js/src/dropdown.js","../../js/src/modal.js","../../js/src/tools/sanitizer.js","../../js/src/tooltip.js","../../js/src/popover.js","../../js/src/scrollspy.js","../../js/src/tab.js","../../js/src/toast.js"],"sourcesContent":["/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): util.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\n\n/**\n * ------------------------------------------------------------------------\n * Private TransitionEnd Helpers\n * ------------------------------------------------------------------------\n */\n\nconst TRANSITION_END = 'transitionend'\nconst MAX_UID = 1000000\nconst MILLISECONDS_MULTIPLIER = 1000\n\n// Shoutout AngusCroll (https://goo.gl/pxwQGp)\nfunction toType(obj) {\n  return {}.toString.call(obj).match(/\\s([a-z]+)/i)[1].toLowerCase()\n}\n\nfunction getSpecialTransitionEndEvent() {\n  return {\n    bindType: TRANSITION_END,\n    delegateType: TRANSITION_END,\n    handle(event) {\n      if ($(event.target).is(this)) {\n        return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params\n      }\n      return undefined // eslint-disable-line no-undefined\n    }\n  }\n}\n\nfunction transitionEndEmulator(duration) {\n  let called = false\n\n  $(this).one(Util.TRANSITION_END, () => {\n    called = true\n  })\n\n  setTimeout(() => {\n    if (!called) {\n      Util.triggerTransitionEnd(this)\n    }\n  }, duration)\n\n  return this\n}\n\nfunction setTransitionEndSupport() {\n  $.fn.emulateTransitionEnd = transitionEndEmulator\n  $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()\n}\n\n/**\n * --------------------------------------------------------------------------\n * Public Util Api\n * --------------------------------------------------------------------------\n */\n\nconst Util = {\n\n  TRANSITION_END: 'bsTransitionEnd',\n\n  getUID(prefix) {\n    do {\n      // eslint-disable-next-line no-bitwise\n      prefix += ~~(Math.random() * MAX_UID) // \"~~\" acts like a faster Math.floor() here\n    } while (document.getElementById(prefix))\n    return prefix\n  },\n\n  getSelectorFromElement(element) {\n    let selector = element.getAttribute('data-target')\n\n    if (!selector || selector === '#') {\n      const hrefAttr = element.getAttribute('href')\n      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : ''\n    }\n\n    try {\n      return document.querySelector(selector) ? selector : null\n    } catch (err) {\n      return null\n    }\n  },\n\n  getTransitionDurationFromElement(element) {\n    if (!element) {\n      return 0\n    }\n\n    // Get transition-duration of the element\n    let transitionDuration = $(element).css('transition-duration')\n    let transitionDelay = $(element).css('transition-delay')\n\n    const floatTransitionDuration = parseFloat(transitionDuration)\n    const floatTransitionDelay = parseFloat(transitionDelay)\n\n    // Return 0 if element or transition duration is not found\n    if (!floatTransitionDuration && !floatTransitionDelay) {\n      return 0\n    }\n\n    // If multiple durations are defined, take the first\n    transitionDuration = transitionDuration.split(',')[0]\n    transitionDelay = transitionDelay.split(',')[0]\n\n    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER\n  },\n\n  reflow(element) {\n    return element.offsetHeight\n  },\n\n  triggerTransitionEnd(element) {\n    $(element).trigger(TRANSITION_END)\n  },\n\n  // TODO: Remove in v5\n  supportsTransitionEnd() {\n    return Boolean(TRANSITION_END)\n  },\n\n  isElement(obj) {\n    return (obj[0] || obj).nodeType\n  },\n\n  typeCheckConfig(componentName, config, configTypes) {\n    for (const property in configTypes) {\n      if (Object.prototype.hasOwnProperty.call(configTypes, property)) {\n        const expectedTypes = configTypes[property]\n        const value         = config[property]\n        const valueType     = value && Util.isElement(value)\n          ? 'element' : toType(value)\n\n        if (!new RegExp(expectedTypes).test(valueType)) {\n          throw new Error(\n            `${componentName.toUpperCase()}: ` +\n            `Option \"${property}\" provided type \"${valueType}\" ` +\n            `but expected type \"${expectedTypes}\".`)\n        }\n      }\n    }\n  },\n\n  findShadowRoot(element) {\n    if (!document.documentElement.attachShadow) {\n      return null\n    }\n\n    // Can find the shadow root otherwise it'll return the document\n    if (typeof element.getRootNode === 'function') {\n      const root = element.getRootNode()\n      return root instanceof ShadowRoot ? root : null\n    }\n\n    if (element instanceof ShadowRoot) {\n      return element\n    }\n\n    // when we don't find a shadow root\n    if (!element.parentNode) {\n      return null\n    }\n\n    return Util.findShadowRoot(element.parentNode)\n  },\n\n  jQueryDetection() {\n    if (typeof $ === 'undefined') {\n      throw new TypeError('Bootstrap\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\'s JavaScript.')\n    }\n\n    const version = $.fn.jquery.split(' ')[0].split('.')\n    const minMajor = 1\n    const ltMajor = 2\n    const minMinor = 9\n    const minPatch = 1\n    const maxMajor = 4\n\n    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {\n      throw new Error('Bootstrap\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')\n    }\n  }\n}\n\nUtil.jQueryDetection()\nsetTransitionEndSupport()\n\nexport default Util\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): alert.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                = 'alert'\nconst VERSION             = '4.4.1'\nconst DATA_KEY            = 'bs.alert'\nconst EVENT_KEY           = `.${DATA_KEY}`\nconst DATA_API_KEY        = '.data-api'\nconst JQUERY_NO_CONFLICT  = $.fn[NAME]\n\nconst Selector = {\n  DISMISS : '[data-dismiss=\"alert\"]'\n}\n\nconst Event = {\n  CLOSE          : `close${EVENT_KEY}`,\n  CLOSED         : `closed${EVENT_KEY}`,\n  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  ALERT : 'alert',\n  FADE  : 'fade',\n  SHOW  : 'show'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Alert {\n  constructor(element) {\n    this._element = element\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  // Public\n\n  close(element) {\n    let rootElement = this._element\n    if (element) {\n      rootElement = this._getRootElement(element)\n    }\n\n    const customEvent = this._triggerCloseEvent(rootElement)\n\n    if (customEvent.isDefaultPrevented()) {\n      return\n    }\n\n    this._removeElement(rootElement)\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n    this._element = null\n  }\n\n  // Private\n\n  _getRootElement(element) {\n    const selector = Util.getSelectorFromElement(element)\n    let parent     = false\n\n    if (selector) {\n      parent = document.querySelector(selector)\n    }\n\n    if (!parent) {\n      parent = $(element).closest(`.${ClassName.ALERT}`)[0]\n    }\n\n    return parent\n  }\n\n  _triggerCloseEvent(element) {\n    const closeEvent = $.Event(Event.CLOSE)\n\n    $(element).trigger(closeEvent)\n    return closeEvent\n  }\n\n  _removeElement(element) {\n    $(element).removeClass(ClassName.SHOW)\n\n    if (!$(element).hasClass(ClassName.FADE)) {\n      this._destroyElement(element)\n      return\n    }\n\n    const transitionDuration = Util.getTransitionDurationFromElement(element)\n\n    $(element)\n      .one(Util.TRANSITION_END, (event) => this._destroyElement(element, event))\n      .emulateTransitionEnd(transitionDuration)\n  }\n\n  _destroyElement(element) {\n    $(element)\n      .detach()\n      .trigger(Event.CLOSED)\n      .remove()\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      const $element = $(this)\n      let data       = $element.data(DATA_KEY)\n\n      if (!data) {\n        data = new Alert(this)\n        $element.data(DATA_KEY, data)\n      }\n\n      if (config === 'close') {\n        data[config](this)\n      }\n    })\n  }\n\n  static _handleDismiss(alertInstance) {\n    return function (event) {\n      if (event) {\n        event.preventDefault()\n      }\n\n      alertInstance.close(this)\n    }\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document).on(\n  Event.CLICK_DATA_API,\n  Selector.DISMISS,\n  Alert._handleDismiss(new Alert())\n)\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME]             = Alert._jQueryInterface\n$.fn[NAME].Constructor = Alert\n$.fn[NAME].noConflict  = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Alert._jQueryInterface\n}\n\nexport default Alert\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): button.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                = 'button'\nconst VERSION             = '4.4.1'\nconst DATA_KEY            = 'bs.button'\nconst EVENT_KEY           = `.${DATA_KEY}`\nconst DATA_API_KEY        = '.data-api'\nconst JQUERY_NO_CONFLICT  = $.fn[NAME]\n\nconst ClassName = {\n  ACTIVE : 'active',\n  BUTTON : 'btn',\n  FOCUS  : 'focus'\n}\n\nconst Selector = {\n  DATA_TOGGLE_CARROT   : '[data-toggle^=\"button\"]',\n  DATA_TOGGLES         : '[data-toggle=\"buttons\"]',\n  DATA_TOGGLE          : '[data-toggle=\"button\"]',\n  DATA_TOGGLES_BUTTONS : '[data-toggle=\"buttons\"] .btn',\n  INPUT                : 'input:not([type=\"hidden\"])',\n  ACTIVE               : '.active',\n  BUTTON               : '.btn'\n}\n\nconst Event = {\n  CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,\n  FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} ` +\n                          `blur${EVENT_KEY}${DATA_API_KEY}`,\n  LOAD_DATA_API       : `load${EVENT_KEY}${DATA_API_KEY}`\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Button {\n  constructor(element) {\n    this._element = element\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  // Public\n\n  toggle() {\n    let triggerChangeEvent = true\n    let addAriaPressed = true\n    const rootElement = $(this._element).closest(\n      Selector.DATA_TOGGLES\n    )[0]\n\n    if (rootElement) {\n      const input = this._element.querySelector(Selector.INPUT)\n\n      if (input) {\n        if (input.type === 'radio') {\n          if (input.checked &&\n            this._element.classList.contains(ClassName.ACTIVE)) {\n            triggerChangeEvent = false\n          } else {\n            const activeElement = rootElement.querySelector(Selector.ACTIVE)\n\n            if (activeElement) {\n              $(activeElement).removeClass(ClassName.ACTIVE)\n            }\n          }\n        } else if (input.type === 'checkbox') {\n          if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName.ACTIVE)) {\n            triggerChangeEvent = false\n          }\n        } else {\n          // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input\n          triggerChangeEvent = false\n        }\n\n        if (triggerChangeEvent) {\n          input.checked = !this._element.classList.contains(ClassName.ACTIVE)\n          $(input).trigger('change')\n        }\n\n        input.focus()\n        addAriaPressed = false\n      }\n    }\n\n    if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {\n      if (addAriaPressed) {\n        this._element.setAttribute('aria-pressed',\n          !this._element.classList.contains(ClassName.ACTIVE))\n      }\n\n      if (triggerChangeEvent) {\n        $(this._element).toggleClass(ClassName.ACTIVE)\n      }\n    }\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n    this._element = null\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n\n      if (!data) {\n        data = new Button(this)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (config === 'toggle') {\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document)\n  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {\n    let button = event.target\n\n    if (!$(button).hasClass(ClassName.BUTTON)) {\n      button = $(button).closest(Selector.BUTTON)[0]\n    }\n\n    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {\n      event.preventDefault() // work around Firefox bug #1540995\n    } else {\n      const inputBtn = button.querySelector(Selector.INPUT)\n\n      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {\n        event.preventDefault() // work around Firefox bug #1540995\n        return\n      }\n\n      Button._jQueryInterface.call($(button), 'toggle')\n    }\n  })\n  .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {\n    const button = $(event.target).closest(Selector.BUTTON)[0]\n    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))\n  })\n\n$(window).on(Event.LOAD_DATA_API, () => {\n  // ensure correct active class is set to match the controls' actual values/states\n\n  // find all checkboxes/readio buttons inside data-toggle groups\n  let buttons = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLES_BUTTONS))\n  for (let i = 0, len = buttons.length; i < len; i++) {\n    const button = buttons[i]\n    const input = button.querySelector(Selector.INPUT)\n    if (input.checked || input.hasAttribute('checked')) {\n      button.classList.add(ClassName.ACTIVE)\n    } else {\n      button.classList.remove(ClassName.ACTIVE)\n    }\n  }\n\n  // find all button toggles\n  buttons = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE))\n  for (let i = 0, len = buttons.length; i < len; i++) {\n    const button = buttons[i]\n    if (button.getAttribute('aria-pressed') === 'true') {\n      button.classList.add(ClassName.ACTIVE)\n    } else {\n      button.classList.remove(ClassName.ACTIVE)\n    }\n  }\n})\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Button._jQueryInterface\n$.fn[NAME].Constructor = Button\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Button._jQueryInterface\n}\n\nexport default Button\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): carousel.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                   = 'carousel'\nconst VERSION                = '4.4.1'\nconst DATA_KEY               = 'bs.carousel'\nconst EVENT_KEY              = `.${DATA_KEY}`\nconst DATA_API_KEY           = '.data-api'\nconst JQUERY_NO_CONFLICT     = $.fn[NAME]\nconst ARROW_LEFT_KEYCODE     = 37 // KeyboardEvent.which value for left arrow key\nconst ARROW_RIGHT_KEYCODE    = 39 // KeyboardEvent.which value for right arrow key\nconst TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch\nconst SWIPE_THRESHOLD        = 40\n\nconst Default = {\n  interval : 5000,\n  keyboard : true,\n  slide    : false,\n  pause    : 'hover',\n  wrap     : true,\n  touch    : true\n}\n\nconst DefaultType = {\n  interval : '(number|boolean)',\n  keyboard : 'boolean',\n  slide    : '(boolean|string)',\n  pause    : '(string|boolean)',\n  wrap     : 'boolean',\n  touch    : 'boolean'\n}\n\nconst Direction = {\n  NEXT     : 'next',\n  PREV     : 'prev',\n  LEFT     : 'left',\n  RIGHT    : 'right'\n}\n\nconst Event = {\n  SLIDE          : `slide${EVENT_KEY}`,\n  SLID           : `slid${EVENT_KEY}`,\n  KEYDOWN        : `keydown${EVENT_KEY}`,\n  MOUSEENTER     : `mouseenter${EVENT_KEY}`,\n  MOUSELEAVE     : `mouseleave${EVENT_KEY}`,\n  TOUCHSTART     : `touchstart${EVENT_KEY}`,\n  TOUCHMOVE      : `touchmove${EVENT_KEY}`,\n  TOUCHEND       : `touchend${EVENT_KEY}`,\n  POINTERDOWN    : `pointerdown${EVENT_KEY}`,\n  POINTERUP      : `pointerup${EVENT_KEY}`,\n  DRAG_START     : `dragstart${EVENT_KEY}`,\n  LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,\n  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  CAROUSEL      : 'carousel',\n  ACTIVE        : 'active',\n  SLIDE         : 'slide',\n  RIGHT         : 'carousel-item-right',\n  LEFT          : 'carousel-item-left',\n  NEXT          : 'carousel-item-next',\n  PREV          : 'carousel-item-prev',\n  ITEM          : 'carousel-item',\n  POINTER_EVENT : 'pointer-event'\n}\n\nconst Selector = {\n  ACTIVE      : '.active',\n  ACTIVE_ITEM : '.active.carousel-item',\n  ITEM        : '.carousel-item',\n  ITEM_IMG    : '.carousel-item img',\n  NEXT_PREV   : '.carousel-item-next, .carousel-item-prev',\n  INDICATORS  : '.carousel-indicators',\n  DATA_SLIDE  : '[data-slide], [data-slide-to]',\n  DATA_RIDE   : '[data-ride=\"carousel\"]'\n}\n\nconst PointerType = {\n  TOUCH : 'touch',\n  PEN   : 'pen'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\nclass Carousel {\n  constructor(element, config) {\n    this._items         = null\n    this._interval      = null\n    this._activeElement = null\n    this._isPaused      = false\n    this._isSliding     = false\n    this.touchTimeout   = null\n    this.touchStartX    = 0\n    this.touchDeltaX    = 0\n\n    this._config            = this._getConfig(config)\n    this._element           = element\n    this._indicatorsElement = this._element.querySelector(Selector.INDICATORS)\n    this._touchSupported    = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0\n    this._pointerEvent      = Boolean(window.PointerEvent || window.MSPointerEvent)\n\n    this._addEventListeners()\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  // Public\n\n  next() {\n    if (!this._isSliding) {\n      this._slide(Direction.NEXT)\n    }\n  }\n\n  nextWhenVisible() {\n    // Don't call next when the page isn't visible\n    // or the carousel or its parent isn't visible\n    if (!document.hidden &&\n      ($(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden')) {\n      this.next()\n    }\n  }\n\n  prev() {\n    if (!this._isSliding) {\n      this._slide(Direction.PREV)\n    }\n  }\n\n  pause(event) {\n    if (!event) {\n      this._isPaused = true\n    }\n\n    if (this._element.querySelector(Selector.NEXT_PREV)) {\n      Util.triggerTransitionEnd(this._element)\n      this.cycle(true)\n    }\n\n    clearInterval(this._interval)\n    this._interval = null\n  }\n\n  cycle(event) {\n    if (!event) {\n      this._isPaused = false\n    }\n\n    if (this._interval) {\n      clearInterval(this._interval)\n      this._interval = null\n    }\n\n    if (this._config.interval && !this._isPaused) {\n      this._interval = setInterval(\n        (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),\n        this._config.interval\n      )\n    }\n  }\n\n  to(index) {\n    this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM)\n\n    const activeIndex = this._getItemIndex(this._activeElement)\n\n    if (index > this._items.length - 1 || index < 0) {\n      return\n    }\n\n    if (this._isSliding) {\n      $(this._element).one(Event.SLID, () => this.to(index))\n      return\n    }\n\n    if (activeIndex === index) {\n      this.pause()\n      this.cycle()\n      return\n    }\n\n    const direction = index > activeIndex\n      ? Direction.NEXT\n      : Direction.PREV\n\n    this._slide(direction, this._items[index])\n  }\n\n  dispose() {\n    $(this._element).off(EVENT_KEY)\n    $.removeData(this._element, DATA_KEY)\n\n    this._items             = null\n    this._config            = null\n    this._element           = null\n    this._interval          = null\n    this._isPaused          = null\n    this._isSliding         = null\n    this._activeElement     = null\n    this._indicatorsElement = null\n  }\n\n  // Private\n\n  _getConfig(config) {\n    config = {\n      ...Default,\n      ...config\n    }\n    Util.typeCheckConfig(NAME, config, DefaultType)\n    return config\n  }\n\n  _handleSwipe() {\n    const absDeltax = Math.abs(this.touchDeltaX)\n\n    if (absDeltax <= SWIPE_THRESHOLD) {\n      return\n    }\n\n    const direction = absDeltax / this.touchDeltaX\n\n    this.touchDeltaX = 0\n\n    // swipe left\n    if (direction > 0) {\n      this.prev()\n    }\n\n    // swipe right\n    if (direction < 0) {\n      this.next()\n    }\n  }\n\n  _addEventListeners() {\n    if (this._config.keyboard) {\n      $(this._element)\n        .on(Event.KEYDOWN, (event) => this._keydown(event))\n    }\n\n    if (this._config.pause === 'hover') {\n      $(this._element)\n        .on(Event.MOUSEENTER, (event) => this.pause(event))\n        .on(Event.MOUSELEAVE, (event) => this.cycle(event))\n    }\n\n    if (this._config.touch) {\n      this._addTouchEventListeners()\n    }\n  }\n\n  _addTouchEventListeners() {\n    if (!this._touchSupported) {\n      return\n    }\n\n    const start = (event) => {\n      if (this._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {\n        this.touchStartX = event.originalEvent.clientX\n      } else if (!this._pointerEvent) {\n        this.touchStartX = event.originalEvent.touches[0].clientX\n      }\n    }\n\n    const move = (event) => {\n      // ensure swiping with one touch and not pinching\n      if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {\n        this.touchDeltaX = 0\n      } else {\n        this.touchDeltaX = event.originalEvent.touches[0].clientX - this.touchStartX\n      }\n    }\n\n    const end = (event) => {\n      if (this._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {\n        this.touchDeltaX = event.originalEvent.clientX - this.touchStartX\n      }\n\n      this._handleSwipe()\n      if (this._config.pause === 'hover') {\n        // If it's a touch-enabled device, mouseenter/leave are fired as\n        // part of the mouse compatibility events on first tap - the carousel\n        // would stop cycling until user tapped out of it;\n        // here, we listen for touchend, explicitly pause the carousel\n        // (as if it's the second time we tap on it, mouseenter compat event\n        // is NOT fired) and after a timeout (to allow for mouse compatibility\n        // events to fire) we explicitly restart cycling\n\n        this.pause()\n        if (this.touchTimeout) {\n          clearTimeout(this.touchTimeout)\n        }\n        this.touchTimeout = setTimeout((event) => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval)\n      }\n    }\n\n    $(this._element.querySelectorAll(Selector.ITEM_IMG)).on(Event.DRAG_START, (e) => e.preventDefault())\n    if (this._pointerEvent) {\n      $(this._element).on(Event.POINTERDOWN, (event) => start(event))\n      $(this._element).on(Event.POINTERUP, (event) => end(event))\n\n      this._element.classList.add(ClassName.POINTER_EVENT)\n    } else {\n      $(this._element).on(Event.TOUCHSTART, (event) => start(event))\n      $(this._element).on(Event.TOUCHMOVE, (event) => move(event))\n      $(this._element).on(Event.TOUCHEND, (event) => end(event))\n    }\n  }\n\n  _keydown(event) {\n    if (/input|textarea/i.test(event.target.tagName)) {\n      return\n    }\n\n    switch (event.which) {\n      case ARROW_LEFT_KEYCODE:\n        event.preventDefault()\n        this.prev()\n        break\n      case ARROW_RIGHT_KEYCODE:\n        event.preventDefault()\n        this.next()\n        break\n      default:\n    }\n  }\n\n  _getItemIndex(element) {\n    this._items = element && element.parentNode\n      ? [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM))\n      : []\n    return this._items.indexOf(element)\n  }\n\n  _getItemByDirection(direction, activeElement) {\n    const isNextDirection = direction === Direction.NEXT\n    const isPrevDirection = direction === Direction.PREV\n    const activeIndex     = this._getItemIndex(activeElement)\n    const lastItemIndex   = this._items.length - 1\n    const isGoingToWrap   = isPrevDirection && activeIndex === 0 ||\n                            isNextDirection && activeIndex === lastItemIndex\n\n    if (isGoingToWrap && !this._config.wrap) {\n      return activeElement\n    }\n\n    const delta     = direction === Direction.PREV ? -1 : 1\n    const itemIndex = (activeIndex + delta) % this._items.length\n\n    return itemIndex === -1\n      ? this._items[this._items.length - 1] : this._items[itemIndex]\n  }\n\n  _triggerSlideEvent(relatedTarget, eventDirectionName) {\n    const targetIndex = this._getItemIndex(relatedTarget)\n    const fromIndex = this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM))\n    const slideEvent = $.Event(Event.SLIDE, {\n      relatedTarget,\n      direction: eventDirectionName,\n      from: fromIndex,\n      to: targetIndex\n    })\n\n    $(this._element).trigger(slideEvent)\n\n    return slideEvent\n  }\n\n  _setActiveIndicatorElement(element) {\n    if (this._indicatorsElement) {\n      const indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE))\n      $(indicators)\n        .removeClass(ClassName.ACTIVE)\n\n      const nextIndicator = this._indicatorsElement.children[\n        this._getItemIndex(element)\n      ]\n\n      if (nextIndicator) {\n        $(nextIndicator).addClass(ClassName.ACTIVE)\n      }\n    }\n  }\n\n  _slide(direction, element) {\n    const activeElement = this._element.querySelector(Selector.ACTIVE_ITEM)\n    const activeElementIndex = this._getItemIndex(activeElement)\n    const nextElement   = element || activeElement &&\n      this._getItemByDirection(direction, activeElement)\n    const nextElementIndex = this._getItemIndex(nextElement)\n    const isCycling = Boolean(this._interval)\n\n    let directionalClassName\n    let orderClassName\n    let eventDirectionName\n\n    if (direction === Direction.NEXT) {\n      directionalClassName = ClassName.LEFT\n      orderClassName = ClassName.NEXT\n      eventDirectionName = Direction.LEFT\n    } else {\n      directionalClassName = ClassName.RIGHT\n      orderClassName = ClassName.PREV\n      eventDirectionName = Direction.RIGHT\n    }\n\n    if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {\n      this._isSliding = false\n      return\n    }\n\n    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName)\n    if (slideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    if (!activeElement || !nextElement) {\n      // Some weirdness is happening, so we bail\n      return\n    }\n\n    this._isSliding = true\n\n    if (isCycling) {\n      this.pause()\n    }\n\n    this._setActiveIndicatorElement(nextElement)\n\n    const slidEvent = $.Event(Event.SLID, {\n      relatedTarget: nextElement,\n      direction: eventDirectionName,\n      from: activeElementIndex,\n      to: nextElementIndex\n    })\n\n    if ($(this._element).hasClass(ClassName.SLIDE)) {\n      $(nextElement).addClass(orderClassName)\n\n      Util.reflow(nextElement)\n\n      $(activeElement).addClass(directionalClassName)\n      $(nextElement).addClass(directionalClassName)\n\n      const nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10)\n      if (nextElementInterval) {\n        this._config.defaultInterval = this._config.defaultInterval || this._config.interval\n        this._config.interval = nextElementInterval\n      } else {\n        this._config.interval = this._config.defaultInterval || this._config.interval\n      }\n\n      const transitionDuration = Util.getTransitionDurationFromElement(activeElement)\n\n      $(activeElement)\n        .one(Util.TRANSITION_END, () => {\n          $(nextElement)\n            .removeClass(`${directionalClassName} ${orderClassName}`)\n            .addClass(ClassName.ACTIVE)\n\n          $(activeElement).removeClass(`${ClassName.ACTIVE} ${orderClassName} ${directionalClassName}`)\n\n          this._isSliding = false\n\n          setTimeout(() => $(this._element).trigger(slidEvent), 0)\n        })\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      $(activeElement).removeClass(ClassName.ACTIVE)\n      $(nextElement).addClass(ClassName.ACTIVE)\n\n      this._isSliding = false\n      $(this._element).trigger(slidEvent)\n    }\n\n    if (isCycling) {\n      this.cycle()\n    }\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      let _config = {\n        ...Default,\n        ...$(this).data()\n      }\n\n      if (typeof config === 'object') {\n        _config = {\n          ..._config,\n          ...config\n        }\n      }\n\n      const action = typeof config === 'string' ? config : _config.slide\n\n      if (!data) {\n        data = new Carousel(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'number') {\n        data.to(config)\n      } else if (typeof action === 'string') {\n        if (typeof data[action] === 'undefined') {\n          throw new TypeError(`No method named \"${action}\"`)\n        }\n        data[action]()\n      } else if (_config.interval && _config.ride) {\n        data.pause()\n        data.cycle()\n      }\n    })\n  }\n\n  static _dataApiClickHandler(event) {\n    const selector = Util.getSelectorFromElement(this)\n\n    if (!selector) {\n      return\n    }\n\n    const target = $(selector)[0]\n\n    if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {\n      return\n    }\n\n    const config = {\n      ...$(target).data(),\n      ...$(this).data()\n    }\n    const slideIndex = this.getAttribute('data-slide-to')\n\n    if (slideIndex) {\n      config.interval = false\n    }\n\n    Carousel._jQueryInterface.call($(target), config)\n\n    if (slideIndex) {\n      $(target).data(DATA_KEY).to(slideIndex)\n    }\n\n    event.preventDefault()\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document)\n  .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler)\n\n$(window).on(Event.LOAD_DATA_API, () => {\n  const carousels = [].slice.call(document.querySelectorAll(Selector.DATA_RIDE))\n  for (let i = 0, len = carousels.length; i < len; i++) {\n    const $carousel = $(carousels[i])\n    Carousel._jQueryInterface.call($carousel, $carousel.data())\n  }\n})\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Carousel._jQueryInterface\n$.fn[NAME].Constructor = Carousel\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Carousel._jQueryInterface\n}\n\nexport default Carousel\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): collapse.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                = 'collapse'\nconst VERSION             = '4.4.1'\nconst DATA_KEY            = 'bs.collapse'\nconst EVENT_KEY           = `.${DATA_KEY}`\nconst DATA_API_KEY        = '.data-api'\nconst JQUERY_NO_CONFLICT  = $.fn[NAME]\n\nconst Default = {\n  toggle : true,\n  parent : ''\n}\n\nconst DefaultType = {\n  toggle : 'boolean',\n  parent : '(string|element)'\n}\n\nconst Event = {\n  SHOW           : `show${EVENT_KEY}`,\n  SHOWN          : `shown${EVENT_KEY}`,\n  HIDE           : `hide${EVENT_KEY}`,\n  HIDDEN         : `hidden${EVENT_KEY}`,\n  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  SHOW       : 'show',\n  COLLAPSE   : 'collapse',\n  COLLAPSING : 'collapsing',\n  COLLAPSED  : 'collapsed'\n}\n\nconst Dimension = {\n  WIDTH  : 'width',\n  HEIGHT : 'height'\n}\n\nconst Selector = {\n  ACTIVES     : '.show, .collapsing',\n  DATA_TOGGLE : '[data-toggle=\"collapse\"]'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Collapse {\n  constructor(element, config) {\n    this._isTransitioning = false\n    this._element         = element\n    this._config          = this._getConfig(config)\n    this._triggerArray    = [].slice.call(document.querySelectorAll(\n      `[data-toggle=\"collapse\"][href=\"#${element.id}\"],` +\n      `[data-toggle=\"collapse\"][data-target=\"#${element.id}\"]`\n    ))\n\n    const toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE))\n    for (let i = 0, len = toggleList.length; i < len; i++) {\n      const elem = toggleList[i]\n      const selector = Util.getSelectorFromElement(elem)\n      const filterElement = [].slice.call(document.querySelectorAll(selector))\n        .filter((foundElem) => foundElem === element)\n\n      if (selector !== null && filterElement.length > 0) {\n        this._selector = selector\n        this._triggerArray.push(elem)\n      }\n    }\n\n    this._parent = this._config.parent ? this._getParent() : null\n\n    if (!this._config.parent) {\n      this._addAriaAndCollapsedClass(this._element, this._triggerArray)\n    }\n\n    if (this._config.toggle) {\n      this.toggle()\n    }\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  // Public\n\n  toggle() {\n    if ($(this._element).hasClass(ClassName.SHOW)) {\n      this.hide()\n    } else {\n      this.show()\n    }\n  }\n\n  show() {\n    if (this._isTransitioning ||\n      $(this._element).hasClass(ClassName.SHOW)) {\n      return\n    }\n\n    let actives\n    let activesData\n\n    if (this._parent) {\n      actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES))\n        .filter((elem) => {\n          if (typeof this._config.parent === 'string') {\n            return elem.getAttribute('data-parent') === this._config.parent\n          }\n\n          return elem.classList.contains(ClassName.COLLAPSE)\n        })\n\n      if (actives.length === 0) {\n        actives = null\n      }\n    }\n\n    if (actives) {\n      activesData = $(actives).not(this._selector).data(DATA_KEY)\n      if (activesData && activesData._isTransitioning) {\n        return\n      }\n    }\n\n    const startEvent = $.Event(Event.SHOW)\n    $(this._element).trigger(startEvent)\n    if (startEvent.isDefaultPrevented()) {\n      return\n    }\n\n    if (actives) {\n      Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide')\n      if (!activesData) {\n        $(actives).data(DATA_KEY, null)\n      }\n    }\n\n    const dimension = this._getDimension()\n\n    $(this._element)\n      .removeClass(ClassName.COLLAPSE)\n      .addClass(ClassName.COLLAPSING)\n\n    this._element.style[dimension] = 0\n\n    if (this._triggerArray.length) {\n      $(this._triggerArray)\n        .removeClass(ClassName.COLLAPSED)\n        .attr('aria-expanded', true)\n    }\n\n    this.setTransitioning(true)\n\n    const complete = () => {\n      $(this._element)\n        .removeClass(ClassName.COLLAPSING)\n        .addClass(ClassName.COLLAPSE)\n        .addClass(ClassName.SHOW)\n\n      this._element.style[dimension] = ''\n\n      this.setTransitioning(false)\n\n      $(this._element).trigger(Event.SHOWN)\n    }\n\n    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)\n    const scrollSize = `scroll${capitalizedDimension}`\n    const transitionDuration = Util.getTransitionDurationFromElement(this._element)\n\n    $(this._element)\n      .one(Util.TRANSITION_END, complete)\n      .emulateTransitionEnd(transitionDuration)\n\n    this._element.style[dimension] = `${this._element[scrollSize]}px`\n  }\n\n  hide() {\n    if (this._isTransitioning ||\n      !$(this._element).hasClass(ClassName.SHOW)) {\n      return\n    }\n\n    const startEvent = $.Event(Event.HIDE)\n    $(this._element).trigger(startEvent)\n    if (startEvent.isDefaultPrevented()) {\n      return\n    }\n\n    const dimension = this._getDimension()\n\n    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`\n\n    Util.reflow(this._element)\n\n    $(this._element)\n      .addClass(ClassName.COLLAPSING)\n      .removeClass(ClassName.COLLAPSE)\n      .removeClass(ClassName.SHOW)\n\n    const triggerArrayLength = this._triggerArray.length\n    if (triggerArrayLength > 0) {\n      for (let i = 0; i < triggerArrayLength; i++) {\n        const trigger = this._triggerArray[i]\n        const selector = Util.getSelectorFromElement(trigger)\n\n        if (selector !== null) {\n          const $elem = $([].slice.call(document.querySelectorAll(selector)))\n          if (!$elem.hasClass(ClassName.SHOW)) {\n            $(trigger).addClass(ClassName.COLLAPSED)\n              .attr('aria-expanded', false)\n          }\n        }\n      }\n    }\n\n    this.setTransitioning(true)\n\n    const complete = () => {\n      this.setTransitioning(false)\n      $(this._element)\n        .removeClass(ClassName.COLLAPSING)\n        .addClass(ClassName.COLLAPSE)\n        .trigger(Event.HIDDEN)\n    }\n\n    this._element.style[dimension] = ''\n    const transitionDuration = Util.getTransitionDurationFromElement(this._element)\n\n    $(this._element)\n      .one(Util.TRANSITION_END, complete)\n      .emulateTransitionEnd(transitionDuration)\n  }\n\n  setTransitioning(isTransitioning) {\n    this._isTransitioning = isTransitioning\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n\n    this._config          = null\n    this._parent          = null\n    this._element         = null\n    this._triggerArray    = null\n    this._isTransitioning = null\n  }\n\n  // Private\n\n  _getConfig(config) {\n    config = {\n      ...Default,\n      ...config\n    }\n    config.toggle = Boolean(config.toggle) // Coerce string values\n    Util.typeCheckConfig(NAME, config, DefaultType)\n    return config\n  }\n\n  _getDimension() {\n    const hasWidth = $(this._element).hasClass(Dimension.WIDTH)\n    return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT\n  }\n\n  _getParent() {\n    let parent\n\n    if (Util.isElement(this._config.parent)) {\n      parent = this._config.parent\n\n      // It's a jQuery object\n      if (typeof this._config.parent.jquery !== 'undefined') {\n        parent = this._config.parent[0]\n      }\n    } else {\n      parent = document.querySelector(this._config.parent)\n    }\n\n    const selector =\n      `[data-toggle=\"collapse\"][data-parent=\"${this._config.parent}\"]`\n\n    const children = [].slice.call(parent.querySelectorAll(selector))\n    $(children).each((i, element) => {\n      this._addAriaAndCollapsedClass(\n        Collapse._getTargetFromElement(element),\n        [element]\n      )\n    })\n\n    return parent\n  }\n\n  _addAriaAndCollapsedClass(element, triggerArray) {\n    const isOpen = $(element).hasClass(ClassName.SHOW)\n\n    if (triggerArray.length) {\n      $(triggerArray)\n        .toggleClass(ClassName.COLLAPSED, !isOpen)\n        .attr('aria-expanded', isOpen)\n    }\n  }\n\n  // Static\n\n  static _getTargetFromElement(element) {\n    const selector = Util.getSelectorFromElement(element)\n    return selector ? document.querySelector(selector) : null\n  }\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      const $this   = $(this)\n      let data      = $this.data(DATA_KEY)\n      const _config = {\n        ...Default,\n        ...$this.data(),\n        ...typeof config === 'object' && config ? config : {}\n      }\n\n      if (!data && _config.toggle && /show|hide/.test(config)) {\n        _config.toggle = false\n      }\n\n      if (!data) {\n        data = new Collapse(this, _config)\n        $this.data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element\n  if (event.currentTarget.tagName === 'A') {\n    event.preventDefault()\n  }\n\n  const $trigger = $(this)\n  const selector = Util.getSelectorFromElement(this)\n  const selectors = [].slice.call(document.querySelectorAll(selector))\n\n  $(selectors).each(function () {\n    const $target = $(this)\n    const data    = $target.data(DATA_KEY)\n    const config  = data ? 'toggle' : $trigger.data()\n    Collapse._jQueryInterface.call($target, config)\n  })\n})\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Collapse._jQueryInterface\n$.fn[NAME].Constructor = Collapse\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Collapse._jQueryInterface\n}\n\nexport default Collapse\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): dropdown.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Popper from 'popper.js'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                     = 'dropdown'\nconst VERSION                  = '4.4.1'\nconst DATA_KEY                 = 'bs.dropdown'\nconst EVENT_KEY                = `.${DATA_KEY}`\nconst DATA_API_KEY             = '.data-api'\nconst JQUERY_NO_CONFLICT       = $.fn[NAME]\nconst ESCAPE_KEYCODE           = 27 // KeyboardEvent.which value for Escape (Esc) key\nconst SPACE_KEYCODE            = 32 // KeyboardEvent.which value for space key\nconst TAB_KEYCODE              = 9 // KeyboardEvent.which value for tab key\nconst ARROW_UP_KEYCODE         = 38 // KeyboardEvent.which value for up arrow key\nconst ARROW_DOWN_KEYCODE       = 40 // KeyboardEvent.which value for down arrow key\nconst RIGHT_MOUSE_BUTTON_WHICH = 3 // MouseEvent.which value for the right button (assuming a right-handed mouse)\nconst REGEXP_KEYDOWN           = new RegExp(`${ARROW_UP_KEYCODE}|${ARROW_DOWN_KEYCODE}|${ESCAPE_KEYCODE}`)\n\nconst Event = {\n  HIDE             : `hide${EVENT_KEY}`,\n  HIDDEN           : `hidden${EVENT_KEY}`,\n  SHOW             : `show${EVENT_KEY}`,\n  SHOWN            : `shown${EVENT_KEY}`,\n  CLICK            : `click${EVENT_KEY}`,\n  CLICK_DATA_API   : `click${EVENT_KEY}${DATA_API_KEY}`,\n  KEYDOWN_DATA_API : `keydown${EVENT_KEY}${DATA_API_KEY}`,\n  KEYUP_DATA_API   : `keyup${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  DISABLED        : 'disabled',\n  SHOW            : 'show',\n  DROPUP          : 'dropup',\n  DROPRIGHT       : 'dropright',\n  DROPLEFT        : 'dropleft',\n  MENURIGHT       : 'dropdown-menu-right',\n  MENULEFT        : 'dropdown-menu-left',\n  POSITION_STATIC : 'position-static'\n}\n\nconst Selector = {\n  DATA_TOGGLE   : '[data-toggle=\"dropdown\"]',\n  FORM_CHILD    : '.dropdown form',\n  MENU          : '.dropdown-menu',\n  NAVBAR_NAV    : '.navbar-nav',\n  VISIBLE_ITEMS : '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'\n}\n\nconst AttachmentMap = {\n  TOP       : 'top-start',\n  TOPEND    : 'top-end',\n  BOTTOM    : 'bottom-start',\n  BOTTOMEND : 'bottom-end',\n  RIGHT     : 'right-start',\n  RIGHTEND  : 'right-end',\n  LEFT      : 'left-start',\n  LEFTEND   : 'left-end'\n}\n\nconst Default = {\n  offset       : 0,\n  flip         : true,\n  boundary     : 'scrollParent',\n  reference    : 'toggle',\n  display      : 'dynamic',\n  popperConfig : null\n}\n\nconst DefaultType = {\n  offset       : '(number|string|function)',\n  flip         : 'boolean',\n  boundary     : '(string|element)',\n  reference    : '(string|element)',\n  display      : 'string',\n  popperConfig : '(null|object)'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Dropdown {\n  constructor(element, config) {\n    this._element  = element\n    this._popper   = null\n    this._config   = this._getConfig(config)\n    this._menu     = this._getMenuElement()\n    this._inNavbar = this._detectNavbar()\n\n    this._addEventListeners()\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  // Public\n\n  toggle() {\n    if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {\n      return\n    }\n\n    const isActive = $(this._menu).hasClass(ClassName.SHOW)\n\n    Dropdown._clearMenus()\n\n    if (isActive) {\n      return\n    }\n\n    this.show(true)\n  }\n\n  show(usePopper = false) {\n    if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || $(this._menu).hasClass(ClassName.SHOW)) {\n      return\n    }\n\n    const relatedTarget = {\n      relatedTarget: this._element\n    }\n    const showEvent = $.Event(Event.SHOW, relatedTarget)\n    const parent = Dropdown._getParentFromElement(this._element)\n\n    $(parent).trigger(showEvent)\n\n    if (showEvent.isDefaultPrevented()) {\n      return\n    }\n\n    // Disable totally Popper.js for Dropdown in Navbar\n    if (!this._inNavbar && usePopper) {\n      /**\n       * Check for Popper dependency\n       * Popper - https://popper.js.org\n       */\n      if (typeof Popper === 'undefined') {\n        throw new TypeError('Bootstrap\\'s dropdowns require Popper.js (https://popper.js.org/)')\n      }\n\n      let referenceElement = this._element\n\n      if (this._config.reference === 'parent') {\n        referenceElement = parent\n      } else if (Util.isElement(this._config.reference)) {\n        referenceElement = this._config.reference\n\n        // Check if it's jQuery element\n        if (typeof this._config.reference.jquery !== 'undefined') {\n          referenceElement = this._config.reference[0]\n        }\n      }\n\n      // If boundary is not `scrollParent`, then set position to `static`\n      // to allow the menu to \"escape\" the scroll parent's boundaries\n      // https://github.com/twbs/bootstrap/issues/24251\n      if (this._config.boundary !== 'scrollParent') {\n        $(parent).addClass(ClassName.POSITION_STATIC)\n      }\n      this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig())\n    }\n\n    // If this is a touch-enabled device we add extra\n    // empty mouseover listeners to the body's immediate children;\n    // only needed because of broken event delegation on iOS\n    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n    if ('ontouchstart' in document.documentElement &&\n        $(parent).closest(Selector.NAVBAR_NAV).length === 0) {\n      $(document.body).children().on('mouseover', null, $.noop)\n    }\n\n    this._element.focus()\n    this._element.setAttribute('aria-expanded', true)\n\n    $(this._menu).toggleClass(ClassName.SHOW)\n    $(parent)\n      .toggleClass(ClassName.SHOW)\n      .trigger($.Event(Event.SHOWN, relatedTarget))\n  }\n\n  hide() {\n    if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED) || !$(this._menu).hasClass(ClassName.SHOW)) {\n      return\n    }\n\n    const relatedTarget = {\n      relatedTarget: this._element\n    }\n    const hideEvent = $.Event(Event.HIDE, relatedTarget)\n    const parent = Dropdown._getParentFromElement(this._element)\n\n    $(parent).trigger(hideEvent)\n\n    if (hideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    if (this._popper) {\n      this._popper.destroy()\n    }\n\n    $(this._menu).toggleClass(ClassName.SHOW)\n    $(parent)\n      .toggleClass(ClassName.SHOW)\n      .trigger($.Event(Event.HIDDEN, relatedTarget))\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n    $(this._element).off(EVENT_KEY)\n    this._element = null\n    this._menu = null\n    if (this._popper !== null) {\n      this._popper.destroy()\n      this._popper = null\n    }\n  }\n\n  update() {\n    this._inNavbar = this._detectNavbar()\n    if (this._popper !== null) {\n      this._popper.scheduleUpdate()\n    }\n  }\n\n  // Private\n\n  _addEventListeners() {\n    $(this._element).on(Event.CLICK, (event) => {\n      event.preventDefault()\n      event.stopPropagation()\n      this.toggle()\n    })\n  }\n\n  _getConfig(config) {\n    config = {\n      ...this.constructor.Default,\n      ...$(this._element).data(),\n      ...config\n    }\n\n    Util.typeCheckConfig(\n      NAME,\n      config,\n      this.constructor.DefaultType\n    )\n\n    return config\n  }\n\n  _getMenuElement() {\n    if (!this._menu) {\n      const parent = Dropdown._getParentFromElement(this._element)\n\n      if (parent) {\n        this._menu = parent.querySelector(Selector.MENU)\n      }\n    }\n    return this._menu\n  }\n\n  _getPlacement() {\n    const $parentDropdown = $(this._element.parentNode)\n    let placement = AttachmentMap.BOTTOM\n\n    // Handle dropup\n    if ($parentDropdown.hasClass(ClassName.DROPUP)) {\n      placement = AttachmentMap.TOP\n      if ($(this._menu).hasClass(ClassName.MENURIGHT)) {\n        placement = AttachmentMap.TOPEND\n      }\n    } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {\n      placement = AttachmentMap.RIGHT\n    } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {\n      placement = AttachmentMap.LEFT\n    } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {\n      placement = AttachmentMap.BOTTOMEND\n    }\n    return placement\n  }\n\n  _detectNavbar() {\n    return $(this._element).closest('.navbar').length > 0\n  }\n\n  _getOffset() {\n    const offset = {}\n\n    if (typeof this._config.offset === 'function') {\n      offset.fn = (data) => {\n        data.offsets = {\n          ...data.offsets,\n          ...this._config.offset(data.offsets, this._element) || {}\n        }\n\n        return data\n      }\n    } else {\n      offset.offset = this._config.offset\n    }\n\n    return offset\n  }\n\n  _getPopperConfig() {\n    const popperConfig = {\n      placement: this._getPlacement(),\n      modifiers: {\n        offset: this._getOffset(),\n        flip: {\n          enabled: this._config.flip\n        },\n        preventOverflow: {\n          boundariesElement: this._config.boundary\n        }\n      }\n    }\n\n    // Disable Popper.js if we have a static display\n    if (this._config.display === 'static') {\n      popperConfig.modifiers.applyStyle = {\n        enabled: false\n      }\n    }\n\n    return {\n      ...popperConfig,\n      ...this._config.popperConfig\n    }\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      const _config = typeof config === 'object' ? config : null\n\n      if (!data) {\n        data = new Dropdown(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n\n  static _clearMenus(event) {\n    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH ||\n      event.type === 'keyup' && event.which !== TAB_KEYCODE)) {\n      return\n    }\n\n    const toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE))\n\n    for (let i = 0, len = toggles.length; i < len; i++) {\n      const parent = Dropdown._getParentFromElement(toggles[i])\n      const context = $(toggles[i]).data(DATA_KEY)\n      const relatedTarget = {\n        relatedTarget: toggles[i]\n      }\n\n      if (event && event.type === 'click') {\n        relatedTarget.clickEvent = event\n      }\n\n      if (!context) {\n        continue\n      }\n\n      const dropdownMenu = context._menu\n      if (!$(parent).hasClass(ClassName.SHOW)) {\n        continue\n      }\n\n      if (event && (event.type === 'click' &&\n          /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) &&\n          $.contains(parent, event.target)) {\n        continue\n      }\n\n      const hideEvent = $.Event(Event.HIDE, relatedTarget)\n      $(parent).trigger(hideEvent)\n      if (hideEvent.isDefaultPrevented()) {\n        continue\n      }\n\n      // If this is a touch-enabled device we remove the extra\n      // empty mouseover listeners we added for iOS support\n      if ('ontouchstart' in document.documentElement) {\n        $(document.body).children().off('mouseover', null, $.noop)\n      }\n\n      toggles[i].setAttribute('aria-expanded', 'false')\n\n      if (context._popper) {\n        context._popper.destroy()\n      }\n\n      $(dropdownMenu).removeClass(ClassName.SHOW)\n      $(parent)\n        .removeClass(ClassName.SHOW)\n        .trigger($.Event(Event.HIDDEN, relatedTarget))\n    }\n  }\n\n  static _getParentFromElement(element) {\n    let parent\n    const selector = Util.getSelectorFromElement(element)\n\n    if (selector) {\n      parent = document.querySelector(selector)\n    }\n\n    return parent || element.parentNode\n  }\n\n  // eslint-disable-next-line complexity\n  static _dataApiKeydownHandler(event) {\n    // If not input/textarea:\n    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command\n    // If input/textarea:\n    //  - If space key => not a dropdown command\n    //  - If key is other than escape\n    //    - If key is not up or down => not a dropdown command\n    //    - If trigger inside the menu => not a dropdown command\n    if (/input|textarea/i.test(event.target.tagName)\n      ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE &&\n      (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE ||\n        $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {\n      return\n    }\n\n    event.preventDefault()\n    event.stopPropagation()\n\n    if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {\n      return\n    }\n\n    const parent   = Dropdown._getParentFromElement(this)\n    const isActive = $(parent).hasClass(ClassName.SHOW)\n\n    if (!isActive && event.which === ESCAPE_KEYCODE) {\n      return\n    }\n\n    if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {\n      if (event.which === ESCAPE_KEYCODE) {\n        const toggle = parent.querySelector(Selector.DATA_TOGGLE)\n        $(toggle).trigger('focus')\n      }\n\n      $(this).trigger('click')\n      return\n    }\n\n    const items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS))\n      .filter((item) => $(item).is(':visible'))\n\n    if (items.length === 0) {\n      return\n    }\n\n    let index = items.indexOf(event.target)\n\n    if (event.which === ARROW_UP_KEYCODE && index > 0) { // Up\n      index--\n    }\n\n    if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) { // Down\n      index++\n    }\n\n    if (index < 0) {\n      index = 0\n    }\n\n    items[index].focus()\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document)\n  .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler)\n  .on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler)\n  .on(`${Event.CLICK_DATA_API} ${Event.KEYUP_DATA_API}`, Dropdown._clearMenus)\n  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n    event.preventDefault()\n    event.stopPropagation()\n    Dropdown._jQueryInterface.call($(this), 'toggle')\n  })\n  .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, (e) => {\n    e.stopPropagation()\n  })\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Dropdown._jQueryInterface\n$.fn[NAME].Constructor = Dropdown\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Dropdown._jQueryInterface\n}\n\n\nexport default Dropdown\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): modal.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME               = 'modal'\nconst VERSION            = '4.4.1'\nconst DATA_KEY           = 'bs.modal'\nconst EVENT_KEY          = `.${DATA_KEY}`\nconst DATA_API_KEY       = '.data-api'\nconst JQUERY_NO_CONFLICT = $.fn[NAME]\nconst ESCAPE_KEYCODE     = 27 // KeyboardEvent.which value for Escape (Esc) key\n\nconst Default = {\n  backdrop : true,\n  keyboard : true,\n  focus    : true,\n  show     : true\n}\n\nconst DefaultType = {\n  backdrop : '(boolean|string)',\n  keyboard : 'boolean',\n  focus    : 'boolean',\n  show     : 'boolean'\n}\n\nconst Event = {\n  HIDE              : `hide${EVENT_KEY}`,\n  HIDE_PREVENTED    : `hidePrevented${EVENT_KEY}`,\n  HIDDEN            : `hidden${EVENT_KEY}`,\n  SHOW              : `show${EVENT_KEY}`,\n  SHOWN             : `shown${EVENT_KEY}`,\n  FOCUSIN           : `focusin${EVENT_KEY}`,\n  RESIZE            : `resize${EVENT_KEY}`,\n  CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,\n  KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,\n  MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,\n  MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,\n  CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  SCROLLABLE         : 'modal-dialog-scrollable',\n  SCROLLBAR_MEASURER : 'modal-scrollbar-measure',\n  BACKDROP           : 'modal-backdrop',\n  OPEN               : 'modal-open',\n  FADE               : 'fade',\n  SHOW               : 'show',\n  STATIC             : 'modal-static'\n}\n\nconst Selector = {\n  DIALOG         : '.modal-dialog',\n  MODAL_BODY     : '.modal-body',\n  DATA_TOGGLE    : '[data-toggle=\"modal\"]',\n  DATA_DISMISS   : '[data-dismiss=\"modal\"]',\n  FIXED_CONTENT  : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',\n  STICKY_CONTENT : '.sticky-top'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Modal {\n  constructor(element, config) {\n    this._config              = this._getConfig(config)\n    this._element             = element\n    this._dialog              = element.querySelector(Selector.DIALOG)\n    this._backdrop            = null\n    this._isShown             = false\n    this._isBodyOverflowing   = false\n    this._ignoreBackdropClick = false\n    this._isTransitioning     = false\n    this._scrollbarWidth      = 0\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  // Public\n\n  toggle(relatedTarget) {\n    return this._isShown ? this.hide() : this.show(relatedTarget)\n  }\n\n  show(relatedTarget) {\n    if (this._isShown || this._isTransitioning) {\n      return\n    }\n\n    if ($(this._element).hasClass(ClassName.FADE)) {\n      this._isTransitioning = true\n    }\n\n    const showEvent = $.Event(Event.SHOW, {\n      relatedTarget\n    })\n\n    $(this._element).trigger(showEvent)\n\n    if (this._isShown || showEvent.isDefaultPrevented()) {\n      return\n    }\n\n    this._isShown = true\n\n    this._checkScrollbar()\n    this._setScrollbar()\n\n    this._adjustDialog()\n\n    this._setEscapeEvent()\n    this._setResizeEvent()\n\n    $(this._element).on(\n      Event.CLICK_DISMISS,\n      Selector.DATA_DISMISS,\n      (event) => this.hide(event)\n    )\n\n    $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {\n      $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {\n        if ($(event.target).is(this._element)) {\n          this._ignoreBackdropClick = true\n        }\n      })\n    })\n\n    this._showBackdrop(() => this._showElement(relatedTarget))\n  }\n\n  hide(event) {\n    if (event) {\n      event.preventDefault()\n    }\n\n    if (!this._isShown || this._isTransitioning) {\n      return\n    }\n\n    const hideEvent = $.Event(Event.HIDE)\n\n    $(this._element).trigger(hideEvent)\n\n    if (!this._isShown || hideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    this._isShown = false\n    const transition = $(this._element).hasClass(ClassName.FADE)\n\n    if (transition) {\n      this._isTransitioning = true\n    }\n\n    this._setEscapeEvent()\n    this._setResizeEvent()\n\n    $(document).off(Event.FOCUSIN)\n\n    $(this._element).removeClass(ClassName.SHOW)\n\n    $(this._element).off(Event.CLICK_DISMISS)\n    $(this._dialog).off(Event.MOUSEDOWN_DISMISS)\n\n\n    if (transition) {\n      const transitionDuration  = Util.getTransitionDurationFromElement(this._element)\n\n      $(this._element)\n        .one(Util.TRANSITION_END, (event) => this._hideModal(event))\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      this._hideModal()\n    }\n  }\n\n  dispose() {\n    [window, this._element, this._dialog]\n      .forEach((htmlElement) => $(htmlElement).off(EVENT_KEY))\n\n    /**\n     * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`\n     * Do not move `document` in `htmlElements` array\n     * It will remove `Event.CLICK_DATA_API` event that should remain\n     */\n    $(document).off(Event.FOCUSIN)\n\n    $.removeData(this._element, DATA_KEY)\n\n    this._config              = null\n    this._element             = null\n    this._dialog              = null\n    this._backdrop            = null\n    this._isShown             = null\n    this._isBodyOverflowing   = null\n    this._ignoreBackdropClick = null\n    this._isTransitioning     = null\n    this._scrollbarWidth      = null\n  }\n\n  handleUpdate() {\n    this._adjustDialog()\n  }\n\n  // Private\n\n  _getConfig(config) {\n    config = {\n      ...Default,\n      ...config\n    }\n    Util.typeCheckConfig(NAME, config, DefaultType)\n    return config\n  }\n\n  _triggerBackdropTransition() {\n    if (this._config.backdrop === 'static') {\n      const hideEventPrevented = $.Event(Event.HIDE_PREVENTED)\n\n      $(this._element).trigger(hideEventPrevented)\n      if (hideEventPrevented.defaultPrevented) {\n        return\n      }\n\n      this._element.classList.add(ClassName.STATIC)\n\n      const modalTransitionDuration = Util.getTransitionDurationFromElement(this._element)\n\n      $(this._element).one(Util.TRANSITION_END, () => {\n        this._element.classList.remove(ClassName.STATIC)\n      })\n        .emulateTransitionEnd(modalTransitionDuration)\n      this._element.focus()\n    } else {\n      this.hide()\n    }\n  }\n\n  _showElement(relatedTarget) {\n    const transition = $(this._element).hasClass(ClassName.FADE)\n    const modalBody = this._dialog ? this._dialog.querySelector(Selector.MODAL_BODY) : null\n\n    if (!this._element.parentNode ||\n        this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {\n      // Don't move modal's DOM position\n      document.body.appendChild(this._element)\n    }\n\n    this._element.style.display = 'block'\n    this._element.removeAttribute('aria-hidden')\n    this._element.setAttribute('aria-modal', true)\n\n    if ($(this._dialog).hasClass(ClassName.SCROLLABLE) && modalBody) {\n      modalBody.scrollTop = 0\n    } else {\n      this._element.scrollTop = 0\n    }\n\n    if (transition) {\n      Util.reflow(this._element)\n    }\n\n    $(this._element).addClass(ClassName.SHOW)\n\n    if (this._config.focus) {\n      this._enforceFocus()\n    }\n\n    const shownEvent = $.Event(Event.SHOWN, {\n      relatedTarget\n    })\n\n    const transitionComplete = () => {\n      if (this._config.focus) {\n        this._element.focus()\n      }\n      this._isTransitioning = false\n      $(this._element).trigger(shownEvent)\n    }\n\n    if (transition) {\n      const transitionDuration  = Util.getTransitionDurationFromElement(this._dialog)\n\n      $(this._dialog)\n        .one(Util.TRANSITION_END, transitionComplete)\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      transitionComplete()\n    }\n  }\n\n  _enforceFocus() {\n    $(document)\n      .off(Event.FOCUSIN) // Guard against infinite focus loop\n      .on(Event.FOCUSIN, (event) => {\n        if (document !== event.target &&\n            this._element !== event.target &&\n            $(this._element).has(event.target).length === 0) {\n          this._element.focus()\n        }\n      })\n  }\n\n  _setEscapeEvent() {\n    if (this._isShown && this._config.keyboard) {\n      $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {\n        if (event.which === ESCAPE_KEYCODE) {\n          this._triggerBackdropTransition()\n        }\n      })\n    } else if (!this._isShown) {\n      $(this._element).off(Event.KEYDOWN_DISMISS)\n    }\n  }\n\n  _setResizeEvent() {\n    if (this._isShown) {\n      $(window).on(Event.RESIZE, (event) => this.handleUpdate(event))\n    } else {\n      $(window).off(Event.RESIZE)\n    }\n  }\n\n  _hideModal() {\n    this._element.style.display = 'none'\n    this._element.setAttribute('aria-hidden', true)\n    this._element.removeAttribute('aria-modal')\n    this._isTransitioning = false\n    this._showBackdrop(() => {\n      $(document.body).removeClass(ClassName.OPEN)\n      this._resetAdjustments()\n      this._resetScrollbar()\n      $(this._element).trigger(Event.HIDDEN)\n    })\n  }\n\n  _removeBackdrop() {\n    if (this._backdrop) {\n      $(this._backdrop).remove()\n      this._backdrop = null\n    }\n  }\n\n  _showBackdrop(callback) {\n    const animate = $(this._element).hasClass(ClassName.FADE)\n      ? ClassName.FADE : ''\n\n    if (this._isShown && this._config.backdrop) {\n      this._backdrop = document.createElement('div')\n      this._backdrop.className = ClassName.BACKDROP\n\n      if (animate) {\n        this._backdrop.classList.add(animate)\n      }\n\n      $(this._backdrop).appendTo(document.body)\n\n      $(this._element).on(Event.CLICK_DISMISS, (event) => {\n        if (this._ignoreBackdropClick) {\n          this._ignoreBackdropClick = false\n          return\n        }\n        if (event.target !== event.currentTarget) {\n          return\n        }\n\n        this._triggerBackdropTransition()\n      })\n\n      if (animate) {\n        Util.reflow(this._backdrop)\n      }\n\n      $(this._backdrop).addClass(ClassName.SHOW)\n\n      if (!callback) {\n        return\n      }\n\n      if (!animate) {\n        callback()\n        return\n      }\n\n      const backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop)\n\n      $(this._backdrop)\n        .one(Util.TRANSITION_END, callback)\n        .emulateTransitionEnd(backdropTransitionDuration)\n    } else if (!this._isShown && this._backdrop) {\n      $(this._backdrop).removeClass(ClassName.SHOW)\n\n      const callbackRemove = () => {\n        this._removeBackdrop()\n        if (callback) {\n          callback()\n        }\n      }\n\n      if ($(this._element).hasClass(ClassName.FADE)) {\n        const backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop)\n\n        $(this._backdrop)\n          .one(Util.TRANSITION_END, callbackRemove)\n          .emulateTransitionEnd(backdropTransitionDuration)\n      } else {\n        callbackRemove()\n      }\n    } else if (callback) {\n      callback()\n    }\n  }\n\n  // ----------------------------------------------------------------------\n  // the following methods are used to handle overflowing modals\n  // todo (fat): these should probably be refactored out of modal.js\n  // ----------------------------------------------------------------------\n\n  _adjustDialog() {\n    const isModalOverflowing =\n      this._element.scrollHeight > document.documentElement.clientHeight\n\n    if (!this._isBodyOverflowing && isModalOverflowing) {\n      this._element.style.paddingLeft = `${this._scrollbarWidth}px`\n    }\n\n    if (this._isBodyOverflowing && !isModalOverflowing) {\n      this._element.style.paddingRight = `${this._scrollbarWidth}px`\n    }\n  }\n\n  _resetAdjustments() {\n    this._element.style.paddingLeft = ''\n    this._element.style.paddingRight = ''\n  }\n\n  _checkScrollbar() {\n    const rect = document.body.getBoundingClientRect()\n    this._isBodyOverflowing = rect.left + rect.right < window.innerWidth\n    this._scrollbarWidth = this._getScrollbarWidth()\n  }\n\n  _setScrollbar() {\n    if (this._isBodyOverflowing) {\n      // Note: DOMNode.style.paddingRight returns the actual value or '' if not set\n      //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set\n      const fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT))\n      const stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT))\n\n      // Adjust fixed content padding\n      $(fixedContent).each((index, element) => {\n        const actualPadding = element.style.paddingRight\n        const calculatedPadding = $(element).css('padding-right')\n        $(element)\n          .data('padding-right', actualPadding)\n          .css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n      })\n\n      // Adjust sticky content margin\n      $(stickyContent).each((index, element) => {\n        const actualMargin = element.style.marginRight\n        const calculatedMargin = $(element).css('margin-right')\n        $(element)\n          .data('margin-right', actualMargin)\n          .css('margin-right', `${parseFloat(calculatedMargin) - this._scrollbarWidth}px`)\n      })\n\n      // Adjust body padding\n      const actualPadding = document.body.style.paddingRight\n      const calculatedPadding = $(document.body).css('padding-right')\n      $(document.body)\n        .data('padding-right', actualPadding)\n        .css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n    }\n\n    $(document.body).addClass(ClassName.OPEN)\n  }\n\n  _resetScrollbar() {\n    // Restore fixed content padding\n    const fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT))\n    $(fixedContent).each((index, element) => {\n      const padding = $(element).data('padding-right')\n      $(element).removeData('padding-right')\n      element.style.paddingRight = padding ? padding : ''\n    })\n\n    // Restore sticky content\n    const elements = [].slice.call(document.querySelectorAll(`${Selector.STICKY_CONTENT}`))\n    $(elements).each((index, element) => {\n      const margin = $(element).data('margin-right')\n      if (typeof margin !== 'undefined') {\n        $(element).css('margin-right', margin).removeData('margin-right')\n      }\n    })\n\n    // Restore body padding\n    const padding = $(document.body).data('padding-right')\n    $(document.body).removeData('padding-right')\n    document.body.style.paddingRight = padding ? padding : ''\n  }\n\n  _getScrollbarWidth() { // thx d.walsh\n    const scrollDiv = document.createElement('div')\n    scrollDiv.className = ClassName.SCROLLBAR_MEASURER\n    document.body.appendChild(scrollDiv)\n    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth\n    document.body.removeChild(scrollDiv)\n    return scrollbarWidth\n  }\n\n  // Static\n\n  static _jQueryInterface(config, relatedTarget) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      const _config = {\n        ...Default,\n        ...$(this).data(),\n        ...typeof config === 'object' && config ? config : {}\n      }\n\n      if (!data) {\n        data = new Modal(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config](relatedTarget)\n      } else if (_config.show) {\n        data.show(relatedTarget)\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n  let target\n  const selector = Util.getSelectorFromElement(this)\n\n  if (selector) {\n    target = document.querySelector(selector)\n  }\n\n  const config = $(target).data(DATA_KEY)\n    ? 'toggle' : {\n      ...$(target).data(),\n      ...$(this).data()\n    }\n\n  if (this.tagName === 'A' || this.tagName === 'AREA') {\n    event.preventDefault()\n  }\n\n  const $target = $(target).one(Event.SHOW, (showEvent) => {\n    if (showEvent.isDefaultPrevented()) {\n      // Only register focus restorer if modal will actually get shown\n      return\n    }\n\n    $target.one(Event.HIDDEN, () => {\n      if ($(this).is(':visible')) {\n        this.focus()\n      }\n    })\n  })\n\n  Modal._jQueryInterface.call($(target), config, this)\n})\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Modal._jQueryInterface\n$.fn[NAME].Constructor = Modal\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Modal._jQueryInterface\n}\n\nexport default Modal\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): tools/sanitizer.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst uriAttrs = [\n  'background',\n  'cite',\n  'href',\n  'itemtype',\n  'longdesc',\n  'poster',\n  'src',\n  'xlink:href'\n]\n\nconst ARIA_ATTRIBUTE_PATTERN = /^aria-[\\w-]*$/i\n\nexport const DefaultWhitelist = {\n  // Global attributes allowed on any supplied element below.\n  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],\n  a: ['target', 'href', 'title', 'rel'],\n  area: [],\n  b: [],\n  br: [],\n  col: [],\n  code: [],\n  div: [],\n  em: [],\n  hr: [],\n  h1: [],\n  h2: [],\n  h3: [],\n  h4: [],\n  h5: [],\n  h6: [],\n  i: [],\n  img: ['src', 'alt', 'title', 'width', 'height'],\n  li: [],\n  ol: [],\n  p: [],\n  pre: [],\n  s: [],\n  small: [],\n  span: [],\n  sub: [],\n  sup: [],\n  strong: [],\n  u: [],\n  ul: []\n}\n\n/**\n * A pattern that recognizes a commonly useful subset of URLs that are safe.\n *\n * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts\n */\nconst SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi\n\n/**\n * A pattern that matches safe data URLs. Only matches image, video and audio types.\n *\n * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts\n */\nconst DATA_URL_PATTERN = /^data:(?:image\\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\\/(?:mpeg|mp4|ogg|webm)|audio\\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i\n\nfunction allowedAttribute(attr, allowedAttributeList) {\n  const attrName = attr.nodeName.toLowerCase()\n\n  if (allowedAttributeList.indexOf(attrName) !== -1) {\n    if (uriAttrs.indexOf(attrName) !== -1) {\n      return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))\n    }\n\n    return true\n  }\n\n  const regExp = allowedAttributeList.filter((attrRegex) => attrRegex instanceof RegExp)\n\n  // Check if a regular expression validates the attribute.\n  for (let i = 0, l = regExp.length; i < l; i++) {\n    if (attrName.match(regExp[i])) {\n      return true\n    }\n  }\n\n  return false\n}\n\nexport function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {\n  if (unsafeHtml.length === 0) {\n    return unsafeHtml\n  }\n\n  if (sanitizeFn && typeof sanitizeFn === 'function') {\n    return sanitizeFn(unsafeHtml)\n  }\n\n  const domParser = new window.DOMParser()\n  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html')\n  const whitelistKeys = Object.keys(whiteList)\n  const elements = [].slice.call(createdDocument.body.querySelectorAll('*'))\n\n  for (let i = 0, len = elements.length; i < len; i++) {\n    const el = elements[i]\n    const elName = el.nodeName.toLowerCase()\n\n    if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {\n      el.parentNode.removeChild(el)\n\n      continue\n    }\n\n    const attributeList = [].slice.call(el.attributes)\n    const whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])\n\n    attributeList.forEach((attr) => {\n      if (!allowedAttribute(attr, whitelistedAttributes)) {\n        el.removeAttribute(attr.nodeName)\n      }\n    })\n  }\n\n  return createdDocument.body.innerHTML\n}\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): tooltip.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport {\n  DefaultWhitelist,\n  sanitizeHtml\n} from './tools/sanitizer'\nimport $ from 'jquery'\nimport Popper from 'popper.js'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                  = 'tooltip'\nconst VERSION               = '4.4.1'\nconst DATA_KEY              = 'bs.tooltip'\nconst EVENT_KEY             = `.${DATA_KEY}`\nconst JQUERY_NO_CONFLICT    = $.fn[NAME]\nconst CLASS_PREFIX          = 'bs-tooltip'\nconst BSCLS_PREFIX_REGEX    = new RegExp(`(^|\\\\s)${CLASS_PREFIX}\\\\S+`, 'g')\nconst DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']\n\nconst DefaultType = {\n  animation         : 'boolean',\n  template          : 'string',\n  title             : '(string|element|function)',\n  trigger           : 'string',\n  delay             : '(number|object)',\n  html              : 'boolean',\n  selector          : '(string|boolean)',\n  placement         : '(string|function)',\n  offset            : '(number|string|function)',\n  container         : '(string|element|boolean)',\n  fallbackPlacement : '(string|array)',\n  boundary          : '(string|element)',\n  sanitize          : 'boolean',\n  sanitizeFn        : '(null|function)',\n  whiteList         : 'object',\n  popperConfig      : '(null|object)'\n}\n\nconst AttachmentMap = {\n  AUTO   : 'auto',\n  TOP    : 'top',\n  RIGHT  : 'right',\n  BOTTOM : 'bottom',\n  LEFT   : 'left'\n}\n\nconst Default = {\n  animation         : true,\n  template          : '<div class=\"tooltip\" role=\"tooltip\">' +\n                    '<div class=\"arrow\"></div>' +\n                    '<div class=\"tooltip-inner\"></div></div>',\n  trigger           : 'hover focus',\n  title             : '',\n  delay             : 0,\n  html              : false,\n  selector          : false,\n  placement         : 'top',\n  offset            : 0,\n  container         : false,\n  fallbackPlacement : 'flip',\n  boundary          : 'scrollParent',\n  sanitize          : true,\n  sanitizeFn        : null,\n  whiteList         : DefaultWhitelist,\n  popperConfig      : null\n}\n\nconst HoverState = {\n  SHOW : 'show',\n  OUT  : 'out'\n}\n\nconst Event = {\n  HIDE       : `hide${EVENT_KEY}`,\n  HIDDEN     : `hidden${EVENT_KEY}`,\n  SHOW       : `show${EVENT_KEY}`,\n  SHOWN      : `shown${EVENT_KEY}`,\n  INSERTED   : `inserted${EVENT_KEY}`,\n  CLICK      : `click${EVENT_KEY}`,\n  FOCUSIN    : `focusin${EVENT_KEY}`,\n  FOCUSOUT   : `focusout${EVENT_KEY}`,\n  MOUSEENTER : `mouseenter${EVENT_KEY}`,\n  MOUSELEAVE : `mouseleave${EVENT_KEY}`\n}\n\nconst ClassName = {\n  FADE : 'fade',\n  SHOW : 'show'\n}\n\nconst Selector = {\n  TOOLTIP       : '.tooltip',\n  TOOLTIP_INNER : '.tooltip-inner',\n  ARROW         : '.arrow'\n}\n\nconst Trigger = {\n  HOVER  : 'hover',\n  FOCUS  : 'focus',\n  CLICK  : 'click',\n  MANUAL : 'manual'\n}\n\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Tooltip {\n  constructor(element, config) {\n    if (typeof Popper === 'undefined') {\n      throw new TypeError('Bootstrap\\'s tooltips require Popper.js (https://popper.js.org/)')\n    }\n\n    // private\n    this._isEnabled     = true\n    this._timeout       = 0\n    this._hoverState    = ''\n    this._activeTrigger = {}\n    this._popper        = null\n\n    // Protected\n    this.element = element\n    this.config  = this._getConfig(config)\n    this.tip     = null\n\n    this._setListeners()\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  static get DATA_KEY() {\n    return DATA_KEY\n  }\n\n  static get Event() {\n    return Event\n  }\n\n  static get EVENT_KEY() {\n    return EVENT_KEY\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  // Public\n\n  enable() {\n    this._isEnabled = true\n  }\n\n  disable() {\n    this._isEnabled = false\n  }\n\n  toggleEnabled() {\n    this._isEnabled = !this._isEnabled\n  }\n\n  toggle(event) {\n    if (!this._isEnabled) {\n      return\n    }\n\n    if (event) {\n      const dataKey = this.constructor.DATA_KEY\n      let context = $(event.currentTarget).data(dataKey)\n\n      if (!context) {\n        context = new this.constructor(\n          event.currentTarget,\n          this._getDelegateConfig()\n        )\n        $(event.currentTarget).data(dataKey, context)\n      }\n\n      context._activeTrigger.click = !context._activeTrigger.click\n\n      if (context._isWithActiveTrigger()) {\n        context._enter(null, context)\n      } else {\n        context._leave(null, context)\n      }\n    } else {\n      if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {\n        this._leave(null, this)\n        return\n      }\n\n      this._enter(null, this)\n    }\n  }\n\n  dispose() {\n    clearTimeout(this._timeout)\n\n    $.removeData(this.element, this.constructor.DATA_KEY)\n\n    $(this.element).off(this.constructor.EVENT_KEY)\n    $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler)\n\n    if (this.tip) {\n      $(this.tip).remove()\n    }\n\n    this._isEnabled     = null\n    this._timeout       = null\n    this._hoverState    = null\n    this._activeTrigger = null\n    if (this._popper) {\n      this._popper.destroy()\n    }\n\n    this._popper = null\n    this.element = null\n    this.config  = null\n    this.tip     = null\n  }\n\n  show() {\n    if ($(this.element).css('display') === 'none') {\n      throw new Error('Please use show on visible elements')\n    }\n\n    const showEvent = $.Event(this.constructor.Event.SHOW)\n    if (this.isWithContent() && this._isEnabled) {\n      $(this.element).trigger(showEvent)\n\n      const shadowRoot = Util.findShadowRoot(this.element)\n      const isInTheDom = $.contains(\n        shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement,\n        this.element\n      )\n\n      if (showEvent.isDefaultPrevented() || !isInTheDom) {\n        return\n      }\n\n      const tip   = this.getTipElement()\n      const tipId = Util.getUID(this.constructor.NAME)\n\n      tip.setAttribute('id', tipId)\n      this.element.setAttribute('aria-describedby', tipId)\n\n      this.setContent()\n\n      if (this.config.animation) {\n        $(tip).addClass(ClassName.FADE)\n      }\n\n      const placement  = typeof this.config.placement === 'function'\n        ? this.config.placement.call(this, tip, this.element)\n        : this.config.placement\n\n      const attachment = this._getAttachment(placement)\n      this.addAttachmentClass(attachment)\n\n      const container = this._getContainer()\n      $(tip).data(this.constructor.DATA_KEY, this)\n\n      if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {\n        $(tip).appendTo(container)\n      }\n\n      $(this.element).trigger(this.constructor.Event.INSERTED)\n\n      this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment))\n\n      $(tip).addClass(ClassName.SHOW)\n\n      // If this is a touch-enabled device we add extra\n      // empty mouseover listeners to the body's immediate children;\n      // only needed because of broken event delegation on iOS\n      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n      if ('ontouchstart' in document.documentElement) {\n        $(document.body).children().on('mouseover', null, $.noop)\n      }\n\n      const complete = () => {\n        if (this.config.animation) {\n          this._fixTransition()\n        }\n        const prevHoverState = this._hoverState\n        this._hoverState     = null\n\n        $(this.element).trigger(this.constructor.Event.SHOWN)\n\n        if (prevHoverState === HoverState.OUT) {\n          this._leave(null, this)\n        }\n      }\n\n      if ($(this.tip).hasClass(ClassName.FADE)) {\n        const transitionDuration = Util.getTransitionDurationFromElement(this.tip)\n\n        $(this.tip)\n          .one(Util.TRANSITION_END, complete)\n          .emulateTransitionEnd(transitionDuration)\n      } else {\n        complete()\n      }\n    }\n  }\n\n  hide(callback) {\n    const tip       = this.getTipElement()\n    const hideEvent = $.Event(this.constructor.Event.HIDE)\n    const complete = () => {\n      if (this._hoverState !== HoverState.SHOW && tip.parentNode) {\n        tip.parentNode.removeChild(tip)\n      }\n\n      this._cleanTipClass()\n      this.element.removeAttribute('aria-describedby')\n      $(this.element).trigger(this.constructor.Event.HIDDEN)\n      if (this._popper !== null) {\n        this._popper.destroy()\n      }\n\n      if (callback) {\n        callback()\n      }\n    }\n\n    $(this.element).trigger(hideEvent)\n\n    if (hideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    $(tip).removeClass(ClassName.SHOW)\n\n    // If this is a touch-enabled device we remove the extra\n    // empty mouseover listeners we added for iOS support\n    if ('ontouchstart' in document.documentElement) {\n      $(document.body).children().off('mouseover', null, $.noop)\n    }\n\n    this._activeTrigger[Trigger.CLICK] = false\n    this._activeTrigger[Trigger.FOCUS] = false\n    this._activeTrigger[Trigger.HOVER] = false\n\n    if ($(this.tip).hasClass(ClassName.FADE)) {\n      const transitionDuration = Util.getTransitionDurationFromElement(tip)\n\n      $(tip)\n        .one(Util.TRANSITION_END, complete)\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      complete()\n    }\n\n    this._hoverState = ''\n  }\n\n  update() {\n    if (this._popper !== null) {\n      this._popper.scheduleUpdate()\n    }\n  }\n\n  // Protected\n\n  isWithContent() {\n    return Boolean(this.getTitle())\n  }\n\n  addAttachmentClass(attachment) {\n    $(this.getTipElement()).addClass(`${CLASS_PREFIX}-${attachment}`)\n  }\n\n  getTipElement() {\n    this.tip = this.tip || $(this.config.template)[0]\n    return this.tip\n  }\n\n  setContent() {\n    const tip = this.getTipElement()\n    this.setElementContent($(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle())\n    $(tip).removeClass(`${ClassName.FADE} ${ClassName.SHOW}`)\n  }\n\n  setElementContent($element, content) {\n    if (typeof content === 'object' && (content.nodeType || content.jquery)) {\n      // Content is a DOM node or a jQuery\n      if (this.config.html) {\n        if (!$(content).parent().is($element)) {\n          $element.empty().append(content)\n        }\n      } else {\n        $element.text($(content).text())\n      }\n\n      return\n    }\n\n    if (this.config.html) {\n      if (this.config.sanitize) {\n        content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn)\n      }\n\n      $element.html(content)\n    } else {\n      $element.text(content)\n    }\n  }\n\n  getTitle() {\n    let title = this.element.getAttribute('data-original-title')\n\n    if (!title) {\n      title = typeof this.config.title === 'function'\n        ? this.config.title.call(this.element)\n        : this.config.title\n    }\n\n    return title\n  }\n\n  // Private\n\n  _getPopperConfig(attachment) {\n    const defaultBsConfig = {\n      placement: attachment,\n      modifiers: {\n        offset: this._getOffset(),\n        flip: {\n          behavior: this.config.fallbackPlacement\n        },\n        arrow: {\n          element: Selector.ARROW\n        },\n        preventOverflow: {\n          boundariesElement: this.config.boundary\n        }\n      },\n      onCreate: (data) => {\n        if (data.originalPlacement !== data.placement) {\n          this._handlePopperPlacementChange(data)\n        }\n      },\n      onUpdate: (data) => this._handlePopperPlacementChange(data)\n    }\n\n    return {\n      ...defaultBsConfig,\n      ...this.config.popperConfig\n    }\n  }\n\n  _getOffset() {\n    const offset = {}\n\n    if (typeof this.config.offset === 'function') {\n      offset.fn = (data) => {\n        data.offsets = {\n          ...data.offsets,\n          ...this.config.offset(data.offsets, this.element) || {}\n        }\n\n        return data\n      }\n    } else {\n      offset.offset = this.config.offset\n    }\n\n    return offset\n  }\n\n  _getContainer() {\n    if (this.config.container === false) {\n      return document.body\n    }\n\n    if (Util.isElement(this.config.container)) {\n      return $(this.config.container)\n    }\n\n    return $(document).find(this.config.container)\n  }\n\n  _getAttachment(placement) {\n    return AttachmentMap[placement.toUpperCase()]\n  }\n\n  _setListeners() {\n    const triggers = this.config.trigger.split(' ')\n\n    triggers.forEach((trigger) => {\n      if (trigger === 'click') {\n        $(this.element).on(\n          this.constructor.Event.CLICK,\n          this.config.selector,\n          (event) => this.toggle(event)\n        )\n      } else if (trigger !== Trigger.MANUAL) {\n        const eventIn = trigger === Trigger.HOVER\n          ? this.constructor.Event.MOUSEENTER\n          : this.constructor.Event.FOCUSIN\n        const eventOut = trigger === Trigger.HOVER\n          ? this.constructor.Event.MOUSELEAVE\n          : this.constructor.Event.FOCUSOUT\n\n        $(this.element)\n          .on(\n            eventIn,\n            this.config.selector,\n            (event) => this._enter(event)\n          )\n          .on(\n            eventOut,\n            this.config.selector,\n            (event) => this._leave(event)\n          )\n      }\n    })\n\n    this._hideModalHandler = () => {\n      if (this.element) {\n        this.hide()\n      }\n    }\n\n    $(this.element).closest('.modal').on(\n      'hide.bs.modal',\n      this._hideModalHandler\n    )\n\n    if (this.config.selector) {\n      this.config = {\n        ...this.config,\n        trigger: 'manual',\n        selector: ''\n      }\n    } else {\n      this._fixTitle()\n    }\n  }\n\n  _fixTitle() {\n    const titleType = typeof this.element.getAttribute('data-original-title')\n\n    if (this.element.getAttribute('title') || titleType !== 'string') {\n      this.element.setAttribute(\n        'data-original-title',\n        this.element.getAttribute('title') || ''\n      )\n\n      this.element.setAttribute('title', '')\n    }\n  }\n\n  _enter(event, context) {\n    const dataKey = this.constructor.DATA_KEY\n    context = context || $(event.currentTarget).data(dataKey)\n\n    if (!context) {\n      context = new this.constructor(\n        event.currentTarget,\n        this._getDelegateConfig()\n      )\n      $(event.currentTarget).data(dataKey, context)\n    }\n\n    if (event) {\n      context._activeTrigger[\n        event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER\n      ] = true\n    }\n\n    if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {\n      context._hoverState = HoverState.SHOW\n      return\n    }\n\n    clearTimeout(context._timeout)\n\n    context._hoverState = HoverState.SHOW\n\n    if (!context.config.delay || !context.config.delay.show) {\n      context.show()\n      return\n    }\n\n    context._timeout = setTimeout(() => {\n      if (context._hoverState === HoverState.SHOW) {\n        context.show()\n      }\n    }, context.config.delay.show)\n  }\n\n  _leave(event, context) {\n    const dataKey = this.constructor.DATA_KEY\n    context = context || $(event.currentTarget).data(dataKey)\n\n    if (!context) {\n      context = new this.constructor(\n        event.currentTarget,\n        this._getDelegateConfig()\n      )\n      $(event.currentTarget).data(dataKey, context)\n    }\n\n    if (event) {\n      context._activeTrigger[\n        event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER\n      ] = false\n    }\n\n    if (context._isWithActiveTrigger()) {\n      return\n    }\n\n    clearTimeout(context._timeout)\n\n    context._hoverState = HoverState.OUT\n\n    if (!context.config.delay || !context.config.delay.hide) {\n      context.hide()\n      return\n    }\n\n    context._timeout = setTimeout(() => {\n      if (context._hoverState === HoverState.OUT) {\n        context.hide()\n      }\n    }, context.config.delay.hide)\n  }\n\n  _isWithActiveTrigger() {\n    for (const trigger in this._activeTrigger) {\n      if (this._activeTrigger[trigger]) {\n        return true\n      }\n    }\n\n    return false\n  }\n\n  _getConfig(config) {\n    const dataAttributes = $(this.element).data()\n\n    Object.keys(dataAttributes)\n      .forEach((dataAttr) => {\n        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {\n          delete dataAttributes[dataAttr]\n        }\n      })\n\n    config = {\n      ...this.constructor.Default,\n      ...dataAttributes,\n      ...typeof config === 'object' && config ? config : {}\n    }\n\n    if (typeof config.delay === 'number') {\n      config.delay = {\n        show: config.delay,\n        hide: config.delay\n      }\n    }\n\n    if (typeof config.title === 'number') {\n      config.title = config.title.toString()\n    }\n\n    if (typeof config.content === 'number') {\n      config.content = config.content.toString()\n    }\n\n    Util.typeCheckConfig(\n      NAME,\n      config,\n      this.constructor.DefaultType\n    )\n\n    if (config.sanitize) {\n      config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn)\n    }\n\n    return config\n  }\n\n  _getDelegateConfig() {\n    const config = {}\n\n    if (this.config) {\n      for (const key in this.config) {\n        if (this.constructor.Default[key] !== this.config[key]) {\n          config[key] = this.config[key]\n        }\n      }\n    }\n\n    return config\n  }\n\n  _cleanTipClass() {\n    const $tip = $(this.getTipElement())\n    const tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX)\n    if (tabClass !== null && tabClass.length) {\n      $tip.removeClass(tabClass.join(''))\n    }\n  }\n\n  _handlePopperPlacementChange(popperData) {\n    const popperInstance = popperData.instance\n    this.tip = popperInstance.popper\n    this._cleanTipClass()\n    this.addAttachmentClass(this._getAttachment(popperData.placement))\n  }\n\n  _fixTransition() {\n    const tip = this.getTipElement()\n    const initConfigAnimation = this.config.animation\n\n    if (tip.getAttribute('x-placement') !== null) {\n      return\n    }\n\n    $(tip).removeClass(ClassName.FADE)\n    this.config.animation = false\n    this.hide()\n    this.show()\n    this.config.animation = initConfigAnimation\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      const _config = typeof config === 'object' && config\n\n      if (!data && /dispose|hide/.test(config)) {\n        return\n      }\n\n      if (!data) {\n        data = new Tooltip(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Tooltip._jQueryInterface\n$.fn[NAME].Constructor = Tooltip\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Tooltip._jQueryInterface\n}\n\nexport default Tooltip\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): popover.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Tooltip from './tooltip'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME                = 'popover'\nconst VERSION             = '4.4.1'\nconst DATA_KEY            = 'bs.popover'\nconst EVENT_KEY           = `.${DATA_KEY}`\nconst JQUERY_NO_CONFLICT  = $.fn[NAME]\nconst CLASS_PREFIX        = 'bs-popover'\nconst BSCLS_PREFIX_REGEX  = new RegExp(`(^|\\\\s)${CLASS_PREFIX}\\\\S+`, 'g')\n\nconst Default = {\n  ...Tooltip.Default,\n  placement : 'right',\n  trigger   : 'click',\n  content   : '',\n  template  : '<div class=\"popover\" role=\"tooltip\">' +\n              '<div class=\"arrow\"></div>' +\n              '<h3 class=\"popover-header\"></h3>' +\n              '<div class=\"popover-body\"></div></div>'\n}\n\nconst DefaultType = {\n  ...Tooltip.DefaultType,\n  content : '(string|element|function)'\n}\n\nconst ClassName = {\n  FADE : 'fade',\n  SHOW : 'show'\n}\n\nconst Selector = {\n  TITLE   : '.popover-header',\n  CONTENT : '.popover-body'\n}\n\nconst Event = {\n  HIDE       : `hide${EVENT_KEY}`,\n  HIDDEN     : `hidden${EVENT_KEY}`,\n  SHOW       : `show${EVENT_KEY}`,\n  SHOWN      : `shown${EVENT_KEY}`,\n  INSERTED   : `inserted${EVENT_KEY}`,\n  CLICK      : `click${EVENT_KEY}`,\n  FOCUSIN    : `focusin${EVENT_KEY}`,\n  FOCUSOUT   : `focusout${EVENT_KEY}`,\n  MOUSEENTER : `mouseenter${EVENT_KEY}`,\n  MOUSELEAVE : `mouseleave${EVENT_KEY}`\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Popover extends Tooltip {\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  static get DATA_KEY() {\n    return DATA_KEY\n  }\n\n  static get Event() {\n    return Event\n  }\n\n  static get EVENT_KEY() {\n    return EVENT_KEY\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  // Overrides\n\n  isWithContent() {\n    return this.getTitle() || this._getContent()\n  }\n\n  addAttachmentClass(attachment) {\n    $(this.getTipElement()).addClass(`${CLASS_PREFIX}-${attachment}`)\n  }\n\n  getTipElement() {\n    this.tip = this.tip || $(this.config.template)[0]\n    return this.tip\n  }\n\n  setContent() {\n    const $tip = $(this.getTipElement())\n\n    // We use append for html objects to maintain js events\n    this.setElementContent($tip.find(Selector.TITLE), this.getTitle())\n    let content = this._getContent()\n    if (typeof content === 'function') {\n      content = content.call(this.element)\n    }\n    this.setElementContent($tip.find(Selector.CONTENT), content)\n\n    $tip.removeClass(`${ClassName.FADE} ${ClassName.SHOW}`)\n  }\n\n  // Private\n\n  _getContent() {\n    return this.element.getAttribute('data-content') ||\n      this.config.content\n  }\n\n  _cleanTipClass() {\n    const $tip = $(this.getTipElement())\n    const tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX)\n    if (tabClass !== null && tabClass.length > 0) {\n      $tip.removeClass(tabClass.join(''))\n    }\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      const _config = typeof config === 'object' ? config : null\n\n      if (!data && /dispose|hide/.test(config)) {\n        return\n      }\n\n      if (!data) {\n        data = new Popover(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Popover._jQueryInterface\n$.fn[NAME].Constructor = Popover\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Popover._jQueryInterface\n}\n\nexport default Popover\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): scrollspy.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME               = 'scrollspy'\nconst VERSION            = '4.4.1'\nconst DATA_KEY           = 'bs.scrollspy'\nconst EVENT_KEY          = `.${DATA_KEY}`\nconst DATA_API_KEY       = '.data-api'\nconst JQUERY_NO_CONFLICT = $.fn[NAME]\n\nconst Default = {\n  offset : 10,\n  method : 'auto',\n  target : ''\n}\n\nconst DefaultType = {\n  offset : 'number',\n  method : 'string',\n  target : '(string|element)'\n}\n\nconst Event = {\n  ACTIVATE      : `activate${EVENT_KEY}`,\n  SCROLL        : `scroll${EVENT_KEY}`,\n  LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  DROPDOWN_ITEM : 'dropdown-item',\n  DROPDOWN_MENU : 'dropdown-menu',\n  ACTIVE        : 'active'\n}\n\nconst Selector = {\n  DATA_SPY        : '[data-spy=\"scroll\"]',\n  ACTIVE          : '.active',\n  NAV_LIST_GROUP  : '.nav, .list-group',\n  NAV_LINKS       : '.nav-link',\n  NAV_ITEMS       : '.nav-item',\n  LIST_ITEMS      : '.list-group-item',\n  DROPDOWN        : '.dropdown',\n  DROPDOWN_ITEMS  : '.dropdown-item',\n  DROPDOWN_TOGGLE : '.dropdown-toggle'\n}\n\nconst OffsetMethod = {\n  OFFSET   : 'offset',\n  POSITION : 'position'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass ScrollSpy {\n  constructor(element, config) {\n    this._element       = element\n    this._scrollElement = element.tagName === 'BODY' ? window : element\n    this._config        = this._getConfig(config)\n    this._selector      = `${this._config.target} ${Selector.NAV_LINKS},` +\n                          `${this._config.target} ${Selector.LIST_ITEMS},` +\n                          `${this._config.target} ${Selector.DROPDOWN_ITEMS}`\n    this._offsets       = []\n    this._targets       = []\n    this._activeTarget  = null\n    this._scrollHeight  = 0\n\n    $(this._scrollElement).on(Event.SCROLL, (event) => this._process(event))\n\n    this.refresh()\n    this._process()\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  // Public\n\n  refresh() {\n    const autoMethod = this._scrollElement === this._scrollElement.window\n      ? OffsetMethod.OFFSET : OffsetMethod.POSITION\n\n    const offsetMethod = this._config.method === 'auto'\n      ? autoMethod : this._config.method\n\n    const offsetBase = offsetMethod === OffsetMethod.POSITION\n      ? this._getScrollTop() : 0\n\n    this._offsets = []\n    this._targets = []\n\n    this._scrollHeight = this._getScrollHeight()\n\n    const targets = [].slice.call(document.querySelectorAll(this._selector))\n\n    targets\n      .map((element) => {\n        let target\n        const targetSelector = Util.getSelectorFromElement(element)\n\n        if (targetSelector) {\n          target = document.querySelector(targetSelector)\n        }\n\n        if (target) {\n          const targetBCR = target.getBoundingClientRect()\n          if (targetBCR.width || targetBCR.height) {\n            // TODO (fat): remove sketch reliance on jQuery position/offset\n            return [\n              $(target)[offsetMethod]().top + offsetBase,\n              targetSelector\n            ]\n          }\n        }\n        return null\n      })\n      .filter((item) => item)\n      .sort((a, b) => a[0] - b[0])\n      .forEach((item) => {\n        this._offsets.push(item[0])\n        this._targets.push(item[1])\n      })\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n    $(this._scrollElement).off(EVENT_KEY)\n\n    this._element       = null\n    this._scrollElement = null\n    this._config        = null\n    this._selector      = null\n    this._offsets       = null\n    this._targets       = null\n    this._activeTarget  = null\n    this._scrollHeight  = null\n  }\n\n  // Private\n\n  _getConfig(config) {\n    config = {\n      ...Default,\n      ...typeof config === 'object' && config ? config : {}\n    }\n\n    if (typeof config.target !== 'string') {\n      let id = $(config.target).attr('id')\n      if (!id) {\n        id = Util.getUID(NAME)\n        $(config.target).attr('id', id)\n      }\n      config.target = `#${id}`\n    }\n\n    Util.typeCheckConfig(NAME, config, DefaultType)\n\n    return config\n  }\n\n  _getScrollTop() {\n    return this._scrollElement === window\n      ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop\n  }\n\n  _getScrollHeight() {\n    return this._scrollElement.scrollHeight || Math.max(\n      document.body.scrollHeight,\n      document.documentElement.scrollHeight\n    )\n  }\n\n  _getOffsetHeight() {\n    return this._scrollElement === window\n      ? window.innerHeight : this._scrollElement.getBoundingClientRect().height\n  }\n\n  _process() {\n    const scrollTop    = this._getScrollTop() + this._config.offset\n    const scrollHeight = this._getScrollHeight()\n    const maxScroll    = this._config.offset +\n      scrollHeight -\n      this._getOffsetHeight()\n\n    if (this._scrollHeight !== scrollHeight) {\n      this.refresh()\n    }\n\n    if (scrollTop >= maxScroll) {\n      const target = this._targets[this._targets.length - 1]\n\n      if (this._activeTarget !== target) {\n        this._activate(target)\n      }\n      return\n    }\n\n    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {\n      this._activeTarget = null\n      this._clear()\n      return\n    }\n\n    const offsetLength = this._offsets.length\n    for (let i = offsetLength; i--;) {\n      const isActiveTarget = this._activeTarget !== this._targets[i] &&\n          scrollTop >= this._offsets[i] &&\n          (typeof this._offsets[i + 1] === 'undefined' ||\n              scrollTop < this._offsets[i + 1])\n\n      if (isActiveTarget) {\n        this._activate(this._targets[i])\n      }\n    }\n  }\n\n  _activate(target) {\n    this._activeTarget = target\n\n    this._clear()\n\n    const queries = this._selector\n      .split(',')\n      .map((selector) => `${selector}[data-target=\"${target}\"],${selector}[href=\"${target}\"]`)\n\n    const $link = $([].slice.call(document.querySelectorAll(queries.join(','))))\n\n    if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {\n      $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)\n      $link.addClass(ClassName.ACTIVE)\n    } else {\n      // Set triggered link as active\n      $link.addClass(ClassName.ACTIVE)\n      // Set triggered links parents as active\n      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor\n      $link.parents(Selector.NAV_LIST_GROUP).prev(`${Selector.NAV_LINKS}, ${Selector.LIST_ITEMS}`).addClass(ClassName.ACTIVE)\n      // Handle special case when .nav-link is inside .nav-item\n      $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)\n    }\n\n    $(this._scrollElement).trigger(Event.ACTIVATE, {\n      relatedTarget: target\n    })\n  }\n\n  _clear() {\n    [].slice.call(document.querySelectorAll(this._selector))\n      .filter((node) => node.classList.contains(ClassName.ACTIVE))\n      .forEach((node) => node.classList.remove(ClassName.ACTIVE))\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      let data = $(this).data(DATA_KEY)\n      const _config = typeof config === 'object' && config\n\n      if (!data) {\n        data = new ScrollSpy(this, _config)\n        $(this).data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(window).on(Event.LOAD_DATA_API, () => {\n  const scrollSpys = [].slice.call(document.querySelectorAll(Selector.DATA_SPY))\n  const scrollSpysLength = scrollSpys.length\n\n  for (let i = scrollSpysLength; i--;) {\n    const $spy = $(scrollSpys[i])\n    ScrollSpy._jQueryInterface.call($spy, $spy.data())\n  }\n})\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = ScrollSpy._jQueryInterface\n$.fn[NAME].Constructor = ScrollSpy\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return ScrollSpy._jQueryInterface\n}\n\nexport default ScrollSpy\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): tab.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME               = 'tab'\nconst VERSION            = '4.4.1'\nconst DATA_KEY           = 'bs.tab'\nconst EVENT_KEY          = `.${DATA_KEY}`\nconst DATA_API_KEY       = '.data-api'\nconst JQUERY_NO_CONFLICT = $.fn[NAME]\n\nconst Event = {\n  HIDE           : `hide${EVENT_KEY}`,\n  HIDDEN         : `hidden${EVENT_KEY}`,\n  SHOW           : `show${EVENT_KEY}`,\n  SHOWN          : `shown${EVENT_KEY}`,\n  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`\n}\n\nconst ClassName = {\n  DROPDOWN_MENU : 'dropdown-menu',\n  ACTIVE        : 'active',\n  DISABLED      : 'disabled',\n  FADE          : 'fade',\n  SHOW          : 'show'\n}\n\nconst Selector = {\n  DROPDOWN              : '.dropdown',\n  NAV_LIST_GROUP        : '.nav, .list-group',\n  ACTIVE                : '.active',\n  ACTIVE_UL             : '> li > .active',\n  DATA_TOGGLE           : '[data-toggle=\"tab\"], [data-toggle=\"pill\"], [data-toggle=\"list\"]',\n  DROPDOWN_TOGGLE       : '.dropdown-toggle',\n  DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Tab {\n  constructor(element) {\n    this._element = element\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  // Public\n\n  show() {\n    if (this._element.parentNode &&\n        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&\n        $(this._element).hasClass(ClassName.ACTIVE) ||\n        $(this._element).hasClass(ClassName.DISABLED)) {\n      return\n    }\n\n    let target\n    let previous\n    const listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0]\n    const selector = Util.getSelectorFromElement(this._element)\n\n    if (listElement) {\n      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE\n      previous = $.makeArray($(listElement).find(itemSelector))\n      previous = previous[previous.length - 1]\n    }\n\n    const hideEvent = $.Event(Event.HIDE, {\n      relatedTarget: this._element\n    })\n\n    const showEvent = $.Event(Event.SHOW, {\n      relatedTarget: previous\n    })\n\n    if (previous) {\n      $(previous).trigger(hideEvent)\n    }\n\n    $(this._element).trigger(showEvent)\n\n    if (showEvent.isDefaultPrevented() ||\n        hideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    if (selector) {\n      target = document.querySelector(selector)\n    }\n\n    this._activate(\n      this._element,\n      listElement\n    )\n\n    const complete = () => {\n      const hiddenEvent = $.Event(Event.HIDDEN, {\n        relatedTarget: this._element\n      })\n\n      const shownEvent = $.Event(Event.SHOWN, {\n        relatedTarget: previous\n      })\n\n      $(previous).trigger(hiddenEvent)\n      $(this._element).trigger(shownEvent)\n    }\n\n    if (target) {\n      this._activate(target, target.parentNode, complete)\n    } else {\n      complete()\n    }\n  }\n\n  dispose() {\n    $.removeData(this._element, DATA_KEY)\n    this._element = null\n  }\n\n  // Private\n\n  _activate(element, container, callback) {\n    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL')\n      ? $(container).find(Selector.ACTIVE_UL)\n      : $(container).children(Selector.ACTIVE)\n\n    const active = activeElements[0]\n    const isTransitioning = callback && (active && $(active).hasClass(ClassName.FADE))\n    const complete = () => this._transitionComplete(\n      element,\n      active,\n      callback\n    )\n\n    if (active && isTransitioning) {\n      const transitionDuration = Util.getTransitionDurationFromElement(active)\n\n      $(active)\n        .removeClass(ClassName.SHOW)\n        .one(Util.TRANSITION_END, complete)\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      complete()\n    }\n  }\n\n  _transitionComplete(element, active, callback) {\n    if (active) {\n      $(active).removeClass(ClassName.ACTIVE)\n\n      const dropdownChild = $(active.parentNode).find(\n        Selector.DROPDOWN_ACTIVE_CHILD\n      )[0]\n\n      if (dropdownChild) {\n        $(dropdownChild).removeClass(ClassName.ACTIVE)\n      }\n\n      if (active.getAttribute('role') === 'tab') {\n        active.setAttribute('aria-selected', false)\n      }\n    }\n\n    $(element).addClass(ClassName.ACTIVE)\n    if (element.getAttribute('role') === 'tab') {\n      element.setAttribute('aria-selected', true)\n    }\n\n    Util.reflow(element)\n\n    if (element.classList.contains(ClassName.FADE)) {\n      element.classList.add(ClassName.SHOW)\n    }\n\n    if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {\n      const dropdownElement = $(element).closest(Selector.DROPDOWN)[0]\n\n      if (dropdownElement) {\n        const dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE))\n\n        $(dropdownToggleList).addClass(ClassName.ACTIVE)\n      }\n\n      element.setAttribute('aria-expanded', true)\n    }\n\n    if (callback) {\n      callback()\n    }\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      const $this = $(this)\n      let data = $this.data(DATA_KEY)\n\n      if (!data) {\n        data = new Tab(this)\n        $this.data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * Data Api implementation\n * ------------------------------------------------------------------------\n */\n\n$(document)\n  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n    event.preventDefault()\n    Tab._jQueryInterface.call($(this), 'show')\n  })\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME] = Tab._jQueryInterface\n$.fn[NAME].Constructor = Tab\n$.fn[NAME].noConflict = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Tab._jQueryInterface\n}\n\nexport default Tab\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.4.1): toast.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport $ from 'jquery'\nimport Util from './util'\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\n\nconst NAME               = 'toast'\nconst VERSION            = '4.4.1'\nconst DATA_KEY           = 'bs.toast'\nconst EVENT_KEY          = `.${DATA_KEY}`\nconst JQUERY_NO_CONFLICT = $.fn[NAME]\n\nconst Event = {\n  CLICK_DISMISS : `click.dismiss${EVENT_KEY}`,\n  HIDE          : `hide${EVENT_KEY}`,\n  HIDDEN        : `hidden${EVENT_KEY}`,\n  SHOW          : `show${EVENT_KEY}`,\n  SHOWN         : `shown${EVENT_KEY}`\n}\n\nconst ClassName = {\n  FADE    : 'fade',\n  HIDE    : 'hide',\n  SHOW    : 'show',\n  SHOWING : 'showing'\n}\n\nconst DefaultType = {\n  animation : 'boolean',\n  autohide  : 'boolean',\n  delay     : 'number'\n}\n\nconst Default = {\n  animation : true,\n  autohide  : true,\n  delay     : 500\n}\n\nconst Selector = {\n  DATA_DISMISS : '[data-dismiss=\"toast\"]'\n}\n\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\nclass Toast {\n  constructor(element, config) {\n    this._element = element\n    this._config  = this._getConfig(config)\n    this._timeout = null\n    this._setListeners()\n  }\n\n  // Getters\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get Default() {\n    return Default\n  }\n\n  // Public\n\n  show() {\n    const showEvent = $.Event(Event.SHOW)\n\n    $(this._element).trigger(showEvent)\n    if (showEvent.isDefaultPrevented()) {\n      return\n    }\n\n    if (this._config.animation) {\n      this._element.classList.add(ClassName.FADE)\n    }\n\n    const complete = () => {\n      this._element.classList.remove(ClassName.SHOWING)\n      this._element.classList.add(ClassName.SHOW)\n\n      $(this._element).trigger(Event.SHOWN)\n\n      if (this._config.autohide) {\n        this._timeout = setTimeout(() => {\n          this.hide()\n        }, this._config.delay)\n      }\n    }\n\n    this._element.classList.remove(ClassName.HIDE)\n    Util.reflow(this._element)\n    this._element.classList.add(ClassName.SHOWING)\n    if (this._config.animation) {\n      const transitionDuration = Util.getTransitionDurationFromElement(this._element)\n\n      $(this._element)\n        .one(Util.TRANSITION_END, complete)\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      complete()\n    }\n  }\n\n  hide() {\n    if (!this._element.classList.contains(ClassName.SHOW)) {\n      return\n    }\n\n    const hideEvent = $.Event(Event.HIDE)\n\n    $(this._element).trigger(hideEvent)\n    if (hideEvent.isDefaultPrevented()) {\n      return\n    }\n\n    this._close()\n  }\n\n  dispose() {\n    clearTimeout(this._timeout)\n    this._timeout = null\n\n    if (this._element.classList.contains(ClassName.SHOW)) {\n      this._element.classList.remove(ClassName.SHOW)\n    }\n\n    $(this._element).off(Event.CLICK_DISMISS)\n\n    $.removeData(this._element, DATA_KEY)\n    this._element = null\n    this._config  = null\n  }\n\n  // Private\n\n  _getConfig(config) {\n    config = {\n      ...Default,\n      ...$(this._element).data(),\n      ...typeof config === 'object' && config ? config : {}\n    }\n\n    Util.typeCheckConfig(\n      NAME,\n      config,\n      this.constructor.DefaultType\n    )\n\n    return config\n  }\n\n  _setListeners() {\n    $(this._element).on(\n      Event.CLICK_DISMISS,\n      Selector.DATA_DISMISS,\n      () => this.hide()\n    )\n  }\n\n  _close() {\n    const complete = () => {\n      this._element.classList.add(ClassName.HIDE)\n      $(this._element).trigger(Event.HIDDEN)\n    }\n\n    this._element.classList.remove(ClassName.SHOW)\n    if (this._config.animation) {\n      const transitionDuration = Util.getTransitionDurationFromElement(this._element)\n\n      $(this._element)\n        .one(Util.TRANSITION_END, complete)\n        .emulateTransitionEnd(transitionDuration)\n    } else {\n      complete()\n    }\n  }\n\n  // Static\n\n  static _jQueryInterface(config) {\n    return this.each(function () {\n      const $element = $(this)\n      let data       = $element.data(DATA_KEY)\n      const _config  = typeof config === 'object' && config\n\n      if (!data) {\n        data = new Toast(this, _config)\n        $element.data(DATA_KEY, data)\n      }\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n\n        data[config](this)\n      }\n    })\n  }\n}\n\n/**\n * ------------------------------------------------------------------------\n * jQuery\n * ------------------------------------------------------------------------\n */\n\n$.fn[NAME]             = Toast._jQueryInterface\n$.fn[NAME].Constructor = Toast\n$.fn[NAME].noConflict  = () => {\n  $.fn[NAME] = JQUERY_NO_CONFLICT\n  return Toast._jQueryInterface\n}\n\nexport default Toast\n"],"names":["TRANSITION_END","MAX_UID","MILLISECONDS_MULTIPLIER","toType","obj","toString","call","match","toLowerCase","getSpecialTransitionEndEvent","bindType","delegateType","handle","event","$","target","is","handleObj","handler","apply","arguments","undefined","transitionEndEmulator","duration","called","one","Util","setTimeout","triggerTransitionEnd","setTransitionEndSupport","fn","emulateTransitionEnd","special","getUID","prefix","Math","random","document","getElementById","getSelectorFromElement","element","selector","getAttribute","hrefAttr","trim","querySelector","err","getTransitionDurationFromElement","transitionDuration","css","transitionDelay","floatTransitionDuration","parseFloat","floatTransitionDelay","split","reflow","offsetHeight","trigger","supportsTransitionEnd","Boolean","isElement","nodeType","typeCheckConfig","componentName","config","configTypes","property","Object","prototype","hasOwnProperty","expectedTypes","value","valueType","RegExp","test","Error","toUpperCase","findShadowRoot","documentElement","attachShadow","getRootNode","root","ShadowRoot","parentNode","jQueryDetection","TypeError","version","jquery","minMajor","ltMajor","minMinor","minPatch","maxMajor","NAME","VERSION","DATA_KEY","EVENT_KEY","DATA_API_KEY","JQUERY_NO_CONFLICT","Selector","DISMISS","Event","CLOSE","CLOSED","CLICK_DATA_API","ClassName","ALERT","FADE","SHOW","Alert","_element","close","rootElement","_getRootElement","customEvent","_triggerCloseEvent","isDefaultPrevented","_removeElement","dispose","removeData","parent","closest","closeEvent","removeClass","hasClass","_destroyElement","detach","remove","_jQueryInterface","each","$element","data","_handleDismiss","alertInstance","preventDefault","on","Constructor","noConflict","ACTIVE","BUTTON","FOCUS","DATA_TOGGLE_CARROT","DATA_TOGGLES","DATA_TOGGLE","DATA_TOGGLES_BUTTONS","INPUT","FOCUS_BLUR_DATA_API","LOAD_DATA_API","Button","toggle","triggerChangeEvent","addAriaPressed","input","type","checked","classList","contains","activeElement","tagName","focus","hasAttribute","setAttribute","toggleClass","button","inputBtn","window","buttons","slice","querySelectorAll","i","len","length","add","ARROW_LEFT_KEYCODE","ARROW_RIGHT_KEYCODE","TOUCHEVENT_COMPAT_WAIT","SWIPE_THRESHOLD","Default","interval","keyboard","slide","pause","wrap","touch","DefaultType","Direction","NEXT","PREV","LEFT","RIGHT","SLIDE","SLID","KEYDOWN","MOUSEENTER","MOUSELEAVE","TOUCHSTART","TOUCHMOVE","TOUCHEND","POINTERDOWN","POINTERUP","DRAG_START","CAROUSEL","ITEM","POINTER_EVENT","ACTIVE_ITEM","ITEM_IMG","NEXT_PREV","INDICATORS","DATA_SLIDE","DATA_RIDE","PointerType","TOUCH","PEN","Carousel","_items","_interval","_activeElement","_isPaused","_isSliding","touchTimeout","touchStartX","touchDeltaX","_config","_getConfig","_indicatorsElement","_touchSupported","navigator","maxTouchPoints","_pointerEvent","PointerEvent","MSPointerEvent","_addEventListeners","next","_slide","nextWhenVisible","hidden","prev","cycle","clearInterval","setInterval","visibilityState","bind","to","index","activeIndex","_getItemIndex","direction","off","_handleSwipe","absDeltax","abs","_keydown","_addTouchEventListeners","start","originalEvent","pointerType","clientX","touches","move","end","clearTimeout","e","which","indexOf","_getItemByDirection","isNextDirection","isPrevDirection","lastItemIndex","isGoingToWrap","delta","itemIndex","_triggerSlideEvent","relatedTarget","eventDirectionName","targetIndex","fromIndex","slideEvent","from","_setActiveIndicatorElement","indicators","nextIndicator","children","addClass","activeElementIndex","nextElement","nextElementIndex","isCycling","directionalClassName","orderClassName","slidEvent","nextElementInterval","parseInt","defaultInterval","action","ride","_dataApiClickHandler","slideIndex","carousels","$carousel","SHOWN","HIDE","HIDDEN","COLLAPSE","COLLAPSING","COLLAPSED","Dimension","WIDTH","HEIGHT","ACTIVES","Collapse","_isTransitioning","_triggerArray","id","toggleList","elem","filterElement","filter","foundElem","_selector","push","_parent","_getParent","_addAriaAndCollapsedClass","hide","show","actives","activesData","not","startEvent","dimension","_getDimension","style","attr","setTransitioning","complete","capitalizedDimension","scrollSize","getBoundingClientRect","triggerArrayLength","$elem","isTransitioning","hasWidth","_getTargetFromElement","triggerArray","isOpen","$this","currentTarget","$trigger","selectors","$target","ESCAPE_KEYCODE","SPACE_KEYCODE","TAB_KEYCODE","ARROW_UP_KEYCODE","ARROW_DOWN_KEYCODE","RIGHT_MOUSE_BUTTON_WHICH","REGEXP_KEYDOWN","CLICK","KEYDOWN_DATA_API","KEYUP_DATA_API","DISABLED","DROPUP","DROPRIGHT","DROPLEFT","MENURIGHT","MENULEFT","POSITION_STATIC","FORM_CHILD","MENU","NAVBAR_NAV","VISIBLE_ITEMS","AttachmentMap","TOP","TOPEND","BOTTOM","BOTTOMEND","RIGHTEND","LEFTEND","offset","flip","boundary","reference","display","popperConfig","Dropdown","_popper","_menu","_getMenuElement","_inNavbar","_detectNavbar","disabled","isActive","_clearMenus","usePopper","showEvent","_getParentFromElement","Popper","referenceElement","_getPopperConfig","body","noop","hideEvent","destroy","update","scheduleUpdate","stopPropagation","constructor","_getPlacement","$parentDropdown","placement","_getOffset","offsets","modifiers","enabled","preventOverflow","boundariesElement","applyStyle","toggles","context","clickEvent","dropdownMenu","_dataApiKeydownHandler","items","item","backdrop","HIDE_PREVENTED","FOCUSIN","RESIZE","CLICK_DISMISS","KEYDOWN_DISMISS","MOUSEUP_DISMISS","MOUSEDOWN_DISMISS","SCROLLABLE","SCROLLBAR_MEASURER","BACKDROP","OPEN","STATIC","DIALOG","MODAL_BODY","DATA_DISMISS","FIXED_CONTENT","STICKY_CONTENT","Modal","_dialog","_backdrop","_isShown","_isBodyOverflowing","_ignoreBackdropClick","_scrollbarWidth","_checkScrollbar","_setScrollbar","_adjustDialog","_setEscapeEvent","_setResizeEvent","_showBackdrop","_showElement","transition","_hideModal","forEach","htmlElement","handleUpdate","_triggerBackdropTransition","hideEventPrevented","defaultPrevented","modalTransitionDuration","modalBody","Node","ELEMENT_NODE","appendChild","removeAttribute","scrollTop","_enforceFocus","shownEvent","transitionComplete","has","_resetAdjustments","_resetScrollbar","_removeBackdrop","callback","animate","createElement","className","appendTo","backdropTransitionDuration","callbackRemove","isModalOverflowing","scrollHeight","clientHeight","paddingLeft","paddingRight","rect","left","right","innerWidth","_getScrollbarWidth","fixedContent","stickyContent","actualPadding","calculatedPadding","actualMargin","marginRight","calculatedMargin","padding","elements","margin","scrollDiv","scrollbarWidth","width","clientWidth","removeChild","uriAttrs","ARIA_ATTRIBUTE_PATTERN","DefaultWhitelist","a","area","b","br","col","code","div","em","hr","h1","h2","h3","h4","h5","h6","img","li","ol","p","pre","s","small","span","sub","sup","strong","u","ul","SAFE_URL_PATTERN","DATA_URL_PATTERN","allowedAttribute","allowedAttributeList","attrName","nodeName","nodeValue","regExp","attrRegex","l","sanitizeHtml","unsafeHtml","whiteList","sanitizeFn","domParser","DOMParser","createdDocument","parseFromString","whitelistKeys","keys","el","elName","attributeList","attributes","whitelistedAttributes","concat","innerHTML","CLASS_PREFIX","BSCLS_PREFIX_REGEX","DISALLOWED_ATTRIBUTES","animation","template","title","delay","html","container","fallbackPlacement","sanitize","AUTO","HoverState","OUT","INSERTED","FOCUSOUT","TOOLTIP","TOOLTIP_INNER","ARROW","Trigger","HOVER","MANUAL","Tooltip","_isEnabled","_timeout","_hoverState","_activeTrigger","tip","_setListeners","enable","disable","toggleEnabled","dataKey","_getDelegateConfig","click","_isWithActiveTrigger","_enter","_leave","getTipElement","_hideModalHandler","isWithContent","shadowRoot","isInTheDom","ownerDocument","tipId","setContent","attachment","_getAttachment","addAttachmentClass","_getContainer","_fixTransition","prevHoverState","_cleanTipClass","getTitle","setElementContent","content","empty","append","text","defaultBsConfig","behavior","arrow","onCreate","originalPlacement","_handlePopperPlacementChange","onUpdate","find","triggers","eventIn","eventOut","_fixTitle","titleType","dataAttributes","dataAttr","key","$tip","tabClass","join","popperData","popperInstance","instance","popper","initConfigAnimation","TITLE","CONTENT","Popover","_getContent","method","ACTIVATE","SCROLL","DROPDOWN_ITEM","DROPDOWN_MENU","DATA_SPY","NAV_LIST_GROUP","NAV_LINKS","NAV_ITEMS","LIST_ITEMS","DROPDOWN","DROPDOWN_ITEMS","DROPDOWN_TOGGLE","OffsetMethod","OFFSET","POSITION","ScrollSpy","_scrollElement","_offsets","_targets","_activeTarget","_scrollHeight","_process","refresh","autoMethod","offsetMethod","offsetBase","_getScrollTop","_getScrollHeight","targets","map","targetSelector","targetBCR","height","top","sort","pageYOffset","max","_getOffsetHeight","innerHeight","maxScroll","_activate","_clear","offsetLength","isActiveTarget","queries","$link","parents","node","scrollSpys","scrollSpysLength","$spy","ACTIVE_UL","DROPDOWN_ACTIVE_CHILD","Tab","previous","listElement","itemSelector","makeArray","hiddenEvent","activeElements","active","_transitionComplete","dropdownChild","dropdownElement","dropdownToggleList","SHOWING","autohide","Toast","_close"],"mappings":"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"}
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

function isXs() {
    return $('.breakpoint-detection .detect-xs').is(':visible') === true;
}

function isSm() {
    return $('.breakpoint-detection .detect-sm').is(':visible') === true;
}

function isMd() {
    return $('.breakpoint-detection .detect-md').is(':visible') === true;
}

function isLg() {
    return $('.breakpoint-detection .detect-lg').is(':visible') === true;
}
$(document).ready(function() {
   console.log('hello world !')
});
