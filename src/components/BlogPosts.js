/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { Link } from "gatsby"
import { RichText, Date } from "prismic-reactjs"
import { linkResolver } from "../utils/linkResolver"

// Function to retrieve a small preview of the post's text
const firstParagraph = (project) => {
  // Find the first text slice of post's body
  let firstTextSlice = project.body.find((slice) => slice.type === "text")
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 300
    let text = RichText.asText(firstTextSlice.primary.text)
    let limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{limitedText.substring(0, limitedText.lastIndexOf(" ")) + "..."}</p>
      )
    } else {
      // If it's shorter than the limit, just show it normally
      return <p>{text}</p>
    }
  } else {
    // If there are no slices of type 'text', return nothing
    return null
  }
}

// A summary of the Blog Post
const PostSummary = ({ project }) => {
  // Store and format the blog post's publication date
  let postDate = Date(project.date)
  postDate = postDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(postDate)
    : ""

  // Default title when post has no title set
  const defaultTitle = "Untitled"

  return (
    <div
      className="post-summary"
      key={project.id}
      sx={{
        m: "5px",
        width: "calc(33.33% - 10px)",
      }}
    >
      <h2>
        {/* We render a link to a particular post using the linkResolver for the url and its title */}
        <Link to={linkResolver(project._meta)}>
          {RichText.asText(project.title).length !== 0
            ? RichText.asText(project.title)
            : defaultTitle}
        </Link>
      </h2>
      <p className="blog-post-meta">
        <time>{postDate}</time>
      </p>
      {/* Renders a small preview of the post's text */}
      {firstParagraph(project)}
    </div>
  )
}

export default ({ projects }) => {
  if (!projects) return null

  return (
    <div
      className="blog-posts container"
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        mx: "-10px",
      }}
    >
      {projects.map((project) => {
        return (
          <PostSummary project={project.node} key={project.node._meta.id} />
        )
      })}
    </div>
  )
}
