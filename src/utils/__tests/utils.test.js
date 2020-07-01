import setPageTitle from "../pageTitle";

test("Subtitle is set in the page title", () => {
    setPageTitle("Home");
    expect(document.title).toBe("CMLogger | Home")
})