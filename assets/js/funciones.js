function tarjetas(transaccion){
    let html =""
    for (let depto of transaccion){
        if (depto[7] == 'Permitido fumar'){
            texto_fumar = "text-success";
        }
        else{
            texto_fumar = "text-danger";
        }

        if (depto[8] == 'Mascotas permitidas'){
            texto_mascota = "text-success";
        }
        else{
            texto_mascota = "text-danger";
        }
        html +=
            `<div class="col-md-4 mb-4">
                        <div class="card">
                        <img
                            src=${depto[0]}
                            class="card-img-top"
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                            ${depto[1]}
                            </h5>
                            <p class="card-text">
                            ${depto[2]}
                            </p>
                            <p>
                            <i class="fas fa-map-marker-alt"></i>${depto[3]}
                            </p>
                            <p>
                            <i class="fas fa-bed"></i> ${depto[4]} |
                            <i class="fas fa-bath"></i> ${depto[5]}
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${depto[6]}</p>
                            <p class=${texto_fumar}>
                            <i class="fas fa-smoking-ban"></i> ${depto[7]}
                            </p>
                            <p class=${texto_mascota}>
                            <i class="fa-solid fa-ban"></i> ${depto[8]}
                            </p>
                        </div>
                        </div>
                    </div>`
    }
    return html
}




