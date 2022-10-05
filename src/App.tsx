import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    purchasePrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        "https://RealEstateAnalyzerbackend.brettsmith212.repl.co/purchasePrice",
        {
          purchasePrice: values.purchasePrice,
        }
      )
      .then((res) => {
        console.log("RESPONSE: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="">
      <h2 className="m-4 text-3xl font-bold text-slate-500">
        Real Estate Analyzer
      </h2>
      <form className="flex flex-col space-y-4 w-1/3" onSubmit={handleSubmit}>
        <label className="ml-4 p-1 border border-black rounded-md">
          Purchase Price:
          <input
            className=""
            type="decimal"
            onChange={handleChange}
            value={values.purchasePrice}
            name="purchasePrice"
          />
        </label>
        <button>Submit!</button>
      </form>
    </main>
  );
}
