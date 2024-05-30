const button = document.getElementById('btn');

button.onclick = async () => {
  try {
    const module = await import(`./module.js`);
    alert(module.calc(1, 2));
  }
  catch (err) {
    alert(err?.message);
    throw err;
  }
}
