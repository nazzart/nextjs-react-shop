import formatPrice from "@/app/lib/formatPrice";
import "@testing-library/jest-dom";


describe("formatPrice", () => {

  it("should format the price to a readable format", () => {
    expect(formatPrice(199)).toBe("$199.00");
  });

  it("should return an empty string if the price was undefined", () => {
    expect(formatPrice(undefined)).toBe("");
  });

});
