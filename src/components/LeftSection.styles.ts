export const styles = {
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItemNotAbout: {
    paddingLeft: '0px',
    columnGap: '30px',
    alignItems: 'flex-start',
    flexDirection: 'row',
    '@media (max-width: 767px)': {
      flexDirection: ' column',
    },
  },
  listItemText: {
    width: '100%',
  },
  listItemTextJob: {
    fontWeight: 'bold',
  },
  listItemTextCompany: {
    fontStyle: 'italic',
  },
  listItemTextNotAbout: {
    flex: '0 0 100px',
    textDecoration: 'none',
    '@media (max-width: 767px)': {
      flex: '0 0 auto',
      textDecoration: 'underline',
    },
  },
  listItemTitle: {
    fontWeight: 'bold',
    color: '#003d73',
  },
  listItemContent: {
    textAlign: 'justify',
  },
};
