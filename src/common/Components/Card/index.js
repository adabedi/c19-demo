import React from "react";
import {
    CardContent,
    CardHeader,
    CardActions,
    Box,
    Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    card: {
        width: "100%",
        minHeight: "100%",
        marginBottom: "0.5em",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: "#fff"
    }
}));

const ClickAbleContent = ({ children, onClick, id = 1 }) => (
    <div
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex="0"
    >
        {children}
    </div>
);


export default ({
    title = "title",
    subheader = "subheader",
    content,
    action,
    handleClick
}) => {
    const classes = useStyles();
    return (
        <Box
            boxShadow={2}
            className={classes.card}
        >
            <Grid container direction='row' >
                <Grid item xs={10}>
                    <ClickAbleContent
                        onClick={handleClick}>
                        <CardHeader title={title} subheader={subheader} />
                    </ClickAbleContent>
                </Grid>
                <Grid item xs={2}>
                    <CardActions>{action}</CardActions>
                </Grid>
            </Grid>

            <ClickAbleContent
                onClick={handleClick}>
                <CardContent >
                    {content}
                </CardContent>
            </ClickAbleContent>
        </Box >
    );
};
