
  //Usuarios
    const url_usuario = fetch('https://jsonplaceholder.typicode.com/users');
    url_usuario
    .then(response =>response.json())
    .then(usuarios =>{
        usuarios.map(user=>adicionarUsuarioEnLaTabla(user));
    });


    function adicionarUsuarioEnLaTabla(usuario){
        var pacienteTr = construirTr(usuario);
        var tabla= document.querySelector("#tabla-usuarios");
        tabla.appendChild(pacienteTr);
    }

    function construirTr(usuario){
        //crear los tds y un tr
        var usuarioTr = document.createElement('tr');
        usuarioTr.classList.add("usuario");

        //asignacion al tr de los td, y a la tabla el tr
        usuarioTr.appendChild(construirTd(usuario.name, "info-name")); 
        usuarioTr.appendChild(construirTd(usuario.id, "info-id"));
        usuarioTr.appendChild(construirTd(usuario.phone, "info-phone"));
        usuarioTr.appendChild(construirTd(usuario.email, "info-email")); 
        usuarioTr.appendChild(construirTd(usuario.address.city, "info-city"));
        usuarioTr.appendChild(construirTd(usuario.company.name, "info-company"));

        return usuarioTr; 
    }

    function construirTd(usuario, clase){
        var td = document.createElement('td');
        td.classList.add(clase); 
        td.textContent = usuario;

        return td;
    }




    


