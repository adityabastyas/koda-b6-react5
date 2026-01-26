import React from "react";

function Input(props) {
  const { id, label, required, placeholder, type, name, value, onChange } =
    props;
  return (
    <>
      <section className='bg-white p-8 rounded-lg flex flex-col gap-8'>
        <div>
          <label className='text-xl font-bold' htmlFor={id}>
            {label} {required && <span className='text-red-500'>*</span>}
          </label>
        </div>
        <div>
          <input
            required={required}
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className='border-0 border-b border-black p-1 text-xl outline-none w-full'
          />
        </div>
      </section>
    </>
  );
}

export default Input;
