
document.body.insertAdjacentHTML ("afterbegin",
"<h1>Hello World!</h1><h2>Hellou World!</h2><h3>Hellou World!</h3><h4>Hellou World!</h4><h5>Hellou World!</h5><h6>Hellou World!</h6>");

document.getElementById("app").insertAdjacentHTML ("afterbegin", "<h6>Hellou World!</h6>");

document.getElementById("demo").innerHTML = `
<p>Hellou World!<p>
`;
document.getElementById("test").innerHTML = `
<h4>Hellou World!</h4>
`;
document.getElementById("module").innerHTML = `
<h6>Hellou World!</h6>
`;
