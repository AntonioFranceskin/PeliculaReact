import { Form, Formik} from "formik";
import { Link} from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";


export default function CrearGenero(){
    //const history = useHistory();
    return (
        <>
        <h3>Crear Género</h3>
        <Formik
            initialValues={{
            nombre: '',
            }}
            onSubmit={value => {
                console.log(value);
            }}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
            })}
            >
            <Form>
                <FormGroupText campo="nombre" label="Nombre"></FormGroupText>
                <Button type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>
        </Formik>
        </>
    )
}

//
// Antes  de  Video 73  que se  crea  un  componente  general para  encapsular  cualquier  campo de texto
//
//
// import { ErrorMessage, Field, Form, Formik} from "formik";
// import { Link, useHistory } from "react-router-dom";
// import Button from "../utils/Button";
// import * as Yup from 'yup'


// export default function CrearGenero(){
//     //const history = useHistory();
//     return (
//         <>
//         <h3>Crear Género</h3>
//         <Formik
//             initialValues={{
//             nombre: '',
//             }}
//             onSubmit={value => {
//                 console.log(value);
//             }}
//             validationSchema={Yup.object({
//                 nombre: Yup.string().required('Este campo es requerido')
//             })}
//             >
//             <Form>
//                 <div className="form-group">
//                     <label htmlFor="nombre">Nombre</label> 
//                     <Field name="nombre" className="form-control" />
//                     <ErrorMessage name="nombre" >{mensaje => 
//                         <div className="text-danger">{mensaje}</div>
//                     }</ErrorMessage>
//                 </div>
//                 <Button type="submit">Salvar</Button>
//                 <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
//             </Form>
//         </Formik>
//         </>
//     )
// }