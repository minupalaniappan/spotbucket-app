/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/inject.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/inject.js":
/*!**************************!*\
  !*** ./src/js/inject.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * injectScript - Inject internal script to available access to the `window`\n *\n * @param  {type} file_path Local path of the internal script.\n * @param  {type} tag The tag as string, where the script will be append (default: 'body').\n * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}\n */\nfunction injectScript(file_path, tag) {\n  var node = document.getElementsByTagName(tag)[0];\n  var script = document.createElement('script');\n  script.setAttribute('type', 'text/javascript');\n  script.setAttribute('src', file_path);\n  node.appendChild(script);\n}\n\ninjectScript(chrome.extension.getURL('index.bundle.js'), 'body');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5qZWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luamVjdC5qcz85YmNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogaW5qZWN0U2NyaXB0IC0gSW5qZWN0IGludGVybmFsIHNjcmlwdCB0byBhdmFpbGFibGUgYWNjZXNzIHRvIHRoZSBgd2luZG93YFxuICpcbiAqIEBwYXJhbSAge3R5cGV9IGZpbGVfcGF0aCBMb2NhbCBwYXRoIG9mIHRoZSBpbnRlcm5hbCBzY3JpcHQuXG4gKiBAcGFyYW0gIHt0eXBlfSB0YWcgVGhlIHRhZyBhcyBzdHJpbmcsIHdoZXJlIHRoZSBzY3JpcHQgd2lsbCBiZSBhcHBlbmQgKGRlZmF1bHQ6ICdib2R5JykuXG4gKiBAc2VlICAgIHtAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwNDk5OTk0L2FjY2Vzcy13aW5kb3ctdmFyaWFibGUtZnJvbS1jb250ZW50LXNjcmlwdH1cbiAqL1xuZnVuY3Rpb24gaW5qZWN0U2NyaXB0KGZpbGVfcGF0aCwgdGFnKSB7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKVswXVxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKVxuICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlX3BhdGgpXG4gIG5vZGUuYXBwZW5kQ2hpbGQoc2NyaXB0KVxufVxuaW5qZWN0U2NyaXB0KGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdpbmRleC5idW5kbGUuanMnKSwgJ2JvZHknKVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/inject.js\n");

/***/ })

/******/ });