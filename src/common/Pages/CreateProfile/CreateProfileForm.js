import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';
import texts from '../../../resources/texts';
import Input from '../../Components/Input/Input';
import DatePicker from '../../Components/DatePicker';
import SimplySelect from '../../Components/Input/Select';

const WhitePaper = withStyles({
  root: {
    backgroundColor: 'transparent'
  }
})(MuiPaper);

export default ({
  errors,
  register,
  handleSubmit,
  setValue,
  unregister,
  handleCreateProfile
}) => {
  return (
    <form onSubmit={handleSubmit(handleCreateProfile)} id="create-profile">
      <WhitePaper elevation={0}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Box pl={1}>
              <Typography variant="h5">
                {texts.CREATE_PROFILE_SUBTITLE}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Surname"
              name="surname"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
          <Grid item>
            <DatePicker
              errors={errors}
              register={register}
              setValue={setValue}
              unregister={unregister}
              required="This is required field"
              name="birth"
              label="Date of Birth"
            />
          </Grid>

          <Grid item>
            <SimplySelect
              label="Gender"
              required="This is required field"
              errors={errors}
              options={[
                { value: 'female', name: 'Female' },
                { value: 'male', name: 'Male' },
                { value: 'noAnswer', name: 'Prefer not to answer' }
              ]}
              name="gender"
              register={register}
              setValue={setValue}
              unregister={unregister}
            />
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Postcode"
              name="postcode"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Email"
              name="email"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Mobile phone"
              name="surname"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Password"
              name="password"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
          <Grid item>
            <Input
              errors={errors}
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              inputRef={register({ required: 'This is required field' })}
            />
          </Grid>
        </Grid>
      </WhitePaper>
    </form>
  );
};
