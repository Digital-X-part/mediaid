import ProductsContainer from '@/components/Pages/Shop/ShopProductsContainer/productsContainer';
import TopFilter from '@/components/Pages/Shop/TopFilter/TopFilter';

const ShopPage = () => {
    return (
        <div>
            <TopFilter></TopFilter>
            <ProductsContainer></ProductsContainer>
        </div>
    );
};

export default ShopPage;