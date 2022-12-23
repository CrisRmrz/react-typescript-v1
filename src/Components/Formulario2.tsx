import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
}

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'Crisarroba',
        nombre: 'cris'
    });

    const { email, nombre } = formulario;

    return (
        <form autoComplete="off" >

            <div className="mb-3">
                <label className="form-label">Codigo postal:</label>
                <input type="text" value={email} className="form-control" name="email" onChange={ handleChange } />
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text" value={nombre} className="form-control" name="nombre" onChange={ handleChange } />
            </div>

            <pre> { JSON.stringify(formulario) } </pre>

        </form>
    )
}
