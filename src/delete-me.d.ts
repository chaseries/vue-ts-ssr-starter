import { foo } from "./delete-me.js";

declare module "./delete-me.js" {
  declare const foo: number;
}
