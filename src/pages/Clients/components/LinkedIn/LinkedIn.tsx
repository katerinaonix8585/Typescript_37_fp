import Button from "components/Button/Button";
import { LinkedInInfo, LinkedInWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import GoBackButton from "components/GoBackButton/GoBackButton";

function LinkedIn(){

  const navigate = useNavigate();  

  const goBack = () => {
    navigate(-1)
  }


    return (
        <LinkedInWrapper>
          <LinkedInInfo>
            <p>Название: LinkedIn Corporation.</p>
            <p>Основание: Декабрь 2002 года, Ридом Хоффманом, Алленом Блюмом, Константином Гуеррой, Эриком Лю, и Джоном Лью.</p>
            <p>Штаб-квартира: Маунтин-Вью, Калифорния, США.</p>
            <p>Основной продукт: Социальная сеть LinkedIn, предназначенная для профессиональных контактов, обмена информацией о работе и карьерных возможностях.</p>                
          </LinkedInInfo>
          <GoBackButton />
        </LinkedInWrapper>
    )
}

export default LinkedIn;