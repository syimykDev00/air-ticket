import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';

const InfoSidebar = () => {
  const [open, setOpen] = useState('trip');

  return (
    <div className="infoSidebar">

      {/* ===== О ПОЕЗДКЕ ===== */}
      <div className="sidebarSection">

        <button
          className="sidebarHeader"
          onClick={() => setOpen(open === 'trip' ? null : 'trip')}
        >
          <span>О поездке</span>
          <IoChevronDown className={open === 'trip' ? 'rotate' : ''} />
        </button>

        {open === 'trip' && (
          <div className="sidebarItems">

             <Link to="/info/puteshestvija-s-detmi" className="sidebarCard">
              <span>Путешествия с детьми</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/dobrovolnoe-donesenie" className="sidebarCard">
              <span>Добровольное донесение</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/opasnye-gruzy" className="sidebarCard">
              <span>Опасные и запрещенные грузы</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/strategii-planirovanija-puteshestvija" className="sidebarCard">
              <span>Стратегии планирования путешествия</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/normy-bagazha" className="sidebarCard">
              <span>Нормы багажа</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/security" className="sidebarCard">
              <span>Сообщения о качестве обслуживания и безопасности</span>
              <MdOutlineArrowOutward className='sidebarCardIcon'/>
            </Link>

          </div>
        )}
      </div>

      {/* ===== О БРОНИРОВАНИИ ===== */}
      <div className="sidebarSection">

        <button
          className="sidebarHeader"
          onClick={() => setOpen(open === 'booking' ? null : 'booking')}
        >
          <span>О бронировании</span>
          <IoChevronDown className={open === 'booking' ? 'rotate' : ''} />
        </button>

        {open === 'booking' && (
          <div className="sidebarItems">

            <Link to="/info/politika-bronirovaniya-aviabiletov" className="sidebarCard">
              <span>Политика бронирования авиабилетов</span>
              <MdOutlineArrowOutward />
            </Link>

            <Link to="/info/perevozka-pitomcev" className="sidebarCard">
              <span>Перевозка питомцев</span>
              <MdOutlineArrowOutward />
            </Link>

          </div>
        )}
      </div>

    </div>
  );
};

export default InfoSidebar;
