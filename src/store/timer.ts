import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface timerState{
  timerValue: number,
};

const initialState : timerState={
  timerValue: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setState: (state , action: PayloadAction<timerState>) => {
      let key: keyof timerState;
      let payload : timerState=action.payload;
      for(key in payload){
          state[key] = payload[key];
      }
    },
  }
})

export const { setState } = timerSlice.actions;
export default timerSlice.reducer