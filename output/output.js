const wuTang = "Wu-Lang Forever";
let album = "Enter the Wu-Lang (36 Changes)";
try {
  console.log(album);
  throw new Error(wuTang);
} catch (error) {
  console.log("C.R.E.A.M.:", error);
}
