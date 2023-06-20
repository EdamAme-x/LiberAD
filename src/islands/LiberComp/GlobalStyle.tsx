
export default function GlobalStyle() {

  const style = `
  
  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #333;
    border-radius: 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
  
  ::-webkit-scrollbar-corner {
    background-color: #333;
    border-radius: 8px;
    opacity: 0.8;
  }
  
  ::-webkit-scrollbar-resizer {
    background-color: #333;
    border-radius: 8px;
    opacity: 0.8;
  }`;

  return (
    <style>
        {style}
    </style>
  )
}