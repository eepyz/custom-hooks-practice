import useForm from "../hooks/useForm";

export function RegistrationForm() {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
  });

  const submitForm = () => {
    alert("Form submitted" + JSON.stringify(values));
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" autoComplete="off" />
      <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Email" autoComplete="off" />
      <button type="submit">Regisger</button>
    </form>
  );
}
