import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @typedef {Object} Data
 * @property {[Object]} data - Informazioni Fetchate
 * @property {Boolean} y - Loading State
 * @param {String} url
 * @returns {Data}
 */
const useFetch = (url) => {
  /**
   * @type {[[Object], Function]} Dati Fetchati dall'Api
   */
  const [data, setData] = useState([]);

  /**
   * @type {[Boolean, Function]} State del Loading
   */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetching Dei dati dall'API
     * @async
     * @param {String}
     * @returns {undefined}
     */
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
