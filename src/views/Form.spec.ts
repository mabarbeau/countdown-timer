import { shallowMount } from "@vue/test-utils";
import Form from "@/views/Form.vue";

describe("Form.vue", () => {
  it("renders a form", () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.text()).toBe("Form");
  });
});
