import { InputProps } from "@/lib/props";
import { InputAdornment, TextField } from "@mui/material";

export default function InputField ( props: InputProps )
{
    return (
        <TextField
            slotProps={ {
                input: {
                    startAdornment: (
                        <InputAdornment position="start" >
                            { props.icon }
                        </InputAdornment>
                    )
                }
            } }
            autoComplete="new-password"
            label={ props.label }
            sx={ { m: 1 } }
            fullWidth={ props.fullWidht }
            size="small"
        />
    )
}