/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import get from 'lodash/get'
import ImageComparasion from './ImageComparison'

const TwoImages = ({ imageLeft, imageRight }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        div: {
          width: 'calc(50% - 5px)',
          img: {
            display: 'inline-block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          },
        },
      }}>
      <div>{imageLeft}</div>
      <div>{imageRight}</div>
    </div>
  )
}

const TwoColumnImage = ({ slice }) => {
  let SliceImageLeft, SliceImageRight
  if (slice.primary.comparison_component === true) {
    const sharpImageLeft = get(slice, 'left_imageSharp.childImageSharp.fluid')
    SliceImageLeft = sharpImageLeft ? sharpImageLeft : slice.primary.left_image.url
    const sharpImageRight = get(slice, 'right_imageSharp.childImageSharp.fluid')
    SliceImageRight = sharpImageRight ? sharpImageRight : slice.primary.right_image.url
  } else {
    const sharpImageLeft = get(slice, 'left_imageSharp.childImageSharp.fluid')
    SliceImageLeft = sharpImageLeft ? (
      <Img fluid={sharpImageLeft} />
    ) : (
      <img src={slice.primary.left_image.url} alt={slice.primary.left_image.alt} />
    )
    const sharpImageRight = get(slice, 'right_imageSharp.childImageSharp.fluid')
    SliceImageRight = sharpImageRight ? (
      <Img fluid={sharpImageRight} />
    ) : (
      <img src={slice.primary.right_image.url} alt={slice.primary.right_image.alt} />
    )
  }
  console.log(slice)
  return (
    <div>
      {slice.primary.comparison_component === true ? (
        <ImageComparasion imageLeft={SliceImageLeft} imageRight={SliceImageRight} />
      ) : typeof document !== 'undefined' ? (
        <TwoImages imageLeft={SliceImageLeft} imageRight={SliceImageRight} />
      ) : (
        ''
      )}
    </div>
  )
}

export default TwoColumnImage
