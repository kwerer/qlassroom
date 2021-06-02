function ShowPassword1() {
  const x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default ShowPassword1;
