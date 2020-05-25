export default {
  breakpoints: ['40em', '52em', '64em', '87.5em', '106.25'],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fonts: {
    body: '"itc-avant-garde-gothic-pro",sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
    paragraph: '"acumin-pro", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: ['40em', '52em', '1700px'],
  },
  layout: {
    container: {
      maxWidth: '1700px',
      mx: 'auto',
    },
  },
  colors: {
    text: '#000000',
    background: '#fff',
    headerbg: '#fff',
    title: '#000000',
    primary: '#B3B3B3',
    accent: '#2526E5',
    accentColor: '#fff',
    modes: {
      dark: {
        text: '#000',
        background: 'salmon',
        todobg: '#f4f7fc',
        primary: 'lightskyblue',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    header: {
      width: '100%',
      height: '64px',
      backgroundColor: 'headerbg',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 4,
      my: '40px',
    },
    footer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 4,
      py: [4, 5, 7],
      backgroundColor: 'accent',
    },
    main: {
      mt: 6,
    },
    navlink: {
      color: 'accent',
      textDecoration: 'none',
      display: 'inline-block',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '21px',
      ml: [6, 7],
      py: 2,
    },
    navlinkcta: {
      color: 'accent',
      textDecoration: 'none',
      display: 'inline-block',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '21px',
      ml: [5, 5, 6],
      py: 2,
      px: [4, 5, 6],
      border: '2px solid',
      colorColor: 'accent',
      borderRadius: '25px',
    },
    filterLink: {
      cursor: 'pointer',
      fontSize: '21px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    button: {
      color: 'text',
    },
    ctabutton: {
      color: 'text',
      borderRadius: '3px',
      height: '56px',
      display: 'inline-flex',
      letterSpacing: '1px',
      outline: 0,
      backgroundColor: 'accent',
      color: 'accentColor',
      p: 3,
      textTransform: 'uppercase',
      fontSize: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textRendering: 'optimizeSpeed',
      textDecoration: 'none',
      transition: 'background-color .2s,box-shadow .2s',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      border: 0,
      cursor: 'pointer',
      ':hover': {
        outline: 'none',
        textDecoration: 'none',
        boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)',
      },
    },
    input: {
      lineHeight: '2em',
      borderRadius: '3px',
      border: 0,
      display: 'inline-block',
      margin: '15px 0',
      padding: '0.2em 1em',
      fontSize: '1em',
    },
    h1: {
      variant: 'text.heading',
      fontSize: [4, 4, 5, 6, 7],
      mt: 5,
      mb: 3,
      fontWeight: '700',
    },
    subtitleh2: {
      variant: 'text.heading',
      color: 'primary',
      fontSize: 4,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      fontSize: 2,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}
