import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Interpreter from "@/views/Interpreter.vue";
import { routes } from "@/router"

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("Interpreter.vue", () => {
  it.skip("redirects to the timer", () => {
    const wrapper = shallowMount(Interpreter, {
      props: {
        interval: 'minutes',
        duration: 10,
      },
      global: {
        plugins: [router],
        mocks: {
          $router: {
            push: jest.fn()
          },
        }
      },
    });
    expect(wrapper.vm.$router.push).toHaveBeenCalled();
  });
});
