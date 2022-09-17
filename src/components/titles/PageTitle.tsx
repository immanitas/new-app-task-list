import { Typography } from "@mui/material"
import { PageTitleProps } from "./PageTitleProps"

export const PageTitle: React.FC<PageTitleProps> = ({ value }) => {
  return (
    <Typography variant="h6">
      {value}
    </Typography>
  )
}