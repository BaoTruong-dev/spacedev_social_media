import { Schema } from "mongoose";

function overrideFindMethod() {
  this._conditions.deletedAt = { $not: { $type: "date" } };
}

export const initSoftDeletePlugin = (schema: any, options: any) => {
  schema.add({
    deletedAt: {
      type: Schema.Types.Date,
      default: null,
    },
  });

  schema.pre("find", overrideFindMethod);
  schema.pre("findOne", overrideFindMethod);
  schema.pre("count", overrideFindMethod);
  schema.pre("estimatedDocumentCount", overrideFindMethod);
};
