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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Follows_1 = require("../../../models/Follows");
const Message_1 = require("../../../models/Message");
const Post_1 = require("../../../models/Post");
const Profile_1 = require("../../../models/Profile");
const Upvote_1 = require("../../../models/Upvote");
const User_1 = require("../../../models/User");
const UsersInConversations_1 = require("../../../models/UsersInConversations");
const UserConversationsArgs_1 = require("./args/UserConversationsArgs");
const UserFollowedByArgs_1 = require("./args/UserFollowedByArgs");
const UserFollowingArgs_1 = require("./args/UserFollowingArgs");
const UserMessageArgs_1 = require("./args/UserMessageArgs");
const UserPostsArgs_1 = require("./args/UserPostsArgs");
const UserUpvotesArgs_1 = require("./args/UserUpvotesArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    conversations(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).conversations(args);
        });
    }
    Message(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).Message(args);
        });
    }
    posts(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).posts(args);
        });
    }
    profile(user, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).profile({});
        });
    }
    upvotes(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).upvotes(args);
        });
    }
    followedBy(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).followedBy(args);
        });
    }
    following(user, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
                where: {
                    id: user.id,
                },
            }).following(args);
        });
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [UsersInConversations_1.UsersInConversations], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserConversationsArgs_1.UserConversationsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "conversations", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Message_1.Message], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserMessageArgs_1.UserMessageArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Message", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserPostsArgs_1.UserPostsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "profile", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Upvote_1.Upvote], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserUpvotesArgs_1.UserUpvotesArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "upvotes", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Follows_1.Follows], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserFollowedByArgs_1.UserFollowedByArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "followedBy", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Follows_1.Follows], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserFollowingArgs_1.UserFollowingArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "following", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
//# sourceMappingURL=UserRelationsResolver.js.map