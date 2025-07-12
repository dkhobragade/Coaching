import { InputProps } from "@/lib/props";
import { InputAdornment, TextField } from "@mui/material";

export default function InputField ( props: InputProps )
{
    return (
        <TextField
            type={ props.type ? props.type : "text" }
            slotProps={ {
                input: {
                    autoComplete: 'new-password',
                    startAdornment: (
                        <InputAdornment position="start" >
                            { props.icon }
                        </InputAdornment>
                    )
                }
            } }
            value={ props.value }
            onChange={ props.onChange }
            autoComplete="new-password"
            label={ props.label }
            sx={ { m: 1 } }
            fullWidth={ props.fullWidth }
            size="small"
        />
    )
}