/** @jsx jsx */
import { jsx } from 'theme-ui'
import ImageSlider from 'react-image-comparison-slider'

const ImageComparison = ({ imageLeft, imageRight }) => {
  console.log(imageLeft)
  return (
    <div sx={{ width: '100%', height: ['450px', '595px'] }}>
      <ImageSlider
        image1={imageLeft}
        image2={imageRight}
        sliderWidth={3}
        sliderColor="#2526E5"
        handleColor="#2526E5"
        handleBackgroundColor="white"
      />
    </div>
  )
}

export default ImageComparison
