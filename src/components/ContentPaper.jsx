const options = {
  borderRadius: 8,
  boxShadow: '0px 2px 2px rgba(0, 32, 51, 0.02), 0px 2px 8px rgba(0, 32, 51, 0.16)',
}

export default function ContentPaper ({children}) {
  return <div style={options}>{children}</div>
}