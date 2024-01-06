import { AccountCircle } from '@mui/icons-material';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import type { ChangeEvent, FC, SetStateAction } from 'react';

interface HeaderProps {
    selectedOption: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setSearch: React.Dispatch<SetStateAction<string>>;
    search: string;
    // items: any[];
}

const MainHeader: FC<HeaderProps> = ({ selectedOption, handleInputChange, setSearch, search }) => {

    return (
        <Paper sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', position: 'absolute', top: 0,
        }}>
            <Box sx={{ paddingRight: "10px" }}>
                <Typography variant="h6" sx={{ color: '#2b92e3', }}>
                    {selectedOption === 'apps' ?
                        "מערכות"
                        :
                        "דשבורדים"
                    }
                </Typography>
            </Box>
            <TextField
                sx={{ width: "25%", }}
                fullWidth
                value={search}
                onChange={handleInputChange}
                placeholder="חיפוש"
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
        </Paper >
    )
}

export default MainHeader;