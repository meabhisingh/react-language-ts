import { CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"85vh"}>
      <CircularProgress size={"10rem"} />
    </Stack>
  );
};

export default Loader;
