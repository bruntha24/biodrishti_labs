import { render } from "@testing-library/react";
import Hero from "@/components/hero/Hero";

describe("Hero Section", () => {
  it("renders without crashing", () => {
    render(<Hero />);
  });
});