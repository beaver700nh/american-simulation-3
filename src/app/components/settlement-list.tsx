        <TextField
          sx={{ gridColumn: "1 / span 2" }}
          className="!mt-4"
          label="Settlement"
          name="username"
          inputProps={register("username")}
          InputLabelProps={{ shrink: true }}
          defaultValue="1"
          select
          fullWidth
          error={!!errors.username}
          helperText={errors.username?.message}
        >
          <MenuItem value="1">Test Item A</MenuItem>
          <MenuItem value="2">Test Item B</MenuItem>
          <MenuItem value="3">Test Item C</MenuItem>
          <MenuItem value="4">Test Item D</MenuItem>
        </TextField>
