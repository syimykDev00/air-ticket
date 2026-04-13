import { Outlet } from 'react-router-dom';

const InfoLayout = () => {
  return (
    <section className="infoPage">
      <div className="container infoPage-layout">
        <div className="infoPage-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default InfoLayout;
