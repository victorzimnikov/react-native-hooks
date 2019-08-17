import * as api from "../src";

it("exposes public api", () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "useBackHandler": [Function],
      "useKeyboard": [Function],
      "useNativeRef": [Function],
      "useStatusBar": [Function],
    }
  `);
});
