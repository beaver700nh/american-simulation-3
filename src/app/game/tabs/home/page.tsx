import { Box, Divider, Stack, Typography } from "@mui/material";

import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <Box
      className="grow flex relative"
    >
      <Stack
        className="m-auto p-10 text-center"
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
        <Typography
          fontStyle="italic"
          variant="body1"
        >
          Originally written by Mr. White in Microsoft Excel<br />
          Ported to the web by his high school student Minh Lê
        </Typography>
        <Divider
          className="!-mx-8 !my-4"
          orientation="horizontal"
          flexItem
        />
        <Typography
          variant="body1"
        >
          You are: {session?.user?.name}
        </Typography>
      </Stack>
    </Box>
  )
}
