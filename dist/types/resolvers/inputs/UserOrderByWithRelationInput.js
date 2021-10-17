"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ConversationOrderByRelationAggregateInput_1 = require("../inputs/ConversationOrderByRelationAggregateInput");
const MessageOrderByRelationAggregateInput_1 = require("../inputs/MessageOrderByRelationAggregateInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ProfileOrderByWithRelationInput_1 = require("../inputs/ProfileOrderByWithRelationInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationOrderByRelationAggregateInput_1.ConversationOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "conversations", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "Message", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "friends", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "friendsRelation", void 0);
UserOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=UserOrderByWithRelationInput.js.map