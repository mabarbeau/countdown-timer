import { shallowMount } from "@vue/test-utils";
import Timer from "@/views/Form.vue";

describe("Form.vue", () => {
  it("renders a form", () => {
    const wrapper = shallowMount(Timer);
    expect(wrapper.text()).toBe("Form");
  });
});
