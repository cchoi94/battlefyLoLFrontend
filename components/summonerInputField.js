import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TextFields(props) {
  const [values, setValues] = React.useState({
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!values.summonerName || values.summonerName == '') {
      alert('Please add a summoner name')
    } else {
      props.onHandleSummonerNameSubmit(values.summonerName)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" className="summonerInput">
      <TextField
        id="standard-with-placeholder"
        label="Summoner name"
        placeholder="Enter summoner name"
        value={values.name}
        onChange={handleChange('summonerName')}
        margin="normal"
        style={{width: '75%', marginRight: 16}}
      />
      <Button 
        variant="contained" 
        color="primary"
        type="submit"
        style={{width: '20%'}}
        disabled={!values}>
          Search
      </Button>
    </form>
  )
}