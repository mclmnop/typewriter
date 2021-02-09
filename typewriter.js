const sentence = "hello there from lighthouse labs";

let timeout = 0;
for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    //console.log(char, "length", sentence.length);
    if (char === sentence.length - 1) {
      process.stdout.write(sentence[char]);
      process.stdout.write('\n');
    } else {
      process.stdout.write(sentence[char]);
    }
  }, timeout);
  timeout += 50;
}

