import { addshoppingcart } from '../../assets/add_shopping_cart.svg';
import { ContainerButton } from './styles';

export function CardButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={addshoppingcart} alt="Carrinho de compras" />
    </ContainerButton>
  );
}
