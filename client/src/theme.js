const appTheme = {
    /**
     * iconSize
     */
    
      iconSize:{
        xxxxs:"12px",
        xxxs:"15px",
        xxs:"18px",
        xs:"21px",
        sm:"25px",
        md:"28px",
        lg:"31px",
        xl:"35px",
        xxl:"39px",
        xxxl:"45px",
        xxxxl:"50px",
        xxxxxl:"100px",
        xxxxxxl:"150px",
        xxxxxxxl:"200px",
      },
    
      /**
       * Font
       */
      font: {
        family: "'Open Sans', sans-serif",
        weight: {
          light: "300",
          normal: "400",
          bold: "600",
          bolder: "900",
        },
        size: {
          xtiny:'8px',
          tiny: "11px",
          xxs: "13px",
          xs: "14px",
          sm: "16px",
          md: "18px",
          lg: "22px",
          xl: "34px",
          xxl: "45px",
          xxxl: "56px",
        },
        stretch: {
          normal: "normal",
        },
        style: {
          normal: "normal",
        },
        newSize: {
          lg: "22px",
        },
      },
    
      /**
       * Colors
       */
    
      colors: {
        SectionBackgroundColor:"#232425",
        inputBgColor:"#23293b",
        bgColor:"#050510",
        lightTextColor:"#607290",
        headerBackground:"#050510",
        skyColor:"#02adf1",
        walletButtonColor: `linear-gradient(
          180deg,
          rgba(255, 84, 79, 1) 0%,
          rgba(254, 193, 64, 1) 64%
        )`,
        textColor:"#fff",
        green:'#85EA75',
        black:'#000',
        darkOrange:'#ff8254',
        pink:"#d2538a",
        // new
        body: "#000",
        input: "#474747",
        inputbgDark: "#272526c4",
        orange: "#FF8144",
        white:"#fff"
      },
    
      /**
       * Shadows
       */
      shadows: {
        sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        md: "rgba(0, 0, 0, 0.3) 0px 1px 8px 0px",
        lg: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        xl: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      },
    
      /**
       * Breakpoints
       */
      screen: {
        xxs:"440px",
        xs: "540px",
        sm: "640px",
        md: "1007px",
        lg: "1150px",
        xl: "1230px",
        xxl: "1300px",
      },
    
      /**
       * Spacing
       */
      spacing: {
        none: 0,
        tiny: "7px",
        xxxs: "2px",
        xxs: "5px",
        xs: "10px",
        sm: "20px",
        md: "30px",
        lg: "40px",
        xl: "60px",
        xxl: "120px",
        xxxl: "200px",
      },
      newspacing: {
        none:0,
        xxs: "4px",
        xs: "14px",
        sm: "18px",
        md: "24px",
        lg: "38px",
        xl: "54px",
        xxl: "78px",
      },
    
      /**
       * Radius
       */
      radius: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "15px",
        lg: "21px",
        xl: "25px",
        xxl: "29px",
      },
      newradius: {
        xxs: "6px",
        xs: "10px",
        sm: "14px",
        md: "18px",
        xl: "24px",
        xxl: "32px",
      },
    
      /**
       * zIndex
       */
      zIndex: {
        xs: 10,
        sm: 20,
        md: 30,
        lg: 40,
        xl: 50,
        xxl: 100,
      },
    
      /**
       * cursor
       */
      cursor: {
        notallowed: "not-allowed",
        pointer: "pointer",
      },
    };

export default appTheme;