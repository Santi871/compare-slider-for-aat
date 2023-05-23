import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useParams } from "react-router-dom";

const ImageCompare = () => {
  const { imageName } = useParams();
  const basePath = `/${imageName}`
  const imageOnePath = `${basePath}/${imageName}-a.jpg`
  const imageTwoPath = `${basePath}/${imageName}-b.jpg`

  return (
    <div className="image-compare-container">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={imageOnePath} alt="Image one" className="image-compare" />}
        itemTwo={<ReactCompareSliderImage src={imageTwoPath} alt="Image two" className="image-compare" />}
      />
    </div>
  );
};

export default ImageCompare;