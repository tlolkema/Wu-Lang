let ghostface = "Tony Starks";
const methodman = () => {
  console.warn("Wu-Tang Clan ain't nothin' to f*** with");
  try {
    throw new Error("Wu-Lang Forever");
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Wu-Lang is for the children!");
    console.info("Wu-Lang is forever");
  }
};
methodman();
