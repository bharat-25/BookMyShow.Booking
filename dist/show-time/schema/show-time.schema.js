"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowtimeSchema = exports.Showtime = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var TimeSlot;
(function (TimeSlot) {
    TimeSlot["09:00 AM"] = "09:00";
    TimeSlot["12:00 PM"] = "12:00";
    TimeSlot["03:00 PM"] = "15:00";
    TimeSlot["06:00 PM"] = "18:00";
    TimeSlot["09:00 PM"] = "21:00";
})(TimeSlot || (TimeSlot = {}));
let Showtime = class Showtime extends mongoose_2.Document {
};
exports.Showtime = Showtime;
__decorate([
    (0, mongoose_1.Prop)([
        {
            slot: { type: String, enum: Object.values(TimeSlot) },
            availableSeats: { type: Number, default: 0 },
        },
    ]),
    __metadata("design:type", Array)
], Showtime.prototype, "slots", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Movie' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Showtime.prototype, "movieId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Theater' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Showtime.prototype, "theaterId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Showtime.prototype, "date", void 0);
exports.Showtime = Showtime = __decorate([
    (0, mongoose_1.Schema)()
], Showtime);
exports.ShowtimeSchema = mongoose_1.SchemaFactory.createForClass(Showtime);
//# sourceMappingURL=show-time.schema.js.map