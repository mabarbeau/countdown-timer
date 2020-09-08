<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "Interpreter",
  props: {
    unit: {
      type: String,
      default: ""
    },
    amount: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      units: ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]
    };
  },
  computed: {
    isValid(): boolean {
      return this.error === "";
    },
    error(): string {
      if (this.amountError) return this.amountError;
      if (this.unitError) return this.unitError;
      return "";
    },
    amountError(): string {
      if (!this.amount) return "amount missing";
      if (isNaN(parseInt(this.amount))) return "amount must be number";
      return "";
    },
    unitError(): string {
      if (this.unit in this.units) {
        return `unit must be ${this.units.join(", ")}`;
      }
      return "";
    }
  },
  mounted() {
    if (this.isValid) {
      const { unit, amount } = this;
      const timestamp = moment().add(
        amount as moment.DurationInputArg1,
        unit as moment.DurationInputArg2
      );
      this.$router.push({
        name: "Timer",
        params: { date: encodeURI(timestamp.utc().format()) }
      });
    }
  }
});
</script>

<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>
