import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { Box, Button, Grow, InputAdornment, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Lesson, Question, Topic } from '@prisma/client';
import * as React from 'react';

interface ILessonListProps {
  onButtonClick: (componentName: string, selectedTopic?: Topic) => void;
  dataRow: Lesson[];
  dataRowChildren: Question[];
  selectedTopic?: Topic | null;
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

export default function LessonList({ onButtonClick, dataRow, dataRowChildren, selectedTopic }: ILessonListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchInput, setSearchInput] = React.useState<string>('');

  // console.log('selectedTopic in LessonList.tsx:', selectedTopic);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleSearchInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setSearchInput(event.target.value);
  }

  const handleLessonRowClick = () => {
    onButtonClick('QuestionList');
    //should take you to the relevant question list
  }

  const handleButtonClick = () => {
    onButtonClick('NewLesson');
  };

  const filteredRows = dataRow
    .filter((lesson) => selectedTopic && lesson.topicId === selectedTopic.id)
    .map((lesson) => {
      const questionsInLesson = dataRowChildren.filter(
        (question) => question.lessonId === lesson.id
      );
      return {
        ...lesson,
        questionAmount: questionsInLesson.length,
      };
    })
    .filter((row) => row.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%', }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 1, }}>
        <Paper>
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
        <Paper>
          <Button variant="outlined" color="warning" onClick={handleButtonClick} >
            <CreateNewFolderOutlinedIcon /> ליצירת שיעור חדש
          </Button>
        </Paper>
      </Box>
      <Paper elevation={8} sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer
          sx={{
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
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                      <Typography variant="h6">
                        לא נמצאו שיעורים מתאימים לערך החיפוש
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <Grow key={row.name} timeout={(index + 1) * 100} in={true} style={{ transformOrigin: '0 0 0' }}>
                      <TableRow hover role="checkbox" tabIndex={-1} onClick={handleLessonRowClick}>
                        {columns.map((column) => {
                          const value = row[column.id as keyof typeof row];
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
                  )))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dataRow.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box >
  );
}