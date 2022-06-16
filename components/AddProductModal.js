import React, { useState, useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Spinner from "./spinner";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const FundRaising = (props) => {
  const [fileUrl, setFileUrl] = useState(null);
  const { signer } = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [formInput, updateFormInput] = useState({
    name: "",
    price: "",
  });

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function addProduct() {
    let transaction = await signer.addProduct(
      formInput.name,
      formInput.price,
      fileUrl
    );

    setloading(true);
    await transaction.wait();
    setloading(false);
    alert("Product uploaded succesfully");
    window.location.reload();
  }

  return (
    <div className="p-5 font-Montserrat overflow-auto">
      <p className="text-center text-gray-500 text-lg">Add a Product</p>
      <div className="py-3 space-y-3">
        <input
          type="text"
          required={true}
          onChange={(e) =>
            updateFormInput({ ...formInput, name: e.target.value })
          }
          className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          placeholder="Enter Product name "
        />
        <input
          type="number"
          required={true}
          onChange={(e) =>
            updateFormInput({ ...formInput, price: e.target.value })
          }
          className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          placeholder="Price in USD"
        />

        <input
          required={true}
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {fileUrl && <img className="rounded mt-4" width="150" src={fileUrl} />}
        <div
          onClick={addProduct}
          className="bg-gradient-to-r flex flex-row justify-center items-center from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white"
        >
          {loading ? <Spinner /> : "Continue"}
        </div>
      </div>
    </div>
  );
};

export default FundRaising;
