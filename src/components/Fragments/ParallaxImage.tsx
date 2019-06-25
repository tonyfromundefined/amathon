import { Parallax } from 'react-parallax'

interface IParallaxImageProps {
  image: string
}
export default function ParallaxImage(props: IParallaxImageProps) {
  return (
    <Parallax
      bgImage={props.image}
      strength={500}
    >
      <div style={{ height: '80vh' }} />
    </Parallax>
  )
}
