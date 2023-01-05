export const styles = {
  headerWrapper: {
    position: 'relative',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    backgroundColor: '#003d73',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  headerToolbar: {
    justifyContent: 'space-between',
    '@media (max-width: 499px)': {
      flexDirection: 'column',
    },
  },
  headerName: {
    '@media (max-width: 499px)': {
      textAlign: 'center',
    },
  },
  headerAvatar: {
    width: '80px',
    height: '80px',
    '@media (max-width: 499px)': {
      display: 'none',
    },
  },
};
