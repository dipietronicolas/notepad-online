import * as React from 'react';
import { TextField, Grid, Box, Tabs, Tab } from '@mui/material';
import TabPanel from './components/TabPanel';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Notepad = ({
    note0,
    note1,
    note2,
    tabNumber,
    getNotesPending,
    saveNotePending,

    noteOnChange,
    tabOnChange,
    getNotes,
    saveNote,
}) => {

    React.useEffect(() => {
        getNotes();
    }, [tabNumber]);

    React.useEffect(() => {
        const listener = (event) => {
            console.log(event.key, event.ctrlKey);
            if(event.key.toLowerCase() === 'g' && event.ctrlKey){
                saveNote();
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener(listener);
        }
    }, [])

    const handleTabChange = (event, newValue) => {
        tabOnChange(newValue);
    };

    const handleNoteChange = (e) => {
        noteOnChange(e.target.value);
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                width: '100%'
            }}
        >
            <Grid container spacing={2} width={'95%'}>
                <Grid item xs={10}>
                    <TabPanel value={tabNumber} index={0}>
                        <TextField
                            id="filled-multiline-static"
                            label="Editor 1"
                            multiline
                            minRows={25}
                            variant="filled"
                            value={note0}
                            onChange={handleNoteChange}
                            fullWidth
                            disabled={getNotesPending || saveNotePending}
                        />
                    </TabPanel>
                    <TabPanel value={tabNumber} index={1}>
                        <TextField
                            id="filled-multiline-static"
                            label="Editor 2"
                            multiline
                            minRows={25}
                            variant="filled"
                            value={note1}
                            onChange={handleNoteChange}
                            fullWidth
                            disabled={getNotesPending || saveNotePending}
                        />
                    </TabPanel>
                    <TabPanel value={tabNumber} index={2}>
                        <TextField
                            id="filled-multiline-static"
                            label="Editor 3"
                            multiline
                            minRows={25}
                            variant="filled"
                            value={note2}
                            onChange={handleNoteChange}
                            fullWidth
                            disabled={getNotesPending || saveNotePending}
                        />
                    </TabPanel>
                </Grid>
                <Grid item xs={2}>
                    <Tabs
                        orientation='vertical'
                        variant="scrollable"
                        value={tabNumber}
                        onChange={handleTabChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderLeft: 1, borderColor: 'divider', height: '100%' }}
                    >
                        <Tab label="Editor 1" {...a11yProps(0)}
                            sx={{
                                height: '10rem',
                            }}
                        />
                        <Tab label="Editor 2" {...a11yProps(1)}
                            sx={{
                                height: '10rem',
                            }}
                        />
                        <Tab label="Editor 3" {...a11yProps(2)}
                            sx={{
                                height: '10rem',
                            }}
                        />
                    </Tabs>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Notepad;