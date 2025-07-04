import { CheckboxProps } from "@/lib/props";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function CheckBox ( props: CheckboxProps )
{
    return <FormControlLabel control={ <Checkbox checked={ props.checked } /> } label={ props.label } />
}