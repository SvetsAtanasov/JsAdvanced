function encodeAndDecodeMessages() {
  const textAreas = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");
  const encodeBtn = buttons[0];
  const decode = buttons[1];
  const messageEncode = textAreas[0];
  const messageDecode = textAreas[1];
  let encodedMsg = [];

  encodeBtn.addEventListener("click", () => {
    encodedMsg = [];
    const messageVal = messageEncode.value;
    let encoded = "";

    for (let i = 0; i < messageVal.length; i++) {
      encodedMsg.push(messageVal.charCodeAt(i) + 1);

      encoded += String.fromCharCode(encodedMsg[i]);
    }

    messageDecode.value = encoded;
    messageEncode.value = "";
  });

  decode.addEventListener("click", () => {
    const encoded = [...encodedMsg];
    let decoded = "";

    for (let i = 0; i < encoded.length; i++) {
      decoded += String.fromCharCode(encoded[i] - 1);
    }

    messageDecode.value = decoded;
  });
}
