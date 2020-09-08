<template>
  <h1 v-if="$route.query.title">
    {{ $route.query.title }}
  </h1>
  <div>
    <dl v-if="remaining">
      <dt v-if="remaining.years">Year{{ s(remaining.years) }}</dt>
      <dd v-if="remaining.years">{{ remaining.years }}</dd>

      <dt v-if="remaining.months">Month{{ s(remaining.months) }}</dt>
      <dd v-if="remaining.months">{{ remaining.months }}</dd>

      <dt v-if="remaining.days">Day{{ s(remaining.days) }}</dt>
      <dd v-if="remaining.days">{{ remaining.days }}</dd>

      <dt v-if="remaining.hours">Hour{{ s(remaining.hours) }}</dt>
      <dd v-if="remaining.hours">{{ remaining.hours }}</dd>

      <dt v-if="remaining.minutes">Minute{{ s(remaining.minutes) }}</dt>
      <dd v-if="remaining.minutes">{{ remaining.minutes }}</dd>

      <dt>Second{{ s(remaining.seconds) }}</dt>
      <dd>{{ remaining.seconds }}</dd>
    </dl>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "Timer",
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      now: null,
      remaining: null,
      moment: null
    };
  },
  mounted() {
    this.moment = moment.utc(this.date);
    this.tick(0);
    this.tock(0);
  },
  beforeUnmount() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    s(count) {
      if (count !== 1) return "s";
    },
    tick(timeout = 50) {
      this.$options.timer = window.setTimeout(this.updateDateTime, timeout);
    },
    tock(timeout = 30 * 60) {
      this.$options.timer = window.setTimeout(
        this.updateHumanReadable,
        timeout
      );
    },
    updateHumanReadable() {
      const title = this.moment.fromNow();
      document.title = title.charAt(0).toUpperCase() + title.slice(1);
    },
    updateDateTime() {
      const duration = moment.duration(this.moment.diff(moment()));
      this.remaining = {
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      };
      this.tick();
    }
  }
});
</script>
