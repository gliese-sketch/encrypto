function encrypt(text, num) {
  const alphabets = "abcdefghijklmnopqrstuvwyxz";
  let encryptedStr = "";

  for (let char of text) {
    if (!alphabets.includes(char)) {
      encryptedStr += char;
      continue;
    }

    const index = alphabets.indexOf(char);
    let newIndex = index + num;

    if (newIndex > 25) {
      newIndex %= 26;
    }

    const alpha = alphabets[newIndex];
    encryptedStr += alpha; // augumented addition
  }

  console.log(encryptedStr);
}

encrypt("hello kitty... chutti hone wali hai!", 260); // a
