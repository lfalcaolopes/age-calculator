import Input from "./components/Input";
import arrow from "./assets/images/icon-arrow.svg";
import Output from "./components/Output";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { dateValidation } from "./helper/dateValidation";

interface diffProps {
  days: number;
  months: number;
  years: number;
}

interface errorProps {
  day?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
}

function App() {
  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  const [error, setError] = useState<errorProps | undefined>();

  const [diff, setDiff] = useState<diffProps>();

  const today = dayjs();
  dayjs.extend(customParseFormat);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (dateValidation({ day, month, year, setError, error }) === false) return;

    setError(undefined);

    const birth = dayjs(`${year}-${month}-${day}`);
    let reuseDate = dayjs();

    const diffYears = today.diff(birth, "year");

    reuseDate = reuseDate.subtract(diffYears, "year");

    const diffMonths = reuseDate.diff(birth, "month");

    reuseDate = reuseDate.subtract(diffMonths, "month");

    const diffDays = reuseDate.diff(birth, "day");

    setDiff({ days: diffDays, months: diffMonths, years: diffYears });
  }

  return (
    <div className="bg-custom-off-white h-screen flex items-center justify-center text-custom-off-black">
      <div className="sm:w-full sm:m-4 w-[40rem] aspect-[4/3] p-8 bg-white drop-shadow-md rounded-[1.5rem] rounded-br-[8rem]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex space-x-6 sm:space-x-3">
            <Input type="day" setState={setDay} error={error} />
            <Input type="month" setState={setMonth} error={error} />
            <Input type="year" setState={setYear} error={error} />
          </div>
          <div className="flex items-center sm:mt-12 sm:mb-16 relative">
            <div className="h-[1px] bg-custom-light-grey w-[90%] border border-custom-light-grey" />
            <button className="w-20 h-20 rounded-full bg-custom-purple sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 flex items-center justify-center active:bg-custom-off-black">
              <img src={arrow} alt="" />
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <Output type="year" amount={diff?.years} />
          <Output type="month" amount={diff?.months} />
          <Output type="day" amount={diff?.days} />
        </div>
      </div>
    </div>
  );
}

export default App;
