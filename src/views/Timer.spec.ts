import { shallowMount } from "@vue/test-utils";
import Timer from "@/views/Timer.vue";

jest.spyOn(Date, "now").mockImplementationOnce(() => 1599932495);

jest.useFakeTimers();

describe("Timer.vue", () => {
  it("renders a timer", () => {
    jest.runOnlyPendingTimers();
    const wrapper = shallowMount(Timer, {
      props: {
        date: "2020-10-10T17:18:12Z"
      },
      global: {
        mocks: {
          $route: {
            params: {},
            query: {}
          }
        }
      }
    });
    expect(wrapper.text()).toMatchInlineSnapshot(`""`);
  });
});
