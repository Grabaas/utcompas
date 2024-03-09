import React, { useEffect, useState } from "react";

function Feed() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:3000/api/publicaciones/').then(response => response.json()),
            fetch('http://localhost:3000/api/usuarios/').then(response => response.json())
        ])
        .then(([publicacionesData, usuariosData]) => {
            // Aquí combina los datos de publicaciones y usuarios
            const publicacionesCombinadas = publicacionesData.map(publicacion => {
                const usuario = usuariosData.find(usuario => usuario._id === publicacion.user_id);
                return { ...publicacion, usuario };
            });
            setPublicaciones(publicacionesCombinadas);
        })
        .catch(error => console.error('Error al obtener las publicaciones y usuarios:', error));
    }, []);

    // Estilos CSS encapsulados como cadena de texto
    const styles = `
        .feed-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .publicaciones-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .publicacion {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
        }

        .usuario-info {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        .profile-picture {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .username {
            margin: 0;
        }

        .publicacion-content {
            border-radius: 10px;
            border: 1px solid #ddd;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            
        }

        .publicacion-image {
            width: 100%;
            margin-top: 10px;
        }

        .likes {
            margin-top: 10px;
            font-weight: bold;
        }
    `;

    return (
        <div className="feed-container">
            <style>{styles}</style>
            <h1>Publicaciones y Usuarios</h1>
            <div className="publicaciones-list">
                {publicaciones.map(publicacion => (
                    <div className="publicacion" key={publicacion._id}>
                        <div className="usuario-info">
                            <img className="profile-picture" src={publicacion.usuario.profile_picture} alt={publicacion.usuario.username} />
                            <h2 className="username">{publicacion.usuario.username}</h2>
                        </div>
                        <div className="publicacion-content">
                            <p>{publicacion.content}</p>
                            <img className="profile-picture" src={publicacion.usuario.profile_picture} alt={publicacion.usuario.username} />
                            <h2 className="username">{publicacion.usuario.username}</h2>
                            <img className="publicacion-image" src={publicacion.images} alt="imagen" />
                        </div>
                        <div className="likes">
                            <p>Likes: {publicacion.likes}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;
