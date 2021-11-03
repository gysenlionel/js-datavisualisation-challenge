// ------------variables -----------------------

var table1 = document.querySelector("#table1");
var tbody = table1.getElementsByTagName("tbody")[0];
var row = tbody.getElementsByTagName("tr")[1];
var column = row.getElementsByTagName("td")[0];
var years = row.getElementsByTagName("th")[1];

// --------------table -------------------------

var tableau_val = [];
var tableau_pays = [];
var tableau_year = [];
// --------------canvas ------------------------

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "graph");
canvas.setAttribute("width", "auto");
canvas.setAttribute("height", "150");
table1.before(canvas);
// --------------recover table1-----------------
// ------table country----------

for (r = 1; r < tbody.getElementsByTagName("tr").length; r++) {
  tableau_pays.push(
    tbody.getElementsByTagName("tr")[r].getElementsByTagName("td")[0].innerHTML
  );
}

// ------table values-----------

for (r = 1; r < tbody.getElementsByTagName("tr").length; r++) {
  tableau_val[r] = new Array();

  for (i = 1; i < row.getElementsByTagName("td").length; i++) {
    tableau_val[r].push(
      parseInt(
        tbody.getElementsByTagName("tr")[r].getElementsByTagName("td")[i]
          .innerHTML
      )
    );
  }
}

console.log(tableau_val);

// -------table years-----------

var rowTitle = document.getElementsByTagName("tr")[1];
var ligne = rowTitle.getElementsByTagName("th")[0];

for (r = 2; r < rowTitle.getElementsByTagName("th").length; r++) {
  tableau_year.push(rowTitle.getElementsByTagName("th")[r].innerHTML);
}

// ------------------------- Graph 1 ------------------------------------

const ctx = document.getElementById("graph");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: tableau_year,
    datasets: [
      {
        label: tableau_pays[0],
        data: tableau_val[1],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        hidden: false,
      },
      {
        label: tableau_pays[1],
        data: tableau_val[2],
        backgroundColor: ["rgba(187, 143, 206, 0.2)"],
        borderColor: ["rgba(187, 143, 206, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[2],
        data: tableau_val[3],
        backgroundColor: ["rgba(133, 193, 233, 0.2)"],
        borderColor: ["rgba(133, 193, 233, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[3],
        data: tableau_val[4],
        backgroundColor: ["rgba(130, 224, 170, 0.2)"],
        borderColor: ["rgba(130, 224, 170, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[4],
        data: tableau_val[5],
        backgroundColor: ["rgba(247, 220, 111, 0.2)"],
        borderColor: ["rgba(247, 220, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[5],
        data: tableau_val[6],
        backgroundColor: ["rgba(229, 152, 102, 0.2)"],
        borderColor: ["rgba(229, 152, 102, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[6],
        data: tableau_val[7],
        backgroundColor: ["rgba(229, 152, 102, 0.2)"],
        borderColor: ["rgba(229, 152, 102, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[7],
        data: tableau_val[8],
        backgroundColor: ["rgba(44, 62, 80, 0.2)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[8],
        data: tableau_val[9],
        backgroundColor: ["rgba(169, 50, 38, 0.2)"],
        borderColor: ["rgba(169, 50, 38, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[9],
        data: tableau_val[10],
        backgroundColor: ["rgba(142, 68, 173, 0.2)"],
        borderColor: ["rgba(142, 68, 173, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[10],
        data: tableau_val[11],
        backgroundColor: ["rgba(82, 190, 128, 0.2)"],
        borderColor: ["rgba(82, 190, 128, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[11],
        data: tableau_val[12],
        backgroundColor: ["rgba(247, 220, 111, 0.2)"],
        borderColor: ["rgba(247, 220, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[12],
        data: tableau_val[13],
        backgroundColor: ["rgba(235, 152, 78, 0.2)"],
        borderColor: ["rgba(235, 152, 78, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[13],
        data: tableau_val[14],
        backgroundColor: ["rgba(220, 118, 51, 0.2)"],
        borderColor: ["rgba(220, 118, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[14],
        data: tableau_val[15],
        backgroundColor: ["rgba(170, 183, 184, 0.2)"],
        borderColor: ["rgba(170, 183, 184, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[15],
        data: tableau_val[16],
        backgroundColor: ["rgba(44, 62, 80, 0.2)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[16],
        data: tableau_val[17],
        backgroundColor: ["rgba(123, 36, 28, 0.2)"],
        borderColor: ["rgba(123, 36, 28, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[17],
        data: tableau_val[18],
        backgroundColor: ["rgba(91, 44, 111, 0.2)"],
        borderColor: ["rgba(91, 44, 111, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[18],
        data: tableau_val[19],
        backgroundColor: ["rgba(40, 116, 166, 0.2)"],
        borderColor: ["rgba(40, 116, 166, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[19],
        data: tableau_val[20],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[20],
        data: tableau_val[21],
        backgroundColor: ["rgba(17, 120, 100, 0.2)"],
        borderColor: ["rgba(17, 120, 100, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[21],
        data: tableau_val[22],
        backgroundColor: ["rgba(126, 81, 9, 0.2)"],
        borderColor: ["rgba(126, 81, 9, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[22],
        data: tableau_val[23],
        backgroundColor: ["rgba(120, 66, 18, 0.2)"],
        borderColor: ["rgba(120, 66, 18, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[23],
        data: tableau_val[24],
        backgroundColor: ["rgba(151, 154, 154, 0.2)"],
        borderColor: ["rgba(151, 154, 154, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[24],
        data: tableau_val[25],
        backgroundColor: ["rgba(81, 90, 90, 0.2)"],
        borderColor: ["rgba(81, 90, 90, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[25],
        data: tableau_val[26],
        backgroundColor: ["rgba(28, 40, 51, 0.2)"],
        borderColor: ["rgba(28, 40, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[26],
        data: tableau_val[27],
        backgroundColor: ["rgba(22, 160, 133, 0.2)"],
        borderColor: ["rgba(22, 160, 133, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[27],
        data: tableau_val[28],
        backgroundColor: ["rgba(165, 105, 189, 0.2)"],
        borderColor: ["rgba(165, 105, 189, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[28],
        data: tableau_val[29],
        backgroundColor: ["rgba(169, 50, 38, 0.2)"],
        borderColor: ["rgba(169, 50, 38, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[29],
        data: tableau_val[30],
        backgroundColor: ["rgba(243, 156, 18, 0.2)"],
        borderColor: ["rgba(243, 156, 18, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[30],
        data: tableau_val[31],
        backgroundColor: ["rgba(44, 62, 80, 0.2)"],
        borderColor: ["rgba(44, 62, 80, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[31],
        data: tableau_val[32],
        backgroundColor: ["rgba(40, 116, 166, 0.2)"],
        borderColor: ["rgba(40, 116, 166, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[32],
        data: tableau_val[33],
        backgroundColor: ["rgba(236, 112, 99, 0.2)"],
        borderColor: ["rgba(236, 112, 99, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[33],
        data: tableau_val[34],
        backgroundColor: ["rgba(220, 118, 51, 0.2)"],
        borderColor: ["rgba(220, 118, 51, 1)"],
        borderWidth: 1,
        hidden: true,
      },
      {
        label: tableau_pays[34],
        data: tableau_val[35],
        backgroundColor: ["rgba(191, 201, 202, 0.2)"],
        borderColor: ["rgba(191, 201, 202, 1)"],
        borderWidth: 1,
        hidden: true,
      },
    ],
  },
  options: {
    hitradius: 10,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// ----------------- table2 variables ----------------------

var table2 = document.querySelector("#table2");
var tbody2 = table2.getElementsByTagName("tbody")[0];
var table2Row = tbody2.getElementsByTagName("tr")[0];
var table2Cell = table2Row.getElementsByTagName("td")[0];

// ----------------- canvas2 -------------------------------

var canvas2 = document.createElement("canvas");
canvas.setAttribute("id", "graph2");
canvas.setAttribute("width", "auto");
canvas.setAttribute("height", "150");
table2.before(canvas2);

// --------------- table2 values -----------------------

var tableau2_val = [];

for (r = 0; r < tbody2.getElementsByTagName("tr").length; r++) {
  tableau2_val[r] = new Array();

  for (i = 1; i < table2Row.getElementsByTagName("td").length; i++) {
    tableau2_val[r].push(
      parseInt(
        tbody2.getElementsByTagName("tr")[r].getElementsByTagName("td")[i]
          .innerHTML
      )
    );
  }
}

console.log(tableau2_val);

// ------------------- table2 country --------------------------

var tableau2_pays = [];

for (r = 0; r < tbody2.getElementsByTagName("tr").length; r++) {
  tableau2_pays.push(
    tbody2.getElementsByTagName("tr")[r].getElementsByTagName("td")[0].innerHTML
  );
}

console.log(tableau2_pays);

// ------------------------ graph2 ------------------------------
