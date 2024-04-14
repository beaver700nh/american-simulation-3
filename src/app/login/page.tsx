"use client";

import Image from "next/image";

import { Box, Button, Icon, MenuItem, TextField, Typography, alpha, useTheme } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";

export default function Login() {
  const theme = useTheme();

  return (
    <Box
      className="grow flex relative"
    >
      <Image
        className="object-cover -z-10 opacity-50 blur-sm"
        src="/assets/paper-version.jpg"
        alt=""
        fill
        priority
      />
      <Grid
        sx={{ width: "calc(25lvw + 25lvh)", backgroundColor: alpha(theme.palette.background.default, 0.75) }}
        className="!min-w-min max-w-full !m-auto p-8 items-center border-2 rounded-lg shadow-xl"
        spacing={2}
        container
      >
        <Grid
          className="flex place-content-center"
          xs="auto"
        >
          <Icon
            className="relative !text-[3rem]"
          >
            <Image
              className="object-contain"
              src="/logo.png"
              alt=""
              sizes="3rem"
              fill
            />
          </Icon>
        </Grid>
        <Grid
          xs="auto"
        >
          <Typography
            variant="h5"
          >
            Sign In
          </Typography>
        </Grid>
        <Grid
          xs={12}
        >
          <TextField
            className="w-full"
            label="Settlement"
            name="username"
            select
            value={1}
          >
            <MenuItem value={1}>Test Item A</MenuItem>
            <MenuItem value={2}>Test Item B</MenuItem>
            <MenuItem value={3}>Test Item C</MenuItem>
            <MenuItem value={4}>Test Item D</MenuItem>
          </TextField>
        </Grid>
        <Grid
          xs={12}
        >
          <TextField
            className="w-full"
            label="Password"
            name="password"
            type="password"
          />
        </Grid>
        <Grid
          xs={12}
        >
          <Button
            className="w-full !normal-case"
            variant="contained"
            disableElevation
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
