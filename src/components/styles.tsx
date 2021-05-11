import background from "./images/string.jpg";

export const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    marginTop: 1,
  },
  rootFooter: {
    marginTop: "50vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundColor: "#282620",
  },

  divider: {
    marginTop: theme,
    marginBottom: theme,
  },

  rootFormCard: {
    minWidth: 275,
    maxWidth: 275,
    raised: true,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleFormCard: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  //Right Card
  //Header
  header: {
    // width: '100%',
    height: 200,
    margin: 10,
    backgroundImage: `url(${background})`,
  },
  // Lets get to Work Card
  titleWork: {
    backgroundColor: "#b7b2aa",
    // color: "#b7b2aa",
    maxHeight: "auto",
    maxWidth: "100%",
  },
});
