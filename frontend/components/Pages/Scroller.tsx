"use client"

import { Box, Typography } from "@mui/material";

export default function Scroller() {
    return (
        <Box bgcolor="black" alignContent="center" width="100%" whiteSpace="nowrap" overflow="hidden" position="relative" height={ 100 }>
        <Box
            sx={ {
                display: 'inline-block',
                animation: 'scroll 25s linear infinite',
            } }
        >
            { [ ...ScrollItems, ...ScrollItems ].map( ( skill, i ) => (
                <Typography key={ i } color="white" component="span" sx={ { mx: 4, fontWeight: 600 } }>
                    { skill }
                </Typography>
            ) ) }
        </Box>

        <style jsx global>{ `
    @keyframes scroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
    </Box>
    )
}

export const ScrollItems = [
   "📱 Learn Anytime, Anywhere",
   "🧾 Weekly Test Reviews",
   "📅 Batch Timings That Fit You",
   "⚡ Rapid Revision Techniques",
   "💬 Live Strategy Sessions",
   "📣 Latest MPSC Updates",
   "🗓️ Smart Study Plans",
   "📈 Daily Progress Tracking",
    "🏆 MPSC Toppers’ Tips",
    "📝 Mock Test Evaluations",
    "🧠 Personal Mentorship",
]
