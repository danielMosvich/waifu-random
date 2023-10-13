type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  disabled?: boolean;
};
export default function Button({ disabled, children, ...rest }: ButtonProps) {
  return (
    <div className="bg-orange-800 rounded-lg translate-y-1 h-12 font-[500]">
      <button
        // disabled={disabled}
        {...rest}
        style={{
          filter: disabled ? "grayscale(0.8)" : "grayscale(0)",
          border: "2px solid rgb(154 52 18)",
          boxShadow: "inset 0px -1px 0px 2px rgb(255 237 213)",
        }}
        className="bg-orange-300 -translate-y-2 text-orange-800 w-full p-3 rounded-lg active:-translate-y-1 outline-none "
      >
        {children}
      </button>
    </div>
  );
}
