import { Link } from "react-router-dom";

import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";

import { tokens } from "../../../theme";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (name: string) => void;
}

export function Item({ title, to, icon, selected, setSelected }: ItemProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}
