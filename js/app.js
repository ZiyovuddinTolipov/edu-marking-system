let techerReating = document.getElementById("techerReating");
teacher.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(teacher);

    console.log("Form Data");
    for (let obj of formData) {
        console.log(obj[0], obj[1]);
        techerReating.innerHTML == `
        <tr>
        <td>${obj[1]}</td>
        <th>
          <p>
            ${obj[1]}
          </p>
        </th>
        <th className="ht">

        </th>
      </tr>
      `

    }
};