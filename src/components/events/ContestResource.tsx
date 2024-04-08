'use client'

import React from 'react';
import Image from 'next/image';
import { Typography, Box, Card, Grid, Button, Dialog, DialogContent, ListItem, List } from "@mui/material";

interface ResourceInfoProps {
    open: boolean,
    onClose: (value: string) => void
}
function ResourceInfo({ onClose, open }: ResourceInfoProps) {
    return (
        <Dialog onClose={onClose} open={open}>
            <Box textAlign='center'>
                <p/>
                <Typography variant='h2' fontWeight='bold'>Telegram</Typography>
                <p/>
                <Typography variant='h2' fontWeight='bold'>Telegram Bot 聊天機器人</Typography>
            </Box>
            <DialogContent>
                <Typography variant='h3' fontWeight='bold'>資源說明</Typography>
                <p/>
                <Typography variant='body1'>是一種在 Telegram 平台幫助你執行各種功能的應用。 它們提供靈活的互動介面，為用戶完成各種任務或提供服務</Typography>
                <p/>
                <Typography variant='h3' fontWeight='bold'>相關資料</Typography>
                <List>
                    <ListItem><Typography variant='body1'>Telegram Bot API</Typography></ListItem>
                    <ListItem><Typography variant='body1'>Telegram Bot Father</Typography></ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}
function MyCard() {
    const [ open, setOpen ] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<Grid item textAlign='center' width='25%'>
        <Button onClick={handleClickOpen}>
            <Card sx={{borderRadius: '20px', border: '2px solid gray'}}>
                <Typography variant='h4' fontWeight='bold'>
                    Telegram
                </Typography>
                <p></p>
                <Typography variant='h4' fontWeight='bold'>
                    Telegram Bot<br/>
                    聊天機器人
                </Typography>
                <p></p>
                <Grid container justifyContent='flex-end' alignItems='center'>
                    <Typography variant='body1' textAlign='right' fontSize={16}>
                        詳細資訊
                    </Typography>
                    <Image src="/2024/images/events/rightArrow.svg" alt="right arrow" width={15} height={15}/>
                </Grid>
            </Card>
        </Button>
        <ResourceInfo open={open} onClose={handleClose}/>
    </Grid>)
}

export default function ContestResource() {
    return (
        <Box>
            <Typography variant='h2' fontWeight='bold' marginBottom='2rem'>企業資源</Typography>
            <Grid container justifyContent='center'>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
            </Grid>
        </Box>
    )
}