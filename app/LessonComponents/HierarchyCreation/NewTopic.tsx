import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface INewTopic {
  onButtonClick: (componentName: string) => void;
}

export default function NewTopic({ onButtonClick }: INewTopic) {
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputEmpty(event.target.value.trim() === '' && event.target.value.length === 0);
  }

  const handleCreationButtonClick = () => {
    // async func that will first add to db, then change state
    onButtonClick('TopicList');
  }

  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: 2,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 1,
        alignItems: 'baseline',
      }}>
        <Typography variant="h6">
          ליצירת נושא חדש:
        </Typography>
        <TextField
          id="outlined-basic"
          label="שם הנושא"
          variant="outlined"
          size="small"
          onChange={handleInputChange}
        />
      </Box>
      <Typography sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}>
        <Box sx={{ marginLeft: '3px' }}>
          אנא וודאו כי נושא זה אינו כבר קיים{' '}
        </Box>
        <Link
          component="button"
          onClick={() => onButtonClick('TopicList')}
        >
          ברשימה
        </Link>
      </Typography>
      <Box sx={{
        paddingTop: 2,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button variant="outlined" onClick={handleCreationButtonClick} disabled={isInputEmpty} fullWidth>
          צור נושא
        </Button>
      </Box>
    </Paper>
  )
}
