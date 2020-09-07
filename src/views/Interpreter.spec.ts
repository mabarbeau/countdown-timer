import { shallowMount } from "@vue/test-utils";
import Interpreter from "@/views/Interpreter.vue";

describe("Interpreter.vue", () => {
  it("renders an interpreter", () => {
    const wrapper = shallowMount(Interpreter);
    expect(wrapper.exists()).toBe(true);
  });
});
