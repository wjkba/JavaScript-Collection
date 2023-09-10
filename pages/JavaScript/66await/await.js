//await = makes an async function wait for a Promise

async function loadFile() {
  let fileLoaded = true;
  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}

async function startProcess() {
  try {
    let message = await loadFile();
    console.log(message);
  } catch {
    console.log("error");
  }
}
startProcess();
