
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300)

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500)

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100)

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300)

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700)


const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

const spinner = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    ((i) => {
      setTimeout(() => {
        process.stdout.write(arr[i])
        if (i === arr.length - 1) {
          process.stdout.write("\n")
        }
      }, 200 * i);
    }) (i);
  }
}

spinner(chars);

