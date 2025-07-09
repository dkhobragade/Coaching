import { ButtonProps } from '@/lib/props';
import PrimaryButton from '@mui/material/Button';

export default function Button ( props: ButtonProps )
{
    return <PrimaryButton endIcon={ props.endIcon } startIcon={ props.startIcon } size={ props.size } fullWidth={ props.fullwidth } variant={ props.variant } >
        { props.label }
    </PrimaryButton>
}