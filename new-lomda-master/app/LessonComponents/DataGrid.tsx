import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
// import SearchIcon from '@mui/icons-material/Search';
// import { InputAdornment, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import type {
    GridColDef,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowModesModel
} from '@mui/x-data-grid';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
    GridRowModes
} from '@mui/x-data-grid';
import { } from '@mui/x-data-grid-generator';
import { Link } from '@remix-run/react';
import * as React from 'react';
import { SideBar } from '~/components/SideBar';

interface IDataGridProps {
    editable?: true;
    rows: any[];
    setRows: (...args: any[]) => void;
    columnProps: GridColDef[];
}

export default function FullFeaturedCrudGrid({ rows, setRows, editable, columnProps }: IDataGridProps) {
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    // const [searchInput, setSearchInput] = React.useState<string>('');

    // function handleSearchInputChange(
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ): void {
    //     setSearchInput(event.target.value);
    // }

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns: GridColDef[] = [
        ...columnProps,
        {
            field: 'actions',
            type: 'actions',
            headerName: 'פעולות',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key='Save'
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            key='Cancel'
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return editable ? [
                    <GridActionsCellItem
                        key='Edit'
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        key='Delete'
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ] : [<GridActionsCellItem
                    key='Delete'
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={handleDeleteClick(id)}
                    color="inherit"
                />,];
            },
        },
        {
            field: 'navigation',
            type: 'actions',
            headerName: '',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        key={'navigation'}
                        icon={
                            <Box component={Link} to={id.toString()} sx={{ color: 'inherit', textDecoration: 'none' }}>
                                <ArrowBackIosNewIcon />
                            </Box>
                        }
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                    />
                ]
            },
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'full',
                justifyContent: 'center',
                alignItems: 'center',
                paddingX: 4,
                paddingY: 16,
            }}
        >
            <Box sx={{
                position: 'fixed', top: 0, left: 0, height: '100%'
            }}>
                <SideBar selectedTab={"מפעל השיעורים"} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, hegith: '100%', }}>
                {/* <Paper>
                    <TextField
                        sx={{
                            padding: "0.1em",
                            borderRadius: '3px',
                            "& input": {
                                width: '14ch',
                                transition: 'width 0.2s ease-in-out',
                                '&:focus': {
                                    width: '20ch',
                                },
                            },
                        }}
                        size="small"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        placeholder="חפש"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Paper>
                <Typography variant='h1'>
                    WHY CAN YOU SEE ME AND THE SEARCH BAR????!?!?!?
                </Typography> */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                />
            </Box>
        </Box>
    );
}