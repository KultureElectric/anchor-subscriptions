"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgram = exports.setup = void 0;
var anchor_1 = require("@project-serum/anchor");
var nodewallet_1 = __importDefault(require("@project-serum/anchor/dist/cjs/nodewallet"));
var plege_1 = require("../../../shared/idl/plege");
var _program = null;
function setup(connection, programId) {
    if (programId === void 0) { programId = null; }
    var wallet = new nodewallet_1.default(anchor_1.web3.Keypair.generate());
    var provider = new anchor_1.AnchorProvider(connection, wallet, {});
    var program = new anchor_1.Program(plege_1.IDL, programId !== null && programId !== void 0 ? programId : new anchor_1.web3.PublicKey("4MHQj9xyrt9SDZiCt1awCLxveRYjdvGKTSftks7Uhxjb"), provider);
    _program = program;
}
exports.setup = setup;
function getProgram() {
    if (_program) {
        return _program;
    }
    console.log("NO PROGRAM");
    var wallet = new nodewallet_1.default(anchor_1.web3.Keypair.generate());
    var provider = new anchor_1.AnchorProvider(new anchor_1.web3.Connection(anchor_1.web3.clusterApiUrl("devnet")), wallet, {});
    var program = new anchor_1.Program(plege_1.IDL, new anchor_1.web3.PublicKey("4MHQj9xyrt9SDZiCt1awCLxveRYjdvGKTSftks7Uhxjb"), provider);
    _program = program;
    return program;
}
exports.getProgram = getProgram;
