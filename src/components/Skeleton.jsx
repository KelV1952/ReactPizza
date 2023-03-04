import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#858080"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="136" r="131" /> 
    <rect x="11" y="306" rx="0" ry="0" width="261" height="32" /> 
    <rect x="11" y="363" rx="0" ry="0" width="261" height="82" /> 
    <rect x="12" y="474" rx="0" ry="0" width="0" height="28" /> 
    <rect x="577" y="558" rx="0" ry="0" width="5" height="3" /> 
    <rect x="555" y="542" rx="0" ry="0" width="62" height="20" /> 
    <rect x="11" y="474" rx="0" ry="0" width="93" height="32" /> 
    <rect x="119" y="465" rx="0" ry="0" width="152" height="54" />
  </ContentLoader>
)

export default Skeleton;