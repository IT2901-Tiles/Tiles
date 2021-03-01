import React from 'react';

function Tpv (){
    return(
        <div className="tpv">
            <h1>Temperature, pen, vibrate</h1>
            <svg height="400" width="300">
            {/* Background*/}
            <g>
                    <rect id="wall" width="300" height="400" fill="#b3e6ff" />
                    <g id="bookshelf">
                        <rect width="130" height="400" fill="#242424" />
                        <rect x="9" y="9" width="111" height="46" fill="#000000" />
                        <rect x="9" y="64" width="111" height="56" fill="#000000" />
                        <rect x="9" y="129" width="111" height="56" fill="#000000" />
                        <rect x="9" y="194" width="111" height="56" fill="#000000" />
                        <rect x="10" y="10" width="10" height="45" fill="#ffb3b3" />
                        <rect x="20" y="12" width="9" height="43" fill="#698e69" />
                        <rect x="29" y="14" width="11" height="41" fill="#f7f3c2" />
                        <rect x="40" y="10" width="9" height="45" fill="#84c1c7" />
                        <rect x="110" y="75" width="9" height="45" fill="#90ba90" />
                        <rect x="98" y="79" width="12" height="41" fill="#555555" />
                        <rect x="88" y="78" width="10" height="42" fill="#2f7078" />
                        <rect x="73" y="79" width="15" height="41" fill="#d39d9d" />
                        <rect x="64" y="75" width="10" height="45" fill="#fff7b8" />
                        <rect x="30" y="175" width="65" height="10" fill="#6294a5" />
                        <rect x="32" y="166" width="61" height="9" fill="#dad5ba" />
                        <rect x="34" y="156" width="57" height="10" fill="#6b7d49" />
                    </g>
                    <rect id="table" x="0" y="210 " width="300" height="300" fill="#5e432d" />
                    <rect id="paper" x="0" y="235" width="300" height="300" fill="#ffffff" stroke="#000000" transform="rotate(-10,150,300)" />
                    <g id="text" xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,354.000000) scale(0.100000,-0.100000) rotate(10,150,300)" fill="#000000" stroke="none">
                        <path d="M1723 805 c-33 -23 -53 -89 -65 -212 l-11 -113 -64 -32 c-51 -25 -71 -30 -109 -25 -64 7 -74 20 -41 54 33 35 61 99 46 108 -37 23 -99 -41 -99 -103 0 -47 -46 -74 -116 -69 -65 4 -119 39 -109 71 38 122 53 281 25 281 -18 0 -36 -58 -45 -147 -7 -67 -8 -68 -37 -68 -38 0 -98 -57 -98 -92 0 -36 -66 -64 -142 -61 -64 3 -98 16 -98 38 0 8 34 40 75 71 41 31 75 61 75 67 0 18 -71 -1 -107 -29 -19 -15 -44 -42 -55 -60 -10 -18 -35 -44 -54 -59 l-34 -26 0 27 c0 47 -23 105 -47 121 -29 19 -63 7 -89 -32 -20 -30 -45 -142 -36 -163 4 -11 1 -13 -7 -7 -9 5 -11 20 -6 49 20 129 15 214 -13 224 -9 3 -12 -24 -13 -100 l-2 -103 -14 95 c-7 52 -17 128 -21 168 -4 40 -11 72 -17 70 -5 -1 -15 -23 -22 -49 -7 -26 -32 -98 -55 -158 -40 -103 -45 -111 -70 -111 -37 0 -45 -18 -14 -30 23 -8 25 -12 16 -35 -12 -32 -13 -65 -2 -65 5 0 12 19 18 43 6 30 13 41 24 38 77 -19 146 -11 152 17 2 9 11 -20 21 -65 19 -88 37 -109 37 -43 0 38 1 40 33 40 36 0 115 35 167 74 28 22 37 24 45 13 16 -22 46 -34 103 -41 42 -5 62 -2 99 14 25 11 47 19 47 18 20 -54 56 -60 100 -16 18 18 35 40 38 48 4 12 11 9 37 -12 54 -46 142 -50 199 -9 26 18 30 19 45 4 8 -9 37 -18 64 -20 39 -4 59 1 108 26 68 35 81 35 31 0 -19 -13 -40 -34 -45 -47 -25 -53 -5 -121 44 -161 46 -36 54 -21 57 107 l3 117 75 27 c41 15 79 27 84 27 4 1 5 -15 2 -34 -6 -29 -3 -36 20 -51 21 -15 31 -16 56 -6 26 10 29 9 23 -6 -4 -9 -16 -42 -27 -73 -19 -55 -21 -58 -78 -79 -64 -24 -89 -43 -70 -55 22 -13 82 6 118 39 20 18 58 47 83 64 50 33 87 77 132 156 22 39 27 44 22 22 -9 -41 -25 -184 -25 -223 0 -47 16 -41 24 9 6 39 69 172 101 214 13 17 14 10 15 -66 0 -47 5 -92 10 -100 12 -18 11 -21 10 110 -1 58 -5 109 -9 113 -8 8 -50 -52 -95 -137 -30 -56 -41 -70 -33 -41 3 11 8 37 12 58 3 21 10 35 16 32 5 -4 9 41 9 114 0 125 -14 166 -22 62 -6 -85 -64 -199 -140 -275 -32 -32 -61 -56 -64 -53 -3 3 9 45 26 93 43 124 43 124 34 124 -5 0 -18 -17 -29 -37 -24 -46 -67 -65 -91 -41 -21 21 -6 72 22 76 50 7 64 14 64 27 0 19 -48 20 -75 2 -11 -8 -49 -22 -85 -31 -36 -10 -77 -25 -92 -32 -35 -18 -36 -3 -2 33 36 38 101 177 109 236 11 71 -28 100 -82 62z m60 -58 c-3 -52 -55 -175 -92 -217 l-22 -25 6 70 c8 92 32 185 52 208 9 10 26 17 37 15 18 -3 21 -9 19 -51z m-613 -117 c-7 -49 -16 -90 -20 -90 -7 0 -4 35 12 128 16 95 23 65 8 -38z m-760 -88 l16 -117 -59 -3 c-33 -2 -62 -1 -65 2 -2 3 15 59 39 125 24 65 46 117 48 115 3 -2 12 -57 21 -122z m1046 1 c-9 -16 -24 -39 -35 -53 l-21 -25 0 26 c0 30 34 79 56 79 13 0 13 -4 0 -27z m-976 -43 c0 -19 -5 -42 -10 -50 -7 -11 -10 4 -10 50 0 46 3 61 10 50 5 -8 10 -31 10 -50z m385 52 c-44 -38 -95 -72 -95 -63 0 12 77 71 94 71 6 0 6 -3 1 -8z m-250 -35 c24 -37 30 -110 11 -129 -16 -16 -115 -43 -124 -33 -11 11 23 129 45 156 30 35 48 37 68 6z m515 -7 c0 -11 -6 -20 -13 -20 -7 0 -30 -9 -52 -20 -22 -11 -41 -20 -42 -20 -10 0 1 23 23 49 31 38 84 44 84 11z m-19 -69 c-42 -59 -91 -79 -91 -38 0 19 12 29 53 50 28 14 54 24 56 22 2 -2 -7 -18 -18 -34z m539 -116 c0 -88 -2 -103 -15 -99 -25 10 -55 69 -55 108 0 28 7 45 29 67 16 16 32 29 35 29 3 0 6 -47 6 -105z m-1221 69 c9 -8 -115 -2 -134 6 -12 6 9 7 55 3 41 -3 77 -7 79 -9z m1411 -169 c-14 -8 -32 -14 -40 -14 -8 0 -1 7 15 14 39 18 57 18 25 0z" />
                    </g>
                </g>
                <g id="thermometer">
                    {/*The background of the thermometer */ }
                    <rect x="180" y="30" width="67.5" height="166" fill="#555555"/>
                    <rect x="200" y="40" width="27.5" height="120" fill="white"/>
                    <circle cx="213" cy="160" r="25" fill="white" />
                    <line x1="205" y1="50" x2="222" y2="50" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="60" x2="222" y2="60" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="70" x2="222" y2="70" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="80" x2="222" y2="80" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="90" x2="222" y2="90" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="100" x2="222" y2="100" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="110" x2="222" y2="110" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="120" x2="222" y2="120" stroke="black" strokeWidth="1"/>
                    <line x1="205" y1="130" x2="222" y2="130" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="213.5" y1="160" x2="213.5" y2="110" stroke="black" strokeWidth="10">
                        <animate 
                            attributeName="y2"
                            dur = "10s"
                            repeatCount = "indefinite"
                            values="145; 50; 145"
                            keyTimes="0;0.5;1"
                        />
                        <animate 
                            attributeName = "stroke"
                            dur = "10s"
                            repeatCount="indefinite"
                            values="blue;red;blue;"
                        />
                    </line>
                    <circle cx="213" cy="160" r="15" fill="black" >
                        <animate
                            attributeName="fill"
                            values="blue;red;blue;"
                            dur="10s"
                            repeatCount="indefinite"/>
                    </circle>
                </g>

                <g id="pen">
                    <rect x="200" y="230" height="110" width="30" fill="#ffb3b3" transform="rotate(10 215 285)"/>

                    <polygon points="200 340, 230 340, 215 360" fill="#FFE5A5" transform="rotate(10 215 285)"/>
                    <polygon points="208 350, 222 350, 215 360" fill="black" transform="rotate(10 215 285)"/>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        keyTimes = "0;0.05; 0.1;0.15;0.2;0.25;0.3; 1"
                        values = "0 215 322.5; 10 215 322.5; -10 215 322.5;10 215 322.5; -10 215 322.5;10 215 322.5; 0 215 322.5;0 215 322.5"
                        begin = "3s"
                        dur="10s"
                        repeatCount= "indefinite"
                        />

                </g>


            </svg>
        </div>
    )
}

export default Tpv;