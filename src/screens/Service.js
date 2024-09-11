import React from "react";
import { Link } from 'react-router-dom';
import Cardcomp from "../components/Cardcomp";
import { Container, Box, Typography, Grid } from "@mui/material";

const card1 = {
    imgurl:'https://picsum.photos/1024/512?random=5',
    imgalt:'サービス１',
    title:'サービス１',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card2 = {
    imgurl:'https://picsum.photos/1024/512?random=6',
    imgalt:'サービス２',
    title:'サービス２',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card3 = {
    imgurl:'https://picsum.photos/1024/512?random=7',
    imgalt:'サービス３',
    title:'サービス３',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card4 = {
    imgurl:'https://picsum.photos/1024/512?random=8',
    imgalt:'サービス４',
    title:'サービス３',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}

const Service = () => {
    return (
        <>
            <Container>
                <Box sx={{height: 100, width: "auto" }}></Box>
                <Typography variant="h6">サービス</Typography>
                <Box sx={{height: 20, width: "auto" }}></Box>
                <Grid container spacing={2} sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    <Grid item xs={6}>
                        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
                            <Cardcomp {...card1} />
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Cardcomp {...card2} />
                    </Grid>
                    <Grid item xs={6}>
                        <Cardcomp {...card3} />
                    </Grid>
                    <Grid item xs={6}>
                        <Cardcomp {...card4} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Service;