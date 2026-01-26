import React from "react";
import Input from "../components/Input";
import Table from "../components/Table";

function FormSurvey() {
  return (
    <>
      <div className='bg-[#f0ebf7] grid grid-cols-1 justify-center gap-5 my-8 px-[225px]'>
        <header className='bg-white p-8 rounded-lg border-t-4 border-[#743f9f] flex flex-col gap-4'>
          <h1>Form Survey Perokok</h1>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus
            quo praesentium deserunt placeat tempore ad eum consequuntur. Itaque
            placeat distinctio aperiam vel maxime iusto voluptates facilis ab
            iste sunt!
          </p>
          <span className='text-red-500'>* required</span>
        </header>
        <form className='flex flex-col gap-5'>
          <Input label='Siapa nama anda?' required />
          <Input label='Berapa umur anda?' type='number' required />

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-6'>
            <label className='text-xl font-semibold'>
              Apa jenis kelamin anda? <span className='text-red-500'>*</span>
            </label>
            <div className='flex gap-5'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='laki-laki'
                  name='jenis-kelamin'
                  value='laki-laki'
                />
                Laki-laki
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='perempuan'
                  name='jenis-kelamin'
                  value='perempuan'
                />
                Perempuan
              </label>
            </div>
          </section>

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-6'>
            <label className='text-xl font-semibold'>
              Apakah anda perokok? <span className='text-red-500'>*</span>
            </label>
            <div className='flex gap-5'>
              <label className='flex items-center gap-2'>
                <input type='radio' id='ya' value='ya' name='anda-perokok' />
                Ya
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='tidak'
                  value='tidak'
                  name='anda-perokok'
                />
                Tidak
              </label>
            </div>
          </section>

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-4'>
            <label className='text-xl font-semibold'>
              Jika Anda perokok, rokok apa yang anda pernah coba?
            </label>

            <label className='flex items-center gap-2'>
              <input type='checkbox' name='gudang-garam' id='gudang-garam' />
              Gudang Garam Filter
            </label>
            <label className='flex items-center gap-2'>
              <input type='checkbox' name='lucky-strike' id='lucky-strike' />
              Lucky Strike
            </label>
            <label className='flex items-center gap-2'>
              <input type='checkbox' name='marlboro' id='marlboro' />
              Marlboro
            </label>
            <label className='flex items-center gap-2'>
              <input type='checkbox' name='esse' id='esse' />
              Esse
            </label>
          </section>

          <div className='flex gap-5'>
            <button
              type='submit'
              className='bg-[#743f9f] text-white text-2xl px-4 py-1.5 rounded-md cursor-pointer'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Table />
    </>
  );
}

export default FormSurvey;
