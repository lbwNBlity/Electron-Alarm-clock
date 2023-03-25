import { createSlice} from '@reduxjs/toolkit'

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timerValue: 0,
  },
  reducers: {
    setTimerValue: (state, {payload = {}}) => {
      for(let key in payload){
        state[key] = payload[key];
      }
    },
  }
})

export const { setTimerValue } = timerSlice.actions;
export default timerSlice.reducer