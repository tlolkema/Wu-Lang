let ghostface = "Tony Starks";
const methodman = () => {
  try {
    throw new Error("Wu-Lang Forever");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Wu-Lang is for the children!");
  }
};
methodman();
