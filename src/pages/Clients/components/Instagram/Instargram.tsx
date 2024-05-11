import Button from "components/Button/Button";
import { InstagramInfo, InstagramWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import GoBackButton from "components/GoBackButton/GoBackButton";

function Instagram(){

  const navigate = useNavigate();  

  const goBack = () => {
    navigate(-1)
  }


    return (
        <InstagramWrapper>
          <InstagramInfo>
            <p>Название: Instagram, Inc.</p>
            <p>Основание: Октябрь 2010 года, Кевином Систромом и Майком Кригером.</p>
            <p>Штаб-квартира: Менло-Парк, Калифорния, США.</p>
            <p>Основной продукт: Социальная сеть Instagram, платформа для обмена фотографиями и видеозаписями, а также для взаимодействия пользователей через комментарии и лайки.</p>                
          </InstagramInfo>
          <GoBackButton />
        </InstagramWrapper>
    )
}

export default Instagram;