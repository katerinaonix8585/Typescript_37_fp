import Button from "components/Button/Button";
import { FacebookInfo, FacebookWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

function Facebook(){

  const navigate = useNavigate();  

  const goBack = () => {
    navigate(-1)
  }


    return (
        <FacebookWrapper>
          <FacebookInfo>
            <p>Название: Facebook, Inc.</p>
            <p>Основание: Февраль 2004 года в колледже Гарвард Марком Цукербергом и его товарищами по комнате.</p>
            <p>Штаб-квартира: Менло-Парк, Калифорния, США.</p>
            <p>Основной продукт: Социальная сеть Facebook, платформа для обмена информацией и общения между пользователями.</p>                
          </FacebookInfo>
        <Button name='Go to Clients' onButtonClick={goBack} />
        </FacebookWrapper>
    )
}

export default Facebook;