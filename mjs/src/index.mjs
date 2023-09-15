import "./styles.css";

const myjson = [
  {
    Car: {
      Color: "Rose red",
      "Tinted windows": false,
      Wheels: "4",
      "Roof cargo": "null",
      Entertainment: "FM Radio MP3, MP4 and MKV player harman/kardon speakers",
      Accessories: "satnav, cruise control",
    },
  },
  {
    Car: {
      Color: "Navy blue",
      "Tinted windows": true,
      Wheels: "4",
      "Roof cargo": "Thule",
      Entertainment:
        "FM Radio Apple CarPlay/Android Auto Bowers & Wilkins Premium Sound speakers",
      Accessories: "self drive system, luggage cover",
    },
  },
];
document.getElementById("app").innerHTML = `
<table border="1">
    <thead>
      <tr>
        <th>Color</th>
        <th>Tinted windows</th>
        <th>Wheels</th>
        <th>Roof cargo</th>
        <th>Entertainment</th>
        <th>Accessories</th>
      </tr>
    </thead>
    <tbody>
      ${myjson
        .map(
          (car) => `
          <tr>
            <td>${car.Car.Color}</td>
            <td>${car.Car["Tinted windows"]}</td>
            <td>${car.Car.Wheels}</td>
            <td>${car.Car["Roof cargo"] || ""}</td>
            <td>${car.Car.Entertainment}</td>
            <td>${car.Car.Accessories}</td>
          </tr>
        `
        )
        .join("")}
    </tbody>
  </table>
`;

