const selectColourStyle = {
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    ':hover': {
      // backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default selectColourStyle;