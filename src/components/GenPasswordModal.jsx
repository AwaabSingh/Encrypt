import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaClipboard } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { getRandomChar, getSpecialChar } from "../utilies/genChar";
import { toast } from "react-hot-toast";

const GenPasswordModal = ({ setShowModal }) => {
  const [values, setValues] = useForm({
    length: 8,
    capital: true,
    small: true,
    number: true,
    symbol: true,
  });
  const [result, setResult] = useState("");

  const fieldsArray = [
    {
      field: values.capital,
      getChar: getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: getSpecialChar(),
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let generatedPassword = "";

    const checkedFields = fieldsArray.filter(({ field }) => field);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      const letter = checkedFields[index]?.getChar;

      if (letter) {
        generatedPassword += letter;
      }
    }

    if (generatedPassword) {
      setResult(generatedPassword);
    } else {
      toast.error("Please select at least one option");
    }
  };

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("No password to copy");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-3 rounded  py-4  ">
        <AiFillCloseCircle
          onClick={() => setShowModal(false)}
          className="text-red-500 text-xl font-bold cursor-pointer"
        />

        <form className="mt-2 px-10" onSubmit={handleOnSubmit}>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="text"
              readOnly
              className="border-2 rounded-md py-1 outline-primaryBlue"
              value={result}
              placeholder="Min 8 Char"
            />
            <div className="text-lightColor text-xl bg-primaryBlue px-1 py-1 rounded cursor-pointer">
              <FaClipboard onClick={handleClipboard} />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={8}
                max={20}
                name="length"
                placeholder="8"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="capital">Uppercase</label>
              <input
                type="checkbox"
                id="capital"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="small">Lowercase</label>
              <input
                type="checkbox"
                id="small"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                id="number"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className=" bg-primaryBlue px-2 py-1 text-lightColor rounded-md"
            >
              Generate Password
            </button>
          </div>
        </form>

        {/* {copied && <p>Copied to Clipboard</p>} */}
      </div>
    </div>
  );
};

export default GenPasswordModal;
