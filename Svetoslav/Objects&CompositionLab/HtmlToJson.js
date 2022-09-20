function solve(json) {
  const stringified = JSON.parse(json);
  let htmlTable = ["<table>"];
  htmlTable.push(generateHeading(stringified));
  htmlTable.push(...generateBody(stringified));
  htmlTable.push("</table>");

  function generateHeading(arr) {
    const keys = Object.keys(arr[0]);
    let heading = "   <tr>";

    for (const key of keys) {
      heading += `<th>${escape(key)}</th>`;
    }

    heading += "</tr>";

    return heading;
  }

  function generateBody(objects) {
    let body = [];

    for (const object of objects) {
      let bodyRow = "";
      bodyRow += "   <tr>";

      for (const key in object) {
        bodyRow += `<td>${escape(object[key])}</td>`;
      }

      bodyRow += "</tr>";
      body.push(bodyRow);
    }

    return body;
  }

  function escape(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  console.log(htmlTable.join("\n"));
}

solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
