import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

interface errorProps {
  day?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
}

interface validationProps {
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
  setError: React.Dispatch<React.SetStateAction<errorProps | undefined>>;
  error: errorProps | undefined;
}

function formatNumber(num: number | undefined): string | undefined {
  return num?.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
}

dayjs.extend(customParseFormat);

export function dateValidation({ day, month, year, setError, error }: validationProps) {
  let dayError;
  let monthError;
  let yearError;

  if (!day) {
    dayError = "This field is required";
  } else if (day > 31 || day < 1) {
    dayError = "Must be a valid day";
  }
  if (!month) {
    monthError = "This field is required";
  } else if (month > 12 || month < 1) {
    monthError = "Must be a valid month";
  }
  if (!year) {
    yearError = "This field is required";
  } else if (year > 2023) {
    yearError = "Must be in the past";
  }

  if (dayError || monthError || yearError) {
    setError({ day: dayError, month: monthError, year: yearError });
    return false;
  } else if (dayjs(`${year}-${formatNumber(month)}-${formatNumber(day)}`, "YYYY-MM-DD", true).isValid() === false) {
    dayError = "Must be a valid date";
    monthError = " ";
    yearError = " ";
    setError({ day: dayError, month: monthError, year: yearError });
    return false;
  } else {
    return true;
  }
}
