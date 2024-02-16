import { assertEquals } from "https://deno.land/std@0.216.0/assert/mod.ts";
import { brainfk } from "./index.ts";

Deno.test("brainfk", () => {
  assertEquals(
    brainfk(
      "+++++++++[>++++++++>+++++++++++>+++>+<<<<-]>.>++.+++++++..+++.>+++++.<<+++++++++++++++.>.+++.------.--------.>+.>+.",
    ),
    "Hello World!\n",
  );
});
