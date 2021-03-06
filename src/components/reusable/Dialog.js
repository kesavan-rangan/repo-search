import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, width, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, width: width || 400 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

/* Reusable Dialog Component - Header Text, Main Content & Submit Label */
const CustomizedDialog = (props) => {
    const open = props.open || false;
    const handleClose = props.handleClose || (() => {})

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {props.headerText || ''}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                {props.mainContent || <></>}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    {props.submitLabel || 'Ok'}
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

CustomizedDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    headerText: PropTypes.string,
    mainContent: PropTypes.node,
    submitLabel: PropTypes.string,
};

export default CustomizedDialog;
