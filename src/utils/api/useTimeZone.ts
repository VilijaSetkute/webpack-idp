import { useEffect, useState } from 'react';
import http from '../helpers/http.js';
import Timezone from '../models/TimezoneModel.js';

export const useTimeZone = () => {
  const [timeZoneData, setTimeZoneData] = useState<Timezone>();

  const getData = async () => {
    let data = await http.get('Vilnius');
    if (!!data) {
      setTimeZoneData(data);
    }
    return 'Nothing found';
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    timeZoneData,
  };
};
