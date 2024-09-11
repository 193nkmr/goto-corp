import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material";

const Cardcomp = (props) => {
    return (
        <Card sx={{ maxWidth: 700 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={props.imgurl}
                alt={props.imgalt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default Cardcomp;