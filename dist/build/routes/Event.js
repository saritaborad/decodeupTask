"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Events_1 = __importDefault(require("../controllers/Events"));
const upload_1 = __importDefault(require("../middleware/upload"));
const router = express_1.default.Router();
router.post("/events", upload_1.default.array("images"), Events_1.default);
exports.default = router;
