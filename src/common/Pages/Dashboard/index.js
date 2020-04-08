import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Box,
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import uniqid from 'uniqid';
import { NavContext } from '../../../core/context/NavContext';
// import useApiRequest from '../../../core/hooks/useApiRequest';
// import { FAMILY_LIST } from '../../../config';
import { FAMILY_LIST } from '../../../fakeData';
import Card from '../../Components/Card';
import { Transition } from '../../Components/Dialog';
import Button from '../../Components/Button';

export default () => {
    const history = useHistory();
    const { setHistory } = useContext(NavContext);
    const [open, setOpen] = useState(false);
    const [subtitileText, setSubtitileText] = useState('');
    const [person, setPerson] = useState();
    /** TODO 
     * req handling with server side uncoment when the backend will be 
     * 
     */

    // const [{ response, loading, error }, makeRequest] = useApiRequest(
    //     FAMILY_LIST,
    //     {
    //         verb: 'get'
    //     }
    // );

    useEffect(() => {
        // makeRequest()
        setHistory(history);
    });

    // if (loading) {
    //     return <p>Loading...</p>
    // }
    // if (error) {
    //     return <p>{error}</p>
    // }

    const handleClose = () => setOpen(false);
    const handleRedirect = (e, path) => {
        history.push(`/${path}/${person}`);
    };
    const handleRedirectTask = (e, id) => {
        history.push(`/assesment/${id}`);
    };
    const { name, surname, middele, id, nhsNo } = FAMILY_LIST[0];

    return (

        <>
            <Box m={1}>
                <Card
                    handleClick={e => handleRedirectTask(e, id)}
                    title={
                        <Grid>
                            <Typography
                                style={{ color: '#4D4D4D' }} variant="h6"
                                component="h2"
                            >
                                <Box fontWeight="fontWeightBold">
                                    Coronavirus Assesment
                                    </Box>
                            </Typography>
                            <Typography
                                style={{ color: '#4D4D4D' }} variant="h6"
                                component="h2"
                            >
                                <Box fontWeight="fontWeightBold">
                                    {surname}, {name} {middele}
                                </Box>
                            </Typography>
                        </Grid>}
                    subheader={nhsNo}
                />
            </Box>
        </>
    );
};
