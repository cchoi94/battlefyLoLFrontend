import React from 'react'
import { getSummonerMatchList, getChampionInfo } from '../components/Requests/requests'
import CircularProgress from '@material-ui/core/CircularProgress';
import SummonerInput from '../components/summonerInputField'
import SummonerMatchTile from '../components/summonerMatchTile'
import '../styles/style.scss'

class Home extends React.Component{

  constructor() {
    super()
    this.state = {
      summonerName: null,
      summonerMatchList: null,
      showProgressLoader: false
    }
  }

  onHandleSummonerNameSubmit = (summonerName) => {  
    this.setState({
      summonerName,
      showProgressLoader: true
    }, () => {this.onFetchSummonerInfo()})
  }

  onFetchSummonerInfo = () => {
    (async () => {
      try {
        const summonerMatchList = await getSummonerMatchList(this.state.summonerName)
        for (const match of summonerMatchList.summonerMatchList) {
          const championInfo = await getChampionInfo(match.summonerInfo.championId)
          Object.assign(match.summonerInfo, championInfo)
          // Get Champion Image for each team
          // for (const participant of summonerMatchList.summonerMatchList.allParticipants) {
          //   const participantChampion = await getChampionInfo(participant.championId)
          //   Object.assign(participant, participantChampion)
          // }
        }
          this.setState({
            summonerMatchList: summonerMatchList.summonerMatchList
          }, () => {
            this.setState({
              showProgressLoader: false
            })
          })
      } catch (error) {
        alert(`Unable to find summoner ${this.state.summonerName}`);
        this.setState({
          showProgressLoader: false
        })
      }
    })()
  }

  render() {

    const {summonerName, summonerMatchList, showProgressLoader} = this.state


    return(
      <div style={{background: showProgressLoader ? '#848484' : null, height: '100vh'}}>
        <div className='searchBar'>
          <SummonerInput 
            onHandleSummonerNameSubmit = {this.onHandleSummonerNameSubmit}
          />
          {showProgressLoader && 
            <div className="progressLoader">
              <CircularProgress 
                size={64}
              />
            </div>
          }
          {summonerMatchList &&
            summonerMatchList.map((match, index) => {
              return (
                <div className="summonerMatchTile">
                  <SummonerMatchTile 
                    data={match}
                    key={index}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}


export default Home
