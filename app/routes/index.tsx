import { Box, Button, Typography } from "@mui/material";
import Particles from "react-tsparticles";
import UserGreetings from "~/components/UserGreetings";

export default function Index() {

  return (
    <>
      {/* Right section */}
      <Box sx={{
        gap: 1,
      }}>
        <Box sx={{ position: "absolute", top: '18px', left: '18px', color: 'white' }}>
          <UserGreetings firstname={"חיימון"} lastname={"חיימקה"} />
        </Box>
        <Particles id="tsparticles" />
        <Box sx={{ display: "flex", justify: 'center', color: 'white' }}>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Button> ahhhhh </Button>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
        </Box>
      </Box>
    </>
  );
}