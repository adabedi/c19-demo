import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from '../../Components/Card';

export default ({ onSubmit }) => {
    const { control, errors, handleSubmit, watch } = useForm({});
    const [valid, setValid] = useState(false);
    const watchedValues = watch();

    useEffect(() => {
        const keys = Object.keys(watchedValues);
        if (keys.length !== 0 && keys.every((k) => !!watchedValues[k])) {
            setValid(true);
        }
    }, [watchedValues]);
    const handleClose = () => console.log('close profile summary');

    return (
        <>
            <Grid container direction='column'>
                <Grid item xs={12}>
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                        alignContent='center'
                        spacing={2}

                    >
                        <Grid item>
                            {handleClose && (
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>)}
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="h5">Profile Summary</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box m={1}>
                        <Card />
                    </Box>
                </Grid>

            </Grid>
        </>
    );
};