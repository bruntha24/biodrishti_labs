import "@testing-library/jest-dom";
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

(globalThis as any).IntersectionObserver = MockIntersectionObserver;