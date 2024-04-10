import * as React from 'react';

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const Back = ({ ...props }: SvgProps) => {
  const { width = 348, height = 179, className = '' } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 349 179'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M-72.1409 40.1908V9.89673H-99.9219L-99.9219 9.43102H-72.1409V-20.8632H-99.9218V-21.329H-72.1409V-51.6228H-99.9218V-52.0885H-72.1409V-78.2227H-71.6752V-52.0885H-41.3814V-78.2227H-40.9157V-52.0885H-10.6197V-78.2227H-10.154V-52.0885H20.1384V-78.2227H20.6041V-52.0885L50.9001 -52.0885V-78.2227H51.3658V-52.0885H81.6598V-78.2227H82.1256V-52.0885H112.418V-78.2227H112.883V-52.0885H143.179V-78.2227H143.645V-52.0885H174.488V-78.2227H174.954V-52.0885H205.248V-78.2227H205.713V-52.0885H236.008V-78.2227H236.473V-52.0885H266.769V-78.2227H267.235V-52.0885H297.529V-78.2227H297.995V-52.0885L328.289 -52.0885V-78.2227H328.754V-52.0885H359.049V-78.2227H359.514V-52.0885H389.808V-78.2227H390.274V-52.0885H420.57V-78.2227H421.036V-52.0885H448.815V-51.6228H421.036V-21.329H448.815V-20.8632H421.036V9.43102H448.815V9.89674H421.036V40.1908H448.815V40.6565H421.036V70.9508H448.815V71.4165H421.036V101.711H448.815V102.177H421.036V133.02H448.815V133.486H421.036V163.78H448.815V164.245H421.036V194.54H448.815V195.006H421.036V225.301H448.815V225.767H421.036V256.062H448.815V256.528H421.036V282.109H420.57V256.528H390.274V282.109H389.808V256.528H359.514V282.109H359.049V256.528H328.754V282.109H328.289V256.528H297.995V282.109H297.529V256.528H267.235V282.109H266.769V256.528H236.473V282.109H236.008V256.528H205.713V282.109H205.248V256.528H174.954V282.109H174.488V256.528H143.645V282.109H143.179V256.528H112.883V282.109H112.418V256.528H82.1256V282.109H81.6598V256.528H51.3658V282.109H50.9001V256.528H20.6041V282.109H20.1384V256.528H-10.154V282.109H-10.6197V256.528H-40.9157V282.109H-41.3814V256.528H-71.6752V282.109H-72.1409V256.528H-99.9219L-99.9219 256.062H-72.1409V225.767H-99.9219L-99.9219 225.301H-72.1409V195.006H-99.9218V194.54H-72.1409V164.245H-99.9218V163.78H-72.1409V133.486H-99.9218V133.02H-72.1409V102.177H-99.9218V101.711H-72.1409V71.4165H-99.9218V70.9508H-72.1409V40.6565H-99.9219L-99.9219 40.1908H-72.1409ZM-71.6752 256.062H-41.3814V225.767H-71.6752V256.062ZM-40.9157 256.062H-10.6197V225.767H-40.9157V256.062ZM-10.154 256.062H20.1384V225.767H-10.154V256.062ZM20.6041 256.062H50.9001V225.767H20.6041V256.062ZM51.3658 256.062H81.6598V225.767H51.3658V256.062ZM82.1256 256.062H112.418V225.767H82.1256V256.062ZM112.883 256.062H143.179V225.767H112.883V256.062ZM143.645 256.062L174.488 256.062V225.767H143.645V256.062ZM174.954 256.062H205.248V225.767H174.954V256.062ZM205.713 256.062H236.008V225.767H205.713V256.062ZM236.473 256.062H266.769V225.767H236.473V256.062ZM267.235 256.062H297.529V225.767H267.235V256.062ZM297.995 256.062H328.289V225.767H297.995V256.062ZM328.754 256.062H359.049V225.767H328.754V256.062ZM359.514 256.062H389.808V225.767H359.514V256.062ZM390.274 256.062H420.57V225.767H390.274V256.062ZM420.57 195.006V225.301H390.274V195.006H420.57ZM389.808 195.006V225.301H359.514V195.006H389.808ZM359.049 195.006V225.301H328.754V195.006H359.049ZM328.289 195.006V225.301H297.995V195.006H328.289ZM297.529 195.006V225.301H267.235V195.006H297.529ZM266.769 195.006V225.301H236.473V195.006H266.769ZM236.008 195.006V225.301H205.713V195.006H236.008ZM205.248 195.006V225.301H174.954V195.006H205.248ZM174.488 195.006V225.301L143.645 225.301V195.006H174.488ZM143.179 195.006V225.301H112.883V195.006H143.179ZM112.418 195.006V225.301H82.1256V195.006H112.418ZM81.6598 195.006V225.301H51.3658V195.006H81.6598ZM50.9001 195.006V225.301H20.6041V195.006H50.9001ZM20.1384 195.006V225.301H-10.154V195.006H20.1384ZM-10.6197 195.006V225.301H-40.9157V195.006H-10.6197ZM-41.3814 195.006V225.301H-71.6752V195.006H-41.3814ZM-71.6752 194.54H-41.3814V164.245H-71.6752V194.54ZM-40.9157 194.54H-10.6197V164.245H-40.9157V194.54ZM-10.154 194.54H20.1384V164.245H-10.154V194.54ZM20.6041 194.54H50.9001V164.245H20.6041V194.54ZM51.3658 194.54H81.6598V164.245H51.3658V194.54ZM82.1256 194.54H112.418V164.245H82.1256V194.54ZM112.883 194.54H143.179V164.245H112.883V194.54ZM143.645 194.54L174.488 194.54V164.245H143.645V194.54ZM174.954 194.54H205.248V164.245H174.954V194.54ZM205.713 194.54H236.008V164.245H205.713V194.54ZM236.473 194.54H266.769V164.245H236.473V194.54ZM267.235 194.54H297.529V164.245H267.235V194.54ZM297.995 194.54H328.289V164.245H297.995V194.54ZM328.754 194.54H359.049V164.245H328.754V194.54ZM359.514 194.54H389.808V164.245H359.514V194.54ZM390.274 194.54H420.57V164.245H390.274V194.54ZM420.57 133.486V163.78H390.274V133.486H420.57ZM389.808 133.486V163.78H359.514V133.486H389.808ZM359.049 133.486V163.78H328.754V133.486H359.049ZM328.289 133.486V163.78H297.995V133.486H328.289ZM297.529 133.486V163.78H267.235V133.486H297.529ZM266.769 133.486V163.78H236.473V133.486H266.769ZM236.008 133.486V163.78H205.713V133.486H236.008ZM205.248 133.486V163.78H174.954V133.486H205.248ZM174.488 133.486V163.78H143.645V133.486H174.488ZM143.179 133.486V163.78H112.883V133.486H143.179ZM112.418 133.486V163.78H82.1256V133.486H112.418ZM81.6598 133.486V163.78H51.3658V133.486H81.6598ZM50.9001 133.486V163.78H20.6041V133.486H50.9001ZM20.1384 133.486V163.78H-10.154V133.486H20.1384ZM-10.6197 133.486V163.78H-40.9157V133.486H-10.6197ZM-41.3814 133.486V163.78H-71.6752V133.486H-41.3814ZM-71.6752 133.02H-41.3814V102.177H-71.6752V133.02ZM-40.9157 133.02H-10.6197V102.177H-40.9157V133.02ZM-10.154 133.02H20.1384V102.177H-10.154V133.02ZM20.6041 133.02H50.9001V102.177H20.6041V133.02ZM51.3658 133.02H81.6598V102.177H51.3658V133.02ZM82.1256 133.02H112.418V102.177H82.1256V133.02ZM112.883 133.02H143.179V102.177H112.883V133.02ZM143.645 133.02H174.488V102.177H143.645V133.02ZM174.954 133.02H205.248V102.177H174.954V133.02ZM205.713 133.02H236.008V102.177H205.713V133.02ZM236.473 133.02H266.769V102.177H236.473V133.02ZM267.235 133.02H297.529V102.177H267.235V133.02ZM297.995 133.02H328.289V102.177H297.995V133.02ZM328.754 133.02H359.049V102.177H328.754V133.02ZM359.514 133.02H389.808V102.177H359.514V133.02ZM390.274 133.02H420.57V102.177H390.274V133.02ZM420.57 71.4165V101.711H390.274V71.4165H420.57ZM389.808 71.4165V101.711H359.514V71.4165H389.808ZM359.049 71.4165V101.711H328.754V71.4165H359.049ZM328.289 71.4165V101.711H297.995V71.4165H328.289ZM297.529 71.4165V101.711H267.235V71.4165H297.529ZM266.769 71.4165V101.711H236.473V71.4165H266.769ZM236.008 71.4165V101.711H205.713V71.4165H236.008ZM205.248 71.4165V101.711H174.954V71.4165H205.248ZM174.488 71.4165V101.711H143.645V71.4165H174.488ZM143.179 71.4165V101.711H112.883V71.4165H143.179ZM112.418 71.4165V101.711H82.1256V71.4165H112.418ZM81.6598 71.4165V101.711H51.3658V71.4165H81.6598ZM50.9001 71.4165V101.711H20.6041V71.4165H50.9001ZM20.1384 71.4165V101.711H-10.154V71.4165H20.1384ZM-10.6197 71.4165V101.711H-40.9157V71.4165H-10.6197ZM-41.3814 71.4165V101.711H-71.6752V71.4165H-41.3814ZM-71.6752 70.9508H-41.3814V40.6565H-71.6752V70.9508ZM-40.9157 70.9508H-10.6197V40.6565H-40.9157V70.9508ZM-10.154 70.9508H20.1384V40.6565H-10.154V70.9508ZM20.6041 70.9508H50.9001V40.6565H20.6041V70.9508ZM51.3658 70.9508H81.6598V40.6565H51.3658V70.9508ZM82.1256 70.9508H112.418V40.6565H82.1256V70.9508ZM112.883 70.9508H143.179V40.6565H112.883V70.9508ZM143.645 70.9508L174.488 70.9508V40.6565L143.645 40.6565V70.9508ZM174.954 70.9508H205.248V40.6565H174.954V70.9508ZM205.713 70.9508H236.008V40.6565H205.713V70.9508ZM236.473 70.9508H266.769V40.6565H236.473V70.9508ZM267.235 70.9508H297.529V40.6565H267.235V70.9508ZM297.995 70.9508H328.289V40.6565H297.995V70.9508ZM328.754 70.9508H359.049V40.6565H328.754V70.9508ZM359.514 70.9508H389.808V40.6565H359.514V70.9508ZM390.274 70.9508H420.57V40.6565H390.274V70.9508ZM-71.6752 -21.329V-51.6228H-41.3814V-21.329H-71.6752ZM-40.9157 -21.329V-51.6228H-10.6197V-21.329H-40.9157ZM-10.154 -21.329V-51.6228L20.1384 -51.6228V-21.329H-10.154ZM20.6041 -21.329V-51.6228H50.9001V-21.329H20.6041ZM51.3658 -21.329V-51.6228H81.6598V-21.329H51.3658ZM82.1256 -21.329V-51.6228H112.418V-21.329H82.1256ZM112.883 -21.329V-51.6228H143.179V-21.329H112.883ZM143.645 -21.329V-51.6228L174.488 -51.6228V-21.329L143.645 -21.329ZM174.954 -21.329V-51.6228H205.248V-21.329H174.954ZM205.713 -21.329V-51.6228H236.008V-21.329H205.713ZM236.473 -21.329V-51.6228H266.769V-21.329H236.473ZM267.235 -21.329V-51.6228H297.529V-21.329H267.235ZM297.995 -21.329V-51.6228H328.289V-21.329H297.995ZM328.754 -21.329V-51.6228L359.049 -51.6228V-21.329H328.754ZM359.514 -21.329V-51.6228H389.808V-21.329H359.514ZM390.274 -21.329V-51.6228H420.57V-21.329H390.274ZM420.57 -20.8632H390.274V9.43102H420.57V-20.8632ZM389.808 -20.8632H359.514V9.43102H389.808V-20.8632ZM359.049 -20.8632H328.754V9.43102H359.049V-20.8632ZM328.289 -20.8632H297.995V9.43102H328.289V-20.8632ZM297.529 -20.8632H267.235V9.43102H297.529V-20.8632ZM266.769 -20.8632H236.473V9.43102H266.769V-20.8632ZM236.008 -20.8632H205.713V9.43102H236.008V-20.8632ZM205.248 -20.8632H174.954V9.43102H205.248V-20.8632ZM174.488 -20.8632L143.645 -20.8632V9.43102H174.488V-20.8632ZM143.179 -20.8632H112.883V9.43102H143.179V-20.8632ZM112.418 -20.8632H82.1256V9.43102H112.418V-20.8632ZM81.6598 -20.8632H51.3658V9.43102H81.6598V-20.8632ZM50.9001 -20.8632H20.6041V9.43102H50.9001V-20.8632ZM20.1384 -20.8632H-10.154V9.43102H20.1384V-20.8632ZM-10.6197 -20.8632H-40.9157V9.43102H-10.6197V-20.8632ZM-41.3814 -20.8632H-71.6752V9.43102H-41.3814V-20.8632ZM-71.6752 40.1908V9.89673H-41.3814V40.1908H-71.6752ZM-40.9157 40.1908V9.89673H-10.6197V40.1908H-40.9157ZM-10.154 40.1908V9.89673H20.1384V40.1908H-10.154ZM20.6041 40.1908V9.89673H50.9001V40.1908H20.6041ZM51.3658 40.1908V9.89673H81.6598V40.1908H51.3658ZM82.1256 40.1908V9.89673H112.418V40.1908H82.1256ZM112.883 40.1908V9.89673H143.179V40.1908H112.883ZM143.645 40.1908V9.89673L174.488 9.89674V40.1908H143.645ZM174.954 40.1908V9.89674H205.248V40.1908H174.954ZM205.713 40.1908V9.89674H236.008V40.1908H205.713ZM236.473 40.1908V9.89674H266.769V40.1908H236.473ZM267.235 40.1908V9.89674H297.529V40.1908H267.235ZM297.995 40.1908V9.89674H328.289V40.1908H297.995ZM328.754 40.1908V9.89674H359.049V40.1908H328.754ZM359.514 40.1908V9.89674H389.808V40.1908H359.514ZM390.274 40.1908V9.89674H420.57V40.1908H390.274Z'
        fill='url(#paint0_radial_279_142900)'
        fillOpacity='0.41'
      />
      <defs>
        <radialGradient
          id='paint0_radial_279_142900'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(180.345 90.6662) rotate(90) scale(93.3333 138.238)'
        >
          <stop stopColor='#C881FF' />
          <stop offset='0.271335' stopColor='#C881FF' stopOpacity='0.79' />
          <stop offset='0.53504' stopColor='#AF47FF' stopOpacity='0.46' />
          <stop offset='1' stopColor='#070707' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Back;