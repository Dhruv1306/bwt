import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

async function fakeApiLogin(data: LoginFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email === "user@example.com" && data.password === "pass123") {
    console.log("Login su ccessful!", data);
  } else {
    throw new Error("Invalid email or password");
  }
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await fakeApiLogin(data);
    } catch (err) {
      setError("root", {
        type: "server",
        message: (err as Error).message,
      });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

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
            })}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: 12 }}>{errors.password.message}</span>
          )}
        </div>

        {errors.root && (
          <div style={{ color: "red", fontSize: 13, marginBottom: 10 }}>
            {errors.root.message}
          </div>
        )}

        <button type="submit" disabled={isSubmitting} style={{ padding: "8px 16px", width: "100%" }}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
