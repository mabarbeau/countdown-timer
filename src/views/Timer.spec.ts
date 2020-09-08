import { shallowMount } from "@vue/test-utils";
import Timer from "@/views/Timer.vue";
import moment from "moment";

jest.mock("moment", () => () => ({
  format: () => "2020–01–01T01:00:00+00:00"
}));
jest.useFakeTimers();

describe("Timer.vue", () => {
  it("renders a timer", () => {
    const wrapper = shallowMount(Timer, {
      props: {
        date: moment(1).format()
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(`""`);
  });
});
