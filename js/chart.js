const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Arsenal", "Manchester City", "Liverpool", "Everton", "Newcastle"],
    datasets: [
      {
        label: "Goals Conceded",
        data: [29, 34, 41, 61, 61],
        backgroundColor: ["rgb(239, 200, 7)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  },
});
