const college = {
  name: "ngbhs",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};
//console.log(college.unique.color.);
college.unique.result.merit = "top top top top";
console.log(college.unique.result.merit);
college.events[0] = "16th decem"; //college er modde events object er modde 1 no index er value change
console.log(college.events[1]);
