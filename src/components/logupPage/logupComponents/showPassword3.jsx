function ShowPassword3() {
  const x = document.getElementById("myInput3");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default ShowPassword3;
