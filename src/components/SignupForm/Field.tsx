import { useField } from "formik";
import errorSvg from "../../../public/error.svg";

interface FieldProps {
  name: string;
  type: string;
  placeholder: string;
}

function Field({ name, type, placeholder }: FieldProps) {

  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1.5 w-full relative">
      <input
        {...field}
        type={type}
        placeholder={
          isError && type === "email" ? "email@example/com" : placeholder
        }
        className={`
          w-full h-14 pl-8 pr-16 rounded-[5px] font-semibold text-[14px] tracking-[0.25px] leading-6.5 focus:outline-none border
          ${
            isError
              ? "border-[#FF7979] text-[#FF7979] placeholder-[#FF7979]" 
              : "border-[#DEDEDE] text-[#3d3b48] focus:border-[#5E54A4]"
          }
        `}
      />

      {isError && (
        <img
          src={errorSvg}
          alt="Error icon"
          className="absolute right-6.75 top-4"
        />
      )}

      {isError && (
        <div className="text-[#ff7979] text-right text-[11px] italic font-medium">
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default Field;
