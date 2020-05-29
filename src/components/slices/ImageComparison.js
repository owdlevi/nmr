/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReactCompareImage from 'react-compare-image'

const ImageComparison = ({ imageLeft, imageRight }) => {
  return (
    <div sx={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
      <ReactCompareImage
        aspectRatio="wider"
        leftImage={imageLeft}
        rightImage={imageRight}
        sliderLineColor="#2526E5"
        sliderLineWidth={10}
        handleSize={60}
      />
      ;
    </div>
  )
}

export default ImageComparison
