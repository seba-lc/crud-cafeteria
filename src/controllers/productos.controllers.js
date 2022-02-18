import Producto from "../models/producto";

const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res) => {
  res.send('pame tips')
}

cafeteriaCtrl.crearProducto = async (req, res) => {
  console.log(req.body)
  try {
    const {nombreProducto, precioProducto, categoria} = req.body
    //me creo un objeto, una instancia del modelado que hicimos en Producto
    const productoNuevo = new Producto ({
      nombreProducto,
      precioProducto,
      categoria
    })
    //guardo el producto en mi DB
    await productoNuevo.save();
    //enviar respuesta al front end
    res.status(201).json({
      mensaje: 'Enhorabuena, el producto se agregó correctamente'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrió un error"
    })
  }
}

cafeteriaCtrl.listarProductos = async (req, res) => {
  try {
    const datos = await Producto.find(); //acá obtengo todos los productos de la coleccion
    //respuesta al frontend
    res.status(200).json(datos)

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrió un error"
    })
  }
}

cafeteriaCtrl.borrarProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Borramos un producto"
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrió un error"
    })
  }
}

cafeteriaCtrl.editarProducto = async (req, res) => {
  try {
    //deberíamos hacer un par de comprobaciones antes para validar
    //y verificar que tenga las características que tenga que tener
    //validaríamos con un if al req.body
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      mensaje: "El productó se modificó correctamente"
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrió un error"
    })
  }
}

export default cafeteriaCtrl;