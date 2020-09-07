import { shallowMount } from "@vue/test-utils";
import Timer from "@/views/Timer.vue";

describe("Timer.vue", () => {
  it("renders a timer", () => {
    const wrapper = shallowMount(Timer) 
    expect(wrapper.text()).toBe("Timer");
  });
});
