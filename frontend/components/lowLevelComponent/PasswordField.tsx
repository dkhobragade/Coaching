"use client"

import { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordField ()
{

    const [ showPassword, setShowPassword ] = useState( false );
    const handleClickShowPassword = () => setShowPassword( ( show ) => !show );

    const handleMouseDownPassword = ( event: React.MouseEvent<HTMLButtonElement> ) =>
    {
        event.preventDefault();
    };

    const handleMouseUpPassword = ( event: React.MouseEvent<HTMLButtonElement> ) =>
    {
        event.preventDefault();
    };

    return <FormControl sx={ { m: 1 } } fullWidth size="small" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
            id="outlined-adornment-password"
            type={ showPassword ? 'text' : 'password' }
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={ handleClickShowPassword }
                        onMouseDown={ handleMouseDownPassword }
                        onMouseUp={ handleMouseUpPassword }
                        edge="end"
                    >
                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                    </IconButton>
                </InputAdornment>
            }
            label="Password"
        />
    </FormControl>
}