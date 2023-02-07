import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import classes from "./TitleLink.module.css";



export default function TitleLink() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Главная
        </Link>,

        <Typography key="3" color="text.primary">
            Корзина
        </Typography>,
    ];

    return (
        <>
            <div>
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small"/>}
                        aria-label="breadcrumb"
                        sx={{marginLeft: 10, marginTop: 4}}
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>
            <div>
                <h1 className={classes.title}>Корзина</h1>
            </div>
        </>
    );
}