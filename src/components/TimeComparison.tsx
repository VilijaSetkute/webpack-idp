import { timeTable } from '../constants/timeTable.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { format, isWeekend } from 'date-fns';
import { useTimeZone } from '../utils/api/useTimeZone';

export const TimeComparison = () => {
  const { timeZoneData } = useTimeZone();

  console.log(!!timeZoneData && timeZoneData.timezone_offset);

  const timeZoneOffset = !!timeZoneData ? timeZoneData.timezone_offset : 0;

  const getTimeAvailabilityStyle = (h: number, substract?: number) => {
    const currentDate = new Date();
    substract ? currentDate.setHours(h + substract) : currentDate.setHours(h);
    switch (currentDate.getHours()) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 22:
      case 23:
        return { color: '#c62828', backgroundColor: '#ffebee' }; // red
      case 7:
      case 19:
      case 20:
      case 21:
        return { color: '#f57c00', backgroundColor: '#fff3e0' }; // yellow
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return { color: '#004700', backgroundColor: '#e0ffe0' }; // green
    }
  };

  const calculateHours = (h: number, substract?: number) => {
    const currentDate = new Date();
    substract ? currentDate.setHours(h - substract) : currentDate.setHours(h);
    return format(new Date(currentDate), 'HH:00');
  };

  const getCurrentHour = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    return hours;
  };

  const testWeekend = () => {
    const isWeekendDay = isWeekend(Date.now());
    return isWeekendDay
      ? `Today is ${format(
          new Date(Date.now()),
          'EEEE'
        )}. Your colleague most probably is having fun. Have fun yourself as well :)`
      : `${format(new Date(Date.now()), 'EEEE')}`;
  };

  return (
    <div>
      <div className="time-search-container">
        <input type="text" placeholder="Colleague's residence city" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-container-icon"
        />
      </div>
      <div className="current-time">
        <div>Your time: </div>
        <div>{format(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss')}</div>
        <div style={{ marginTop: '24px' }}>{testWeekend()}</div>
      </div>
      <table>
        <thead>
          <tr>
            <td className="p5">Your time</td>
            <td className="p5">Colleagues time</td>
          </tr>
        </thead>
        <tbody>
          {timeTable.map((time: any) => (
            <tr
              key={time.id}
              style={{
                border:
                  time.id === getCurrentHour() ? '1.5px solid #004700' : 'none',
              }}
            >
              <td
                style={{
                  ...getTimeAvailabilityStyle(time.id),
                  width: '50%',
                }}
              >
                {calculateHours(time.hour)}
              </td>
              <td
                style={{
                  ...getTimeAvailabilityStyle(time.id - timeZoneOffset),
                  width: '50%',
                }}
              >
                {calculateHours(time.hour, timeZoneOffset)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
