/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import get from "lodash/get"

// Default Image
const FullWidthImage = ({ slice }) => {
  const sharpImage = get(slice, "imageSharp.childImageSharp.fluid")
  const SliceImage = sharpImage ? (
    <Img fluid={sharpImage} />
  ) : (
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  )

  return <div className="post-image container">{SliceImage}</div>
}

export default FullWidthImage
