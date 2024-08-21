//css
import './PerfilUser.css';

const PerfilUser = () => {

    const buids = [
        { id: 1, class: "Guerreiro", expecialidade: "Tank", nomeBuild: "tank tudo", curtidas:100 },
        { id: 2, class: "Barbaro", expecialidade: "DPS", nomeBuild: "Full Dano", curtidas:200 },
        { id: 3, class: "Arqueira", expecialidade: "DPS", nomeBuild: "ARK Druida", curtidas:500 },
        { id: 1, class: "Guerreiro", expecialidade: "Tank", nomeBuild: "tank tudo", curtidas:100 },
        { id: 2, class: "Barbaro", expecialidade: "DPS", nomeBuild: "Full Dano", curtidas:200 },
        { id: 3, class: "Arqueira", expecialidade: "DPS", nomeBuild: "ARK Druida", curtidas:500 },
        { id: 1, class: "Guerreiro", expecialidade: "Tank", nomeBuild: "tank tudo", curtidas:100 },
        { id: 2, class: "Barbaro", expecialidade: "DPS", nomeBuild: "Full Dano", curtidas:200 },
        { id: 3, class: "Arqueira", expecialidade: "DPS", nomeBuild: "ARK Druida", curtidas:500 }
    ]



    return (
        <div className='container'>
            <main className='container-pai-perfil'>
                <div className='container-main-perfil'>

                    <figure></figure>

                    <h1>Luan Fernandes</h1>

                    <div><p>Email:</p> <span>test@test.com</span></div>

                    <div><p>Senha:</p> <span>123456</span></div>
                </div>

                <div className='minhas-builds-perfil'>
                    <h1>
                        MINHAS BUILDS
                    </h1>
                    
                    {buids.map(build =>(
                        <div key={build.id} className='class-das-buids'>
                        <div className='descbuild'>
                            {/*limitar nome da build para 20 caracteres*/}
                            <h2>{build.nomeBuild}</h2>

                            <h3> {build.class} - {build.expecialidade}</h3>

                            <div><p>Curtidas:</p> <span>{build.curtidas}</span></div>
                        </div>

                        <span className='editar-build'>Editar Buiilds</span>
                    </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default PerfilUser
