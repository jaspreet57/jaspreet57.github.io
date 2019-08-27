import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  .water {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom,#0097aa,#016976,#004049,#002024,#000809);
    z-index: -200;
  }

  #background-wrap {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -190;
  }

  @keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -20%;
    }
  }

  @keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% {
        margin-left:50px;
    }
  }


.x1 {
	animation: animateBubble 17s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: -5%;
  top: 5%;
  transform: scale(0.6);
  will-change: margin-left;
}

.x2 {
	animation: animateBubble 12s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 5%;
	top: 80%;
	transform: scale(0.4);
  will-change: margin-left;
}

.x3 {
	animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 10%;
	top: 40%;
	transform: scale(0.7);
  will-change: margin-left;
}

.x4 {
	animation: animateBubble 16s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 20%;
	top: 0;
	transform: scale(0.3);
  will-change: margin-left;
}

.x5 {
	animation: animateBubble 22s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 30%;
	top: 50%;
	transform: scale(0.5);
  will-change: margin-left;
}

.x6 {
	animation: animateBubble 14s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 50%;
	top: 0;
	transform: scale(0.8);
  will-change: margin-left;
}

.x7 {
	animation: animateBubble 12s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 65%;
	top: 70%;
	transform: scale(0.4);
  will-change: margin-left;
}

.x8 {
	animation: animateBubble 16s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 80%;
	top: 10%;
	transform: scale(0.3);
  will-change: margin-left;
}

.x9 {
	animation: animateBubble 22s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 90%;
	top: 50%;
	transform: scale(0.6);
  will-change: margin-left;
}

.x10 {
	animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 80%;
	top: 80%;
	transform: scale(0.3);
  will-change: margin-left;
}

/* OBJECTS */

.bubble {
	border-radius: 50%;
	box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), inset 0px 5px 15px 5px rgba(255, 255, 255, 1);
	font-size: 40px;
  color: red;
  height: 50px;
	position: absolute;
	width: 50px;
}

.bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

	border-radius: 50%;
	box-shadow: inset 0 10px 15px rgba(255, 255, 255, 0.3);
	
	content: "";
  height: 45px;
	left: 5px;
	position: absolute;
	width: 45px;
}


`;

const AnotherStyle = styled.div`
    color: black;
`;

export {
    StyledWrapper,
    AnotherStyle,
}