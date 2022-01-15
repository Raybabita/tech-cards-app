// Write your code here.
import './index.css'

const TechnologyCardItems = props => {
  const {cardItemDetails} = props
  const {title, description, imgUrl, className} = cardItemDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="avatar" alt={title} src={imgUrl} />
      </div>
    </li>
  )
}

export default TechnologyCardItems
