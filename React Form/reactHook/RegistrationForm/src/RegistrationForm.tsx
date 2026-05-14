import { useForm } from "react-hook-form";

interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  age: number;
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      fullName: "Guest User",
      age: 18,
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div style={{ marginBottom: 12 }}>
          <label>Full Name:</label>
          <input
            type="text"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4, boxSizing: "border-box" }}
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
            })}
          />
          {errors.fullName && (
            <span style={{ color: "red", fontSize: 12 }}>{errors.fullName.message}</span>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email Address:</label>
          <input
            type="text"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4, boxSizing: "border-box" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: 12 }}>{errors.email.message}</span>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password:</label>
          <input
            type="password"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4, boxSizing: "border-box" }}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
              validate: (value) =>
                /\d/.test(value) || "Password must include at least one number",
            })}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: 12 }}>{errors.password.message}</span>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Age:</label>
          <input
            type="number"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4, boxSizing: "border-box" }}
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Minimum age is 18" },
              max: { value: 60, message: "Maximum age is 60" },
              valueAsNumber: true,
            })}
          />
          {errors.age && (
            <span style={{ color: "red", fontSize: 12 }}>{errors.age.message}</span>
          )}
        </div>

        <button type="submit" style={{ padding: "8px 16px", width: "100%" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
