"use client";

import {
    Dialog,
    DialogContent,
    List,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { AutocompleteObec } from "../lib/actions";
import { IObecOrpPsc } from "../models/ObecOrpPscModel";

export default function NaseptavacObce(props: {
    obec: string;
    obecniuradrp: string;
    callback: Function;
}) {
    useEffect(() => {
        setObec(props.obec);
        setObecniuradrp(props.obecniuradrp);
    }, [props.obec, props.obecniuradrp]);

    const [obec, setObec] = useState(props.obec);
    const [obecniuradrp, setObecniuradrp] = useState(props.obecniuradrp);
    const [open, setOpen] = useState(false);
    const [obectmp, setObectmp] = useState(obec);
    const [obce, setObce] = useState([] as IObecOrpPsc[]);

    const inputRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current) {
                //inputRef.current.focus();
            }
        }, 100);
    }, [open]);
    return (
        <>
            <Stack spacing={2} onClick={() => setOpen(true)}>
                <TextField
                    size="small"
                    key="obec"
                    label="Obec"
                    value={obec}
                    onChange={() => setOpen(true)}
                    onBeforeInput={() => setOpen(true)}
                ></TextField>
                <TextField
                    size="small"
                    disabled
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                    key="obecrp"
                    label="Obec s rozšířenou působností"
                    value={obecniuradrp}
                />
            </Stack>
            <Dialog
                disableRestoreFocus
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogContent sx={{ height: 500 }}>
                    <Typography>Obec</Typography>{" "}
                    <TextField
                        autoFocus
                        inputRef={inputRef}
                        value={obectmp}
                        onChange={async (e) => {
                            setObectmp(e.target.value);
                            const obce = (await AutocompleteObec(
                                e.target.value,
                            )) as IObecOrpPsc[];
                            setObce(obce);
                        }}
                        onClick={() => setOpen(true)}
                    />
                    <List>
                        {obce.map((e: IObecOrpPsc) => {
                            return (
                                <ListItemText
                                    key={e.psc}
                                    sx={{
                                        p: 1,
                                        boxShadow: 1,
                                        ":hover": {
                                            boxShadow: 20,
                                        },
                                    }}
                                    onClick={() => {
                                        props.callback(
                                            e.obecnazev,
                                            e.orpnazev,
                                            e.psc,
                                        );
                                        setObec(e.obecnazev);
                                        setObecniuradrp(e.orpnazev);
                                        setOpen(false);
                                    }}
                                    primary={`${e.obecnazev}, ${e.psc}`}
                                    secondary={e.orpnazev}
                                />
                            );
                        })}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
}
