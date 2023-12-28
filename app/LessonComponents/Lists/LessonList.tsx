import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { Box, Button, Grow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface LessonListProps {
  onButtonClick: (componentName: string) => void;
}

interface Column {
  id: 'name' | 'lastEditDate' | 'questionAmount';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number | Date) => string;
}

const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'שם שיעור',
    minWidth: 250,
    align: 'center',
  },
  {
    id: 'lastEditDate',
    label: 'נערך לאחרונה',
    minWidth: 250,
    align: 'center',
  },
  {
    id: 'questionAmount',
    label: 'מספר שאלות',
    minWidth: 250,
    align: 'center',
    format: (value: number | Date) => {
      return typeof value === 'number' ? value.toLocaleString('he-IL') : String(value);
    },
  }
];

interface Data {
  name: string;
  questionAmount: number;
  lastEditDate: string;
}

function createData(
  name: string,
  questionAmount: number,
  lastEditDate: string,
): Data {
  const isoDate = new Date(lastEditDate).toISOString();
  // Format the ISO date as dd/mm/yyyy
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return {
    name, questionAmount, lastEditDate: formatDate(new Date(isoDate))
  };
}
const rows = [
  createData('מתקפת פרל הרבור', 2, '2021-12-22'),
  createData('עלייתו של מוסליני', 23, '2022-11-02'),
  createData('פסיכולוגיה של היטלר', 35, '2021-09-13'),
  createData('הפרכת שמועות', 0, '2021-02-22'),
  createData('האיסלאם במלחמות העולם', 145, '1992-04-03'),
];

export default function LessonList({ onButtonClick }: LessonListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLessonRowClick = () => {
    onButtonClick('QuestionList');
  }

  const handleButtonClick = () => {
    onButtonClick('NewLesson');
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection={'column'} alignItems={'center'} gap={1}>
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
                    style={{ minWidth: column.minWidth, backgroundColor: '#E6B791' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <Grow key={row.name} timeout={(index + 1) * 100} in={true} style={{ transformOrigin: '0 0 0' }}>
                      <TableRow hover role="checkbox" tabIndex={-1} onClick={handleLessonRowClick}>
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
                  );
                })}
            </TableBody>
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
      <Paper>
        <Button variant="outlined" color="warning" onClick={handleButtonClick}>
          <CreateNewFolderOutlinedIcon /> ליצירת שיעור חדש
        </Button>
      </Paper>
    </Box>
  );
}
