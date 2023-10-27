import { useEffect, useState } from "react";
import { Preregister, getPreregisters } from "../../services/api";
import List from "./list/list";
import Form from "./form/form";
import React from "react";

const PreregisterSection = () => {
  const [preregistersCollection, setPreregistersCollection] = useState<
    Partial<Preregister>[]
  >([]);

  const addPreregister = (preregister: Partial<Preregister>) => {
    setPreregistersCollection((current) => [...current, preregister]);
  };

  useEffect(() => {
    getPreregisters().then((preregisters) => {
      if (preregisters) setPreregistersCollection(preregisters);
    });
  }, []);

  return (
    <>
      <List preregistersCollection={preregistersCollection} />
      <Form addPreregister={addPreregister} />
    </>
  );
};

export default PreregisterSection;
