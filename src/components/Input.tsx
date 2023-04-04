import React from "react";

interface errorProps {
  day?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
}

interface inputprops {
  type: string;
  setState: React.Dispatch<React.SetStateAction<number | undefined>>;
  error?: errorProps;
}

function Input({ type, setState, error }: inputprops) {
  let placeholder = "";
  let errorText;
  if (type === "year") {
    placeholder = "YYYY";
    errorText = error?.year;
  } else if (type === "month") {
    placeholder = "MM";
    errorText = error?.month;
  } else if (type === "day") {
    placeholder = "DD";
    errorText = error?.day;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState(parseInt(e.target.value));
  }

  return (
    <div className="flex flex-col space-y-2 font-poppins text-sm font-bold text-custom-smokey-grey">
      <label htmlFor={type} className={`${errorText ? "text-custom-light-red" : "text-custom-smokey-grey"} `}>
        {type.toUpperCase()}
      </label>
      <input
        type="text"
        id={type}
        className={`p-2 text-2xl sm:w-[5.5rem] w-28 text-custom-off-black border rounded-md focus:outline-custom-purple ${
          errorText ? "border-custom-light-red" : "border-custom-smokey-grey"
        }`}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {errorText && <p className="text-custom-light-red font-poppins font-thin italic text-[0.75rem]">{errorText}</p>}
      {!errorText && <p className="text-custom-light-red font-poppins font-thin italic text-[0.75rem]">&nbsp;</p>}
    </div>
  );
}

export default Input;
