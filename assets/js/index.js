const titulos=['foto', 'titulo', 'descripcion', 'direccion', 'rooms', 'baños', 'valor', 'fumar', 'mascota']
const depto1=['https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg', 'Apartamento de lujo en zona exclusiva', 'Este apartamento de lujo está ubicado en una exclusiva zona residencial', ' 123 Luxury Lane, Prestige Suburb, CA 45678', '4 Habitaciones', '4 Baños', '5000', 'No se permite fumar', 'No se permiten mascotas']
const depto2=['https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg', 'Apartamento acogedor en la montaña', 'Este apartamento acogedor está situado en lo alto de  montaña con impresionantes vistas', ' 789 Mountain Road, Summit Peaks, CA 23456', '2 Habitaciones', '1 Baños', '1200', 'Permitido fumar', 'Mascotas permitidas']
const depto3=['https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg', 'Penthouse de lujo con terraza panorámica', 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares', ' 567 Skyline Avenue, Skyview City, CA 56789', '3 Habitaciones', '3 Baños', '4500', 'No se permite fumar', 'Mascotas permitidas']
const depto4=['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 'Apartamento en el centro de la ciudad', 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.', ' 123 Main Street, Anytown, CA 91234', '2 Habitaciones', '2 Baños', '2000', 'No se permite fumar', 'Mascotas permitidas']
const depto5=['https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'Apartamento luminoso con vista al mar', 'Este hermoso apartamento ofrece una vista impresionante al mar', ' 456 Ocean Avenue, Seaside Town, CA 56789', '3 Habitaciones', '3 Baños', '2500', 'Permitido fumar', 'Mascotas permitidas']
const depto6=['https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'Condominio moderno en zona residencial', 'Este elegante condominio moderno está ubicado en una tranquila zona residencial', ' 123 Main Street, Anytown, CA 91234', '2 Habitaciones', '2 Baños', '2200', 'No se permite fumar', 'No se permiten mascotas']
const datos_resumen_venta =[depto1,depto2,depto3,]
const datos_resumen_arriendo=[depto4,depto5,depto6]

const key_index_venta = document.querySelector("#resumen_venta")
const key_index_arriendo = document.querySelector("#resumen_arriendo")

key_index_venta.innerHTML = tarjetas(datos_resumen_venta)
key_index_arriendo.innerHTML = tarjetas(datos_resumen_arriendo)

