import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { FaClipboard } from "react-icons/fa";

const Modal = ({ setShowModal, showPassword }) => {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const togglePassword = () => {
    setShow(!show);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded  py-4  ">
        <AiFillCloseCircle
          onClick={() => setShowModal(false)}
          className="text-red-500 text-xl font-bold cursor-pointer"
        />

        <div className="text-center font-semibold text-xl text-secondaryBlue flex flex-col space-y-5">
          <h5>Your Password is: </h5>
          <div className="flex justify-between space-x-1 md:space-x-5 items-center px-2">
            <div className="relative">
              <input
                type={show === false ? "password" : "text"}
                placeholder="text"
                className="border py-1 px-4 rounded-md mb-2 outline-primaryBlue text-center bg-gray-300"
                value={showPassword}
                readOnly
              />
              <div className="absolute top-2 right-[10px] text-xl pt-1 px-2 text-secondaryBlue md:top-2 cursor-pointer">
                {show === false ? (
                  <AiOutlineEye onClick={togglePassword} />
                ) : (
                  <AiOutlineEyeInvisible onClick={togglePassword} />
                )}
              </div>
            </div>
            <CopyToClipboard
              text={showPassword}
              onCopy={() => {
                setCopied(true);
                toast.success("Copied to clipboard");
              }}
            >
              <div className="bg-green-500 px-3 text-center rounded-full py-3 mb-2 cursor-pointer">
                <FaClipboard className="self-center text-lightColor " />
              </div>
            </CopyToClipboard>
          </div>

          {/* {copied && <p>Copied to Clipboard</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
