package gm.inventarios.Servicio;

import gm.inventarios.modelo.Producto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductoServicio {

        List<Producto> listarProductos();

        Producto buscarProductoPorId(Integer producto);

        Producto guardarProducto(Producto producto);

        void eliminarProductoPorId(Integer idProducto);

}
