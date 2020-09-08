import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Interpreter from "@/views/Interpreter.vue";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

describe("Interpreter.vue", () => {
  it("redirects to the timer", () => {
    const wrapper = shallowMount(Interpreter, {
      props: {
        unit: "minutes",
        amount: "10"
      },
      global: {
        plugins: [router],
        mocks: {
          $router: {
            push: jest.fn()
          }
        }
      }
    });
    expect(wrapper.vm.$router.push).toHaveBeenCalled();
  });
});
