/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useTransition, a } from 'react-spring'
import { useMedia, useMeasure } from 'react-use'

import ProjectItem from './ProjectItem'
import './style.css'

const ProjectsGrid = ({ projects }) => {
  const isWide = useMedia('(min-width: 600px)')

  const columns = isWide ? 3 : 1

  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure()
  console.log(width)
  // Hook3: Hold items
  const [items, setItems] = useState(projects)
  useEffect(() => {
    setItems(projects)
    return () => {}
  }, [projects])

  // Hook4: shuffle data every 2 seconds
  // useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const childHeight = 820 //child.node.listing_image.dimensions.height
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [(width / columns) * column, (heights[column] += width / columns) - width / columns] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: width / columns }
  })
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.node.listing_image.url, {
    from: ({ xy, width, height }) => ({
      xy,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ xy, width, height }) => ({
      xy,
      width,
      height,
      opacity: 1,
    }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 50,
  })
  // Render the grid
  return (
    <div name="projects" sx={{ cursor: 'pointer' }} ref={ref} className="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div
          key={item.node._meta.id}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest,
          }}>
          <ProjectItem project={item.node} />
        </a.div>
      ))}
    </div>
  )
}

export default ProjectsGrid
