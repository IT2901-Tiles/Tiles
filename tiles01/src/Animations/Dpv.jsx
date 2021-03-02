import React from 'react';
import BookShelf from './BookShelf';

function Dpv() {
    return (
        <div>
            <h1>Drop, Pen/pencil, Vibration</h1>
            <svg height="400" width="300">
                <g>
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <BookShelf/>
                    <rect x="0" y="210 " width="300" height="300" fill="#5e432d" />
                    <rect x="0" y="235" width="300" height="300" fill="#ffffff" stroke="#000000" transform="rotate(-10,150,300)" />
                    <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,354.000000) scale(0.100000,-0.100000) rotate(10,150,300)" fill="#000000" stroke="none">
                        <path d="M1723 805 c-33 -23 -53 -89 -65 -212 l-11 -113 -64 -32 c-51 -25 -71 -30 -109 -25 -64 7 -74 20 -41 54 33 35 61 99 46 108 -37 23 -99 -41 -99 -103 0 -47 -46 -74 -116 -69 -65 4 -119 39 -109 71 38 122 53 281 25 281 -18 0 -36 -58 -45 -147 -7 -67 -8 -68 -37 -68 -38 0 -98 -57 -98 -92 0 -36 -66 -64 -142 -61 -64 3 -98 16 -98 38 0 8 34 40 75 71 41 31 75 61 75 67 0 18 -71 -1 -107 -29 -19 -15 -44 -42 -55 -60 -10 -18 -35 -44 -54 -59 l-34 -26 0 27 c0 47 -23 105 -47 121 -29 19 -63 7 -89 -32 -20 -30 -45 -142 -36 -163 4 -11 1 -13 -7 -7 -9 5 -11 20 -6 49 20 129 15 214 -13 224 -9 3 -12 -24 -13 -100 l-2 -103 -14 95 c-7 52 -17 128 -21 168 -4 40 -11 72 -17 70 -5 -1 -15 -23 -22 -49 -7 -26 -32 -98 -55 -158 -40 -103 -45 -111 -70 -111 -37 0 -45 -18 -14 -30 23 -8 25 -12 16 -35 -12 -32 -13 -65 -2 -65 5 0 12 19 18 43 6 30 13 41 24 38 77 -19 146 -11 152 17 2 9 11 -20 21 -65 19 -88 37 -109 37 -43 0 38 1 40 33 40 36 0 115 35 167 74 28 22 37 24 45 13 16 -22 46 -34 103 -41 42 -5 62 -2 99 14 25 11 47 19 47 18 20 -54 56 -60 100 -16 18 18 35 40 38 48 4 12 11 9 37 -12 54 -46 142 -50 199 -9 26 18 30 19 45 4 8 -9 37 -18 64 -20 39 -4 59 1 108 26 68 35 81 35 31 0 -19 -13 -40 -34 -45 -47 -25 -53 -5 -121 44 -161 46 -36 54 -21 57 107 l3 117 75 27 c41 15 79 27 84 27 4 1 5 -15 2 -34 -6 -29 -3 -36 20 -51 21 -15 31 -16 56 -6 26 10 29 9 23 -6 -4 -9 -16 -42 -27 -73 -19 -55 -21 -58 -78 -79 -64 -24 -89 -43 -70 -55 22 -13 82 6 118 39 20 18 58 47 83 64 50 33 87 77 132 156 22 39 27 44 22 22 -9 -41 -25 -184 -25 -223 0 -47 16 -41 24 9 6 39 69 172 101 214 13 17 14 10 15 -66 0 -47 5 -92 10 -100 12 -18 11 -21 10 110 -1 58 -5 109 -9 113 -8 8 -50 -52 -95 -137 -30 -56 -41 -70 -33 -41 3 11 8 37 12 58 3 21 10 35 16 32 5 -4 9 41 9 114 0 125 -14 166 -22 62 -6 -85 -64 -199 -140 -275 -32 -32 -61 -56 -64 -53 -3 3 9 45 26 93 43 124 43 124 34 124 -5 0 -18 -17 -29 -37 -24 -46 -67 -65 -91 -41 -21 21 -6 72 22 76 50 7 64 14 64 27 0 19 -48 20 -75 2 -11 -8 -49 -22 -85 -31 -36 -10 -77 -25 -92 -32 -35 -18 -36 -3 -2 33 36 38 101 177 109 236 11 71 -28 100 -82 62z m60 -58 c-3 -52 -55 -175 -92 -217 l-22 -25 6 70 c8 92 32 185 52 208 9 10 26 17 37 15 18 -3 21 -9 19 -51z m-613 -117 c-7 -49 -16 -90 -20 -90 -7 0 -4 35 12 128 16 95 23 65 8 -38z m-760 -88 l16 -117 -59 -3 c-33 -2 -62 -1 -65 2 -2 3 15 59 39 125 24 65 46 117 48 115 3 -2 12 -57 21 -122z m1046 1 c-9 -16 -24 -39 -35 -53 l-21 -25 0 26 c0 30 34 79 56 79 13 0 13 -4 0 -27z m-976 -43 c0 -19 -5 -42 -10 -50 -7 -11 -10 4 -10 50 0 46 3 61 10 50 5 -8 10 -31 10 -50z m385 52 c-44 -38 -95 -72 -95 -63 0 12 77 71 94 71 6 0 6 -3 1 -8z m-250 -35 c24 -37 30 -110 11 -129 -16 -16 -115 -43 -124 -33 -11 11 23 129 45 156 30 35 48 37 68 6z m515 -7 c0 -11 -6 -20 -13 -20 -7 0 -30 -9 -52 -20 -22 -11 -41 -20 -42 -20 -10 0 1 23 23 49 31 38 84 44 84 11z m-19 -69 c-42 -59 -91 -79 -91 -38 0 19 12 29 53 50 28 14 54 24 56 22 2 -2 -7 -18 -18 -34z m539 -116 c0 -88 -2 -103 -15 -99 -25 10 -55 69 -55 108 0 28 7 45 29 67 16 16 32 29 35 29 3 0 6 -47 6 -105z m-1221 69 c9 -8 -115 -2 -134 6 -12 6 9 7 55 3 41 -3 77 -7 79 -9z m1411 -169 c-14 -8 -32 -14 -40 -14 -8 0 -1 7 15 14 39 18 57 18 25 0z" />
                    </g>

                    <g transform="scale(.49235) translate(300)" >
                        <g
                            id="g5121"
                            transform="matrix(.67518 -.37512 .31950 .78160 87.399 220.22)"
                        >
                            <path
                                id="path5123"
                                stroke="#502d16" strokeWidth="6.2133" fill="#e5cec1"
                                d="m252-62.281c-7.37 0.027-15.48 0.37-31.38 4.187-7.68 2.863-18.4 4.474-26.12 8.406-58.46 6.753-84.55 15.698-90.06 20.657-19.306 19.992-35.958 40.282-48.409 59.343-8.975 13.741-15.771 26.832-19.781 38.719-4.989 13.127-21.59 25.507-1.25 34.529 17.363 3.44 25.641 3.87 57.656-43.779 0.845-0.492 1.634-1.004 2.438-1.5 19.096-11.788 26.586-24.448 32.906-37.219 18.76 3.255 45.71 3.426 55.56-3.374 9.81 2.508 17.32 6.662 23.6 12.656 1.57-1.993 3.47-3.53 6.68-5.938 3.91-2.929 8.82-7.446 13.47-10.937 3.35-2.508 7.65-6.0455 9.25-9.2502 2.44-4.8723 7.62-8.5199 10.1-13.469 3.83-7.6638 10.32-13.195 13.46-21.062 2.91-7.263 6.62-14.152 9-21.469-4.74-3.587-9.44-7.099-14-10.5-1.04-0.001-2.07-0.004-3.12 0z"
                            />
                            <path
                                id="path5125"
                                fill="#dabdac"
                                d="m210.16-25.031c-0.49-0.008-0.99 0.019-1.47 0.031-26.2 6.761-46.11 14.955-91.66 17.25-10.53 22.901-24.419 37.216-40.499 45.844-1.729 15.964-8.478 26.868-13.375 37.781-10.372 16.373-31.57 33.205-36.031 14.313-6.551 12.292 8.089 15.672 20.844 14.282 16.705-1.56 36.055-33.106 42.562-48.532 21.269-5.572 30.049-20.988 36.309-38.969 33.95 10.989 46.68 4.427 58.04-3.281 12.84 4.682 23.3 11.159 30.24 23.281 4.48-3.682 9.2-6.545 13.85-10.031 4.11-3.081 10.95-9.287 13.47-14.313 2.41-4.8166 7.18-8.5692 10.12-13.469 0.6-1.0019 1.13-2.1507 1.66-3.3435-12.79-11.364-29.09-20.616-44.06-20.844z"
                            />
                            <path
                                id="path5127"
                                fill="#502d16"
                                d="m203.75-13.344c-14.56 14.351-11.25 29.48-46.94 34.875-32.13 5.707-27.59-19.167-40.37-29.281 16.93 24.196 12.75 32.922-5.25 50.188-17.058 17.762-17.79 12.828-28.315 5.031 5.697 8.313 15.216 5.06-6.156 34.25-17.797 20.991-27.23 21.871-42.625 22.781l13.875 1.88c14.01-4.21 25.91-18.952 32.343-27.005l14.188-20.219c15.15-7.307 25.83-22.401 35.44-38.562 17.54 4.062 37.47 2.789 53.75-1.563 11.18 4.969 22.3 7.812 30 18.75 1.19-0.731 2.35-1.308 3.5-1.593 3.61-0.903 5.49-4.405 8.43-5.876 0.04-0.018 0.09-0.043 0.13-0.062-1.41-0.756-3.15-1.435-5.31-2-26.45-5.007-25.23-18.496-16.69-41.594z"
                            />
                        </g>
                        <g
                            id="g5113"
                            transform="matrix(.62625 -.45210 .40942 .73849 58.849 226.34)"
                        >
                            <path
                                id="path5115"
                                stroke="#502d16" strokeWidth="6.2133" fill="#e5cec1"
                                d="m252-62.281c-7.37 0.027-15.48 0.37-31.38 4.187-7.68 2.863-18.4 4.474-26.12 8.406-58.46 6.753-84.55 15.698-90.06 20.657-19.306 19.992-35.958 40.282-48.409 59.343-8.975 13.741-15.771 26.832-19.781 38.719-4.989 13.127-21.59 25.507-1.25 34.529 17.363 3.44 25.641 3.87 57.656-43.779 0.845-0.492 1.634-1.004 2.438-1.5 19.096-11.788 26.586-24.448 32.906-37.219 18.76 3.255 45.71 3.426 55.56-3.374 9.81 2.508 29.74 10.277 36.02 16.271 1.57-1.992-8.95-7.145-5.74-9.553 3.91-2.929 8.82-7.446 13.47-10.937 3.35-2.508 7.65-6.0455 9.25-9.2502 2.44-4.8723 7.62-8.5199 10.1-13.469 3.83-7.6638 10.32-13.195 13.46-21.062 2.91-7.263 6.62-14.152 9-21.469-4.74-3.587-9.44-7.099-14-10.5-1.04-0.001-2.07-0.004-3.12 0z"
                            />
                            <path
                                id="path5117"
                                fill="#dabdac"
                                d="m210.16-25.031c-0.49-0.008-0.99 0.019-1.47 0.031-26.2 6.761-46.11 14.955-91.66 17.25-10.53 22.901-24.419 37.216-40.499 45.844-1.729 15.964-8.478 26.868-13.375 37.781-10.372 16.373-31.57 33.205-36.031 14.313-6.551 12.292 8.089 15.672 20.844 14.282 16.705-1.56 36.055-33.106 42.562-48.532 21.269-5.572 30.049-20.988 36.309-38.969 33.95 10.989 46.68 4.427 58.04-3.281 12.84 4.682 23.3 11.159 30.24 23.281 4.48-3.682 9.2-6.545 13.85-10.031 4.11-3.081 10.95-9.287 13.47-14.313 2.41-4.8166 7.18-8.5692 10.12-13.469 0.6-1.0019 1.13-2.1507 1.66-3.3435-12.79-11.364-29.09-20.616-44.06-20.844z"
                            />
                            <path
                                id="path5119"
                                fill="#502d16"
                                d="m203.75-13.344c-14.56 14.351-11.25 29.48-46.94 34.875-32.13 5.707-27.59-19.167-40.37-29.281 16.93 24.196 12.75 32.922-5.25 50.188-17.058 17.762-17.79 12.828-28.315 5.031 5.697 8.313 15.216 5.06-6.156 34.25-17.797 20.991-27.23 21.871-42.625 22.781l13.875 1.88c14.01-4.21 25.91-18.952 32.343-27.005l14.188-20.219c15.15-7.307 25.83-22.401 35.44-38.562 17.54 4.062 37.47 2.789 53.75-1.563 11.18 4.969 27.26 12.559 43.43 21.846 1.19-0.731-0.2 0.546 0.95 0.261 3.6-0.903-5.39-9.355-2.45-10.826 0.04-0.018 0.09-0.043 0.13-0.062-1.41-0.756-3.15-1.435-5.31-2-26.45-5.007-25.23-18.496-16.69-41.594z"
                            />
                        </g>
                        <g
                            id="g7241"
                            transform="matrix(.85951 -.37026 .36424 .88202 21.911 202.28)"
                        >
                            <path
                                id="path7243"
                                stroke="#8a4a01" strokeWidth="5.2912" fill="#e5cec1"
                                d="m250.79-59.416c-7.37 0.027-14.27-2.495-30.17 1.322-7.68 2.863-18.4 4.474-26.12 8.406-58.46 6.753-84.55 15.698-90.06 20.657-19.306 19.992-35.958 40.282-48.409 59.343-8.975 13.741-15.771 26.832-19.781 38.719-4.989 13.127-21.59 25.507-1.25 34.529 17.363 3.44 25.641 3.87 57.656-43.779 0.845-0.492 1.634-1.004 2.438-1.5 19.096-11.788 26.586-24.448 32.906-37.219 18.76 3.255 45.3 3.252 55.15-3.549 9.81 2.509 25.97 9.343 32.25 15.337 1.57-1.993-4.77-6.036-1.56-8.444 3.91-2.929 8.82-7.446 13.47-10.937 3.35-2.508 7.65-6.0455 9.25-9.2502 2.44-4.8723 7.62-8.5199 10.1-13.469 3.83-7.6638 10.32-13.195 13.46-21.062 2.91-7.263 6.62-14.152 9-21.469-4.74-3.587-8.91-3.841-13.47-7.243-1.04-0.001-3.81-0.396-4.86-0.392z"
                            />
                            <path
                                id="path7245"
                                fill="#dabdac"
                                d="m210.16-25.031c-0.49-0.008-0.99 0.019-1.47 0.031-26.2 6.761-46.11 14.955-91.66 17.25-10.53 22.901-24.419 37.216-40.499 45.844-1.729 15.964-8.478 26.868-13.375 37.781-10.372 16.373-31.57 33.205-36.031 14.313-6.551 12.292 8.089 15.672 20.844 14.282 16.705-1.56 36.055-33.106 42.562-48.532 21.269-5.572 30.049-20.988 36.309-38.969 33.95 10.989 41.11 2.563 60.06 2.341 12.84 4.683 21.28 5.537 28.22 17.659 4.48-3.682 9.2-6.545 13.85-10.031 4.11-3.081 10.95-9.287 13.47-14.313 2.41-4.8166 7.18-8.5692 10.12-13.469 0.6-1.0019 1.13-2.1507 1.66-3.3435-12.79-11.364-29.09-20.616-44.06-20.844z"
                            />
                            <path
                                id="path7247"
                                fill="#502d16"
                                d="m191.67-10.99c5.88 30.835-1.24 32.009-34.86 32.521-32.13 5.707-27.59-19.167-40.37-29.281 16.93 24.196 12.75 32.922-5.25 50.188-17.058 17.762-17.79 12.828-28.315 5.031 5.697 8.313 15.216 5.06-6.156 34.25-17.797 20.991-27.23 21.871-42.625 22.781l13.875 1.88c14.01-4.21 25.91-18.952 32.343-27.005l14.188-20.219c15.15-7.307 25.83-22.401 35.44-38.562 17.54 4.062 37.47 2.789 53.75-1.563 11.18 4.969 23.41 6.366 31.1 17.304 1.19-0.731 1.25 0.138 2.4-0.147 3.61-0.903 5.49-4.405 8.43-5.876 0.04-0.018 0.09-0.043 0.13-0.062-1.41-0.756-3.15-1.435-5.31-2-6-10.24-13.86-13.167-28.77-39.24z"
                            />
                        </g>
                        <g
                            id="g7125"
                        >
                            <path
                                id="path6235"
                                stroke="#8a4a01" strokeWidth="5" fill="#e5cec1"
                                d="m257 48c-7.37 0.028-15.48 0.371-31.38 4.188-7.68 2.862-18.39 4.479-26.11 8.411-58.46 6.753-84.56 15.692-90.07 20.651-19.306 19.99-35.958 40.28-48.409 59.34-8.975 13.74-15.771 26.84-19.781 38.72-4.989 13.13-21.59 25.51-1.25 34.53 17.363 3.44 25.641 3.88 57.656-43.78 0.845-0.49 1.634-1 2.434-1.5 19.1-11.79 26.59-24.45 32.91-37.22 18.76 3.26 45.71 3.43 55.56-3.37 17.81 4.55 28.09 14.45 37.06 31.15 2.4 36.51-27.67 70.46-16.84 83.32 66.93 24.83 173 26.85 226.81 79.97l10.6-125c-61.3-53.27-131.09-108.39-186.07-149.41-1.04-0.001-2.07-0.004-3.12 0z"
                            />
                            <path
                                id="path7048"
                                fill="#dabdac"
                                d="m122.03 102.53c-10.53 22.9-24.398 37.21-40.477 45.84-1.73 15.96-8.506 26.88-13.403 37.79-10.372 16.37-31.544 33.19-36.005 14.29-6.551 12.3 8.08 15.69 20.835 14.29 16.705-1.56 36.055-33.09 42.562-48.51 21.268-5.57 30.048-21.01 36.308-38.99 33.95 10.99 46.69 4.43 58.04-3.28 17.45 6.37 30.51 16.03 36.32 38.69-1.53 37.27-12.61 39.99-19.05 58.94 37.73-4.69 78.65-28.21 75-80.96-0.48-17.46-37.69-56.107-68.46-55.361-26.19 6.761-46.12 14.971-91.67 17.261z"
                            />
                            <path
                                id="path7050"
                                fill="#dabdac"
                                d="m362.42 130.07l82.92 67.76c15.14 69.35 1.81 128.74-9.26 126.28-23.26-17.64-30.9-29.97-62.72-35.36l-11.79-21.46c22.71 16.53 49.5 18.47 50.94 5.89 11.99-62.68-27.47-107.09-50.09-143.11z"
                            />
                            <path
                                id="path7071"
                                fill="#f6eeea"
                                d="m110.28 82.501c-10.04 11.163-23.77 28.539-32.83 38.309-14.586 22.94-23.306 37.17-34.937 56.4l-9.26 19.78c-2.168 16.42 7.857-23.71 48.406-71.55 14.355-23.27 23.371-31.93 33.251-36.204 15.96-18.886 59.29-16.682 89.66-18.521 15.55-10.436 31.87-15.907 49.67-11.786 12.79 1.527 38.79 19.524 77.41 46.931l-71.52-55.77c-31.36 1.896-55.15 11.357-82.5 17.258-22.86 1.731-45.59 4.564-67.35 15.153z"
                            />
                            <path
                                id="path7083"
                                fill="#502d16"
                                d="m87.897 157.76c5.697 8.31 15.203 5.05-6.17 34.24-17.797 20.99-27.217 21.88-42.613 22.79l13.866 1.86c14.01-4.2 25.915-18.95 32.349-27l14.184-20.2c15.147-7.31 25.827-22.43 35.437-38.59 17.54 4.06 37.47 2.81 53.75-1.54 15.29 6.79 30.43 9.59 36.91 34.53-2.62 17.55-7.18 32.52-13.17 45.58l23.89-3.92c12.26-13.91 7.36-3.33 16.45-48.81-6.93 29.99-12.1 37.22-22.73 49.13l-12.43 0.95c3.4-17.42 9.52-32.33 15.13-45.32 1.3-7.45 9.74-18.48-7.32-22.94-26.45-5-25.21-18.48-16.67-41.58-14.56 14.35-11.26 29.48-46.95 34.87-32.12 5.71-27.59-19.16-40.37-29.28 16.93 24.2 12.76 32.91-5.25 50.18-17.052 17.76-17.768 12.85-28.293 5.05z"
                            />
                        </g>
                        <g
                            id="layer2"
                        >
                            <g
                                id="g7176"
                                transform="translate(-.058031 .13059)"
                            >
                                <path
                                    id="path7136"
                                    stroke="#8a4a01" strokeWidth="5" fill="#e5cec1"
                                    d="m74.75 121.28c-4.997 6.54-9.59 12.99-13.719 19.31-8.975 13.74-15.771 26.84-19.781 38.72-4.989 13.13-21.59 25.51-1.25 34.53 17.363 3.44 25.641 3.88 57.656-43.78 0.845-0.49 1.634-1 2.434-1.5 0.72-0.44 1.38-0.9 2.07-1.34"
                                />
                                <g
                                    id="g7171"
                                >
                                    <path
                                        id="path7138"
                                        fill="#dabdac"
                                        d="m88.667 144.28c-1.649 1.04-5.405 3.18-7.105 4.1-1.729 15.96-8.509 26.86-13.406 37.78-10.372 16.37-35.327 35.94-35.579 12.63-8.234 14.39 7.637 17.36 20.392 15.96 16.705-1.56 36.266-32.37 42.773-47.79 1.836-0.49 3.383-1.77 5.038-2.4-1.544-2.91-2.5-5.76-4.918-8.18-1.707-4.76-3.97-7.17-7.195-12.1z"
                                    />
                                    <path
                                        id="path7142"
                                        fill="#f6eeea"
                                        d="m76.245 122.79c-24.065 31.93-32.664 48.24-34.166 53.8-1.654 5.51-19.53 29.35-7.566 34.3-9.738-7.63 12.034-30.07 12.325-34.38 0.396-5.86 13.27-25 32.251-48.09-1.035-1.83-1.983-3.71-2.844-5.63z"
                                    />
                                    <path
                                        id="path7144"
                                        fill="#502d16"
                                        d="m87.906 157.75c5.698 8.31 15.184 5.06-6.187 34.25-17.797 20.99-27.198 21.87-42.594 22.78l13.844 1.88c14.01-4.21 25.941-18.95 32.375-27l14.156-20.22c1.02-0.5 2.05-1 3.03-1.56-0.23-0.4-0.46-0.8-0.65-1.19-0.35-0.68-0.69-1.35-1.04-2-4.274 0.84-7.085-2.61-12.934-6.94z"
                                    />
                                </g>
                            </g>
                            <path
                                id="path4285"
                                fill="#f6eeea"
                                d="m254.66 233.61c-6.08 4.65-8.77 4.91-4.21 8 2.53 1.71 7.44 7.68 8 8.42 6.02-0.09 1.43 0.26-5.26-8.42-1.41-2.8-2.74-2.56 1.47-8z"
                            />
                            <path
                                id="path5111"
                                fill="#c6997f"
                                transform="matrix(-.99092 .13445 -.13445 -.99092 538.87 455.16)"
                                d="m254.66 233.61c-2.3 2.34-7.51 6.59-2.95 9.68 2.53 1.72 6.18 6 6.74 6.74 6.7 4.95-1.12-0.88-5.29-9.56-0.95-2.96 1.5-4.37 1.5-6.86z"
                            />
                        </g>
                        <g className="pen" transform="translate(-160,-210) scale(2)">
                            <line id="pen1" x1="80" y1="260" x2="190" y2="140" stroke="#000000" strokeWidth="25" ></line>
                            <line id="pen2" x1="195" y1="134.5" x2="208" y2="120.5" stroke="#000000" strokeWidth="25" ></line>
                            <polygon id="pen3" points="64.5,258.5 83,276 50,292" fill="#000000"></polygon>
                            <polygon id="pen4" points="64.5,258.5 83,276 89.5,268.5 71,251" fill="#ffffff" />
                            <polygon id="pen4" points="180.5,132 199,149 205,142 186.5,125" fill="#ffffff" />
                            <animateTransform attributeName="transform"
                                attributeType="XML" type="rotate" values="0;0;0;0;0;0;0;0;0;0;0;0;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2" dur="3s" repeatCount="indefinite" />
                            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="2 " to="2" dur="5s" repeatCount="indefinite" additive="sum" />
                            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="-95 -90; -100 95; -100 95" dur="3s" repeatCount="indefinite" additive="sum" />
                        </g>
                        <g
                            id="layer1"
                        >
                            <g
                                id="g7103"
                                transform="translate(.39235 1.1265)"
                            >
                                <path
                                    id="path6253"
                                    stroke="#502d16" strokeWidth="5" fill="#e5cec1"
                                    d="m269.07 192.17c-17.31 16.62-79.3 23.88-114.89 13.34-17.16 1.95-51.06-0.71-55.609 1.52-48.319 17.57-45.988 51.66 0.84 59.2 5.209 2.58 5.829 5.16 16.669 7.74 9.79 3.8 15.52 7.84 51.19 10.12 33.76 0.29 51.76 4.52 66.67 9.53 86.51 30.05 124.89 8.96 152.39-3.58"
                                />
                                <path
                                    id="path7044"
                                    fill="#dabdac"
                                    d="m224.91 241.33c-11.18 10.64-63.93 11.95-98.13 4.07-25-30.63-32.149 2-58.984-7.44-11.378 10.27 13.272 24.02 31.749 25.22 4.905 2.42 11.395 7.38 18.235 9.8 9.21 3.56 19.65 6.52 53.23 8.66 31.77 0.27 71.85 8.46 84.2 16.52 52.8 13.05 77.72 13.44 121.29-8.43-9.05-22.93-29.26-38.31-50.26-52.98l-20.64 2.55c-15.51 8.8-27.96 11.01-46.55 8.98-1.66-6.62-15.14-15.56-34.14-6.95z"
                                />
                                <path
                                    id="path7081"
                                    fill="#502d16"
                                    d="m70.097 255.82c23.095 8.81 35.493 14.47 42.123-7.63-17.728 39.37 60.88 27.59 85.36 32.27l92.95 21.32c26.6 3.45 28.41 5.56 51.77 0 24.53-4.56 18.34-5.57 35.77-14.67-14.61 16.69-20.15 23.83-68.18 23.53-21.47-0.7-65.93-16.81-101.75-23.32-23.44-5.16-50.06-5.77-82.83-10.26-4.36-0.14-26.351-9.11-27.446-9.55-1.077-0.44-16.634-1.46-27.767-11.69z"
                                />
                                <path
                                    id="path7085"
                                    fill="#f6eeea"
                                    d="m91.615 220.79c-9.07-1.39-20.772-3.83-27.532 6.66-2.218 4.63-5.115 16.78 3.686 26.37 8.89 8.05 25.398 9.82 32.541 9.5-12.492-0.65-25.149-2.11-31.91-14.13-2.751-17.14-1.781-27.1 23.215-28.4z"
                                />
                                <path
                                    id="path7087"
                                    fill="#f6eeea"
                                    d="m113.47 242.57c0.4-13.11-5.16-15.87-16.057-19.7 6.767 1.28 8.387 6.9 13.407 9.84 7.87 2.97-2.69 21.62 2.65 9.86z"
                                />
                            </g>
                            <path
                                id="path5126"
                                stroke="#ffffff" fill="#ffffff"
                                d="m88.577 213.25c4.42-3.6 9.486-4.86 14.653-5.28 7.41-0.16 5.08-0.54 17.54 0.96-16.39-4.14-15.91-2.56-20.07-2.19-6.659 0.49-5.292 3.89-12.123 6.51z"
                            />
                        </g>
                        <path
                            id="path7140"
                            fill="#dabdac"
                            d="m362.42 130.07l82.92 67.76c15.14 69.35 1.81 128.74-9.26 126.28-23.26-17.64-30.9-29.97-62.72-35.36l-11.79-21.46c22.71 16.53 49.5 18.47 50.94 5.89 11.99-62.68-27.47-107.09-50.09-143.11z"
                        />

                    </g>

                </g>

            </svg >


        </div >
    );
}

export default Dpv;