import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function SummonerMatchTile(props) {

  const {data} = props

  return (
    <Paper>
      <div className="paperInfoContainer" style={{background: data.summonerInfo.stats.win ?'#2796BC' : '#E9422E'}}>
        <div className="overallMatchInfo sectionContainer">
          <strong>Ranked Solo</strong>
          <span>--Timestamp--</span>
          <hr />
          {data.summonerInfo.stats.win ?
            <span>Victory</span>
            :
            <span>Defeat</span>
          }
          <span>{`${Math.trunc(data.gameDuration/60)}m ${data.gameDuration % 60}s`}</span>
        </div>
        <div className="championInfo sectionContainer">
          <div className="infoContainer">
            <img className="championImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.summonerInfo.championInfo.image.full}`} />
            <div className="infoBox">
              <div className="greyBox"></div>
              <div className="greyBox"></div>
              {/* <span>Sk1: {data.summonerInfo.spell1Id}</span> */}
              {/* <span>Sk2: {data.summonerInfo.spell2Id}</span> */}
            </div>
            <div className="infoBox">
              <div className="greyBox"></div>
              <div className="greyBox"></div>
              {/* <p>Champion Skill</p> */}
              {/* <p>Rune</p> */}
            </div>
          </div>
          <p>{data.summonerInfo.championInfo.name}</p>
        </div>
        <div className="playerScoreInfo sectionContainer">
          <span>{data.summonerInfo.stats.kills} / {data.summonerInfo.stats.deaths} / {data.summonerInfo.stats.assists}</span>
          <span>{((data.summonerInfo.stats.kills + data.summonerInfo.stats.assists) / data.summonerInfo.stats.deaths).toFixed(2)} KDA</span>
        </div>
        <div className="playerGameInfo sectionContainer">
          <span>Level {data.summonerInfo.stats.champLevel}</span>
          <span>{data.summonerInfo.stats.neutralMinionsKilled + data.summonerInfo.stats.totalMinionsKilled} ({((data.summonerInfo.stats.neutralMinionsKilled + data.summonerInfo.stats.totalMinionsKilled)/(data.gameDuration/60)).toFixed(1)}) CS</span>
        </div>
        <div className="playerItems sectionContainer">
          <div className="infoContainer">
            {data.summonerInfo.stats.item0 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item0}.png`}/>
            }
            {data.summonerInfo.stats.item1 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item1}.png`}/>
            }
            {data.summonerInfo.stats.item2 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item2}.png`}/>
            }
            {data.summonerInfo.stats.item3 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item3}.png`}/>
            }

            {data.summonerInfo.stats.item4 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item4}.png`}/>
            }
            {data.summonerInfo.stats.item5 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item5}.png`}/>
            }
            {data.summonerInfo.stats.item6 === 0 ?
              <div className="greyBox"></div>
              :
              <img className="itemImg" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${data.summonerInfo.stats.item6}.png`}/>
            }
          </div>
        </div>
        <div className="teamInfo sectionContainer">
          <div className="infoContainer">
            <div className="infoBox">
              {data.allParticipants.map(participant => {
                if (participant.teamId === 100) {
                  return (
                    <span>{participant.championId}</span>
                  )
                }
              })}
            </div>
            <div className="infoBox">
              {data.allParticipants.map(participant => {
                if (participant.teamId === 200) {
                  return (
                    <span>{participant.championId}</span>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}