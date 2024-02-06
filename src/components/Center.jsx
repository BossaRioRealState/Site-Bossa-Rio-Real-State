
export default function Center({ children }) {
    return (
      <div 
          className="Center"
          style={{
              margin: "0 auto",
              width: "100%",
              padding: "0 2%",
              maxWidth: "1440px",
              height: "100%",
          }}  
      >
        {children}
      </div>
    )
  }