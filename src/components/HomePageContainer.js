import { Box, Grid, Typography, Link, Button } from "@material-ui/core";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { makeStyles } from "@material-ui/styles";
import { Contributions, useUserQuery } from "@openimis/fe-core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: theme.page,
}));

const HomePageContainer = (props) => {
  const { user } = useUserQuery();
  const classes = useStyles();
  const dashboardUrl = props.modulesManager.getConf("fe-home", "dashboardUrl", "https://google.com");

  if (!user) {
    return null;
  }

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Box mt={2}>
          <Typography variant="h4">
            Welcome {user.otherNames} {user.lastName}!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Link
          href={dashboardUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<EqualizerIcon />}
          >
            Go to dashboards
          </Button>
        </Link>
      </Grid>
      <Contributions contributionKey="home.HomePage.Blocks" user={user} />
    </Grid>
  );
};

export default HomePageContainer;
