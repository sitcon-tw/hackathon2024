'use client'

import { Grid, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa";

const data = [
    { name: '零時小學校', url: '#' },
];

const buttonText = {
    fontWeight: '500',
}

export default function Course() {
    return (
        <Grid container gap='56px' direction='column'>
            <Grid item>
                <Typography variant='h2' fontWeight='bold'>
                    線上課程
                </Typography>
            </Grid>
            <Grid item marginLeft='28px'>
                { data.map(({ name, url }, index) => (
                        <Grid container key={index} direction='row' alignItems='center'>
                            <FaCheck size='26px' />
                            <Typography variant='h4' fontWeight='bold' marginLeft='12px' marginRight='30px'>
                                {name}
                            </Typography>
                            <a className='btn-color' href={url} style={{padding: '5px 15px'}}>
                                <Typography variant='body2' sx={buttonText}>
                                    website
                                </Typography>
                            </a>
                        </Grid>
                ))}
            </Grid>
        </Grid>
    );
}