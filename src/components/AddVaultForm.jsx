import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVault } from "../features/vault/vaultSlice";
import { toast } from "react-hot-toast";
import GenPasswordModal from "./GenPasswordModal";

const AddVaultForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { title, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const vaultData = { title, password };

    dispatch(addVault(vaultData));
    toast.success("Password added successfully");
    setFormData({
      title: "",
      password: "",
    });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className=" flex items-center  justify-center mb-2 flex-col space-y-3  md:space-y-0 md:flex-row "
      >
        <label className="flex md:space-x-3 pr-3 items-center flex-col md:flex-row">
          <span className="self-start p-2 md:p-0 md:self-center">Title:</span>
          <input
            type="text"
            placeholder="Add a Title"
            className="border px-3 w-[300px] rounded-xl border-secondaryBlue py-2 outline-primaryBlue"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </label>
        <label className="flex md:space-x-3 pr-3 items-center flex-col md:flex-row">
          <span className="self-start p-2 md:p-0 md:self-center">
            Password:
          </span>
          <input
            type="password"
            placeholder="Add a Password"
            className="border w-[300px] px-3 py-2 rounded-xl border-secondaryBlue  outline-primaryBlue"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </label>

        <input
          type="submit"
          value="Add"
          className=" px-8 py-2 rounded-full bg-darkBlue text-lightColor cursor-pointer w-32"
        />
      </form>
      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-darkBlue cursor-pointer px-3 py-2 rounded-full text-lightColor mx-auto"
        >
          Genrate Password
        </button>
      </div>

      {showModal && <GenPasswordModal setShowModal={setShowModal} />}
    </>
  );
};

export default AddVaultForm;
