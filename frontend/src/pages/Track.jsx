import React, { useEffect, useState } from "react";
import Background from "../assets/background_register.jpg";
import { useParams } from "react-router-dom";

const Track = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const steps = [
    {
      stage: "claim_registered",
      passed: true,
      name: "Claim registered successfully",
    },
    {
      stage: "company_viewed_claim_data",
      passed: false,
      name: "Insurance comapny viewed your claim data.",
    },
    {
      stage: "verification_and_checks",
      passed: false,
      name: "Verification and checks",
    },
    {
      stage: "dispersion_amount_calculation",
      passed: false,
      name: "Calculation of dispersion amount",
    },
    {
      stage: "payment_initiated",
      passed: false,
      name: "Payment initiated by the insurance company",
    },
    {
      stage: "amount_credited",
      passed: false,
      name: "Amount credited successfully",
    },
  ];

  useEffect(() => {
    if (params) {
      setName(params.claim_id);
    }

    return () => {};
  }, []);

  return (
    <div>
      <div className="">
        <img className=" h-96 w-full " src={Background} alt="background" />
      </div>
      <div className="md:w-4/5 shadow-2xl rounded-2xl pb-2 bg-white mx-auto -translate-y-40 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold  m-10 pt-10">Tracking {name}</h1>
        <div className="container horizontal mt-10 w-full flex flex-col justify-center items-center">
          {steps.map((val, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <div
                  className={`w-28 h-28 rounded-full text-white text-xl ${
                    val["passed"] ? "bg-green-500" : "bg-slate-300"
                  } flex justify-center items-center`}
                >
                  {idx + 1}
                </div>
                <div>{val["name"]}</div>
                <div className="w-2 bg-black h-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Track;
