function solve() {
  const inputField = document.getElementById("text");
  const namingConvention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const libraryFunctions = {
    toCamelCase(array) {
      const newArray = [array[0]];

      for (let i = 1; i < array.length; i++) {
        const element = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        newArray.push(element);
      }

      return newArray;
    },
    toPascalCase(array) {
      const newArray = [];

      for (let i = 0; i < array.length; i++) {
        const element = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        newArray.push(element);
      }

      return newArray;
    },
  };

  if (namingConvention === "Camel Case") {
    const split = inputField.value.toLowerCase().split(" ");
    const formattedArray = libraryFunctions.toCamelCase(split);
    result.innerText = formattedArray.join("");
  } else if (namingConvention === "Pascal Case") {
    const split = inputField.value.toLowerCase().split(" ");
    const formattedArray = libraryFunctions.toPascalCase(split);
    result.innerText = formattedArray.join("");
  } else {
    result.innerText = 'Error!'
  }
}
