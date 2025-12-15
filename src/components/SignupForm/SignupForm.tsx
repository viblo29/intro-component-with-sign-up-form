import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "./Field";
import Button from "./Button";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: Yup.string()
    .required("Password cannot be empty")
    .min(6, "Password must be at least 6 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
});

function SignupForm() {
  return (
    <div className='bg-[#FFFFFF] rounded-[10px] sm:w-135 w-81.75 sm:p-10 p-6 flex flex-col gap-5 shadow-[0_8px_0_0_rgba(0,0,0,0.15)]'>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {
          alert("Trial Claimed!");
          window.location.reload();
        }}
      >
        {() => (
          <Form className="flex flex-col gap-5">
            <Field type="text" name="firstName" placeholder="First Name" />
            <Field type="text" name="lastName" placeholder="Last Name" />
            <Field type="email" name="email" placeholder="Email Address" />
            <Field type="password" name="password" placeholder="Password" />
            <div>
              <Button />
              <div className="text-[#bab7d4] text-center text-[11px] font-medium leading-6.5 mt-2 px-7">
                By clicking the button, you are agreeing to our {" "}
                <span className="font-bold text-[#ff7979] cursor-pointer">
                  Terms and Services
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
