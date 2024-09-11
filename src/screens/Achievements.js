import React from "react";
import Cardcomp from "../components/Cardcomp";
import { Container, Box, Typography, Grid } from "@mui/material";

const card1 = {
    imgurl:'https://picsum.photos/1024/512?random=9',
    imgalt:'実績１',
    title:'実績１',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card2 = {
    imgurl:'https://picsum.photos/1024/512?random=10',
    imgalt:'実績２',
    title:'実績２',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card3 = {
    imgurl:'https://picsum.photos/1024/512?random=11',
    imgalt:'実績３',
    title:'実績３',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card4 = {
    imgurl:'https://picsum.photos/1024/512?random=12',
    imgalt:'実績４',
    title:'実績３',
    body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}

const Achievements = () => {
    return (
        <>
            <Container>
                <Box sx={{height: 100, width: "auto" }}></Box>
                <Typography variant="h6">実績</Typography>
                <Box sx={{height: 20, width: "auto" }}></Box>
                <Grid container spacing={2} sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    <Grid item xs={6}>
                        <Cardcomp {...card1} />
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

export default Achievements;