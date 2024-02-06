
export default function Backgroundimage({ children, size ,imageUrl }) {
    return (
        <div className="Backgroundimage" style={{ 
            position: 'relative',
            height: size,
            backgroundImage: `url(${imageUrl})`,
        }}>
            <div className="overlay"></div>
            <div className="textoCentro">{children}</div>
        </div>
    )
}