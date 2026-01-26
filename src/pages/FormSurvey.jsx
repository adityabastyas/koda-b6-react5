import React from "react";

function FormSurvey() {
  return (
    <>
      <form class='form'>
        <section class='section'>
          <div>
            <label class='subtitle' for='nama'>
              Siapa nama anda? <span class='start'>*</span>
            </label>
          </div>
          <div>
            <input
              required
              placeholder='masukan nama'
              type='text'
              id='nama'
              name='nama'
            />
          </div>
        </section>
        <section class='section'>
          <div>
            <label class='subtitle' for='umur'>
              Berapa umur anda? <span class='start'>*</span>
            </label>
          </div>
          <div>
            <input type='number' id='umur' name='umur' />
          </div>
        </section>
        <section class='section'>
          <label class='subtitle'>
            Apa jenis kelamin anda? <span class='start'>*</span>
          </label>
          <div>
            <input
              type='radio'
              id='laki-laki'
              name='jenis-kelamin'
              value='laki-laki'
            />
            <label for='laki-laki'>Laki-laki</label>

            <input
              type='radio'
              id='perempuan'
              name='jenis-kelamin'
              value='perempuan'
            />
            <label for='perempuan'>Perempuan</label>
          </div>
        </section>
        <section class='section'>
          <label class='subtitle'>
            Apakah anda perokok? <span class='start'>*</span>
          </label>
          <div>
            <input type='radio' id='ya' value='ya' name='anda-perokok' />
            <label for='ya'>Ya</label>

            <input type='radio' value='tidak' id='tidak' name='anda-perokok' />
            <label for='tidak'>Tidak</label>
          </div>
        </section>
        <section class='section'>
          <label class='subtitle'>
            Jika Anda perokok, rokok apa yang anda pernah coba?
          </label>
          <div>
            <input type='checkbox' name='gudang-garam' id='gudang-garam' />
            <label for='gudang-garam'>Gudang Garam Filter</label>
          </div>
          <div>
            <input type='checkbox' name='lucky-strike' id='lucky-strike' />
            <label for='lucky-strike'>Lucky Strike</label>
          </div>
          <div>
            <input type='checkbox' name='marlboro' id='marlboro' />
            <label for='marlboro'>Marlboro</label>
          </div>
          <div>
            <input type='checkbox' name='esse' id='esse' />
            <label for='esse'>Esse</label>
          </div>
        </section>
        <div class='contaButton'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

export default FormSurvey;
