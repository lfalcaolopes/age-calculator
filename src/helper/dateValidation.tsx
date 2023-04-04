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

dayjs.extend(customParseFormat);

export function dateValidation({ day, month, year, setError, error }: validationProps) {
  let dayError;
  let monthError;
  let yearError;

  if (day === undefined || month === undefined || year === undefined) {
    dayError = "This field is required";
    monthError = "This field is required";
    yearError = "This field is required";
  }

  if (dayjs(`${year}-${month}-${day}`, "YYYY-MM-DD", true).isValid() === false) {
    dayError = "Must be a valid date";
    monthError = "";
    yearError = "";
  }

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
  } else if (year < 1) {
    yearError = "Must be a valid year";
  }

  if (dayError || monthError || yearError) {
    setError({ day: dayError, month: monthError, year: yearError });
    return false;
  } else {
    return true;
  }
}
