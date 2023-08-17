require("fs").readFile(
  ".next/routes-manifest.json",
  { encoding: "utf-8" },
  (err, data) => {
    if (err) {
      console.err(err);
      return;
    }
    console.log(JSON.parse(data));
  }
);
