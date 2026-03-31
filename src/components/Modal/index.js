import ReactDOM from "react-dom";

import { Container, Overlay, Footer } from "./styles";

import Button from "../Button";

/**
 * createPortal é usado para renderizar a modal fora da hierarquia
 * do DOM pai, evitando problemas de posicionamento causados por
 * propriedades CSS como position, z-index e overflow de elementos ancestrais.
 * A mesma abordagem é utilizada no componente Loader.
 */

export default function Modal({ danger = false }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>
          Corpo do modal
        </p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}
