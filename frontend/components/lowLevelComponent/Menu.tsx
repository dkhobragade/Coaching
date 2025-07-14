'use client';

import { Box, ListItemIcon, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatedMenuProps } from '@/lib/props';
import colors from '@/lib/color';

export default function MenuBox ( { title, menuItems, onClick }: AnimatedMenuProps )
{
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    return (
        <Box position="relative" display="inline-block" onMouseEnter={ () => setIsMenuOpen( ( prev ) => !prev ) }
            onMouseLeave={ () => setIsMenuOpen( ( prev ) => !prev ) }>
            <Box
                p={ 1 }
                height="100%"
                borderRadius={ 1 }
                color="black"
                width="fit-content"
                sx={ { cursor: 'pointer' } }
            >
                <Typography fontWeight={ 400 }>
                    { title }
                    <KeyboardArrowDownIcon sx={ { fontSize: { xs: 10, md: 20 } } } />
                </Typography>
            </Box>

            <AnimatePresence>
                { isMenuOpen && (
                    <motion.ul
                        initial={ { opacity: 0, y: 10 } }
                        animate={ { opacity: 1, y: 0 } }
                        exit={ { opacity: 0, y: 10 } }
                        transition={ { duration: 0.5 } }
                        style={ {
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#fff',
                            padding: '1',
                            marginTop: '5px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            zIndex: 10,
                            listStyle: 'none',
                            width: '100px',
                        } }
                    >
                        { menuItems.map( ( item ) => (
                            <li
                                key={ item.label }
                                onClick={ () => onClick?.( item.label ?? '' ) }
                                style={ {
                                    padding: '10px 14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: 'pointer',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.2s ease',
                                } }
                                onMouseEnter={ ( e ) =>
                                {
                                    ( e.currentTarget as HTMLElement ).style.backgroundColor = colors.Zinnia;
                                } }
                                onMouseLeave={ ( e ) =>
                                {
                                    ( e.currentTarget as HTMLElement ).style.backgroundColor = 'transparent';
                                } }
                            >
                                { item.icon &&
                                    <ListItemIcon>{ item.icon }</ListItemIcon>
                                }
                                <span>{ item.label }</span>
                            </li>
                        ) ) }
                    </motion.ul>
                ) }
            </AnimatePresence>
        </Box>
    );
}
