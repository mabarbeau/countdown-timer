<template>
  <div>
    Interpreter
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

class ItsMyMoment extends Date {
  add(interval: string, duration: number): this {
    if (interval === "second") this.addSeconds(duration);
    if (interval === "minute") this.addMinutes(duration);
    if (interval === "hour") this.addHours(duration);
    if (interval === "day") this.addDays(duration);
    if (interval === "weeks") this.addWeeks(duration);
    if (interval === "month") this.addMonths(duration);
    if (interval === "year") this.addYears(duration);
    return this;
  }
  addSeconds(seconds: number): this {
    this.setSeconds(this.getSeconds() + seconds);
    return this;
  }
  addMinutes(minutes: number): this {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
  }
  addHours(hours: number): this {
    this.setHours(this.getHours() + hours);
    return this;
  }
  addDays(days: number): this {
    this.setDate(this.getDate() + days);
    return this;
  }
  addWeeks(days: number): this {
    this.setDate(this.getDate() + days);
    return this;
  }
  addMonths(months: number): this {
    const dt = this.getDate();
    this.setMonth(this.getMonth() + months);
    const currentDate = this.getDate();
    if (dt !== currentDate) {
      this.addDays(-currentDate);
    }
    return this;
  }
  addYears(years: number): this {
    const dt = this.getDate();
    this.setFullYear(this.getFullYear() + years);
    const currentDate = this.getDate();
    if (dt !== currentDate) {
      this.addDays(-currentDate);
    }
    return this;
  }
}

function beforeRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  next(vm => {
    if (
      typeof to.params.interval === "string" &&
      typeof to.params.duration === "string" &&
      !isNaN(parseInt(to.params.duration))
    ) {
      const timestamp = new ItsMyMoment(Date.now())
        .add(to.params.interval, parseInt(to.params.duration))
        .getTime();
      vm.$router.push({
        name: "Timer",
        params: { timestamp }
      });
    }
  });
}

export default defineComponent({
  name: "Interpreter",
  props: {
    interval: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },
  beforeRouteEnter(to, from, next) {
    beforeRoute(to, from, next);
  },
  beforeRouteUpdate(to, from, next) {
    beforeRoute(to, from, next);
  }
});
</script>
