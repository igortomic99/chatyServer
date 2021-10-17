import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsUpdateManyWithoutFollowerInput } from "../inputs/FollowsUpdateManyWithoutFollowerInput";
import { FollowsUpdateManyWithoutFollowingInput } from "../inputs/FollowsUpdateManyWithoutFollowingInput";
import { MessageUpdateManyWithoutAuthorInput } from "../inputs/MessageUpdateManyWithoutAuthorInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { ProfileUpdateOneWithoutUserInput } from "../inputs/ProfileUpdateOneWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersInConversationsUpdateManyWithoutUserInput } from "../inputs/UsersInConversationsUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutUpvotesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateManyWithoutUserInput, {
    nullable: true
  })
  conversations?: UsersInConversationsUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  Message?: MessageUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowerInput, {
    nullable: true
  })
  followedBy?: FollowsUpdateManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsUpdateManyWithoutFollowingInput | undefined;
}
