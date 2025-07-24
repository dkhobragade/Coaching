import colors from '@/lib/color';
import { ButtonProps } from '@/lib/props';
import PrimaryButton from '@mui/material/Button';

export default function Button ( props: ButtonProps )
{
    return <PrimaryButton sx={ { backgroundColor: `${ props.color }`, color: colors.White } } loading={ props.loading } onClick={ props.onClick } endIcon={ props.endIcon } startIcon={ props.startIcon } size={ props.size } fullWidth={ props.fullWidth } variant={ props.variant } >
        { props.label }
    </PrimaryButton>
}