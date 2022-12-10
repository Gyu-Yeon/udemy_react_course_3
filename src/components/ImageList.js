import ImageShow from "./ImageShow";

function ImageList(props) {
  const { images } = props;
  console.log(images);
  return (
    <div className="imageList">
      {images?.map((image) => {
        return <ImageShow image={image} key={image.id} />;
      })}
    </div>
  );
}

export default ImageList;
