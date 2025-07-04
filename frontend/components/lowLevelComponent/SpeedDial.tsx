"use client"

import Dial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function GlobalSpeedDial ()
{
    return <Dial
        ariaLabel="SpeedDial basic example"
        sx={ { position: 'fixed', bottom: 16, right: 16, zIndex: 9999 } }
        icon={ <SpeedDialIcon /> }
    >
        { actions.map( ( action ) => (
            <SpeedDialAction
                key={ action.name }
                icon={ action.icon }
            />
        ) ) }
    </Dial>
}