import React from "react";

function Table() {
  return (
    <>
      <div className='bg-[#f0ebf7] grid grid-cols-1 justify-center gap-5 my-8 px-[225px]'>
        <header className='bg-white p-8 rounded-lg border-t-4 border-[#743f9f] flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Subbmission</h1>
          <p className='text-base'>
            Berikut ini adalah daftar yang telah mengisi form rokok
          </p>
        </header>

        <table className='bg-white text-center font-semibold rounded-lg border-collapse overflow-hidden'>
          <thead>
            <tr>
              <th rowspan='2' className='p-3 border font-medium'>
                Nama
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Umur
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Jenis Kelamin
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Apakah Anda Perokok
              </th>
              <th colspan='4' className='p-3 border font-medium'>
                Brand Rokok
              </th>
            </tr>

            <tr>
              <th className='p-3 border font-medium'>Gudang Garam Filter</th>
              <th className='p-3 border font-medium'>Lucky Strike</th>
              <th className='p-3 border font-medium'>Marlboro</th>
              <th className='p-3 border font-medium'>Esse</th>
            </tr>
          </thead>

          <tbody className='text-center font-semibold'></tbody>
        </table>

        <div>
          <a href='./index.html' className='text-blue-600 underline'>
            kembali ke form
          </a>
        </div>
      </div>
    </>
  );
}

export default Table;
