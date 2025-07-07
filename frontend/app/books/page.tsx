"use client"

import BookLandingPage from "@/components/Pages/BookLandingPage";
import BooksFAQs from "@/components/Pages/BooksFAQs";
import CurrentAffair from "@/components/Pages/CurrentAffair";
import Delivery from "@/components/Pages/Delivery";
import FormatComparison from "@/components/Pages/FormatComparison";
import { Box } from "@mui/material";
import { motion } from "framer-motion"

export default function Books ()
{
    return (
        <Box sx={ { width: "100%", overflowX: "hidden" } }>
            <motion.div initial={ { opacity: 0, y: 50 } } whileInView={ { opacity: 1, y: 0 } } transition={ { duration: 0.6 } }>
                <BookLandingPage />
            </motion.div>

            <motion.div initial={ { opacity: 0, y: 50 } } whileInView={ { opacity: 1, y: 0 } } transition={ { duration: 0.6 } }>
                <Delivery />
            </motion.div>

            <motion.div initial={ { opacity: 0, y: 50 } } whileInView={ { opacity: 1, y: 0 } } transition={ { duration: 0.6 } }>
                <CurrentAffair />
            </motion.div>

            <motion.div initial={ { opacity: 0, y: 50 } } whileInView={ { opacity: 1, y: 0 } } transition={ { duration: 0.6 } }>
                <FormatComparison />
            </motion.div>

            <motion.div initial={ { opacity: 0, y: 50 } } whileInView={ { opacity: 1, y: 0 } } transition={ { duration: 0.6 } }>
                <BooksFAQs />
            </motion.div>
        </Box>
    )
}