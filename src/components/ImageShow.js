function ImageShow(props) {
  const { image } = props;

  console.log(image);
  return (
    <div className="imageShow">
      <div>
        <img className="image" src={image.urls.raw} alt="image" />
      </div>
    </div>
  );
}

export default ImageShow;
