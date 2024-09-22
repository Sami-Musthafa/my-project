import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  Stack,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

type Props = {
  open: boolean;
  startDate: string | null;
  endDate: string | null;
  toggleDialog: () => void;
  onSubmit: () => void;
  onDateChange: (date: string | null, type: 'start' | 'end') => void;
};

const DateFilterDialog = (props: Props) => {
  const { open, startDate, endDate, toggleDialog, onSubmit, onDateChange } =
    props;

  const onSubmitDate = () => {
    toggleDialog();
    onSubmit();
  };

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant='h6'>Filter By Date</Typography>
            <Stack direction='row' spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Start Date'
                  value={dayjs(startDate)}
                  onChange={(newValue) => {
                    onDateChange(dayjs(newValue).format('YYYY-MM-DD'), 'start');
                  }}
                />
                <DatePicker
                  label='End Date'
                  value={dayjs(endDate)}
                  onChange={(newValue) =>
                    onDateChange(dayjs(newValue).format('YYYY-MM-DD'), 'end')
                  }
                />
              </LocalizationProvider>
            </Stack>
            <DialogActions>
              <Button variant='contained' color='error' onClick={toggleDialog}>
                Cancel
              </Button>
              <Button variant='contained' color='info' onClick={onSubmitDate}>
                Submit
              </Button>
            </DialogActions>
          </Stack>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default DateFilterDialog;
