import { Box, Divider, Stack, Typography } from "@mui/material";
// export { House as Icon } from "@mui/icons-material";

export const index = 0;

export default function MainMenu() {
  return (
    <Box
      className="grow flex relative"
    >
      <Stack
        className="m-auto text-center"
      >
        <Typography
          variant="h4"
        >
          &ldquo;The Sim&rdquo;
        </Typography>
        <Typography
          variant="h6"
        >
          US I - American History Through Simulation
        </Typography>
        <Divider
          className="!-mx-8 !my-4"
          orientation="horizontal"
          flexItem
        />
        <Typography
          fontStyle="italic"
          variant="body1"
        >
          Originally written by Mr. White in Microsoft Excel<br />
          Ported to the web by his high school student Minh Lê
        </Typography>
      </Stack>
    </Box>
  )
}
