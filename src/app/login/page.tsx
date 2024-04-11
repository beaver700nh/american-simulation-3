import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";


export default function Login() {
  return (
    <FormControl
      className="grow"
    >
      <Stack
        className="w-fit m-auto p-8 border-2 rounded-lg"
      >
        <Select>
          <MenuItem value={1}>Test Item A</MenuItem>
          <MenuItem value={2}>Test Item B</MenuItem>
          <MenuItem value={3}>Test Item C</MenuItem>
          <MenuItem value={4}>Test Item D</MenuItem>
        </Select>
        <TextField
          label="Password"
        />
      </Stack>
    </FormControl>
  )
}
