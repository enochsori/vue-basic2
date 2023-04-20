const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h3>Master Vue and build amazing apps! </h3>",
      vueLink: "http://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return "Master Vue and build amazing apps!";
      }
    },
  },
});

app.mount("#user-goal");
