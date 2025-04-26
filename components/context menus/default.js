import React from 'react'

function DefaultMenu(props) {
    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <Devider />
            <a 
  href="https://www.linkedin.com/in/your-linkedin-id/" 
  target="_blank" 
  rel="noreferrer noopener" 
  className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.041-1.852-3.041-1.853 0-2.136 1.445-2.136 2.939v5.671h-3.554V9h3.414v1.561h.049c.476-.897 1.637-1.848 3.372-1.848 3.605 0 4.269 2.37 4.269 5.451v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.142.924-2.066 2.068-2.066 1.141 0 2.065.924 2.065 2.066 0 1.141-.924 2.067-2.065 2.067zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
  <span className="ml-2">
    Connect on <strong>LinkedIn</strong>
  </span>
</a>

            <a href="https://github.com/kabir0104k" target="_blank" rel="noreferrer noopener" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.107-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.312.469-2.383 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.839 1.235 1.91 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922.43.37.814 1.103.814 2.222v3.293c0 .321.218.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
  <span className="ml-2">
    Follow on <strong>Github</strong>
  </span>
</a>

<a 
  href="mailto:your-email@example.com" 
  target="_blank" 
  rel="noreferrer noopener" 
  className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
  <span className="ml-2">
    Mail Me <strong>Gmail</strong>
  </span>
</a>

            <Devider />
            <div onClick={() => { localStorage.clear(); window.location.reload(); }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block ml-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6V2L8 6l4 4V7c2.76 0 5 2.24 5 5 0 1.64-.8 3.09-2.03 4.03l1.42 1.42C18.07 16.07 19 14.13 19 12c0-3.87-3.13-7-7-7zm-5 5c0-1.64.8-3.09 2.03-4.03L7.61 5.55C5.93 7.23 5 9.17 5 11c0 3.87 3.13 7 7 7v4l4-4-4-4v3c-2.76 0-5-2.24-5-5z"/>
  </svg>
  <span className="ml-2">Restart</span>
</div>

        </div>
    )
}

function Devider() {
    return (
        <div className="flex justify-center w-full">
            <div className=" border-t border-gray-900 py-1 w-2/5"></div>
        </div>
    );
}

export default DefaultMenu
