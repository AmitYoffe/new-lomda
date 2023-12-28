import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grow, InputAdornment, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { getTopics } from '~/utils/topic.server';

interface ITopicListProps {
  onButtonClick: (componentName: string) => void;
}

interface Column {
  id: 'name' | 'lastEditDate'
  // | 'lessonAmount'
  ;
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number | Date) => string;
}

const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'שם נושא',
    minWidth: 250,
    align: 'center',
  },
  {
    id: 'lastEditDate',
    label: 'נערך לאחרונה',
    minWidth: 250,
    align: 'center',
  },
  // {
  //   id: 'lessonAmount',
  //   label: 'מספר שיעורים',
  //   minWidth: 250,
  //   align: 'center',
  //   format: (value: number | Date) => {
  //     return typeof value === 'number' ? value.toLocaleString('he-IL') : String(value);
  //   },
  // },
];

interface Data {
  name: string;
  // lessonAmount: number;
  lastEditDate: string;
}

export default function TopicList({ onButtonClick }: ITopicListProps) {
  const [rows, setRows] = React.useState<Data[]>([]);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // React.useEffect(() => {
  //   const fetchTopics = async () => {
  //     try {
  //       const topics = await getTopics();
  //       setRows(topics);
  //     } catch (error) {
  //       console.error('Error fetching topics:', error);
  //     }
  //   };

  //   fetchTopics();
  // }, []);

  function handleSearchInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setSearchInput(event.target.value);
  }

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleTopicRowClick = () => {
    onButtonClick('LessonList');
  };

  const handleButtonClick = () => {
    onButtonClick('NewTopic');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 1, }}>
        <TextField
          sx={{
            padding: "0.1em",
            borderRadius: '3px',
            backgroundColor: '#fff8ed',
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
        <Paper>
          <Button variant="outlined" color="warning" onClick={handleButtonClick} >
            <CreateNewFolderOutlinedIcon /> ליצירת נושא חדש
          </Button>
        </Paper>
      </Box>
      <Paper elevation={8} sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{
          maxHeight: 440,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#b5ac9a",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#b89e6a",
          },
          overflowX: 'hidden'
        }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor: 'rgba(248, 206, 172)' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>



            {/* <TableBody>
              {filteredRows.length === 0 ? (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                  <Typography variant="h6">
                    לא נמצאו נושאים מתאימים לערך החיפוש
                  </Typography>
                </Box>
              ) : (
                filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <Grow key={row.name} timeout={(index + 1) * 100} in={true} style={{ transformOrigin: '0 0 0' }}>
                      <TableRow hover role="checkbox" tabIndex={-1} onClick={handleTopicRowClick}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : String(value)}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    </Grow>
                  ))
              )
              }
            </TableBody> */}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box >
  );
}
