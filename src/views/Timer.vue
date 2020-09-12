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
      error: "",
      now: null,
      remaining: null,
      moment: null,
      modes: {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      }
    };
  },
  mounted() {
    this.moment = moment.utc(this.date);
    if (this.moment.isValid()) {
      this.tick(0);
      this.tock(0);
    } else {
      this.error = "Invalid date";
    }
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

<template>
  <div class="timer">
    <h1 v-if="$route.query.title">
      {{ $route.query.title }}
    </h1>
    <div v-if="error">
      {{ error }}
    </div>
    <dl v-else-if="remaining">
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

<style>
.timer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

h1 {
  font-size: 4em;
  text-transform: capitalize;
}

dl {
  margin: 10px;
  display: grid;
  text-align: center;
  grid-auto-columns: 1fr;
  align-self: center;
  width: 100%;
}

dd {
  grid-row-start: 1;
  margin: 0;
  font-family: "Teko", sans-serif;
  font-size: 6em;
  margin-bottom: -0.1em;
}
dt {
  grid-row-start: 2;
  font-size: 1.1em;
  font-family: "Hind", sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
