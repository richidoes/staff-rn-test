import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.datos.gob.mx/v2/Records/';
const PAGE_SIZE = 30;

export default function useGetData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const getAPIData = (page) => {
    fetch(`${BASE_URL}?page=${page}&pageSize=${PAGE_SIZE}`)

      .then((result) => result.json())

      .then((resultData) => setData(resultData))

      .catch((err) => {
        console.log(err);
        setData([]);
      });
  };

  useEffect(() => getAPIData(currentPage), [currentPage]);

  return {
    data,
    currentPage,
    setCurrentPage,
  };
}
