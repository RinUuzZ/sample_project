import { useFormik } from "formik";
import "./App.css";
import axios from "axios";

function App() {
  const form = useFormik({

    initialValues: {
      no: "",
      name: "",
      place: "",
      age: "",
      mobile: "",
      e_mail: ""
    },

    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:3001', values).then(res => {
        alert('saved')
      })
    },

  });

  const { values, handleChange, handleSubmit } = form;

  return (

    <div className="App">
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">no</label>
          <input name="no" value={values.no} onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">name</label>
          <input name="name" value={values.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">place</label>
          <input name="place" value={values.place} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">age</label>
          <input name="age" value={values.age} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">mobile</label>
          <input name="mobile" value={values.mobile} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">e_mail</label>
          <input name="e_mail" value={values.e_mail} onChange={handleChange} />
        </div>

        <button type="submit">submit</button>

      </form>

    </div>
  );
}

export default App;