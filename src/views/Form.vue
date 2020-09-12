<script>
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "From",
  data() {
    return {
      title: null,
      date: null
    };
  },
  computed: {
    utc() {
      return moment(this.date)
        .utc()
        .format();
    },
    isValid() {
      return moment(this.date).isValid();
    },
    params() {
      return this.date ? { date: this.utc } : undefined;
    },
    query() {
      return this.title ? { title: this.title } : undefined;
    }
  },
  methods: {
    onSubmit() {
      if (this.isValid) {
        this.$router.push({
          name: "Timer",
          params: this.params,
          query: this.query
        });
      }
    }
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>
      Event Title
      <input v-model="title" type="text" />
    </label>
    <br />
    <label>
      Date
      <input
        v-model="date"
        type="datetime-local"
        min="1970-01-01T00:00"
        max="2970-01-01T00:00"
      />
    </label>
    <input type="submit" value="Start timer" />
  </form>
</template>
