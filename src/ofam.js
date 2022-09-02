"use strict";
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
        while (_) try {
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
exports.__esModule = true;
var child_process_1 = require("child_process");
var fs = require("fs");
console.log('Running ofAddonManager...');
var OFAM_PATH = __dirname;
console.log(OFAM_PATH);
var config = await getJSON("".concat(OFAM_PATH, "/../json/config.json"));
var OF_PATH = config.OF_PATH;
var CWD = process.cwd();
var AVAIL_ADDONS = await getJSON("".concat(OFAM_PATH, "/../json/addons.json"));
console.log(AVAIL_ADDONS.length);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var args, _a, projectAddons, existingAddons;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                args = process.argv;
                args.splice(0, 2);
                console.log(args);
                _a = args[0];
                switch (_a) {
                    case 'install': return [3 /*break*/, 1];
                }
                return [3 /*break*/, 4];
            case 1: return [4 /*yield*/, getAddonsFromMakeFile("".concat(CWD, "/config.make"))];
            case 2:
                projectAddons = _b.sent();
                return [4 /*yield*/, checkExistingAddons({
                        localAddons: "".concat(CWD, "/local_addons/"),
                        globalAddons: "".concat(OF_PATH, "/addons")
                    })];
            case 3:
                existingAddons = _b.sent();
                installDependencies(projectAddons, existingAddons, AVAIL_ADDONS);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
function installDependencies(addons, existing, AVAIL_ADDONS) {
    var addonsToClone = addons.filter(function (addon) { return addon != existing; });
    addonsToClone.forEach(function (addon) {
        var match = AVAIL_ADDONS.find(function (e) { return e.name == addon; });
        if (!match) {
            console.log('Could not find a link for ', addon);
            return;
        }
        else {
            (0, child_process_1.exec)("\n            cd ".concat(CWD, "/local_addons/\n            git clone ").concat(match.name, "\n            "));
        }
    });
}
function checkExistingAddons(paths) {
    return __awaiter(this, void 0, void 0, function () {
        var localAddons, globalAddons, str;
        return __generator(this, function (_a) {
            localAddons = paths.localAddons, globalAddons = paths.globalAddons;
            str = '';
            try {
                str = fs.readFileSync(localAddons);
            }
            catch (err) {
                // create if none exists?
            }
            return [2 /*return*/];
        });
    });
}
function getAddonsFromMakeFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var str, arr;
        return __generator(this, function (_a) {
            str = '';
            try {
                str = fs.readFileSync(path, { encoding: 'utf8' });
            }
            catch (err) {
                console.error('Could not find config.make file');
            }
            arr = str.split('\n');
            console.log(arr);
            return [2 /*return*/, arr];
        });
    });
}
function getJSON(path) {
    return __awaiter(this, void 0, void 0, function () {
        var str, json, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    str = fs.readFileSync(path, { encoding: 'utf8' });
                    json = {};
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, JSON.parse(str)];
                case 2:
                    json = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, json];
            }
        });
    });
}
