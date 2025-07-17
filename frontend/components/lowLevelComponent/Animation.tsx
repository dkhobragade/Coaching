"use client"

import colors from "@/lib/color"
import { AnmiatedProps, AnmiationProps, CartProps, ScaleButtonProps } from "@/lib/props";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";
import { useAtom, useSetAtom } from "jotai";
import { userAtom, userCartItems } from "@/lib/store/userAtom";
import { useRouter } from "next/navigation";
import { getCartItemsLength } from "@/lib/cartHelper";

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


export const BounceBox = ( props: AnmiationProps ) =>
{
    return <motion.div transition={ {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    } }
        animate={ { y: [ 0, -10 ] } }

    >
        { props.children }
    </motion.div>

}


export const RotateBox = ( props: AnmiationProps ) =>
{
    return <motion.div transition={ {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
    } }
        animate={ { rotate: [ 0, 360 ] } }
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



export const CartAnimatedBox = ( props: CartProps ) =>
{
    const router = useRouter()
    const userAtomState = useAtom( userAtom )
    const setCartItemsVal = useSetAtom( userCartItems );

    const handleAddToCart = async ( id: string ) =>
    {
        const userId = userAtomState[ 0 ].user.id

        if ( !userId )
        {
            toast.error( "Please create an account to buy." );
            router.push( '/signup' )
            return
        }

        postWrapper( 'auth/cart-Items', {
            productId: id
        } ).then( ( resp ) =>
        {
            toast.success( "Item added to cart!" )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( async () =>
        {
            const cartLength = await getCartItemsLength()
            setCartItemsVal( cartLength )
        } )

    }

    return <Box width={ 250 } minHeight={ 400 }>
        <motion.div
            style={ {
                position: "relative",
                width: "100%",
                height: 250,
                overflow: "hidden",
            } }
            whileHover="hover"
            initial="initial"
        >
            <Box width="100%" height="100%" justifyItems="center" bgcolor={ colors.StarWhite } padding={ 2 }  >
                <Image src={ props.src } alt={ props.alt } width={ 150 } height={ 100 } />
            </Box>
            <motion.div
                onClick={ () => handleAddToCart( props.id ) }
                variants={ {
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                } }
                transition={ { duration: 0.3, ease: "easeInOut" } }
                style={ {
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: 50,
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: 'pointer'
                } }
            >
                <Typography color="white" fontSize={ 20 } fontWeight={ 600 }>
                    ADD TO CART
                </Typography>
            </motion.div>
        </motion.div>
        <Box display="flex" flexDirection="column" gap={ 1 } justifyContent="center" alignItems="center"  >
            <Typography fontSize={ 20 } fontWeight={ 500 } color="#74642F">
                { props.title }
            </Typography>
            <Typography fontSize={ 20 } fontWeight={ 500 } color="#74642F">
                { "\u20B9" } { props.price }
            </Typography>
        </Box>
    </Box>
}