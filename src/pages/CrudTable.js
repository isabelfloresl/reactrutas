const CrudTable = ({data, setDataToEdit, deleteData}) => {

    return (
        <div>
            <br></br>
            <h3>Tabla de datos</h3>
            <table id="mostrardatos" class="table">
                <thead>
                    <tr>
        
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
            
                {
                        data.length === 0 ? (
                            <tr>
                                <td coldSpan="3">No existen elementos</td>
                            </tr>
                        ) : (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>

                                    <td><button onClick={() => setDataToEdit(item)} type="submit" class="btn btn-dark">Editar</button>
                                    <button onClick={() => deleteData (item.id)} type="submit" class="btn btn-dark">Eliminar</button></td>
                                </tr>
                            )
                            )
                        )
                }
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable