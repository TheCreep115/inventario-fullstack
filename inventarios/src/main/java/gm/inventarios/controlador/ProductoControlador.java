package gm.inventarios.controlador;

import gm.inventarios.Servicio.IProductoServicio;
import gm.inventarios.modelo.Producto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inventario-app") // http://localhost:8080/inventario-app
@CrossOrigin(origins = "http://localhost:4200") //Permite conexion desde Angular
public class ProductoControlador {

    private final IProductoServicio productoServicio;

    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    public ProductoControlador(IProductoServicio productoServicio) {
        this.productoServicio = productoServicio;
    }

    // 🔹 Listar los productos
    @GetMapping("/productos")
    public List<Producto> listarProductos() {
        List<Producto> productos = productoServicio.listarProductos();
        logger.info("Productos obtenidos ");
        productos.forEach(producto -> logger.info(producto.toString()));
        return productos;
    }

    // 🔹 Buscar productos
    @GetMapping("/{id}")
    public Producto buscarProductoPorId(@PathVariable Integer id){
        return productoServicio.buscarProductoPorId(id);
    }

    // 🔹 Crear nuevo producto
    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productoServicio.guardarProducto(producto);
    }

    // 🔹 Actualizar producto existente
    @PutMapping("/{id}")
    public Producto actualizarProducto(@PathVariable Integer id, @RequestBody Producto producto){
        producto.setIdProducto(id);
        return productoServicio.guardarProducto(producto);
    }

    // 🔹 Eliminar producto
    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Integer id){
        productoServicio.eliminarProductoPorId(id);
    }
}