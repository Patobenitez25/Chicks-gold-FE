import { useEffect, useState } from 'react';
import icons from '../assets/cardLogos.json';
import { getProducts } from '../assets/api/products';
import '../styles/Body.css';
import cartLogo from '../assets/cart.svg'

export const Body = () => {
    const [product, setProduct] = useState([]);
    const [counters, setCounters] = useState({}); // Estado para manejar los contadores por ID

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await getProducts();
            if (response) {
                console.log("Productos obtenidos:", response);
                setProduct(response);

                // Inicializar counter de cada producto en 0
                const initialCounters = {};
                response.forEach((prod) => {
                    initialCounters[prod.id] = 0;
                });
                setCounters(initialCounters);
            }
        };
        fetchProducts();
    }, []);

    const updateCounter = (id, value) => {
        setCounters((prevCounters) => ({
            ...prevCounters,
            [id]: Math.max(prevCounters[id] + value, 0), // Evita valores negativos
        }));
    };

return (
    <main className='body-container'>
        <h1>Condimentum consectetur</h1>
        <section className='gallery'>
            {product.map((product) => {
                const productId = String(product.id);
                const icon = icons.find((icon) => String(icon.id) === productId);
                return (
                    <div className={`container-card element-${productId}`} key={product.id}>
                        <div className="green-counter">
                            <span className='greenDot'> 🟢 ON SALE </span>
                            
                            <div className="counter">
                            <span className="count">{counters[productId] || 0}</span>
                                <div className="arrows-container">
                                    <button onClick={() => updateCounter(productId, 1)} className="arrows up">▲</button>
                                    <button onClick={() => updateCounter(productId, -1)} className="arrows down">▼</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-header">
                            <div className="container-card__card-image">
                                <img src={icon ? icon.image : undefined} alt={`${product.title}-image`} />
                            </div>
                            <h3>{product.title}</h3>
                            {product.price ? <div className='card-price'>{`$${product.price}`}</div> : null}
                        </div>
                        <div className="card-body">
                            <p className='container-card__card-description'>{product.description}</p>
                            <div className="card-footer">
                                <button className="btn details">DETAILS</button>
                                <button className="btn add">ADD</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    </main>
);
};
