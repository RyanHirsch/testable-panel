import render from "@skatejs/ssr";

import "../index";

describe("example-app", () => {
  it("has a default state", () => {
    const el = document.createElement("example-app");
    expect(el.state).toHaveProperty("working", true);
  });

  it("renders the expected markup", async () => {
    const el = document.createElement("example-app");
    const markup = await render(el);

    expect(markup).toContain("This is a beep app.");
    expect(el.state).toHaveProperty("working", true);
  });
});
