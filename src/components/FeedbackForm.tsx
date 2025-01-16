import useForm from "../hooks/useForm";

export function FeedbackForm() {
  const { values, handleChange, handleSubmit } = useForm({
    feedback: "",
  });

  const submitForm = () => {
    alert("Form submitted" + JSON.stringify(values));
  };

  return (
    <form action="" onSubmit={handleSubmit(submitForm)}>
      <textarea name="feedback" value={values.feedback} onChange={handleChange} placeholder="Your feedback" />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
