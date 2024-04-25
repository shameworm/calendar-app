type CalendarDaysProps = {
  styles: string;
};

const CalendarDays: React.FC<CalendarDaysProps> = ({ styles }) => {
  return (
    <tr>
      <th className={styles}>
        <span>Sunday</span>
      </th>
      <th className={styles}>
        <span>Monday</span>
      </th>
      <th className={styles}>
        <span>Tuesday</span>
      </th>
      <th className={styles}>
        <span>Wednesday</span>
      </th>
      <th className={styles}>
        <span>Thursday</span>
      </th>
      <th className={styles}>
        <span>Friday</span>
      </th>
      <th className={styles}>
        <span>Saturday</span>
      </th>
    </tr>
  );
};

export default CalendarDays;
