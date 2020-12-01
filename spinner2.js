const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r|   ', '\n'];

const animation = function(params) {
  for (let i = 0; i < params.length; i++) {
    setTimeout(() => {
      process.stdout.write(params[i]);
    }, i * 200);
  }
};

animation(array);