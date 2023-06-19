import React from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    "name": "Monday",
    "nameAbbr": "Mon",
    "nameNarrow": "M",
    "index": 1,
    "isWeekend": false
  },
  {
    "name": "Tuesday",
    "nameAbbr": "Tue",
    "nameNarrow": "T",
    "index": 2,
    "isWeekend": false
  },
  // ...
];

const App = () => (
  <div className={getClassName('App')}>
    <header className={getClassName('App__header')}>
      <div className={getClassName('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <div>
        <BpkInput
          id="dateInput"
          type={INPUT_TYPES.text}
          name="date"
          placeholder="Departure date"
        />
        <BpkCalendar
          id="calendar"
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
        />
      </div>
    <main className={getClassName('App__main')}>
      <BpkText tagName="p" className={getClassName('App__text')}>
        To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
      </BpkText>
      <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
    </main>
  </div>
);
// export default class Application {
//   constructor() {

//     this.state = {
//       selectionConfiguration: {
//         type: CALENDAR_SELECTION_TYPE.single,
//         date: null,
//       },
//     };
//   }

//   handleDateSelect = (date) => {
//     this.setState({
//       selectionConfiguration: {
//         type: this.props.selectionConfiguration.type,
//         date: date,
//       },
//     });
//   };

//   render() {
//     return (
//       <div>
//         <BpkInput
//           id="dateInput"
//           type={INPUT_TYPES.text}
//           name="date"
//           value={(this.state.selectionConfiguration.date || '').toString()}
//           placeholder="Departure date"
//         />
//         <BpkCalendar
//           id="calendar"
//           onDateSelect={this.handleDateSelect}
//           formatMonth={formatMonth}
//           formatDateFull={formatDateFull}
//           daysOfWeek={daysOfWeek}
//           weekStartsOn={1}
//           changeMonthLabel="Change month"
//           nextMonthLabel="Next month"
//           previousMonthLabel="Previous month"
//           selectionConfiguration={this.state.selectionConfiguration}
//         />
//       </div>
//     );
//   }
// }

// export default App;