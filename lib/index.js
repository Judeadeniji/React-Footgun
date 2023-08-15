var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = require('react'), useEffect = _a.useEffect, useState = _a.useState;
/**
 * A custom React hook for testing purposes that simulates a gradually increasing asynchronous task.
 * @param {() => Promise<any>} asyncTask - The asynchronous task to be executed during each iteration.
 * @returns {{ iterations: number, results: any[] }} An object containing the iteration count and results of the async task.
 */
function useFootGun(asyncTask) {
    var _this = this;
    var _a = useState(1), iterations = _a[0], setIterations = _a[1];
    var _b = useState([]), results = _b[0], setResults = _b[1];
    var heavyTask = function () { return __awaiter(_this, void 0, void 0, function () {
        var taskResults, i, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskResults = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < iterations)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all(Array.from({ length: results.length }).map(function () { return asyncTask(); }))];
                case 2:
                    result = _a.sent();
                    taskResults.push(result);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    setIterations(function (prevIterations) { return prevIterations + 1000; });
                    setResults(taskResults);
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * Execute the provided async task with the specified number of iterations.
     */
    useEffect(heavyTask, [asyncTask, iterations]);
    /**
     * Simulate a while loop with delay for gradually increasing the async task.
     */
    useEffect(function () {
        var running = true;
        var runLoop = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!running) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        _a.sent();
                        heavyTask();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        runLoop();
        return function () {
            running = false;
        };
    }, [heavyTask]);
    return { iterations: iterations, results: results.flat() };
}
// Define exports for both CJS and ESM
if (typeof exports === 'object' && typeof module !== 'undefined') {
    // CommonJS environment
    module.exports = useFootGun;
}
if (typeof define === 'function' && define.amd) {
    // AMD environment
    define('useFootGun', [], function () {
        return useFootGun;
    });
}
if (typeof exports === 'undefined' && typeof define === 'undefined') {
    // ECMAScript Modules (ESM) environment
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = useFootGun;
}
