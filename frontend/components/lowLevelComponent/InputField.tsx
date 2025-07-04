import { InputProps } from "@/lib/props";
import { TextField } from "@mui/material";

export default function InputField ( props: InputProps )
{
    return (
        <TextField
            autoComplete="new-password"
            label={ props.placeholder }
            sx={ { m: 1 } }
            fullWidth={ props.fullWidht }
            size="small"
        />
    )
}