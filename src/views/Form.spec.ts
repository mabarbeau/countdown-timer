import { mount } from "@vue/test-utils";
import Form from "@/views/Form.vue";

describe("Form.vue", () => {
  it("renders a form", () => {
    const wrapper = mount(Form);
    expect(wrapper.element).toMatchSnapshot();
  });
});
