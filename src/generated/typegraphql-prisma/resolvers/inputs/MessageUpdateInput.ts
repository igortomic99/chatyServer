import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ConversationUpdateOneRequiredWithoutMessagesInput } from "../inputs/ConversationUpdateOneRequiredWithoutMessagesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMessageInput } from "../inputs/UserUpdateOneRequiredWithoutMessageInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  read?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMessageInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutMessagesInput, {
    nullable: true
  })
  conversation?: ConversationUpdateOneRequiredWithoutMessagesInput | undefined;
}
