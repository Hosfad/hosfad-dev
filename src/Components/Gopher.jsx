import React from "react";
import {useEffect} from "react";
function Gopher() {
  useEffect(() => {
    const rightEye = document.getElementById("right-eye");
    const rightCenterX = parseFloat(rightEye.getAttribute("x")) + parseFloat(rightEye.getAttribute("width")) / 2;
    const rightCenterY = parseFloat(rightEye.getAttribute("y")) + parseFloat(rightEye.getAttribute("height")) / 2;
   
    const leftEye = document.getElementById("left-eye");
    const leftCenterX = parseFloat(leftEye.getAttribute("x")) + parseFloat(leftEye.getAttribute("width")) / 2;
    const leftCenterY = parseFloat(leftEye.getAttribute("y")) + parseFloat(leftEye.getAttribute("height")) / 2;
   
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rightAngle = Math.atan2(mouseY - rightCenterY, mouseX - rightCenterX) * (180 / Math.PI);
      const leftAngle = Math.atan2(mouseY - leftCenterY, mouseX - leftCenterX) * (180 / Math.PI);
      rightEye.setAttribute("transform", `rotate(${rightAngle - 90}, ${rightCenterX}, ${rightCenterY})`);
      leftEye.setAttribute("transform", `rotate(${leftAngle - 90 }, ${leftCenterX}, ${leftCenterY})`);
   
    });
    
}, []);
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 -10.643 22.809 37.032"
  >
    <g id="layer5" display="inline" transform="translate(-4.188 -10.327)">
      <path
        id="path7056"
        fill="#f44336"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="0.629"
        d="M53.35 70.615c-15.296 1.114-29.672 9.15-29.871 16.268-.585-1.622-.856-2.437-.442-3.469-2.603 6.414-2.932 12.822-1.83 18.96-.594-.715-1.12-1.81-1.18-3.692-1.046 3.825 1.116 6.262 2.127 7.355 1.012 1.093 8.523 18.694 14.752 26.01l15.875-18.121 1.893-12.047c-3.338-5.387-6.645-8.15-10.738-9.443 1.784.98 2.51 2.856 3.668 4.253-9.726-6.098-14.463-6.174-15.91-6.755-3.752-1.715-3.47-4.677-.53-7.871.439-.346.997-1.558 3.398-1.313-.589-.25-1.099-.378-1.544-.428 4.353-3.663 11.77-7.387 20.332-9.707z"
        display="inline"
        opacity="1"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
    </g>
    <g
      id="layer3"
      strokeLinejoin="miter"
      strokeOpacity="1"
      display="inline"
      opacity="1"
      transform="translate(-4.188 -10.327)"
    >
      <path
        id="path7013"
        fill="#ff9800"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.265"
        d="M23.719 23.842s2.448 1.51 2.973 2.773c.525 1.264.284 3.499-.067 4.778-.35 1.279-1.215 2.525-2.238 3.558-1.023 1.032-3.61 1.534-5.329 1.754-.884.113-2.798-.603-4.212-1.65-1.335-.99-2.164-2.29-3.288-2.96-2.315-1.382-6.201-7.216-6.047-12.228.348.767.373 1.729 1.236 2.221.031-1.32.47-2.492-1.136-4.025 2.762.979 2.42 1.98 4.818 2.01 2.397.03 2.677 1.175 5.472 1.43z"
      ></path>
      <path
        id="path7011"
        fill="#ffeb3b"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.265"
        d="M23.251 26.114l-6.014 7.116-5.646-2.672c-1.356-1.461-2.903-2.566-3.675-5.112.38.154.616.548 1.237.3-.88-1.414-1.05-2.473-1.237-3.54.257.198.429.568.936.267l-1.136-2.44c.912.721 1.574 1.816 2.973 1.805.361-.327-.118-.758-.434-1.17 2.255.412 4.148 1.082 5.78 1.938z"
      ></path>
      <path
        id="path4520"
        fill="#795548"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M22.018 22.249c.393.25 1.435-.008 2.005.447.682.562.198 1.276 1.195 1.92.997.643 1.016 2.56.776 3.078-.241.517.399.994-.02 1.856-.419.861-.053 1.187-.164 2.197-.11 1.01-.336 1.028-.812 1.163-.476.136-.477.265-.722.886-.245.622-1.102 1.965-2.388 1.766-1.287-.2-1.365-.19-1.969.16-.603.351-1.29.518-1.777-.054-.487-.572-1.189-.699-1.788-.84-.598-.143-.8-.123-1.4-1.101-.6-.98-2.127-1.7-3.027-2.133-.9-.433-.654-.643-.807-1.272-.153-.628-.236-.972-.067-1.561.169-.59-.107-1.296-.473-2.36-.367-1.063.46-1.42.592-2.346.132-.927 1.146-1.532 2.043-1.927.896-.395 2.32-.356 3.175.094.855.45 1.198.487 1.867.445.67-.042.867-.52 1.481-.94.615-.42 1.886.272 2.28.522z"
      ></path>
      <path
        id="path4520-3"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeMiterlimit="4"
        strokeWidth="1.134"
        d="M80.637 104.297c-.8-.037-1.537.099-2.117.496-2.323 1.59-3.067 3.394-5.596 3.553-2.53.158-3.826.018-7.059-1.682s-8.492-1.9-11.879-.406v.008c-.038.016-.083.028-.12.045-3.387 1.493-7.223 3.778-7.721 7.279-.5 3.5-3.625 4.85-2.239 8.871 1.386 4.02 2.427 6.69 1.79 8.916-.638 2.227-.325 3.528.253 5.902.579 2.375-.356 3.171 3.047 4.807 3.403 1.636 9.172 4.361 11.44 8.06 2.268 3.7 3.034 3.624 5.296 4.16 2.263.537 4.915 1.016 6.754 3.179 1.84 2.162 4.437 1.53 6.72.205 2.28-1.326 2.576-1.36 7.439-.608 4.862.752 8.101-4.325 9.027-6.674.668-1.694.864-2.416 1.592-2.88-2.274.72-4.667.168-6.686-.592-2.359-.889-5.863 1.211-7.14 3.111-1.278 1.9-3.471 4.551-4.647 3.098-1.176-1.454-1.992-1.884-3.625-1.385-1.633.5-5.528-.37-7.488-4.348-1.96-3.977-6.632-2.46-7.365-4.82-.734-2.36 2.433-3.953 3.26-5.715.825-1.761 1.502-4.306-1.391-5.139-2.894-.832-2.827 1.82-4.368 1.543-1.54-.276-4.932-4.485-5.671-6.584-.74-2.098-2.362-8.525-.715-10.357 1.646-1.832 4.02-3.104 5.673-6.34 1.247.825 1.907 3.196 5.682 3.836-.493 15.84 27.586-9.226 33.192-3.672a4.237 4.237 0 00-1.26-1.707c-2.154-1.72-6.091-.747-7.58-1.691-1.117-.709-4.098-2.36-6.498-2.469zm15.338 5.867c.203.485.337.983.468 1.49 0 0-.013-.859-.468-1.49zm1.289 37.363a6.698 6.698 0 001.136-.466c-.501.142-.855.287-1.136.466z"
        opacity="0.3"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
      <path
        id="path6959"
        fill="#0e0e0e"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.265"
        d="M22.42 33.326c-.774.341-1.23.664-1.025 1.118.205.455.935 1.065 1.651.42.717-.645.148-1.88-.626-1.538z"
        opacity="0.4"
      ></path>
      <path
        id="path6959-8"
        fill="#0e0e0e"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.167"
        d="M18.496 34.866c.328-.42.596-.648.841-.453.246.196.505.736 0 1.073-.504.338-1.17-.2-.841-.62z"
        opacity="0.4"
      ></path>
      <path
        id="path6959-9"
        fill="#0e0e0e"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.265"
        d="M14.78 29.36c-.49.507-.806-.187-1.026.362-.22.549.864 1.159 1.58.514.717-.644-.064-1.383-.554-.876z"
        opacity="0.4"
      ></path>
      <path
        id="path6959-3"
        fill="#0e0e0e"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeWidth="0.265"
        d="M23.072 28.816c-.774.342-1.231.664-1.026 1.119.206.454.935 1.064 1.652.42.716-.645.148-1.88-.626-1.539z"
        display="inline"
        opacity="0.4"
      ></path>
      <path
        id="path4559"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M12.32 31.116c.041.22.157.36.365.445"
        opacity="0.375"
      ></path>
      <path
        id="path4576"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M12.911 31.66c1.264.527 2.227 1.317 2.756 2.489"
        opacity="0.3"
      ></path>
      <path
        id="path4597"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M24.938 24.87c.79.836.958 1.752.702 2.723"
        opacity="0.3"
      ></path>
      <path
        id="path4599"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M24.788 24.744c-.126-.079-.252-.157-.3-.267"
        opacity="0.3"
      ></path>
      <path
        id="path4599-6"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M24.532 24.768a.467.467 0 01-.224-.355"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-2"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M15.232 27.09c.125-.079.252-.157.3-.267"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-6-1"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M15.563 27.04a.467.467 0 00.224-.357"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-2-1"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M22.085 29.138a.787.787 0 00-.276.325"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-2-1-5"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M22.669 28.798c-.072.033-.173.078-.238.134"
        display="inline"
        opacity="0.3"
      ></path>
    </g>
    <a  className="inline-block releative gopher hover:animate-bounce" >
    <g id="layer4" strokeOpacity="1" transform="translate(-4.188 -10.327)">
      <path
        id="path9538"
        fill="#81d4fa"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M20.052 12.187l.68-.402c-1.21-2.295-2.523-1.188-.68.402z"
        display="inline"
      ></path>
      <path
        id="path9538-5"
        fill="#81d4fa"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M15.158 12.927c.01.295-.14.486-.323.655-2.269-.598-.885-2.775.323-.655z"
        display="inline"
      ></path>
      <path
        id="path9538-5-9"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="1.134"
        d="M57.176 68.102c-2.415-.022-3.052 4.213 2.553 5.828-1.588-1.841-2.718-3.67-1.227-5.428-.476-.268-.927-.397-1.326-.4z"
        display="inline"
        opacity="0.15"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
      <path
        id="path7191-0-7"
        fill="#dbb69a"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M23.398 21.207c.225-.028 1.839.736 1.611 1.208-.228.471-2.164-.08-2.283-.207-.251-.27.247-.948.672-1z"
        display="inline"
        opacity="1"
      ></path>
      <path
        id="path7191-01"
        fill="#dbb69a"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M23.158 19.024c2.039-1.389 1.357-3.128-.785-.776.032.648.335.72.785.776z"
        display="inline"
        opacity="1"
      ></path>
      <path
        id="path4522"
        fill="#81d4fa"
        fillOpacity="1"
        stroke="#010101"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M23.718 18.495c.969 5.185-.918 3.726-3.508 5.108-2.59 1.382-5.14.581-6.049-4.218-.908-4.8.25-7.221 4.478-7.93 4.227-.709 4.391 3.359 5.079 7.04z"
        opacity="1"
        paintOrder="normal"
      ></path>
      <path
        id="path6378"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="0.105"
        d="M18.67 13.592l.236 4.417c-1.192.092-2.573-.582-2.484-2.245.09-1.663 1.449-2.107 2.248-2.172z"
        display="inline"
        opacity="0.15"
      ></path>
      <path
        id="path9334-8"
        fill="#fff"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M22.135 15.595c.122 1.085.417 1.943 1.503 1.821a1.978 1.978 0 10-.442-3.931c-1.085.122-1.183 1.024-1.061 2.11z"
        display="inline"
        opacity="1"
        paintOrder="normal"
      ></path>
      <circle
        id="path9334"
        cx="-17.077"
        cy="17.811"
        r="2.221"
        fill="#fff"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        display="inline"
        opacity="1"
        paintOrder="normal"
        transform="scale(-1 1) rotate(6.413)"
      ></circle>
      <path
        id="path9334-5"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.198"
        d="M18.67 13.592c-1.505.63-1.904 3.515.236 4.417a2.22 2.22 0 01-2.154-1.97 2.22 2.22 0 011.918-2.447z"
        display="inline"
        opacity="0.15"
        paintOrder="normal"
      ></path>
      <path
        id="path9334-8-9"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.198"
        d="M22.817 13.573c-.694.955-.21 3.494.58 3.853-.89-.025-1.15-.831-1.262-1.831-.106-.943-.046-1.747.682-2.022z"
        display="inline"
        opacity="0.15"
        paintOrder="normal"
      ></path>
      <path
        id="path8279"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="0.095"
        d="M22.393 19.304c-.119.755-.423.638-.71.505-.297-.14-.214-.529-.365-.63-.152-.1-1.066-.974-.181-1.317l.902-.048z"
        opacity="0.15"
      ></path>
      <path
        id="path7331"
        fill="#fff"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M22.376 18.172s.467 1.178.128 1.417c-.339.238-.658.164-.903-.183-.244-.347.526-1.29.526-1.29z"
        opacity="1"
      ></path>
      <path
        id="path7331-4"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.179"
        d="M22.127 18.116l.249.056s.113.286.188.605c-.438.117-.83.276-.786.822a.933.933 0 01-.177-.193c-.244-.347.526-1.29.526-1.29z"
        opacity="0.15"
      ></path>
      <path
        id="path7313-1"
        fill="#dbb69a"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M21.146 18.669c.468.608.597-.02.994-.072.397-.053.412.29.788-.202.377-.493-.231-.943-.957-.846-.725.097-1.294.512-.825 1.12z"
        opacity="1"
        paintOrder="normal"
      ></path>
      <path
        id="path7313-1-0"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.413"
        d="M21.708 17.6c.047-.012.094-.022.143-.031-.206.252-.575.864.278 1.03-.388.063-.52.672-.983.07-.41-.532-.026-.917.562-1.07z"
        opacity="0.15"
        paintOrder="normal"
      ></path>
      <path
        id="path7313"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="0.589"
        d="M21.455 17.522c.038.283.67.455.925.421.256-.034.553-.33.515-.613-.038-.283-.133-.438-.765-.354-.633.085-.713.264-.675.546z"
        opacity="1"
        paintOrder="normal"
      ></path>
      <path
        id="path8086"
        fill="none"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="0.095"
        d="M22.13 18.6c.095.31.134.634.098 1.116"
        opacity="1"
      ></path>
      <path
        id="path4522-3"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="1.134"
        d="M69.594 67.074c-12.053 3.664-15.212 12.688-12.15 28.867 2.81 14.855 9.78 19.57 17.59 17.924a17.109 17.109 0 01-3.985-2.868 19.93 19.93 0 01-1.636-1.773c-10.365-12.664-8.011-39.635.18-42.15z"
        opacity="0.15"
        paintOrder="normal"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
      <path
        id="path7191"
        fill="#dbb69a"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M13.949 17.324c-2.442-.353-3.114 1.39.054 1.103.414-.5.24-.758-.054-1.103z"
        display="inline"
        opacity="1"
      ></path>
      <path
        id="path7191-0"
        fill="#dbb69a"
        fillOpacity="1"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.3"
        d="M16.905 23.284c-.171.148-.682 1.86-.179 2.005.503.146 1.388-1.662 1.372-1.836-.033-.367-.87-.45-1.193-.17z"
        display="inline"
        opacity="1"
      ></path>
      <path
        id="path7191-0-0"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="1.134"
        d="M69.744 110.047c-.742.027-1.474.232-1.933.63-.646.56-2.575 7.03-.674 7.58.01.004 1.943-1.117 1.954-1.114-.283-1.81-.598-4.654 1.12-7.077-.155-.01-.31-.025-.467-.02z"
        display="inline"
        opacity="0.15"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
      <path
        id="path7191-3"
        fill="#070503"
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="1.134"
        d="M54.773 87.96c-7.84-.379-9.37 5.347 1.856 4.33.427-.517.717-.49.848-.896 0 0-5.766 1.052-5.897-.892-.131-1.944 5.613-1.658 5.613-1.658-.204-.388-.419-.307-.771-.721a17.418 17.418 0 00-1.649-.162z"
        display="inline"
        opacity="0.15"
        transform="matrix(.26458 0 0 .26458 -1.037 -6)"
      ></path>
      <path
        id="path4599-5"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M23.018 22.141c.105-.105.21-.21.233-.328"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-6-8"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M23.32 22.012a.467.467 0 00.138-.397"
        display="inline"
        opacity="0.3"
      ></path>
      <path
        id="path4599-6-8-1"
        fill="none"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.1"
        d="M18.849 23.72a.467.467 0 01-.4-.127"
        display="inline"
        opacity="0.3"
      ></path>
    </g>
    <image
    id="left-eye"
      width="2"
      height="2"
      x="14.275"
      y="5.028"
      xlinkHref="data:image/png;base64,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"
    ></image>
    <image
      id="right-eye"
      width="1.8"
      height="1.8"
      x="18.817"
      y="4.757"
      xlinkHref="data:image/png;base64,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"
    ></image>
    </a>
    
   
  </svg>
  );
}

export default Gopher;