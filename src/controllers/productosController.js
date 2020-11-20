const productosController = {
    index : function(req,res){
        res.send('Estos son nuestros productos')
    },
    detalle : function(req,res){
        let idProducto = req.params.id;
        let descripcion = req.params.descripcion;
        res.send(`Detalle del producto numero: ${idProducto} - detalle: ${typeof descripcion != "undefined" ? descripcion : "no hay descripcion del producto"}`)
       
    }
}

module.exports = productosController