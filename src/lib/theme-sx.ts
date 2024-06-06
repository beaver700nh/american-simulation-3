import { alpha, useTheme } from "@mui/material";

export function useBackgroundColor(a: number = 1.0) {
  const theme = useTheme();
  return {
    backgroundColor: alpha(theme.palette.background.default, a),
  };
}

export function useErrorColor() {
  const theme = useTheme();
  return {
    color: theme.palette.error.main,
  };
}

export function useDropShadow(r: number = 1.0) {
  const theme = useTheme();
  const color = alpha(theme.palette.background.default, 0.5);
  return {
    filter: `drop-shadow(0 0 ${r}rem ${color})`,
  };
}
