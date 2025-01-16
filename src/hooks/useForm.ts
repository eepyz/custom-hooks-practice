import { UseLocalStorage } from "./useLocalStorage";

const useForm = (initialValues: Record<string, string>) => {
  const [values, setValues] = UseLocalStorage("formData", initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (callback: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};
export default useForm;
