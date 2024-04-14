'use client';
import React from 'react';
import Image from 'next/image';
import { Typography, Card, Grid, Button } from "@mui/material";
import { ResourceInfo } from './ContestResource';

export function MyCard() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<Grid item textAlign='center' width='25%'>
        <Button onClick={handleClickOpen}>
            <Card sx={{ borderRadius: '20px', border: '2px solid gray' }}>
                <Typography variant='h4' fontWeight='bold'>
                    Telegram
                </Typography>
                <p></p>
                <Typography variant='h4' fontWeight='bold'>
                    Telegram Bot<br />
                    聊天機器人
                </Typography>
                <p></p>
                <Grid container justifyContent='flex-end' alignItems='center'>
                    <Typography variant='body1' textAlign='right' fontSize={16}>
                        詳細資訊
                    </Typography>
                    <Image src="/2024/images/events/rightArrow.svg" alt="right arrow" width={15} height={15} />
                </Grid>
            </Card>
        </Button>
        <ResourceInfo open={open} onClose={handleClose} />
    </Grid>);
}
