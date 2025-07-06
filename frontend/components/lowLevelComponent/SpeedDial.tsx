"use client"

import Dial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ForumIcon from '@mui/icons-material/Forum';
import QuizIcon from '@mui/icons-material/Quiz';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useRouter } from 'next/navigation';

const actions = [
    { key: '1', icon: <CastForEducationIcon />, name: 'Courses' },
    { key: '2', icon: <ForumIcon />, name: 'Counselling' },
    { key: '3', icon: <QuizIcon />, name: 'Test' },
    { key: '4', icon: <LibraryBooksIcon />, name: 'Books' },
];

export default function GlobalSpeedDial ()
{
    const router = useRouter();

    const handleClickSpeedDial = ( key: string ) =>
    {
        switch ( key )
        {
            case '1':
                router.push( '/courses' );
                break;
            case '2':
                router.push( '/counselling' );
                break;
            case '3':
                router.push( '/test' );
                break;
            case '4':
                router.push( '/books' );
                break;
        }
    }

    return <Dial
        ariaLabel="SpeedDial"
        sx={ { position: 'fixed', bottom: 16, right: 16, zIndex: 9999 } }
        icon={ <SpeedDialIcon /> }

    >
        { actions.map( ( action ) => (
            <SpeedDialAction
                key={ action.name }
                icon={ action.icon }
                slotProps={ {
                    tooltip: {
                        title: action.name
                    }
                } }
                onClick={ () => handleClickSpeedDial( action.key ) }

            />
        ) ) }
    </Dial>
}