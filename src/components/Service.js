const Service = ({ text, description }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{text}</h4>
        <p className="service-text">{description}</p>
      </div>
    </article>
  );
};
export default Service;
