export * as ConfigGoal from "./goal.js"

import { Schema } from "effect"
import { optional, PositiveInt } from "../schema.js"

export class Info extends Schema.Class<Info>("Config.Goal")({
  max_rounds: PositiveInt.pipe(optional).annotate({
    description: "How many continuation rounds a goal may run before it pauses. Defaults to 50.",
  }),
}) {}
