import React from "react";
import './styles/Top.css';
import Carousel from "../components/Carousel";
import Cardcomp from "../components/Cardcomp";
import { Container, Typography, Grid } from "@mui/material";

const card1 = {
  imgurl:'https://picsum.photos/1024/512?random=5',
  imgalt:'更新情報１',
  title:'更新情報１',
  body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card2 = {
  imgurl:'https://picsum.photos/1024/512?random=6',
  imgalt:'更新情報２',
  title:'更新情報２',
  body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}
const card3 = {
  imgurl:'https://picsum.photos/1024/512?random=7',
  imgalt:'更新情報３',
  title:'更新情報３',
  body:'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
}


const Top = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Typography variant="h6" sx={{textAlign: 'center'}}>What's New</Typography>
        <Grid container spacing={2} sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Grid item xs={3}>
              <Cardcomp {...card1} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card2} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
            <Grid item xs={3}>
              <Cardcomp {...card3} />
            </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Top;