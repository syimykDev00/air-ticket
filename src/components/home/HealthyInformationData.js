import healthyInformationImageOne from '../../assets/img/healthyInformationImageOne.png';
import healthyInformationImageTwo from '../../assets/img/healthyInformationImageTwo.png';
import healthyInformationImageThree from '../../assets/img/healthyInformationImageThree.png';

const healthyData = [
  {
    id: 1,
    title: 'Нормы багажа',
    description: 'Ознакомьтесь с правилами веса и габаритов вещей.',
    image: healthyInformationImageOne,
    slug: 'normy-bagazha',
    content: {
      title: 'Нормы провоза багажа',
      text: 'Здесь будет полный текст про нормы багажа...'
    }
  },
  {
    id: 2,
    title: 'Запрещенные и опасные грузы',
    description: 'Изучите список запрещенных предметов.',
    image: healthyInformationImageTwo,
    slug: 'opasnye-gruzy',
    content: {
      title: 'Опасные и запрещенные грузы',
      text: 'Здесь будет информация про опасные грузы...'
    }
  },
  {
    id: 3,
    title: 'Добровольное донесение',
    description: 'Сообщите о происшествиях для повышения безопасности.',
    image: healthyInformationImageThree,
    slug: 'dobrovolnoe-donesenie',
    content: {
      title: 'Добровольное донесение',
      text: 'Информация о добровольном донесении...'
    }
  }
]

export default healthyData;