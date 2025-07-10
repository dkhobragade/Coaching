"use client"

import colors from "@/lib/color"
import { AnmiatedProps, BounceAnmiatedProps, ScaleButtonProps } from "@/lib/props";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function BorderBoxAnimation ( props: AnmiatedProps )
{
    return <motion.div
        style={ {
            width: "fit-content",
            padding: 8,
            borderRadius: 50,
            border: "5px solid",
            backgroundColor: colors.DrWhite,
        } }
        animate={ {
            borderColor: [
                "#ff6f61",
                "#ffcc00",
                "#33cc99",
                "#6699ff",
                "#ff6f61",
            ],
        } }
        transition={ {
            duration: 6,
            repeat: Infinity,
            ease: "linear",
        } }
    >
        { props.children }
    </motion.div>
}


export const BounceBox = ( props: BounceAnmiatedProps ) =>
{
    return <motion.div transition={ {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    } }
        animate={ { y: [ 0, -10 ], } }
    >
        { props.children }
    </motion.div>

}

export const ScaleButton = ( props: ScaleButtonProps ) =>
{

    const justifyMap = {
        start: "0 auto 0 0",
        center: "0 auto",
        end: "0 0 0 auto",
    };

    const marginStyle = justifyMap[ props.justify || "center" ];

    return (
        <motion.div
            onClick={ props.onClick }
            whileHover={ { scale: 1.05 } }
            transition={ { duration: 0.3, ease: "easeInOut" } }
            style={ { width: "fit-content", margin: marginStyle, position: "relative" } }
        >
            <Box
                component={ motion.div }
                layout
                className="absolute top-2 left-2 w-full h-full bg-[#FCA311] rounded z-0"
            />
            <Box
                className={ clsx(
                    "relative z-10 px-6 py-3 rounded font-semibold shadow-md cursor-pointer",
                    props.bgColor ? `${ props.bgColor }` : "bg-black",
                    props.textColor ? `${ props.textColor }` : "text-white"
                ) }
            >
                { props.text }
            </Box>
        </motion.div>
    );
};

