import { useState } from "react";

export function useForm(initialVaules) {
  const [values, setValues] = useState(initialVaules);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
}
