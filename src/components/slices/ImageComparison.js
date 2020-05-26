/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReactCompareImage from 'react-compare-image'

const ImageComparison = ({ imageLeft, imageRight }) => {
  return (
    <div sx={{ width: '100%', height: ['450px', '595px'], lineHeight: 0 }}>
      <ReactCompareImage leftImage={imageLeft} rightImage={imageRight} sliderLineColor="#2526E5" sliderLineWidth={10} handleSize={60} />;
    </div>
  )
}

export default ImageComparison
